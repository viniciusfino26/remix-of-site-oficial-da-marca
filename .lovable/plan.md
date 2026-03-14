

## Plano: Reescrever os 3 hubs automotivos

**Arquivos alterados:** `AutomotivoHubSolar.tsx`, `AutomotivoHubSeguranca.tsx`, `AutomotivoHubPPF.tsx`

Todos seguirão o padrão do `ArqHubSolar.tsx`: Breadcrumb + PageHero + Grid de cards + ParallaxBreak + FAQ (Accordion) + CTA.

### AutomotivoHubSolar.tsx (reescrita completa)

O layout atual usa seções alternadas com imagens por produto. Será substituído por:

1. **Breadcrumb** — Home › Automotivo › Películas Solares
2. **PageHero** — título "Películas Solares Automotivas INSULFILM™", badge "Proteção Solar", texto sobre rejeição de calor e UV
3. **Grid 5 cards** (`md:grid-cols-3`) ordenados do básico ao premium, cada um com tag de tecnologia:
   - Dark (Standard Dyed)
   - Eclipse (Nano Carbon)
   - VIP (Carbon Plus)
   - Polariz Ultra (Hybrid Ceramic)
   - Matrix (True Ceramic — topo de linha)
4. **Seção comparativo** — tabela simples com 3 atributos (Rejeição IR, Proteção UV, Tecnologia) por produto
5. **ParallaxBreak** com stats
6. **FAQ** — 5 perguntas sobre películas solares automotivas
7. **CTA** — "Agendar Instalação" com WhatsApp (`5511976136911`)

### AutomotivoHubSeguranca.tsx (reescrita)

O layout atual usa filtros + ProductShowcase. Será simplificado para:

1. **Breadcrumb** — Home › Automotivo › Proteção e Segurança
2. **PageHero** — título "Películas de Proteção e Segurança Automotiva", badge "Proteção e Segurança"
3. **Grid 4 cards** (`md:grid-cols-2`):
   - SkinSafe 8K → `/automotivo/seguranca/skinsafe8k`
   - Antivandalismo 13K → `/automotivo/seguranca/antivandalismo13k`
   - SkudoGuard → `/automotivo/seguranca/skudoguard`
   - SkudoUltra → `/automotivo/seguranca/skudoultra`
4. **ParallaxBreak** com stats
5. **FAQ** — 4 perguntas sobre películas de segurança
6. **CTA** — "Fale com Especialista" com WhatsApp

### AutomotivoHubPPF.tsx (reescrita)

1. **Breadcrumb** — Home › Automotivo › PPF
2. **PageHero** — título "PPF — Proteção de Pintura", badge "Paint Protection Film"
3. **Seção explicativa** — o que é PPF e diferença para película solar
4. **Grid 2 cards** (`sm:grid-cols-2`):
   - Phantom 6 mil → `/automotivo/ppf/phantom-6mil`
   - Phantom 8 mil → `/automotivo/ppf/phantom-8mil`
5. **ParallaxBreak** com stats
6. **FAQ** — 4 perguntas sobre PPF
7. **CTA** — "Solicitar Orçamento PPF" com WhatsApp

### O que NÃO será alterado
App.tsx, nenhuma PDP, nenhum outro arquivo.

