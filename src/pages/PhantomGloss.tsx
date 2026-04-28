import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Layers, Droplets, Thermometer, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import ParallaxBreak from '@/components/ParallaxBreak';
import TLDR from '@/components/TLDR';
import ProductImagePlaceholder from '@/components/ProductImagePlaceholder';
import { getPDPSchemas } from '@/lib/pdpFAQs';
import PDPFaqSection from '@/components/PDPFaqSection';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { icon: Layers, label: 'Espessura', value: '180 microns' },
  { icon: Shield, label: 'Proteção', value: 'Anti-risco' },
  { icon: Droplets, label: 'Barreira', value: 'Química' },
  { icon: Thermometer, label: 'Temperatura', value: '-35°C a 116°C' },
];

const PhantomGloss = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });


  return (
    <>
      <Helmet>
        <title>INSULFILM™ Phantom Gloss | SPF para Superfícies Gloss | Proteção Invisível</title>
        <meta name="description" content="INSULFILM™ Phantom Gloss — Surface Protection Film para superfícies brilhosas. Preserva o brilho original contra micro-riscos, manchas ácidas e desgaste. 180 microns. Garantia 5 anos." />
        <link rel="canonical" href="https://insulfilm.com.br/arquitetonico/phantom-gloss" />
        <meta property="og:title" content="INSULFILM™ Phantom Gloss | SPF para Superfícies Gloss" />
        <meta property="og:description" content="INSULFILM™ Phantom Gloss — Surface Protection Film para superfícies brilhosas. 180 microns. Garantia 5 anos." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://insulfilm.com.br/arquitetonico/phantom-gloss" />
        <meta name="twitter:card" content="summary_large_image" />
        {(() => { const s = getPDPSchemas('phantom-gloss'); return s ? (<>
          <script type="application/ld+json">{JSON.stringify(s.breadcrumb)}</script>
          {s.productsByLang.map((p, i) => (<script key={`p-${i}`} type="application/ld+json">{JSON.stringify(p)}</script>))}
          {s.faqsByLang.map((f, i) => (<script key={i} type="application/ld+json">{JSON.stringify(f)}</script>))}
        </>) : null; })()}
      </Helmet>
      <main>
        {/* ── HERO ── */}
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5"><Sparkles className="w-3.5 h-3.5 mr-2" />SPF — Surface Protection Film</Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">INSULFILM™ Phantom Gloss — brilho que não se refaz se preserva</motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">Brilho não se refaz. Se preserva.</motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <TLDR
          question="O que é o PPF INSULFILM™ Phantom Gloss?"
          answer="O INSULFILM™ Phantom Gloss é uma película de proteção de pintura (PPF) com tecnologia auto-regenerativa que recupera microriscos com calor e protege a pintura contra impactos, insetos e contaminantes."
          context="Acabamento brilhante premium com 5 anos de garantia, ideal para preservar a pintura original do veículo."
          specs={[
            { label: 'Tipo', value: 'PPF — Paint Protection Film' },
            { label: 'Acabamento', value: 'Gloss' },
            { label: 'Tecnologia', value: 'Auto-regenerativa' },
            { label: 'Garantia', value: '5 anos' },
          ]}
        />



        {/* ═══ IMAGEM DO PRODUTO ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ProductImagePlaceholder
              alt="PPF INSULFILM™ Phantom Gloss aplicado em pintura automotiva com acabamento brilhante"
              icon={Sparkles}
              variant="light"
            />
          </div>
        </section>
        {/* ── TRADEMARK ── */}
        <section className="py-10 bg-background border-b border-border/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm text-muted-foreground leading-relaxed">Muitas pessoas utilizam o termo "insulfilm" ou "insulfilme" para se referir a películas para vidro. Esse é um uso popular. <strong className="text-foreground">INSULFILM™ é marca registrada, com titularidade exclusiva e referência no segmento.</strong> O uso da marca por terceiros não é autorizado.</p>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-8">Superfícies de alto padrão não falham por falta de beleza. Falham pelo uso.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed mb-6">O conflito central do design de interiores é que as superfícies mais bonitas são as mais expostas.</motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed mb-6">Uma superfície gloss impecável — em mármore, lacado, vidro ou madeira polida — é um investimento significativo. E é exatamente essa superfície que enfrenta, todos os dias:</motion.p>
              <motion.ul className="space-y-4 mb-6" variants={stagger}>
                {[
                  'Micro-riscos: o uso cotidiano cria uma rede de abrasões que difunde a luz e mata o brilho progressivamente',
                  'Manchas ácidas: vinho, cítricos e produtos de limpeza causam manchas permanentes e opacas',
                  'Perda de brilhância: o desgaste gradual diminui o impacto visual original em áreas de uso intenso',
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" /><span className="text-muted-foreground font-light">{text}</span></motion.li>
                ))}
              </motion.ul>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">O resultado é uma superfície que aos poucos deixa de ser o que era no dia da entrega.</motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── THE SOLUTION ── */}
        <section className="py-24 bg-card/30 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-10">Uma camada de engenharia invisível. 180 microns de proteção que não aparecem.</motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'Preserva o brilho', desc: 'Mantém a profundidade e os reflexos impecáveis — criando uma barreira entre a superfície e os agentes de desgaste sem interferir na aparência.' },
                  { title: 'Barreira química', desc: 'Impede manchas de vinho, cítricos e produtos agressivos — eliminando o principal vetor de dano permanente em superfícies gloss.' },
                  { title: 'Resistência a riscos', desc: 'Protege contra abrasões do dia a dia — vasos, utensílios, joias, objetos que deslizam sobre a superfície.' },
                  { title: 'Limpeza facilitada', desc: 'Superfície ultra lisa que facilita a manutenção — sem acúmulo de resíduos nas micro-abrasões.' },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <Card className="glass-card rounded-2xl h-full"><CardContent className="p-8">
                      <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                    </CardContent></Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TECH SPECS HIGHLIGHT ── */}
        <section className="relative py-24 bg-carbon-gradient overflow-hidden">
          <div className="absolute inset-0 bg-diagonal-texture opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(19 100% 56% / 0.25), transparent 70%)' }} />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="text-center mb-12 max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.span variants={fadeInUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Performance Comprovada</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4 leading-[1.05]">Ficha Técnica Phantom Gloss</motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-base md:text-lg font-light">Surface Protection Film de 5 camadas. Os índices que comprovam a proteção.</motion.p>
              <motion.div variants={fadeInUp} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>

            {/* Highlight KPIs */}
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              {[
                { value: '180μ', label: 'Espessura', sublabel: '7 mil de proteção' },
                { value: '5', label: 'Camadas', sublabel: 'Composição Premium' },
                { value: '355', label: 'lbs/in', sublabel: 'Força para rompimento' },
                { value: '5 anos', label: 'Garantia', sublabel: 'Anti-amarelamento' },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative group">
                  <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full glass-card rounded-3xl p-8 md:p-10 text-center border border-accent/20 hover:border-accent/40 transition-colors">
                    <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-accent leading-none mb-3 tracking-tight">{stat.value}</p>
                    <p className="text-sm md:text-base text-primary-foreground font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-xs text-primary-foreground/50 font-light">{stat.sublabel}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Detalhes técnicos completos */}
            <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.div variants={fadeInUp} className="rounded-2xl border border-primary-foreground/10 bg-background/30 backdrop-blur-md p-6 md:p-8">
                <div className="space-y-3">
                  {[
                    { label: 'Produto', value: 'INSULFILM™ Phantom Gloss — Surface Protection Film' },
                    { label: 'Espessura total', value: '7 mil (≈ 180 microns)' },
                    { label: 'Força do adesivo', value: '≥15N/25mm' },
                    { label: 'Força para rompimento', value: '≈355 lbs/in' },
                    { label: 'Resistência à temperatura', value: '-35°C a 116°C' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-primary-foreground/10 last:border-b-0">
                      <span className="text-primary-foreground/60 font-medium text-sm">{item.label}</span>
                      <span className="text-primary-foreground font-bold text-sm md:text-base">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-xs text-primary-foreground/50 text-center mt-4 italic">
                Garantia: 5 anos contra rachaduras, formação de bolhas e amarelamento causados por defeitos na fabricação.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── 5-LAYER COMPOSITION ── */}
        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-10">Composição em 5 Camadas</motion.h2>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Selante de brilho intenso', desc: 'Potencializa o brilho da superfície protegida.' },
                  { num: '2', title: 'Camada transparente hidrofóbica', desc: 'Poliuretano flexível com propriedades anti-contaminante e regenerativa para correção de arranhões superficiais leves.' },
                  { num: '3', title: 'Uretano Termoplástico (TPU)', desc: 'Resistente a rachaduras, impactos leves e perfurações. Formulado para excelente rejeição de calor e raios UV.' },
                  { num: '4', title: 'Adesivo', desc: 'Acrílico anti-amarelamento com elasticidade para manuseio e aderência a superfícies curvas.' },
                  { num: '5', title: 'Forro protetor descartável', desc: 'Poliéster removível após a aplicação.' },
                ].map((layer, i) => (
                  <motion.div key={i} variants={fadeInLeft} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <span className="text-accent font-extrabold">{layer.num}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-foreground mb-1">{layer.title}</h3>
                      <p className="text-primary-foreground/60 font-light">{layer.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── COMPATIBLE MATERIALS ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-10">Materiais Compatíveis</motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Mármore e pedras naturais', desc: 'Proteção contra manchas de ácidos e riscos.' },
                  { title: 'Madeira polida', desc: 'Bloqueio contra umidade e desgaste de superfície.' },
                  { title: 'Aço inox', desc: 'Evita oxidação e riscos em mesas, bancadas e elevadores.' },
                  { title: 'Vidro', desc: 'Preserva a transparência e clareza.' },
                  { title: 'Lacados e superfícies pintadas', desc: 'Preserva o brilho e a intensidade da cor original.' },
                  { title: 'Porcelanato polido', desc: 'Proteção contra micro-riscos em áreas de alto tráfego.' },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <span className="text-foreground font-bold">{item.title}</span>
                      <span className="text-muted-foreground font-light"> — {item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── REINFORCEMENT ── */}
        <section className="py-16 bg-background border-t border-border/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-muted-foreground font-light leading-relaxed">Películas para vidro existem em diversos níveis. <strong className="text-foreground">INSULFILM™ é a marca registrada que estabeleceu o padrão de qualidade e aplicação no segmento arquitetônico no Brasil.</strong> Escolher corretamente é uma decisão técnica.</p>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Solicite Atendimento Nacional</motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light mb-8">A INSULFILM™ Phantom Gloss preserva exatamente o que torna uma superfície gloss extraordinária — com a procedência da marca registrada referência no segmento.</motion.p>
              <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <Link to="/contato"><ArrowRight className="w-5 h-5" />Solicitar atendimento nacional</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── LEGAL FOOTER ── */}
        <section className="py-8 bg-background border-t border-border/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-xs text-muted-foreground">INSULFILM™ é marca registrada, protegida pela Lei de Propriedade Industrial (Lei nº 9.279/96). O uso do termo por terceiros não possui autorização da titular.</p>
          </div>
        </section>
        <PDPFaqSection slug="phantom-gloss" />
      </main>
    </>
  );
};

export default PhantomGloss;
