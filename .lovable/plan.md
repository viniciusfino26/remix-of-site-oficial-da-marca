

## Padronizar Hero de Todas as Páginas /marca/* com PageHero

### Problema
As 6 páginas da seção Marca usam um hero inline com `bg-gradient-to-br from-[hsl(...)]` e um SVG base64 como textura — estilo diferente das demais páginas do site que usam o componente `PageHero` com `bg-carbon-gradient` + `bg-hero-texture` + parallax scroll + fade gradient inferior.

A página `/marca/historia` já usa o padrão correto (carbon-gradient + hero-texture inline). As demais 6 precisam ser migradas.

### Solução
Substituir o hero customizado de cada página pelo componente `PageHero`, que já tem: parallax scroll, badge com ícone, título, subtítulo, gradiente de transição para o fundo branco, e animações stagger/fadeInUp/scaleIn.

### Páginas Alteradas (6 arquivos)

| Página | Badge Icon | Badge Text | Título | Subtítulo |
|--------|-----------|------------|--------|-----------|
| `MarcaSobre.tsx` | Shield | t('marca.sobre.badge') | t('marca.sobre.heroTitle') | t('marca.sobre.heroSubtitle') |
| `MarcaRegistrada.tsx` | ShieldCheck | t('marca.registrada.badge') | t('marca.registrada.heroTitle') | t('marca.registrada.heroSubtitle') |
| `MarcaOQueE.tsx` | HelpCircle | t('marca.oQuee.badge') | t('marca.oQuee.heroTitle') | t('marca.oQuee.heroSubtitle') |
| `MarcaAutenticidade.tsx` | BadgeCheck | t('marca.autenticidade.badge') | t('marca.autenticidade.heroTitle') | t('marca.autenticidade.heroSubtitle') |
| `MarcaPresenca.tsx` | Globe | t('marca.presenca.badge') | t('marca.presenca.heroTitle') | t('marca.presenca.heroSubtitle') |
| `MarcaTecnologia.tsx` | Cpu | t('marca.tecnologia.badge') | t('marca.tecnologia.heroTitle') | t('marca.tecnologia.heroSubtitle') |

### O que muda em cada arquivo
1. Adicionar `import PageHero from '@/components/PageHero'`
2. Remover o bloco `<section>` do hero inline (com o SVG base64 e gradient)
3. Substituir por `<PageHero title={...} subtitle={...} badge={{ icon: <Icon />, text: ... }} />`
4. Todo o conteúdo textual permanece inalterado

### Resultado
Todas as páginas do site passam a usar o mesmo padrão visual de hero (carbon-gradient + hero-texture + parallax), garantindo consistência para páginas atuais e futuras.

