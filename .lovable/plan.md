

## Plano: Corrigir layout do hero da página Quem Somos

### Problema
A seção hero usa `flex items-center` sem `flex-col`, fazendo o conteúdo de texto e as estatísticas ficarem lado a lado (espremidos) em vez de empilhados verticalmente como na referência.

### Alterações em `src/pages/QuemSomos.tsx`

1. **Linha 165** — Adicionar `flex-col` à seção hero para empilhar texto + stats verticalmente
2. **Linha 204** — Mudar o container de stats de `flex` para `grid grid-cols-2 md:grid-cols-4` com `gap-6 md:gap-12` para distribuir melhor no mobile (2 colunas) e desktop (4 colunas)
3. **Ajustar padding** do container de stats para `pb-16 md:pb-24` para melhor espaçamento no mobile

