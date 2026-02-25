

# Cores dos Quadrantes (Cards) nos ProductBanners + LegalNotice Global

## Situação Atual
- **LegalNotice** já está global em `App.tsx` (linha 194) — aparece em TODAS as páginas. Nenhuma mudança necessária.
- **Todos os cards** dos ProductBanners usam a mesma cor: `bg-primary/75` (azul escuro uniforme).

## Problema
Na referência (Homepage-2.png e Automotivo_1.png), cada banner tem uma cor de card diferente:

| Banner | Cor do Card (Referência) |
|--------|--------------------------|
| Películas Solares | Azul escuro/navy |
| Segurança | **Laranja** |
| Comerciais e Residenciais | Azul escuro/navy |
| PPF | **Cinza escuro** |

## Alterações

### 1. `src/components/ProductBanner.tsx` — Adicionar prop `cardVariant`

Nova prop opcional `cardVariant?: 'blue' | 'orange' | 'gray'` com default `'blue'`.

Mapeamento de classes:
- `'blue'` → `bg-[#1a3a6e]/85 backdrop-blur-md` (azul navy, como está hoje mas mais saturado)
- `'orange'` → `bg-accent/85 backdrop-blur-md` (laranja INSULFILM™)
- `'gray'` → `bg-neutral-800/85 backdrop-blur-md` (cinza escuro)

A cor do texto e botão se ajustam:
- Para `'orange'`: texto branco, botão com borda branca ou estilo invertido (botão branco com texto escuro)
- Para `'blue'` e `'gray'`: mantém texto branco e botão laranja accent (como hoje)

### 2. `src/pages/Index.tsx` — Aplicar as variantes corretas

```
ProductBanner Solar        → cardVariant="blue"
ProductBanner Segurança    → cardVariant="orange"  
ProductBanner Comercial    → cardVariant="blue"
ProductBanner PPF          → cardVariant="gray"
```

### 3. Preparação para Automotivo.tsx (quando for reconstruído)

Os mesmos valores serão usados:
- Solar → `cardVariant="blue"`
- Segurança → `cardVariant="orange"`
- PPF → `cardVariant="gray"`

## Arquivos Alterados

| Arquivo | Alteração |
|---------|-----------|
| `src/components/ProductBanner.tsx` | Adicionar prop `cardVariant`, mapear 3 variantes de cor no card |
| `src/pages/Index.tsx` | Passar `cardVariant` nos 4 ProductBanners |

## O que NÃO muda
- LegalNotice (já está global)
- Footer, Header, rotas
- Efeitos parallax e espaçamento dos banners

