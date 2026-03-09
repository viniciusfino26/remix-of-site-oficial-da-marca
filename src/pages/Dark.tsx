import { useRef } from 'react';
import ParallaxBreak from '@/components/ParallaxBreak';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sun, Zap, Layers, Shield, CheckCircle, MessageCircle, Eye } from 'lucide-react';
import productImage from '@/assets/auto-solar-dark.png';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

const WHATSAPP_NUMBER = '5511999999999';

const specs = [
  { icon: Zap, label: 'Tecnologia', value: 'Pigmentada Não Refletiva' },
  { icon: Layers, label: 'Série', value: 'Clear' },
  { icon: Eye, label: 'Bloqueio UV', value: 'Até 95%' },
  { icon: Shield, label: 'Garantia', value: '2 anos' },
];

const Dark = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "INSULFILM™ Dark",
    "brand": { "@type": "Brand", "name": "INSULFILM™" },
    "description": "A clássica película pigmentada não refletiva. Privacidade máxima, redução de claridade e 95% de filtro UV.",
    "image": "LINK_DA_IMAGEM_AQUI",
    "url": "https://www.insulfilm.com.br/dark",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Tecnologia", "value": "Pigmentada Não Refletiva" },
      { "@type": "PropertyValue", "name": "Bloqueio UV", "value": "Até 95%" },
      { "@type": "PropertyValue", "name": "Garantia", "value": "2 anos" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Dark | Película de Escurecimento Clássico</title>
        <meta name="description" content="A clássica película pigmentada não refletiva. Privacidade máxima, redução de claridade e 95% de filtro UV." />
        <meta property="og:title" content="INSULFILM™ Dark | Película de Escurecimento Clássico" />
        <meta property="og:description" content="A clássica película pigmentada não refletiva. Privacidade máxima, redução de claridade e 95% de filtro UV." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="LINK_DA_IMAGEM_AQUI" />
        <meta property="og:url" content="https://www.insulfilm.com.br/dark" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <main>
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Eye className="w-3.5 h-3.5 mr-2" />
                  Privacidade Máxima
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
                INSULFILM™ Dark
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
                {t('automotivePage.dark.desc')}
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

        <ParallaxBreak minHeight="25vh" stats={[{ value: '95%', label: 'Filtro UV' }, { value: '2', label: 'Anos Garantia' }]} />

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
                <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">O Clássico que Nunca Sai de Moda</motion.h2>
                <motion.p variants={fadeInLeft} className="text-primary-foreground/60 font-light leading-relaxed mb-8">
                  A INSULFILM™ Dark é a película de escurecimento mais popular do Brasil. Não refletiva e com excelente redução de claridade, ela garante privacidade e proteção UV com o melhor preço do mercado.
                </motion.p>
                <motion.ul className="space-y-4" variants={stagger}>
                  {['Película pigmentada não refletiva', 'Privacidade máxima para seu veículo', 'Filtro de até 95% dos raios UV', 'Garantia de 2 anos'].map((text, i) => (
                    <motion.li key={i} variants={fadeInLeft} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-primary-foreground font-medium">{text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={productImage} alt="INSULFILM™ Dark" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Escureça com a original</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">Solicite um orçamento da película mais popular do Brasil.</motion.p>
              <motion.div variants={scaleIn}>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a película INSULFILM Dark.')}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />Solicitar Orçamento
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

export default Dark;
