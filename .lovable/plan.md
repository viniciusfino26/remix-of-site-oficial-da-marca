

# Referencia Visual da LP + Linha do Tempo da Marca

## O que vamos fazer

Usar a landing page da Loja Pacaembu como referencia visual para as paginas de produto, e criar uma pagina institucional "Quem Somos" com a linha do tempo completa da marca.

---

## Parte 1: Pagina "Quem Somos" com Linha do Tempo

Criar `src/pages/QuemSomos.tsx` com:

### 1.1 -- Hero Institucional
- Titulo "A marca das peliculas. Desde 1988."
- Texto principal: "Por qual motivo quase todo mundo chama de insulfilm as peliculas de protecao solar?" seguido do texto completo fornecido
- Fundo azul escuro com textura geometrica (mesmo padrao do hero da home)

### 1.2 -- Linha do Tempo Interativa
- Timeline vertical com marcadores por decada:
  - **1980-1990**: Nascimento e pioneirismo (1988 inauguracao, 1996-98 maior distribuidora do mundo, primeiras peliculas OEM, regulamentacao Contran)
  - **2000-2010**: Expansao (Blindado 2000, primeira loja oficial 2001, Elite fotcromatica 2008)
  - **2010-2020**: Inovacao (projeto balistico 2011, primeira franquia 2012, HD 2018, Phantom PPF 2019)
  - **2020-2025**: Futuro (Ultra Definicao 2024, Eclipse/Skye Ultra/Panoramic 2025, Seguranca Superior)
  - **Hoje**: Frase de fechamento "INSULFILM nao protege vidros, protege voce."
- Visual: linha vertical azul com circulos laranja nos marcos, cards alternando esquerda/direita no desktop, empilhados no mobile
- Animacoes scroll-triggered com framer-motion

### 1.3 -- Secao "Nao e tudo igual"
- Conteudo sobre autenticidade e anti-pirataria (extraido da LP referencia)
- Lista de diferenciais com icones (pelicula original, protecao duradoura, aplicadores profissionais, garantia valida)

---

## Parte 2: Pagina de Catalogo Automotivo (referencia visual da LP)

Criar `src/pages/Automotivo.tsx` inspirado no layout da LP Pacaembu:

### 2.1 -- Hero da Pagina
- Titulo "Peliculas de Protecao Solar" + subtitulo "Premium Performance"
- Fundo azul escuro, texto branco, detalhes laranja (como na LP)

### 2.2 -- Cards de Produto (estilo LP)
Cada produto com:
- Nome e classificacao (ex: "INSULFILM Dark -- Classica")
- 4 icones com especificacoes tecnicas (serie, calor rejeitado, tecnologia, pigmentacao)
- Descricao curta
- Badge de garantia
- Botao CTA "Quero saber mais" (link WhatsApp ou futuro formulario)

Produtos a incluir:

**Protecao Solar (Premium Performance):**
- Dark (Serie Pigmentada, ate 39% calor rejeitado, Tecnologia Clear)
- Eclipse (Serie Carbono, ate 49%, High Definition)
- VIP (Serie Carbono Extra, ate 58%, High Definition)

**Ultra Performance:**
- Polaris, Matrix, Polaris Ultra (mencionados como opcoes avancadas)

**Seguranca:**
- Antivandalismo 13K (protecao antivandalismo)
- SkudoGuard (seguranca superior)

**PPF:**
- Phantom 6mil / 8mil (protecao de pintura)

### 2.3 -- Secao Diferenciais
- 5 tabs/cards: Atendimento Especializado, Peliculas de Alta Performance, Box Dedicado, Aplicacao Profissional, Garantia
- Inspirado nos tabs da LP com checkmarks e descricoes

### 2.4 -- FAQ Accordion
- Perguntas frequentes sobre peliculas (extraidas da LP)

---

## Parte 3: Traducoes

Atualizar os 3 arquivos de traducao (`pt.json`, `en.json`, `es.json`) com novas chaves para:
- Pagina Quem Somos (about)
- Timeline (timeline)
- Pagina Automotivo (automotivePage)
- FAQ (faq)

---

## Parte 4: Rotas

Atualizar `src/App.tsx` para adicionar:
- `/quem-somos` -> QuemSomos
- `/automotivo` -> Automotivo

---

## Detalhes Tecnicos

### Arquivos novos:
- `src/pages/QuemSomos.tsx` -- Pagina institucional com timeline
- `src/pages/Automotivo.tsx` -- Catalogo automotivo

### Arquivos editados:
- `src/App.tsx` -- Novas rotas
- `src/i18n/locales/pt.json` -- Traducoes PT
- `src/i18n/locales/en.json` -- Traducoes EN
- `src/i18n/locales/es.json` -- Traducoes ES

### Padroes visuais da LP a replicar:
- Cards de produto com fundo azul escuro e bordas sutis
- Icones tecnicos em grid 4 colunas
- Badges de garantia com icone
- Botoes CTA laranja com sombra
- Secoes alternando fundo branco e fundo azul escuro
- Tipografia Nunito Sans ExtraBold para titulos, Light para descricoes

