import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Car, Sun, Zap, Shield, Layers, Award, CheckCircle, Wrench, Star, Users, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

interface Product {
  nameKey: string;
  categoryKey: string;
  specs: { icon: typeof Sun; labelKey: string; valueKey: string }[];
  descKey: string;
  warrantyKey: string;
  accent?: boolean;
}

const products: Product[] = [
  {
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
  {
    nameKey: 'automotivePage.antivandal.name',
    categoryKey: 'automotivePage.antivandal.category',
    specs: [
      { icon: Layers, labelKey: 'automotivePage.specSerie', valueKey: 'automotivePage.antivandal.serie' },
      { icon: Sun, labelKey: 'automotivePage.specHeat', valueKey: 'automotivePage.antivandal.heat' },
      { icon: Zap, labelKey: 'automotivePage.specTech', valueKey: 'automotivePage.antivandal.tech' },
      { icon: Shield, labelKey: 'automotivePage.specType', valueKey: 'automotivePage.antivandal.type' },
    ],
    descKey: 'automotivePage.antivandal.desc',
    warrantyKey: 'automotivePage.antivandal.warranty',
  },
  {
    nameKey: 'automotivePage.phantom.name',
    categoryKey: 'automotivePage.phantom.category',
    specs: [
      { icon: Layers, labelKey: 'automotivePage.specSerie', valueKey: 'automotivePage.phantom.serie' },
      { icon: Sun, labelKey: 'automotivePage.specHeat', valueKey: 'automotivePage.phantom.heat' },
      { icon: Zap, labelKey: 'automotivePage.specTech', valueKey: 'automotivePage.phantom.tech' },
      { icon: Shield, labelKey: 'automotivePage.specType', valueKey: 'automotivePage.phantom.type' },
    ],
    descKey: 'automotivePage.phantom.desc',
    warrantyKey: 'automotivePage.phantom.warranty',
  },
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

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-glow-pulse" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.4em] text-accent mb-4 font-semibold">
              INSULFILM™ {t('automotivePage.heroLabel')}
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              {t('automotivePage.heroTitle')}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light">
              {t('automotivePage.heroSubtitle')}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex mt-6">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              {t('automotivePage.productsTitle')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light">
              {t('automotivePage.productsSubtitle')}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {products.map((product, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className={`card-premium-hover h-full rounded-xl border-t-2 border-t-transparent hover:border-t-accent/50 ${product.accent ? 'border-glow' : 'border-border'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-extrabold text-foreground">{t(product.nameKey)}</h3>
                        <span className="text-xs font-bold uppercase tracking-widest text-accent">
                          {t(product.categoryKey)}
                        </span>
                      </div>
                      {product.accent && (
                        <Badge className="bg-accent/10 text-accent border-accent/20 text-[10px]">
                          <Star className="w-3 h-3 mr-1" /> Premium
                        </Badge>
                      )}
                    </div>

                    {/* Specs grid */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {product.specs.map((spec, si) => (
                        <div key={si} className="flex items-center gap-2 bg-muted/50 rounded-lg p-2.5">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
                            <spec.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{t(spec.labelKey)}</p>
                            <p className="text-xs font-bold text-foreground truncate">{t(spec.valueKey)}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground font-light mb-5 leading-relaxed">
                      {t(product.descKey)}
                    </p>

                    {/* Warranty badge */}
                    <div className="flex items-center gap-2 mb-5 text-xs text-accent font-semibold">
                      <Award className="w-4 h-4" />
                      {t(product.warrantyKey)}
                    </div>

                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-sm hover:shadow-md transition-all">
                      <MessageCircle className="w-4 h-4" />
                      {t('automotivePage.cta')}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentials */}
      <section className="relative py-24 bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t('automotivePage.diffTitle')}
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex justify-center mt-4">
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
                          <li key={n} className="flex items-start gap-3 text-sm text-primary-foreground/70">
                            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            {t(`automotivePage.diff.${tab.key}.item${n}`)}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              {t('automotivePage.faqTitle')}
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqKeys.map((key) => (
                <AccordionItem key={key} value={key} className="border border-border rounded-xl px-6 overflow-hidden">
                  <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
                    {t(`automotivePage.${key}.q`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-5">
                    {t(`automotivePage.${key}.a`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Automotivo;
