import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Globe, Cpu, Car, Building2, Eye, SunDim, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const Index = () => {
  const { t } = useTranslation();

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
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-carbon-gradient overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-4 pt-20 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
              INSULFILM™
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-gradient-premium leading-tight">
              {t('hero.tagline')}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/automotivo">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 w-full sm:w-auto">
                  <Car className="w-4 h-4" />
                  {t('hero.ctaCar')}
                </Button>
              </Link>
              <Link to="/residencial">
                <Button size="lg" variant="outline" className="border-silver/30 text-foreground hover:bg-secondary/50 font-semibold gap-2 w-full sm:w-auto">
                  <Building2 className="w-4 h-4" />
                  {t('hero.ctaHome')}
                </Button>
              </Link>
              <Link to="/parceiro">
                <Button size="lg" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 font-semibold gap-2 w-full sm:w-auto">
                  {t('hero.ctaPartner')}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Product Highlights */}
      <section id="product-highlights" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t('products.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              {t('products.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {productHighlights.map((product, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link to={product.href}>
                  <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-premium group h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <product.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wider text-primary mb-2 block">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                      <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t('products.viewDetails')} <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why INSULFILM */}
      <section id="why-insulfilm" className="py-20 bg-carbon-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gradient-premium mb-3">
              {t('why.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              {t('why.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {whyItems.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="bg-card/50 border-border hover:border-primary/20 transition-all h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Simulators Placeholder */}
      <section id="simulators" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t('simulators.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              {t('simulators.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {simulators.map((sim) => (
              <motion.div key={sim.id} variants={fadeInUp}>
                <Card id={sim.id} className="bg-card border-border border-dashed h-full">
                  <CardContent className="p-8 text-center flex flex-col items-center justify-center min-h-[240px]">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                      <sim.icon className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{sim.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{sim.desc}</p>
                    <span className="text-xs uppercase tracking-wider text-primary font-semibold px-3 py-1 rounded-full bg-primary/10">
                      {t('simulators.comingSoon')}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
