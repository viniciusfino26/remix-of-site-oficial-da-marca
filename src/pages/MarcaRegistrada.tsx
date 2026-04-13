import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';

const MarcaRegistrada = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('marca.registrada.title')}</title>
        <meta name="description" content={t('marca.registrada.metaDesc')} />
        <link rel="canonical" href="https://insulfilm.com.br/marca/marca-registrada" />
        <meta property="og:title" content={t('marca.registrada.ogTitle')} />
        <meta property="og:description" content={t('marca.registrada.ogDesc')} />
        <meta property="og:url" content="https://insulfilm.com.br/marca/marca-registrada" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <PageHero
          title={t('marca.registrada.heroTitle')}
          subtitle={t('marca.registrada.heroSubtitle')}
          badge={{ icon: <ShieldCheck className="w-4 h-4" />, text: t('marca.registrada.badge') }}
        />

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto space-y-8">
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.registrada.p1')}</p>
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.registrada.p2')}</p>
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.registrada.p3')}</p>
                <ul className="space-y-3 pl-4">
                  {[t('marca.registrada.bullet1'), t('marca.registrada.bullet2'), t('marca.registrada.bullet3')].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/80">
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Distinction block */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-foreground mb-8">
                {t('marca.registrada.distinctionTitle')}
              </motion.h2>
              <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <p className="text-foreground/80 leading-relaxed">{t('marca.registrada.dist1')}</p>
                <p className="text-foreground/80 leading-relaxed">{t('marca.registrada.dist2')}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-8 bg-muted border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-muted-foreground font-bold">{t('marca.registrada.footer')}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default MarcaRegistrada;
