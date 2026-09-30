import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";

const ALLOWED = [
  "https://www.insulfilm.com.br",
  "https://insulfilm.com.br",
  "https://sitenovoinsulfilm.lovable.app",
];
const cors = (origin: string | null) => {
  const ok =
    origin &&
    (ALLOWED.includes(origin) ||
      /^https:\/\/[a-z0-9-]+\.lovable\.app$/.test(origin) ||
      /^https:\/\/[a-z0-9-]+\.lovableproject\.com$/.test(origin) ||
      /^http:\/\/localhost:\d+$/.test(origin));
  return {
    "Access-Control-Allow-Origin": ok ? origin! : ALLOWED[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };
};

const Body = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().regex(/^\+?[\d\s()\-]{10,20}$/),
  consent: z.literal(true),
  company_url: z.string().max(0).optional().or(z.literal("")),
  elapsed_ms: z.number().int().min(0).max(86_400_000).optional(),
});

const MAX_PER_HOUR = 5;

async function sha256(s: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  const headers = { ...cors(req.headers.get("origin")), "Content-Type": "application/json" };
  if (req.method === "OPTIONS") return new Response("ok", { headers });
  if (req.method !== "POST") return new Response(JSON.stringify({ error: "method" }), { status: 405, headers });

  let raw: unknown;
  try { raw = await req.json(); } catch { return new Response(JSON.stringify({ error: "invalid" }), { status: 400, headers }); }
  const parsed = Body.safeParse(raw);
  if (!parsed.success) return new Response(JSON.stringify({ error: "invalid" }), { status: 400, headers });
  const d = parsed.data;

  // Honeypot / envio rápido demais: responde ok sem gravar
  if (d.company_url || (d.elapsed_ms !== undefined && d.elapsed_ms < 3000)) {
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  const ipHash = await sha256(ip + "|fleet-lead");
  const since = new Date(Date.now() - 3600_000).toISOString();

  const { count, error: cErr } = await supabase
    .from("lead_rate_limits").select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash).gte("created_at", since);
  if (cErr) return new Response(JSON.stringify({ error: "server" }), { status: 500, headers });
  if ((count ?? 0) >= MAX_PER_HOUR) return new Response(JSON.stringify({ error: "rate_limited" }), { status: 429, headers });

  await supabase.from("lead_rate_limits").insert({ ip_hash: ipHash });
  const { error } = await supabase.from("fleet_leads").insert({
    name: d.name, email: d.email, phone: d.phone, consent: true,
  });
  if (error) return new Response(JSON.stringify({ error: "server" }), { status: 500, headers });

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
});
