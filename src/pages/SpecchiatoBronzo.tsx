import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Sun, Palette, Layers, CheckCircle, ArrowRight, Building2 } from 'lucide-react';
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
  { icon: Zap, label: 'Tecnologia', value: 'Sputtered Nichrome' },
  { icon: Palette, label: 'Estética', value: 'Bronze Equilibrado' },
  { icon: Sun, label: 'Rejeição de IR', value: 'Até 72%' },
  { icon: Layers, label: 'Garantia', value: '10 anos' },
];

const techTable = [
  { version: 'Specchiato Bronzo 35', privacy: 'Médio', light: '35%', ir: '54%', uv: '>99%', energy: '52%' },
  { version: 'Specchiato Bronzo 25', privacy: 'Alto', light: '25%', ir: '62%', uv: '>99%', energy: '65%' },
  { version: 'Specchiato Bronzo 15', privacy: 'Muito Alto', light: '20%', ir: '72%', uv: '>99%', energy: '70%' },
];

const SpecchiatoBronzo = ({ segment }: { segment?: Segment }) => {

  const segmentPath = segment ? `/${segment}` : '';
  const copy = segment ? copyBySegment['specchiato-bronzo']?.[segment] : undefined;
  const baseCanonical = `https://insulfilm.com.br/arquitetonico${segmentPath}/solar/specchiato-bronzo`;

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    "@context": "https://schema.org", "@type": "Product",
    "name": "INSULFILM™ Specchiato Bronzo",
    "brand": { "@type": "Brand", "name": "INSULFILM™" },
    "description": "Película espelhada bronze com tecnologia Sputtered Nichrome, até 72% de rejeição IR e conforto visual interno preservado. Garantia 10 anos.",
    "url": baseCanonical,
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Tecnologia", "value": "Sputtered Nichrome Film" },
      { "@type": "PropertyValue", "name": "Rejeição de Infravermelho", "value": "Até 72%" },
      { "@type": "PropertyValue", "name": "Versões", "value": "3 (35, 25, 15)" },
      { "@type": "PropertyValue", "name": "Garantia", "value": "Até 10 anos" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Specchiato Bronzo | Película Espelhada Bronze | Refletividade Equilibrada</title>
        <meta name="description" content="INSULFILM™ Specchiato Bronzo — película espelhada bronze com tecnologia Sputtered Nichrome, até 72% de rejeição IR e conforto visual interno preservado. Garantia 10 anos." />
        <link rel="canonical" href={baseCanonical} />
        <meta property="og:title" content="INSULFILM™ Specchiato Bronzo | Película Espelhada Bronze" />
        <meta property="og:description" content="INSULFILM™ Specchiato Bronzo — película espelhada bronze com tecnologia Sputtered Nichrome e até 72% de rejeição IR." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={baseCanonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        {(() => { const s = getPDPSchemas('specchiato-bronzo'); return s ? (<>
          <script type="application/ld+json">{JSON.stringify(s.breadcrumb)}</script>
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
                {copy?.h1 || `INSULFILM™ Specchiato Bronzo — eficiência solar com estética espelhada equilibrada e suave`}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">Alto desempenho térmico. Sem o espelho intenso do lado interno.</motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <TLDR
          question="O que é a película arquitetônica INSULFILM™ Specchiato Bronzo?"
          answer="A INSULFILM™ Specchiato Bronzo é uma película arquitetônica Sputtered Nichrome em tom bronze, com até 72% de rejeição dos raios infravermelhos e baixo efeito espelho interno."
          context="Combina alívio térmico imediato com estética quente em tom bronze, sem comprometer a vista externa pelo lado interno."
          specs={[
            { label: 'Tecnologia', value: 'Sputtered Nichrome' },
            { label: 'Tonalidade', value: 'Bronze' },
            { label: 'Rejeição de IR', value: 'Até 72%' },
            { label: 'Bloqueio UV', value: '99%' },
          ]}
        />



        {/* ═══ IMAGEM DO PRODUTO ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ProductImagePlaceholder
              alt="Película arquitetônica INSULFILM™ Specchiato Bronzo Sputtered Nichrome em fachada"
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
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-8">A escolha para quem quer desempenho espelhado sem comprometer a experiência interna.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed mb-6">A INSULFILM™ Specchiato Bronzo resolve uma tensão comum nos projetos arquitetônicos: a película espelhada mais eficiente termicamente tende a criar um efeito espelho intenso do lado interno — reduzindo o conforto visual dos ocupantes.</motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">Com tecnologia Sputtered Nichrome, a Specchiato Bronzo entrega refletividade balanceada — bloqueando o calor excessivo externamente com um efeito espelho suave e elegante, sem comprometer a visão para fora ou criar desconforto interno.</motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── SPECS CARDS ── */}
        <section className="py-24 bg-card/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Especificações Técnicas</motion.h2>
              <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
            </motion.div>
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {specs.map((s, i) => (
                <motion.div key={i} variants={fadeInUp}><motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card rounded-2xl h-full text-center"><CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4"><s.icon className="w-7 h-7 text-accent" /></div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">{s.label}</p>
                    <p className="text-xl font-extrabold text-foreground">{s.value}</p>
                  </CardContent></Card>
                </motion.div></motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TECH TABLE ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 text-center">Ficha Técnica Completa</motion.h2>
              <motion.div variants={fadeInUp} className="overflow-x-auto">
                <Table>
                  <TableHeader><TableRow className="border-accent/20">
                    <TableHead className="text-accent font-bold">Versão</TableHead>
                    <TableHead>Privacidade</TableHead><TableHead>Luz Visível</TableHead>
                    <TableHead>IR Rejeitado</TableHead><TableHead>UV Rejeitado</TableHead><TableHead>Energia Solar</TableHead>
                  </TableRow></TableHeader>
                  <TableBody>
                    {techTable.map((row, i) => (
                      <TableRow key={i}><TableCell className="font-bold text-foreground">{row.version}</TableCell>
                        <TableCell>{row.privacy}</TableCell><TableCell>{row.light}</TableCell>
                        <TableCell className="text-accent font-semibold">{row.ir}</TableCell><TableCell>{row.uv}</TableCell><TableCell>{row.energy}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mt-4">Quanto menor o grau de transparência, maior a refletividade percebida após a aplicação. Garantia: até 10 anos. Consulte condições com um dos nossos especialistas.</motion.p>
            </motion.div>
          </div>
        </section>

        <ParallaxBreak minHeight="35vh" stats={[
          { value: '72%', label: 'Rejeição IR' },
          { value: 'Bronze', label: 'Acabamento' },
          { value: '10 anos', label: 'Garantia' },
        ]} />

        {/* ── BENEFITS ── */}
        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-8">Principais Benefícios</motion.h2>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Controle solar com refletividade balanceada: sem efeito espelho intenso interno',
                  'Redução do calor e menor consumo de ar-condicionado',
                  'Conforto visual interno: menos reflexo em telas e superfícies',
                  'Proteção UV >99%: preserva móveis e a saúde dos ocupantes',
                  'Visão externa preservada com elegância',
                  'Aplicável em pergolados e coberturas de vidro',
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
                  <h3 className="text-xl font-bold text-foreground mb-2">Tecnologia Sputtered Nichrome</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Tecnologia de deposição por pulverização catódica com Nichrome — entrega maior uniformidade de camada, resistência à corrosão superior e durabilidade de longo prazo. Suporta a garantia de 10 anos.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Refletividade equilibrada</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">A Specchiato Bronzo foi especificamente desenvolvida para ambientes onde a experiência interna importa tanto quanto o desempenho externo. Não é o espelho mais intenso da linha — é o mais confortável.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Tom bronze elegante</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Estética espelhada suave em tom bronze — diferente do prateado intenso do Metallico Argento. Para projetos que buscam sofisticação com personalidade estética distinta.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Aplicação em pergolados</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Compatível com teto de vidro e pergolados — versatilidade de aplicação que amplifica o alcance nos projetos.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="py-24 bg-card/30 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">Para qual projeto é indicada</motion.h2>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Projetos com grandes áreas envidraçadas onde o conforto visual interno é prioridade',
                  'Fachadas e janelas voltadas para o sol onde o calor é crítico mas o espelho intenso não é desejado',
                  'Ambientes com telas, monitores ou superfícies reflexivas que seriam prejudicadas pelo espelho interno',
                  'Projetos que valorizam a estética bronze como diferencial visual',
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" /><span className="text-foreground font-medium">{text}</span></motion.li>
                ))}
              </motion.ul>
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
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light mb-8">A INSULFILM™ Specchiato Bronzo é a escolha para projetos que exigem eficiência solar com conforto visual interno — com estética bronze equilibrada e 10 anos de garantia da marca registrada.</motion.p>
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
        <PDPFaqSection slug="specchiato-bronzo" />
      </main>
    </>
  );
};

export default SpecchiatoBronzo;
