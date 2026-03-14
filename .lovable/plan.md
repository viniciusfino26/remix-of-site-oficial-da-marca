## Plano: Mega-menu no Header.tsx

**Arquivo alterado:** `src/components/Header.tsx` (reescrita completa)

Não será necessário criar MegaMenu.tsx separado — o Header atual já contém toda a lógica de dropdown e a complexidade adicional não justifica um arquivo extra.

### Estrutura Desktop

A navbar terá 5 itens principais + CTA:

1. **Automotivo** (hover → mega-dropdown largo com 2 colunas)
  - Coluna esquerda: 3 categorias com sub-produtos inline
    - Películas Solares → `/automotivo/solar` + 5 sub-links (Dark, Eclipse, VIP, Polariz Ultra, Matrix)
    - Proteção e Segurança → `/automotivo/seguranca` + 4 sub-links
    - PPF → `/automotivo/ppf` + 2 sub-links
  - Coluna direita: links de contexto
    - "Ver tudo em Automotivo" → `/automotivo`
    - "Atendimento Frota" → `/frota`
2. **Arquitetônico** (hover → mega-dropdown largo com 2 colunas)
  - Coluna esquerda: 3 categorias com sub-produtos inline
    - Controle Solar → `/arquitetonico/solar` + 9 sub-links
    - Proteção e Segurança → `/arquitetonico/seguranca` + 2 sub-links
    - Decorativo → `/arquitetonico/decorativo` + 3 sub-links
  - Coluna direita:
    - "Ver tudo em Arquitetônico" → `/arquitetonico`
    - "Projetos Empresariais" → `/empresarial`
3. **Lojas** → `/lojas` (link direto, sem dropdown)
4. **Parceiro** → `/parceiro` (link direto)
5. **Quem Somos** → `/quem-somos` (link direto)

**CTA:** botão dourado "Agendar" → WhatsApp `5511976136911`

### Dropdown Design

- Largura: `w-[600px]` para Automotivo/Arquitetônico
- Layout: `grid grid-cols-[1fr_200px]`
- Categorias com título bold + sub-produtos em texto menor e cor muted
- Coluna direita com fundo levemente diferente (`bg-muted/50`)
- Animação: classes existentes `animate-fade-in` do tailwind config
- Fecha ao `onMouseLeave`

### Mobile

- Sheet existente mantido
- Automotivo e Arquitetônico usam Collapsible (já disponível) para expandir sub-itens
- Sub-produtos indentados com `pl-6`
- Links diretos (Lojas, Parceiro, Quem Somos) como itens simples
- CTA "Agendar" no final

### Remoção

- Remove os menus "A Marca" e "Suporte" do header (itens redistribuídos: Lojas e Quem Somos vão para links fixos, demais acessíveis via footer)
  &nbsp;

### Preservado

- Logo, accent stripe, `bg-glass`, `nav-link-premium` classes
- Nenhum arquivo em `/pages`, App.tsx ou Footer.tsx alterado