import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Shield, ShieldCheck, Layers, Zap, ArrowRight, Wrench,
  CheckCircle, MessageCircle, Lock, Eye
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

/* ── Comparativo SkudoGuard vs SkudoUltra ── */
const comparison = [
  { labelKey: 'skudoUltra.comp.lamination', guardKey: 'skudoUltra.comp.laminationGuard', ultraKey: 'skudoUltra.comp.laminationUltra' },
  { labelKey: 'skudoUltra.comp.tensile', guardKey: 'skudoUltra.comp.tensileGuard', ultraKey: 'skudoUltra.comp.tensileUltra' },
  { labelKey: 'skudoUltra.comp.rupture', guardKey: 'skudoUltra.comp.ruptureGuard', ultraKey: 'skudoUltra.comp.ruptureUltra' },
  { labelKey: 'skudoUltra.comp.adhesive', guardKey: 'skudoUltra.comp.adhesiveGuard', ultraKey: 'skudoUltra.comp.adhesiveUltra' },
  { labelKey: 'skudoUltra.comp.tech', guardKey: 'skudoUltra.comp.techGuard', ultraKey: 'skudoUltra.comp.techUltra' },
];

/* ── Diferenciais técnicos ── */
const differentials = [
  { icon: Layers, titleKey: 'skudoUltra.diff.quad', descKey: 'skudoUltra.diff.quadDesc' },
  { icon: Shield, titleKey: 'skudoUltra.diff.polymer', descKey: 'skudoUltra.diff.polymerDesc' },
  { icon: Zap, titleKey: 'skudoUltra.diff.adhesive', descKey: 'skudoUltra.diff.adhesiveDesc' },
  { icon: Eye, titleKey: 'skudoUltra.diff.clarity', descKey: 'skudoUltra.diff.clarityDesc' },
];

/* ── Especificações ── */
const physicalProps = [
  { labelKey: 'skudoUltra.phys.tensile', valueKey: 'skudoUltra.phys.tensileVal', icon: Zap },
  { labelKey: 'skudoUltra.phys.rupture', valueKey: 'skudoUltra.phys.ruptureVal', icon: Shield },
  { labelKey: 'skudoUltra.phys.pullout', valueKey: 'skudoUltra.phys.pulloutVal', icon: Layers },
  { labelKey: 'skudoUltra.phys.elongation', valueKey: 'skudoUltra.phys.elongationVal', icon: ArrowRight },
  { labelKey: 'skudoUltra.phys.puncture', valueKey: 'skudoUltra.phys.punctureVal', icon: Wrench },
];

const WHATSAPP_NUMBER = '5511999999999';

const SkudoUltra = () => {
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
      {/* ═══ 1. HERO ═══ */}
      <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
        <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
        <motion.div
          className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <ShieldCheck className="w-3.5 h-3.5 mr-2" />
                {t('skudoUltra.heroBadge')}
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              INSULFILM™ SkudoUltra
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
              {t('skudoUltra.heroSubtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ═══ 2. DESCRIÇÃO ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                {t('skudoUltra.descTitle')}
              </motion.h2>
              <motion.p variants={fadeInLeft} className="text-muted-foreground font-light leading-relaxed mb-8">
                {t('skudoUltra.descText')}
              </motion.p>
              <motion.ul className="space-y-4" variants={stagger}>
                {['diff1', 'diff2', 'diff3', 'diff4'].map((key, i) => (
                  <motion.li key={key} variants={fadeInLeft} className="flex items-start gap-3">
                    <motion.div
                      className="mt-0.5"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, type: 'spring', stiffness: 300 }}
                    >
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </motion.div>
                    <span className="text-foreground font-medium">{t(`skudoUltra.${key}`)}</span>
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

      {/* ═══ 3. COMPARATIVO VS SKUDOGUARD ═══ */}
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
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t('skudoUltra.compTitle')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light">
              {t('skudoUltra.compSubtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            <Card className="rounded-2xl border-2 border-primary-foreground/10 shadow-premium-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="grid grid-cols-3 bg-primary-foreground/5 border-b border-primary-foreground/10">
                  <div className="p-4 md:p-6">
                    <span className="text-sm font-bold text-primary-foreground/40 uppercase tracking-wider">{t('skudoUltra.compSpec')}</span>
                  </div>
                  <div className="p-4 md:p-6 text-center">
                    <span className="text-sm font-bold text-primary-foreground/60 uppercase tracking-wider">SkudoGuard</span>
                  </div>
                  <div className="p-4 md:p-6 text-center bg-accent/5">
                    <span className="text-sm font-bold text-accent uppercase tracking-wider">SkudoUltra</span>
                  </div>
                </div>

                {/* Rows */}
                {comparison.map((row, i) => (
                  <motion.div
                    key={i}
                    className="grid grid-cols-3 border-b border-primary-foreground/10 last:border-b-0"
                    variants={fadeInUp}
                  >
                    <div className="p-4 md:p-6 flex items-center">
                      <span className="text-sm font-bold text-primary-foreground">{t(row.labelKey)}</span>
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-center">
                      <span className="text-sm text-primary-foreground/60">{t(row.guardKey)}</span>
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-center bg-accent/5">
                      <span className="text-sm font-bold text-accent">{t(row.ultraKey)}</span>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══ 4. DIFERENCIAIS TÉCNICOS ═══ */}
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
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t('skudoUltra.diffTitle')}
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {differentials.map((d, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card rounded-2xl h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <d.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-lg font-extrabold text-primary-foreground mb-2">{t(d.titleKey)}</h3>
                      <p className="text-sm text-primary-foreground/60 font-light">{t(d.descKey)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 5. ESPECIFICAÇÕES FÍSICAS ═══ */}
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
              {t('skudoUltra.physTitle')}
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {physicalProps.map((prop, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="card-premium-hover rounded-2xl h-full">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <prop.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium mb-1">{t(prop.labelKey)}</p>
                        <p className="text-xl font-extrabold text-foreground">{t(prop.valueKey)}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. CTA FINAL ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              {t('skudoUltra.ctaTitle')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">
              {t('skudoUltra.ctaSubtitle')}
            </motion.p>
            <motion.div variants={scaleIn}>
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a película INSULFILM SkudoUltra.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('skudoUltra.ctaButton')}
                </a>
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xs text-muted-foreground mt-6 font-light">
              {t('skudoUltra.ctaDisclaimer')}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SkudoUltra;
