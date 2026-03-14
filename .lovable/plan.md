

## Plano: Criar página hub `/arquitetonico`

### Arquivos envolvidos

1. **CRIAR** `src/pages/Arquitetonico.tsx` — nova página hub da divisão arquitetônica
2. **AJUSTAR** `src/App.tsx` — adicionar import e rota (sem alterar nada mais)

### Estrutura da página `Arquitetonico.tsx`

Seguirá o mesmo padrão visual de `Automotivo.tsx`:

1. **Hero** — seção com `bg-carbon-gradient` + `bg-hero-texture`, parallax no texto, título "Películas Arquitetônicas INSULFILM™", subtítulo descritivo, `separator-accent`

2. **3 Cards de categoria** — grid `md:grid-cols-3`, cada card usando `Card`/`CardContent` do shadcn com ícone (Sun, Shield, Layers), título, descrição curta e `Button` com `Link` para:
   - Controle Solar → `/arquitetonico/solar`
   - Proteção e Segurança → `/arquitetonico/seguranca`
   - Decorativo → `/arquitetonico/decorativo`

3. **Seção de benefícios** — 4 itens em grid (Eficiência Energética, Conforto Térmico, Proteção UV, Valorização do Imóvel), mesmo padrão de ícones circulares com `icon-ring-glow`

4. **CTA final** — seção `bg-accent` com botão WhatsApp "Fale com um especialista", link para `wa.me/5511976136911`

Componentes usados: `motion` (framer-motion), `Card`, `CardContent`, `Button`, `Badge`, `Link`, ícones do `lucide-react`. Animações: `fadeInUp`, `scaleIn`, `stagger` — mesmo padrão existente.

### Alteração no App.tsx

- Linha de import junto aos outros imports de páginas
- Rota `<Route path="/arquitetonico" element={<Arquitetonico />} />` na seção "Divisão Arquitetônica"
- Nenhuma outra rota ou import será alterado

