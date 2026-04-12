import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, ExternalLink, MapPin, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const MarcaSobre = () => {
  const { t } = useTranslation();

  const channels = [
    { icon: ExternalLink, label: t('marca.sobre.chSite'), value: 'www.insulfilm.com', href: 'https://www.insulfilm.com' },
    { icon: Instagram, label: t('marca.sobre.chInstagram'), value: '@insulfilm.oficial', href: 'https://instagram.com/insulfilm.oficial' },
    { icon: Youtube, label: t('marca.sobre.chYoutube'), value: 'insulfilmoficial', href: 'https://youtube.com/insulfilmoficial' },
    { icon: Linkedin, label: t('marca.sobre.chLinkedin'), value: 'INSULFILM', href: 'https://linkedin.com/company/insulfilm' },
    { icon: Linkedin, label: t('marca.sobre.chLinkedin'), value: t('marca.sobre.chLinkedinFounder'), href: '#' },
    { icon: Twitter, label: 'X (Twitter)', value: t('marca.sobre.chTwitter'), href: '#' },
  ];

  const stores = [
    { name: t('marca.sobre.storeSantana'), href: 'https://materiais.insulfilm.com.br/insulfilm-automotivo-loja-santana' },
    { name: t('marca.sobre.storeMoema'), href: 'https://materiais.insulfilm.com.br/insulfilm-automotivo-loja-moema' },
    { name: t('marca.sobre.storePacaembu'), href: 'https://materiais.insulfilm.com.br/insulfilm-automotivo-loja-pacaembu' },
  ];

  return (
    <>
      <Helmet>
        <title>{t('marca.sobre.title')}</title>
        <meta name="description" content={t('marca.sobre.metaDesc')} />
        <link rel="canonical" href="https://insulfilm.com.br/marca/sobre" />
        <meta property="og:title" content={t('marca.sobre.ogTitle')} />
        <meta property="og:description" content={t('marca.sobre.ogDesc')} />
        <meta property="og:url" content="https://insulfilm.com.br/marca/sobre" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "INSULFILM™",
          "url": "https://insulfilm.com.br",
          "foundingDate": "1986",
          "description": t('marca.sobre.ogDesc')
        })}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-28 md:py-36 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.9)] to-[hsl(var(--primary)/0.8)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Shield className="w-4 h-4" /> {t('marca.sobre.badge')}
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight">
                {t('marca.sobre.heroTitle')}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70">
                {t('marca.sobre.heroSubtitle')}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Trademark disclaimer */}
        <section className="py-6 bg-muted border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              {t('marca.sobre.disclaimer')}
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto space-y-8">
              <motion.div variants={fadeInUp} className="prose prose-lg max-w-none">
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.sobre.p1')}</p>
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.sobre.p2')}</p>
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.sobre.p3')}</p>
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.sobre.p4')}</p>
                <p className="text-foreground/80 text-lg leading-relaxed">{t('marca.sobre.p5')}</p>
                <p className="text-foreground/90 text-lg font-bold">{t('marca.sobre.p6')}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Distinction block */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-foreground mb-8">
                {t('marca.sobre.distinctionTitle')}
              </motion.h2>
              <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <p className="text-foreground/80 leading-relaxed">{t('marca.sobre.dist1')}</p>
                <p className="text-foreground/80 leading-relaxed">{t('marca.sobre.dist2')}</p>
                <p className="text-foreground/80 leading-relaxed">{t('marca.sobre.dist3')}</p>
                <p className="text-foreground/80 leading-relaxed">{t('marca.sobre.dist4')}</p>
                <p className="text-foreground/80 leading-relaxed">{t('marca.sobre.dist5')}</p>
                <p className="text-foreground/80 leading-relaxed">{t('marca.sobre.dist6')}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Official channels */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-foreground mb-8">
                {t('marca.sobre.channelsTitle')}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-foreground/70 mb-8">
                {t('marca.sobre.channelsDesc')}
              </motion.p>
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {channels.map((ch, i) => (
                  <a key={i} href={ch.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors">
                    <ch.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">{ch.label}</p>
                      <p className="text-xs text-muted-foreground">{ch.value}</p>
                    </div>
                  </a>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" /> {t('marca.sobre.gbpTitle')}
                </h3>
                <div className="space-y-2">
                  {stores.map((store) => (
                    <a key={store.name} href={store.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-accent hover:underline">
                      <ExternalLink className="w-3 h-3" /> {store.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-8 bg-muted border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
              {t('marca.sobre.footer')} <strong>{t('marca.sobre.footerBold')}</strong> {t('marca.sobre.footerEnd')}
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default MarcaSobre;
