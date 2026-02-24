

# Criar Pagina /lojas — Lojas Oficiais INSULFILM

## Resumo

Criar a pagina `src/pages/Lojas.tsx` com as 4 unidades fisicas em Sao Paulo, e adicionar a rota `/lojas` no `App.tsx`. A pagina segue o mesmo padrao visual das demais (carbon-gradient, hero-texture, Framer Motion, shadcn/ui).

---

## Arquivos

### Novo:
- `src/pages/Lojas.tsx` — Pagina completa conforme o codigo fornecido pelo usuario, com:
  - Hero section com navegacao rapida por zona
  - Grid de 4 cards (Pacaembu, Santana, Paulista, Moema) com mapa embed, horarios, servicos, botoes WhatsApp/telefone/como chegar
  - Secao "Arquitetonico Nacional" com CTA WhatsApp
  - Secao "Seja Parceiro Oficial" com link para formulario
  - Tracking Analytics integrado em todos os CTAs
  - Componente `StoreCard` interno com Badge, Card, Button do shadcn/ui

### Editado:
- `src/App.tsx` — Importar `Lojas` e adicionar `<Route path="/lojas" element={<Lojas />} />` antes do catch-all

---

## Detalhes tecnicos

### App.tsx — mudanca:
```typescript
import Lojas from "./pages/Lojas";
...
<Route path="/residencial" element={<Residencial />} />
<Route path="/lojas" element={<Lojas />} />
{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
```

### Correcao no codigo fornecido:
O JSX do `StoreCard` tem um trecho incompleto na area do mapa embed (falta a `<div>` de abertura e o `<iframe>`). Sera reconstruido como:
```tsx
<div className="relative aspect-video overflow-hidden rounded-t-lg">
  <iframe
    src={store.embed}
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title={`Mapa ${store.name}`}
  />
  <div className="absolute top-3 left-3">
    <Badge ...>{store.zone}</Badge>
  </div>
</div>
```

### Dependencias utilizadas (ja instaladas):
- framer-motion, react-i18next, lucide-react, shadcn/ui (Card, Badge, Button)
- Analytics (ja criado)

