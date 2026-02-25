# Silo PPF Automotivo — Plano de Implementacao

## Escopo

Criar 3 novos arquivos e editar App.tsx para adicionar o silo PPF na divisao automotiva.

## Arquivos a Criar

### 1. `src/pages/AutomotivoHubPPF.tsx`

Hub da categoria PPF seguindo o mesmo layout de `AutomotivoHubSolar.tsx`:

- Helmet com title, description, canonical (`/automotivo/ppf`)
- Hero section com badge PPF, titulo e subtitulo
- Grid de cards dos 2 produtos: Phantom 6mil e Phantom 8mil
- Cada card com link para a PDP respectiva
- CTA WhatsApp no final
- Dados dos cards: nome, espessura, tipo de acabamento, garantia

### 2. `src/pages/AutomotivoPhantom6.tsx`

PDP completa baseada no layout existente de `PPF.tsx` (composicao 5 camadas, propriedades fisicas, garantia, CTA):

- Titulo: "INSULFILM™ Phantom 6mil"
- Helmet com canonical `/automotivo/ppf/phantom-6mil`
- schemaMarkup JSON-LD tipo Product
- Espessura: 6 mil / ~150 microns
- Acabamento: Transparente Gloss
- Rota canonica: `/automotivo/ppf/phantom-6mil`

### 3. `src/pages/AutomotivoPhantom8.tsx`

PDP completa com mesmo layout:

- Titulo: "INSULFILM™ Phantom 8mil"
- Helmet com canonical `/automotivo/ppf/phantom-8mil`
- schemaMarkup JSON-LD tipo Product
- Espessura: 8 mil / ~200 microns
- Acabamento: Transparente Gloss (espessura premium)
- Rota canonica: `/automotivo/ppf/phantom-8mil`

## Edicao em App.tsx

Adicionar 3 imports e 3 rotas apos as rotas de Seguranca Automotiva:

```tsx
import AutomotivoHubPPF from "./pages/AutomotivoHubPPF";
import AutomotivoPhantom6 from "./pages/AutomotivoPhantom6";
import AutomotivoPhantom8 from "./pages/AutomotivoPhantom8";

{/* Divisão Automotiva — Hub PPF */}
<Route path="/automotivo/ppf" element={<AutomotivoHubPPF />} />
<Route path="/automotivo/ppf/phantom-6mil" element={<AutomotivoPhantom6 />} />
<Route path="/automotivo/ppf/phantom-8mil" element={<AutomotivoPhantom8 />} />
```

Adicionar redirect da rota legada:

```tsx
<Route path="/ppf" element={<Navigate to="/automotivo/ppf" replace />} />
```

## O que NAO muda

- `PPF.tsx` original permanece intacto (referenciado pelo redirect)
- Homepage, Header, Footer, demais silos
- Todas as outras rotas existentes

## Total


| Acao   | Quantidade          |
| ------ | ------------------- |
| Criar  | 3 arquivos          |
| Editar | 1 arquivo (App.tsx) |
