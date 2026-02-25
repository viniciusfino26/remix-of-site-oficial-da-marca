import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Sun, Eye, Heart, Car, CheckCircle, Shield,
  Zap, Layers, Thermometer, MessageCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

const benefits = [
  { icon: Sun, titleKey: 'skinSafe.benefits.uv', descKey: 'skinSafe.benefits.uvDesc' },
  { icon: Eye, titleKey: 'skinSafe.benefits.transparent', descKey: 'skinSafe.benefits.transparentDesc' },
  { icon: Heart, titleKey: 'skinSafe.benefits.skin', descKey: 'skinSafe.benefits.skinDesc' },
  { icon: Car, titleKey: 'skinSafe.benefits.interior', descKey: 'skinSafe.benefits.interiorDesc' },
];

const specs = [
  { labelKey: 'skinSafe.specs.vlt', valueKey: 'skinSafe.specs.vltVal', icon: Eye },
  { labelKey: 'skinSafe.specs.uvBlock', valueKey: 'skinSafe.specs.uvBlockVal', icon: Shield },
  { labelKey: 'skinSafe.specs.irRejection', valueKey: 'skinSafe.specs.irRejectionVal', icon: Thermometer },
  { labelKey: 'skinSafe.specs.tensile', valueKey: 'skinSafe.specs.tensileVal', icon: Zap },
  { labelKey: 'skinSafe.specs.thickness', valueKey: 'skinSafe.specs.thicknessVal', icon: Layers },
];

const WHATSAPP_NUMBER = '5511999999999';

const SkinSafe8K = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "INSULFILM™ SkinSafe8K",
    "brand": { "@type": "Brand", "name": "INSULFILM™" },
    "description": "Película de proteção (7 mil / 177,8 micras) contra estilhaços em quebras acidentais. 5 anos de garantia.",
    "image": "LINK_DA_IMAGEM_AQUI",
    "url": "https://www.insulfilm.com.br/skinsafe8k",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Espessura", "value": "7 mil / 177,8 micras" },
      { "@type": "PropertyValue", "name": "Função", "value": "Proteção contra quebras acidentais" },
      { "@type": "PropertyValue", "name": "Garantia", "value": "5 anos" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ SkinSafe8K | Película de Segurança Automotiva</title>
        <meta name="description" content="Película de proteção (7 mil / 177,8 micras) contra estilhaços em quebras acidentais. 5 anos de garantia." />
        <meta property="og:title" content="INSULFILM™ SkinSafe8K | Película de Segurança Automotiva" />
        <meta property="og:description" content="Película de proteção (7 mil / 177,8 micras) contra estilhaços em quebras acidentais. 5 anos de garantia." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="LINK_DA_IMAGEM_AQUI" />
        <meta property="og:url" content="https://www.insulfilm.com.br/skinsafe8k" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
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
                <Sun className="w-3.5 h-3.5 mr-2" />
                {t('skinSafe.heroBadge')}
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              INSULFILM™ SkinSafe8K
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
              {t('skinSafe.heroSubtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ═══ 2. BENEFÍCIOS ═══ */}
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
              {t('skinSafe.benefitsTitle')}
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
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card rounded-2xl h-full text-center">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <b.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-lg font-extrabold text-primary-foreground mb-2">{t(b.titleKey)}</h3>
                      <p className="text-sm text-primary-foreground/60 font-light">{t(b.descKey)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ParallaxBreak minHeight="35vh" stats={[
        { value: '7 mil', label: 'Espessura' },
        { value: '99%', label: 'Bloqueio UV' },
        { value: '5 anos', label: 'Garantia' },
      ]} />

      {/* ═══ 3. DESCRIÇÃO DO PRODUTO ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                {t('skinSafe.descTitle')}
              </motion.h2>
              <motion.p variants={fadeInLeft} className="text-muted-foreground font-light leading-relaxed mb-8">
                {t('skinSafe.descText')}
              </motion.p>
              <motion.ul className="space-y-4" variants={stagger}>
                {['benefit1', 'benefit2', 'benefit3', 'benefit4'].map((key, i) => (
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
                    <span className="text-foreground font-medium">{t(`skinSafe.${key}`)}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
              <div className="aspect-[4/3] rounded-2xl bg-muted/50 border border-border flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <Sun className="w-16 h-16 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">{t('av13k.imagePlaceholder')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 4. ESPECIFICAÇÕES TÉCNICAS ═══ */}
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
              {t('skinSafe.specsTitle')}
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
            {specs.map((prop, i) => (
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

      {/* ═══ 5. CTA FINAL ═══ */}
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
              {t('skinSafe.ctaTitle')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">
              {t('skinSafe.ctaSubtitle')}
            </motion.p>
            <motion.div variants={scaleIn}>
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a película INSULFILM SkinSafe8K.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('skinSafe.ctaButton')}
                </a>
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xs text-muted-foreground mt-6 font-light">
              {t('skinSafe.ctaDisclaimer')}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
};

export default SkinSafe8K;
