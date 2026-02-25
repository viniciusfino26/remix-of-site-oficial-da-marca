

# Plano: Reestruturar a Página Automotivo com Banners de Produto (Estilo Home)

## Objetivo
Transformar o topo da página `/automotivo` para seguir o layout da referência (foto 4), substituindo os cards de ícones por **ProductBanners** com imagens full-bleed e cards semi-transparentes sobrepostos, mantendo todos os textos existentes.

## Estrutura Proposta (de cima para baixo)

```text
┌─────────────────────────────────────────┐
│  HERO (existente — mantido)             │
│  "Películas Automotivas" + parallax     │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  SEÇÃO TEXTO (fundo branco)             │
│  Título + parágrafo descritivo          │
│  (texto do productsTitle/Subtitle +     │
│   copy da referência)                   │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  BANNER 1 — Controle Solar             │
│  Imagem: Design_sem_nome_2.png          │
│  Card azul à direita                    │
│  "Películas Solares para Vidros"        │
│  → link /automotivo/solar               │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  BANNER 2 — Segurança                  │
│  Imagem: Design_sem_nome_3.png          │
│  Card laranja à esquerda                │
│  "Películas Antivandalismo e Segurança" │
│  → link /automotivo/seguranca           │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  BANNER 3 — PPF Phantom                │
│  Imagem: Design_sem_nome_1.png          │
│  Card cinza à direita                   │
│  "Películas de Proteção de Pintura"     │
│  → link /automotivo/ppf                 │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  RESTANTE DA PÁGINA (mantido)           │
│  Solar Products tabs, Parallax Break,   │
│  Benefits, CTA, Differentials, FAQ      │
└─────────────────────────────────────────┘
```

## Alterações Técnicas

### 1. Copiar as 3 imagens para `src/assets/`
- `Design_sem_nome_1.png` → `src/assets/auto-ppf.png`
- `Design_sem_nome_2.png` → `src/assets/auto-solar.png`
- `Design_sem_nome_3.png` → `src/assets/auto-seguranca.png`

### 2. Editar `src/pages/Automotivo.tsx`
- Importar `ProductBanner` e as 3 imagens
- **Substituir** a seção "Navegação por Silos" (linhas 178-232) — os 3 cards de ícones — por:
  - Uma seção de texto em fundo branco com o título e parágrafo descritivo (matching a referência: "Customize o visual do seu carro com películas automotivas de alta performance para vidros e lataria." + copy completa)
  - 3 componentes `ProductBanner` com os textos da referência:
    1. Solar → `cardVariant="blue"`, `alignment="right"`, imagem `auto-solar.png`
    2. Segurança → `cardVariant="orange"`, `alignment="left"`, imagem `auto-seguranca.png`
    3. PPF → `cardVariant="gray"`, `alignment="right"`, imagem `auto-ppf.png`
- Todo o restante da página (Solar Products, Parallax, Benefits, CTA, Differentials, FAQ) permanece intacto

### 3. Textos dos Banners (da referência)
| Banner | Título | Descrição | Botão |
|--------|--------|-----------|-------|
| Solar | Películas Solares para Vidros | Vista seu carro e você com conforto e estética refinada sob medida. | EXPLORE |
| Segurança | Películas Antivandalismo e Segurança para Vidros | Tranquilidade de verdade, somente com vidros reforçados e mais seguros. | CONHEÇA |
| PPF | Películas de Proteção de Pintura (PPF) | Revestimento regenerativo para trafegar com sossego. Depois do dano, será tarde. | SAIBA MAIS |

### 4. Seção de Texto (espaço branco)
Texto principal: **"Customize o visual do seu carro com películas automotivas de alta performance para vidros e lataria."**
Parágrafo: "Com uma linha completa de soluções em películas, a INSULFILM™ oferece tudo o que você precisa para personalizar e proteger seu veículo e você. Nossas películas originais são fabricadas para lhe garantir uma experiência única em nitidez ótica com visual sofisticado, além de um duradouro desempenho técnico superior. Compare e comprove, sinta a diferença de películas concebidas para superar sua expectativa."

## Nenhum arquivo removido
- Apenas `Automotivo.tsx` é editado
- O componente `ProductBanner` já existe e é reutilizado sem alteração

