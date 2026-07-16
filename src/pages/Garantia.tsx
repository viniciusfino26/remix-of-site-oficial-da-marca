import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ParallaxBreak from '@/components/ParallaxBreak';
import { ShieldCheck, Clock, FileText, CheckCircle, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const WHATSAPP = 'https://wa.me/5511976136911?text=Preciso%20acionar%20a%20garantia';

const Garantia = () => {
  const { t } = useTranslation();

  const warranties = [
    { productKey: 'warrantyPage.w1Product', periodKey: 'warrantyPage.w1Period', coverageKey: 'warrantyPage.w1Coverage' },
    { productKey: 'warrantyPage.w2Product', periodKey: 'warrantyPage.w2Period', coverageKey: 'warrantyPage.w2Coverage' },
    { productKey: 'warrantyPage.w3Product', periodKey: 'warrantyPage.w3Period', coverageKey: 'warrantyPage.w3Coverage' },
    { productKey: 'warrantyPage.w4Product', periodKey: 'warrantyPage.w4Period', coverageKey: 'warrantyPage.w4Coverage' },
    { productKey: 'warrantyPage.w5Product', periodKey: 'warrantyPage.w5Period', coverageKey: 'warrantyPage.w5Coverage' },
    { productKey: 'warrantyPage.w6Product', periodKey: 'warrantyPage.w6Period', coverageKey: 'warrantyPage.w6Coverage' },
  ];

  const steps = [
    { icon: FileText, titleKey: 'warrantyPage.step1Title', descKey: 'warrantyPage.step1Desc' },
    { icon: CheckCircle, titleKey: 'warrantyPage.step2Title', descKey: 'warrantyPage.step2Desc' },
    { icon: MessageCircle, titleKey: 'warrantyPage.step3Title', descKey: 'warrantyPage.step3Desc' },
    { icon: ShieldCheck, titleKey: 'warrantyPage.step4Title', descKey: 'warrantyPage.step4Desc' },
  ];

  return (
    <main>
      <Helmet>
        <title>Garantia INSULFILM™ | Cobertura e Prazos das Películas</title>
        <meta name="description" content="Conheça a garantia oficial INSULFILM™: prazos, coberturas e condições para películas solares, de segurança, arquitetônicas e PPF aplicadas em Centros Autorizados." />
        <link rel="canonical" href="https://www.insulfilm.com.br/garantia" />
        <meta property="og:title" content="Garantia INSULFILM™ | Cobertura Oficial" />
        <meta property="og:description" content="Termos, prazos e cobertura da garantia oficial INSULFILM™ para todas as linhas de películas." />
        <meta property="og:url" content="https://www.insulfilm.com.br/garantia" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="relative min-h-[60vh] flex items-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <ShieldCheck className="w-3.5 h-3.5 mr-2" />
                {t('warrantyPage.badge')}
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">{t('warrantyPage.heroTitle')}</motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">{t('warrantyPage.heroSubtitle')}</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">{t('warrantyPage.tableTitle')}</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid gap-3">
              {warranties.map((w, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="glass-card rounded-xl">
                    <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      <div className="flex items-center gap-3 sm:w-1/3">
                        <Clock className="w-5 h-5 text-accent shrink-0" />
                        <span className="font-bold text-foreground">{t(w.productKey)}</span>
                      </div>
                      <Badge className="bg-accent/10 text-accent border-accent/20 shrink-0">{t(w.periodKey)}</Badge>
                      <p className="text-sm text-muted-foreground font-light">{t(w.coverageKey)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ParallaxBreak minHeight="25vh" stats={[
        { value: '100%', label: t('warrantyPage.statCoverage') },
        { value: 'QR Code', label: t('warrantyPage.statQR') },
      ]} />

      <section className="py-24 bg-carbon-gradient">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">{t('warrantyPage.stepsTitle')}</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="glass-card rounded-2xl h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3"><s.icon className="w-6 h-6 text-accent" /></div>
                    <div className="text-2xl font-extrabold text-accent mb-2">{i + 1}</div>
                    <h3 className="font-bold text-primary-foreground mb-1">{t(s.titleKey)}</h3>
                    <p className="text-xs text-primary-foreground/60 font-light">{t(s.descKey)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" /> {t('warrantyPage.ctaButton')}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Garantia;
