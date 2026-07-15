# Comparativo das Linhas Solares no Hub Solar

Adicionar 3 novas seções em `src/pages/AutomotivoHubSolar.tsx`, embutidas no fluxo existente, **sem alterar copy aprovada** dos produtos. Todos os dados vêm das PDPs já publicadas.

## Onde entram (ordem da página)

```text
HERO → INTRODUÇÃO → NAV TABS
→ SOLAR PERFORMANCE FILMS (5 produtos)
→ SOLAR PREMIUM FILMS (2 produtos)
→ [NOVO] TABELA COMPARATIVA
→ [NOVO] QUAL ESCOLHER?
→ BENEFÍCIOS
→ [NOVO] FAQ COMPARATIVO
→ CTA FINAL
```

## 1. Tabela Comparativa (7 linhas)

Colunas: **Linha · Série/Construção · Tonalidades · UV · IR · TSER · Garantia · Badge**

| Linha | Construção | Tons | UV | IR | TSER | Garantia | Badge |
|---|---|---|---|---|---|---|---|
| RayStart | Pigmentada | 35/20/05 | 90% | — | — | 1 ano | Entrada |
| RayPro | Pigmentação homogênea + UV | 35/20/05 | 98% | — | — | 3 anos | Clássica |
| Carbon | Carbono verdadeiro + filtro IR | 35/20/05 | 99% | +50% | — | 5 anos | Carbono real |
| Ceramic | Nanocerâmica | 35/20/05 | 99% | +85% | — | 4 anos | Cerâmica real |
| Polariz | Híbrida metalizada | 20/10/05 | 99% | — | 57% | 5 anos | Teto-solar |
| Matrix | Nanocerâmica Premium | 70/35/15 | +99% | +75% | — | 10 anos | Premium |
| Polariz Ultra | Metal-cerâmica | 15/05 | +99% | +75% | 70% | 10 anos | Topo absoluto |

Desktop: tabela horizontal com scroll suave. Mobile: cards empilhados (mesmo dado, layout responsivo). Cada linha da tabela com link "Ver PDP →" para a rota correspondente.

## 2. "Qual escolher?" (guia por perfil)

Três colunas com CTA para as PDPs mais indicadas:

- **Quero apenas escurecer** → RayStart / RayPro
- **Quero rejeitar calor de verdade** → Carbon / Ceramic / Polariz
- **Quero o máximo de performance** → Matrix / Polariz Ultra

Cada card usa apenas frases já existentes nas descrições dos produtos (campo `highlight` do `performanceProducts`/`premiumProducts`).

## 3. Badges visuais

Aplicados também nos cards dos produtos existentes (nos blocos `ProductSection`), sem tocar em texto:

- **RayStart** — "Entrada"
- **RayPro** — "Mais vendido da linha clássica"
- **Carbon** — "Carbono verdadeiro"
- **Ceramic** — "Cerâmica real"
- **Polariz** — "Único com teto-solar (Performance)"
- **Matrix** — "Melhor custo-benefício Premium"
- **Polariz Ultra** — "Topo absoluto · 70% TSER"

Componente pequeno reutilizando `bg-accent`/`glass-card`.

## 4. FAQ comparativo

Reaproveita `PdpFaq` (variant dark) já existente, com `productName="linha solar INSULFILM™"`. 6 perguntas extraídas do conteúdo atual das PDPs/Hub:

1. Qual a diferença entre RayStart e RayPro?
2. Carbon ou Ceramic: quando cada uma faz sentido?
3. Qual película posso aplicar em teto-solar?
4. Qual a diferença entre Polariz e Polariz Ultra?
5. Quais linhas têm 10 anos de garantia?
6. Qual a melhor para máxima rejeição de calor (IR/TSER)?

Respostas montadas exclusivamente a partir dos dados já presentes nas PDPs e do próprio Hub Solar — nada inventado. Gera JSON-LD FAQPage automaticamente (já implementado no `PdpFaq`).

## Detalhes técnicos

- Arquivo único alterado: `src/pages/AutomotivoHubSolar.tsx`.
- Novo array `comparisonRows` tipado, alimentando tabela e "Qual escolher?".
- Tabela: `<table>` semântica com `overflow-x-auto` em wrapper; versão `md:hidden` em cards.
- Badges: pequeno componente inline (`<span class="...">`).
- FAQ: import de `PdpFaq` + array `faqItems: FaqItem[]`.
- Estilos seguem tokens existentes (`bg-carbon-gradient`, `separator-accent`, `glass-card`, `text-accent`).
- Sem novas rotas, sem novas dependências, sem alteração no `App.tsx`.
- Atualizar `<meta name="description">` do Hub para mencionar "compare as 7 linhas".