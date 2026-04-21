

## Plano: Eventos de Analytics na página `/lojas`

Instrumentar `src/pages/Lojas.tsx` com eventos GA4/GTM (via `Analytics`/`trackEvent` já existentes em `src/components/Analytics.tsx`) para medir busca por CEP e interação com cards de Centros Autorizados.

### Eventos a disparar

**1. `cep_search` — quando o usuário busca um CEP**
Disparado em `CepSearch.searchCep()` ao final, com sucesso ou falha.

Payload:
- `cep_prefix` (3 dígitos — nunca o CEP completo, evita PII)
- `status`: `success` | `not_found` | `error`
- `precision`: `exact` | `street` | `prefix` | `city`
- `zone`: `Centro` | `Norte` | `Sul` | `Leste` | `Oeste` | `null`
- `recommended_store`: id da loja recomendada pelo prefixo (ou `null`)
- `closest_store`: id da loja mais próxima (calculada após resultado)
- `closest_distance_km`: número arredondado a 1 casa
- `results_count`: quantos cards serão exibidos após filtro

**2. `cep_search_invalid` — CEP com menos de 8 dígitos**
Quando o usuário clica buscar com CEP incompleto. Payload: `cep_length`.

**3. `store_card_view` — card recomendado/mais próximo entrou em viewport**
Disparado uma única vez por busca, no card com `isRecommended` ou primeiro da lista, via `whileInView` ou `useEffect` no `StoreCard` quando há `distance`. Payload: `store_id`, `zone`, `is_recommended`, `distance_km`, `precision`, `search_zone`.

**4. `store_card_click` — clique em qualquer CTA do card** (com origem)
Já existem `Analytics.whatsappClick` e `Analytics.storeLocatorClick`. Vamos **enriquecer** as chamadas dentro de `StoreCard` para incluir contexto da busca quando houver:
- `store_id`, `zone`, `cta_type` (`whatsapp` | `phone` | `directions` | `map_provider`), `is_recommended`, `distance_km`, `precision`, `search_zone`, `position_in_list`.

Para isso, `StoreCard` recebe duas novas props opcionais: `searchContext?: { precision; zone; isRecommended; distance; position }`.

**5. `store_zone_chip_click` — chips de zona no hero** (`#paulista`, `#moema`, etc.)
Payload: `zone`, `store_id`. Reaproveita `Analytics.storeLocatorClick` adicionando `zone` no payload via `trackEvent` direto.

### Implementação técnica

**`src/components/Analytics.tsx`** — adicionar 3 helpers tipados no objeto `Analytics`:

```ts
cepSearch: (params: {
  cep_prefix: string;
  status: 'success' | 'not_found' | 'error';
  precision?: 'exact' | 'street' | 'prefix' | 'city';
  zone?: string | null;
  recommended_store?: string | null;
  closest_store?: string | null;
  closest_distance_km?: number | null;
  results_count?: number;
}) => trackEvent('cep_search', params),

cepSearchInvalid: (cepLength: number) =>
  trackEvent('cep_search_invalid', { cep_length: cepLength }),

storeCardView: (params: { store_id; zone; is_recommended; distance_km; precision; search_zone }) =>
  trackEvent('store_card_view', params),

storeCardClick: (params: { store_id; zone; cta_type; is_recommended?; distance_km?; precision?; search_zone?; position_in_list? }) =>
  trackEvent('store_card_click', params),
```

**`src/pages/Lojas.tsx`** — alterações:

1. **`CepSearch`**: depois de definir o `result`, calcular `closest_store` e `closest_distance_km` com `haversineKm` sobre `STORES`, e chamar `Analytics.cepSearch({...})`. Para os caminhos de erro (CEP inválido no ViaCEP, exception, geocoding totalmente falho), disparar com `status: 'not_found'` ou `'error'`. CEP < 8 dígitos → `Analytics.cepSearchInvalid(digits.length)`.

2. **`StoreCard`**: aceitar `searchContext?` opcional. Usar `useInView` (do framer-motion) ou `whileInView`/`onViewportEnter` para disparar `storeCardView` UMA vez por mudança de busca. Substituir os `onClick` dos CTAs (WhatsApp, telefone, NavigationPicker) por `Analytics.storeCardClick({...})` enriquecido. Manter chamadas legadas (`whatsappClick`, `mapDirectionsClick`) para não quebrar dashboards existentes — disparamos os dois.

3. **Loop de render dos cards** (linha ~716): passar `searchContext` derivado do `searchResult` + posição `i`.

4. **Chips de zona no hero**: adicionar `onClick` chamando `trackEvent('store_zone_chip_click', { zone, store_id })`.

### Privacidade / LGPD

- **Nunca enviar CEP completo** ao GA4 — apenas `cep_prefix` (3 dígitos), suficiente para análise regional sem identificar pessoa.
- Eventos só disparam após `Analytics` injetar GTM/GA4 (sem dependência adicional aqui — `trackEvent` já é no-op se `gtag`/`dataLayer` indisponíveis).
- Nenhum dado pessoal (rua, nome, endereço retornado pelo ViaCEP) vai para o analytics.

### Arquivos afetados

- `src/components/Analytics.tsx` — adicionar 4 helpers
- `src/pages/Lojas.tsx` — instrumentar `CepSearch`, `StoreCard`, chips de zona e loop de render

### Como validar depois de implementado

1. Abrir DevTools → Network (filtro `collect?v=2`) ou usar GA4 DebugView.
2. Buscar CEP `01310-100` → ver `cep_search` com `status=success`, `zone=Centro`, `precision=exact|street|prefix`.
3. Buscar `99999-999` → ver `cep_search` com `status=not_found`.
4. Clicar no card recomendado → ver `store_card_view` (1x) e `store_card_click` com `cta_type=whatsapp` e `is_recommended=true`.
5. Clicar em chip de zona no hero → ver `store_zone_chip_click`.

