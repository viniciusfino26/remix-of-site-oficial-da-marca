import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HelpCircle, AlertTriangle } from 'lucide-react';
import PageHero from '@/components/PageHero';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const MarcaOQueE = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('marca.oQuee.title')}</title>
        <meta name="description" content={t('marca.oQuee.metaDesc')} />
        <link rel="canonical" href="https://insulfilm.com.br/marca/o-que-e" />
        <meta property="og:title" content={t('marca.oQuee.ogTitle')} />
        <meta property="og:description" content={t('marca.oQuee.ogDesc')} />
        <meta property="og:url" content="https://insulfilm.com.br/marca/o-que-e" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <PageHero
          title={t('marca.oQuee.heroTitle')}
          subtitle={t('marca.oQuee.heroSubtitle')}
          badge={{ icon: <HelpCircle className="w-4 h-4" />, text: t('marca.oQuee.badge') }}
        />

        {/* Trademark disclaimer */}
        <section className="py-6 bg-muted border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              {t('marca.oQuee.disclaimer')}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto space-y-8">
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.oQuee.p1')}</p>
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.oQuee.p2')}</p>
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.oQuee.p3')}</p>
                <ul className="space-y-3 pl-4">
                  {[t('marca.oQuee.bullet1'), t('marca.oQuee.bullet2'), t('marca.oQuee.bullet3')].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/80">
                      <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-foreground/90 text-lg font-bold">{t('marca.oQuee.p4')}</p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  {t('marca.oQuee.p5')} <strong className="text-foreground">{t('marca.oQuee.p5bold')}</strong>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Distinction block */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-foreground mb-8">
                {t('marca.oQuee.distinctionTitle')}
              </motion.h2>
              <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <p className="text-foreground/80 leading-relaxed">{t('marca.oQuee.dist1')}</p>
                <p className="text-foreground/80 leading-relaxed">{t('marca.oQuee.dist2')}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-8 bg-muted border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
              {t('marca.oQuee.footer')}
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default MarcaOQueE;
