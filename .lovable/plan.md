

# Criar Paginas SkinSafe8K e SkudoUltra + Ativar Rotas

## Resumo

Criar duas novas paginas de produto seguindo 100% o design system existente (SkudoGuard/Antivandalismo13K como referencia), e descomentar as rotas no App.tsx.

---

## 1. src/pages/SkinSafe8K.tsx (nova)

Pagina da pelicula de protecao pessoal contra raios UV. Estrutura:

**Hero** — Fundo `bg-carbon-gradient` com parallax, Badge "Protecao Pessoal", titulo "INSULFILM SkinSafe8K", subtitulo sobre protecao UV invisivel, separator-accent.

**Beneficios (4 cards)** — Grid `sm:grid-cols-2 lg:grid-cols-4` com glass-card:
- 100% Bloqueio UV (Sun icon)
- Transparente e Imperceptivel (Eye icon)
- Protege Pele e Olhos (Heart icon)
- Protege Interior do Veiculo (Car icon)

**Descricao do Produto** — Grid 2 colunas (texto + placeholder imagem), lista com CheckCircle dos beneficios, mesma estrutura da secao 2 do SkudoGuard.

**Especificacoes Tecnicas** — Cards com propriedades (Transmitancia Luminosa, Bloqueio UV, Rejeicao IR, etc.) usando o mesmo layout de physicalProps do Antivandalismo13K.

**CTA Final** — Titulo "Proteja Sua Pele Hoje", botao WhatsApp verde, texto de atendimento. Mesmo padrao do CTA do SkudoGuard.

Animacoes: fadeInUp, fadeInLeft, fadeInRight, scaleIn, stagger — identicas as demais paginas.

---

## 2. src/pages/SkudoUltra.tsx (nova)

Pagina da pelicula de seguranca maxima. Estrutura:

**Hero** — Badge "Seguranca Maxima", titulo "INSULFILM SkudoUltra", subtitulo sobre Ultra Security Grade, separator-accent, parallax.

**Diferenciais vs SkudoGuard** — Secao com titulo "SkudoUltra vs SkudoGuard", tabela comparativa em Card com grid mostrando:
- Laminacao (Tripla vs Quadrupla)
- Resistencia a Tensao (valores comparados)
- Forca de Ruptura (valores comparados)
- Adesivo (Performance vs Ultra Performance)
- Tecnologia (Security Grade vs Ultra Security Grade)

**Diferenciais Tecnicos** — Grid de 4 cards (glass-card no fundo escuro) com icones e descricoes dos diferenciais exclusivos do SkudoUltra.

**Especificacoes Tecnicas** — Mesma estrutura de cards com physicalProps, valores superiores ao SkudoGuard.

**CTA Final** — Titulo "Protecao Maxima Para Sua Familia", botao WhatsApp, mesmo padrao.

---

## 3. src/App.tsx (edicao)

- Descomentar import SkinSafe8K (linha 24)
- Descomentar import SkudoUltra (linha 25)
- Descomentar rota /skinsafe8k (linha 62)
- Descomentar rota /skudo-ultra (linha 63)

---

## 4. Internacionalizacao

Adicionar chaves nos 3 arquivos de traducao (pt.json, en.json, es.json):
- `skinSafe8kPage.*` — hero, beneficios, especificacoes, CTA
- `skudoUltraPage.*` — hero, diferenciais, comparativo, especificacoes, CTA

---

## Detalhes Tecnicos

### Arquivos novos
- `src/pages/SkinSafe8K.tsx`
- `src/pages/SkudoUltra.tsx`

### Arquivos editados
- `src/App.tsx` — descomentar 2 imports + 2 rotas
- `src/i18n/locales/pt.json` — adicionar chaves skinSafe8kPage e skudoUltraPage
- `src/i18n/locales/en.json` — mesmas chaves traduzidas
- `src/i18n/locales/es.json` — mesmas chaves traduzidas

### Padrao seguido
- Imports identicos: framer-motion, lucide-react, shadcn/ui (Card, Button, Badge)
- Variantes de animacao: fadeInUp, fadeInLeft, fadeInRight, scaleIn, stagger (copias exatas)
- Parallax hero com useScroll/useTransform/useSpring
- Classes CSS: bg-carbon-gradient, bg-hero-texture, bg-diagonal-texture, glass-card, card-premium-hover, separator-accent, shadow-premium-lg
- WHATSAPP_NUMBER constante, CTA com MessageCircle icon
- useTranslation para todos os textos

