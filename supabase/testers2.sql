-- Race Your Flag: tester list by EMAIL (fixes testers who were added before they had signed in).
-- Run once in Supabase: SQL Editor -> New query -> paste everything -> Run. Safe to run again.
-- After this, add testers by email at any time; they get in as soon as they sign in with that email.

create table if not exists public.fd_tester_emails (
  email  text primary key,
  added  timestamptz not null default now()
);
alter table public.fd_tester_emails enable row level security;
revoke all on public.fd_tester_emails from anon, authenticated;

-- true when the signed-in player is on either tester list (old uid list or the new email list)
create or replace function public.fd_is_tester() returns boolean
  language sql stable security definer set search_path = public
  as $$ select exists (select 1 from public.fd_testers where uid = auth.uid())
            or exists (select 1 from public.fd_tester_emails
                       where lower(email) = lower(coalesce(auth.jwt()->>'email','')) ) $$;
revoke all on function public.fd_is_tester() from public;
grant execute on function public.fd_is_tester() to authenticated;

-- To add testers (put the real emails between the quotes, then run just this line):
-- insert into public.fd_tester_emails (email) values ('a@example.com'), ('b@example.com') on conflict do nothing;
-- To see the list:  select * from public.fd_tester_emails order by added;
-- To remove one:    delete from public.fd_tester_emails where lower(email) = lower('a@example.com');
