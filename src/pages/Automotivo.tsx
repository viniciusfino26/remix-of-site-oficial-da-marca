import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Car, Sun, Zap, Shield, Layers, Award, CheckCircle, Wrench, Users, MessageCircle, ArrowRight, Eye, Smartphone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

interface SolarProduct {
  id: string;
  nameKey: string;
  categoryKey: string;
  specs: { icon: typeof Sun; labelKey: string; valueKey: string }[];
  descKey: string;
  warrantyKey: string;
  accent?: boolean;
}

const solarProducts: SolarProduct[] = [
  {
    id: 'dark',
    nameKey: 'automotivePage.dark.name',
    categoryKey: 'automotivePage.dark.category',
    specs: [
      { icon: Layers, labelKey: 'automotivePage.specSerie', valueKey: 'automotivePage.dark.serie' },
      { icon: Sun, labelKey: 'automotivePage.specHeat', valueKey: 'automotivePage.dark.heat' },
      { icon: Zap, labelKey: 'automotivePage.specTech', valueKey: 'automotivePage.dark.tech' },
      { icon: Shield, labelKey: 'automotivePage.specType', valueKey: 'automotivePage.dark.type' },
    ],
    descKey: 'automotivePage.dark.desc',
    warrantyKey: 'automotivePage.dark.warranty',
  },
  {
    id: 'eclipse',
    nameKey: 'automotivePage.eclipse.name',
    categoryKey: 'automotivePage.eclipse.category',
    specs: [
      { icon: Layers, labelKey: 'automotivePage.specSerie', valueKey: 'automotivePage.eclipse.serie' },
      { icon: Sun, labelKey: 'automotivePage.specHeat', valueKey: 'automotivePage.eclipse.heat' },
      { icon: Zap, labelKey: 'automotivePage.specTech', valueKey: 'automotivePage.eclipse.tech' },
      { icon: Shield, labelKey: 'automotivePage.specType', valueKey: 'automotivePage.eclipse.type' },
    ],
    descKey: 'automotivePage.eclipse.desc',
    warrantyKey: 'automotivePage.eclipse.warranty',
    accent: true,
  },
  {
    id: 'vip',
    nameKey: 'automotivePage.vip.name',
    categoryKey: 'automotivePage.vip.category',
    specs: [
      { icon: Layers, labelKey: 'automotivePage.specSerie', valueKey: 'automotivePage.vip.serie' },
      { icon: Sun, labelKey: 'automotivePage.specHeat', valueKey: 'automotivePage.vip.heat' },
      { icon: Zap, labelKey: 'automotivePage.specTech', valueKey: 'automotivePage.vip.tech' },
      { icon: Shield, labelKey: 'automotivePage.specType', valueKey: 'automotivePage.vip.type' },
    ],
    descKey: 'automotivePage.vip.desc',
    warrantyKey: 'automotivePage.vip.warranty',
    accent: true,
  },
  {
    id: 'polaris',
    nameKey: 'automotivePage.polaris.name',
    categoryKey: 'automotivePage.polaris.category',
    specs: [
      { icon: Layers, labelKey: 'automotivePage.specSerie', valueKey: 'automotivePage.polaris.serie' },
      { icon: Sun, labelKey: 'automotivePage.specHeat', valueKey: 'automotivePage.polaris.heat' },
      { icon: Zap, labelKey: 'automotivePage.specTech', valueKey: 'automotivePage.polaris.tech' },
      { icon: Shield, labelKey: 'automotivePage.specType', valueKey: 'automotivePage.polaris.type' },
    ],
    descKey: 'automotivePage.polaris.desc',
    warrantyKey: 'automotivePage.polaris.warranty',
  },
];

const solarTabs = [
  { id: 'dark', label: 'Dark' },
  { id: 'eclipse', label: 'Eclipse' },
  { id: 'vip', label: 'VIP' },
  { id: 'polaris', label: 'Polariz Ultra' },
];

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

      {/* Intro Text */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              {t('automotivePage.productsTitle')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light italic mb-6">
              {t('automotivePage.productsSubtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mb-10">
              <div className="separator-accent" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-10 py-6 shadow-premium">
                <Car className="w-5 h-5" />
                ENCONTRE O SEU INSULFILM IDEAL
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solar Products — Tabs + Alternating Sections */}
      <section className="bg-background overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {solarTabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`#product-${tab.id}`}
                  className="px-6 py-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground text-foreground font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-premium"
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {solarProducts.map((product, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={product.id}
              id={`product-${product.id}`}
              className={`py-20 overflow-hidden ${isEven ? 'bg-background' : 'bg-carbon-gradient'}`}
            >
              <div className="container mx-auto px-4">
                <motion.div
                  className="grid md:grid-cols-2 items-center gap-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={stagger}
                >
                  {/* Text Column */}
                  <motion.div
                    variants={isEven ? fadeInLeft : fadeInRight}
                    className={isEven ? 'order-1' : 'order-1 md:order-2'}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                      {t(product.categoryKey)}
                    </span>
                    <h3 className={`text-3xl md:text-4xl font-extrabold mb-4 ${isEven ? 'text-foreground' : 'text-primary-foreground'}`}>
                      INSULFILM™ {t(product.nameKey)}
                    </h3>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {product.specs.map((spec, si) => (
                        <motion.div
                          key={si}
                          className={`flex items-center gap-2 rounded-lg p-3 ${isEven ? 'bg-muted/50' : 'bg-primary-foreground/5'}`}
                          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
                            <spec.icon className={`w-4 h-4 ${isEven ? 'text-primary' : 'text-accent'}`} />
                          </div>
                          <div className="min-w-0">
                            <p className={`text-[10px] uppercase tracking-wider ${isEven ? 'text-muted-foreground' : 'text-primary-foreground/50'}`}>
                              {t(spec.labelKey)}
                            </p>
                            <p className={`text-xs font-bold truncate ${isEven ? 'text-foreground' : 'text-primary-foreground'}`}>
                              {t(spec.valueKey)}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <p className={`text-sm font-light mb-5 leading-relaxed ${isEven ? 'text-muted-foreground' : 'text-primary-foreground/60'}`}>
                      {t(product.descKey)}
                    </p>

                    <div className={`flex items-center gap-2 mb-6 text-xs font-semibold ${isEven ? 'text-accent' : 'text-accent'}`}>
                      <Award className="w-4 h-4" />
                      {t(product.warrantyKey)}
                    </div>

                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-sm hover:shadow-md transition-all">
                      <MessageCircle className="w-4 h-4" />
                      {t('automotivePage.cta')}
                    </Button>
                  </motion.div>

                  {/* Image Column */}
                  <motion.div
                    variants={isEven ? fadeInRight : fadeInLeft}
                    className={isEven ? 'order-2' : 'order-2 md:order-1'}
                  >
                    <motion.div
                      className={`rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden ${isEven ? 'bg-carbon-gradient' : 'bg-primary-foreground/5'}`}
                      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                      <div className="bg-hero-texture absolute inset-0 opacity-30" />
                      <div className="text-center relative z-10 p-8">
                        <Car className={`w-16 h-16 mx-auto mb-4 ${isEven ? 'text-accent/40' : 'text-accent/30'}`} />
                        <p className={`text-sm font-bold uppercase tracking-widest ${isEven ? 'text-primary-foreground/40' : 'text-primary-foreground/30'}`}>
                          {t(product.nameKey)}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </section>

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
