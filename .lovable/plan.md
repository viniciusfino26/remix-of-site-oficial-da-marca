

## Redesign Completo — Página Franquias

### Objetivo
Criar uma página visualmente impactante e focada em conversão de novos franqueados, com fotos reais dos produtos/contextos e copy persuasivo.

### Estrutura da Nova Página

**1. Hero Full-Screen** — Fundo carbon-gradient com badge "Franquias", título forte ("Empreenda com a Marca Nº1 do Brasil"), contagem dinâmica de anos (`new Date().getFullYear() - 1986`), CTA WhatsApp direto no hero.

**2. Seção Visual "Portfólio Multi-Produto"** — Grid com 4 cards usando as fotos reais já existentes no projeto (`home-solar.png`, `home-seguranca.png`, `home-comercial.png`, `home-ppf.png`). Cada card mostra a linha de produto como fonte de receita do franqueado (Solar, Segurança, Arquitetônico, PPF).

**3. ParallaxBreak com Stats** — Mesmos dados da home:
- `${ano - 1986}+ Anos de Mercado`
- `+4Mi m² instalados`  
- `#1 Marca mais conhecida nacionalmente`

**4. Seção "Por que INSULFILM™?"** — 6 glass-cards com argumentos de conversão:
- Pioneira no Brasil com ~40 anos
- Marca mais reconhecida nacionalmente
- Presença e reconhecimento internacional
- Mercado automotivo e arquitetônico em crescimento constante
- Suporte completo (treinamento, marketing, gestão)
- Território com exclusividade e ROI acelerado

**5. Seção "Mercado em Expansão"** — Bloco narrativo split (texto + imagem `auto-solar.png`) sobre o crescimento do setor, frota brasileira crescente, demanda por eficiência energética em edificações.

**6. Seção "Suporte ao Franqueado"** — 3 cards horizontais: Treinamento Técnico, Marketing Nacional, Gestão e Operação.

**7. CTA Final** — Fundo carbon-gradient, headline de urgência, botão WhatsApp verde grande.

### Imagens Utilizadas (já existentes no projeto)
- `src/assets/home-solar.png` — card Solar
- `src/assets/home-seguranca.png` — card Segurança
- `src/assets/home-comercial.png` — card Arquitetônico
- `src/assets/home-ppf.png` — card PPF
- `src/assets/auto-solar.png` — seção mercado em expansão

### Arquivos Alterados
- **`src/pages/Franquias.tsx`** — Reescrita completa, textos hardcoded em PT-BR (padrão do projeto), usando componentes existentes (ParallaxBreak, Card, Badge, Button) e animações Framer Motion (fadeInUp, stagger, scaleIn).

### Padrões Visuais Seguidos
- Gradientes: `bg-carbon-gradient`, `bg-hero-texture`
- Cards: `glass-card` com hover effects
- Separadores: `separator-accent`
- Tipografia: `font-extrabold` para títulos, `font-light` para descrições
- Animações: Framer Motion com viewport-triggered reveals

