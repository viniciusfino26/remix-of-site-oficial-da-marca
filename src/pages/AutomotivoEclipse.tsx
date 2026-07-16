import { useRef } from 'react';
import ParallaxBreak from '@/components/ParallaxBreak';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Layers, Shield, Sun, CheckCircle, MessageCircle, Eye, ArrowRight } from 'lucide-react';
import productImage from '@/assets/auto-solar-eclipse.png';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { icon: Zap, label: 'Construção', value: 'Carbon Color Stable' },
  { icon: Layers, label: 'Tecnologia Ótica', value: 'High Definition' },
  { icon: Sun, label: 'Rejeição de IR', value: 'Até 30%' },
  { icon: Shield, label: 'Garantia', value: '5 anos' },
];

const techTable = [
  { version: 'Eclipse 35', privacy: 'Médio', light: '35%', ir: '30%', uv: '99%', energy: '36%' },
  { version: 'Eclipse 20', privacy: 'Médio Alto', light: '20%', ir: '30%', uv: '99%', energy: '39%' },
  { version: 'Eclipse 05', privacy: 'Alto', light: '05%', ir: '30%', uv: '99%', energy: '45%' },
];

const compareTable = [
  { attr: 'Construção', dark: 'Pigmentada', eclipse: 'Carbono' },
  { attr: 'Rejeição IR', dark: '05%', eclipse: '30%' },
  { attr: 'Proteção UV', dark: '95%', eclipse: '99%' },
  { attr: 'Energia solar rejeitada (05%)', dark: '39%', eclipse: '45%' },
  { attr: 'Tecnologia ótica', dark: 'Clear', eclipse: 'High Definition' },
  { attr: 'Garantia', dark: '2 anos', eclipse: '5 anos' },
];

const AutomotivoEclipse = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "INSULFILM™ Eclipse",
    "brand": { "@type": "Brand", "name": "INSULFILM™" },
    "description": "Série Carbono com rejeição de IR de 30%, proteção UV de 99% e nitidez ótica High Definition. Garantia de 5 anos.",
    "url": "https://insulfilm.com.br/automotivo/solar/eclipse",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Construção", "value": "Performance Carbon Color Stable" },
      { "@type": "PropertyValue", "name": "Rejeição IR", "value": "Até 30%" },
      { "@type": "PropertyValue", "name": "Garantia", "value": "5 anos" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Eclipse | Película Carbono Solar Performance</title>
        <meta name="description" content="A INSULFILM™ Eclipse é a série Carbono com rejeição de IR de 30%, proteção UV de 99% e nitidez ótica High Definition. Garantia de 5 anos." />
        <meta property="og:title" content="INSULFILM™ Eclipse | Película Carbono Solar Performance" />
        <meta property="og:description" content="Quando privacidade e desempenho térmico precisam coexistir." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://insulfilm.com.br/automotivo/solar/eclipse" />
        <link rel="canonical" href="https://insulfilm.com.br/automotivo/solar/eclipse" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <main>
        {/* ── HERO ── */}
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Zap className="w-3.5 h-3.5 mr-2" />
                  Solar Performance
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
                Quando privacidade e desempenho térmico precisam coexistir.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-3xl mx-auto">
                A INSULFILM™ Eclipse representa o salto tecnológico da série Carbono, maior rejeição de infravermelho, estabilidade de cor superior e nitidez ótica High Definition para quem não abre mão de visibilidade interna.
              </motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ── PRODUCT IMAGE ── */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={productImage} alt="INSULFILM™ Eclipse, Série Carbono" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <p className="text-center text-muted-foreground text-sm mt-3">Imagem meramente ilustrativa</p>
            </motion.div>
          </div>
        </section>

        {/* ── SPECS CARDS ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Especificações Técnicas</motion.h2>
              <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
            </motion.div>
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {specs.map((s, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full text-center">
                      <CardContent className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4"><s.icon className="w-7 h-7 text-accent" /></div>
                        <p className="text-sm text-muted-foreground font-medium mb-1">{s.label}</p>
                        <p className="text-xl font-extrabold text-foreground">{s.value}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TECH TABLE ── */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.h3 variants={fadeInUp} className="text-2xl font-extrabold text-foreground mb-8 text-center">Ficha Técnica</motion.h3>
              <motion.div variants={fadeInUp} className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-bold text-foreground">Versão</th>
                      <th className="text-center py-3 px-4 font-bold text-foreground">Privacidade</th>
                      <th className="text-center py-3 px-4 font-bold text-foreground">Luz Visível</th>
                      <th className="text-center py-3 px-4 font-bold text-foreground">IR Rejeitado</th>
                      <th className="text-center py-3 px-4 font-bold text-foreground">UV</th>
                      <th className="text-center py-3 px-4 font-bold text-foreground">Energia Solar</th>
                    </tr>
                  </thead>
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
            </motion.div>
          </div>
        </section>

        <ParallaxBreak minHeight="25vh" stats={[
          { value: '30%', label: 'Rejeição IR' },
          { value: '99%', label: 'Proteção UV' },
          { value: '5', label: 'Anos Garantia' },
        ]} />

        {/* ── POSICIONAMENTO ── */}
        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">A tecnologia de carbono muda a natureza do produto.</motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light leading-relaxed mb-4">
                A INSULFILM™ Eclipse foi desenvolvida para quem já compreende a diferença entre películas, e busca desempenho térmico real combinado à nitidez ótica de alto padrão.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light leading-relaxed mb-8">
                A série Carbono elimina a metalização presente em tecnologias anteriores: sem interferência em GPS ou sinais eletrônicos, com maior estabilidade de cor ao longo do tempo e filtro de infravermelho significativamente superior ao da linha pigmentada.
              </motion.p>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Calor: filtro mais eficiente, perceptível na pele',
                  'Privacidade externa: escuro por fora',
                  'Dirigibilidade interna: claro por dentro',
                  'Conforto visual: elimina o ofuscamento',
                  'Proteção UV: 99%',
                  'Estabilidade de cor superior à construção pigmentada',
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-primary-foreground font-medium">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/* ── COMPARATIVO ── */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h3 variants={fadeInUp} className="text-2xl font-extrabold text-foreground mb-8 text-center">Comparativo com a Dark</motion.h3>
              <motion.div variants={fadeInUp} className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-bold text-foreground"></th>
                      <th className="text-center py-3 px-4 text-muted-foreground">Dark</th>
                      <th className="text-center py-3 px-4 font-bold text-accent">Eclipse</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareTable.map((row) => (
                      <tr key={row.attr} className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium text-foreground">{row.attr}</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">{row.dark}</td>
                        <td className="text-center py-3 px-4 font-bold text-foreground">{row.eclipse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-sm font-light mt-6 text-center italic">
                A diferença de rejeição de infravermelho, de 5% para 30%, é o principal responsável pelo ganho perceptível de conforto térmico dentro do veículo.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">A escolha técnica para desempenho real.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">
                A INSULFILM™ Eclipse oferece cinco anos de garantia e a procedência da marca que criou esse mercado.
              </motion.p>
              <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <Link to="/contato">
                    <MessageCircle className="w-5 h-5" />Solicitar Orçamento
                  </Link>
                </Button>
                <Button asChild variant="outline" className="font-bold text-lg px-8 py-6 rounded-xl">
                  <Link to="/automotivo/solar/vip">
                    Conheça a Vip <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AutomotivoEclipse;
