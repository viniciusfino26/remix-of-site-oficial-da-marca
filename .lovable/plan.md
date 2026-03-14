

## Plano: Renomear "SkinSafe 8K" → "SkinSafe8K" e "Antivandalismo 13K" → "Antivandalismo13K"

Remover o espaço antes do número em todas as ocorrências visíveis ao usuário.

### Arquivos afetados:

**1. `src/components/Header.tsx`** (linha 40)
- `'SkinSafe 8K'` → `'SkinSafe8K'`

**2. `src/components/SchemaOrg.tsx`** (linhas 173, 220)
- `Antivandalismo 13K` → `Antivandalismo13K`

**3. `src/pages/Automotivo.tsx`** (linha 34)
- `'SkinSafe 8K, Antivandalismo,'` → `'SkinSafe8K, Antivandalismo,'`

**4. `src/pages/AutomotivoHubSeguranca.tsx`** (linhas 26-27, 33)
- `'INSULFILM™ SkinSafe 8K'` → `'INSULFILM™ SkinSafe8K'`
- `'INSULFILM™ Antivandalismo 13K'` → `'INSULFILM™ Antivandalismo13K'`
- FAQ: `SkinSafe 8K e Antivandalismo 13K` → `SkinSafe8K e Antivandalismo13K`

**5. `src/pages/SkinSafe8K.tsx`** (linha 113)
- Breadcrumb label: `'SkinSafe 8K'` → `'SkinSafe8K'`

**6. `src/pages/Antivandalismo13K.tsx`** (~10 ocorrências)
- Schema, title, OG, H1, breadcrumb, iframe title, WhatsApp msgs, compat desc

**7. `src/pages/Antivandalismo13KProposta.tsx`** (~5 ocorrências)
- H1, iframe title, WhatsApp msgs

**8. `src/i18n/locales/pt.json`** (~10 ocorrências)
- nav labels, product names, FAQ answers, warranty, CTA text

**9. `src/i18n/locales/en.json`** + **`es.json`** — mesmas chaves

