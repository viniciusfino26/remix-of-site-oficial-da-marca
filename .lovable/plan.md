# Segregar navegação do Hub Solar em 3 famílias + reposicionar "Comparar"

## Objetivo
Reorganizar a barra de âncoras "Encontre o seu INSULFILM™ ideal" em **três grupos** de famílias solares e tirar o pill "Comparar" da barra para não poluir, promovendo-o a CTA visualmente distinto.

Famílias:
- **Solar Performance Films** → RayStart, RayPro, Carbon
- **Solar High Performance Films** → Ceramic, Polariz
- **Solar Ultra Performance Films** → Matrix, Polariz Ultra

## Arquivo
`src/pages/AutomotivoHubSolar.tsx` — array `navTabs` (~linhas 30–39) e bloco de navegação (~linhas 356–374).

## Mudanças

### 1. Reestruturar dados
Substituir o array plano por três grupos:

```ts
const navGroups = [
  {
    label: 'Solar Performance Films',
    tabs: [
      { label: 'RayStart', href: '#raystart' },
      { label: 'RayPro',   href: '#raypro' },
      { label: 'Carbon',   href: '#carbon' },
    ],
  },
  {
    label: 'Solar High Performance Films',
    tabs: [
      { label: 'Ceramic', href: '#ceramic' },
      { label: 'Polariz', href: '#polariz' },
    ],
  },
  {
    label: 'Solar Ultra Performance Films',
    tabs: [
      { label: 'Matrix',        href: '#matrix' },
      { label: 'Polariz Ultra', href: '#polariz-ultra' },
    ],
  },
];
```

### 2. Layout — 3 colunas rotuladas
Container `flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-8`. Cada grupo:
- Rótulo pequeno em uppercase: `text-[11px] tracking-widest text-accent/90 font-bold mb-3 text-center`.
- Pills em `flex flex-wrap justify-center gap-2`, estilo outline branco/transparente (mesmo dos atuais).
- Divisores verticais entre grupos em desktop: `<div className="hidden md:block w-px h-20 bg-white/15" />`.
- Em mobile empilham naturalmente sem divisor.
- Remover os separadores `|` e o realce laranja fixo do primeiro item — todos os pills de produto passam a ter o mesmo estilo.

```text
┌────────────────────────────────────────────────────────────────────────────┐
│                       ENCONTRE O SEU INSULFILM™ IDEAL                      │
│                          Conheça nossas películas                          │
│                                                                            │
│  SOLAR PERFORMANCE   │  SOLAR HIGH PERFORMANCE  │  SOLAR ULTRA PERFORMANCE │
│  [RayStart][RayPro]  │     [Ceramic][Polariz]   │    [Matrix][Polariz U.]  │
│      [Carbon]        │                          │                          │
└────────────────────────────────────────────────────────────────────────────┘

           (fora da barra, abaixo/à direita)  ⚖  Comparar as 7 linhas
```

### 3. "Comparar" fora da barra de pills
Remover "Comparar" da nav. Renderizar imediatamente abaixo dos 3 grupos, alinhado à direita do container, como CTA discreto e distinto:

```tsx
<div className="mt-8 flex justify-center md:justify-end">
  <a href="#comparar">
    <Button
      variant="ghost"
      className="text-white/80 hover:text-accent hover:bg-white/5 font-bold rounded-full px-5 py-2 gap-2 transition-all"
    >
      <Scale className="w-4 h-4" />
      Comparar as 7 linhas
      <ArrowRight className="w-4 h-4" />
    </Button>
  </a>
</div>
```

- Ícone `Scale` do `lucide-react` (adicionar ao import; `ArrowRight` já importado).
- Visual "link forte" em vez de pill sólido — não compete com os pills de produto e não polui a barra.
- Âncora `#comparar` (já existente na página, sem mudança na seção da tabela).

### 4. Fora de escopo
- Copy dos produtos, seções Performance/Premium, tabela comparativa, "Qual escolher?" e FAQ permanecem intactos.
- Nenhuma alteração em `pdpProducts.ts`, outras páginas, ou índices técnicos.
- Nomes das seções internas "Solar Performance Films" e "Solar Premium Films" na página não são renomeados nesta etapa (a segregação em 3 famílias é aplicada apenas na navegação de âncoras). Confirmar se quer que eu também renomeie as seções e os `tech:` de cada produto em um passo seguinte.
