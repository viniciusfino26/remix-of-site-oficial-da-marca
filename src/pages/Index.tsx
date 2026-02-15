import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Shield, Award, Globe, Cpu, Car, Building2, Eye, SunDim, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
  const productsRef = useRef<HTMLElement>(null);
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

  // Products section parallax
  const { scrollYProgress: productsProgress } = useScroll({
    target: productsRef,
    offset: ['start end', 'end start'],
  });
  const productsBgY = useTransform(productsProgress, [0, 1], [40, -40]);

  // Why section parallax
  const { scrollYProgress: whyProgress } = useScroll({
    target: whyRef,
    offset: ['start end', 'end start'],
  });
  const whyTextureY = useTransform(whyProgress, [0, 1], [30, -30]);

  const productHighlights = [
    {
      icon: Car,
      title: t('products.solarControl'),
      desc: 'Dark, Eclipse, VIP, Polaris, Matrix, Polaris Ultra',
      href: '/automotivo',
      category: t('products.automotive'),
    },
    {
      icon: Shield,
      title: t('products.ppf'),
      desc: 'PPF Phantom 6mil / 8mil',
      href: '/produtos',
      category: t('products.automotive'),
    },
    {
      icon: Building2,
      title: t('products.architecture'),
      desc: 'Petrolio, Metallico, Specchiato, Naturale, Orizzonte',
      href: '/residencial',
      category: t('products.architecture'),
    },
  ];

  const whyItems = [
    { icon: Cpu, title: t('why.tech'), desc: t('why.techDesc') },
    { icon: Award, title: t('why.warranty'), desc: t('why.warrantyDesc') },
    { icon: Shield, title: t('why.authentic'), desc: t('why.authenticDesc') },
    { icon: Globe, title: t('why.global'), desc: t('why.globalDesc') },
  ];

  const simulators = [
    { id: 'automotive-visualizer', icon: Car, title: t('simulators.autoViz'), desc: t('simulators.autoVizDesc') },
    { id: 'vlt-simulator', icon: Eye, title: t('simulators.vlt'), desc: t('simulators.vltDesc') },
    { id: 'architecture-demo', icon: Layers, title: t('simulators.archDemo'), desc: t('simulators.archDemoDesc') },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center bg-carbon-gradient overflow-hidden">
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

        <motion.div className="container mx-auto px-4 pt-24 relative z-10" style={{ y: heroTextY, opacity: heroOpacity }}>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.4em] text-accent mb-6 font-semibold">
              INSULFILM™
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-primary-foreground leading-[0.95] tracking-tight">
              {t('hero.tagline')}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              {t('hero.subtitle')}
            </motion.p>

            {/* Decorative separator */}
            <motion.div variants={scaleIn} className="flex justify-center mb-10">
              <div className="separator-accent" />
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/automotivo">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300">
                  <Car className="w-4 h-4" />
                  {t('hero.ctaCar')}
                </Button>
              </Link>
              <Link to="/residencial">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold gap-2 w-full sm:w-auto backdrop-blur-sm">
                  <Building2 className="w-4 h-4" />
                  {t('hero.ctaHome')}
                </Button>
              </Link>
              <Link to="/parceiro">
                <Button size="lg" variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 font-semibold gap-2 w-full sm:w-auto">
                  {t('hero.ctaPartner')}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Product Highlights */}
      <section ref={productsRef} id="product-highlights" className="py-24 bg-background overflow-hidden">
        <motion.div className="container mx-auto px-4" style={{ y: productsBgY }}>
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              {t('products.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light">
              {t('products.subtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            {productHighlights.map((product, i) => (
              <motion.div
                key={i}
                variants={i === 0 ? fadeInLeft : i === 2 ? fadeInRight : fadeInUp}
              >
                <Link to={product.href}>
                  <Card className="card-premium-hover bg-card border-border border-t-2 border-t-transparent hover:border-t-accent/50 group h-full rounded-xl">
                    <CardContent className="p-8">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:from-accent/15 group-hover:to-accent/25 transition-all duration-300"
                        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                      >
                        <product.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                      </motion.div>
                      <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-extrabold text-foreground mb-2">{product.title}</h3>
                      <p className="text-sm text-muted-foreground mb-5 font-light">{product.desc}</p>
                      <span className="text-sm font-semibold text-accent flex items-center gap-1 group-hover:gap-2.5 transition-all duration-300">
                        {t('products.viewDetails')} <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why INSULFILM */}
      <section ref={whyRef} id="why-insulfilm" className="relative py-24 bg-carbon-gradient overflow-hidden">
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

      {/* Simulators */}
      <section id="simulators" className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              {t('simulators.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light">
              {t('simulators.subtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            {simulators.map((sim, i) => (
              <motion.div key={sim.id} variants={i === 0 ? fadeInLeft : i === 2 ? fadeInRight : scaleIn}>
                <motion.div whileHover={{ y: -6, transition: { duration: 0.3 } }}>
                  <Card id={sim.id} className="bg-gradient-to-br from-card to-muted/50 border-border hover:border-accent/20 transition-all duration-300 h-full rounded-xl shadow-sm hover:shadow-premium">
                    <CardContent className="p-10 text-center flex flex-col items-center justify-center min-h-[260px]">
                      <motion.div
                        className="w-18 h-18 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5"
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        <sim.icon className="w-9 h-9 text-muted-foreground" />
                      </motion.div>
                      <h3 className="text-lg font-extrabold text-foreground mb-2">{sim.title}</h3>
                      <p className="text-sm text-muted-foreground mb-5 font-light">{sim.desc}</p>
                      <span className="shimmer text-xs uppercase tracking-widest text-accent font-bold px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                        {t('simulators.comingSoon')}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
