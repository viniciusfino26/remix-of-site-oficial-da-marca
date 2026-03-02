

## Plano: Reordenar layout das páginas de produtos solares

Reorganizar a estrutura de todas as 5 páginas de produtos solares para que a foto do produto apareça logo abaixo do hero (nome da linha), seguida das especificações técnicas.

### Nova ordem das seções

```text
Atual:                          Novo:
1. Hero (nome + badge)          1. Hero (nome + badge)
2. Especificações Técnicas      2. Foto do produto + legenda
3. ParallaxBreak                3. Especificações Técnicas
4. Feature (texto + foto)       4. ParallaxBreak
5. CTA                          5. Feature (texto, sem foto)
                                6. CTA
```

### Alterações por arquivo

Mesma alteração em cada um dos 5 arquivos:

1. **`src/pages/AutomotivoDark.tsx`**
2. **`src/pages/AutomotivoEclipse.tsx`**
3. **`src/pages/AutomotivoVip.tsx`**
4. **`src/pages/AutomotivoMatrix.tsx`**
5. **`src/pages/AutomotivoPolariz.tsx`**

Para cada arquivo:
- Adicionar uma nova seção logo depois do hero com a imagem do produto em `aspect-[4/3]` centralizada + legenda "Imagem meramente ilustrativa" abaixo
- Manter a seção de specs logo em seguida
- Na seção de features (texto + checklist), remover a coluna da imagem (já exibida acima) e deixar o texto em largura total
- Manter ParallaxBreak e CTA nas posições atuais (após specs)

