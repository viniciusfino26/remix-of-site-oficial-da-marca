import { useRef } from 'react';
import ParallaxBreak from '@/components/ParallaxBreak';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Layers, Shield, Sun, CheckCircle, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import productImage from '@/assets/auto-solar-polariz.png';
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
  { icon: Zap, label: 'Construção', value: 'Metalizada' },
  { icon: Layers, label: 'Tecnologia Ótica', value: 'Ultra Definition' },
  { icon: Sun, label: 'Rejeição de IR', value: 'Até 75%' },
  { icon: Shield, label: 'Garantia', value: '5+5 anos' },
];

const techTable = [
  { version: 'Polariz 15', privacy: 'Médio', light: '15%', ir: '75%', uv: '>99%', energy: '65%' },
  { version: 'Polariz 05', privacy: 'Alto', light: '05%', ir: '75%', uv: '>99%', energy: '70%' },
];

const AutomotivoSolarPolariz = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "INSULFILM™ Polariz",
    "brand": { "@type": "Brand", "name": "INSULFILM™" },
    "description": "Película metalizada Solar Premium com rejeição de IR de 75%, estética polarizada e garantia estendida de até 10 anos.",
    "url": "https://insulfilm.com.br/automotivo/solar/polariz",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Construção", "value": "Metalizada" },
      { "@type": "PropertyValue", "name": "Rejeição IR", "value": "Até 75%" },
      { "@type": "PropertyValue", "name": "Garantia", "value": "5+5 anos (desbotamento)" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Polariz | Película Metalizada Solar Premium</title>
        <meta name="description" content="A INSULFILM™ Polariz é a película metalizada que inaugura a linha Solar Premium — rejeição de IR de 75%, estética polarizada e garantia estendida de até 10 anos." />
        <meta property="og:title" content="INSULFILM™ Polariz | Película Metalizada Solar Premium" />
        <meta property="og:description" content="Estética polarizada. Rejeição térmica de 62%. O ponto de entrada da linha Solar Premium." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://insulfilm.com.br/automotivo/solar/polariz" />
        <link rel="canonical" href="https://insulfilm.com.br/automotivo/solar/polariz" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <main>
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Sparkles className="w-3.5 h-3.5 mr-2" />
                  Solar Premium
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
                Estética polarizada. Rejeição térmica de 62%. O ponto de entrada da linha Solar Premium.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-3xl mx-auto">
                A INSULFILM™ Polariz é a película metalizada que inaugura a linha de maior desempenho — com redução de calor superior, estética polarizada elegante e nitidez ótica aprimorada.
              </motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={productImage} alt="INSULFILM™ Polariz — Metalizada Premium" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <p className="text-center text-muted-foreground text-sm mt-3">Imagem meramente ilustrativa</p>
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
                      <th className="text-center py-3 px-4 font-bold text-foreground">Infravermelho</th>
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
              <motion.p variants={fadeInUp} className="text-muted-foreground text-xs mt-4 text-center">Aplicabilidade: Vidros laterais e traseiro</motion.p>
            </motion.div>
          </div>
        </section>

        <ParallaxBreak minHeight="25vh" stats={[
          { value: '75%', label: 'Rejeição IR' },
          { value: '>99%', label: 'Proteção UV' },
          { value: '10', label: 'Anos Total' },
        ]} />

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">Quando a linha convencional não é suficiente.</motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light leading-relaxed mb-4">
                A INSULFILM™ Polariz foi desenvolvida para quem busca um nível de proteção térmica e estética que a linha carbono não alcança.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light leading-relaxed mb-8">
                Com redução de calor de até 62% via filtro infravermelho, proteção UV superior a 99% e visual polarizado de alta elegância, a Polariz é o produto para quem compreende que película de alto desempenho é um investimento em qualidade de vida.
              </motion.p>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Rejeição de calor: máxima — perceptível na pele',
                  'Redução de calor de até 62% via filtro infravermelho',
                  'Privacidade externa: mais escuro por fora',
                  'Nitidez ótica aprimorada: tecnologia Ultra Definition',
                  'Proteção UV >99% — eficácia contra câncer de pele',
                  'Garantia estendida de até 10 anos contra desbotamento',
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

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center">
              <motion.h3 variants={fadeInUp} className="text-2xl font-extrabold text-foreground mb-4">Garantia de 5+5 Anos</motion.h3>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed mb-4">
                5 anos: Falha adesiva | Desbotamento | Mudança de cor | Efeito neblina
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">
                + Garantia extra de 5 anos contra desbotamento — totalizando 10 anos de proteção do investimento.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">A entrada na linha de maior desempenho.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">
                Rejeição térmica, estética e cobertura de garantia que a linha convencional não alcança.
              </motion.p>
              <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <Link to="/contato">
                    <MessageCircle className="w-5 h-5" />Solicitar Orçamento
                  </Link>
                </Button>
                <Button asChild variant="outline" className="font-bold text-lg px-8 py-6 rounded-xl">
                  <Link to="/automotivo/solar/matrix">
                    Conheça a Matrix <ArrowRight className="w-4 h-4" />
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

export default AutomotivoSolarPolariz;
