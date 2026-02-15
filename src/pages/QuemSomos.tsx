import { useRef } from 'react';
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

const timelineData = [
  {
    decade: '1980–1990',
    decadeKey: 'about.timeline.decade1',
    events: [
      { year: '1988', key: 'about.timeline.e1988' },
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

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

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
            {/* Central line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-px" />

            {timelineData.map((decade, di) => (
              <motion.div
                key={decade.decade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="mb-16"
              >
                {/* Decade marker */}
                <motion.div variants={scaleIn} className="relative flex items-center mb-8">
                  <motion.div
                    className="absolute left-4 md:left-1/2 w-5 h-5 bg-accent rounded-full border-4 border-background -translate-x-1/2 z-10 shadow-md"
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <div className="ml-14 md:ml-0 md:text-center md:w-full">
                    <span className="inline-block bg-accent text-accent-foreground text-sm font-extrabold px-5 py-2 rounded-full shadow-md">
                      {decade.decade}
                    </span>
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
                      {/* Dot */}
                      <motion.div
                        className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary/40 rounded-full border-2 border-background -translate-x-1/2 mt-4 z-10"
                        whileInView={{ scale: [0, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />

                      {/* Card */}
                      <div className={`ml-14 md:ml-0 md:w-[45%] ${isRight ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                        <motion.div whileHover={{ y: -4, transition: { duration: 0.25 } }}>
                          <Card className="card-premium-hover border-border border-t-2 border-t-transparent hover:border-t-accent/50 rounded-xl">
                            <CardContent className="p-5">
                              <span className="text-xs font-extrabold text-accent uppercase tracking-wider">{event.year}</span>
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
              className="relative"
            >
              <motion.div
                className="absolute left-4 md:left-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background -translate-x-1/2 z-10 shadow-lg icon-ring-glow"
                whileInView={{ scale: [0, 1.4, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
              />
              <div className="ml-14 md:ml-0 md:text-center md:w-full pt-1">
                <motion.p
                  className="text-lg font-bold text-accent"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t('about.timelineToday')}
                </motion.p>
                <motion.p
                  className="text-xl md:text-2xl font-extrabold text-foreground mt-2 max-w-2xl mx-auto"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {t('about.timelineClosing')}
                </motion.p>
              </div>
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
                  <Card className="glass-card hover:border-accent/20 transition-all duration-300 h-full text-center rounded-xl">
                    <CardContent className="p-8">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5 icon-ring-glow"
                        whileHover={{ scale: 1.15, transition: { type: 'spring', stiffness: 300 } }}
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
