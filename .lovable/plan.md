
# Melhorias Visuais na Pagina Quem Somos + Correcao do Ano de Fundacao

## Resumo

Duas frentes de trabalho: (1) corrigir o ano de fundacao de 1988 para 1986 em todos os arquivos do projeto, e (2) elevar visualmente a pagina /quem-somos com foco nos cards da timeline, adicionando gradientes com as cores da marca, animacoes mais ricas e efeitos visuais premium.

---

## 1. Correcao do Ano de Fundacao (1988 para 1986)

Arquivos afetados:

- **`src/pages/QuemSomos.tsx`** — Alterar `year: '1988'` para `'1986'` e ajustar a primeira decada de `'1980-1990'` para `'1986-2000'` (ou manter como `'1980-1990'`)
- **`src/i18n/locales/pt.json`** — Substituir "Desde 1988" por "Desde 1986" no heroTitle e heroText; renomear chave `e1988` para `e1986`
- **`src/i18n/locales/en.json`** — Idem: "Since 1988" para "Since 1986"
- **`src/i18n/locales/es.json`** — Idem: "Desde 1988" para "Desde 1986"
- **`src/components/SchemaOrg.tsx`** — Alterar `foundingDate: '1988'` para `'1986'` e textos descritivos
- **`public/llms.txt`** — Alterar "1988" para "1986" na linha do historico

---

## 2. Melhorias Visuais da Pagina /quem-somos

### Timeline Cards — Redesign Premium

Transformar os cards simples atuais em cards com identidade visual da marca:

- **Gradiente lateral nas bordas**: borda esquerda com gradiente vertical azul (#001E60) para laranja (#FF6720)
- **Badge do ano**: em vez de texto simples, o ano aparece dentro de um badge com fundo gradiente azul-laranja, texto branco, com leve brilho
- **Hover com glow**: ao passar o mouse, o card ganha uma sombra com tonalidade laranja sutil e eleva mais (translateY -6px)
- **Animacao de entrada escalonada**: cada card entra com um delay progressivo dentro da decada (stagger mais pronunciado)
- **Linha central da timeline**: gradiente vertical de azul para laranja em vez de cor solida

### Marcadores da Decada

- Badge da decada com gradiente azul-para-laranja em vez de fundo solido laranja
- Efeito shimmer sutil no badge ao entrar na viewport
- Dot central com animacao de pulso continuo (icon-pulse)

### Marcadores dos Eventos (Dots)

- Dots com gradiente radial azul-laranja em vez de cor solida
- Animacao de scale com spring ao entrar na viewport

### Secao "Hoje" (Fechamento da Timeline)

- Dot final maior com animacao de pulso e glow laranja
- Texto com gradiente azul-laranja no titulo

### Secao de Diferenciais

- Cards glass com borda superior gradiente azul-laranja ao hover
- Icones com animacao de rotacao sutil ao hover (rotate 5deg + scale)

### Detalhes Tecnicos

Todas as mudancas concentradas em `src/pages/QuemSomos.tsx`:
- Adicionar estilos inline com `background: linear-gradient(...)` usando as cores da marca
- Enriquecer as variantes de animacao do framer-motion com `whileInView` e transicoes spring
- Manter 100% da estrutura de texto e i18n intacta
- Adicionar classes CSS utilitarias em `src/index.css` se necessario (ex: `.timeline-gradient-line`, `.badge-gradient`)

---

## Arquivos Editados

| Arquivo | Tipo de Alteracao |
|---------|-------------------|
| `src/pages/QuemSomos.tsx` | Redesign visual dos cards, animacoes, gradientes, correcao do ano |
| `src/index.css` | Novas classes utilitarias para gradientes da timeline |
| `src/i18n/locales/pt.json` | 1988 para 1986 |
| `src/i18n/locales/en.json` | 1988 para 1986 |
| `src/i18n/locales/es.json` | 1988 para 1986 |
| `src/components/SchemaOrg.tsx` | 1988 para 1986 |
| `public/llms.txt` | 1988 para 1986 |
