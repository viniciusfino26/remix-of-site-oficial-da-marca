

# Implementar Schema.org — Dados Estruturados para SEO

## Resumo

Criar o componente `SchemaOrg.tsx` com dados estruturados JSON-LD para Google Rich Results e LLMs, e integra-lo ao `App.tsx`.

---

## Arquivos

### Novo:
- `src/components/SchemaOrg.tsx` — Componente completo conforme o codigo fornecido, com schemas para Organization, LocalBusiness (4 unidades), FAQPage (home e automotivo), BreadcrumbList (dinamico por rota), e export de STORES

### Editado:
- `src/App.tsx` — Importar e adicionar `<SchemaOrg />` dentro do `<BrowserRouter>`, antes do `<AnalyticsProvider />`

---

## Detalhes tecnicos

### Schemas injetados:
- **Organization** — em todas as paginas (nome, logo, fundacao, redes sociais, contato)
- **LocalBusiness (AutoBodyShop)** — 4 lojas: Pacaembu, Santana, Av. Paulista, Moema, com endereco, geo, horarios, telefone
- **BreadcrumbList** — dinamico por rota (`/`, `/automotivo`, `/residencial`, `/lojas`, etc.)
- **FAQPage** — 7 perguntas na home, 3 perguntas no `/automotivo`; removido em outras paginas

### App.tsx — mudanca:
```
import SchemaOrg from './components/SchemaOrg';
...
<BrowserRouter>
  <SchemaOrg />          // adicionar aqui
  <AnalyticsProvider />
  <Header />
  ...
```

### Injecao via DOM:
- Cada schema e injetado como `<script type="application/ld+json">` no `<head>`
- IDs unicos por schema para evitar duplicatas
- Atualizado automaticamente a cada mudanca de rota via `useLocation`

