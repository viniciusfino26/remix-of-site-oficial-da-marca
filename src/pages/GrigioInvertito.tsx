import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Eye, Sun, Shield, CheckCircle, MessageCircle, ArrowRight, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import ParallaxBreak from '@/components/ParallaxBreak';
import TLDR from '@/components/TLDR';
import ProductImagePlaceholder from '@/components/ProductImagePlaceholder';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import { copyBySegment, type Segment } from '@/content/copyBySegment';
import { getPDPSchemas } from '@/lib/pdpFAQs';


const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { icon: Zap, label: 'Tecnologia', value: 'Sputtered Invertida' },
  { icon: Eye, label: 'Transmissão de Luz', value: '15%' },
  { icon: Sun, label: 'Rejeição de IR', value: '75%' },
  { icon: Shield, label: 'Garantia', value: 'Até 3 anos' },
];

const techTable = [
  { version: 'Grigio Invertito 15', privacy: 'Muito Alto', light: '15%', ir: '75%', uv: '>99%', energy: '70%' },
];

const GrigioInvertito = ({ segment }: { segment?: Segment }) => {

  const segmentPath = segment ? `/${segment}` : '';
  const copy = segment ? copyBySegment['grigio-invertito']?.[segment] : undefined;
  const baseCanonical = `https://insulfilm.com.br/arquitetonico${segmentPath}/solar/grigio-invertito`;

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    "@context": "https://schema.org", "@type": "Product",
    "name": "INSULFILM™ Grigio Invertito",
    "brand": { "@type": "Brand", "name": "INSULFILM™" },
    "description": "Película arquitetônica com espelhamento invertido. Privacidade externa durante o dia, visibilidade interna preservada. Marca registrada.",
    "url": baseCanonical,
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Tecnologia", "value": "Vapor-Coated Aluminium Film" },
      { "@type": "PropertyValue", "name": "Transmissão de Luz", "value": "15%" },
      { "@type": "PropertyValue", "name": "Rejeição de Infravermelho", "value": "75%" },
      { "@type": "PropertyValue", "name": "Garantia", "value": "Até 3 anos" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Grigio Invertito | Película Espelhada Invertida | Privacidade Externa</title>
        <meta name="description" content="INSULFILM™ Grigio Invertito — película arquitetônica com espelhamento invertido. Privacidade externa durante o dia, visibilidade interna preservada. Marca registrada." />
        <meta property="og:title" content="INSULFILM™ Grigio Invertito | Película Espelhada Invertida" />
        <meta property="og:description" content="Visual moderno por fora. Amplitude iluminada por dentro. Privacidade externa durante o dia." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={baseCanonical} />
        <link rel="canonical" href={baseCanonical} />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        {(() => { const s = getPDPSchemas('grigio-invertito'); return s ? (<>
          <script type="application/ld+json">{JSON.stringify(s.breadcrumb)}</script>
          <script type="application/ld+json">{JSON.stringify(s.faq)}</script>
        </>) : null; })()}
      </Helmet>
      <main>
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5"><Building2 className="w-3.5 h-3.5 mr-2" />Solar Performance</Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
                {copy?.h1 || `Visual moderno por fora. Amplitude iluminada por dentro.`}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-3xl mx-auto">
                A INSULFILM™ Grigio Invertito foi desenvolvida para fachadas e ambientes que exigem privacidade externa durante o dia sem abrir mão de luminosidade interna — com estética fumê espelhada de alto impacto visual.
              </motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <TLDR
          question="O que é a película arquitetônica INSULFILM™ Grigio Invertito?"
          answer="A INSULFILM™ Grigio Invertito é uma película arquitetônica de privacidade invertida — espelhada externa e fumê interna — com rejeição de 75% dos raios infravermelhos."
          context="Garante privacidade diurna total preservando vista externa pelo lado interno, com forte controle térmico."
          specs={[
            { label: 'Tecnologia', value: 'Sputtered Invertida' },
            { label: 'Privacidade', value: 'Diurna total' },
            { label: 'Rejeição de IR', value: '75%' },
            { label: 'Bloqueio UV', value: '99%' },
          ]}
        />



        {/* ═══ IMAGEM DO PRODUTO ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ProductImagePlaceholder
              alt="Película arquitetônica INSULFILM™ Grigio Invertito espelhada externa fumê interna"
              icon={Building2}
              variant="light"
            />
          </div>
        </section>
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <LegalDisclaimer />
          </div>
        </section>

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">A película que inverte a lógica do espelhamento.</motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light leading-relaxed mb-4">
                A maioria das películas espelhadas escurece o interior. A INSULFILM™ Grigio Invertito opera de forma diferente: sua tecnologia de espelhamento invertido reflete o ambiente externo para fora — garantindo privacidade visual do exterior para o interior — enquanto mantém a entrada de luz natural e a amplitude do ambiente interno.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light leading-relaxed">
                O resultado é um visual contemporâneo e sofisticado por fora, com conforto e luminosidade preservados por dentro.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
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

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.h3 variants={fadeInUp} className="text-2xl font-extrabold text-foreground mb-8 text-center">Ficha Técnica</motion.h3>
              <motion.div variants={fadeInUp} className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-bold text-foreground">Versão</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Privacidade</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Luz Visível</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Infravermelho</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">UV</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Energia Solar</th>
                  </tr></thead>
                  <tbody>
                    {techTable.map((row) => (
                      <tr key={row.version} className="border-b border-border/50">
                        <td className="py-3 px-4 font-semibold text-foreground">{row.version}</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">{row.privacy}</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">{row.light}</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">{row.ir}</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">{row.uv}</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">{row.energy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
              <p className="text-xs text-muted-foreground/60 text-center mt-4">Quanto menor o grau de transparência, maior a refletividade percebida após a aplicação. Garantia: até 3 anos. Consulte condições.</p>
            </motion.div>
          </div>
        </section>

        <ParallaxBreak minHeight="25vh" stats={[
          { value: '75%', label: 'Rejeição IR' },
          { value: '70%', label: 'Energia Solar Rejeitada' },
          { value: '>99%', label: 'Bloqueio UV' },
        ]} />

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-8">Principais Benefícios</motion.h2>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Privacidade invertida: dificulta a visão do exterior para o interior durante o dia',
                  'Visual contemporâneo: espelhamento intenso externo com tom interno fumê elegante',
                  'Ambiente iluminado: entrada de luz natural sem escurecer o interior',
                  'Conforto térmico: rejeição de 75% dos raios infravermelhos',
                  'Proteção UV >99%: proteção para pele, móveis e objetos',
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInLeft} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-primary-foreground font-medium">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-10">Diferenciais Técnicos</motion.h2>
              <div className="space-y-8">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Espelhamento invertido exclusivo</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Tecnologia que reflete para fora — não para dentro. A experiência interna não é comprometida pelo efeito espelhado.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">75% de rejeição de infravermelho</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Barreira térmica eficiente — reduz a entrada de calor mesmo com a película voltada para o reflexo externo.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Passagem de luz natural preservada</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">A sensação de amplitude interna é mantida. O projeto de iluminação natural não é comprometido.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Proteção UV completa</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">&gt;99% de bloqueio de raios UV — protegendo pele, tecidos, mobiliário e obras de arte contra degradação.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h3 variants={fadeInUp} className="text-2xl font-extrabold text-foreground mb-6">Para qual projeto é indicada</motion.h3>
              <motion.ul className="space-y-3" variants={stagger}>
                {[
                  'Fachadas comerciais e residenciais que exigem privacidade durante o dia',
                  'Salas de reunião, escritórios e ambientes com grande exposição visual externa',
                  'Projetos que valorizam estética contemporânea com espelhamento externo',
                  'Ambientes onde a luminosidade interna não pode ser comprometida',
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground font-medium">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p variants={fadeInUp} className="text-sm text-muted-foreground/70 mt-6 italic">
                Para projetos que precisam de privacidade mas não desejam o efeito espelhado, o Petrolio oferece estética preta sofisticada com tecnologia híbrida. Para máximo desempenho espelhado com garantia de 10 anos, o Metallico Argento é a indicação.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground/70 font-light max-w-3xl mx-auto text-center">
              Películas para vidro existem em diversos níveis. INSULFILM™ é a marca registrada que estabeleceu o padrão de qualidade e aplicação no segmento arquitetônico no Brasil. Escolher corretamente é uma decisão técnica.
            </p>
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Privacidade com luminosidade preservada.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">
                A INSULFILM™ Grigio Invertito é a solução para projetos que exigem privacidade externa com luminosidade interna preservada e estética de alto impacto.
              </motion.p>
              <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <Link to="/contato"><MessageCircle className="w-5 h-5" />Solicitar Atendimento</Link>
                </Button>
                <Button asChild variant="outline" className="font-bold text-lg px-8 py-6 rounded-xl">
                  <Link to="/arquitetonico/solar/metallico-argento">Conheça o Metallico Argento <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground/50 text-center">
              INSULFILM™ é marca registrada, protegida pela Lei de Propriedade Industrial (Lei nº 9.279/96). O uso do termo por terceiros não possui autorização da titular.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default GrigioInvertito;
