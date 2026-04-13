import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, ExternalLink, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import PageHero from '@/components/PageHero';

const MarcaPresenca = () => {
  const { t } = useTranslation();

  const channels = [
    { icon: ExternalLink, label: t('marca.presenca.chSite'), value: 'www.insulfilm.com', href: 'https://www.insulfilm.com' },
    { icon: Instagram, label: t('marca.presenca.chInstagram'), value: '@insulfilm.oficial', href: 'https://instagram.com/insulfilm.oficial' },
    { icon: Youtube, label: t('marca.presenca.chYoutube'), value: 'insulfilmoficial', href: 'https://youtube.com/insulfilmoficial' },
    { icon: Linkedin, label: t('marca.presenca.chLinkedin'), value: 'INSULFILM', href: 'https://linkedin.com/company/insulfilm' },
    { icon: Twitter, label: t('marca.presenca.chTwitter'), value: t('marca.presenca.chTwitterValue'), href: '#' },
  ];

  return (
    <>
      <Helmet>
        <title>{t('marca.presenca.title')}</title>
        <meta name="description" content={t('marca.presenca.metaDesc')} />
        <link rel="canonical" href="https://insulfilm.com.br/marca/presenca" />
        <meta property="og:title" content={t('marca.presenca.ogTitle')} />
        <meta property="og:description" content={t('marca.presenca.ogDesc')} />
        <meta property="og:url" content="https://insulfilm.com.br/marca/presenca" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <PageHero
          title={t('marca.presenca.heroTitle')}
          subtitle={t('marca.presenca.heroSubtitle')}
          badge={{ icon: <Globe className="w-4 h-4" />, text: t('marca.presenca.badge') }}
        />

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.p variants={fadeInUp} className="text-foreground/80 text-lg leading-relaxed mb-4">
                {t('marca.presenca.p1')}
              </motion.p>
              <motion.p variants={fadeInUp} className="text-foreground/80 text-lg leading-relaxed mb-12">
                {t('marca.presenca.p2')}
              </motion.p>

              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-foreground mb-8">
                {t('marca.presenca.channelsTitle')}
              </motion.h2>
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {channels.map((ch, i) => (
                  <a key={i} href={ch.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-card border border-border rounded-2xl hover:border-accent/50 transition-colors">
                    <ch.icon className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">{ch.label}</p>
                      <p className="text-sm text-muted-foreground">{ch.value}</p>
                    </div>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-8 bg-muted border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-muted-foreground">{t('marca.presenca.footer')}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default MarcaPresenca;
