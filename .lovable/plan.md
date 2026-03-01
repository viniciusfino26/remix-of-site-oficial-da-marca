

## Plano: Adicionar fotos dos produtos nas páginas individuais

Usar as mesmas imagens já salvas em `src/assets/` (do hub solar) nos placeholders de cada página de produto.

### Mapeamento

| Página | Arquivo | Imagem |
|---|---|---|
| AutomotivoDark.tsx | `auto-solar-dark.png` | Placeholder linha 144-147 |
| AutomotivoEclipse.tsx | `auto-solar-eclipse.png` | Placeholder linha 141-144 |
| AutomotivoVip.tsx | `auto-solar-vip.png` | Placeholder linha 141-144 |
| AutomotivoMatrix.tsx | `auto-solar-matrix.png` | Placeholder linha 151-158 |
| AutomotivoPolariz.tsx | `auto-solar-polariz.png` | Placeholder linha 143-146 |
| Dark.tsx | `auto-solar-dark.png` | Placeholder linha ~144-147 |

### Alterações por arquivo (mesmo padrão em todos)

1. **Import**: Adicionar `import productImage from '@/assets/auto-solar-{nome}.png'`
2. **Placeholder**: Substituir o `<div>` cinza com icone `Car` por `<img src={productImage} alt="INSULFILM™ {Nome}" className="w-full h-full object-cover rounded-2xl" />`

6 arquivos alterados, mesma mudança mecânica em cada um.

