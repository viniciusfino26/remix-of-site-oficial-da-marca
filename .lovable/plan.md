

## Plano: Renomear "VIP" para "Vip" em todo o site

Alterar todas as ocorrências visíveis de "VIP" (maiúsculo) para "Vip" nos textos exibidos ao usuário. Nomes de variáveis/componentes/arquivos permanecem inalterados.

### Arquivos e alterações:

**1. `src/components/Header.tsx`** (linha 31)
- `'VIP'` → `'Vip'`

**2. `src/pages/AutomotivoVip.tsx`** (~10 ocorrências)
- Schema: `"INSULFILM™ VIP"` → `"INSULFILM™ Vip"`
- Title/OG tags: `"INSULFILM™ VIP"` → `"INSULFILM™ Vip"`
- Breadcrumb label: `'VIP'` → `'Vip'`
- H1: `INSULFILM™ VIP` → `INSULFILM™ Vip`
- Corpo: `A INSULFILM™ VIP utiliza...` → `A INSULFILM™ Vip utiliza...`
- H2: `Escolha a película VIP` → `Escolha a película Vip`
- WhatsApp msg: `película INSULFILM™ VIP` → `película INSULFILM™ Vip`

**3. `src/pages/VIP.tsx`** (mesmas alterações do AutomotivoVip)
- Schema, title, OG, H1, corpo, H2, WhatsApp msg

**4. `src/components/SchemaOrg.tsx`** (linhas 165, 220)
- `linha VIP` → `linha Vip`

**5. `src/i18n/locales/pt.json`** — `"INSULFILM™ LT VIP"` → `"INSULFILM™ LT Vip"`, textos FAQ com "VIP" → "Vip", warranty "LT VIP" → "LT Vip"

**6. `src/i18n/locales/en.json`** — idem

**7. `src/i18n/locales/es.json`** — idem

**Não alterados:** nomes de arquivos, variáveis, rotas/URLs, ordem de produtos, conteúdo não-VIP.

