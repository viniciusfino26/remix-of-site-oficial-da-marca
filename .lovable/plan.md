## Plan: Rewrite 9 Solar Architectural PDPs + Create Phantom Gloss PDP

All 9 existing solar PDPs (~137 lines each) will be fully rewritten to the new comprehensive structure. One new Phantom Gloss PDP will be created. The Phantom Matte PDP content was not provided in the document (cut off), so it will not be included.

---

### Structure per PDP (matching AutomotivoDark pattern)

Each page follows this layout:

1. **Helmet** — Title, meta description, canonical, OG, Twitter, JSON-LD Product schema
2. **Hero** — Carbon gradient, badge (Performance/Premium/SPF), H1 as headline, subtitle
3. **Trademark block** — Mandatory disclaimer after hero
4. **Positioning section** — H2 + narrative paragraphs about the product
5. **Specs cards** — 4 glass-cards with icon/label/value
6. **Tech table** — Full ficha técnica with all versions
7. **ParallaxBreak** — Key stats
8. **Benefits section** — Checklist with CheckCircle icons
9. **Differentials section** — H3 blocks explaining technical advantages
10. **Comparative table** (where applicable) — vs other products in line
11. **Use cases / "Para qual projeto"** — Specific application guidance
12. **Reinforcement block** — Brand authority text
13. **CTA final** — `/contato` + upgrade CTA where applicable
14. **Legal footer** — Trademark notice

All CTAs point to `/contato` (no WhatsApp links). No route changes needed.

---

### Files to rewrite (9 files)


| #   | File                   | Product            | Line        | Tech                 | Key Spec                     |
| --- | ---------------------- | ------------------ | ----------- | -------------------- | ---------------------------- |
| 1   | `Clear70.tsx`          | Clear70            | Performance | Nano Ceramic         | 81% IR, 72% luz, 5yr         |
| 2   | `GrigioInvertito.tsx`  | Grigio Invertito   | Performance | Vapor-Coated Al      | 75% IR, 15% luz, 3yr         |
| 3   | `Petrolio.tsx`         | Petrolio           | Performance | Hybrid               | 42% IR, 3 versions, 3yr      |
| 4   | `ReflessoDArgento.tsx` | Reflesso d'Argento | Performance | Vapor-Coated Al      | 80% IR, pergolado, 3yr       |
| 5   | `Orizzonte70.tsx`      | Orizzonte70        | Premium     | Premium Nano Ceramic | 93% IR, 68% luz, 10yr        |
| 6   | `Ultravioletti90.tsx`  | Ultravioletti90    | Premium     | UV Concentrated      | 88% luz, incolor, 5yr        |
| 7   | `Naturale.tsx`         | Naturale           | Premium     | Neutral Sputtered    | 4 versions, 81% IR max, 10yr |
| 8   | `MetallicoArgento.tsx` | Metallico Argento  | Premium     | Vapor-Coated Al      | 86% IR, 3 versions, 10yr     |
| 9   | `SpecchiatoBronzo.tsx` | Specchiato Bronzo  | Premium     | Sputtered Nichrome   | 72% IR, 3 versions, 10yr     |


### File to create (1 file)


| #   | File               | Product       | Route                          |
| --- | ------------------ | ------------- | ------------------------------ |
| 10  | `PhantomGloss.tsx` | Phantom Gloss | `/arquitetonico/phantom-gloss` |


### Route addition in App.tsx

- Add route: `/arquitetonico/phantom-gloss` → `PhantomGloss`
- Import new component

### Re-export files (already exist, no changes needed)

`ArqClear70.tsx`, `ArqGrigio.tsx`, `ArqPetrolio.tsx`, `ArqReflesso.tsx`, `ArqOrizzonte.tsx`, `ArqUV90.tsx`, `ArqNaturale.tsx`, `ArqMetallico.tsx`, `ArqSpecchiato.tsx` — all re-export from the main files.

---

### Key content changes per product

**Clear70**: Add positioning narrative, tech table (single version), benefits checklist, differentials (nano ceramic, 72% light, low reflectivity, stability), "Para qual projeto" section with upgrade note to Premium line.

**Grigio Invertito**: Add inverted mirroring positioning, tech table (single version 15%), differentials (inverted mirroring, 75% IR, natural light), positioning note vs Petrolio and Metallico Argento.

**Petrolio**: Add hybrid technology narrative, tech table (3 versions: 35/20/05), comparative table vs Clear70 and Grigio Invertito, differentials (hybrid, no mirror effect, optical clarity).

**Reflesso d'Argento**: Add "inspired by Metallico Argento" positioning, pergolado compatibility, differentials (80% IR, accessible mirrored aesthetic), upgrade CTA to Metallico Argento.

**Orizzonte70**: Add "category apart" positioning, comparative table vs Clear70, differentials (93% IR, last-gen nano ceramic, 10yr stability, full electronic compatibility).

**Ultravioletti90**: Add "invisible protection" positioning, specific use cases (museums, clinics, showrooms, panoramic residences), note about low IR (16%) with redirect to Orizzonte70/Naturale for thermal needs.

**Naturale**: Add 4-version positioning, "how to choose" guide table, differentials (ion bombardment, scalability, 81% IR at version 20).

**Metallico Argento**: Add max performance positioning, comparative table vs Reflesso and Grigio Invertito, 3 versions (50/35/20), differentials (86% IR, 80% total energy, mirrored finish).

**Specchiato Bronzo**: Add balanced reflectivity positioning, 3 versions (35/25/15), differentials (Sputtered Nichrome, comfort-focused, bronze tone, pergolado compatible).

**Phantom Gloss**: New page — SPF positioning, problem/solution narrative, 5-layer composition, technical specs (180μ, temperature range), compatible materials list. Content from provided prompt (cut off at materials section — will complete with logical continuation).

---

### Implementation order

Due to the volume (10 files, each ~250-350 lines), this will be implemented in batches:

1. Performance line: Clear70, Grigio Invertito, Petrolio, Reflesso d'Argento
2. Premium line: Orizzonte70, Ultravioletti90, Naturale, Metallico Argento, Specchiato Bronzo
3. Phantom Gloss + App.tsx route