create extension if not exists "uuid-ossp";

create table if not exists public.employees (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  email text unique not null,
  department text,
  role text,
  access_level text default 'standard',
  created_at timestamptz default now()
);

create table if not exists public.access_logs (
  id uuid primary key default uuid_generate_v4(),
  employee_id uuid references public.employees(id) on delete set null,
  event_type text not null,
  status text not null,
  created_at timestamptz default now()
);

create table if not exists public.security_alerts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  detail text,
  severity text default 'medium',
  created_at timestamptz default now()
);
