-- Race Your Flag: tester accounts.
-- Run once in Supabase: SQL Editor -> New query -> paste everything -> Run. Safe to run again.
--
-- Testers can get past the "Coming soon" screen and play the private game as normal players.
-- Unlike developers (devs.sql) they do NOT get the Developer mode switch.

create table if not exists public.fd_testers (
  uid    uuid primary key references auth.users(id) on delete cascade,
  added  timestamptz not null default now()
);
alter table public.fd_testers enable row level security;
revoke all on public.fd_testers from anon, authenticated;

-- true when the signed-in player is on the tester list
create or replace function public.fd_is_tester() returns boolean
  language sql stable security definer set search_path = public
  as $$ select exists (select 1 from public.fd_testers where uid = auth.uid()) $$;
revoke all on function public.fd_is_tester() from public;
grant execute on function public.fd_is_tester() to authenticated;

-- To add a tester: they open the game and sign in once, then put their email between the quotes and run:
-- insert into public.fd_testers (uid) select id from auth.users where email = 'tester@example.com' on conflict do nothing;
-- To add several at once:
-- insert into public.fd_testers (uid) select id from auth.users where email in ('a@example.com','b@example.com') on conflict do nothing;
-- To see the list:   select t.added, u.email from public.fd_testers t join auth.users u on u.id = t.uid order by t.added;
-- To remove one:     delete from public.fd_testers where uid = (select id from auth.users where email = 'tester@example.com');
