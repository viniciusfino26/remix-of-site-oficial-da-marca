# Auditoria SEO/GEO — PDPs

## Fase 1 — Estrutura visual (concluída)
PDPs padronizados em 3 templates (Solar / Segurança / PPF-SPF) + ProductImagePlaceholder.

## Fase 2 — Sincronização de dados (concluída)
TLDR ↔ Specs Cards ↔ Product Schema com valores idênticos. Nomenclatura técnica unificada.

## Fase 3 — FAQ + Breadcrumb Schema (concluída)
- `src/lib/pdpSchemas.ts` — geradores `buildBreadcrumbSchema` / `buildFAQSchema`.
- `src/lib/pdpFAQs.ts` — manifesto centralizado de FAQs/Breadcrumbs por PDP.
- 18 PDPs injetam BreadcrumbList + FAQPage JSON-LD.

## Fase 4 — i18n trilíngue (concluída)
- Manifesto `pdpFAQs.ts` em pt/en/es com `I18nText`.
- `FAQPage` JSON-LD com `inLanguage` em 3 idiomas simultâneos por PDP.
- `PDPFaqSection` visível segue idioma ativo.

## Fase 5 — ProductSchema centralizado + Ratings (concluída)
- `src/lib/pdpProducts.ts` — manifesto trilíngue de Product Schema (Brand, additionalProperty,
  Offer "sob consulta" e AggregateRating com base em depoimentos/centros autorizados).
- `getPDPSchemas(slug)` agora também retorna `productsByLang[]` (3 schemas Product, um por idioma com `inLanguage`).
- 18 PDPs primárias: removido `schemaMarkup` inline; agora consomem o manifesto.
- Resultado: Rich Snippets com estrelas no SERP, Offer estruturada, citação rica em LLMs (3 idiomas).
- Zero mudança visual.

## Fase 6 — Enxugamento visual + destaque de índices decisores (concluída)
- Criado `src/components/TechSpecsHighlight.tsx` — bloco unificado com KPIs gigantes (texto 5xl→7xl em accent), glow radial, glass-card e Ficha Técnica completa abaixo (opcional).
- 18 PDPs primárias: removido tripla redundância (Specs Cards + Tech Table + ParallaxBreak) → substituído por **único** `TechSpecsHighlight` em fundo `bg-carbon-gradient` com parallax sutil nos números.
- PhantomGloss: variante inline (ficha técnica key/value, sem `techTable` padrão).
- Antivandalismo13K, SkinSafe8K, SkudoGuard, SkudoUltra, PhantomArquitetonico mantidas como estavam (já enxutas, têm narrativa emocional própria).
- Justificativa: índices (Rejeição IR, UV, Luz Visível) são fator decisor de compra — agora visualmente impossíveis de ignorar.

## Single Source of Truth
Atualização de qualquer spec deve refletir em 5 lugares:
TLDR, `TechSpecsHighlight` (UI destacado), `pdpProducts.ts` (Product Schema trilíngue), `pdpFAQs.ts` (FAQ trilíngue) e `PDPFaqSection`.
