

## Plano: Padronizar tamanho dos quadrantes (azul, laranja, cinza) em todas as páginas

### Problema
Os 4 banners de produto na home (e nas páginas `/arquitetonico`, `/empresarial`) usam o componente `ProductBanner`, mas hoje cada card tem altura/largura/tipografia ligeiramente diferentes porque:
- O `min-h-[180px]/[280px]` permite que o card cresça conforme o conteúdo (título de 2 linhas vs. 4 linhas).
- Títulos mais longos quebram em mais linhas → card maior.
- Descrições com tamanhos diferentes empurram o botão para baixo de forma desigual.
- Não há `max-w` nem `min-w` rígido — o card respeita só `max-w-xl`.

### Solução: simetria absoluta

Editar **somente** `src/components/ProductBanner.tsx` (afeta automaticamente Index, Arquitetonico, Empresarial e qualquer outra página que use o componente — sem precisar tocar em copy).

**1. Card com dimensões fixas**
- Largura fixa: `w-full max-w-xl` → trocar por `w-full sm:w-[36rem]` (576px) com `max-w-full` para mobile.
- Altura fixa: substituir `min-h-[180px] md:min-h-[280px]` por `h-[320px] md:h-[360px]` (mesma altura sempre, em todas as variantes).

**2. Tipografia idêntica entre os 3 variants (azul/laranja/cinza)**
- Título: travar em `text-2xl md:text-3xl` (sem `sm:text-3xl md:text-4xl` que escala diferente).
- Descrição: travar em `text-sm md:text-base` com `line-clamp-3` para impedir que descrições longas estourem o card.
- Título com `line-clamp-2` para garantir no máximo 2 linhas.

**3. Layout interno consistente**
- `flex flex-col justify-between` (em vez de `justify-center`) para que: título no topo, descrição no meio, botão sempre alinhado na base — mesma posição em todos os cards.
- Padding uniforme: `p-6 md:p-8` (sem o salto `p-5 sm:p-8 md:p-12`).

**4. Botão padronizado**
- Mesmo tamanho/altura em todas as variantes (`h-11 px-6`), independente do `cardVariant`.

### Detalhes técnicos

Arquivo único: `src/components/ProductBanner.tsx`

Mudanças no `motion.div` do card (linhas ~80-94):
```tsx
className={`${cardVariantClasses[cardVariant]} 
  p-6 md:p-8 
  w-full sm:w-[36rem] max-w-full 
  h-[320px] md:h-[360px] 
  flex flex-col justify-between 
  rounded-lg border border-white/10`}
```

Título:
```tsx
<h2 className="text-2xl md:text-3xl font-extrabold text-white line-clamp-2">{title}</h2>
```

Descrição:
```tsx
<p className="text-sm md:text-base text-white/60 font-light leading-relaxed line-clamp-3">{description}</p>
```

Botão (remover diferença de cor/padding entre variantes só na **dimensão** — a cor permanece variando azul/laranja/cinza por design, mas tamanho idêntico):
```tsx
<Button className="... h-11 px-6 text-sm font-bold">
```

### Páginas afetadas (automaticamente, sem editar copy)
- `/` (Index) — 4 banners
- `/arquitetonico` — 4 banners
- `/empresarial` — 4 banners

### Validação
Após a aplicação, abrir `/`, `/arquitetonico` e `/empresarial` em mobile (375px) e desktop (1280px) e conferir visualmente que os 4 cards têm altura/largura/posição do botão idênticas.

### Arquivos editados
- `src/components/ProductBanner.tsx` (único)

