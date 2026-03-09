

## Plano: Corrigir texto invisível em seções com fundo claro

### Problema
Cards em seções `bg-background` (fundo claro) usam `text-primary-foreground` (texto branco), tornando o conteúdo invisível.

### Regra
- `bg-carbon-gradient` (escuro) → `text-primary-foreground` correto, não mexer
- `bg-background` (claro) → trocar para `text-foreground` / `text-muted-foreground`

### Alterações (10 arquivos)

| Arquivo | Linha | De → Para |
|---------|-------|-----------|
| `Carreiras.tsx` | 85 | `text-primary-foreground` → `text-foreground` |
| `Carreiras.tsx` | 86 | `text-primary-foreground/50` → `text-muted-foreground` |
| `Franquias.tsx` | 66 | `text-primary-foreground` → `text-foreground` |
| `Franquias.tsx` | 67 | `text-primary-foreground/60` → `text-muted-foreground` |
| `SAC.tsx` | 65 | `text-primary-foreground` → `text-foreground` |
| `SAC.tsx` | 66 | `text-primary-foreground/60` → `text-muted-foreground` |
| `Vendas.tsx` | 65 | `text-primary-foreground` → `text-foreground` |
| `Vendas.tsx` | 66 | `text-primary-foreground/60` → `text-muted-foreground` |
| `Parceiro.tsx` | 75 | `text-primary-foreground` → `text-foreground` |
| `Parceiro.tsx` | 76 | `text-primary-foreground/60` → `text-muted-foreground` |
| `Empresarial.tsx` | 94 | `text-primary-foreground` → `text-foreground` |
| `Empresarial.tsx` | 95 | `text-primary-foreground/60` → `text-muted-foreground` |
| `Ultravioletti90.tsx` | 82 | `text-primary-foreground/60` → `text-muted-foreground` |
| `Ultravioletti90.tsx` | 83 | `text-primary-foreground` → `text-foreground` |
| `ArqDecorativoJateado.tsx` | 108-109 | mesma troca |
| `ArqDecorativoBlackout.tsx` | 108-109 | mesma troca |
| `ArqDecorativoWhiteout.tsx` | 108-109 | mesma troca |

Nenhuma outra alteração necessaria. Seções com `bg-carbon-gradient` permanecem inalteradas.

