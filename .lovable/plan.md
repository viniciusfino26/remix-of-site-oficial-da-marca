

# Redesign da Home Page — Layout de Banners com Animacoes Originais

## Objetivo

Reestruturar a home page para seguir o layout da imagem de referencia (secoes full-width com caixas de texto sobrepostas em fundo escuro), mantendo **todos os textos existentes** (mesmas chaves i18n) e **todas as animacoes** (parallax, fadeInUp, fadeInLeft, fadeInRight, scaleIn, stagger, glow effects).

## Nova Estrutura

A pagina tera as seguintes secoes, de cima para baixo:

1. **Banner "Website Oficial"** — faixa fina com "INSULFILM(TM) — Website Oficial"
2. **Hero Section** — mantido identico (parallax, glow, textos hero.tagline/subtitle, botoes CTA) — sem alteracao
3. **Video YouTube** — mantido identico (embed com autoplay/mute/loop, zoom 110%) — sem alteracao
4. **Banner "Peliculas Solares"** — secao full-width bg-carbon-gradient, caixa de texto a direita com fadeInRight, titulo `products.solarControl`, desc existente, botao "Ver Detalhes" (link `/automotivo`)
5. **Banner "Protecao e Seguranca"** — secao full-width, caixa de texto a esquerda com fadeInLeft, usando textos do `products.ppf`, botao link `/antivandalismo13k`
6. **Banner "Comerciais e Residenciais"** — secao full-width, caixa de texto a direita com fadeInRight, usando textos do `products.architecture`, botao link `/residencial`
7. **Banner "PPF"** — secao full-width, caixa de texto a esquerda com fadeInLeft, titulo `products.ppf`, botao link `/ppf`
8. **Why INSULFILM** — mantido identico (parallax diagonal texture, glass cards, icon ring glow, stagger) — sem alteracao
9. **Simulators** — mantido identico (cards com shimmer badge, stagger) — sem alteracao

## O Que Muda

- A secao "Product Highlights" (3 cards em grid) sera substituida por 4 banners full-width alternados (texto direita/esquerda)
- Cada banner usa `bg-carbon-gradient` com texturas geometricas e glow effects similares ao hero
- Animacoes de entrada: `fadeInRight` para banners alinhados a direita, `fadeInLeft` para a esquerda
- Caixas de texto com `bg-primary/80 backdrop-blur-md`, bordas `border-white/10`, efeito `whileHover` com escala sutil
- Botoes mantidos com `bg-accent hover:bg-accent/90` e icones correspondentes (Car, Shield, Building2)
- Parallax sutil no fundo de cada banner usando `useScroll` + `useTransform`

## O Que NAO Muda

- Hero section: textos, parallax, glow, botoes — tudo identico
- Video YouTube: embed, configuracoes, zoom — tudo identico
- Why INSULFILM: textos, parallax, glass cards — tudo identico
- Simulators: textos, shimmer, cards — tudo identico
- Todas as animacoes (fadeInUp, fadeInLeft, fadeInRight, scaleIn, stagger)
- Todas as chaves de traducao i18n
- LegalNotice e Footer (renderizados pelo App.tsx)

## Detalhes Tecnicos

### Arquivo editado
- `src/pages/Index.tsx` — substituir secao "Product Highlights" por 4 banners full-width; adicionar banner "Website Oficial" no topo

### Componente local `ProductBanner`
```text
Props: title, description, buttonText, buttonIcon, link, alignment ('left' | 'right')

Estrutura:
- section com min-h-[60vh], bg-carbon-gradient, overflow-hidden
- Textura geometrica com parallax sutil
- Glow effect no fundo
- Container flex com justify-end ou justify-start conforme alignment
- motion.div com fadeInRight ou fadeInLeft
- Caixa: bg-primary/80 backdrop-blur-md p-8 md:p-12 max-w-xl rounded-lg border-white/10
- Titulo h2, descricao p, Button com Link
- whileHover={{ scale: 1.02 }} na caixa
```

### Sequencia dos banners
1. Peliculas Solares — alignment: right, icon: Car, link: /automotivo
2. Protecao e Seguranca — alignment: left, icon: Shield, link: /antivandalismo13k
3. Comerciais e Residenciais — alignment: right, icon: Building2, link: /residencial
4. PPF — alignment: left, icon: Shield, link: /ppf

### Imports
- Remover: `useRef` para `productsRef` (substituido por refs dentro do ProductBanner)
- Remover: `Card`, `CardContent` do import (ainda usados em Why e Simulators — manter)
- Manter todos os demais imports

