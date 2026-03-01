

## Plano: Adicionar imagens dos produtos no Hub Solar Automotivo

Copiar 7 imagens para `src/assets/` e aplicar no `AutomotivoHubSolar.tsx`:

### Imagens e mapeamento

| Arquivo enviado | Destino em `src/assets/` | Uso |
|---|---|---|
| `DARK_1.png` | `auto-solar-dark.png` | Produto Dark |
| `ECLIPSE_1.png` | `auto-solar-eclipse.png` | Produto Eclipse |
| `Fotos_LP_-_VIP_1.png` | `auto-solar-vip.png` | Produto Vip |
| `MATRIX_1.png` | `auto-solar-matrix.png` | Produto Matrix |
| `POLARIZ_ULTRA_1.png` | `auto-solar-polariz.png` | Produto Polariz Ultra |
| `Encontre_o_insulfilm_ideal.png` | `auto-solar-nav-bg.png` | Background da seção "Encontre o seu INSULFILM™ ideal" |
| `header.png` | `auto-solar-hero.png` | Background do Hero |

### Alterações em `src/pages/AutomotivoHubSolar.tsx`

1. **Imports**: Adicionar 7 imports de imagem do `@/assets/`

2. **Produtos** (linhas 30-72): Adicionar campo `image` em cada produto apontando para o import correspondente

3. **ProductSection** (linhas 108-115): Substituir o placeholder cinza com icone `Sun` por uma tag `<img>` usando `product.image`, com `object-cover` e `rounded-xl aspect-[4/3]`

4. **Hero** (linhas 152-171): Substituir `bg-gray-700` pelo `auto-solar-hero.png` como background image com overlay escuro semi-transparente

5. **Navegação** (linhas 174-203): Adicionar `auto-solar-nav-bg.png` como background da seção com overlay claro para manter legibilidade dos textos

