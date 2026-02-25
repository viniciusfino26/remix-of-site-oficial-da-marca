# Reestruturacão PDPs em Silos de Comunicacao

## Inventario Atual

**18 PDPs existentes** — todas intactas, com Helmet e Schema Markup:


| Arquivo                 | Linhas | Status  |
| ----------------------- | ------ | ------- |
| `Antivandalismo13K.tsx` | 723    | Intacto |
| `SkudoGuard.tsx`        | 784    | Intacto |
| `SkudoUltra.tsx`        | 712    | Intacto |
| `SkinSafe8K.tsx`        | 290    | Intacto |
| `Matrix.tsx`            | 188    | Intacto |
| `PolarizUltra.tsx`      | 168    | Intacto |
| `VIP.tsx`               | 166    | Intacto |
| `Eclipse.tsx`           | 166    | Intacto |
| `Dark.tsx`              | 166    | Intacto |
| `Clear70.tsx`           | 174    | Intacto |
| `Orizzonte70.tsx`       | 133    | Intacto |
| `Ultravioletti90.tsx`   | 130    | Intacto |
| `Naturale.tsx`          | 130    | Intacto |
| `Petrolio.tsx`          | 130    | Intacto |
| `GrigioInvertito.tsx`   | 130    | Intacto |
| `MetallicoArgento.tsx`  | 130    | Intacto |
| `ReflessoDArgento.tsx`  | 130    | Intacto |
| `SpecchiatoBronzo.tsx`  | 131    | Intacto |


**5 PDPs novas** a criar do zero: ISSF4000, ISSF7000, Jateado, Whiteout, Blackout.

## Implementacao

### Fase 1 — Criar 23 novos arquivos de PDP

Cada novo arquivo sera uma copia completa e independente (sem wrappers) baseada no componente original, com as seguintes alteracoes:

- Nome do componente renomeado (ex: `Matrix` → `AutomotivoMatrix`)
- `schemaMarkup.url` atualizado para a nova rota hierarquica
- `og:url` atualizado para a nova rota hierarquica
- Verificacao do formato "INSULFILM™ [NOME]" em titulo, h1, schema e OG

**Automotivo Solar (5 arquivos):**


| Novo Arquivo            | Baseado Em         | Rota                              |
| ----------------------- | ------------------ | --------------------------------- |
| `AutomotivoMatrix.tsx`  | `Matrix.tsx`       | `/automotivo/solar/matrix`        |
| `AutomotivoPolariz.tsx` | `PolarizUltra.tsx` | `/automotivo/solar/polariz-ultra` |
| `AutomotivoVip.tsx`     | `Vip.tsx`          | `/automotivo/solar/vip`           |
| `AutomotivoEclipse.tsx` | `Eclipse.tsx`      | `/automotivo/solar/eclipse`       |
| `AutomotivoDark.tsx`    | `Dark.tsx`         | `/automotivo/solar/dark`          |


**Automotivo Seguranca (4 arquivos):**


| Novo Arquivo                   | Baseado Em              | Rota                                      |
| ------------------------------ | ----------------------- | ----------------------------------------- |
| `AutomotivoSkinSafe.tsx`       | `SkinSafe8K.tsx`        | `/automotivo/seguranca/skinsafe8k`        |
| `AutomotivoAntivandalismo.tsx` | `Antivandalismo13K.tsx` | `/automotivo/seguranca/antivandalismo13k` |
| `AutomotivoSkudoGuard.tsx`     | `SkudoGuard.tsx`        | `/automotivo/seguranca/skudoguard`        |
| `AutomotivoSkudoUltra.tsx`     | `SkudoUltra.tsx`        | `/automotivo/seguranca/skudoultra`        |


**Arquitetonico Solar (9 arquivos):**


| Novo Arquivo        | Baseado Em             | Rota                                      |
| ------------------- | ---------------------- | ----------------------------------------- |
| `ArqClear70.tsx`    | `Clear70.tsx`          | `/arquitetonico/solar/clear70`            |
| `ArqOrizzonte.tsx`  | `Orizzonte70.tsx`      | `/arquitetonico/solar/orizzonte70`        |
| `ArqUV90.tsx`       | `Ultravioletti90.tsx`  | `/arquitetonico/solar/ultravioletti90`    |
| `ArqNaturale.tsx`   | `Naturale.tsx`         | `/arquitetonico/solar/naturale`           |
| `ArqPetrolio.tsx`   | `Petrolio.tsx`         | `/arquitetonico/solar/petrolio`           |
| `ArqGrigio.tsx`     | `GrigioInvertito.tsx`  | `/arquitetonico/solar/grigio-invertito`   |
| `ArqMetallico.tsx`  | `MetallicoArgento.tsx` | `/arquitetonico/solar/metallico-argento`  |
| `ArqReflesso.tsx`   | `ReflessoDArgento.tsx` | `/arquitetonico/solar/reflesso-d-argento` |
| `ArqSpecchiato.tsx` | `SpecchiatoBronzo.tsx` | `/arquitetonico/solar/specchiato-bronzo`  |


**Arquitetonico Seguranca (2 arquivos — novos, sem base):**


| Novo Arquivo               | Rota                                |
| -------------------------- | ----------------------------------- |
| `ArqSegurancaISSF4000.tsx` | `/arquitetonico/seguranca/issf4000` |
| `ArqSegurancaISSF7000.tsx` | `/arquitetonico/seguranca/issf7000` |


**Arquitetonico Decorativo (3 arquivos — novos, sem base):**


| Novo Arquivo                | Rota                                 |
| --------------------------- | ------------------------------------ |
| `ArqDecorativoJateado.tsx`  | `/arquitetonico/decorativo/jateado`  |
| `ArqDecorativoWhiteout.tsx` | `/arquitetonico/decorativo/whiteout` |
| `ArqDecorativoBlackout.tsx` | `/arquitetonico/decorativo/blackout` |


Os 5 novos produtos (ISSF4000, ISSF7000, Jateado, Whiteout, Blackout) usarao o mesmo layout premium das PDPs arquitetonicas existentes (hero + specs + features + CTA), com dados tecnicos placeholder.

### Fase 2 — Criar 5 paginas Hub

Cada hub tera: hero section, grid de cards dos produtos do silo com link para a PDP, e CTA de orcamento.


| Arquivo                      | Rota                        | Produtos Listados                                                                       |
| ---------------------------- | --------------------------- | --------------------------------------------------------------------------------------- |
| `AutomotivoHubSolar.tsx`     | `/automotivo/solar`         | Matrix, Polariz Ultra, VIP, Eclipse, Dark                                               |
| `AutomotivoHubSeguranca.tsx` | `/automotivo/seguranca`     | SkinSafe8K, Antivandalismo 13K, SkudoGuard, SkudoUltra                                  |
| `ArqHubSolar.tsx`            | `/arquitetonico/solar`      | Clear70, Orizzonte70, UV90, Naturale, Petrolio, Grigio, Metallico, Reflesso, Specchiato |
| `ArqHubSeguranca.tsx`        | `/arquitetonico/seguranca`  | ISSF4000, ISSF7000                                                                      |
| `ArqHubDecorativo.tsx`       | `/arquitetonico/decorativo` | Jateado, Whiteout, Blackout                                                             |


### Fase 3 — Atualizar App.tsx

- Adicionar 28 novos imports (23 PDPs + 5 hubs)
- Registrar rotas hierarquicas conforme especificado
- Adicionar 18 redirects das rotas flat antigas para as novas (ex: `/matrix` → `/automotivo/solar/matrix`)
- Manter todas as rotas nao-produto inalteradas

### O que NAO muda

- Homepage, Header, Footer, WhatsAppButton, LegalNotice
- Paginas institucionais (QuemSomos, Franquias, Carreiras, etc.)
- Paginas de categoria existentes (Automotivo.tsx, Residencial.tsx, Empresarial.tsx)
- Frota, PPF, PhantomArquitetonico

### Total de arquivos


| Acao   | Quantidade                                                    |
| ------ | ------------------------------------------------------------- |
| Criar  | 28 arquivos (23 PDPs + 5 hubs)                                |
| Editar | 1 arquivo (`App.tsx`)                                         |
| Editar | 18 arquivos originais (atualizar URLs canonicas no schema/OG) |
