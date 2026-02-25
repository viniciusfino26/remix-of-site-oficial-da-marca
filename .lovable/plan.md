

# Ajuste dos Banners: Espacamento e Overlay

## Problema Identificado

Analisando a referencia e o codigo atual, dois problemas:

1. **Overlay azul cobrindo a imagem inteira**: O codigo atual aplica um gradiente `from-primary/85 via-primary/60 to-transparent` sobre TODA a imagem. Na referencia, nao existe esse gradiente — a foto aparece limpa e so o card de texto tem fundo semi-transparente.

2. **Banners colados**: Os 4 banners ficam um encostado no outro sem respiro visual.

## Solucao

### 1. Remover o overlay gradiente full-width (ProductBanner.tsx)

Quando ha `imageSrc`, remover completamente o `<div>` com gradiente azul que cobre a imagem inteira. A imagem fica limpa. O contraste do texto ja e garantido pelo card `bg-primary/80 backdrop-blur-md` que existe sobre ele.

**Antes:**
```
<div className="absolute inset-0 bg-gradient-to-l from-primary/85 via-primary/60 to-transparent" />
```

**Depois:** Removido. Apenas um gradiente sutil no bottom para transicao suave:
```
<div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/30 to-transparent" />
```

### 2. Adicionar espacamento entre banners (ProductBanner.tsx)

Adicionar `my-4` ou equivalente na section do banner para criar respiro visual entre cada um, similar a referencia que mostra uma faixa clara/cinza entre os banners.

Alternativa: adicionar uma faixa separadora `bg-background` de ~8px entre os banners via espacamento no Index.tsx (e demais paginas). A abordagem mais limpa e adicionar `py-1` ou `gap` no componente.

### 3. Card de texto — ajuste fino

O card `bg-primary/80` fica como esta (corresponde a referencia). Ajustar opacidade para `bg-primary/75` para ficar levemente mais transparente e deixar a foto "respirar" por tras.

## Arquivos Alterados

| Arquivo | Alteracao |
|---------|-----------|
| `src/components/ProductBanner.tsx` | Remover overlay gradiente quando ha imagem; adicionar espacamento via classe na section |

## Impacto

Todos os banners de todas as paginas que usam `ProductBanner` com `imageSrc` serao afetados automaticamente (e corretamente) porque a mudanca e no componente compartilhado. Banners sem imagem (carbon-gradient) continuam identicos.

