

## Plano: Componente Breadcrumb com Schema JSON-LD + integração em ~30 páginas

### PASSO 1 — Criar `src/components/Breadcrumb.tsx`

Componente que recebe `items: Array<{ label: string; href?: string }>`:
- Renderiza itens separados por `›` usando `Link` do react-router-dom
- Último item sem link (página atual, `font-medium text-foreground`)
- Injeta `BreadcrumbList` JSON-LD no `<head>` via `react-helmet-async`
- Estilo: `container mx-auto px-4 pt-24 pb-2`, texto `text-xs text-muted-foreground`

### PASSO 2 — Substituir breadcrumbs existentes nos hubs

Páginas que **já possuem** breadcrumb inline (remover o bloco antigo, substituir pelo novo componente):

| Página | Tipo atual | Items |
|--------|-----------|-------|
| Automotivo.tsx | shadcn Breadcrumb | Home → Automotivo |
| AutomotivoHubSolar.tsx | nav manual ChevronRight | Home → Automotivo → Películas Solares |
| AutomotivoHubSeguranca.tsx | nav manual ChevronRight | Home → Automotivo → Proteção e Segurança |
| AutomotivoHubPPF.tsx | nav manual ChevronRight | Home → Automotivo → PPF |
| Arquitetonico.tsx | nenhum | Home → Arquitetônico |
| ArqHubSolar.tsx | shadcn Breadcrumb | Home → Arquitetônico → Controle Solar |
| ArqHubSeguranca.tsx | shadcn Breadcrumb | Home → Arquitetônico → Proteção e Segurança |
| ArqHubDecorativo.tsx | shadcn Breadcrumb | Home → Arquitetônico → Decorativo |

### PASSO 3 — Adicionar breadcrumb nas PDPs automotivas

Inserir `<Breadcrumb items={[...]} />` logo após `<main>` em cada PDP (sem alterar nenhum outro conteúdo):

| Arquivo fonte | Items |
|--------------|-------|
| AutomotivoDark.tsx | Home → Automotivo → Películas Solares → Dark |
| AutomotivoEclipse.tsx | ...Solares → Eclipse |
| AutomotivoVip.tsx | ...Solares → VIP |
| AutomotivoPolariz.tsx | ...Solares → Polariz Ultra |
| AutomotivoMatrix.tsx | ...Solares → Matrix |
| SkinSafe8K.tsx | Home → Automotivo → Proteção e Segurança → SkinSafe 8K |
| Antivandalismo13K.tsx | ...Segurança → Antivandalismo 13K |
| SkudoGuard.tsx | ...Segurança → SkudoGuard |
| SkudoUltra.tsx | ...Segurança → SkudoUltra |
| AutomotivoPhantom6.tsx | Home → Automotivo → PPF → Phantom 6 mil |
| AutomotivoPhantom8.tsx | ...PPF → Phantom 8 mil |

### PASSO 4 — Adicionar breadcrumb nas PDPs arquitetônicas

| Arquivo fonte | Items |
|--------------|-------|
| Clear70.tsx | Home → Arquitetônico → Controle Solar → Clear 70 |
| Orizzonte70.tsx | ...Solar → Orizzonte 70 |
| Ultravioletti90.tsx | ...Solar → Ultravioletti 90 |
| Naturale.tsx | ...Solar → Naturale |
| Petrolio.tsx | ...Solar → Petrólio |
| GrigioInvertito.tsx | ...Solar → Grigio Invertito |
| MetallicoArgento.tsx | ...Solar → Metallico Argento |
| ReflessoDArgento.tsx | ...Solar → Reflesso D'Argento |
| SpecchiatoBronzo.tsx | ...Solar → Specchiato Bronzo |
| ArqSegurancaISSF4000.tsx | Home → Arquitetônico → Proteção e Segurança → ISSF 4000 |
| ArqSegurancaISSF7000.tsx | ...Segurança → ISSF 7000 |
| ArqDecorativoJateado.tsx | Home → Arquitetônico → Decorativo → Jateado |
| ArqDecorativoWhiteout.tsx | ...Decorativo → Whiteout |
| ArqDecorativoBlackout.tsx | ...Decorativo → Blackout |

### Regras

- Nenhum conteúdo existente alterado — apenas inserção do `<Breadcrumb />` e remoção de breadcrumbs antigos inline
- Re-export files (ArqClear70.tsx, AutomotivoSkinSafe.tsx, etc.) não são alterados
- App.tsx, Footer.tsx, Header.tsx intocados
- Total: 1 arquivo criado + ~30 arquivos com inserção mínima

