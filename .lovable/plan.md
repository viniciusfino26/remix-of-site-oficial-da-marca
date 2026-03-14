## Plano: Reescrever `src/pages/ArqHubSolar.tsx` como hub de categoria solar

**Arquivo alterado:** apenas `src/pages/ArqHubSolar.tsx`

### Estrutura da nova página

1. **Breadcrumb** — Home › Arquitetônico › Controle Solar (usando componentes `Breadcrumb` do shadcn + `Link` do react-router)
2. **Hero** — título "Controle Solar Arquitetônico", texto introdutório sobre rejeição térmica, bloqueio UV e eficiência energética. Usa `PageHero` existente com badge "Controle Solar"
3. **Grid de 9 produtos** — `grid md:grid-cols-3 gap-6`, cada card com `Card`/`CardContent`, nome do produto, subtítulo técnico curto e `Button` "Ver produto" com `Link`:
  - Clear 70 — Nano Cerâmica de alta transparência
  - Orizzonte 70 — Nano Cerâmica com Visão panorâmica com extremo controle térmico
  - Ultravioletti 90 — Bloqueio UV máximo com claridade
  - Naturale — Estética neutra com tecnologia Sputtered
  - Petrólio — Tonalidade preta não refletiva
  - Grigio Invertito — Privacidade com acabamento espelhado invertido
  - Metallico Argento — Espelhado prata premium
  - Reflesso D'Argento — Reflexão prateada de alta rejeição
  - Specchiato Bronzo — Refletivo bronze sofisticado e premium
4. **FAQ** — `Accordion` do shadcn com 5 perguntas sobre controle solar arquitetônico
5. **CTA final** — "Solicitar orçamento" com botão WhatsApp (mesmo número `5511936182746`)

### Padrão visual

- Framer Motion: `fadeInUp`, `scaleIn`, `stagger` (mesmo padrão existente)
- Componentes: `PageHero`, `Card`, `CardContent`, `Button`, `Accordion`, `Breadcrumb`, `ParallaxBreak`
- Nenhum componente novo será criado

### O que NÃO será alterado

- App.tsx, nenhuma PDP, nenhum outro arquivo