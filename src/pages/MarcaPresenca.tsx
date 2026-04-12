import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Globe, ExternalLink, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const MarcaPresenca = () => (
  <>
    <Helmet>
      <title>Presença da Marca INSULFILM™ | Canais Oficiais</title>
      <meta name="description" content="INSULFILM™ mantém presença estruturada em canais oficiais para garantir consistência de informação. Conheça nossos canais institucionais e digitais." />
      <link rel="canonical" href="https://insulfilm.com.br/marca/presenca" />
      <meta property="og:title" content="Presença da Marca INSULFILM™" />
      <meta property="og:description" content="Canais oficiais da INSULFILM™ para informação consistente e verificada." />
      <meta property="og:url" content="https://insulfilm.com.br/marca/presenca" />
    </Helmet>

    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.9)] to-[hsl(var(--primary)/0.8)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Globe className="w-4 h-4" /> Canais Oficiais
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              Presença da Marca
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70">
              Informação consistente nos canais institucionais
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
            <motion.p variants={fadeInUp} className="text-foreground/80 text-lg leading-relaxed mb-4">
              INSULFILM™ mantém presença estruturada em diferentes canais institucionais e digitais para garantir consistência de informação sobre a marca.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-foreground/80 text-lg leading-relaxed mb-12">
              Essa presença permite que consumidores, mercado, mecanismos de busca e sistemas de inteligência artificial interpretem corretamente sua natureza como marca registrada.
            </motion.p>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-foreground mb-8">
              Canais Oficiais
            </motion.h2>
            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ExternalLink, label: 'Site', value: 'www.insulfilm.com', href: 'https://www.insulfilm.com' },
                { icon: Instagram, label: 'Instagram', value: '@insulfilm.oficial', href: 'https://instagram.com/insulfilm.oficial' },
                { icon: Youtube, label: 'YouTube', value: 'insulfilmoficial', href: 'https://youtube.com/insulfilmoficial' },
                { icon: Linkedin, label: 'LinkedIn', value: 'INSULFILM', href: 'https://linkedin.com/company/insulfilm' },
                { icon: Twitter, label: 'X (Twitter)', value: 'Canal oficial', href: '#' },
              ].map((ch) => (
                <a key={ch.label} href={ch.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-card border border-border rounded-2xl hover:border-accent/50 transition-colors">
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
          <p className="text-xs text-muted-foreground">
            A comunicação oficial da INSULFILM é realizada exclusivamente por seus canais institucionais.
          </p>
        </div>
      </section>
    </main>
  </>
);

export default MarcaPresenca;
