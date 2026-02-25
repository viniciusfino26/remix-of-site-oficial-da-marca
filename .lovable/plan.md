

# Infraestrutura de SEO: Meta Tags + Schema Markup (JSON-LD) — Linha Automotiva

## Descobertas da Analise

Ao explorar o projeto, identifiquei o seguinte mapeamento de arquivos:

| Produto | Arquivo Existente | Rota Existente |
|---|---|---|
| Matrix | **Nao existe** (dados dentro de Automotivo.tsx) | **Nao existe** |
| Polariz Ultra | **Nao existe** (dados dentro de Automotivo.tsx) | **Nao existe** |
| VIP | **Nao existe** (dados dentro de Automotivo.tsx) | **Nao existe** |
| Eclipse | **Nao existe** (dados dentro de Automotivo.tsx) | **Nao existe** |
| Dark | **Nao existe** (dados dentro de Automotivo.tsx) | **Nao existe** |
| SkinSafe8K | `src/pages/SkinSafe8K.tsx` | `/skinsafe8k` |
| Antivandalismo 13K | `src/pages/Antivandalismo13K.tsx` | `/antivandalismo13k` |
| SkudoGuard | `src/pages/SkudoGuard.tsx` | `/skudoguard` |
| SkudoUltra | `src/pages/SkudoUltra.tsx` | `/skudo-ultra` |

**Problema**: Os 5 produtos solares (Matrix, Polariz Ultra, VIP, Eclipse, Dark) nao possuem paginas individuais — estao todos dentro de `Automotivo.tsx` como secoes. Para aplicar meta tags e Schema Product individual, cada um precisaria de sua propria rota/pagina.

## Plano de Implementacao

### PASSO 1: Setup Inicial

**1.1 — Instalar `react-helmet-async`**

**1.2 — Envolver app com `HelmetProvider`**
- Editar `src/main.tsx` para importar e envolver `<App />` com `<HelmetProvider>` (precisa estar acima do `BrowserRouter`)

### PASSO 2: Criar paginas individuais para os 5 produtos solares

Criar arquivos minimos que redirecionam ou renderizam o conteudo do produto com SEO:

- `src/pages/Matrix.tsx` — rota `/matrix`
- `src/pages/PolarizUltra.tsx` — rota `/polariz-ultra`
- `src/pages/VIP.tsx` — rota `/vip`
- `src/pages/Eclipse.tsx` — rota `/eclipse`
- `src/pages/Dark.tsx` — rota `/dark`

Cada pagina sera uma pagina de produto dedicada com layout premium (hero + specs + CTA), reutilizando o estilo visual existente do site (bg-carbon-gradient, glass-card, animacoes fadeIn). **Nao sera uma copia do Automotivo** — sera uma landing page focada no produto unico.

**Registrar as 5 novas rotas em `src/App.tsx`** dentro do bloco "Divisao Automotiva".

### PASSO 3: Adicionar Helmet em cada pagina

Para cada uma das 9 paginas (5 novas + 4 existentes), adicionar:

```text
<Helmet>
  <title>{titulo fornecido}</title>
  <meta name="description" content="{descricao fornecida}" />
  <meta property="og:title" content="{og:title fornecido}" />
  <meta property="og:description" content="{descricao fornecida}" />
  <meta property="og:type" content="product" />
  <meta property="og:image" content="LINK_DA_IMAGEM_AQUI" />
  <meta property="og:url" content="https://www.insulfilm.com.br/{rota}" />
  <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
</Helmet>
```

**Schema `schemaMarkup`** para cada pagina (tipo `Product`):

```text
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{nome do produto}",
  "brand": { "@type": "Brand", "name": "INSULFILM™" },
  "description": "{descricao fornecida}",
  "image": "LINK_DA_IMAGEM_AQUI",
  "url": "https://www.insulfilm.com.br/{rota}",
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "{prop1}", "value": "{val1}" },
    { "@type": "PropertyValue", "name": "{prop2}", "value": "{val2}" },
    { "@type": "PropertyValue", "name": "Garantia", "value": "{garantia}" }
  ]
}
```

### PASSO 4: Arquivos editados/criados

| Acao | Arquivo |
|---|---|
| Editar | `src/main.tsx` — adicionar `HelmetProvider` |
| Editar | `src/App.tsx` — registrar 5 novas rotas |
| Criar | `src/pages/Matrix.tsx` |
| Criar | `src/pages/PolarizUltra.tsx` |
| Criar | `src/pages/VIP.tsx` |
| Criar | `src/pages/Eclipse.tsx` |
| Criar | `src/pages/Dark.tsx` |
| Editar | `src/pages/SkinSafe8K.tsx` — adicionar Helmet + Schema |
| Editar | `src/pages/Antivandalismo13K.tsx` — adicionar Helmet + Schema |
| Editar | `src/pages/SkudoGuard.tsx` — adicionar Helmet + Schema |
| Editar | `src/pages/SkudoUltra.tsx` — adicionar Helmet + Schema |

### Dados SEO por pagina (resumo)

1. **Matrix** (`/matrix`): Title "INSULFILM™ Matrix | Pelicula Automotiva Nano Ceramica", Schema props: Nano Ceramica, IR ate 75%, 10 anos
2. **Polariz Ultra** (`/polariz-ultra`): Title "INSULFILM™ Polariz Ultra | Pelicula Automotiva Hibrida", Schema props: Hibrida Metal-Ceramica, IR ate 75%, 10 anos
3. **VIP** (`/vip`): Title "INSULFILM™ VIP | Pelicula de Carbono Alta Performance", Schema props: Carbono, IR ate 65%, 5 anos
4. **Eclipse** (`/eclipse`): Title "INSULFILM™ Eclipse | Pelicula Automotiva Carbon Color Stable", Schema props: Carbon Color Stable, IR ate 30%, 5 anos
5. **Dark** (`/dark`): Title "INSULFILM™ Dark | Pelicula de Escurecimento Classico", Schema props: Pigmentada, UV ate 95%, 2 anos
6. **SkinSafe8K** (`/skinsafe8k`): Title "INSULFILM™ SkinSafe8K | Pelicula de Seguranca Automotiva", Schema props: 7 mil, protecao quebras, 5 anos
7. **Antivandalismo 13K** (`/antivandalismo13k`): Title "INSULFILM™ Antivandalismo 13K | Seguranca Automotiva Reforcada", Schema props: 12 mil, dupla laminacao, 5 anos
8. **SkudoGuard** (`/skudoguard`): Title "INSULFILM™ SkudoGuard | Seguranca Superior Antivandalismo", Schema props: 16 mil, 440 lbs/in, 10 anos
9. **SkudoUltra** (`/skudo-ultra`): Title "INSULFILM™ SkudoUltra | Blindagem Extrema Contra Armas Brancas", Schema props: 24 mil, tetra laminacao, 10 anos

### O que NAO muda

- Nenhum layout, design ou funcionalidade existente sera alterado
- As paginas existentes (SkinSafe8K, Antivandalismo13K, SkudoGuard, SkudoUltra) recebem apenas o bloco `<Helmet>` no topo do return
- O `SchemaOrg.tsx` existente (Organization, LocalBusiness, FAQ) continua funcionando normalmente — os novos schemas sao complementares (tipo Product)
- Nenhuma dependencia alem de `react-helmet-async`

