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
  { icon: Palette, label: 'Estética', value: 'Espelhada Prateada' },
  { icon: Sun, label: 'Rejeição de IR', value: 'Até 86%' },
  { icon: Zap, label: 'Energia Rejeitada', value: 'Até 80%' },
  { icon: Layers, label: 'Garantia', value: '10 anos' },
];

const techTable = [
  { version: 'Metallico Argento 50', privacy: 'Médio', light: '50%', ir: '54%', uv: '>99%', energy: '53%' },
  { version: 'Metallico Argento 35', privacy: 'Alto', light: '35%', ir: '70%', uv: '>99%', energy: '70%' },
  { version: 'Metallico Argento 20', privacy: 'Muito Alto', light: '20%', ir: '86%', uv: '>99%', energy: '80%' },
];

const compareTable = [
  { label: 'Tecnologia', reflesso: 'Alumínio', grigio: 'Alumínio invertido', metallico: 'Alumínio premium' },
  { label: 'IR rejeitado (máx.)', reflesso: '80%', grigio: '75%', metallico: '86%' },
  { label: 'Energia solar (máx.)', reflesso: '78%', grigio: '70%', metallico: '80%' },
  { label: 'Garantia', reflesso: '3 anos', grigio: '3 anos', metallico: '10 anos' },
  { label: 'Pergolado', reflesso: 'Sim', grigio: 'Não', metallico: 'Sim' },
];

const MetallicoArgento = ({ segment }: { segment?: Segment }) => {

  const segmentPath = segment ? `/${segment}` : '';
  const copy = segment ? copyBySegment['metallico-argento']?.[segment] : undefined;
  const baseCanonical = `https://insulfilm.com.br/arquitetonico${segmentPath}/solar/metallico-argento`;

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    "@context": "https://schema.org", "@type": "Product",
    "name": "INSULFILM™ Metallico Argento",
    "brand": { "@type": "Brand", "name": "INSULFILM™" },
    "description": "Película espelhada premium com até 86% de rejeição IR, proteção UV >99% e garantia de 10 anos. Máxima eficiência com sofisticação espelhada.",
    "url": baseCanonical,
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Tecnologia", "value": "Vapor-Coated Aluminium Film" },
      { "@type": "PropertyValue", "name": "Rejeição de Infravermelho", "value": "Até 86%" },
      { "@type": "PropertyValue", "name": "Versões", "value": "3 (50, 35, 20)" },
      { "@type": "PropertyValue", "name": "Garantia", "value": "Até 10 anos" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Metallico Argento | Película Espelhada Premium | Máx. Rejeição Térmica</title>
        <meta name="description" content="INSULFILM™ Metallico Argento — película espelhada premium com até 86% de rejeição IR, proteção UV >99% e garantia de 10 anos. Máxima eficiência com sofisticação espelhada." />
        <link rel="canonical" href={baseCanonical} />
        <meta property="og:title" content="INSULFILM™ Metallico Argento | Película Espelhada Premium" />
        <meta property="og:description" content="INSULFILM™ Metallico Argento — película espelhada premium com até 86% de rejeição IR e garantia de 10 anos." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={baseCanonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        {(() => { const s = getPDPSchemas('metallico-argento'); return s ? (<>
          <script type="application/ld+json">{JSON.stringify(s.breadcrumb)}</script>
          <script type="application/ld+json">{JSON.stringify(s.faq)}</script>
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
                {copy?.h1 || `INSULFILM™ Metallico Argento — eficiência máxima com sofisticação espelhada`}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">O mais alto desempenho térmico com estética espelhada. Para fachadas que não aceitam menos.</motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <TLDR
          question="O que é a película arquitetônica INSULFILM™ Metallico Argento?"
          answer="A INSULFILM™ Metallico Argento é uma película arquitetônica espelhada prateada de alta performance, com até 86% de rejeição dos raios infravermelhos."
          context="Solução de máximo bloqueio térmico para fachadas expostas ao sol intenso, com forte efeito espelho externo."
          specs={[
            { label: 'Tecnologia', value: 'Sputtered Metálica' },
            { label: 'Acabamento', value: 'Espelhado prateado' },
            { label: 'Rejeição de IR', value: 'Até 86%' },
            { label: 'Bloqueio UV', value: '99%' },
          ]}
        />



        {/* ═══ IMAGEM DO PRODUTO ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ProductImagePlaceholder
              alt="Película arquitetônica INSULFILM™ Metallico Argento espelhada prateada em fachada"
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
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-8">Quando máximo desempenho e máxima estética precisam coexistir.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed mb-6">A INSULFILM™ Metallico Argento combina tecnologia metalizada de alto poder refletivo com acabamento espelhado prateado — entregando até 86% de rejeição de infravermelho, proteção UV total e um visual arquitetônico que valoriza o imóvel e reduz drasticamente o consumo de climatização.</motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">Para fachadas comerciais, residenciais e coberturas envidraçadas expostas ao sol com exigência máxima de desempenho — com 10 anos de garantia da marca registrada.</motion.p>
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
          { value: '86%', label: 'Rejeição IR' },
          { value: '80%', label: 'Energia Rejeitada' },
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
                  'Máxima eficiência na rejeição de calor: até 86% de IR rejeitado',
                  'Redução expressiva do uso de ar-condicionado',
                  'Suaviza o brilho excessivo e melhora o conforto visual',
                  'Proteção UV >99%: protege pele, mobiliário, obras de arte e pisos',
                  'Efeito espelhado que amplia visualmente o ambiente com elegância',
                  'Aplicável em coberturas envidraçadas',
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
                  <h3 className="text-xl font-bold text-foreground mb-2">86% de rejeição de infravermelho (versão 20)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">O maior índice de rejeição IR da linha arquitetônica INSULFILM™. Para fachadas com alta exposição solar, a diferença de conforto térmico é imediata e substancial.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">80% de energia solar total rejeitada</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Redução drástica da carga térmica — com impacto direto no consumo de ar-condicionado e no conforto dos ocupantes.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Acabamento espelhado prateado</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Estética marcante que valoriza o imóvel e cria identidade visual arquitetônica — com reflexo elegante que não compromete a visibilidade interna.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">10 anos de garantia</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">A durabilidade da tecnologia metalizada de alta performance sustenta a maior cobertura de garantia da linha espelhada.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── COMPARATIVE TABLE ── */}
        <section className="py-24 bg-card/30 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 text-center">Comparativo na Linha Espelhada</motion.h2>
              <motion.div variants={fadeInUp} className="overflow-x-auto">
                <Table>
                  <TableHeader><TableRow className="border-accent/20">
                    <TableHead className="font-bold"></TableHead>
                    <TableHead>Reflesso d'Argento</TableHead>
                    <TableHead>Grigio Invertito</TableHead>
                    <TableHead className="text-accent font-bold">Metallico Argento</TableHead>
                  </TableRow></TableHeader>
                  <TableBody>
                    {compareTable.map((row, i) => (
                      <TableRow key={i}><TableCell className="font-semibold text-foreground">{row.label}</TableCell>
                        <TableCell>{row.reflesso}</TableCell>
                        <TableCell>{row.grigio}</TableCell>
                        <TableCell className="text-accent font-semibold">{row.metallico}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
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
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light mb-8">A INSULFILM™ Metallico Argento representa o padrão máximo da linha espelhada — máxima eficiência térmica, estética de alto impacto e 10 anos de garantia da marca registrada.</motion.p>
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
        <PDPFaqSection slug="metallico-argento" />
      </main>
    </>
  );
};

export default MetallicoArgento;
