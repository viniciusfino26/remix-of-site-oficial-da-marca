# Auditoria de Consistência Numérica — 19 PDPs (revisado)

## Por que isso importa

Repetir a mesma informação em TLDR, Cards técnicos e Schema.org **ajuda** SEO/GEO — desde que os valores **batam exatamente**. Quando divergem, Google rebaixa por inconsistência e LLMs (ChatGPT, Perplexity, Gemini) extraem o número errado. **Esse é o único tipo de "repetição" que prejudica.**

## Regras confirmadas (não tocar)

- **Phantom existe em duas linhas**: PPF Automotivo e SPF Arquitetônico, **ambos com 5 anos**.
- **Películas arquitetônicas mantêm "Até X anos"** — não alterar.
- **Manter unidade "micras"** — é a unidade que o brasileiro reconhece (não trocar por µm).

---

## Divergências a corrigir

### Crítico

| PDP | Campo | Valor errado | Valor correto |
|---|---|---|---|
| **PhantomGloss** (auto) | TLDR — Garantia | `10 anos` | **`5 anos`** |
| **PhantomGloss** (auto) | TLDR — Contexto | "10 anos de garantia" | **"5 anos de garantia"** |
| **PhantomArquitetonico** | Schema/meta — Tipo | `PPF` | **`SPF — Surface Protection Film`** (é arquitetônico) |
| **Antivandalismo13K** | falta Specs Cards | — | adicionar replicando TLDR |
| **SkinSafe8K** | falta Specs Cards | — | adicionar replicando TLDR |
| **SkudoGuard** | falta Specs Cards | — | adicionar replicando TLDR |
| **SkudoUltra** | falta Specs Cards | — | adicionar replicando TLDR |

### Médio — harmonizar rótulos (mesmo número, nomes diferentes)

- **Eclipse**: TLDR diz "Filtro de IR 30%" mas Specs diz "Rejeição de IR Até 30%" → padronizar TLDR para **"Rejeição de IR"** e **"Até 30%"**.
- **Matrix / PolarizUltra**: Schema usa `"Rejeição de Infravermelho (IR)"` e TLDR `"Rejeição de IR"` → padronizar Schema para **"Rejeição de IR"** (mesmo termo do site).
- **Clear70**: TLDR `"Nano Cerâmica"` ↔ Specs `"Nano Ceramic IR Film"`. Padronizar Specs para **"Nano Cerâmica"** (manter nome técnico EN apenas no Schema).
- **GrigioInvertito / ReflessoDArgento**: Specs `"Vapor-Coated Al"` → padronizar para **"Sputtered Alumínio"** (igual TLDR).
- **Naturale**: Specs `"Bombardeamento Iônico"` → padronizar para **"Sputtered Neutra"** (igual TLDR).

### Não fazer (confirmado pelo usuário)

- ~~Trocar "micras" por "µm"~~ → manter `"micras"` em TLDR e Schema.
- ~~Remover "Até" de garantia em arquitetônicas~~ → manter `"Até 10 anos"`, `"Até 5 anos"`, `"Até 3 anos"` no Schema das 10 PDPs Solar Arq.

---

## Arquivos afetados (~10 PDPs)

- `src/pages/PhantomGloss.tsx` (correção de garantia 10→5)
- `src/pages/PhantomArquitetonico.tsx` (correção PPF→SPF no Schema/meta)
- `src/pages/Antivandalismo13K.tsx` (adicionar Specs Cards)
- `src/pages/SkinSafe8K.tsx` (adicionar Specs Cards)
- `src/pages/SkudoGuard.tsx` (adicionar Specs Cards)
- `src/pages/SkudoUltra.tsx` (adicionar Specs Cards)
- `src/pages/Eclipse.tsx` (rótulo IR)
- `src/pages/Matrix.tsx` (rótulo IR no Schema)
- `src/pages/PolarizUltra.tsx` (rótulo IR no Schema)
- `src/pages/Clear70.tsx` (nome técnico Specs)
- `src/pages/GrigioInvertito.tsx` (nome técnico Specs)
- `src/pages/ReflessoDArgento.tsx` (nome técnico Specs)
- `src/pages/Naturale.tsx` (nome técnico Specs)

## Garantias

- Apenas valores técnicos serão alterados — nenhum copy de Hero, descrição ou benefícios será tocado.
- Sem mudanças de layout, roteamento ou novos componentes.
- Após mudanças, todas as PDPs terão valores idênticos entre TLDR ↔ Specs Cards ↔ Schema.org.

## Resultado esperado

- Google interpreta o produto como entidade única e bem-definida → melhor ranking.
- LLMs (ChatGPT/Perplexity) extraem sempre o mesmo número independente da fonte.
- Cliente final vê os mesmos dados no resumo, na tabela e no rich snippet.
