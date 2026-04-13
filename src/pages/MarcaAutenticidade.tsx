import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BadgeCheck, CheckCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const MarcaAutenticidade = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('marca.autenticidade.title')}</title>
        <meta name="description" content={t('marca.autenticidade.metaDesc')} />
        <link rel="canonical" href="https://insulfilm.com.br/marca/autenticidade" />
        <meta property="og:title" content={t('marca.autenticidade.ogTitle')} />
        <meta property="og:description" content={t('marca.autenticidade.ogDesc')} />
        <meta property="og:url" content="https://insulfilm.com.br/marca/autenticidade" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <PageHero
          title={t('marca.autenticidade.heroTitle')}
          subtitle={t('marca.autenticidade.heroSubtitle')}
          badge={{ icon: <BadgeCheck className="w-4 h-4" />, text: t('marca.autenticidade.badge') }}
        />

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto space-y-8">
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.autenticidade.p1')}</p>
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.autenticidade.p2')}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    t('marca.autenticidade.check1'),
                    t('marca.autenticidade.check2'),
                    t('marca.autenticidade.check3'),
                    t('marca.autenticidade.check4'),
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.autenticidade.p3')}</p>
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.autenticidade.p4')}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Distinction block */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-foreground mb-8">
                {t('marca.autenticidade.distinctionTitle')}
              </motion.h2>
              <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
                <p className="text-foreground/80 leading-relaxed">{t('marca.autenticidade.dist1')}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-8 bg-muted border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-muted-foreground max-w-3xl mx-auto">{t('marca.autenticidade.footer')}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default MarcaAutenticidade;
