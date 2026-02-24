

# Adicionar Efeitos Parallax na Pagina Phantom Arquitetonico

## Objetivo

Adicionar secoes de parallax com imagem de fundo fixo (CSS `background-attachment: fixed`) entre as secoes principais da pagina, criando uma experiencia imersiva e sofisticada similar a pagina Residencial.

## Abordagem

Reutilizar o padrao `ParallaxSection` ja existente no projeto (usado em `Residencial.tsx`), com a classe CSS `bg-parallax` que ja trata mobile (troca para scroll em telas menores).

## Secoes Parallax Planejadas

Inserir 4 faixas parallax com frases de impacto entre as secoes existentes:

1. **Apos "Solucoes por Segmento"** — Imagem: `phantomAtmosphere` — Frase: "Cada acabamento conta uma historia. A nossa missao e preserva-la."
2. **Apos "Anatomia do Dano"** — Imagem: `phantomDailyUse` — Frase: "Proteger nao e esconder. E manter vivo o que foi projetado para impressionar."
3. **Apos "Phantom Matte"** — Imagem: `phantomMaterials` — Frase: "Marmore. Madeira. Aco Inox. Vidro. Cada superficie merece protecao a sua altura."
4. **Apos "Depoimentos"** — Imagem: `phantomSolution` — Frase: "Elegancia que permanece. Protecao que nao aparece."

## Implementacao

Criar um componente `ParallaxSection` local (igual ao padrao Residencial) que recebe a URL da imagem como `background-image` com a classe `bg-parallax`. As frases aparecem com animacao `fadeInUp` do Framer Motion.

Alem disso, adicionar parallax de textura sutil (Framer Motion `useTransform`) nas secoes de fundo escuro (carbon-gradient) para dar profundidade com o scroll — similar ao padrao da Index e Automotivo.

## Detalhes Tecnicos

### Arquivo editado:
- `src/pages/PhantomArquitetonico.tsx`

### Alteracoes:
1. Criar componente local `ParallaxSection` que usa `bg-parallax` CSS (mobile-safe)
2. Inserir 4 faixas parallax entre secoes existentes
3. Adicionar refs e `useScroll`/`useTransform` para texturas de fundo nas secoes carbon-gradient (hero ja tem, adicionar nas secoes "Uso Diario", "Solucao", "Matte", "Depoimentos", "Encontre uma Loja")
4. As imagens importadas ja existem — serao usadas como `background-image` via style inline

### Classe CSS usada:
- `bg-parallax` — ja definida em `src/index.css` (linhas 208-218), com fallback para scroll em mobile

### Nenhuma dependencia nova necessaria.

