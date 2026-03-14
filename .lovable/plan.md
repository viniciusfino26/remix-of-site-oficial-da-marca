

## Plano: Reescrever `src/pages/Automotivo.tsx` como hub principal

**Arquivo alterado:** apenas `src/pages/Automotivo.tsx`

A página atual (~560 linhas) com tabs de produtos solares, seções alternadas e benefícios será substituída por um hub limpo de categoria, seguindo o padrão dos hubs já implementados.

### Estrutura da nova página

1. **Breadcrumb** — Home › Automotivo

2. **PageHero** — título "Películas Automotivas INSULFILM™ — São Paulo", badge "Automotivo", subtítulo sobre a divisão automotiva, CTA "Agendar Instalação" via WhatsApp

3. **Grid de 3 cards grandes de categoria** (`md:grid-cols-3`), cada um com ícone (Sun/Shield/Layers), nome, descrição de 2 linhas e botão "Explorar":
   - Películas Solares → `/automotivo/solar` — "Dark, Eclipse, Vip, Polariz Ultra, Matrix — do clássico ao cerâmico"
   - Proteção e Segurança → `/automotivo/seguranca` — "SkinSafe 8K, Antivandalismo, SkudoGuard, SkudoUltra"
   - PPF — Proteção de Pintura → `/automotivo/ppf` — "Phantom 6 mil e Phantom 8 mil — proteção de pintura premium"

4. **ParallaxBreak** com stats (+40 Países, 5 Gerações, #1 Marca)

5. **"Por que escolher INSULFILM™"** — 4 diferenciais em grid `md:grid-cols-4` com ícone + título + descrição curta (Tecnologia de Ponta, Rede Autorizada, Garantia de Fábrica, Instalação Profissional)

6. **Centros Autorizados** — 4 cards com dados reais de Moema, Paulista, Santana e Pacaembu (endereço resumido + zona + botão "Ver Centro Autorizado" linkando para `/lojas`)

7. **FAQ** — Accordion com 4 perguntas gerais sobre películas automotivas

8. **CTA final** — "Agendar Instalação" com WhatsApp (`5511976136911`)

### Componentes reutilizados
`PageHero`, `Card`/`CardContent`, `Button`, `Badge`, `Accordion`, `Breadcrumb`, `ParallaxBreak`, Framer Motion animations (`fadeInUp`, `stagger`)

### O que NÃO será alterado
App.tsx, nenhuma PDP, nenhum hub automotivo filho, nenhum outro arquivo

