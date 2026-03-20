import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
  Shield, CheckCircle, Eye, Sun, Lock, Lightbulb,
  Award, FileText, RefreshCw, MessageCircle, Flame, CircleDot, Sword,
  Layers, ArrowRight, BookOpen, Wrench, Zap,
  AlertTriangle, HeartCrack, UserX, Quote, Heart, ShieldAlert, Users
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ParallaxBreak from '@/components/ParallaxBreak';

/* ── animation variants ── */
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

/* Dramatic slow fade for emotional sections */
const emotionalFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

/* ── CountUp component ── */
const CountUp = ({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      setDisplay(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
};

/* ── Impact data ── */
const impactData = [
  { labelKey: 'av13k.impact.preBrk', vela: 1, pedra: 22, taco: 5 },
  { labelKey: 'av13k.impact.postBrk', vela: 24, pedra: 22, taco: 12 },
  { labelKey: 'av13k.impact.total', vela: 25, pedra: 44, taco: 17 },
];
const weaponIcons = [
  { icon: Flame, labelKey: 'av13k.impact.candle' },
  { icon: CircleDot, labelKey: 'av13k.impact.stone' },
  { icon: Sword, labelKey: 'av13k.impact.bat' },
];

/* ── Physical properties data ── */
const physicalProps = [
  { labelKey: 'av13k.phys.tensile', valueKey: 'av13k.phys.tensileVal', icon: Zap },
  { labelKey: 'av13k.phys.rupture', valueKey: 'av13k.phys.ruptureVal', icon: Shield },
  { labelKey: 'av13k.phys.pullout', valueKey: 'av13k.phys.pulloutVal', icon: Layers },
  { labelKey: 'av13k.phys.elongation', valueKey: 'av13k.phys.elongationVal', icon: ArrowRight },
  { labelKey: 'av13k.phys.puncture', valueKey: 'av13k.phys.punctureVal', icon: Wrench },
];

/* ── Optical benefits ── */
const opticalBenefits = [
  { icon: Eye, titleKey: 'av13k.optical.clarity', descKey: 'av13k.optical.clarityDesc' },
  { icon: Sun, titleKey: 'av13k.optical.uv', descKey: 'av13k.optical.uvDesc' },
  { icon: Lock, titleKey: 'av13k.optical.privacy', descKey: 'av13k.optical.privacyDesc' },
  { icon: Lightbulb, titleKey: 'av13k.optical.comfort', descKey: 'av13k.optical.comfortDesc' },
];

/* ── Danger cards data ── */
const dangerCards = [
  { icon: AlertTriangle, titleKey: 'av13kP.danger.shards', descKey: 'av13kP.danger.shardsDesc' },
  { icon: Eye, titleKey: 'av13kP.danger.eyes', descKey: 'av13kP.danger.eyesDesc' },
  { icon: HeartCrack, titleKey: 'av13kP.danger.skin', descKey: 'av13kP.danger.skinDesc' },
  { icon: UserX, titleKey: 'av13kP.danger.children', descKey: 'av13kP.danger.childrenDesc' },
];

const WHATSAPP_NUMBER = '5511936182746';

const Antivandalismo13KProposta = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  return (
    <main>
      {/* ═══ 1. HERO + VIDEO ═══ */}
      <section ref={heroRef} className="relative min-h-[70vh] flex flex-col items-center bg-carbon-gradient overflow-hidden">
        <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
        <motion.div
          className="container mx-auto px-4 pt-32 pb-8 relative z-10 text-center"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <Shield className="w-3.5 h-3.5 mr-2" />
                {t('av13k.heroBadge')}
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              INSULFILM™ Antivandalismo 13K
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
              {t('av13k.heroSubtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10 w-full max-w-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-premium-lg border border-primary-foreground/10">
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/nGBNE0FG-8Q?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&controls=0&autoplay=1&mute=1&loop=1&playlist=nGBNE0FG-8Q"
                title="INSULFILM™ Antivandalismo 13K"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 z-10 cursor-default" />
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ═══ 2. A REALIDADE DOS ROUBOS (NOVA - emocional) ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={emotionalFade} className="flex justify-center mb-4">
              <ShieldAlert className="w-10 h-10 text-accent" />
            </motion.div>
            <motion.h2 variants={emotionalFade} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t('av13kP.reality.title')}
            </motion.h2>
            <motion.p variants={emotionalFade} className="text-primary-foreground/60 text-lg font-light max-w-2xl mx-auto">
              {t('av13kP.reality.subtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Stat 1 */}
            <motion.div variants={emotionalFade}>
              <Card className="glass-card rounded-2xl text-center h-full">
                <CardContent className="p-8">
                  <p className="text-5xl md:text-6xl font-extrabold text-accent mb-3">
                    <CountUp target={8} suffix=" min" />
                  </p>
                  <p className="text-primary-foreground/70 font-light text-sm">{t('av13kP.reality.stat1')}</p>
                </CardContent>
              </Card>
            </motion.div>
            {/* Stat 2 */}
            <motion.div variants={emotionalFade}>
              <Card className="glass-card rounded-2xl text-center h-full">
                <CardContent className="p-8">
                  <p className="text-5xl md:text-6xl font-extrabold text-accent mb-3">
                    <CountUp target={180} suffix=" mil" />
                  </p>
                  <p className="text-primary-foreground/70 font-light text-sm">{t('av13kP.reality.stat2')}</p>
                </CardContent>
              </Card>
            </motion.div>
            {/* Stat 3 */}
            <motion.div variants={emotionalFade}>
              <Card className="glass-card rounded-2xl text-center h-full">
                <CardContent className="p-8">
                  <p className="text-5xl md:text-6xl font-extrabold text-accent mb-3">
                    <CountUp target={73} suffix="%" />
                  </p>
                  <p className="text-primary-foreground/70 font-light text-sm">{t('av13kP.reality.stat3')}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-xs text-primary-foreground/40 mt-6 text-center italic"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={emotionalFade}
          >
            {t('av13kP.reality.source')}
          </motion.p>
        </div>
      </section>

      <ParallaxBreak minHeight="35vh" stats={[
        { value: '12 mil', label: 'Espessura' },
        { value: 'Dupla', label: 'Laminação' },
        { value: '5 anos', label: 'Garantia' },
      ]} />

      {/* ═══ 3. PRODUCT DESCRIPTION (original) ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                {t('av13k.descTitle')}
              </motion.h2>
              <motion.p variants={fadeInLeft} className="text-muted-foreground font-light leading-relaxed mb-8">
                {t('av13k.descText')}
              </motion.p>
              <motion.ul className="space-y-4" variants={stagger}>
                {['benefit1', 'benefit2', 'benefit3', 'benefit4'].map((key, i) => (
                  <motion.li key={key} variants={fadeInLeft} className="flex items-start gap-3">
                    <motion.div className="mt-0.5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3, type: 'spring', stiffness: 300 }}>
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </motion.div>
                    <span className="text-foreground font-medium">{t(`av13k.${key}`)}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
              <div className="aspect-[4/3] rounded-2xl bg-muted/50 border border-border flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <Shield className="w-16 h-16 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">{t('av13k.imagePlaceholder')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 4. O PERIGO VAI ALÉM DO PREJUÍZO (NOVA - emocional) ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={emotionalFade} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              {t('av13kP.danger.title')}
            </motion.h2>
            <motion.p variants={emotionalFade} className="text-muted-foreground text-lg font-light max-w-3xl mx-auto">
              {t('av13kP.danger.subtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {dangerCards.map((card, i) => (
              <motion.div key={i} variants={emotionalFade}>
                <Card className="card-premium-hover rounded-2xl h-full border-l-4 border-l-accent/60">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <card.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-foreground mb-1">{t(card.titleKey)}</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{t(card.descKey)}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 5. IMPACT TABLE (original) ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">{t('av13k.impactTitle')}</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light">{t('av13k.impactSubtitle')}</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>

          <motion.div className="relative max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <div className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90">
              <span className="text-xs font-extrabold tracking-[0.5em] text-accent/40 uppercase">IMPACTOS</span>
            </div>
            <Card className="rounded-2xl border-2 border-border shadow-premium-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-4 bg-muted/30 border-b border-border">
                  <div className="p-4 md:p-6" />
                  {weaponIcons.map((w, i) => (
                    <motion.div key={i} className="p-4 md:p-6 flex flex-col items-center gap-2" variants={fadeInUp}>
                      <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center" whileInView={{ rotate: [0, -8, 8, 0], scale: [0.8, 1.1, 1] }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6, type: 'spring' }}>
                        <w.icon className="w-6 h-6 text-accent" />
                      </motion.div>
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">{t(w.labelKey)}</span>
                    </motion.div>
                  ))}
                </div>
                {impactData.map((row, ri) => (
                  <motion.div key={ri} className={`grid grid-cols-4 border-b border-border last:border-b-0 ${ri === 2 ? 'bg-accent/5' : ''}`} variants={fadeInUp}>
                    <div className="p-4 md:p-6 flex items-center">
                      <span className={`text-sm font-bold ${ri === 2 ? 'text-accent' : 'text-foreground'}`}>{t(row.labelKey)}</span>
                    </div>
                    {[row.vela, row.pedra, row.taco].map((val, ci) => (
                      <motion.div key={ci} className="p-4 md:p-6 flex items-center justify-center group cursor-default" whileHover={{ backgroundColor: 'hsl(19 100% 56% / 0.08)' }} transition={{ duration: 0.2 }}>
                        <span className={`text-2xl md:text-3xl font-extrabold transition-colors group-hover:text-accent ${ri === 2 ? 'text-accent' : 'text-foreground'}`}>
                          {ri === 0 && ci === 0 ? <CountUp target={val} /> : <CountUp target={val} prefix="até " />}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </CardContent>
            </Card>
            <motion.p variants={fadeInUp} className="text-xs text-muted-foreground mt-4 text-center italic">{t('av13k.impactFootnote')}</motion.p>
          </motion.div>

          <motion.div className="max-w-3xl mx-auto mt-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
            <Card className="rounded-2xl border-accent/20 border-2 shadow-premium bg-gradient-to-r from-accent/5 to-transparent">
              <CardContent className="p-8 flex items-center gap-6">
                <Shield className="w-12 h-12 text-accent shrink-0" />
                <div>
                  <h3 className="text-lg font-extrabold text-foreground mb-1">{t('av13k.barrierTitle')}</h3>
                  <p className="text-muted-foreground font-light">{t('av13k.barrierText')}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. PROTEJA QUEM VOCÊ AMA (NOVA - emocional) ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={emotionalFade} className="flex justify-center mb-4">
              <Heart className="w-10 h-10 text-accent" />
            </motion.div>
            <motion.h2 variants={emotionalFade} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t('av13kP.family.title')}
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Family placeholder image */}
            <motion.div variants={fadeInLeft}>
              <div className="aspect-[4/3] rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center">
                <div className="text-center text-primary-foreground/30">
                  <Users className="w-16 h-16 mx-auto mb-3" />
                  <p className="text-sm font-light">{t('av13kP.family.imagePlaceholder')}</p>
                </div>
              </div>
            </motion.div>

            {/* Emotional text */}
            <motion.div variants={fadeInRight} className="space-y-6">
              <Card className="glass-card rounded-2xl border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <ShieldAlert className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-primary-foreground font-medium leading-relaxed mb-3">
                        {t('av13kP.family.message1')}
                      </p>
                      <p className="text-primary-foreground/60 font-light text-sm leading-relaxed">
                        {t('av13kP.family.message2')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card rounded-2xl border-l-4 border-l-accent/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <p className="text-primary-foreground/80 font-light leading-relaxed">
                      {t('av13kP.family.message3')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 7. CTA INTERMEDIÁRIO EMOCIONAL (NOVO) ═══ */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={emotionalFade} className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              {t('av13kP.ctaMid.title')}
            </motion.p>
            <motion.p variants={emotionalFade} className="text-muted-foreground font-light mb-6">
              {t('av13kP.ctaMid.subtitle')}
            </motion.p>
            <motion.div variants={scaleIn}>
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-5 rounded-xl shadow-premium hover:shadow-premium-lg transition-all"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de proteger meu veículo e minha família com a película Antivandalismo 13K.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('av13kP.ctaMid.button')}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 8. APPLICABILITY (original) ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">{t('av13k.applicTitle')}</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {['applic1', 'applic2'].map((key, i) => (
              <motion.div key={key} variants={i === 0 ? fadeInLeft : fadeInRight}>
                <Card className="glass-card rounded-2xl overflow-hidden h-full">
                  <div className="aspect-[16/10] bg-primary-foreground/5 flex items-center justify-center">
                    <div className="text-center text-primary-foreground/30">
                      <Layers className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-xs">{t('av13k.imagePlaceholder')}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-extrabold text-primary-foreground mb-2">{t(`av13k.${key}Title`)}</h3>
                    <p className="text-primary-foreground/60 font-light text-sm">{t(`av13k.${key}Desc`)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 9. DEPOIMENTO / CENÁRIO REAL (NOVO - emocional) ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={emotionalFade}
          >
            <Card className="rounded-2xl border-2 border-accent/20 shadow-premium-lg overflow-hidden"
              style={{ background: 'linear-gradient(135deg, hsl(19 100% 56% / 0.03), hsl(224 100% 19% / 0.03))' }}
            >
              <CardContent className="p-8 md:p-12">
                <Quote className="w-10 h-10 text-accent/40 mb-6" />
                <blockquote className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed italic mb-6">
                  {t('av13kP.testimonial.quote')}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <UserX className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t('av13kP.testimonial.author')}</p>
                    <p className="text-xs text-muted-foreground">{t('av13kP.testimonial.location')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══ 10. PHYSICAL PROPERTIES (original) ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">{t('av13k.physTitle')}</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {physicalProps.map((prop, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <motion.div whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                  <Card className="card-premium-hover rounded-xl h-full border-t-2 border-t-transparent hover:border-t-accent/50">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                        <prop.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t(prop.labelKey)}</p>
                      <p className="text-lg font-extrabold text-foreground">{t(prop.valueKey)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 11. OPTICAL & SOLAR BENEFITS (original) ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">{t('av13k.opticalTitle')}</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {opticalBenefits.map((b, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="glass-card rounded-2xl h-full text-center">
                  <CardContent className="p-6">
                    <motion.div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4" whileInView={{ rotate: [0, -10, 10, 0], scale: [0.8, 1.1, 1] }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, type: 'spring' }}>
                      <b.icon className="w-7 h-7 text-accent" />
                    </motion.div>
                    <h3 className="text-sm font-extrabold text-primary-foreground mb-2">{t(b.titleKey)}</h3>
                    <p className="text-xs text-primary-foreground/60 font-light">{t(b.descKey)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 12. WARRANTY (original) ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.div variants={fadeInLeft}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="card-premium-hover rounded-2xl h-full border-t-2 border-t-accent/30">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4"><Award className="w-6 h-6 text-accent" /></div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">{t('av13k.warranty.prodTitle')}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{t('av13k.warranty.prodDesc')}</p>
                    <ul className="space-y-2">
                      {['prodItem1', 'prodItem2', 'prodItem3'].map(k => (
                        <li key={k} className="flex items-start gap-2 text-xs text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />{t(`av13k.warranty.${k}`)}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="card-premium-hover rounded-2xl h-full border-t-2 border-t-accent/30">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4"><FileText className="w-6 h-6 text-accent" /></div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">{t('av13k.warranty.servTitle')}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{t('av13k.warranty.servDesc')}</p>
                    <ul className="space-y-2">
                      {['servItem1', 'servItem2', 'servItem3'].map(k => (
                        <li key={k} className="flex items-start gap-2 text-xs text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />{t(`av13k.warranty.${k}`)}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="card-premium-hover rounded-2xl h-full border-2 border-accent/30 shadow-premium">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4"><RefreshCw className="w-6 h-6 text-accent" /></div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">{t('av13k.warranty.replTitle')}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{t('av13k.warranty.replDesc')}</p>
                    <p className="text-xs text-accent font-bold">{t('av13k.warranty.replConditions')}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 13. GLOSSARY (original) ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-3"><BookOpen className="w-8 h-8 text-accent" /></motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">{t('av13k.glossaryTitle')}</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Accordion type="single" collapsible className="space-y-3">
              {['mech', 'solar'].map((section) => (
                <AccordionItem key={section} value={section} className="glass-card rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-left font-bold text-primary-foreground hover:no-underline py-5">{t(`av13k.glossary.${section}Title`)}</AccordionTrigger>
                  <AccordionContent className="text-primary-foreground/60 font-light leading-relaxed pb-5">{t(`av13k.glossary.${section}Content`)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ═══ 14. CTA FINAL (original) ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">{t('av13k.ctaTitle')}</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">{t('av13k.ctaSubtitle')}</motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a película Antivandalismo 13K.')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  {t('av13k.ctaButton')}
                </a>
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xs text-muted-foreground mt-6 font-light">{t('av13k.ctaDisclaimer')}</motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Antivandalismo13KProposta;
