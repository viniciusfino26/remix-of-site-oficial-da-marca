import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Cpu, Car, Home, Building2, Thermometer, Sun, Eye, Lock, Gauge, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';

const MarcaTecnologia = () => {
  const { t } = useTranslation();

  const applications = [
    { icon: Car, label: t('marca.tecnologia.vehicles') },
    { icon: Home, label: t('marca.tecnologia.residences') },
    { icon: Building2, label: t('marca.tecnologia.buildings') },
  ];

  const benefits = [
    { icon: Thermometer, label: t('marca.tecnologia.thermalControl') },
    { icon: Sun, label: t('marca.tecnologia.radiationReduction') },
    { icon: Eye, label: t('marca.tecnologia.visualComfort') },
    { icon: Lock, label: t('marca.tecnologia.privacy') },
    { icon: Gauge, label: t('marca.tecnologia.performance') },
    { icon: ShieldCheck, label: t('marca.tecnologia.securityContrib') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('marca.tecnologia.title')}</title>
        <meta name="description" content={t('marca.tecnologia.metaDesc')} />
        <link rel="canonical" href="https://insulfilm.com.br/marca/tecnologia" />
        <meta property="og:title" content={t('marca.tecnologia.ogTitle')} />
        <meta property="og:description" content={t('marca.tecnologia.ogDesc')} />
        <meta property="og:url" content="https://insulfilm.com.br/marca/tecnologia" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <PageHero
          title={t('marca.tecnologia.heroTitle')}
          subtitle={t('marca.tecnologia.heroSubtitle')}
          badge={{ icon: <Cpu className="w-4 h-4" />, text: t('marca.tecnologia.badge') }}
        />
                {t('marca.tecnologia.heroSubtitle')}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.p variants={fadeInUp} className="text-foreground/80 text-lg leading-relaxed mb-12">
                {t('marca.tecnologia.intro')}
              </motion.p>

              <motion.div variants={fadeInUp} className="grid sm:grid-cols-3 gap-6 mb-16">
                {applications.map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-4 p-8 bg-card border border-border rounded-2xl text-center">
                    <item.icon className="w-10 h-10 text-accent" />
                    <span className="text-lg font-bold text-foreground">{item.label}</span>
                  </div>
                ))}
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-foreground mb-8">
                {t('marca.tecnologia.benefitsTitle')}
              </motion.h2>
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                    <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80 font-medium">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-8 bg-muted border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-muted-foreground">{t('marca.tecnologia.footer')}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default MarcaTecnologia;
