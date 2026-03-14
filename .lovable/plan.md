

## Plano: Reescrever ArqHubSeguranca.tsx e ArqHubDecorativo.tsx

Ambos seguirão o padrão exato do `ArqHubSolar.tsx` já implementado.

**Arquivos alterados:** apenas `src/pages/ArqHubSeguranca.tsx` e `src/pages/ArqHubDecorativo.tsx`

### ArqHubSeguranca.tsx

1. **Breadcrumb** — Home › Arquitetônico › Proteção e Segurança
2. **Hero** via `PageHero` — título "Proteção e Segurança Arquitetônica", badge com ícone Shield, texto sobre retenção de estilhaços, antivandalismo e resistência a impacto
3. **Grid 2 cards** (`md:grid-cols-2`):
   - ISSF 4000 — Película 4 mil para retenção de estilhaços → `/arquitetonico/seguranca/issf4000`
   - ISSF 7000 — Película 7 mil reforçada anti-invasão → `/arquitetonico/seguranca/issf7000`
4. **ParallaxBreak** com stats de segurança
5. **FAQ** — Accordion com 4 perguntas (o que é, diferença entre 4 e 7 mil, normas, durabilidade)
6. **CTA** — "Solicitar Visita Técnica" com WhatsApp

### ArqHubDecorativo.tsx

1. **Breadcrumb** — Home › Arquitetônico › Decorativo
2. **Hero** via `PageHero` — título "Películas Decorativas", badge com ícone Layers, texto sobre privacidade e design
3. **Grid 3 cards** (`md:grid-cols-3`):
   - Jateado — Efeito vidro jateado com privacidade → `/arquitetonico/decorativo/jateado`
   - Whiteout — Branco opaco total → `/arquitetonico/decorativo/whiteout`
   - Blackout — Preto opaco total → `/arquitetonico/decorativo/blackout`
4. **ParallaxBreak** com stats decorativas
5. **FAQ** — Accordion com 3 perguntas (reversibilidade, diferença jateado vs whiteout, aplicações)
6. **CTA** — "Ver Catálogo Completo" com WhatsApp

### O que NÃO será alterado
App.tsx, nenhuma PDP, nenhum outro arquivo

