

# SEO: Meta Tags + Schema Markup (JSON-LD) — Linha Arquitetônica

## Descobertas

Todos os 9 produtos arquitetônicos listados estão dentro de `src/pages/Residencial.tsx` como seções/cards — não possuem páginas individuais. Situação idêntica aos produtos solares automotivos antes da implementação anterior.

| Produto | Arquivo Individual | Rota |
|---|---|---|
| Clear70 | Não existe | Não existe |
| Orizzonte70 | Não existe | Não existe |
| Ultravioletti90 | Não existe | Não existe |
| Naturale | Não existe | Não existe |
| Petrolio | Não existe | Não existe |
| Grigio Invertito | Não existe | Não existe |
| Metallico Argento | Não existe | Não existe |
| Reflesso d'Argento | Não existe | Não existe |
| Specchiato Bronzo | Não existe | Não existe |

Páginas de categoria existentes (sem Helmet):
- `src/pages/Residencial.tsx` — `/residencial`
- `src/pages/Empresarial.tsx` — `/empresarial`
- `src/pages/PhantomArquitetonico.tsx` — `/phantom-arquitetonico`

## Plano de Implementação

### PASSO 1: Criar 9 páginas de produto arquitetônico

Seguindo o mesmo padrão visual das páginas automotivas (hero com `bg-carbon-gradient`, specs em `glass-card`, seção de detalhes alternada, CTA com WhatsApp), criar:

- `src/pages/Clear70.tsx` — rota `/clear70`
- `src/pages/Orizzonte70.tsx` — rota `/orizzonte70`
- `src/pages/Ultravioletti90.tsx` — rota `/ultravioletti90`
- `src/pages/Naturale.tsx` — rota `/naturale`
- `src/pages/Petrolio.tsx` — rota `/petrolio`
- `src/pages/GrigioInvertito.tsx` — rota `/grigio-invertito`
- `src/pages/MetallicoArgento.tsx` — rota `/metallico-argento`
- `src/pages/ReflessoDArgento.tsx` — rota `/reflesso-dargento`
- `src/pages/SpecchiatoBronzo.tsx` — rota `/specchiato-bronzo`

Cada página terá: `<Helmet>` com title, description, OG tags, JSON-LD Product schema + layout premium (hero + specs grid + detalhes + CTA).

### PASSO 2: Registrar rotas no App.tsx

Adicionar as 9 novas rotas dentro do bloco "Divisão Arquitetônica" em `src/App.tsx`.

### PASSO 3: Adicionar Helmet nas 3 páginas de categoria existentes

Adicionar SEO básico de categoria (não Product, mas WebPage) nas páginas existentes:

- **Residencial.tsx**: Title "INSULFILM™ Residencial | Películas Arquitetônicas para sua Casa"
- **Empresarial.tsx**: Title "INSULFILM™ Empresarial | Películas para Escritórios e Fachadas"
- **PhantomArquitetonico.tsx**: Title "INSULFILM™ Phantom Arquitetônico | PPF para Superfícies"

### Arquivos editados/criados

| Ação | Arquivo |
|---|---|
| Editar | `src/App.tsx` — registrar 9 novas rotas |
| Editar | `src/pages/Residencial.tsx` — adicionar Helmet |
| Editar | `src/pages/Empresarial.tsx` — adicionar Helmet |
| Editar | `src/pages/PhantomArquitetonico.tsx` — adicionar Helmet |
| Criar | `src/pages/Clear70.tsx` |
| Criar | `src/pages/Orizzonte70.tsx` |
| Criar | `src/pages/Ultravioletti90.tsx` |
| Criar | `src/pages/Naturale.tsx` |
| Criar | `src/pages/Petrolio.tsx` |
| Criar | `src/pages/GrigioInvertito.tsx` |
| Criar | `src/pages/MetallicoArgento.tsx` |
| Criar | `src/pages/ReflessoDArgento.tsx` |
| Criar | `src/pages/SpecchiatoBronzo.tsx` |

### Dados SEO por página

Cada página de produto recebe o schema exato fornecido pelo usuário, seguindo o padrão `Product` com `brand: INSULFILM™`, `additionalProperty` com as specs técnicas, e `"LINK_DA_IMAGEM_AQUI"` como placeholder de imagem.

### O que NÃO muda

- Nenhum layout, design ou funcionalidade existente será alterado
- As 3 páginas de categoria (Residencial, Empresarial, Phantom) recebem apenas o bloco `<Helmet>` no topo do return
- O `SchemaOrg.tsx` existente continua funcionando normalmente
- Nenhuma dependência nova necessária (`react-helmet-async` já está instalado)

