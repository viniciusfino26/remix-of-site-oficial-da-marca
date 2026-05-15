import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ParallaxBreak from '@/components/ParallaxBreak';
import { Truck, Thermometer, Shield, Eye, Layers, Lock, Clock, Award, RefreshCw, DollarSign, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FrotaLeadForm from '@/components/FrotaLeadForm';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const WHATSAPP = 'https://wa.me/5511976136911?text=Preciso%20de%20películas%20para%20minha%20frota';

const DarkSectionCards = ({ cards }: { cards: { icon: React.ElementType; title: string; desc: string }[] }) => (
  <motion.div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
    {cards.map((c, i) => (
      <motion.div key={i} variants={fadeInUp}>
        <Card className="glass-card rounded-2xl h-full">
          <CardContent className="p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0"><c.icon className="w-8 h-8 text-accent" /></div>
            <h3 className="text-lg font-extrabold text-primary-foreground">{c.title}</h3>
            <p className="text-sm text-primary-foreground/60 font-light leading-relaxed">{c.desc}</p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </motion.div>
);

const LightSectionCards = ({ cards }: { cards: { icon: React.ElementType; title: string; desc: string }[] }) => (
  <motion.div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
    {cards.map((c, i) => (
      <motion.div key={i} variants={fadeInUp}>
        <motion.div whileHover={{ y: -4, transition: { duration: 0.3 } }}>
          <Card className="card-premium-hover rounded-2xl h-full border-t-2 border-t-transparent hover:border-t-accent/50">
            <CardContent className="p-8 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0"><c.icon className="w-8 h-8 text-accent" /></div>
              <h3 className="text-lg font-extrabold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{c.desc}</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
);

const Frota = () => {
  const { t } = useTranslation();

  const comfortCards = [
    { icon: Thermometer, title: t('fleet.comfort1Title'), desc: t('fleet.comfort1Desc') },
    { icon: Shield, title: t('fleet.comfort2Title'), desc: t('fleet.comfort2Desc') },
    { icon: Eye, title: t('fleet.comfort3Title'), desc: t('fleet.comfort3Desc') },
  ];

  const securityCards = [
    { icon: Layers, title: t('fleet.security1Title'), desc: t('fleet.security1Desc') },
    { icon: Lock, title: t('fleet.security2Title'), desc: t('fleet.security2Desc') },
    { icon: Clock, title: t('fleet.security3Title'), desc: t('fleet.security3Desc') },
  ];

  const whyCards = [
    { icon: Award, title: t('fleet.why1Title'), desc: t('fleet.why1Desc') },
    { icon: RefreshCw, title: t('fleet.why2Title'), desc: t('fleet.why2Desc') },
    { icon: DollarSign, title: t('fleet.why3Title'), desc: t('fleet.why3Desc') },
  ];

  return (
    <main>
      <section className="relative min-h-[70vh] flex items-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <Truck className="w-3.5 h-3.5 mr-2" />
                {t('fleet.badge')}
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">{t('fleet.heroTitle')}</motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-accent font-semibold max-w-2xl mx-auto mb-4">{t('fleet.heroAccent')}</motion.p>
            <motion.p variants={fadeInUp} className="text-base text-primary-foreground/60 font-light max-w-2xl mx-auto leading-relaxed">{t('fleet.heroSubtitle')}</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-8"><div className="separator-accent" /></motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">{t('fleet.comfortTitle')}</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light max-w-2xl mx-auto">{t('fleet.comfortSubtitle')}</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
          </motion.div>
          <LightSectionCards cards={comfortCards} />
        </div>
      </section>

      <ParallaxBreak minHeight="25vh" stats={[
        { value: '80%', label: t('fleet.statHeat') },
        { value: '99%', label: t('fleet.statUV') },
        { value: '30%', label: t('fleet.statSave') },
      ]} />

      <section className="py-24 bg-carbon-gradient">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">{t('fleet.securityTitle')}</motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light max-w-2xl mx-auto">{t('fleet.securitySubtitle')}</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
          </motion.div>
          <DarkSectionCards cards={securityCards} />
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">{t('fleet.whyTitle')}</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
          </motion.div>
          <LightSectionCards cards={whyCards} />
        </div>
      </section>

      <section className="py-24 bg-carbon-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">{t('fleet.ctaTitle')}</motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light mb-8 max-w-lg mx-auto">{t('fleet.ctaSubtitle')}</motion.p>
            <motion.div variants={fadeInUp} className="mb-10">
              <FrotaLeadForm />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold shadow-lg">
                  <MessageCircle className="w-5 h-5 mr-2" /> {t('fleet.ctaButton')}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Frota;
