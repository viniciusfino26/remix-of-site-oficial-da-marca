

# Redesign do Hub Controle Solar Arquitetonico

## Resumo

Reescrever `src/pages/ArqHubSolar.tsx` de uma pagina simples com grid flat de 9 cards para uma pagina de venda completa com 4 secoes distintas, filtros visuais por categoria estetica e copy de conversao.

## Arquivo a editar

`src/pages/ArqHubSolar.tsx` — reescrita completa (1 arquivo).

## Nova Estrutura do Componente

### Secao 1 — Hero
- H1: "Conforto Termico e Design Sofisticado para o Seu Projeto"
- Subtitulo longo (vibe selling) sobre calor, UV, estetica
- CTA hero: "Falar com um Especialista Arquitetonico" (WhatsApp)
- Badge "Controle Solar Arquitetonico"

### Secao 2 — Filtros e Categorizacao Visual
- H2: "Como voce deseja transformar o seu ambiente?"
- Texto de apoio
- 4 categorias com estado de filtro ativo (useState), cada uma mostrando seus produtos em cards clicaveis:

| Filtro | Produtos |
|---|---|
| Alta Transparencia | Clear70, Orizzonte70, Ultravioletti90 |
| Estetica Neutra | Naturale |
| Privacidade e Espelhados | Metallico Argento, Reflesso d'Argento, Specchiato Bronzo |
| Estetica Fume e Invertida | Petrolio, Grigio Invertito |

- Cada filtro tera: titulo, texto descritivo, e grid de product cards
- Os filtros serao botoes clicaveis que mostram/escondem os produtos da categoria (ou scroll-to, ou tabs)
- Implementacao com `useState<string | null>` para filtro ativo, mostrando todos por default

### Secao 3 — Prova Social e Garantia
- H2: "Tecnologia e Confianca de Quem Criou o Mercado"
- Texto sobre nanotecnologia, garantia, aplicadores certificados
- Icones visuais (Shield, Award, etc.)

### Secao 4 — Bottom CTA
- H2: "Qual e a pelicula ideal para o seu vidro?"
- Texto sobre consultoria personalizada
- Botao: "SOLICITE SEU ORCAMENTO AGORA" (WhatsApp)

## Detalhes Tecnicos

- Manter imports existentes (Helmet, motion, lucide, Card, Button, Badge, Link)
- Adicionar `useState` do React para controle de filtro ativo
- Adicionar icones: `Shield`, `Award`, `Eye`, `Thermometer`, `Sparkles` do lucide-react
- Manter animacoes `fadeInUp`, `scaleIn`, `stagger` existentes
- Manter Helmet SEO com canonical `/arquitetonico/solar`
- Manter `WHATSAPP_NUMBER` constante
- Todos os nomes de produto no formato "INSULFILM™ [NOME]"
- Cards de produto com Link para as rotas existentes

## O que NAO muda

- Rotas no App.tsx (ja registradas)
- PDPs individuais dos 9 produtos
- Nenhum outro arquivo

