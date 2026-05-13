// src/components/ProductPDP.tsx
//
// Template UNIFICADO de página de produto — atende público residencial + empresarial em uma única URL.
//
// PR 1 — ESQUELETO. Estrutura, dados, SEO e roteamento corretos.
// Ajuste fino visual (parallax do hero, animações, imagens reais, micro-interações)
// é responsabilidade das PRs 2-6 conforme o plano.
//
// Pega dados de:
//   - pdpProducts.ts   (specs canônicos i18n + schema.org Product)
//   - pdpFAQs.ts       (FAQs canônicas i18n + breadcrumb + schema FAQPage)
//   - pdpDualPublic.ts (sobreposição dual-público — dores, mini-FAQ, agregados B2B)
//
// Reutiliza componentes existentes: TLDR, ProductImagePlaceholder, LegalDisclaimer, PDPFaqSection.

import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Building2,
  Home,
  MessageCircle,
  Download,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TLDR from '@/components/TLDR';
import ProductImagePlaceholder from '@/components/ProductImagePlaceholder';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import PDPFaqSection from '@/components/PDPFaqSection';
import { getPDPSchemas } from '@/lib/pdpFAQs';
import { type ProductDualPublic } from '@/data/pdpDualPublic';

// ── Animações (alinhadas com o resto do site) ──
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

interface ProductPDPProps {
  data: ProductDualPublic;
  /** URL canônica completa, ex: https://insulfilm.com.br/pt/arquitetonico/solar/clear70 */
  canonicalUrl: string;
  /** Caminho do hub de categoria, ex: /pt/arquitetonico/solar */
  categoryUrl: string;
  /** Nome legível da categoria, ex: "Solar Arquitetônico" */
  categoryLabel: string;
}

const ProductPDP = ({ data, canonicalUrl, categoryUrl, categoryLabel }: ProductPDPProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), {
    stiffness: 100,
    damping: 30,
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), {
    stiffness: 60,
    damping: 20,
  });

  const productName = data.slug
    ? `INSULFILM™ ${data.slug.charAt(0).toUpperCase()}${data.slug.slice(1)}`
    : 'INSULFILM™';

  return (
    <>
      <Helmet>
        <title>{`${productName} | ${data.hero.title} | INSULFILM™`}</title>
        <meta name="description" content={data.hero.subtitle} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={`${productName} — ${data.hero.title}`} />
        <meta property="og:description" content={data.hero.subtitle} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        {(() => {
          const s = getPDPSchemas(data.seoSlug ?? data.slug);
          return s ? (
            <>
              <script type="application/ld+json">{JSON.stringify(s.breadcrumb)}</script>
              {s.productsByLang.map((p, i) => (
                <script key={`p-${i}`} type="application/ld+json">{JSON.stringify(p)}</script>
              ))}
              {s.faqsByLang.map((f, i) => (
                <script key={`f-${i}`} type="application/ld+json">{JSON.stringify(f)}</script>
              ))}
            </>
          ) : null;
        })()}
      </Helmet>

      <main>
        {/* ──────────────────────────────────────── */}
        {/* SEÇÃO 1 — HERO (universal, não escolhe lado) */}
        {/* ──────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden"
        >
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div
            className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center"
            style={{ y: heroTextY, opacity: heroOpacity }}
          >
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              {/* Breadcrumb */}
              <motion.nav
                aria-label="Breadcrumb"
                variants={fadeInUp}
                className="text-xs uppercase tracking-widest text-primary-foreground/70 mb-6"
              >
                <Link to="/pt" className="hover:text-accent transition-colors">Início</Link>
                <span className="mx-2">/</span>
                <Link to="/pt/arquitetonico" className="hover:text-accent transition-colors">
                  Arquitetônico
                </Link>
                <span className="mx-2">/</span>
                <Link to={categoryUrl} className="hover:text-accent transition-colors">
                  {categoryLabel}
                </Link>
                <span className="mx-2">/</span>
                <span className="text-primary-foreground/80">{productName}</span>
              </motion.nav>

              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Building2 className="w-3.5 h-3.5 mr-2" />
                  {data.hero.badge}
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95] max-w-4xl mx-auto"
              >
                {data.hero.title}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-3xl mx-auto mb-10"
              >
                {data.hero.subtitle}
              </motion.p>

              {/* Quick stats — 4 specs universais */}
              <motion.dl
                variants={stagger}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              >
                {data.hero.quickStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <dt className="text-xs uppercase tracking-wider text-primary-foreground/70 mb-1">
                      {stat.label}
                    </dt>
                    <dd className="text-2xl md:text-3xl font-extrabold text-accent">
                      {stat.value}
                    </dd>
                  </motion.div>
                ))}
              </motion.dl>

              <motion.div variants={scaleIn} className="flex justify-center mt-10">
                <div className="separator-accent" />
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ──────────────────────────────────────── */}
        {/* SEÇÃO 2 — É PRA VOCÊ? (auto-segmentação) */}
        {/* ──────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-extrabold text-foreground mb-2 text-center"
              >
                É pra você?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground font-light text-center mb-10"
              >
                A solução é a mesma. A dor e o caminho mudam. Pule para a parte que importa.
              </motion.p>

              <motion.div
                variants={stagger}
                className="grid md:grid-cols-2 gap-5"
              >
                {/* Card residencial */}
                <motion.a
                  href="#para-residencias"
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="block"
                >
                  <Card className="h-full border-border/60 hover:border-accent/40 transition-all">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <Home className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-extrabold text-foreground">
                          {data.segmentation.residential.headline}
                        </h3>
                      </div>
                      <p className="text-muted-foreground font-light leading-relaxed mb-4">
                        {data.segmentation.residential.description}
                      </p>
                      <span className="text-accent font-bold text-sm flex items-center gap-1">
                        Ver para residências <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </motion.a>

                {/* Card empresarial */}
                <motion.a
                  href="#para-empresas"
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="block"
                >
                  <Card className="h-full border-border/60 hover:border-accent/40 transition-all">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-extrabold text-foreground">
                          {data.segmentation.corporate.headline}
                        </h3>
                      </div>
                      <p className="text-muted-foreground font-light leading-relaxed mb-4">
                        {data.segmentation.corporate.description}
                      </p>
                      <span className="text-accent font-bold text-sm flex items-center gap-1">
                        Ver para empresas <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* TLDR — bloco GEO/LLM-first, semântico */}
        {/* ──────────────────────────────────────── */}
        <TLDR
          question={`O que é a película arquitetônica ${productName}?`}
          answer={data.description.paragraphs[0]}
          context={data.description.paragraphs[1]}
          specs={data.hero.quickStats}
        />

        {/* ──────────────────────────────────────── */}
        {/* SEÇÃO 3 — O PRODUTO (universal, técnico) */}
        {/* ──────────────────────────────────────── */}
        <section id="produto" className="py-20 md:py-24 bg-background scroll-mt-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-extrabold text-foreground mb-8"
              >
                O produto
              </motion.h2>

              <div className="space-y-5 mb-12">
                {data.description.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    variants={fadeInUp}
                    className="text-muted-foreground font-light leading-relaxed text-lg"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* Imagem do produto aplicado (placeholder até PR 3) */}
              <motion.div variants={fadeInUp} className="mb-12">
                <ProductImagePlaceholder
                  alt={`${productName} aplicada em fachada de vidro arquitetônica`}
                  icon={Building2}
                  variant="light"
                  aspect="16/9"
                />
              </motion.div>

              {/* Tabela técnica completa */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-extrabold text-foreground mb-4">
                  Especificações técnicas
                </h3>
                <dl className="border border-border/60 rounded-xl divide-y divide-border/60 overflow-hidden bg-card">
                  {data.description.techTable.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 px-5 py-4"
                    >
                      <dt className="text-sm text-muted-foreground font-medium">{spec.label}</dt>
                      <dd className="text-sm md:text-base text-foreground font-bold">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* SEÇÃO 4 — ASA RESIDENCIAL (B2C) */}
        {/* ──────────────────────────────────────── */}
        <section
          id="para-residencias"
          className="py-20 md:py-24 bg-muted/30 scroll-mt-24"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <Home className="w-6 h-6 text-accent" />
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-3 py-1">
                  Para sua residência
                </Badge>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-extrabold text-foreground mb-10"
              >
                {data.residential.h2}
              </motion.h2>

              {/* 4 dores residenciais */}
              <motion.div variants={stagger} className="space-y-6 mb-12">
                {data.residential.pains.map((pain, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="border-l-2 border-accent/40 pl-5 py-1"
                  >
                    <p className="text-base font-bold text-foreground mb-2">
                      {pain.problem}
                    </p>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{pain.solution}</span>
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mini-FAQ residencial */}
              <motion.div variants={fadeInUp} className="mb-10">
                <h3 className="text-xl font-extrabold text-foreground mb-5">
                  Dúvidas comuns de quem mora no imóvel
                </h3>
                <div className="space-y-4">
                  {data.residential.miniFaq.map((item, i) => (
                    <div key={i}>
                      <p className="text-sm font-bold text-foreground mb-1">{item.q}</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA dual residencial */}
              <motion.div
                variants={scaleIn}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button asChild variant="outline" className="font-bold rounded-xl">
                  <Link to="/contato">
                    <MessageCircle className="w-4 h-4" />
                    Falar com especialista
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* SEÇÃO 5 — ASA EMPRESARIAL (B2B) */}
        {/* ──────────────────────────────────────── */}
        <section
          id="para-empresas"
          className="py-20 md:py-24 bg-background scroll-mt-24 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-accent" />
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-3 py-1">
                  Para seu projeto comercial
                </Badge>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-extrabold text-foreground mb-10"
              >
                {data.corporate.h2}
              </motion.h2>

              {/* 4 dores empresariais */}
              <motion.div variants={stagger} className="space-y-6 mb-12">
                {data.corporate.pains.map((pain, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="border-l-2 border-accent/40 pl-5 py-1"
                  >
                    <p className="text-base font-bold text-foreground mb-2">
                      {pain.problem}
                    </p>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{pain.solution}</span>
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Números agregados (substituem logos de cases) */}
              <motion.div
                variants={fadeInUp}
                className="grid sm:grid-cols-3 gap-4 mb-12 p-6 rounded-xl border border-border/60 bg-muted/40"
              >
                <div>
                  <p className="text-3xl font-extrabold text-accent mb-1">
                    {data.corporate.aggregates.appliedSquareMeters}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">aplicados em projetos</p>
                </div>
                <div>
                  <p className="text-base font-extrabold text-foreground mb-1">
                    {data.corporate.aggregates.yearsInMarket}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">no segmento arquitetônico</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground leading-tight">
                    {data.corporate.aggregates.bestSellerNote}
                  </p>
                </div>
              </motion.div>

              {/* Mini-FAQ empresarial */}
              <motion.div variants={fadeInUp} className="mb-10">
                <h3 className="text-xl font-extrabold text-foreground mb-5">
                  Dúvidas comuns de quem especifica
                </h3>
                <div className="space-y-4">
                  {data.corporate.miniFaq.map((item, i) => (
                    <div key={i}>
                      <p className="text-sm font-bold text-foreground mb-1">{item.q}</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA + downloads B2B */}
              <motion.div
                variants={scaleIn}
                className="flex flex-col sm:flex-row gap-3 mb-4"
              >
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl"
                >
                  <Link to="/contato?tipo=b2b">
                    <MessageCircle className="w-4 h-4" />
                    Falar com consultor B2B
                  </Link>
                </Button>
                <Button asChild variant="outline" className="font-bold rounded-xl" disabled>
                  {/* PR 5 — quando o spec sheet PDF estiver disponível */}
                  <span>
                    <Download className="w-4 h-4" />
                    Spec sheet (em breve)
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* SEÇÃO 6 — COMPARE COM A LINHA */}
        {/* ──────────────────────────────────────── */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-extrabold text-foreground mb-2"
              >
                Compare com a linha
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground font-light mb-8"
              >
                Outras opções da família solar arquitetônica que podem se encaixar melhor no seu caso.
              </motion.p>

              <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4">
                {data.related.map((rel) => (
                  <motion.div key={rel.slug} variants={fadeInUp}>
                    <Link to={`${categoryUrl}/${rel.slug}`}>
                      <Card className="h-full border-border/60 hover:border-accent/40 hover:-translate-y-1 transition-all">
                        <CardContent className="p-5">
                          <p className="text-base font-extrabold text-foreground mb-1">
                            {rel.name}
                          </p>
                          <p className="text-xs text-muted-foreground font-light leading-relaxed mb-3">
                            {rel.positioning}
                          </p>
                          <span className="text-accent font-bold text-xs flex items-center gap-1">
                            Ver detalhes <ArrowRight className="w-3 h-3" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xs text-muted-foreground/70 italic mt-6">
                Ainda na dúvida? Use o{' '}
                <Link to="/pt/ferramentas/comparador" className="text-accent hover:underline font-bold">
                  comparador de produtos
                </Link>
                {' '}para ver as linhas lado a lado.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* SEÇÃO 7 — GARANTIA + PROCEDÊNCIA (marca) */}
        {/* ──────────────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <LegalDisclaimer />
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* SEÇÃO 8 — FAQ universal (componente existente — i18n + schema) */}
        {/* ──────────────────────────────────────── */}
        <PDPFaqSection slug={data.slug} />

        {/* ──────────────────────────────────────── */}
        {/* SEÇÃO 9 — CTA FINAL DUAL */}
        {/* ──────────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4"
              >
                Para você. Para o seu projeto.
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-primary-foreground/60 font-light mb-10"
              >
                Atendimento nacional. Centros autorizados. Consultor B2B para especificação.
              </motion.p>

              <motion.div
                variants={scaleIn}
                className="flex justify-center"
              >
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all"
                >
                  <Link to="/contato">
                    <MessageCircle className="w-5 h-5" />
                    Falar com especialista
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Footer disclaimer (marca registrada) ── */}
        <section className="py-6 bg-muted/30 border-t border-border/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-muted-foreground/60 font-light">
              INSULFILM™ é marca registrada, protegida pela Lei de Propriedade Industrial (Lei nº 9.279/96).
              O uso do termo &quot;insulfilm&quot; por terceiros não possui autorização da titular.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductPDP;
