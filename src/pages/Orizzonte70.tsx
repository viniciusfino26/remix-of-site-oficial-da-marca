import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Eye, Sun, Layers, CheckCircle, ArrowRight, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import ParallaxBreak from '@/components/ParallaxBreak';
import TLDR from '@/components/TLDR';
import ProductImagePlaceholder from '@/components/ProductImagePlaceholder';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import { copyBySegment, type Segment } from '@/content/copyBySegment';
import { getPDPSchemas } from '@/lib/pdpFAQs';
import PDPFaqSection from '@/components/PDPFaqSection';
import TechSpecsHighlight from '@/components/TechSpecsHighlight';


const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { icon: Zap, label: 'Tecnologia', value: 'Cerâmica Premium' },
  { icon: Eye, label: 'Transmissão de Luz', value: '68%' },
  { icon: Sun, label: 'Rejeição de IR', value: '93%' },
  { icon: Layers, label: 'Garantia', value: '10 anos' },
];

const techTable = [
  { version: 'Orizzonte70', privacy: 'Baixo', light: '68%', ir: '93%', uv: '>99%', energy: '54%' },
];

const compareTable = [
  { label: 'Tecnologia', clear70: 'Nano cerâmica', orizzonte: 'Nano cerâmica de última geração' },
  { label: 'Rejeição IR', clear70: '81%', orizzonte: '93%' },
  { label: 'Luz visível', clear70: '72%', orizzonte: '68%' },
  { label: 'Energia solar rejeitada', clear70: '50%', orizzonte: '54%' },
  { label: 'Garantia', clear70: '5 anos', orizzonte: '10 anos' },
];

const Orizzonte70 = ({ segment }: { segment?: Segment }) => {

  const segmentPath = segment ? `/${segment}` : '';
  const copy = segment ? copyBySegment['orizzonte70']?.[segment] : undefined;
  const baseCanonical = `https://insulfilm.com.br/arquitetonico${segmentPath}/solar/orizzonte70`;

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });


  return (
    <>
      <Helmet>
        <title>INSULFILM™ Orizzonte70 | Cerâmica Premium Arquitetônica | 93% Rejeição IR</title>
        <meta name="description" content="INSULFILM™ Orizzonte70 — película cerâmica premium com 93% de rejeição de IR, 68% de transmissão de luz e garantia de 10 anos. O mais alto desempenho cerâmico da linha." />
        <link rel="canonical" href={baseCanonical} />
        <meta property="og:title" content="INSULFILM™ Orizzonte70 | Cerâmica Premium Arquitetônica | 93% Rejeição IR" />
        <meta property="og:description" content="INSULFILM™ Orizzonte70 — película cerâmica premium com 93% de rejeição de IR, 68% de transmissão de luz e garantia de 10 anos." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={baseCanonical} />
        <meta name="twitter:card" content="summary_large_image" />
        {(() => { const s = getPDPSchemas('orizzonte70'); return s ? (<>
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
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5"><Building2 className="w-3.5 h-3.5 mr-2" />Solar Premium — Arquitetônica</Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
                {copy?.h1 || `INSULFILM™ Orizzonte70 — máximo desempenho cerâmico com transparência superior`}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">O mais alto desempenho em controle solar. Com o vidro que parece sem película.</motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <TLDR
          question="O que é a película arquitetônica INSULFILM™ Orizzonte70?"
          answer="A INSULFILM™ Orizzonte70 é uma película arquitetônica cerâmica premium com 68% de transparência e rejeição extrema de calor, alcançando até 93% de bloqueio dos raios infravermelhos."
          context="Indicada para projetos corporativos e residenciais de alto padrão que exigem máxima eficiência térmica sem comprometer a luminosidade."
          specs={[
            { label: 'Tecnologia', value: 'Cerâmica Premium' },
            { label: 'Transparência', value: '68% VLT' },
            { label: 'Rejeição de IR', value: 'Até 93%' },
            { label: 'Bloqueio UV', value: '99%' },
          ]}
        />


        {/* ═══ IMAGEM DO PRODUTO ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ProductImagePlaceholder
              alt="Película arquitetônica INSULFILM™ Orizzonte70 cerâmica premium em vidraça corporativa"
              icon={Building2}
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

        {/* ── POSITIONING ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-8">Tecnologia cerâmica de última geração. Uma categoria à parte.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed mb-6">A INSULFILM™ Orizzonte70 não é uma evolução da linha Performance. É uma categoria tecnológica distinta.</motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed mb-6">Sua composição com nanotecnologia cerâmica de última geração entrega 93% de rejeição de infravermelho — o maior índice da linha arquitetônica não metalizada — com 68% de transmissão de luz visível e refletividade extremamente baixa.</motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">Para fachadas, sacadas e projetos que exigem o máximo em desempenho térmico sem qualquer concessão estética ou técnica, a Orizzonte70 é a escolha definitiva.</motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── TECH SPECS HIGHLIGHT ── */}
        <TechSpecsHighlight
          title="Ficha Técnica Orizzonte70"
          subtitle="Performance térmica máxima preservando a vista panorâmica."
          highlights={[
            { value: '93%', label: 'Rejeição IR', sublabel: 'Calor bloqueado' },
            { value: '68%', label: 'Luz Visível', sublabel: 'Transmissão' },
            { value: '>99%', label: 'Bloqueio UV', sublabel: 'Proteção total' },
            { value: '10 anos', label: 'Garantia', sublabel: 'INSULFILM™' },
          ]}
          techTable={techTable}
          warrantyNote="Garantia: até 10 anos. Consulte condições com um Centro Autorizado."
        />

        {/* ── BENEFITS ── */}
        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-8">Principais Benefícios</motion.h2>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  '93% de rejeição de infravermelho — o mais alto da linha não metalizada',
                  '68% de transmissão de luz visível — alta claridade preservada',
                  'Proteção UV >99% — bloqueio total de radiação ultravioleta',
                  'Sem interferência em sinais eletrônicos — tecnologia não metalizada',
                  'Sem corrosão — estabilidade óptica preservada por toda a vida útil',
                  'Acabamento elegante com proteção de longa duração — 10 anos de garantia',
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInLeft} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" /><span className="text-primary-foreground font-medium">{text}</span></motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/* ── DIFFERENTIALS ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-10">Diferenciais Técnicos</motion.h2>
              <div className="space-y-10">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">93% de rejeição de infravermelho</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Diferença estrutural em relação à linha Performance. Enquanto a Clear70 rejeita 81% de IR, a Orizzonte70 rejeita 93% — uma diferença perceptível no conforto térmico dos ambientes, especialmente em fachadas de alta exposição solar.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Nanotecnologia cerâmica de última geração</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Absorção de calor por tecnologia cerâmica avançada — não por reflexo. O resultado é um ambiente mais fresco sem o efeito espelhado.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Estabilidade óptica superior</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Nano cerâmica não sofre corrosão e não apresenta degradação de desempenho ao longo do tempo — o que sustenta uma cobertura de garantia de 10 anos.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Compatibilidade total com eletrônicos</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Sem metalização, sem interferência — GPS, Wi-Fi, celular e demais sinais preservados integralmente.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── COMPARATIVE TABLE ── */}
        <section className="py-24 bg-card/30 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 text-center">Comparativo com a Clear70</motion.h2>
              <motion.div variants={fadeInUp} className="overflow-x-auto">
                <Table>
                  <TableHeader><TableRow className="border-accent/20">
                    <TableHead className="font-bold"></TableHead>
                    <TableHead>Clear70 (Performance)</TableHead>
                    <TableHead className="text-accent font-bold">Orizzonte70 (Premium)</TableHead>
                  </TableRow></TableHeader>
                  <TableBody>
                    {compareTable.map((row, i) => (
                      <TableRow key={i}><TableCell className="font-semibold text-foreground">{row.label}</TableCell>
                        <TableCell>{row.clear70}</TableCell>
                        <TableCell className="text-accent font-semibold">{row.orizzonte}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mt-4">A Orizzonte70 representa o salto para o mais alto nível de desempenho cerâmico disponível na linha arquitetônica INSULFILM™.</motion.p>
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
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light mb-8">A INSULFILM™ Orizzonte70 é a escolha para projetos que não aceitam concessões — máximo desempenho cerâmico com transparência superior e 10 anos de garantia da marca registrada.</motion.p>
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
        <PDPFaqSection slug="orizzonte70" />
      </main>
    </>
  );
};

export default Orizzonte70;
