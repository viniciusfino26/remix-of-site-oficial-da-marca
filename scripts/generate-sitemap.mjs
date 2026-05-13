// Gera public/sitemap.xml extraindo rotas estáticas do src/App.tsx.
// Ignora rotas com `<Navigate ... replace />` (redirects), curinga `*`,
// e paths legados que competem com URLs canônicas migradas (dual-público).
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BASE_URL = 'https://www.insulfilm.com.br';

// ─────────────────────────────────────────────
// BLOCKLIST: paths a excluir do sitemap.
// Estes não viraram Navigate redirect (a página antiga ainda renderiza) mas
// estão SEMÂNTICAMENTE substituídos pelas canônicas dual-público em /pt/...
// Manter no sitemap competiria com as canônicas e diluiria PageRank.
// Aliás: a página continua acessível para visitantes — só não é "promovida".
// ─────────────────────────────────────────────
const BLOCKED_PREFIXES = [
  // Padrão antigo dual-público (substituído por /pt/arquitetonico/...)
  '/arquitetonico/residencial',
  '/arquitetonico/comercial',
  // Páginas /sobre redundantes com /marca/...
  '/sobre',
  // Página legal duplicada com /marca/marca-registrada
  '/legal/marca-registrada',
];

const isBlocked = (path) => BLOCKED_PREFIXES.some((prefix) => path === prefix || path.startsWith(prefix + '/'));

const appSrc = readFileSync(resolve(ROOT, 'src/App.tsx'), 'utf8');

const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{<([^/>\s]+)/g;
const routes = new Set();
let m;
while ((m = routeRegex.exec(appSrc)) !== null) {
  const [, path, element] = m;
  if (path === '*') continue;
  if (element === 'Navigate') continue;
  if (path.includes(':')) continue;
  if (isBlocked(path)) continue;
  routes.add(path);
}

const today = new Date().toISOString().split('T')[0];

const priority = (p) => {
  if (p === '/') return '1.0';
  // URLs canônicas dual-público têm prioridade alta (são as principais entrada de tráfego)
  if (p.startsWith('/pt/arquitetonico/')) return '0.8';
  const depth = p.split('/').filter(Boolean).length;
  if (depth === 1) return '0.9';
  if (depth === 2) return '0.8';
  if (depth === 3) return '0.7';
  return '0.6';
};

const changefreq = (p) => {
  if (p === '/') return 'weekly';
  return 'monthly';
};

const urls = [...routes].sort().map((p) => `  <url>
    <loc>${BASE_URL}${p === '/' ? '' : p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq(p)}</changefreq>
    <priority>${priority(p)}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(resolve(ROOT, 'public/sitemap.xml'), xml);
console.log(`✓ sitemap.xml gerado com ${routes.size} URLs (${BLOCKED_PREFIXES.length} prefixos bloqueados)`);
