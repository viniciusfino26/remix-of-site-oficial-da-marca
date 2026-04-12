

## Plan: Restructure "Marca" Menu + Create 7 Brand Pages

### 1. Update Header Menu

In `src/components/Header.tsx`, replace the current `brand` menu items with 7 new options:

```
1. Sobre a INSULFILM™ → /marca/sobre
2. O que é INSULFILM → /marca/o-que-e
3. Marca Registrada → /marca/marca-registrada
4. Autenticidade e Padrão → /marca/autenticidade
5. Tecnologia → /marca/tecnologia
6. Presença da Marca → /marca/presenca
7. História → /marca/historia
```

Keep existing routes `/quem-somos`, `/franquias`, `/carreiras`, `/anti-pirataria` alive via redirects.

### 2. Create 7 New Page Files

Each page follows the site's existing visual pattern (motion animations, glass-cards, carbon gradients, Helmet SEO):

| File | Route | Content Focus |
|---|---|---|
| `MarcaSobre.tsx` | `/marca/sobre` | Brand intro, distinction block, official channels, GBP links |
| `MarcaOQueE.tsx` | `/marca/o-que-e` | Popular usage clarification, distinction block |
| `MarcaRegistrada.tsx` | `/marca/marca-registrada` | IP protection, confusion/association scope |
| `MarcaAutenticidade.tsx` | `/marca/autenticidade` | Technical standard, application process |
| `MarcaTecnologia.tsx` | `/marca/tecnologia` | Technology applied to glass, benefit categories |
| `MarcaPresenca.tsx` | `/marca/presenca` | Official channels listing |
| `MarcaHistoria.tsx` | `/marca/historia` | Origin story, linguistic phenomenon, legal nature |

Each page includes: Helmet with SEO meta, Hero section, content blocks, "Bloco de Distinção e Proteção" (where specified), and legal footer.

### 3. Update Routes in App.tsx

- Add 7 new routes under `{/* Marca */}` section
- Import all 7 new page components
- Add redirects: `/quem-somos` → `/marca/sobre`, `/anti-pirataria` → `/marca/autenticidade`

### 4. Implementation Order

1. Create all 7 page files (parallel writes)
2. Update `Header.tsx` menu structure
3. Update `App.tsx` with routes and redirects

