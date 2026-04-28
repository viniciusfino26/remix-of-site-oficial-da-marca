# Auditoria SEO + GEO 2026 — INSULFILM™

Confrontei seu framework com o estado atual do projeto. Resultado por categoria com status **(✅ pronto / ⚠️ parcial / ❌ ausente / 🚫 não se aplica)**.

---

## 1. Fundação técnica

| Item | Status | Observação |
|---|---|---|
| Site rápido | ⚠️ | Vite + SWC + lazy via React Router já bom; falta `React.lazy` por rota (95 páginas carregam no bundle inicial) e otimização de imagens (WebP/AVIF + `<img loading="lazy">`). |
| Arquitetura limpa | ✅ | URLs hierárquicas excelentes (`/arquitetonico/residencial/solar/clear70`). |
| Páginas rastreáveis + indexáveis | ❌ | **SPA puro sem SSR/prerender** — Google indexa, mas LLMs (GPT, Perplexity, Gemini Search) e bots leves veem HTML vazio. **Bloqueador #1 para GEO.** |
| Links internos fortes | ⚠️ | Header/Footer cobrem hubs; faltam blocos contextuais "ver também / produtos relacionados / FAQ relacionada" nas PDPs. |
| Hierarquia temática clara | ✅ | Silos Marca / Automotivo / Arquitetônico bem definidos. |

**Faltando também:** `sitemap.xml`, `robots.txt` aponta para sitemap inexistente, `index.html` ainda com `<title>Lovable App</title>` e og:image genérico, `SchemaOrg.tsx` **existe mas não está montado no `App.tsx`** (schemas nunca são injetados em produção).

---

## 2. Mapeamento de intenção de busca

| Item | Status |
|---|---|
| Palavras-chave focadas em problemas | ❌ Páginas são institucionais/produto, sem páginas tipo "como reduzir calor no carro", "vidro quebrou e agora?". |
| Páginas de comparação + alternativas | ❌ Nenhuma `/comparativo/matrix-vs-vip`, `/insulfilm-vs-llumar`, `/qual-pelicula-escolher`. |
| Perguntas de cauda longa | ⚠️ FAQ existe mas concentrada em `/faq`; falta espalhar Q&A nas PDPs. |

---

## 3. Estratégia de conteúdo

| Item | Status |
|---|---|
| Clusters temáticos | ⚠️ Clusters de **produto** existem; clusters **editoriais** (conforto térmico, segurança veicular, eficiência energética) inexistem. |
| Páginas programáticas em escala | ❌ Oportunidade enorme: `/insulfilm/[modelo-de-carro]`, `/pelicula-residencial/[bairro-sp]`, `/centro-autorizado/[cidade]`. |
| Atualizações consistentes | ❌ Sem blog/news/changelog. |

---

## 4. Construção de autoridade

| Item | Status |
|---|---|
| Backlinks | 🚫 Off-site — não se resolve no código. |
| RP digital + citações | 🚫 Off-site. |
| Menções de marca | ⚠️ No site há `LegalDisclaimer` e `AntiPirataria`; pode-se reforçar com página `/imprensa` e kit de mídia. |
| Discussões em comunidades | 🚫 Off-site. |

---

## 5. Otimização para respostas de IA (GEO) — **maior oportunidade**

| Item | Status |
|---|---|
| `llms.txt` | ✅ Existe e é bom. Falta expandir com FAQ canônica e linkar de `index.html`. |
| Formatação amigável a LLM | ⚠️ Conteúdo dentro de `framer-motion` + componentes; texto existe no DOM mas precisa de mais H2/H3 semânticos e listas. |
| Respostas diretas, pergunta-primeiro | ❌ PDPs começam por hero estético, não por "O que é a Matrix? Resposta em 2 frases". |
| Citar fontes + estatísticas | ⚠️ Há números técnicos; faltam citações a fontes externas (CONTRAN, Inmetro, ABNT). |
| Resumos concisos extraíveis | ❌ Falta bloco "TL;DR" / "Resumo da página" / `<dl>` de specs no topo de cada PDP. |
| **Schemas JSON-LD** | ❌ **Componente existe mas NÃO está renderizado.** Crítico. |

---

## 6. Distribuição

🚫 Reddit / Quora / X / LinkedIn / fóruns — **off-site, fora do escopo do código.** O site pode apenas oferecer botões de compartilhamento e snippets prontos.

---

## 7. Rastreamento

| Item | Status |
|---|---|
| GA4 + GSC | ⚠️ `Analytics.tsx` tem placeholders `GTM-XXXXXXX` / `G-XXXXXXXXXX` — **IDs não preenchidos**. RD Station OK. |
| Visibilidade em respostas IA | ❌ Sem ferramenta — requer serviço externo (Profound, Otterly, AthenaHQ). |

---

## 8. Ciclo de execução

🚫 Auditoria semanal e "CMO de IA" — processo operacional fora do código (mas pode-se criar dashboard interno).

---

## Plano de implementação proposto (faseado)

### Fase 1 — Correções bloqueadoras (alto impacto, baixo esforço)
1. **Montar `<SchemaOrg />` no `App.tsx`** dentro do `BrowserRouter` (já está pronto e não roda).
2. **Corrigir `index.html`**: title, description, og:image, og:url, lang="pt-BR", canonical.
3. **Gerar `public/sitemap.xml`** com as ~95 rotas (script Node em build, ou estático).
4. **Preencher GA4_ID e GTM_ID reais** em `Analytics.tsx` (preciso dos IDs).
5. **Adicionar prerender estático** via `vite-plugin-prerender` ou `react-snap` para que LLMs e crawlers leves vejam HTML completo. **(Crítico para GEO.)**

### Fase 2 — GEO/LLM-first nas PDPs
6. Criar componente `<TLDR />` (resumo 2-3 frases + tabela de specs `<dl>`) e plugar no topo de cada PDP.
7. Padrão "pergunta-primeiro": cada seção começa com `<h2>` em forma de pergunta ("Quanto reduz o calor?", "Qual a garantia?").
8. Expandir `llms.txt` com a FAQ canônica completa e adicionar `<link rel="alternate" type="text/llms" href="/llms.txt">` no head.

### Fase 3 — Conteúdo editorial e intenção
9. Criar `/blog` (cluster temático) com 6 pilares iniciais (calor, segurança, eficiência energética, decoração, legislação, manutenção).
10. Criar páginas de comparação: `/comparativo/matrix-vs-polariz`, `/qual-pelicula-para-meu-carro` (quiz), `/insulfilm-vs-genericos`.
11. Páginas programáticas: `/centro-autorizado/[bairro]` para cada bairro de SP, alimentando geo-intent.

### Fase 4 — Links internos e crawlability
12. Componente `<RelatedProducts />` + `<RelatedFAQ />` no fim de cada PDP.
13. Breadcrumb visual (`<Breadcrumb>` ui já existe) em todas as rotas profundas.

### Fase 5 — Performance
14. `React.lazy` + `Suspense` para todas as 95 rotas.
15. Conversão de imagens para WebP/AVIF + `loading="lazy"` + `<picture>`.

### Fora do escopo de código (informativo)
- Backlinks, RP, posts em Reddit/Quora/X/LinkedIn — execução off-site.
- Monitoramento de visibilidade em respostas de IA — requer ferramenta externa paga.
- Auditoria semanal — processo humano/agente externo.

---

## Detalhes técnicos

- `SchemaOrg.tsx` precisa ser montado **dentro** de `<BrowserRouter>` pois usa `useLocation`.
- `vite-plugin-prerender-spa` ou migração para `vite-react-ssg` é a abordagem mais limpa para prerender sem mudar React Router.
- Sitemap pode ser gerado por script `scripts/generate-sitemap.ts` rodado no `prebuild`, lendo as rotas do `App.tsx`.
- TL;DR + specs `<dl>` devem ficar **fora** de `motion.div` com `initial={{opacity:0}}` para garantir que LLMs vejam mesmo sem JS.
- Conteúdo dentro de `framer-motion` que começa com `opacity: 0` aparece no DOM, mas alguns crawlers leves descartam — preferir `whileInView` que mantém o conteúdo no HTML inicial.

---

## Próximos passos sugeridos

Posso executar a **Fase 1 inteira em uma única rodada** (montar SchemaOrg, corrigir index.html, gerar sitemap, lazy-load das rotas). Para Analytics, preciso dos IDs reais de GA4 e GTM (ou confirmar para deixar desativado).

Quer que eu comece pela Fase 1, ou prefere priorizar diferente (ex.: pular para Fase 2 GEO primeiro)?
