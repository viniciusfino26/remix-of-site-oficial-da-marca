

## Plano: Mover seção "Arquitetônico Nacional" para acima da busca por CEP

A seção "Arquitetônico — Território Nacional" (linhas 601-645) será movida para logo após o Hero e antes da seção "Encontre a loja mais próxima" + barra de CEP.

### Ordem atual:
1. Hero
2. Busca por CEP
3. Grid de lojas
4. Arquitetônico Nacional
5. CTA Parceiro

### Nova ordem:
1. Hero
2. **Arquitetônico Nacional**
3. Busca por CEP
4. Grid de lojas
5. CTA Parceiro

### Alteração:
- **`src/pages/Lojas.tsx`**: Recortar o bloco da seção "Arquitetônico Nacional" (linhas 601-645) e colá-lo entre o fechamento do Hero (linha 526) e a seção de busca por CEP (linha 528).

