## Redesign Completo — Página /marca/historia

### Objetivo

Reescrever a página com o conteúdo fornecido pelo usuário: texto introdutório + linha do tempo visual com todos os marcos históricos, agrupados por década.

### Estrutura da Nova Página

**1. Hero** — Carbon-gradient com badge "Nossa História", título impactante, subtítulo sobre os quase 40 anos de pioneirismo.

**2. Seção Introdutória** — Os 3 parágrafos fornecidos pelo usuário (por que chamam de "insulfilm", história da marca, inovação além das películas).

**3. Timeline Visual** — Linha do tempo vertical animada com Framer Motion, agrupada em 4 eras:

- **1980–1990**: Nascimento e pioneirismo (1986/1988, 1996, 1997, 1998)
- **2000–2010**: Expansão e regulamentação (2000, 2001, 2002, 2008)
- **2010–2020**: Inovação e alto desempenho (2011, 2012, 2018, 2019)
- **2020–2025**: Futuro da proteção (2024, 2025)

Cada marco terá: ano destacado em accent, título em negrito, descrição. A linha vertical central conecta os pontos com dots animados. Layout alternado (esquerda/direita) em desktop, linear em mobile.

**4. Bloco "Hoje"** — Card glass premium com a frase de fechamento: "A INSULFILM™ não protege vidros, protege você."

**5. Disclaimer** — Bloco discreto com texto de marca registrada conforme regras do projeto.

### Arquivo Alterado

- `**src/pages/MarcaHistoria.tsx**` — Reescrita completa com textos hardcoded em PT-BR (sem i18n), timeline visual com animações staggered.

### Padrões Visuais

- Animações: fadeInUp, stagger com viewport trigger
- Visual: bg-carbon-gradient no hero, glass-card nos marcos, separator-accent
- Nomenclatura: INSULFILM™ sempre com ™ e espaço antes do nome do produto
- Todos os textos exatamente como fornecidos pelo usuário