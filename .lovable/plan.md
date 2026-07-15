# Etapa 1 — Transformar Dark em RayStart

Primeira etapa do overhaul da linha Solar Automotiva. Foco exclusivo no produto **RayStart** (substitui a antiga PDP Dark). Etapas futuras (RayPro, Carbon, Ceramic, Polariz, Matrix, Polariz Ultra) virão em novos passos.

## O que muda

### 1. Nova PDP `AutomotivoRayStart.tsx`
Renomear/reescrever a atual `AutomotivoDark.tsx` como `AutomotivoRayStart.tsx`, mantendo o mesmo padrão visual dark premium (hero parallax, specs cards, ficha técnica, posicionamento, garantia, CTA), com o **conteúdo integral do documento**:

- **Hero:** badge "Solar Performance Films · Linha de Entrada", H1 "INSULFILM™ RayStart", subtítulo "O primeiro passo para escurecer o vidro e recuperar o conforto visual." + descritor do doc.
- **Seção "O que esta linha resolve":** 3 cards (Excesso de claridade, Interior à mostra, Vidro sem acabamento) com os textos exatos do doc.
- **Sobre esta linha + Posição no portfólio:** bloco lado a lado listando toda a hierarquia Solar Performance (RayStart ●, RayPro, Carbon, Ceramic, Polariz) e Solar Premium (Matrix, Polariz Ultra), com RayStart destacada.
- **Ficha técnica (Performance Técnica):** tabela com as 3 variantes RayStart 35 / 20 / 05 exatamente com os números do doc (TL, IR 05%, UV 90%, TSER 24/26/29%, privacidade Médio/Médio Alto/Alto).
- **Specs cards:** 4 cards — Construção "Basic Film Pigmentada", Nitidez Ótica "Regular", Bloqueio UV "90%", Garantia "2 anos".
- **O que você recebe:** 4 bullets do doc (3 tonalidades, 90% UV, tom preto clássico, não interfere em eletrônicos).
- **Garantia oficial:** 2 anos (mesmo padrão da atual Dark).
- **CTA final:** Solicitar Orçamento → `/contato` + link secundário "Conheça a linha completa" → `/automotivo/solar`.
- **SEO:** title, meta description, canonical, og e JSON-LD Product atualizados para RayStart.

Toda a copy vem do documento enviado — não inventar textos, não misturar com a copy antiga da Dark.

### 2. Roteamento (`src/App.tsx`)
- Adicionar rota `/automotivo/solar/raystart` → `AutomotivoRayStart`.
- Substituir a rota antiga `/automotivo/solar/dark` por `<Navigate to="/automotivo/solar/raystart" replace />` (redirect client-side, equivalente a 301 para SPA).
- Redirect legado `/dark` continua apontando para o novo destino via cascata.
- Remover import de `AutomotivoDark` (arquivo pode ser deletado após a migração para evitar código morto).

### 3. Hub Solar (`src/pages/AutomotivoHubSolar.tsx`)
Reestruturar a listagem para refletir o novo portfólio, removendo Dark, Eclipse e Vip conforme decisão:
- Remover cards Dark, Eclipse e Vip.
- Adicionar card **RayStart** (usando por ora o `auto-solar-dark.png` como placeholder até termos imagem própria).
- Manter cards existentes de Polariz, Matrix, Polariz Ultra.
- Atualizar âncoras (`quick nav`) e meta description do hub.
- Observação: RayPro, Carbon e Ceramic **ainda não** entram no hub nesta etapa — serão adicionados nas etapas seguintes conforme cada PDP for construída.

### 4. Header / Mega Menu (`src/components/Header.tsx`)
Remover entradas de Dark, Eclipse e Vip na navegação de Controle Solar Automotivo; adicionar entrada RayStart apontando para `/automotivo/solar/raystart`. Demais categorias (PPF, Segurança, Antivandalismo) permanecem intocadas.

### 5. Links internos residuais
Varredura por referências a `automotivo/solar/dark`, "INSULFILM™ Dark" e cards antigos em componentes de navegação, banners e CTAs cruzados. Substituir por RayStart ou remover se apontarem para produtos descontinuados nesta etapa (Eclipse/Vip continuam com PDP viva, apenas não são mais promovidos no hub/menu — as rotas permanecem para não quebrar links externos).

## Fora do escopo desta etapa
- PDPs RayPro, Carbon, Ceramic, Polariz, Matrix, Polariz Ultra (próximas etapas, uma por vez).
- Remoção definitiva dos arquivos de Eclipse/Vip (mantidos até decisão futura).
- Novas imagens de produto (usaremos placeholder até o material oficial chegar).
- Traduções EN/ES (a PDP atual da Dark já é PT-only; manter o mesmo padrão).

## Validação
- Build limpo (typecheck automático).
- Playwright: navegar em `/automotivo/solar/raystart`, capturar screenshot da PDP inteira; navegar em `/automotivo/solar/dark` e confirmar redirect para a nova URL; abrir `/automotivo/solar` e confirmar que o hub mostra RayStart e não mostra mais Dark/Eclipse/Vip.
