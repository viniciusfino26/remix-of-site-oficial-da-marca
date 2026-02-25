

# Parallax Sutil e Integrado em Todo o Site

## Situacao Atual

O parallax ja existe em alguns pontos isolados:
- **Index.tsx hero**: textura geometrica, glow e texto com parallax via `useScroll`
- **Index.tsx "Why" section**: textura diagonal com parallax
- **ProductBanner**: textura e glow com parallax
- **ProductShowcase**: imagem com parallax vertical sutil (30px a -30px)
- **ParallaxBreak**: componente dedicado com imagem parallax (usado apenas 1x no ArqHubSolar com placeholder.svg)
- **PageHero**: imagem de fundo com scale parallax

O problema: o parallax aparece de forma desconexa — forte no hero, ausente em secoes intermediarias, e o ParallaxBreak so aparece uma vez com placeholder.

## Proposta: Parallax Sutil e Mesclado

Adicionar micro-parallax em camadas por todo o site, de forma que o efeito seja sentido naturalmente sem dominar a experiencia.

### 1. Secoes com fundo escuro (carbon-gradient) ganham parallax na textura

Todas as secoes que usam `bg-carbon-gradient` ou `bg-muted/30` recebem uma camada de textura geometrica (`bg-hero-texture` ou `bg-diagonal-texture`) com parallax sutil de **15-20px** (nao os 30px+ do hero). Isso inclui:

- **ArqHubSolar** — secao "Prova Social" e "Bottom CTA"
- **ArqHubSeguranca** — secao "Beneficios"
- **ArqHubDecorativo** — secao "Casos de Uso"
- **Index.tsx** — secao "Simulators" (atualmente sem parallax)

### 2. ProductShowcase — parallax mais sutil no fallback icon

Quando nao ha imagem (fallback icon), o glass-card ganha um leve efeito de profundidade: o icone se move em parallax oposto ao scroll (5-8px), criando sensacao de flutuar dentro do card.

### 3. ParallaxBreak entre secoes nos hubs

Inserir `ParallaxBreak` como divisor visual entre secoes nos 3 hubs e na home:

- **ArqHubSolar**: ja tem um (atualizar para usar `bg-carbon-gradient` com textura ao inves de placeholder.svg, criando um parallax abstrato ate ter imagem real)
- **ArqHubSeguranca**: adicionar ParallaxBreak entre "Produtos" e "Beneficios"
- **ArqHubDecorativo**: adicionar ParallaxBreak entre "Produtos" e "Casos de Uso"
- **Index.tsx**: adicionar ParallaxBreak entre os ProductBanners e a secao "Why INSULFILM"

### 4. Secao de stats/numeros com parallax de contadores

Nos ParallaxBreaks, adicionar dados numericos (stats) que aparecem com stagger animation conforme scroll — ex: "+40 paises", "10M m2 instalados", "15 anos de garantia". Cada numero com parallax individual leve.

### 5. Cards glass-card — micro-parallax no hover

Os cards `glass-card` nos hubs ganham um efeito sutil: ao fazer hover, o background gradient do card se desloca levemente (translate do gradiente), criando profundidade sem movimento brusco.

### 6. Separadores visuais com parallax

O `separator-accent` (barra laranja de 60px) ganha parallax horizontal sutil — desliza 10px conforme scroll, como se estivesse "flutuando" sobre o conteudo.

## Arquivos Alterados

| Arquivo | Alteracao |
|---------|-----------|
| `src/components/ProductShowcase.tsx` | Parallax no fallback icon (5-8px) |
| `src/components/ParallaxBreak.tsx` | Suporte a modo "abstrato" (sem imagem, usa textura) + slot para stats |
| `src/pages/ArqHubSolar.tsx` | ParallaxBreak com stats ao inves de placeholder |
| `src/pages/ArqHubSeguranca.tsx` | Adicionar ParallaxBreak entre secoes + textura parallax nos backgrounds |
| `src/pages/ArqHubDecorativo.tsx` | Adicionar ParallaxBreak entre secoes + textura parallax nos backgrounds |
| `src/pages/Index.tsx` | ParallaxBreak entre banners e "Why", parallax na secao Simulators |
| `src/index.css` | Classe `.parallax-texture` para micro-parallax em texturas de fundo |

## Detalhes Tecnicos

Todas as animacoes usam `framer-motion` com `useScroll` + `useTransform`. Valores sutis:
- Texturas de fundo: **15-20px** de deslocamento vertical
- Icones fallback: **5-8px** de deslocamento oposto
- Separadores accent: **10px** horizontal
- ParallaxBreak abstrato: textura diagonal + glow com **20-30px**
- Stats nos breaks: stagger 0.15s + fadeInUp

Nenhuma rota, componente ou estrutura de pagina muda. Apenas camadas visuais adicionais.

