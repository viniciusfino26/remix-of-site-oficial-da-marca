

## Plano: Trocar textos pretos/cinza por azul (primary) na página /automotivo/solar

A página usa `text-gray-900`, `text-gray-800`, `text-gray-600`, `text-gray-500` enquanto as demais páginas usam o azul escuro do tema (`text-primary`, `text-foreground`, `text-muted-foreground`). O `primary` do projeto é `hsl(224 100% 19%)` — azul marinho.

### Alterações em `src/pages/AutomotivoHubSolar.tsx`

| De | Para | Onde |
|---|---|---|
| `text-gray-900` | `text-primary` | Títulos h1, h3 dos produtos |
| `text-gray-800` | `text-primary` | Benefícios, botão EXPLORE (texto e borda) |
| `text-gray-600` | `text-muted-foreground` | Parágrafos, garantias |
| `text-gray-500` | `text-muted-foreground` | Metadata de tecnologia/série |
| `text-gray-300` | `text-muted-foreground/40` | Separador `|` na metadata |
| `border-gray-800` | `border-primary` | Botão EXPLORE |
| `hover:bg-gray-900` | `hover:bg-primary` | Botão EXPLORE hover |
| `border-gray-200` | `border-border` | Separadores entre produtos |
| `border-gray-100` | `border-border` | Borda da seção benefícios |

Todas as mudanças no mesmo arquivo, sem alterar estrutura ou layout.

