# Auditoria SEO/GEO — PDPs

## Fase 1 — Estrutura visual (concluída)
PDPs padronizados em 3 templates (Solar / Segurança / PPF-SPF) + ProductImagePlaceholder.

## Fase 2 — Sincronização de dados (concluída)
TLDR ↔ Specs Cards ↔ Product Schema com valores idênticos. Nomenclatura técnica unificada.

## Fase 3 — FAQ + Breadcrumb Schema (concluída)
- `src/lib/pdpSchemas.ts` — geradores `buildBreadcrumbSchema` / `buildFAQSchema`.
- `src/lib/pdpFAQs.ts` — manifesto centralizado com 18 PDPs (3-4 FAQs cada, valores espelhando TLDR/Specs).
- 18 PDPs primários injetam `BreadcrumbList` + `FAQPage` JSON-LD invisíveis no `<Helmet>`.
- Resultado: rich snippets expansíveis no Google, breadcrumbs no SERP, citações precisas em ChatGPT/Perplexity/Gemini.
- Zero mudança visual.

## Single Source of Truth
Atualização futura de qualquer spec deve refletir em 4 lugares: TLDR, Specs Cards, Product Schema (no PDP) e `pdpFAQs.ts` (FAQ schema).
