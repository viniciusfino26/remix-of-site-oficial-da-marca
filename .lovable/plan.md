
# 4 Alteracoes: Nav Arquitetonico + Link Antivandalismo + Icone + Pagina Phantom Arquitetonico

## 1. Renomear "Arquitetura" para "Arquitetonico" no Menu

Alterar o valor de `nav.architecture` nos 3 arquivos de traducao:
- `pt.json`: "Arquitetura" → "Arquitetônico"
- `en.json`: "Architectural" (manter — ja esta correto)
- `es.json`: "Arquitectónico" (ja esta correto)

**Arquivo:** `src/i18n/locales/pt.json` (linha 5)

---

## 2. Adicionar Link do Produto Antivandalismo 13K no Catalogo Automotivo

O card do Antivandalismo 13K em `/automotivo` nao possui a propriedade `link`, entao mostra apenas o botao de WhatsApp em vez de "Ver pagina do produto".

**Acao:** Adicionar `link: '/antivandalismo13k'` ao objeto `antivandal` no array `products` (linha ~108 de `Automotivo.tsx`).

**Arquivo:** `src/pages/Automotivo.tsx`

---

## 3. Trocar o Icone "ExternalLink" por um Mais Convidativo

O icone `ExternalLink` (seta saindo de um quadrado) nao e convidativo para "Ver pagina do produto". Substituir por `ArrowRight` — mais intuitivo e convidativo, indicando "ir para" em vez de "abrir externamente".

**Arquivo:** `src/pages/Automotivo.tsx` (importar `ArrowRight`, substituir `ExternalLink` na renderizacao do botao)

---

## 4. Criar Pagina de Produto: Phantom Arquitetonico (Protecao de Superficies)

Nova pagina dedicada para a pelicula Phantom de protecao de superficies arquitetonicas, baseada no conteudo do PDF "Preserving Design Finishes". O produto tem duas versoes: **Phantom Gloss** e **Phantom Matte**.

### Estrutura da Pagina (`/phantom-arquitetonico`):

**HERO**
- Badge: "Proteção de Superfícies Arquitetônicas"
- Titulo: INSULFILM(TM) Phantom
- Subtitulo: "Preservando o Design dos Seus Acabamentos"
- Texto: "Um guia para arquitetos, designers e proprietários exigentes."

**SECAO: A Decisao que Define a Atmosfera**
- Texto sobre escolha de acabamentos gloss vs matte
- 2 cards lado a lado: Gloss (brilho, luz, impacto) vs Matte (toque, luz, estetica)

**SECAO: Quando o Design Encontra o Uso Diario**
- Texto sobre como superficies sofisticadas falham pelo uso
- Exemplos: copo de vinho, respingo de limao, pano abrasivo

**SECAO: Anatomia do Dano**
- Tabela comparativa Gloss vs Matte
- Gloss: micro-riscos, manchas acidas, perda de brilhancia
- Matte: quebra de uniformidade, manchas de oleo, polimento indesejado

**SECAO: A Solucao — Peliculas de Protecao Phantom**
- Specs: 180 microns, invisibilidade industrial, 5 anos garantia, resistencia, protecao UV

**SECAO: Phantom Gloss — Um Escudo para o Espelho**
- 4 beneficios: Preserva brilho, barreira quimica, resistencia a riscos, limpeza facilitada

**SECAO: Phantom Matte — Protecao Sem Brilho**
- 4 beneficios: Respeito ao projeto, toque aveludado, anti-oleo, uniformidade

**SECAO: Protecao Versatil para Materiais Nobres**
- 4 cards: Marmore, Madeira, Aco Inox, Vidro

**SECAO: O Futuro do Seu Projeto**
- Texto emocional + 3 bullets (preservacao do investimento, intencao do design, projeto impecavel)

**CTA FINAL**
- "Elegancia que permanece. Protecao que nao aparece."
- Botao WhatsApp

### Integracao:
- Nova rota `/phantom-arquitetonico` em `App.tsx`
- Adicionar link no menu Arquitetonico do Header (novo item: "Proteção de Superfícies")
- Textos hardcoded em portugues, usando o design system existente (carbon-gradient, glass-card, Framer Motion)
- Estilo textual inspirado no projeto PPF Phantom (problema → solucao, frases de impacto)

---

## Detalhes Tecnicos

### Arquivos editados:
1. `src/i18n/locales/pt.json` — "Arquitetura" → "Arquitetônico"
2. `src/pages/Automotivo.tsx` — Adicionar `link: '/antivandalismo13k'` ao antivandal + trocar `ExternalLink` por `ArrowRight`
3. `src/App.tsx` — Importar e adicionar rota `/phantom-arquitetonico`
4. `src/components/Header.tsx` — Adicionar item "Proteção de Superfícies" ao submenu Arquitetonico

### Arquivo novo:
5. `src/pages/PhantomArquitetonico.tsx` — Pagina completa do produto (~400 linhas)

### Dependencias: Nenhuma nova. Usa lucide-react (Sparkles, Droplets, Shield, Eye, Layers, etc.), framer-motion, e componentes UI existentes.
