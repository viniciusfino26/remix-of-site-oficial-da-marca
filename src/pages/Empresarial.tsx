import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import ParallaxBreak from '@/components/ParallaxBreak';
import { motion } from 'framer-motion';
import { Building2, Zap, Eye, Shield, Palette, Sun, Lock, MessageCircle } from 'lucide-react';
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

const WHATSAPP = 'https://wa.me/5511976136911?text=Preciso%20de%20películas%20para%20minha%20empresa';

const Empresarial = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: Zap, titleKey: 'corporate.benefit1Title', descKey: 'corporate.benefit1Desc' },
    { icon: Eye, titleKey: 'corporate.benefit2Title', descKey: 'corporate.benefit2Desc' },
    { icon: Shield, titleKey: 'corporate.benefit3Title', descKey: 'corporate.benefit3Desc' },
    { icon: Palette, titleKey: 'corporate.benefit4Title', descKey: 'corporate.benefit4Desc' },
  ];

  const filmTypes = [
    { icon: Sun, titleKey: 'corporate.film1Title', descKey: 'corporate.film1Desc' },
    { icon: Shield, titleKey: 'corporate.film2Title', descKey: 'corporate.film2Desc' },
    { icon: Lock, titleKey: 'corporate.film3Title', descKey: 'corporate.film3Desc' },
    { icon: Palette, titleKey: 'corporate.film4Title', descKey: 'corporate.film4Desc' },
  ];

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Empresarial | Películas para Escritórios e Fachadas</title>
        <meta name="description" content="Películas arquitetônicas profissionais para eficiência energética, segurança e design corporativo." />
      </Helmet>
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-carbon-gradient overflow-hidden">
          <div className="absolute inset-0 bg-hero-texture" />
          <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Building2 className="w-3.5 h-3.5 mr-2" />
                  {t('corporate.badge')}
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">{t('corporate.heroTitle')}</motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">{t('corporate.heroSubtitle')}</motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">{t('corporate.benefitsTitle')}</motion.h2>
              <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
            </motion.div>
            <motion.div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {benefits.map((b, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="glass-card rounded-2xl h-full">
                    <CardContent className="p-8 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0"><b.icon className="w-7 h-7 text-accent" /></div>
                      <div>
                        <h3 className="text-lg font-extrabold text-foreground mb-2">{t(b.titleKey)}</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">{t(b.descKey)}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <ParallaxBreak minHeight="25vh" stats={[
          { value: '30%', label: t('corporate.statEnergy') },
          { value: '80%', label: t('corporate.statHeat') },
          { value: '99%', label: t('corporate.statUV') },
        ]} />

        <section className="py-24 bg-carbon-gradient">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">{t('corporate.filmTypesTitle')}</motion.h2>
              <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
            </motion.div>
            <motion.div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {filmTypes.map((f, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="glass-card rounded-2xl h-full">
                    <CardContent className="p-8 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0"><f.icon className="w-7 h-7 text-accent" /></div>
                      <div>
                        <h3 className="text-lg font-extrabold text-primary-foreground mb-2">{t(f.titleKey)}</h3>
                        <p className="text-sm text-primary-foreground/60 font-light leading-relaxed">{t(f.descKey)}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{t('corporate.ctaTitle')}</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light mb-8 max-w-lg mx-auto">{t('corporate.ctaSubtitle')}</motion.p>
              <motion.div variants={fadeInUp}>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold shadow-lg">
                    <MessageCircle className="w-5 h-5 mr-2" /> {t('corporate.ctaButton')}
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Empresarial;
