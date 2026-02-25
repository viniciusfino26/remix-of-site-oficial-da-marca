

# Fusao Visual: Estetica Premium Atual + Estrutura LLumar + Interacoes de Ponta

## Conceito

Manter 100% da identidade dark premium (carbon-gradient, glass-card, accent orange, Framer Motion) e **enriquecer** com: (1) imagens grandes de impacto no estilo LLumar, (2) micro-interacoes avancadas que compensam a impossibilidade de tocar o produto, e (3) componentes reutilizaveis que padronizam todas as paginas sem reescrever tudo.

## Camada 1 — Componentes Reutilizaveis (5 novos arquivos)

### `src/components/PageHero.tsx`
Hero full-width reutilizavel com suporte a imagem de fundo. Overlay gradiente escuro (carbon) sobre a foto. Props: `title`, `subtitle`, `badge`, `backgroundImage?`, `cta?`. Quando `backgroundImage` existe, renderiza `<img>` com `object-cover` + overlay `bg-gradient-to-b from-primary/80 to-primary/95`. Quando nao existe, usa o `bg-carbon-gradient` + `bg-hero-texture` atual. Parallax com `useScroll` no texto (igual ao Index.tsx hero). Usado em todas as paginas (hubs, PDPs, institucionais).

### `src/components/ProductShowcase.tsx`
Secao alternada imagem+texto (estilo LLumar). Props: `title`, `subtitle`, `badge`, `description`, `imageSrc?`, `link`, `reversed`. Imagem renderizada em `aspect-[4/3] rounded-2xl overflow-hidden` com efeito hover `scale(1.05)` suave via Framer Motion. Quando sem imagem, mantem o `glass-card` com icone atual como fallback. Animacoes direcionais (fadeInLeft/fadeInRight) conforme `reversed`.

### `src/components/ImageReveal.tsx`
Componente de interacao avancada — a imagem "revela" conforme o scroll (clip-path animado ou mask gradient que se abre). Usa `useScroll` + `useTransform` do Framer Motion para animar um `clipPath` de `inset(0 0 100% 0)` para `inset(0)`. Cria a sensacao de "descoberta" do produto. Usado nos ProductShowcase para imagens de destaque.

### `src/components/ParallaxBreak.tsx`
Secao de quebra visual full-width com imagem de fundo em parallax (background-attachment: fixed no desktop, scroll no mobile). Overlay escuro + texto curto centralizado ou stat badges. Usado entre secoes nos hubs para criar ritmo visual. Props: `imageSrc`, `children`.

### `src/components/FloatingCTA.tsx`
Botao flutuante fixo no canto inferior direito (estilo "Find a Dealer" do LLumar). Aparece apos scroll de 400px com animacao de entrada. Icone de pin + texto "Encontre uma Loja". Link para `/lojas`. Convive com o WhatsAppButton existente (posicionado acima dele).

## Camada 2 — Hubs Arquitetonicos (3 arquivos — foco imediato com imagens)

### `ArqHubSolar.tsx`
- Hero: `PageHero` com `backgroundImage={Paralax.png}` (imagem de fachada)
- Cada categoria recebe imagem grande ao lado da descricao usando `ProductShowcase`:
  - Alta Transparencia → `transparentes.png`
  - Estetica Neutra → `Películas_neutras.png`
  - Privacidade e Espelhados → `Películas_Espelhadas_1.png`
  - Fume e Invertida → `Películas_Não_Refletivas.png`
- Entre categorias: `ParallaxBreak` com `Películas_Espelhadas.png`
- Product cards dentro de cada categoria mantem o grid atual mas com hover que mostra preview da pelicula (sutil scale + glow)

### `ArqHubSeguranca.tsx`
- Hero: `PageHero` com `backgroundImage={Películas_Antivandalismo_e_Segurança.png}`
- Produtos ISSF4000 e ISSF7000: substituir o `glass-card` placeholder por crop da imagem de seguranca com `ImageReveal`
- Beneficios grid permanece igual (ja esta bom)

### `ArqHubDecorativo.tsx`
- Hero: mantem `bg-carbon-gradient` (sem imagem especifica)
- Produto Whiteout: `Whiteout.png` no `ProductShowcase`
- Produto Blackout: `Blackout.png` no `ProductShowcase`
- Produto Jateado: mantem `glass-card` placeholder ate upload de imagem

## Camada 3 — Home Page (`Index.tsx`)

- `ProductBanner` atualizado para aceitar prop `imageSrc?`. Quando presente, renderiza a imagem como background da secao inteira com overlay, em vez do fundo abstrato. As 4 instancias na home recebem imagens quando disponiveis.
- Hero permanece com gradiente (sem imagem) — a identidade do hero e a textura geometrica.

## Camada 4 — CSS Global (`index.css`)

Adicionar 3 utilitarios:
- `.image-reveal` — transicao de clip-path para o componente ImageReveal
- `.parallax-section` — wrapper para ParallaxBreak com min-height e overlay
- `.floating-fab` — posicionamento e animacao do FloatingCTA

## O que NAO muda

- Rotas, Header, Footer, tema de cores, fonte Nunito Sans
- Estrutura dos PDPs (serao padronizados numa fase posterior quando houver imagens automotivas)
- Animacoes Framer Motion existentes (fadeInUp, stagger, parallax) — sao **mantidas e reutilizadas**
- WhatsAppButton (permanece, FloatingCTA fica acima)

## Ordem de implementacao

1. Criar os 5 componentes reutilizaveis
2. Mover as 9 imagens uploadadas para `src/assets/` com nomes limpos
3. Aplicar nos 3 hubs arquitetonicos
4. Atualizar `ProductBanner` e `Index.tsx`
5. Adicionar `FloatingCTA` no layout global

## Resultado esperado

Paginas com imagens fotograficas grandes e imersivas no estilo LLumar, mas envolvidas pela estetica dark premium com glassmorphism, parallax e micro-interacoes de reveal que criam uma experiencia sensorial digital — compensando o fato de o cliente nao poder tocar o produto.

