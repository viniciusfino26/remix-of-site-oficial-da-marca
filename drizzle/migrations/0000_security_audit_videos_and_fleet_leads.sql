DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

DROP POLICY IF EXISTS "Users can update own files in videos" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete own files in videos" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload to own folder in videos" ON storage.objects;

CREATE POLICY "Admins insert videos" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update videos" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'))
  WITH CHECK (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete videos" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.fleet_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  source text NOT NULL DEFAULT 'pagina-frota',
  segment text NOT NULL DEFAULT 'B2B-Frotas',
  consent boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.fleet_leads TO service_role;
ALTER TABLE public.fleet_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins read fleet leads" ON public.fleet_leads
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
GRANT SELECT ON public.fleet_leads TO authenticated;

CREATE TABLE public.lead_rate_limits (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  ip_hash text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX lead_rate_limits_ip_time ON public.lead_rate_limits (ip_hash, created_at);
GRANT ALL ON public.lead_rate_limits TO service_role;
ALTER TABLE public.lead_rate_limits ENABLE ROW LEVEL SECURITY;