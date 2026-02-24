

# Adicionar Aviso Legal Global Antes do Footer

## Resumo

Criar um componente `LegalNotice` que sera renderizado em **todas as paginas** automaticamente, posicionado entre o conteudo da pagina e o Footer no `App.tsx`. O componente contera o aviso de propriedade industrial (INPI), o aviso anti-pirataria com citacoes legais, e uma linha laranja separadora entre as duas secoes.

## Abordagem

Como o `<Footer />` ja e renderizado globalmente em `App.tsx` apos o `<Routes>`, basta inserir o novo componente `<LegalNotice />` imediatamente antes do `<Footer />`. Isso garante que apareca em **todas as paginas** sem precisar editar cada uma individualmente.

## Arquivos

### Novo:
- **`src/components/LegalNotice.tsx`** — Componente com:
  - Fundo `bg-carbon-gradient` (mesmo do footer) para continuidade visual
  - Secao 1: "INSULFILM(TM) e marca registrada." (bold, centralizado)
  - Secao 2: "Aviso de Propriedade Industrial e Intelectual" com o texto completo sobre INPI e registros
  - Linha separadora laranja fina (`bg-accent`, 1-2px de altura, largura parcial)
  - Secao 3: "Aviso Legal - Pirataria e crime!" com todos os artigos da Lei 9.279/96 e CDC
  - Textos centralizados, tamanho pequeno (text-xs/text-sm), cor `text-primary-foreground/60`
  - Citacoes legais em italico
  - Uso de `useTranslation` para i18n

### Editados:
- **`src/App.tsx`** — Importar e renderizar `<LegalNotice />` entre `</Routes>` e `<Footer />`
- **`src/i18n/locales/pt.json`** — Adicionar chaves `legal.*` com todo o conteudo em portugues
- **`src/i18n/locales/en.json`** — Adicionar chaves `legal.*` com versao em ingles
- **`src/i18n/locales/es.json`** — Adicionar chaves `legal.*` com versao em espanhol

## Detalhes Tecnicos

- Componente funcional React com `useTranslation()`
- Layout: `container mx-auto px-4 py-10 text-center`
- Tipografia: titulos em `font-bold text-sm`, corpo em `text-xs text-primary-foreground/50`, citacoes em `italic`
- Linha laranja separadora: `<div className="w-24 h-[2px] bg-accent mx-auto my-8" />`
- Link externo para INPI com `target="_blank" rel="noopener noreferrer"` e estilo `text-accent hover:underline`
- Posicionamento global via `App.tsx` — nao precisa tocar em nenhuma pagina individual
- Border top sutil para separar do conteudo da pagina: `border-t border-primary-foreground/10`

