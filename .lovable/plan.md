## Objetivo
Alinhar os índices técnicos (UV, IR, TSER, garantia, tonalidades) do **comparativo no Hub Solar** e das **7 PDPs solares** com as fichas técnicas oficiais enviadas, e remover o rótulo "Único com teto-solar" da linha Polariz.

## Fonte de verdade (fichas oficiais)

| Linha         | Tons                | IR                   | UV     | TSER          | Garantia | Teto-solar |
| ------------- | ------------------- | -------------------- | ------ | ------------- | -------- | ---------- |
| RayStart      | 35 / 20 / 05        | 5%                   | 90%    | 24 / 26 / 29% | 1 ano    | não        |
| RayPro        | 35 / 20 / 05        | 5%                   | 98%    | 34 / 36 / 39% | 3 anos   | não        |
| Carbon        | 35 / 20 / 05        | >30 / >40 / >50%     | 99%    | 36 / 39 / 45% | **4 anos** | não      |
| Ceramic       | 35 / 20 / 05        | >85%                 | 99%    | 54 / 58 / 63% | **5 anos** | não      |
| Polariz       | 20 / 10 / 05        | 38 / 44 / 44%        | 99%    | 47 / 50 / 57% | 5 anos   | **sim**    |
| Matrix        | **70 / 35 / 15 / 05** | 75 / 67 / 67 / 67% | >99%   | 44 / 55 / 60 / 62% | 10 anos | não   |
| Polariz Ultra | 15 / 05             | 75%                  | >99%   | 65 / 70%      | 10 anos  | **não** (ficha diz apenas laterais e traseiro) |

## Correções principais detectadas

1. **Garantia trocada** Carbon ↔ Ceramic no comparativo (hoje: Carbon 5 / Ceramic 4 → correto: Carbon 4 / Ceramic 5).
2. **Matrix** faltando a tonalidade 05 (hoje: 70/35/15).
3. **TSER "—"** em quase todas as linhas → preencher com faixas oficiais.
4. **IR do Carbon** hoje "+50%" → passar para faixa "30–50%" (varia por tom).
5. **Polariz Ultra** afirma "Aplicável em teto-solar" em várias PDPs/Hub → **remover**, pois a ficha oficial lista apenas laterais e traseiro.
6. **Rótulo "Único com teto-solar (Performance)"** no card Polariz → **remover** conforme pedido.

## Arquivos a editar

### `src/pages/AutomotivoHubSolar.tsx`
- **Tabela comparativa** (linhas ~158–164): atualizar 7 linhas com tons/UV/IR/TSER/garantia corretos, incluindo faixas quando o valor varia por tom (ex.: `IR 38–44%`, `TSER 47–57%`).
- **Cards ProductSection** (linhas ~103, 128): remover `badge: 'Único com teto-solar (Performance)'` da Polariz; ajustar textos que citem valores desatualizados (Ceramic "4 anos" → 5; Carbon "5 anos" → 4; Matrix incluir tom 05).
- **FAQ** (linhas ~210–227): remover Polariz Ultra da resposta de teto-solar (deixar apenas Polariz); atualizar valor de Ceramic 4→5 anos e Carbon 5→4 anos; atualizar TSER da Polariz Ultra se necessário.

### PDPs — atualizar bloco de specs, TL;DR, FAQ e `<meta description>` quando divergir
- `src/pages/AutomotivoRayStart.tsx` — confirmar UV 90%, IR 5%, TSER 24–29%, 1 ano.
- `src/pages/AutomotivoRayPro.tsx` — UV 98%, IR 5%, TSER 34–39%, 3 anos.
- `src/pages/AutomotivoCarbon.tsx` — **garantia 4 anos** (não 5), IR 30–50% por tom, TSER 36–45%.
- `src/pages/AutomotivoCeramic.tsx` — **garantia 5 anos** (não 4), IR >85%, TSER 54–63%.
- `src/pages/AutomotivoSolarPolariz.tsx` — IR 38–44%, TSER 47–57%, tons 20/10/05, 5 anos, mantém teto-solar.
- `src/pages/AutomotivoMatrix.tsx` — incluir tom 05; IR 67–75% (75% só no Matrix 70), TSER 44–62%, 10 anos.
- `src/pages/AutomotivoPolariz.tsx` (Polariz Ultra) — IR 75%, TSER 65–70%, tons 15/05, 10 anos, **remover menções a teto-solar** ("Aplicável em teto-solar").

### `src/lib/pdpProducts.ts`
- Ajustar `matrix` (`Até 75% IR` já ok; validar), `polariz-ultra` (IR já 75%). Sem mudanças críticas além de manter coerência das descrições PT/EN/ES se algum valor tiver mudado.

## Fora de escopo
- Não altero copy aprovado além dos números divergentes e da remoção pedida do "único com teto-solar".
- Não crio rotas, componentes ou assets novos.
