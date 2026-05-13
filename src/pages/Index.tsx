import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Shield, Award, Cpu, Car, Building2, Eye, SunDim, Layers, Fingerprint, Headset } from 'lucide-react';
import logoLight from '@/assets/logo-light.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductBanner from '@/components/ProductBanner';
import ParallaxBreak from '@/components/ParallaxBreak';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import homeSolar from '@/assets/home-solar.png';
import homeSeguranca from '@/assets/home-seguranca.png';
import homeComercial from '@/assets/home-comercial.png';
import homePpf from '@/assets/home-ppf.png';

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
  visible: { transition: { staggerChildren: 0.15 } },
};

const Index = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);

  // Hero parallax
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -120]), { stiffness: 100, damping: 30 });
  const heroGlowY = useSpring(useTransform(heroProgress, [0, 1], [0, 80]), { stiffness: 80, damping: 25 });
  const heroGlowScale = useTransform(heroProgress, [0, 0.5, 1], [1, 1.3, 1.5]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 50]), { stiffness: 60, damping: 20 });

  // Why section parallax
  const { scrollYProgress: whyProgress } = useScroll({
    target: whyRef,
    offset: ['start end', 'end start'],
  });
  const whyTextureY = useTransform(whyProgress, [0, 1], [30, -30]);

  const whyItems = [
    { icon: Cpu, title: t('why.tech'), desc: t('why.techDesc') },
    { icon: Award, title: t('why.warranty'), desc: t('why.warrantyDesc') },
    { icon: Fingerprint, title: t('why.authentic'), desc: t('why.authenticDesc') },
    { icon: Headset, title: t('why.consulting'), desc: t('why.consultingDesc') },
  ];

  const simulators = [
    { id: 'automotive-visualizer', icon: Car, title: t('simulators.autoViz'), desc: t('simulators.autoVizDesc') },
    { id: 'vlt-simulator', icon: Eye, title: t('simulators.vlt'), desc: t('simulators.vltDesc') },
    { id: 'architecture-demo', icon: Layers, title: t('simulators.archDemo'), desc: t('simulators.archDemoDesc') },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center bg-carbon-gradient overflow-hidden">
        {/* Geometric texture with parallax */}
        <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />

        {/* Background glow effects with parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroGlowY }}>
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-glow-pulse"
            style={{ scale: heroGlowScale }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-glow-pulse"
            style={{ animationDelay: '1.5s', scale: heroGlowScale }}
          />
        </motion.div>

        <motion.div className="container mx-auto px-4 pt-8 md:pt-12 relative z-10" style={{ y: heroTextY, opacity: heroOpacity }}>
          <motion.div
            className="text-center max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.4em] text-accent mb-6 font-semibold">
              {"\n"}
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-extrabold mb-5 sm:mb-7 text-primary-foreground leading-[0.92] tracking-tight text-balance max-w-5xl mx-auto text-5xl">
              {t('hero.tagline')}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[clamp(1.125rem,2.4vw,1.75rem)] text-primary-foreground/85 mb-6 sm:mb-8 max-w-4xl mx-auto font-normal leading-relaxed px-2 sm:px-4 text-balance">
              {t('hero.subtitle')}
            </motion.p>

            {/* Decorative separator */}
            <motion.div variants={scaleIn} className="flex justify-center">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Hero Video */}
      <section className="relative bg-background py-8 md:py-12">
        <motion.div
          className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-premium-lg border border-border">
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/byVXGGxu4FA?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&controls=0&autoplay=1&mute=1&loop=1&playlist=byVXGGxu4FA"
                title="INSULFILM™"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full pointer-events-none"
              />
              <div className="absolute inset-0 z-10 cursor-default" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Product Banners */}
      <ProductBanner
        title="Películas Solares"
        description="Menos calor, mais conforto. Controle a claridade."
        buttonText="Veja"
        buttonIcon={Car}
        link="/automotivo/solar"
        alignment="right"
        imageSrc={homeSolar}
        cardVariant="blue"
      />

      <ProductBanner
        title="Películas de Proteção e Segurança Superior"
        description="Curta o seu caminho. Vidros muito mais seguros para você chegar lá."
        buttonText="Conheça"
        buttonIcon={Shield}
        link="/automotivo/seguranca"
        alignment="left"
        imageSrc={homeSeguranca}
        cardVariant="orange"
      />

      <ProductBanner
        title="Películas Comerciais e Residenciais"
        description="Conforto e controle solar. Economia inteligente todos os dias, durante anos."
        buttonText="Explore"
        buttonIcon={Building2}
        link="/arquitetonico"
        alignment="right"
        imageSrc={homeComercial}
        cardVariant="blue"
      />

      <ProductBanner
        title="Películas de Proteção à Pintura (PPF)"
        description="Cobertura invisível, seu carro sempre novo e valorizado."
        buttonText="Conheça"
        buttonIcon={Shield}
        link="/automotivo/ppf"
        alignment="left"
        imageSrc={homePpf}
        cardVariant="gray"
      />

      {/* Parallax Break with Stats */}
      <ParallaxBreak
        minHeight="35vh"
        stats={[
          { value: 'Quase 40 anos', label: 'de história no brasil' },
          { value: '+4Mi', label: 'm² aplicados' },
          { value: '#1', label: 'Marca mais conhecida nacionalmente' },
        ]}
      />

      {/* Why INSULFILM */}
      <section ref={whyRef} id="why-insulfilm" className="relative py-14 md:py-24 bg-carbon-gradient overflow-hidden">
        {/* Diagonal texture with parallax */}
        <motion.div className="absolute inset-0 bg-diagonal-texture" style={{ y: whyTextureY }} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t('why.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/50 text-lg font-light">
              {t('why.subtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            {whyItems.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} custom={i}>
                <motion.div whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                  <Card className="glass-card hover:border-accent/20 transition-all duration-300 h-full text-center rounded-xl">
                    <CardContent className="p-8">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5 icon-ring-glow animate-icon-pulse"
                        whileHover={{ scale: 1.15, transition: { type: 'spring', stiffness: 300 } }}
                      >
                        <item.icon className="w-8 h-8 text-accent" />
                      </motion.div>
                      <h3 className="text-lg font-extrabold text-primary-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-primary-foreground/50 font-light">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <LegalDisclaimer />
        </div>
      </section>
    </main>
  );
};

export default Index;
