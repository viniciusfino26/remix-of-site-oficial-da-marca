## Fase 2 — Status: Concluída ✅

Todas as correções críticas foram aplicadas:
- PhantomGloss → 5 anos (PPF Auto)
- PhantomArquitetonico → SPF
- 4 PDPs Security Auto com `specs` no TLDR semântico
- Rótulos "Rejeição de IR" + "Até X%" harmonizados
- Nomes técnicos (Sputtered Alumínio / Sputtered Neutra / Nano Cerâmica) padronizados
- "micras" e "Até X anos" preservados conforme regra

---

## Fase 3 — FAQ Schema + BreadcrumbList nos 19 PDPs

### Por que essa é a próxima alavanca

Hoje os PDPs têm **Product Schema + TLDR** (resposta direta). Falta o que mais move ranking em 2026 para LLMs e Google AI Overviews:

1. **FAQPage Schema (JSON-LD)** — único schema que aparece literalmente nos resultados do Google como "rich snippet" expansível, e é a fonte preferida de ChatGPT/Perplexity/Gemini para responder perguntas técnicas.
2. **BreadcrumbList Schema** — substitui a URL por trilha clicável no SERP ("Insulfilm › Automotivo › Solar › Matrix"), aumentando CTR em 15-20%.

Ambos são **invisíveis ao usuário** (só JSON-LD no `<head>`), então não tocam em layout, copy ou design.

### O que será feito

**Para cada um dos 19 PDPs primários**, adicionar dois novos blocos `<script type="application/ld+json">`:

#### 3.1 — BreadcrumbList Schema
Trilha hierárquica baseada na URL canônica de cada PDP:
- Automotivo → Solar/Segurança/PPF → [Produto]
- Arquitetônico → Residencial/Comercial → Solar/Segurança/SPF/Decorativo → [Produto]

#### 3.2 — FAQPage Schema
3-5 perguntas por PDP, derivadas dos dados **já existentes** no TLDR e Specs (sem inventar conteúdo novo). Padrão por categoria:

**Solar (Auto + Arq):**
- "Qual a rejeição de calor (IR) da [Produto]?"
- "Quantos anos de garantia tem a [Produto]?"
- "A [Produto] é homologada pelo Contran?" (só auto)
- "Qual a transmissão de luz visível (VLT) da [Produto]?"

**Segurança Auto (4K/8K/13K):**
- "Qual a espessura da [Produto] em micras?"
- "A [Produto] resiste a tentativas de quebra?"
- "Quantos anos de garantia tem a [Produto]?"

**PPF / SPF (Phantom):**
- "Qual a espessura do PPF/SPF Phantom?"
- "Por quanto tempo o Phantom é garantido?"
- "O Phantom Gloss tem propriedade auto-regenerativa?"

**Decorativo Arq (Blackout/Whiteout/Jateado):**
- "Qual a privacidade oferecida pela [Produto]?"
- "Por quantos anos a [Produto] é garantida?"

### Garantia de consistência
As respostas do FAQ serão **strings idênticas** ao que já existe no TLDR/Specs/Schema Product — mantendo o "Single Source of Truth" estabelecido na Fase 2.

### Arquivos afetados (19 PDPs)

**Automotivo (8):** Matrix, Eclipse, PolarizUltra, PhantomGloss, Antivandalismo13K, SkinSafe8K, SkudoGuard, SkudoUltra
**Arquitetônico Solar (10):** Clear70, Naturale, Orizzonte70, GrigioInvertito, MetallicoArgento, ReflessoDArgento, Petrolio, SpecchiatoBronzo, Ultravioletti90, PhantomArquitetonico

### Não será feito
- Nenhuma mudança em copy visível, layout, hero, CTAs ou imagens.
- Nenhuma mudança em rotas ou componentes existentes.
- Sem nova UI de FAQ visível (apenas Schema invisível). Se o usuário quiser FAQ visível também, é uma fase 4 separada.

### Resultado esperado
- Rich snippets expansíveis no Google (FAQ accordion no SERP).
- Breadcrumb visível nos resultados em vez de URL crua.
- ChatGPT/Perplexity passam a citar valores exatos diretamente do FAQ schema.
- Zero risco visual — toda mudança é em `<head>` JSON-LD.