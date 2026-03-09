import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sun, Zap, Layers, Eye, CheckCircle, MessageCircle, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ParallaxBreak from '@/components/ParallaxBreak';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const WHATSAPP_NUMBER = '5511936182746';

const specs = [
  { icon: Zap, label: 'Tecnologia', value: 'Nano Cerâmica Transparente' },
  { icon: Eye, label: 'Transmissão de Luz', value: '72%' },
  { icon: Sun, label: 'Rejeição de IR', value: 'Até 81%' },
  { icon: Layers, label: 'Categoria', value: 'Arquitetônica' },
];

const Clear70 = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "INSULFILM™ Clear70",
    "brand": { "@type": "Brand", "name": "INSULFILM™" },
    "description": "Conforto térmico com alta transparência. Preserva a iluminação natural com 72% de visibilidade e 81% de bloqueio IR.",
    "image": "LINK_DA_IMAGEM_AQUI",
    "url": "https://www.insulfilm.com.br/clear70",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Tecnologia", "value": "Nano Cerâmica Transparente" },
      { "@type": "PropertyValue", "name": "Transmissão de Luz", "value": "72%" },
      { "@type": "PropertyValue", "name": "Rejeição de Infravermelho (IR)", "value": "Até 81%" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Clear70 | Película Arquitetônica Nano Cerâmica Transparente</title>
        <meta name="description" content="Conforto térmico com alta transparência. Preserva a iluminação natural com 72% de visibilidade e 81% de bloqueio IR." />
        <meta property="og:title" content="INSULFILM™ Clear70 | Película Arquitetônica Nano Cerâmica Transparente" />
        <meta property="og:description" content="Conforto térmico com alta transparência. Preserva a iluminação natural com 72% de visibilidade e 81% de bloqueio IR." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="LINK_DA_IMAGEM_AQUI" />
        <meta property="og:url" content="https://www.insulfilm.com.br/clear70" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <main>
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Home className="w-3.5 h-3.5 mr-2" />
                  Arquitetônica
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
                INSULFILM™ Clear70
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
                Conforto térmico com alta transparência. Preserva a iluminação natural com 72% de visibilidade e 81% de bloqueio IR.
              </motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
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
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <s.icon className="w-7 h-7 text-accent" />
                        </div>
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

        <ParallaxBreak minHeight="35vh" stats={[
          { value: '72%', label: 'Transmissão de Luz' },
          { value: '81%', label: 'Rejeição IR' },
          { value: '99%', label: 'Bloqueio UV' },
        ]} />

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
                <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">
                  Transparência com Proteção Térmica
                </motion.h2>
                <motion.p variants={fadeInLeft} className="text-primary-foreground/60 font-light leading-relaxed mb-8">
                  A INSULFILM™ Clear70 combina nano cerâmica transparente com alta rejeição de calor. Ideal para ambientes que precisam de iluminação natural sem abrir mão do conforto térmico.
                </motion.p>
                <motion.ul className="space-y-4" variants={stagger}>
                  {['Nano cerâmica transparente de alta performance', '72% de transmissão de luz visível', 'Rejeição de até 81% dos raios infravermelhos', 'Preserva a iluminação natural dos ambientes'].map((text, i) => (
                    <motion.li key={i} variants={fadeInLeft} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-primary-foreground font-medium">{text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
                <div className="aspect-[4/3] rounded-2xl bg-muted/10 border border-border/20 flex items-center justify-center">
                  <div className="text-center text-primary-foreground/30">
                    <Home className="w-16 h-16 mx-auto mb-3 opacity-30" />
                    <p className="text-sm">Imagem do produto</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Solicite um Orçamento</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">
                Descubra como a Clear70 pode transformar o conforto térmico do seu ambiente.
              </motion.p>
              <motion.div variants={scaleIn}>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a película INSULFILM Clear70.')}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Solicitar Orçamento
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Clear70;
