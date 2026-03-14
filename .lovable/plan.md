

## Plano: Corrigir URLs dos produtos no Header.tsx

O Header.tsx tem vários links que **não correspondem** às rotas reais do App.tsx. Isso causa 404 ao clicar nos sub-produtos do mega-menu.

**Arquivo alterado:** apenas `src/components/Header.tsx`

### Correções necessárias (Header → rota real do App.tsx):

**Automotivo — Segurança:**
- `skinsafe-8k` → `skinsafe8k`
- `antivandalismo-13k` → `antivandalismo13k`

**Automotivo — PPF:**
- `phantom-6` → `phantom-6mil`
- `phantom-8` → `phantom-8mil`

**Arquitetônico — Solar:**
- `clear-70` → `clear70`
- `orizzonte-70` → `orizzonte70`
- `uv-90` → `ultravioletti90`
- `reflesso-dargento` → `reflesso-d-argento`

**Arquitetônico — Segurança:**
- `issf-4000` → `issf4000`
- `issf-7000` → `issf7000`

**Labels a corrigir:**
- `UV 90` → `Ultravioletti 90` (nome oficial do produto)

Todos os demais slugs (naturale, petrolio, grigio-invertito, metallico-argento, specchiato-bronzo, jateado, whiteout, blackout) já estão corretos.

Nenhum outro arquivo será alterado.

