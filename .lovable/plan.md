

## Plan: Rewrite /arquitetonico + /residencial + /empresarial

Three pages to rewrite following the Automotivo hub pattern (Hero → Text block → ProductBanners with expanded text → Cards → FAQ → CTA).

---

### 1. Rewrite `src/pages/Arquitetonico.tsx` (full rewrite)

**Structure (mirrors Automotivo.tsx pattern):**
- **SEO/Helmet**: Updated title, meta description, OG tags, Twitter cards, and triple JSON-LD schema (CollectionPage + ItemList with 4 items including Phantom SPF + FAQPage with 4 questions)
- **Hero**: Using existing PageHero component with H1: "O vidro que deveria proteger você está te custando caro todos os dias." Badge: "DIVISÃO ARQUITETÔNICA — INSULFILM™"
- **Text section** (below hero): H2 "Películas arquitetônicas INSULFILM™ — para quem mora bem e trabalha bem" + 3 paragraphs of vibe-selling copy + trademark disclaimer in bold
- **4x ProductBanner** sections, each followed by an expanded text block:
  1. Solar (right/blue) → expanded H2 + Performance/Premium lines listing
  2. Seguranca (left/orange) → expanded H2 + ISSF products
  3. Decorativo (right/blue) → expanded H2 + Jateado/Whiteout/Blackout
  4. Phantom SPF (left/gray) → expanded H2 + Gloss/Matte details
- **Residencial/Empresarial cards** (2-col grid): H2 "Para residências ou para o seu espaço comercial?" with two glass-cards linking to /residencial and /empresarial
- **GEO/LLM semantic block**: Trademark/provenance text
- **FAQ section**: 6 questions with Accordion component
- **CTA final**: Two buttons → /contato + /rede/lojas-oficiais
- **Footer disclaimer**: Trademark notice

No images needed — ProductBanner without `imageSrc` renders the carbon gradient background (existing behavior).

---

### 2. Rewrite `src/pages/Residencial.tsx` (full rewrite, ~600 lines → ~400 lines)

**Structure:**
- **SEO/Helmet**: Title "INSULFILM™ Residencial | Películas para Janelas e Fachadas de Casa", breadcrumb schema (Home > Arquitetônico > Residencial)
- **Hero** via PageHero: H1 "Você investiu no imóvel. O sol está cobrando o preço todo dia."
- **Text section**: H2 about comfort vs visual, trademark disclaimer
- **4x ProductBanner + expanded text**:
  1. Solar Residencial (right/blue) → Clear70, Orizzonte70, Reflesso/Specchiato for pergolados
  2. Privacidade (left/orange) → Grigio Invertito, Petrolio
  3. Proteção UV (right/blue) → Ultravioletti90
  4. Phantom SPF (left/gray) → Gloss/Matte
- **CTA final**: /contato + /rede/lojas-oficiais
- **Footer disclaimer**

---

### 3. Rewrite `src/pages/Empresarial.tsx` (full rewrite, ~138 lines → ~400 lines)

**Structure:**
- **SEO/Helmet**: Title "INSULFILM™ Empresarial | Películas para Escritórios e Espaços Comerciais", breadcrumb schema (Home > Arquitetônico > Empresarial)
- **Hero** via PageHero: H1 "Postos de trabalho perto do vidro. Temperatura fora do padrão. Conta de energia que não fecha."
- **Text section**: H2 about OPEX/NR17/productivity, trademark disclaimer
- **4x ProductBanner + expanded text**:
  1. Solar Comercial (right/blue) → Clear70, Orizzonte70, Petrolio + NR17 compliance
  2. Privacidade Corporativa (left/orange) → Grigio Invertito for meeting rooms
  3. Segurança Comercial (right/blue) → ISSF4000/ISSF7000
  4. Phantom SPF Comercial (left/gray) → showrooms/reception
- **CTA final**: /contato + /rede/lojas-oficiais
- **Footer disclaimer**

---

### Technical notes

- All three pages use the same components: `PageHero`, `ProductBanner`, `Accordion`, `Card`, `Button`, `Badge`, `motion` variants
- No new components needed — reuses existing `ProductBanner` (without `imageSrc` = carbon gradient fallback)
- No route changes needed — all 3 routes already exist in App.tsx
- All CTAs point to internal routes (`/contato`, `/rede/lojas-oficiais`), no WhatsApp links
- All copy is hardcoded in Portuguese (no i18n keys for these pages, matching Automotivo pattern)
- Existing PDPs and other pages are untouched

