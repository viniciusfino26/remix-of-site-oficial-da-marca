import { useRef, useEffect, useState } from 'react';
import ParallaxBreak from '@/components/ParallaxBreak';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Award, CheckCircle, Users, Star, Clock } from 'lucide-react';
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
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerTimeline = {
  visible: { transition: { staggerChildren: 0.18 } },
};

// Animated counter component
function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <span
        className="text-4xl md:text-5xl font-extrabold text-accent drop-shadow-[0_0_20px_hsl(19,100%,56%,0.4)]"
      >
        {count}{suffix}
      </span>
      <p className="text-xs md:text-sm text-primary-foreground/80 mt-2 font-semibold uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

const heroStats = [
  { value: 40, suffix: '+', labelKey: 'about.statYears' },
  { value: 4, suffix: '', labelKey: 'about.statStores' },
  { value: 15, suffix: '+', labelKey: 'about.statPioneering' },
  { value: 15, suffix: '+', labelKey: 'about.statSearched' },
];

const timelineData = [
  {
    decade: '1986–2000',
    decadeKey: 'about.timeline.decade1',
    events: [
      { year: '1986', key: 'about.timeline.e1986' },
      { year: '1996–98', key: 'about.timeline.e1996' },
      { year: '1996', key: 'about.timeline.e1996b' },
      { year: '1997', key: 'about.timeline.e1997' },
      { year: '1998', key: 'about.timeline.e1998' },
    ],
  },
  {
    decade: '2000–2010',
    decadeKey: 'about.timeline.decade2',
    events: [
      { year: '2000', key: 'about.timeline.e2000' },
      { year: '2001', key: 'about.timeline.e2001' },
      { year: '2001', key: 'about.timeline.e2001b' },
      { year: '2008', key: 'about.timeline.e2008' },
    ],
  },
  {
    decade: '2010–2020',
    decadeKey: 'about.timeline.decade3',
    events: [
      { year: '2011', key: 'about.timeline.e2011' },
      { year: '2012', key: 'about.timeline.e2012' },
      { year: '2018', key: 'about.timeline.e2018' },
      { year: '2019', key: 'about.timeline.e2019' },
    ],
  },
  {
    decade: '2020–2025',
    decadeKey: 'about.timeline.decade4',
    events: [
      { year: '2024', key: 'about.timeline.e2024' },
      { year: '2025', key: 'about.timeline.e2025' },
    ],
  },
];

const differentials = [
  { icon: Shield, key: 'about.diff.original' },
  { icon: Clock, key: 'about.diff.lasting' },
  { icon: Users, key: 'about.diff.professionals' },
  { icon: Award, key: 'about.diff.warranty' },
];

const BRAND_GRADIENT = 'linear-gradient(135deg, hsl(224, 100%, 19%), hsl(19, 100%, 56%))';
const BRAND_GRADIENT_VERTICAL = 'linear-gradient(180deg, hsl(224, 100%, 19%), hsl(19, 100%, 56%))';

const QuemSomos = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const diffRef = useRef<HTMLElement>(null);

  // Hero parallax
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -100]), { stiffness: 100, damping: 30 });
  const heroGlowY = useSpring(useTransform(heroProgress, [0, 1], [0, 60]), { stiffness: 80, damping: 25 });
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 40]), { stiffness: 60, damping: 20 });

  // Diff section parallax
  const { scrollYProgress: diffProgress } = useScroll({
    target: diffRef,
    offset: ['start end', 'end start'],
  });
  const diffTextureY = useTransform(diffProgress, [0, 1], [30, -30]);

  return (
    <main>
      {/* Hero Institucional */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center bg-carbon-gradient overflow-hidden">
        <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
        <motion.div className="absolute inset-0" style={{ y: heroGlowY }}>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-glow-pulse" />
        </motion.div>

        <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10" style={{ y: heroTextY, opacity: heroOpacity }}>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.4em] text-accent mb-6 font-semibold">
              INSULFILM™
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-8 leading-[0.95]">
              {t('about.heroTitle')}
            </motion.h1>
            <motion.div variants={scaleIn} className="flex justify-center mb-8">
              <div className="separator-accent" />
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-accent font-bold mb-6">
              {t('about.heroQuestion')}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-primary-foreground/70 font-light leading-relaxed max-w-3xl mx-auto">
              {t('about.heroText')}
            </motion.p>

          </motion.div>
        </motion.div>

        {/* Animated Stats - outside parallax fade */}
        <motion.div
          className="container mx-auto px-4 relative z-20 pb-24"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="flex justify-center gap-8 md:gap-16">
            {heroStats.map((stat, i) => (
              <AnimatedStat key={i} value={stat.value} suffix={stat.suffix} label={t(stat.labelKey)} />
            ))}
          </div>
        </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Seção Institucional */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Blocos 1 e 2 lado a lado */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                {t('about.intro.whoTitle')}
              </h2>
              <div className="separator-accent mb-6" />
              <p className="text-muted-foreground font-light leading-relaxed">
                {t('about.intro.whoText')}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                {t('about.intro.diffTitle')}
              </h2>
              <div className="separator-accent mb-6" />
              <p className="text-muted-foreground font-light leading-relaxed">
                {t('about.intro.diffText')}
              </p>
            </motion.div>
          </motion.div>

          {/* Bloco 3 - Produtos */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              {t('about.intro.productsTitle')}
            </motion.h2>
            <motion.div variants={scaleIn} className="separator-accent mb-6" />
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed mb-6">
              {t('about.intro.productsText')}
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3">
              {[
                t('about.intro.product1'),
                t('about.intro.product2'),
                t('about.intro.product3'),
              ].map((item, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground font-light leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Bloco 4 - Statement final */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              {t('about.intro.driveTitle')}
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mb-6">
              <div className="separator-accent" />
            </motion.div>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">
              {t('about.intro.driveText')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Parallax Break */}
      <ParallaxBreak minHeight="30vh" stats={[
        { value: '40+', label: 'Anos de Mercado' },
        { value: '#1', label: 'Marca do Brasil' },
      ]} />

      {/* Timeline */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              {t('about.timelineTitle')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light">
              {t('about.timelineSubtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          {/* Timeline vertical */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central line with brand gradient */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-px"
              style={{ background: BRAND_GRADIENT_VERTICAL }}
            />

            {timelineData.map((decade, di) => (
              <motion.div
                key={decade.decade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={staggerTimeline}
                className="mb-16"
              >
                {/* Decade marker */}
                <motion.div variants={scaleIn} className="relative flex items-center mb-8">
                  <motion.div
                    className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full border-4 border-background -translate-x-1/2 z-20 shadow-md"
                    style={{ background: BRAND_GRADIENT }}
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <div className="ml-14 md:ml-0 md:text-center md:w-full relative z-20">
                    <motion.span
                      className="inline-block text-sm font-extrabold px-5 py-2 rounded-full shadow-lg text-white shimmer"
                      style={{ background: BRAND_GRADIENT }}
                      whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {decade.decade}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Events */}
                {decade.events.map((event, ei) => {
                  const isRight = ei % 2 === 0;
                  return (
                    <motion.div
                      key={`${decade.decade}-${ei}`}
                      variants={isRight ? fadeInLeft : fadeInRight}
                      className="relative mb-6"
                    >
                      {/* Dot with gradient */}
                      <motion.div
                        className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-background -translate-x-1/2 mt-4 z-10"
                        style={{ background: BRAND_GRADIENT }}
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 300 }}
                      />

                      {/* Card */}
                      <div className={`ml-14 md:ml-0 md:w-[45%] ${isRight ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                        <motion.div
                          whileHover={{
                            y: -6,
                            transition: { duration: 0.25 },
                          }}
                        >
                          <Card className="rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_hsl(19,100%,56%,0.15)] border border-border relative">
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl" style={{ background: BRAND_GRADIENT_VERTICAL }} />
                            <CardContent className="p-5">
                              <span
                                className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-white px-3 py-1 rounded-full mb-2"
                                style={{ background: BRAND_GRADIENT }}
                              >
                                {event.year}
                              </span>
                              <p className="text-sm text-foreground/80 mt-1 font-light leading-relaxed">
                                {t(event.key)}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}

            {/* Hoje - closing */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative flex items-center gap-4 justify-start md:justify-center"
            >
              <motion.div
                className="w-6 h-6 rounded-full border-4 border-background z-10 shrink-0 ml-[7px] md:ml-0"
                style={{
                  background: BRAND_GRADIENT,
                  boxShadow: '0 0 20px hsl(19, 100%, 56%, 0.4), 0 0 40px hsl(19, 100%, 56%, 0.2)',
                }}
                whileInView={{ scale: [0, 1.4, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
              />
              <motion.p
                className="text-lg font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: BRAND_GRADIENT }}
                whileInView={{ opacity: [0, 1], x: [20, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t('about.timelineToday')}
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="md:text-center mt-3"
            >
              <motion.p
                className="text-xl md:text-2xl font-extrabold text-foreground max-w-2xl mx-auto ml-14 md:ml-auto"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {t('about.timelineClosing')}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Não é tudo igual */}
      <section ref={diffRef} className="relative py-24 bg-carbon-gradient overflow-hidden">
        <motion.div className="absolute inset-0 bg-diagonal-texture" style={{ y: diffTextureY }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t('about.diffTitle')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/50 text-lg font-light max-w-2xl mx-auto">
              {t('about.diffSubtitle')}
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            {differentials.map((diff, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <motion.div whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                  <Card className="glass-card transition-all duration-300 h-full text-center rounded-xl group hover:border-accent/30"
                    style={{ borderTop: '2px solid transparent' }}
                  >
                    <div
                      className="h-0.5 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: BRAND_GRADIENT }}
                    />
                    <CardContent className="p-8">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5 icon-ring-glow"
                        whileHover={{ scale: 1.15, rotate: 5, transition: { type: 'spring', stiffness: 300 } }}
                      >
                        <diff.icon className="w-8 h-8 text-accent" />
                      </motion.div>
                      <h3 className="text-lg font-extrabold text-primary-foreground mb-2">
                        {t(`${diff.key}Title`)}
                      </h3>
                      <p className="text-sm text-primary-foreground/50 font-light">
                        {t(`${diff.key}Desc`)}
                      </p>
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

export default QuemSomos;
