

## Plano: Substituir conteúdo de `/marca/tecnologia`

Vou reescrever `src/pages/MarcaTecnologia.tsx` com o novo texto, mantendo a estética premium (PageHero, glassmorphism, Framer Motion, ícones Lucide) e removendo a dependência de chaves i18n antigas — texto agora hardcoded em PT-BR conforme aprovado.

### Estrutura da nova página

1. **PageHero** (mantém)
   - Badge: "Plataforma Tecnológica" (ícone `Cpu`)
   - Título: "Tecnologias INSULFILM™"
   - Subtítulo: "Engenharia aplicada ao controle solar, proteção e performance"

2. **Intro** — parágrafo curto sobre marca registrada + engenharia de materiais

3. **Plataforma Tecnológica** (3 cards em grid `md:grid-cols-3`)
   - Controle Solar (`Sun`) — 4 bullets
   - Segurança e Proteção (`ShieldCheck`) — 3 bullets
   - Alta Transparência Arquitetônica (`Eye`) — 3 bullets

4. **Engenharia de Construção** (card com 4 bullets, ícone `Layers`)

5. **Processo O&M** (card destaque accent, ícone `Cog`)
   - Subtítulo: "Controle industrial e padronização"

6. **Essência da Marca** (bloco final destaque, ícone `ShieldCheck`)
   - "INSULFILM™ não é um termo genérico. É uma marca registrada que representa tecnologia, controle e padrão."

### Detalhes técnicos

- Remover imports não usados (`Car`, `Home`, `Building2`, `Thermometer`, `Lock`, `Gauge`)
- Adicionar: `Layers`, `Cog`
- Substituir `useTranslation` → texto hardcoded (copy aprovado, conforme regra de imutabilidade)
- Manter Helmet com SEO atualizado refletindo o novo conteúdo
- Manter padrão visual: `bg-card border border-border rounded-2xl`, accent em ícones, animações `fadeInUp`/`stagger`
- Cards com lista de tecnologias usando `<ul>` com bullets estilizados (ponto accent)

### Arquivo afetado
- `src/pages/MarcaTecnologia.tsx` (reescrita completa)

