

# Reestruturação do Header — Dropdowns com Seções Agrupadas

## Resumo

Reorganizar os dropdowns "Automotivo" e "Arquitetônico" no Header com duas seções visuais distintas cada (separadas por label + divisor), e criar dois componentes placeholder para novas rotas.

## Alterações

### 1. `src/components/Header.tsx`

Substituir a estrutura flat de `items` nos menus `automotive` e `architecture` por uma estrutura com `sections`, cada seção tendo um `title` e seus `items`. O dropdown renderiza cada seção com um título em uppercase/muted e um separador entre seções.

**Automotivo — Nova estrutura:**
```
Seção "Nossas Linhas"
  - Controle Solar → /automotivo/solar
  - Segurança → /automotivo/seguranca
  - PPF Phantom → /automotivo/ppf
─────────────────────
Seção "Atendimento Especializado"
  - Para Meu Carro → /automotivo
  - Para Minha Frota → /frota
```

**Arquitetônico — Nova estrutura:**
```
Seção "Nossas Linhas"
  - Controle Solar → /arquitetonico/solar
  - Segurança → /arquitetonico/seguranca
  - Decorativo → /arquitetonico/decorativo
─────────────────────
Seção "Soluções por Ambiente"
  - Para Minha Residência → /residencial
  - Para Minha Empresa (B2B) → /empresarial
```

**Marca e Suporte** permanecem com estrutura flat (sem seções).

A renderização do dropdown detecta se o menu usa `sections` (array de `{title, items}`) ou `items` flat, e renderiza adequadamente. Cada seção tem um `<p>` com título small/uppercase/muted e um `<Separator>` entre seções. O dropdown mantém `bg-card`, `rounded-xl`, `shadow-premium-lg`, `border-border`, e `z-50`.

Mobile (Sheet) segue a mesma lógica: renderiza seções com títulos internos quando disponíveis.

### 2. Sem novos arquivos de página necessários

As rotas `/frota` e `/empresarial` já existem no `App.tsx` com componentes `Frota` e `Empresarial`. Não é necessário criar placeholders — apenas reorganizar os links no menu.

### 3. O que NÃO muda

- `App.tsx` (rotas intactas)
- Footer, PDPs, Hubs
- Ordem dos menus (Marca → Automotivo → Arquitetônico → Suporte)

## Detalhe técnico

O tipo do menu muda de:
```ts
{ key, label, icon, items: {label, href}[] }
```
para:
```ts
{ key, label, icon, sections?: {title: string, items: {label, href}[]}[], items?: {label, href}[] }
```

Menus com `sections` renderizam agrupados; menus com `items` renderizam flat (brand/support).

