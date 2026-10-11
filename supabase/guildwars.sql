-- Race Your Flag: guild wars, matchups kept on the server so both guilds see the same war.
-- Run once in Supabase: SQL Editor -> New query -> paste everything -> Run. Safe to run again.
-- Needs leaderboard.sql (it reads guild points from fd_scores).

-- One row per guild per week: who it is fighting. Each pairing is stored both ways (A->B and B->A).
create table if not exists public.fd_wars (
  pkey     text not null check (pkey ~ '^[0-9A-Za-z-]{2,12}$'),
  gid      text not null check (gid ~ '^g[a-z0-9]{6,14}$'),
  rival    text not null check (rival ~ '^g[a-z0-9]{6,14}$'),
  made_at  timestamptz not null default now(),
  primary key (pkey, gid)
);
alter table public.fd_wars enable row level security;
drop policy if exists "wars are public" on public.fd_wars;
create policy "wars are public" on public.fd_wars for select to anon, authenticated using (true);
revoke all on public.fd_wars from anon, authenticated;
grant select on public.fd_wars to anon, authenticated;

-- A guild's war for a week: its rival and both guilds' points (members' race points + guild battle bonus).
-- If the guild has no rival yet and it is the current week, it is paired with the unpaired guild
-- that raced this week and is closest in points. If nobody is free, no row comes back and the
-- game shows a CPU rival until a real guild turns up.
create or replace function public.fd_war(p_key text, p_gid text)
returns table(rival text, name text, tag text, col text, us bigint, them bigint)
language plpgsql security definer set search_path = public as $$
declare
  v_rival text;
  v_now   text;
  v_mine  bigint;
begin
  if p_gid is null or p_gid !~ '^g[a-z0-9]{6,14}$' or p_key is null or p_key !~ '^[0-9A-Za-z-]{2,12}$' then return; end if;
  select w.rival into v_rival from public.fd_wars w where w.pkey = p_key and w.gid = p_gid;
  if v_rival is null then
    -- only pair during the current week (the newest weekly key on the board), never for past weeks
    select max(s.pkey) into v_now from public.fd_scores s where s.period = 'w';
    if v_now is null or p_key <> v_now then return; end if;
    -- the guild must have raced this week
    select sum(s.pts + s.gb) into v_mine from public.fd_scores s where s.period = 'w' and s.pkey = p_key and s.gid = p_gid;
    if v_mine is null then return; end if;
    -- one pairing at a time per week, so two guilds can't grab the same rival
    perform pg_advisory_xact_lock(hashtext('fd_war:' || p_key));
    select w.rival into v_rival from public.fd_wars w where w.pkey = p_key and w.gid = p_gid;
    if v_rival is null then
      select g.gid into v_rival from (
        select s.gid, sum(s.pts + s.gb) as p from public.fd_scores s
         where s.period = 'w' and s.pkey = p_key and s.gid is not null and s.gid <> p_gid
           and s.gid ~ '^g[a-z0-9]{6,14}$'
           and not exists (select 1 from public.fd_wars w where w.pkey = p_key and w.gid = s.gid)
         group by s.gid) g
       order by abs(g.p - v_mine), g.gid limit 1;
      if v_rival is null then return; end if;
      insert into public.fd_wars(pkey, gid, rival) values (p_key, p_gid, v_rival), (p_key, v_rival, p_gid)
        on conflict do nothing;
    end if;
  end if;
  return query
    select v_rival,
           (select max(s.gn) from public.fd_scores s where s.period = 'w' and s.pkey = p_key and s.gid = v_rival)::text,
           (select max(s.gt) from public.fd_scores s where s.period = 'w' and s.pkey = p_key and s.gid = v_rival)::text,
           (select max(s.gc) from public.fd_scores s where s.period = 'w' and s.pkey = p_key and s.gid = v_rival)::text,
           coalesce((select sum(s.pts + s.gb) from public.fd_scores s where s.period = 'w' and s.pkey = p_key and s.gid = p_gid), 0)::bigint,
           coalesce((select sum(s.pts + s.gb) from public.fd_scores s where s.period = 'w' and s.pkey = p_key and s.gid = v_rival), 0)::bigint;
end $$;

grant execute on function public.fd_war(text, text) to anon, authenticated;

-- To see this week's wars:  select * from fd_wars order by made_at desc;
-- To undo a pairing:        delete from fd_wars where pkey = '<week>' and (gid = '<guild id>' or rival = '<guild id>');
