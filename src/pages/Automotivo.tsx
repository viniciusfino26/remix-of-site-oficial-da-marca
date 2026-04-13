import { useRef } from 'react';
import ParallaxBreak from '@/components/ParallaxBreak';
import ProductBanner from '@/components/ProductBanner';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Car, Sun, Zap, Shield, Layers, Award, CheckCircle, Wrench, Users, MessageCircle, ArrowRight, Eye, Smartphone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import autoSolarImg from '@/assets/auto-solar.png';
import autoSegurancaImg from '@/assets/auto-seguranca.png';
import autoPpfImg from '@/assets/auto-ppf.png';

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

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};




const benefits = [
  { icon: Sun, title: 'Máxima Redução de Calor', desc: 'Raios UV e IR' },
  { icon: Eye, title: 'Excelente Visibilidade', desc: 'Visibilidade Interna' },
  { icon: Shield, title: 'Privacidade e Segurança', desc: 'Segurança Visual' },
  { icon: Smartphone, title: 'Celulares e Eletrônicos', desc: 'Proteção garantida' },
  { icon: Award, title: 'Design Sofisticado', desc: 'Acabamento premium' },
];

const diffTabs = [
  { key: 'service', icon: Users },
  { key: 'performance', icon: Zap },
  { key: 'box', icon: Car },
  { key: 'application', icon: Wrench },
  { key: 'warranty', icon: Award },
];

const faqKeys = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5'];

const Automotivo = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const diffRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroGlowY = useSpring(useTransform(heroProgress, [0, 1], [0, 50]), { stiffness: 80, damping: 25 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const { scrollYProgress: diffProgress } = useScroll({
    target: diffRef,
    offset: ['start end', 'end start'],
  });
  const diffTextureY = useTransform(diffProgress, [0, 1], [25, -25]);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center bg-carbon-gradient overflow-hidden">
        <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
        <motion.div className="absolute inset-0" style={{ y: heroGlowY }}>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-glow-pulse" />
        </motion.div>

        <motion.div className="container mx-auto px-4 pt-32 pb-16 relative z-10" style={{ y: heroTextY, opacity: heroOpacity }}>
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInLeft} className="text-sm uppercase tracking-[0.4em] text-accent mb-4 font-semibold">
              INSULFILM™ {t('automotivePage.heroLabel')}
            </motion.p>
            <motion.h1 variants={fadeInLeft} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              {t('automotivePage.heroTitle')}
            </motion.h1>
            <motion.p variants={fadeInLeft} className="text-lg text-primary-foreground/60 font-light">
              {t('automotivePage.heroSubtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex mt-6">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Seção Texto */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              {t('automotivePage.productsTitle')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light italic mb-8">
              {t('automotivePage.productsSubtitle')}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed max-w-3xl mx-auto">
              Com uma linha completa de soluções em películas, a INSULFILM™ oferece tudo o que você precisa para personalizar e proteger seu veículo e você. Nossas películas originais são fabricadas para lhe garantir uma experiência única em nitidez ótica com visual sofisticado, além de um duradouro desempenho técnico superior. Compare e comprove, sinta a diferença de películas concebidas para superar sua expectativa.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-8">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Banners de Produto */}
      <ProductBanner
        title="Películas Solares para Vidros"
        description="Vista seu carro e você com conforto e estética refinada sob medida."
        buttonText="EXPLORE"
        buttonIcon={Sun}
        link="/automotivo/solar"
        alignment="right"
        imageSrc={autoSolarImg}
        cardVariant="blue"
      />
      <ProductBanner
        title="Películas Antivandalismo e Segurança para Vidros"
        description="Tranquilidade de verdade, somente com vidros reforçados e mais seguros."
        buttonText="CONHEÇA"
        buttonIcon={Shield}
        link="/automotivo/seguranca"
        alignment="left"
        imageSrc={autoSegurancaImg}
        cardVariant="orange"
      />
      <ProductBanner
        title="Películas de Proteção de Pintura (PPF)"
        description="Revestimento regenerativo para trafegar com sossego. Depois do dano, será tarde."
        buttonText="SAIBA MAIS"
        buttonIcon={Layers}
        link="/automotivo/ppf"
        alignment="right"
        imageSrc={autoPpfImg}
        cardVariant="gray"
      />




      {/* Parallax Break */}
      <ParallaxBreak minHeight="30vh" stats={[
        { value: '4M+', label: 'Vendidos' },
        { value: '5', label: 'Gerações de Tecnologia' },
        { value: '#1', label: 'Marca no Brasil' },
      ]} />

      {/* Benefits */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Benefícios Exclusivos
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center icon-ring-glow"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <b.icon className="w-7 h-7 text-accent" />
                </motion.div>
                <h4 className="text-sm font-extrabold text-foreground mb-1">{b.title}</h4>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="text-center"
          >
            <Badge className="bg-accent/10 text-accent border-accent/20 text-sm px-6 py-2 shimmer">
              <Award className="w-4 h-4 mr-2" />
              PACOTE COMPLETO DE GARANTIAS — CERTIFICADO INDIVIDUAL
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-accent overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-accent-foreground mb-3">
              Exija as películas originais INSULFILM™!
            </h2>
            <p className="text-accent-foreground/80 text-lg font-light">
              Sofisticação e Proteção Solar de verdade para você e sua família.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Differentials */}
      <section ref={diffRef} className="relative py-24 bg-carbon-gradient overflow-hidden">
        <motion.div className="absolute inset-0 bg-diagonal-texture" style={{ y: diffTextureY }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t('automotivePage.diffTitle')}
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Tabs defaultValue="service" className="w-full">
              <TabsList className="w-full flex-wrap h-auto bg-primary-foreground/5 rounded-xl p-1.5 gap-1 mb-8">
                {diffTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.key}
                    value={tab.key}
                    className="flex-1 min-w-[120px] gap-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-lg py-3 text-primary-foreground/60 text-xs font-bold uppercase tracking-wider"
                  >
                    <tab.icon className="w-4 h-4" />
                    {t(`automotivePage.diff.${tab.key}.title`)}
                  </TabsTrigger>
                ))}
              </TabsList>

              {diffTabs.map((tab) => (
                <TabsContent key={tab.key} value={tab.key}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="glass-card rounded-xl">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-extrabold text-primary-foreground mb-4">
                          {t(`automotivePage.diff.${tab.key}.title`)}
                        </h3>
                        <p className="text-primary-foreground/60 font-light leading-relaxed mb-6">
                          {t(`automotivePage.diff.${tab.key}.desc`)}
                        </p>
                        <ul className="space-y-3">
                          {[1, 2, 3].map((n) => (
                            <motion.li
                              key={n}
                              className="flex items-start gap-3 text-sm text-primary-foreground/70"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: n * 0.1, duration: 0.4 }}
                            >
                              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                              {t(`automotivePage.diff.${tab.key}.item${n}`)}
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              {t('automotivePage.faqTitle')}
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqKeys.map((key, i) => (
                <motion.div key={key} variants={i % 2 === 0 ? fadeInLeft : fadeInRight}>
                  <AccordionItem value={key} className="border border-border rounded-xl px-6 overflow-hidden">
                    <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
                      {t(`automotivePage.${key}.q`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-5">
                      {t(`automotivePage.${key}.a`)}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Automotivo;
