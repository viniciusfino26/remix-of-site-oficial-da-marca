import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cpu, Car, Home, Building2, Thermometer, Sun, Eye, Lock, Gauge, ShieldCheck } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const MarcaTecnologia = () => (
  <>
    <Helmet>
      <title>Tecnologia INSULFILM™ | Películas Técnicas para Vidro</title>
      <meta name="description" content="INSULFILM™ aplica tecnologia ao vidro para melhorar a experiência das pessoas. Controle térmico, redução de radiação, conforto visual e segurança." />
      <link rel="canonical" href="https://insulfilm.com.br/marca/tecnologia" />
      <meta property="og:title" content="Tecnologia INSULFILM™" />
      <meta property="og:description" content="Tecnologia aplicada ao vidro com padrão técnico para veículos, residências e edificações." />
      <meta property="og:url" content="https://insulfilm.com.br/marca/tecnologia" />
    </Helmet>

    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.9)] to-[hsl(var(--primary)/0.8)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Cpu className="w-4 h-4" /> Inovação
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              Tecnologia
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70">
              Tecnologia aplicada ao vidro para melhorar a experiência das pessoas
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
            <motion.p variants={fadeInUp} className="text-foreground/80 text-lg leading-relaxed mb-12">
              INSULFILM™ aplica tecnologia ao vidro para melhorar a experiência das pessoas. Suas soluções são utilizadas em:
            </motion.p>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-3 gap-6 mb-16">
              {[
                { icon: Car, label: 'Veículos' },
                { icon: Home, label: 'Residências' },
                { icon: Building2, label: 'Edificações' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-4 p-8 bg-card border border-border rounded-2xl text-center">
                  <item.icon className="w-10 h-10 text-accent" />
                  <span className="text-lg font-bold text-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-foreground mb-8">
              Benefícios
            </motion.h2>
            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Thermometer, label: 'Controle térmico' },
                { icon: Sun, label: 'Redução de radiação' },
                { icon: Eye, label: 'Conforto visual' },
                { icon: Lock, label: 'Privacidade' },
                { icon: Gauge, label: 'Desempenho' },
                { icon: ShieldCheck, label: 'Contribuição para segurança' },
              ].map((item) => (
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
          <p className="text-xs text-muted-foreground">
            INSULFILM representa tecnologia aplicada ao vidro com padrão técnico.
          </p>
        </div>
      </section>
    </main>
  </>
);

export default MarcaTecnologia;
