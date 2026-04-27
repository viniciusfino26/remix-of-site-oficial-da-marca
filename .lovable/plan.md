
## Objetivo

Replicar **identicamente** o conteúdo textual da seção "Marca" do site oficial `insulfilm.com.br/marca` e suas 5 ramificações nas páginas equivalentes do site em construção. **Apenas textos** — design, layout, componentes, animações, cores e tipografia permanecem exatamente como estão hoje.

## Mapeamento de páginas (origem → destino)

| Página externa | Página no nosso projeto | Rota |
|---|---|---|
| `/marca/` (Visão Geral) | `src/pages/MarcaSobre.tsx` | `/marca` |
| `/marca/o-que-e-insulfilm` | `src/pages/MarcaOQueE.tsx` | `/marca/o-que-e-insulfilm` |
| `/marca/historia` | `src/pages/MarcaHistoria.tsx` | `/marca/historia` |
| `/marca/tecnologia` | `src/pages/MarcaTecnologia.tsx` | `/marca/tecnologia` |
| `/marca/autenticidade` | `src/pages/MarcaAutenticidade.tsx` | `/marca/autenticidade` |
| `/marca/marca-registrada` | `src/pages/MarcaRegistrada.tsx` | `/marca/marca-registrada` |

## O que será feito em cada página

Para cada uma das 6 páginas:

1. **Preservar 100% da estrutura visual atual**: hero, seções, cards, ícones, animações framer-motion, tokens de cor/tipografia, breakpoints, ParallaxBreak, CTAs, Footer, SEO/Helmet shell.
2. **Substituir somente os textos** dos seguintes elementos:
   - Título e subtítulo do hero
   - Títulos de seções (h2/h3)
   - Parágrafos descritivos
   - Itens de listas (bullets)
   - Citações em destaque (blockquotes)
   - FAQ (perguntas e respostas)
   - Cards de "Explore mais sobre a marca" (títulos, descrições e links já existentes)
3. **Atualizar metadados SEO** (title, description, canonical) para refletir o conteúdo novo.

## Estrutura textual a aplicar (resumo por página)

### 1. MarcaSobre.tsx — "A Marca INSULFILM™"
- Hero: "A Marca INSULFILM™" / "Protegendo pessoas em ambientes com vidro."
- Seções: O que é a INSULFILM™ · O que a marca representa (lista de benefícios) · Mais do que produto (lista do sistema) · Reputação e construção da marca · O uso do termo "insulfilm" · Tese central ("INSULFILM™ não existe para proteger o vidro. Existe para proteger as pessoas que estão por trás dele.")
- FAQ: 3 perguntas
- Explore: cards para O que é · História · Tecnologia · Autenticidade · Marca registrada

### 2. MarcaOQueE.tsx — "O que é INSULFILM™"
- Seções: O termo "insulfilm" no uso cotidiano · O esclarecimento necessário · A categoria correta (películas técnicas para vidro) · O que é a INSULFILM™ · Por que essa distinção importa · Reputação e leitura correta no ambiente digital · Síntese final
- FAQ: 3 perguntas
- Explore: cards para Visão Geral · História · Autenticidade · Marca registrada

### 3. MarcaHistoria.tsx — "História da INSULFILM™"
- Seções: Uma trajetória ligada ao desenvolvimento do segmento · Uma presença construída no tempo (lista) · História e reputação
- Linha do tempo editorial: Década de 1980 · Década de 1990 · Anos 2000 · Anos 2010 em diante
- Citação de fechamento
- Explore: cards para Visão Geral · Pioneirismo · Presença e Autoridade · Tecnologia

### 4. MarcaTecnologia.tsx — "Tecnologia INSULFILM™"
- Seções: Engenharia aplicada ao vidro · Plataforma tecnológica (controle solar, segurança e proteção, alta transparência) · Estrutura técnica das soluções · Processo e padronização · Tecnologia como origem da reputação · Reputação e uso indevido de associações tecnológicas · Essência
- Explore: cards para Visão Geral · Autenticidade · Marca registrada

### 5. MarcaAutenticidade.tsx — "Autenticidade e Padrão"
- Seções: O que define o padrão INSULFILM™ · A diferença entre uso genérico e marca registrada · O que a autenticidade muda na prática · Autenticidade e reputação · Como reconhecer a comunicação oficial
- Citação: "Ao buscar INSULFILM™, o cliente busca um padrão específico de produto, aplicação, reputação e validação."
- FAQ: 2 perguntas
- Explore: cards para Visão Geral · Tecnologia · Marca registrada · O que é INSULFILM™

### 6. MarcaRegistrada.tsx — "Marca Registrada"
- Seções: Proteção concedida · O que essa proteção significa · Proteção da reputação da marca · O uso popular do termo · Clareza para o consumidor e para o ambiente digital
- Citação: "INSULFILM™ é marca registrada. Sua proteção jurídica reforça a identidade construída ao longo do tempo."
- FAQ: 2 perguntas
- Explore: cards para Visão Geral · Autenticidade · O que é INSULFILM™ · Aviso Legal

## Detalhes técnicos

- Edição apenas em `src/pages/Marca*.tsx` (6 arquivos). Sem alteração em rotas (`App.tsx`), Header/Footer, componentes compartilhados, `index.css`, `tailwind.config.ts`.
- Manter exatamente os mesmos componentes (`PageHero`, `Card`, `motion.div`, ícones lucide-react, `ParallaxBreak`, etc.) e suas props de estilo.
- Atualizar `<Helmet>` de cada página (title, meta description, canonical) com base no novo título principal.
- Citações em destaque devem reproduzir as aspas e quebras de linha originais.
- Listas de bullets devem manter o componente visual já usado no projeto, apenas trocando os itens.
- Os cards de "Explore mais" reusam links internos já existentes (`/marca/historia`, `/marca/tecnologia`, etc.). O card "Aviso Legal" (na MarcaRegistrada) aponta para `/legal/marca-registrada` (rota já existente).
- Conformidade com `mem://brand/nomenclatura-produtos` e `mem://brand/diretrizes-comunicacao`: manter `INSULFILM™` com símbolo, capitalização correta, e termos jurídicos da marca preservados.

## Fora do escopo

- Sem mudanças visuais (cores, fontes, espaçamentos, animações).
- Sem criação ou remoção de páginas/rotas.
- Sem ajustes em imagens, ícones ou vídeos.
- Sem alterações em outras seções do site (Arquitetônico, Automotivo, etc.).

## Critério de aceite

- As 6 páginas exibem o conteúdo textual idêntico ao do site `insulfilm.com.br/marca` (e suas 5 sub-rotas).
- O design (estrutura, cores, tipografia, animações, breakpoints) permanece visualmente igual ao atual.
- Navegação e links internos entre as páginas Marca continuam funcionando.
- SEO (title/description/canonical) atualizado em cada página.
