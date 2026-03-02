

## Problema

A página `/automotivo/seguranca` usa um layout escuro com `ProductRow` customizado (placeholders glass-card sem imagens reais). O visual desejado (Foto 2) segue o padrão do hub solar arquitetônico (`ArqHubSolar.tsx`), com seções de categoria usando o componente `ProductShowcase` + cards de produto abaixo, fundo claro e filtros de categoria.

## Alterações em `src/pages/AutomotivoHubSeguranca.tsx`

### 1. Reestruturar para usar `ProductShowcase`
- Remover o componente `ProductRow` customizado
- Importar e usar `ProductShowcase` (mesmo componente de `ArqHubSolar`)
- Cada seção (Proteção, Defesa) vira um bloco com `ProductShowcase` + grid de cards de produto abaixo

### 2. Layout das seções de produtos
- **Películas de Proteção**: `ProductShowcase` com título, descrição da categoria e imagem (placeholder por enquanto). Abaixo, cards linkando para SkinSafe8K e Antivandalismo 13K
- **Películas de Defesa**: Mesmo padrão. Cards para SkudoGuard e SkudoUltra

### 3. Mudanças visuais
- Seções de produto com **fundo claro** (`bg-background`) em vez de `bg-carbon-gradient`
- Cards de produto no estilo `glass-card rounded-2xl` com hover, igual ao ArqHubSolar
- Botões "Ver detalhes" com seta nos cards individuais
- Botão "Explorar Categoria" no ProductShowcase

### 4. Navegação por categorias
- Adicionar botões de filtro (Todos / Proteção / Defesa) no estilo pill/rounded, igual ao ArqHubSolar
- Cards de navegação atuais (navCards) serão removidos em favor dos filtros

### 5. Manter sem alteração
- Hero (seção escura no topo)
- Faixa de destaque (banner laranja)
- ParallaxBreak com stats
- CTA final
- Todos os textos de produtos, subtítulos e descrições
- Helmet/SEO

### Estrutura final
```text
Hero (escuro, mantido)
Faixa de destaque + banner laranja (mantido)
Filtros de categoria [Todos | Proteção | Defesa]
Películas de Proteção → ProductShowcase + 2 cards
ParallaxBreak (mantido)
Películas de Defesa → ProductShowcase + 2 cards
CTA final (mantido)
```

Arquivo alterado: `src/pages/AutomotivoHubSeguranca.tsx` (único arquivo)

