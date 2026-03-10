

## Plano: Restaurar specs na seção "A Solução" + atualizar imagem

### 1. Substituir imagem
- Copiar `user-uploads://image-29.png` para `src/assets/phantom-solution-thickness.png` (substituir a atual com marca d'água)

### 2. Restaurar conteúdo removido em `src/pages/PhantomArquitetonico.tsx`
Após a imagem (linha 402), re-adicionar:
- Grid de 5 specs: **180μ** (Espessura), **∞** (Invisibilidade), **5 Anos** (Garantia), **360°** (Proteção Total), **UV** (Bloqueio)
- Texto final: "Preserva exatamente o visual original de qualquer superfície — com uma camada de proteção invisível de engenharia avançada."

O estilo seguirá o padrão já usado na página (cards com fundo semi-transparente, texto light sobre fundo escuro da `bg-carbon-gradient`).

