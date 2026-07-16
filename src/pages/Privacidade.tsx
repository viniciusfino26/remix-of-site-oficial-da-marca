import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Eye, Database, Cookie, Share2, UserCheck, Clock, Lock, Mail, RefreshCw } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

interface SectionProps {
  icon: React.ElementType;
  titleKey: string;
  contentKey: string;
  index: number;
}

const sections: { icon: React.ElementType; titleKey: string; contentKey: string }[] = [
  { icon: Eye, titleKey: 'privacy.introTitle', contentKey: 'privacy.introText' },
  { icon: Database, titleKey: 'privacy.dataTitle', contentKey: 'privacy.dataText' },
  { icon: Cookie, titleKey: 'privacy.cookiesTitle', contentKey: 'privacy.cookiesText' },
  { icon: Shield, titleKey: 'privacy.purposeTitle', contentKey: 'privacy.purposeText' },
  { icon: Share2, titleKey: 'privacy.sharingTitle', contentKey: 'privacy.sharingText' },
  { icon: UserCheck, titleKey: 'privacy.rightsTitle', contentKey: 'privacy.rightsText' },
  { icon: Clock, titleKey: 'privacy.retentionTitle', contentKey: 'privacy.retentionText' },
  { icon: Lock, titleKey: 'privacy.securityTitle', contentKey: 'privacy.securityText' },
  { icon: Mail, titleKey: 'privacy.contactTitle', contentKey: 'privacy.contactText' },
  { icon: RefreshCw, titleKey: 'privacy.updatesTitle', contentKey: 'privacy.updatesText' },
];

const PrivacySection = ({ icon: Icon, titleKey, contentKey, index }: SectionProps) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeInUp}
      className={`py-16 ${isEven ? 'bg-background' : 'bg-muted/30'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-5">
            <motion.div
              className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 icon-ring-glow"
              whileHover={{ scale: 1.15, transition: { type: 'spring', stiffness: 300 } }}
            >
              <Icon className="w-7 h-7 text-accent" />
            </motion.div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                {t(titleKey)}
              </h2>
              <div className="text-base md:text-lg text-muted-foreground font-light leading-relaxed whitespace-pre-line">
                {t(contentKey)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Privacidade = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Política de Privacidade | INSULFILM™</title>
        <meta name="description" content="Política de Privacidade INSULFILM™: como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD." />
        <link rel="canonical" href="https://www.insulfilm.com.br/privacidade" />
        <meta property="og:title" content="Política de Privacidade | INSULFILM™" />
        <meta property="og:description" content="Como a INSULFILM™ trata seus dados pessoais em conformidade com a LGPD." />
        <meta property="og:url" content="https://www.insulfilm.com.br/privacidade" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-glow-pulse" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
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
              {t('privacy.heroTitle')}
            </motion.h1>
            <motion.div variants={scaleIn} className="flex justify-center mb-8">
              <div className="separator-accent" />
            </motion.div>
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-primary-foreground/70 font-light leading-relaxed max-w-3xl mx-auto">
              {t('privacy.heroSubtitle')}
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Sections */}
      {sections.map((section, i) => (
        <PrivacySection key={section.titleKey} {...section} index={i} />
      ))}

      {/* Last updated */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-12 bg-background"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground font-light">
            {t('privacy.lastUpdated')}
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default Privacidade;
