# Segregar seções de produtos em 3 famílias

Hoje a página tem apenas 2 blocos ("Solar Performance Films" com 5 produtos + "Solar Premium Films" com 2). O menu já foi segregado em 3 grupos, mas os blocos abaixo (foto 2) não. Este plano alinha os blocos ao menu.

## Reestruturação dos arrays de produtos

Em `src/pages/AutomotivoHubSolar.tsx`, substituir os arrays atuais por três:

- `performanceProducts` → RayStart, RayPro, Carbon
- `highPerformanceProducts` → Ceramic, Polariz
- `ultraPerformanceProducts` → Matrix, Polariz Ultra (renomeando o antigo `premiumProducts`)

Os objetos de produto permanecem idênticos — apenas mudam de array.

## Três seções de produtos

Substituir os 2 blocos (`SOLAR PERFORMANCE FILMS` + `SOLAR PREMIUM FILMS`) por 3 blocos com o mesmo template visual atual (fundo branco, `border-t border-border`, header centralizado):

```text
┌───────────────────────────────────────────────┐
│ LINHA PERFORMANCE                             │
│ Solar Performance Films                       │
│ Do primeiro escurecimento ao carbono verdadeiro. │
├── RayStart ── RayPro ── Carbon ───────────────┤

┌───────────────────────────────────────────────┐
│ LINHA HIGH PERFORMANCE                        │
│ Solar High Performance Films                  │
│ Nanocerâmica e híbrida metalizada polarizada. │
├── Ceramic ── Polariz ─────────────────────────┤

┌───────────────────────────────────────────────┐
│ LINHA ULTRA PERFORMANCE                       │
│ Solar Ultra Performance Films                 │
│ O ápice: nanocerâmica premium e metal-cerâmica. │
├── Matrix ── Polariz Ultra ────────────────────┤
```

Cada bloco mantém o padrão atual: eyebrow `text-accent`, `h2` `text-primary`, subtítulo `text-muted-foreground`, e `.map()` sobre o array correspondente renderizando `<ProductSection />` com divisores `border-b border-border` entre itens.

Os âncoras `#raystart`, `#raypro`, `#carbon`, `#ceramic`, `#polariz`, `#matrix`, `#polariz-ultra` continuam funcionando (baseadas no `id` do produto).

## Copy — o que **não** será alterado

Regra de memória: copy aprovada é imutável. Portanto:

- O campo `text` (descrição longa) de cada produto **fica intocado**, mesmo onde o corpo menciona "Topo da Solar Performance Films" (Ceramic) ou "Salto de tecnologia dentro da Solar Performance Films" (Carbon).
- O campo `tech` (linha pequena acima do nome, ex.: "Solar Performance Films · Nanocerâmica") também fica intocado.
- Os subtítulos propostos acima para os 3 novos blocos são novos textos de seção; se você preferir manter os atuais ("Do primeiro escurecimento à tecnologia polarizada de 4ª geração." e "O ápice da engenharia INSULFILM™ em rejeição térmica e visibilidade.") ou ditar outros, me diga antes de aprovar.

Se quiser que eu atualize também as menções internas de "Solar Performance Films / Solar Premium Films" no `tech` e no `text` para refletir a nova nomenclatura de 3 famílias, avise — nesse caso trato como revisão de copy autorizada.

## Escopo técnico

- Arquivo único: `src/pages/AutomotivoHubSolar.tsx`.
- Nenhuma mudança em componentes, rotas, dados de comparação ou navegação.
