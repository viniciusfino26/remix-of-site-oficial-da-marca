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


const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { icon: Zap, label: 'Tecnologia', value: 'Sputtered Neutra' },
  { icon: Eye, label: 'Versões', value: '4 opções' },
  { icon: Sun, label: 'Rejeição de IR', value: 'Até 81%' },
  { icon: Layers, label: 'Garantia', value: 'Até 10 anos' },
];

const techTable = [
  { version: 'Naturale 70', privacy: 'Baixo', light: '70%', ir: '45%', uv: '>99%', energy: '28%' },
  { version: 'Naturale 50', privacy: 'Médio', light: '50%', ir: '58%', uv: '>99%', energy: '41%' },
  { version: 'Naturale 35', privacy: 'Alto', light: '35%', ir: '69%', uv: '>99%', energy: '51%' },
  { version: 'Naturale 20', privacy: 'Muito Alto', light: '20%', ir: '81%', uv: '>99%', energy: '63%' },
];

const guideTable = [
  { need: 'Máxima luminosidade com algum controle térmico', version: 'Naturale 70' },
  { need: 'Equilíbrio entre luz e conforto térmico', version: 'Naturale 50' },
  { need: 'Maior privacidade com boa luminosidade', version: 'Naturale 35' },
  { need: 'Alta privacidade e máxima performance térmica', version: 'Naturale 20' },
];

const Naturale = ({ segment }: { segment?: Segment }) => {

  const segmentPath = segment ? `/${segment}` : '';
  const copy = segment ? copyBySegment['naturale']?.[segment] : undefined;
  const baseCanonical = `https://insulfilm.com.br/arquitetonico${segmentPath}/solar/naturale`;

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });


  return (
    <>
      <Helmet>
        <title>INSULFILM™ Naturale | Película Neutra Premium | Bombardeamento Iônico | 4 Versões</title>
        <meta name="description" content="INSULFILM™ Naturale — película arquitetônica premium com tecnologia de bombardeamento iônico, até 81% de rejeição IR e garantia de 10 anos. Discrição que transforma." />
        <link rel="canonical" href={baseCanonical} />
        <meta property="og:title" content="INSULFILM™ Naturale | Película Neutra Premium | 4 Versões" />
        <meta property="og:description" content="INSULFILM™ Naturale — película arquitetônica premium com tecnologia de bombardeamento iônico, até 81% de rejeição IR e garantia de 10 anos." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={baseCanonical} />
        <meta name="twitter:card" content="summary_large_image" />
        {(() => { const s = getPDPSchemas('naturale'); return s ? (<>
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
                {copy?.h1 || `INSULFILM™ Naturale — discrição que transforma, clareza que protege`}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">Proteção real. Estética preservada. Para projetos que não abrem mão dos dois.</motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <TLDR
          question="O que é a película arquitetônica INSULFILM™ Naturale?"
          answer="A INSULFILM™ Naturale é uma película arquitetônica com tecnologia Sputtered de tonalidade neutra, oferecendo até 81% de rejeição dos raios infravermelhos nas versões mais escuras."
          context="Solução estética neutra para fachadas que combina conforto térmico com aparência sóbria e elegante."
          specs={[
            { label: 'Tecnologia', value: 'Sputtered Neutra' },
            { label: 'Rejeição de IR', value: 'Até 81%' },
            { label: 'Bloqueio UV', value: '99%' },
            { label: 'Estética', value: 'Neutra' },
          ]}
        />



        {/* ═══ IMAGEM DO PRODUTO ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ProductImagePlaceholder
              alt="Película arquitetônica INSULFILM™ Naturale Sputtered neutra em fachada"
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
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-8">Quatro versões. Uma premissa: o vidro continua sendo o protagonista do projeto.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed mb-6">A INSULFILM™ Naturale foi concebida para projetos onde a estética do vidro é inegociável — mas onde conforto térmico e proteção UV são igualmente exigidos.</motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">Com tecnologia de bombardeamento iônico e níveis de metalização ajustáveis, a linha Naturale oferece quatro versões com transparências de 20% a 70% — permitindo ao arquiteto ou projetista escolher o equilíbrio exato entre privacidade, controle térmico e preservação da luminosidade para cada ambiente.</motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── TECH SPECS HIGHLIGHT (decisor de compra) ── */}
        <TechSpecsHighlight
          title="Ficha Técnica Naturale"
          subtitle="Quatro versões. Os índices que comprovam a performance — e a discrição."
          highlights={[
            { value: '81%', label: 'Rejeição IR', sublabel: 'até (versão 20)' },
            { value: '70%', label: 'Luz Visível', sublabel: 'até (versão 70)' },
            { value: '>99%', label: 'Bloqueio UV', sublabel: 'todas as versões' },
            { value: '10 anos', label: 'Garantia', sublabel: 'INSULFILM™' },
          ]}
          techTable={techTable}
          warrantyNote="Quanto menor o grau de transparência, maior a refletividade percebida após a aplicação. Garantia: até 10 anos. Consulte condições com um Centro Autorizado."
        />

        {/* ── BENEFITS ── */}
        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-8">Principais Benefícios</motion.h2>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Versatilidade: quatro versões com transparência de 20% a 70%',
                  'Conforto térmico e visual: reduz calor e brilho em qualquer versão',
                  'Economia de energia: menor demanda de climatização',
                  'Proteção UV >99%: evita desbotamento e protege móveis',
                  'Estética discreta: preserva a aparência original dos vidros',
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
                  <h3 className="text-xl font-bold text-foreground mb-2">Tecnologia de bombardeamento iônico</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Processo de deposição de metal por bombardeamento iônico — entrega maior uniformidade de camada, melhor aderência e durabilidade superior às tecnologias de tingimento convencional.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Escalabilidade de versões</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Da Naturale 70 — discreta e de alta luminosidade — à Naturale 20, com alta privacidade e máxima rejeição térmica. Quatro decisões técnicas distintas para quatro perfis de projeto diferentes.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">81% de rejeição IR na versão 20</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">A versão mais densa da linha Naturale entrega performance térmica de alto nível — com 81% de rejeição de infravermelho — mantendo a identidade visual discreta da linha.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">10 anos de garantia</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">A robustez da tecnologia de bombardeamento iônico sustenta a mais longa cobertura de garantia disponível na linha Premium INSULFILM™.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── HOW TO CHOOSE ── */}
        <section className="py-24 bg-card/30 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 text-center">Como Escolher a Versão Certa</motion.h2>
              <motion.div variants={fadeInUp} className="overflow-x-auto">
                <Table>
                  <TableHeader><TableRow className="border-accent/20">
                    <TableHead className="text-accent font-bold">Se você precisa de...</TableHead>
                    <TableHead>Versão indicada</TableHead>
                  </TableRow></TableHeader>
                  <TableBody>
                    {guideTable.map((row, i) => (
                      <TableRow key={i}><TableCell className="text-foreground">{row.need}</TableCell>
                        <TableCell className="font-bold text-accent">{row.version}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mt-4">Nossos especialistas orientam a escolha correta para cada projeto e orientação de fachada.</motion.p>
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
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light mb-8">A INSULFILM™ Naturale é a escolha para projetos que exigem versatilidade técnica, discrição estética e a segurança de 10 anos de garantia da marca registrada.</motion.p>
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
        <PDPFaqSection slug="naturale" />
      </main>
    </>
  );
};

export default Naturale;
