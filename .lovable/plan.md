

# Reescrita Completa: AutomotivoHubSeguranca.tsx

## Objetivo
Transformar a pagina de hub de seguranca automotiva de um grid minimalista de 4 cards para uma landing page rica e imersiva, fiel ao conteudo fornecido pelo usuario e ao padrao visual premium da homepage (parallax, separator-accent, alternancia de backgrounds, animacoes fadeInLeft/fadeInRight).

## Estrutura Final da Pagina

```text
┌─────────────────────────────────────────────┐
│  HERO  (bg-carbon-gradient + parallax)      │
│  Badge: Protecao e Seguranca                │
│  H1: Proteja-se das incertezas...           │
│  Subtitulo longo (copy completa)            │
│  separator-accent                           │
├─────────────────────────────────────────────┤
│  FAIXA DE DESTAQUE                          │
│  Texto cinza: Nao altera originalidade...   │
│  Faixa vermelha (bg-accent): Peliculas      │
│  Fortes. Feitas para resistir...            │
├─────────────────────────────────────────────┤
│  NAVEGACAO / ANCORAGEM (bg-background)      │
│  H3: ENCONTRE O SEU INSULFILM™ IDEAL       │
│  3 cards glass-card com icones:             │
│  [Protecao Acidentes] [Antivandalismo]      │
│  [Defesa]                                   │
│  Cada card com subtitulo + "Saiba Mais"     │
│  separator-accent                           │
├─────────────────────────────────────────────┤
│  PELICULAS DE PROTECAO (bg-carbon-gradient) │
│  H2: Peliculas de Protecao                  │
│  Layout alternado:                          │
│  ┌──────────┬──────────┐                    │
│  │ Texto    │ Imagem   │  SkinSafe8K        │
│  │ fadeInL  │ fadeInR   │                    │
│  └──────────┴──────────┘                    │
│  separator-accent                           │
│  ┌──────────┬──────────┐                    │
│  │ Imagem   │ Texto    │  Antivandalismo13K │
│  │ fadeInL  │ fadeInR   │                    │
│  └──────────┴──────────┘                    │
├─────────────────────────────────────────────┤
│  PELICULAS DE DEFESA (bg-background)        │
│  H2: Peliculas de Defesa                    │
│  Layout alternado:                          │
│  ┌──────────┬──────────┐                    │
│  │ Texto    │ Imagem   │  SkudoGuard        │
│  │ fadeInL  │ fadeInR   │                    │
│  └──────────┴──────────┘                    │
│  separator-accent                           │
│  ┌──────────┬──────────┐                    │
│  │ Imagem   │ Texto    │  SkudoUltra        │
│  │ fadeInL  │ fadeInR   │                    │
│  └──────────┴──────────┘                    │
├─────────────────────────────────────────────┤
│  CTA FINAL (bg-carbon-gradient)             │
│  "Exija as peliculas originais INSULFILM™"  │
│  "Elimine as vantagens do marginal."        │
│  3 botoes: Lojas | Aplicador | WhatsApp     │
└─────────────────────────────────────────────┘
```

## Conteudo Exato (fornecido pelo usuario)

### Hero
- **H1:** "Proteja-se das incertezas no caminho. Dirija confiante de chegar la com protecao e seguranca de verdade."
- **Subtitulo:** "Conheca as peliculas automotivas de Protecao, Antivandalismo e Defesa originais INSULFILM™. Desenvolvidas com engenharia de ponta e polimeros sinteticos de alta performance elastica, nossas peliculas oferecem muito mais resistencia para voce rodar com tranquilidade e seguranca total do seu carro, uma fortaleza, repelindo os vidros contra acidentes e ataques criminosos."

### Faixa de Destaque
- **Texto cinza:** "Nao altera a originalidade do veiculo. Garantia de montadora preservada."
- **Faixa accent (vermelha):** "Peliculas Fortes. Feitas para resistir. Rigorosamente testadas para nao falhar."

### Navegacao (3 cards)
1. **Protecao em Acidentes** — "Evite a projecao direta de estilhacos contra os ocupantes" → ancora para SkinSafe8K
2. **Protecao Antivandalismo** — "Escudo contra atos de vandalismo e estilhacos em choques" → ancora para Antivandalismo13K
3. **Defesa** — "Verdadeiros escudos muito mais resistentes a impactos agressivos de invasao" → ancora para SkudoGuard/SkudoUltra

### SkinSafe8K
- **Subtitulo:** "PROTECAO CONTRA ACIDENTES."
- **Texto:** "Em caso de quebras acidentais provocadas por impactos, ou quebra espontanea, falhas mecanicas ou choques termicos - a pelicula retem os fragmentos, evitando a projecao direta contra os ocupantes do veiculo."
- **Botao:** "VEJA" → Link para `/automotivo/seguranca/skinsafe8k`

### Antivandalismo 13K
- **Subtitulo:** "PROTECAO CONTRA ATOS DE VANDALISMO."
- **Texto:** "Pelicula projetada com alta tecnologia. Dificulta invasoes rapidas e retem estilhacos em quebras acidentais. O escudo contra a quebra do vidro por abordagens rapidas e premeditadas. Torna o vidro principal uma barreira resistente a impactos."
- **Botao:** "VEJA" → Link para `/automotivo/seguranca/antivandalismo13k`

### SkudoGuard
- **Subtitulo:** "MAIS QUE ANTIVANDALISMO, SEGURANCA SUPERIOR FORTE E EFETIVA."
- **Texto:** "Mais protecao contra agressoes, a pelicula SkudoGuard torna o vidro com uma barreira espessa, limitando o acesso imediato nas primeiras tentativas, desestimulando a acao. Retem a projecao direta de estilhacos em acidentes. Torna a transposicao um forte escudo de dificil ruptura antes e, principalmente, apos a quebra do vidro."
- **Botao:** "VEJA" → Link para `/automotivo/seguranca/skudoguard`

### SkudoUltra
- **Subtitulo:** "EXTREMA SEGURANCA. BLINDAGEM CONTRA ARMAS BRANCAS."
- **Texto:** "O maximo em blindagem com filmes, aplicavel aos vidros laterais do carro. Maxima protecao diante de multiplas e severos ataques. Transforma os vidros do seu carro num escudo com altissima resistencia pos quebra para uma invasao com impacto pesado e continuo. Excepcional blindagem contra estilhacos de vidro."
- **Botao:** "VEJA" → Link para `/automotivo/seguranca/skudoultra`

### CTA Final
- **Texto:** "Exija as peliculas originais INSULFILM™. Protecao e Seguranca de verdade para voce e sua familia."
- **Destaque:** "Elimine as vantagens do marginal."
- **3 botoes:** Lojas Oficiais (`/lojas`), Seja um Aplicador (`/parceiro`), WhatsApp

## Detalhes Tecnicos

### Animacoes (identicias a homepage)
- `fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn`, `stagger` — mesmas variantes do Index.tsx
- `useScroll` + `useTransform` + `useSpring` para parallax no hero
- `whileInView` com `viewport={{ once: true }}` em todas as secoes

### Estilos
- Hero: `bg-carbon-gradient` + `bg-hero-texture` com parallax
- Faixa accent: `bg-accent text-accent-foreground` com `font-extrabold uppercase tracking-widest`
- Secoes alternam `bg-background` e `bg-carbon-gradient`
- `separator-accent` entre todas as secoes
- Cards de produto: layout 2 colunas (texto + placeholder imagem com icone Shield), alternando lado
- Placeholder de imagem: `glass-card` com icone `Shield` centralizado + texto "Imagem do produto"

### Arquivo editado
- `src/pages/AutomotivoHubSeguranca.tsx` — reescrita completa (unico arquivo)

### O que NAO muda
- Rotas no App.tsx
- PDPs individuais (SkinSafe8K.tsx, Antivandalismo13K.tsx, SkudoGuard.tsx, SkudoUltra.tsx)
- Homepage, Header, outros hubs
- Helmet SEO mantido e atualizado com a nova copy

