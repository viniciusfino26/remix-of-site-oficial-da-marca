
# Elevar o Visual Premium — INSULFILM™

## Melhorias Visuais Propostas

### 1. Hero Section — Impacto Visual
- Adicionar uma linha fina laranja/dourada no topo do header (accent bar) como sites premium fazem
- Incluir um padrão sutil geométrico (grid de linhas finas) no fundo do hero para dar textura
- Aumentar o espaçamento entre letras no "INSULFILM™" do hero para mais elegância
- Adicionar um separador decorativo (linha fina laranja) entre o subtítulo e os CTAs
- Botão "For My Home" está invisível (texto branco em fundo que não contrasta) — corrigir com borda visível

### 2. Header — Refinamento
- Adicionar uma barra fina de 3px laranja no topo absoluto da página (accent stripe)
- Aumentar levemente a altura do header e melhorar o espaçamento dos itens
- Logo um pouco maior no desktop
- Efeito hover mais sofisticado nos links (underline animado ao invés de simples mudança de cor)

### 3. Seção de Produtos — Cards Premium
- Adicionar um hover com elevação mais pronunciada (shadow maior + leve scale)
- Borda superior laranja sutil nos cards ao hover
- Ícones com fundo em gradiente sutil ao invés de cor sólida
- Espaçamento mais generoso dentro dos cards

### 4. Seção "Why INSULFILM" — Mais Impacto
- Adicionar uma textura sutil de linhas diagonais no fundo azul escuro
- Cards com efeito glassmorphism (fundo translúcido com blur)
- Ícones com um anel/círculo animado sutil ao redor

### 5. Seção Simuladores — Menos "Placeholder"
- Melhorar os cards com um gradiente de fundo sutil ao invés de borda tracejada
- Adicionar um efeito shimmer/pulse sutil no badge "Coming Soon"
- Bordas arredondadas maiores e sombra suave

### 6. Footer — Mais Elegante
- Adicionar uma linha separadora decorativa laranja no topo do footer
- Melhorar a hierarquia visual com espaçamento e tipografia
- Ícones de redes sociais com hover animado (scale + cor laranja)

### 7. Animações e Micro-interações
- Scroll-triggered animations mais suaves (já usa framer-motion, refinar)
- Efeito parallax sutil no hero
- Transições de página suaves

### 8. Tipografia Premium
- Pesos mais variados do Nunito Sans (ExtraBold para títulos principais, Light para subtítulos)
- Tamanhos mais dramáticos nos títulos hero (maior contraste de escala)

## Arquivos a Alterar
- `src/index.css` — Novas utilidades CSS (accent stripe, texturas, shimmer)
- `src/components/Header.tsx` — Accent bar, hover animado, logo maior
- `src/pages/Index.tsx` — Refinamento de todas as seções (hero, cards, simuladores)
- `src/components/Footer.tsx` — Linha decorativa, hover nos ícones
- `tailwind.config.ts` — Novas animações (shimmer, scale)
