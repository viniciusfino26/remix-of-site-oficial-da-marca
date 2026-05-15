import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ParallaxBreak from '@/components/ParallaxBreak';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const FAQ = () => {
  const { t } = useTranslation();

  const faqCategories = [
    {
      titleKey: 'faqPage.catAutomotive',
      faqs: [{ qKey: 'faqPage.auto1Q', aKey: 'faqPage.auto1A' }],
    },
    {
      titleKey: 'faqPage.catSolar',
      faqs: [
        { qKey: 'faqPage.solar1Q', aKey: 'faqPage.solar1A' },
        { qKey: 'faqPage.solar2Q', aKey: 'faqPage.solar2A' },
        { qKey: 'faqPage.solar3Q', aKey: 'faqPage.solar3A' },
      ],
    },
    {
      titleKey: 'faqPage.catSecurity',
      faqs: Array.from({ length: 27 }, (_, i) => ({
        qKey: `faqPage.sec${i + 1}Q`,
        aKey: `faqPage.sec${i + 1}A`,
      })),
    },
    {
      titleKey: 'faqPage.catArchitectural',
      faqs: [
        { qKey: 'faqPage.arq1Q', aKey: 'faqPage.arq1A' },
        { qKey: 'faqPage.arq2Q', aKey: 'faqPage.arq2A' },
        { qKey: 'faqPage.arq3Q', aKey: 'faqPage.arq3A' },
      ],
    },
    {
      titleKey: 'faqPage.catWarranty',
      faqs: [
        { qKey: 'faqPage.war1Q', aKey: 'faqPage.war1A' },
        { qKey: 'faqPage.war2Q', aKey: 'faqPage.war2A' },
        { qKey: 'faqPage.war3Q', aKey: 'faqPage.war3A' },
      ],
    },
    {
      titleKey: 'faqPage.catGeneral',
      faqs: [
        { qKey: 'faqPage.gen1Q', aKey: 'faqPage.gen1A' },
        { qKey: 'faqPage.gen2Q', aKey: 'faqPage.gen2A' },
      ],
    },
  ];

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <HelpCircle className="w-3.5 h-3.5 mr-2" />
                {t('faqPage.badge')}
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">{t('faqPage.heroTitle')}</motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">{t('faqPage.heroSubtitle')}</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <ParallaxBreak minHeight="25vh" stats={[
        { value: '6', label: t('faqPage.statCategories') },
        { value: '35+', label: t('faqPage.statQuestions') },
      ]} />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {faqCategories.map((cat, ci) => (
            <motion.div key={ci} className="mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-2xl font-extrabold text-foreground mb-6">{t(cat.titleKey)}</motion.h2>
              <motion.div variants={fadeInUp}>
                <Accordion type="single" collapsible className="space-y-2">
                  {cat.faqs.map((faq, fi) => (
                    <AccordionItem key={fi} value={`${ci}-${fi}`} className="glass-card rounded-xl border-none px-4">
                      <AccordionTrigger className="text-left text-foreground font-semibold hover:text-accent">
                        {t(faq.qKey)}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                        {t(faq.aKey)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FAQ;
