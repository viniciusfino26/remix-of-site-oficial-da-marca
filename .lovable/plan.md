

## Plano: Renomear "Unidade/Loja" para "Centro Autorizado" + remover serviços dos cards

### Duas alterações principais

**1. Substituir toda referência a "loja(s)" e "unidade(s)" por "Centro(s) Autorizado(s)" em todo o site**

**2. Remover os badges de produtos/serviços dos cards na página /lojas** (a linha `services` e o bloco que renderiza os badges "Películas Automotivas", "PPF Phantom", etc.)

### Arquivos a alterar

#### `src/pages/Lojas.tsx` (maior volume)
- Nomes das stores: "Unidade Av. Paulista" → "Centro Autorizado Av. Paulista" (4 stores)
- Comentário "DADOS DAS LOJAS" → "DADOS DOS CENTROS AUTORIZADOS"
- Hero: "Lojas Oficiais" → "Centros Autorizados"
- Subtítulo: "4 unidades em São Paulo" → "4 Centros Autorizados em São Paulo"
- CEP search: "Encontre a loja mais próxima" → "Encontre o Centro Autorizado mais próximo"
- Resultado CEP: "lojas mais próximas" → "Centros Autorizados mais próximos"
- "Ver todas as unidades" → "Ver todos os Centros Autorizados"
- ParallaxBreak: "Unidades em SP" → "Centros Autorizados"
- CTA: "Quer ter a sua própria unidade?" mantém sentido ou → "Quer ter o seu próprio Centro Autorizado?"
- **Remover** o campo `services` dos 4 objetos STORES
- **Remover** o bloco de renderização dos services badges (linhas 411-418)

#### `src/pages/Vendas.tsx`
- "Lojas Físicas" → "Centros Autorizados"
- "Encontre a loja INSULFILM™ mais próxima" → "Encontre o Centro Autorizado INSULFILM™ mais próximo"
- "Ver Lojas" → "Ver Centros Autorizados"

#### `src/pages/Parceiro.tsx`
- ParallaxBreak: "Lojas em SP" → "Centros Autorizados"

#### `src/pages/FAQ.tsx`
- "loja onde fez a aplicação" → "centro autorizado onde fez a aplicação"
- "loja INSULFILM™" → "Centro Autorizado INSULFILM™"

#### `src/pages/PhantomArquitetonico.tsx`
- "Encontre uma Loja" → "Encontre um Centro Autorizado"
- "lojas oficiais" → "Centros Autorizados"
- "Ver Lojas Próximas" → "Ver Centros Autorizados"

#### `src/pages/ArqHubSeguranca.tsx` e `src/pages/ArqHubDecorativo.tsx`
- "Lojas Oficiais" → "Centros Autorizados"

#### `src/pages/AutomotivoHubSeguranca.tsx`
- "Lojas Oficiais" → "Centros Autorizados"

#### `src/pages/Garantia.tsx`
- "loja aplicadora" → "centro autorizado aplicador"

#### `src/components/SchemaOrg.tsx`
- "Loja Oficial INSULFILM™" → "Centro Autorizado INSULFILM™" nas descriptions
- "Lojas Oficiais" no breadcrumb → "Centros Autorizados"
- "Onde tem loja INSULFILM" → "Onde tem Centro Autorizado INSULFILM"
- Comentário "lojas" → "centros autorizados"

#### `src/i18n/locales/pt.json`
- "Lojas em SP" → "Centros Autorizados"
- "loja oficial" → "centro autorizado oficial" (timeline)
- "lojas autorizadas" → "centros autorizados"
- storeLocator subtítulo: "Lojas oficiais" → "Centros Autorizados"
- "Lojas Oficiais" → "Centros Autorizados"
- "Loja Oficial Arquitetônico" → "Centro Autorizado Arquitetônico"

#### `src/i18n/locales/en.json`
- "Stores in SP" → "Authorized Centers"
- "Official INSULFILM™ Store" → "Official INSULFILM™ Authorized Center"
- "authorized stores" → "authorized centers"

#### `src/i18n/locales/es.json`
- Equivalentes em espanhol

#### `src/components/Footer.tsx` — sem mudança de texto (usa i18n key `nav.storeLocator` que já diz "Onde Encontrar")

#### Nota: A rota `/lojas` permanece inalterada (URL não muda)

