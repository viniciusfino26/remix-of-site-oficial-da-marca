

## Plano: Corrigir texto invisível nas páginas restantes

### Problema
Ainda existem **20+ páginas de produto** com o mesmo problema: cards de especificações técnicas em seções `bg-background` (fundo claro) usando `text-primary-foreground` (texto branco/claro), tornando o conteúdo invisível.

### Regra (mesma de antes)
- Seções `bg-carbon-gradient` (escuro) → manter `text-primary-foreground`
- Seções `bg-background` (claro) → trocar para `text-foreground` / `text-muted-foreground`

### Arquivos a corrigir (spec cards em `bg-background`)

Todos seguem o mesmo padrão de correção nas linhas dos cards:
- `text-primary-foreground/60 font-medium mb-1` → `text-muted-foreground font-medium mb-1`
- `font-extrabold text-primary-foreground` (valor) → `font-extrabold text-foreground`

| # | Arquivo |
|---|---------|
| 1 | `GrigioInvertito.tsx` |
| 2 | `MetallicoArgento.tsx` |
| 3 | `Naturale.tsx` |
| 4 | `Orizzonte70.tsx` |
| 5 | `SpecchiatoBronzo.tsx` |
| 6 | `ReflessoDArgento.tsx` |
| 7 | `Petrolio.tsx` |
| 8 | `Clear70.tsx` |
| 9 | `Dark.tsx` |
| 10 | `Eclipse.tsx` |
| 11 | `Matrix.tsx` |
| 12 | `VIP.tsx` |
| 13 | `PolarizUltra.tsx` |
| 14 | `AutomotivoDark.tsx` |
| 15 | `AutomotivoMatrix.tsx` |
| 16 | `AutomotivoPolariz.tsx` |
| 17 | `AutomotivoVip.tsx` |
| 18 | `ArqSegurancaISSF4000.tsx` |
| 19 | `ArqSegurancaISSF7000.tsx` |

### Escopo
- Corrigir apenas elementos dentro de seções com `bg-background`
- Seções com `bg-carbon-gradient` permanecem inalteradas (hero, seções escuras)
- Mesma correção mecânica aplicada nas 10 páginas anteriores

