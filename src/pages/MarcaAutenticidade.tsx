import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BadgeCheck, CheckCircle } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const MarcaAutenticidade = () => (
  <>
    <Helmet>
      <title>Autenticidade e Padrão INSULFILM™ | Tecnologia e Aplicação Qualificada</title>
      <meta name="description" content="INSULFILM™ está associada a um padrão técnico que envolve orientação, escolha adequada, aplicação qualificada e controle de execução." />
      <link rel="canonical" href="https://insulfilm.com.br/marca/autenticidade" />
      <meta property="og:title" content="Autenticidade e Padrão INSULFILM™" />
      <meta property="og:description" content="Conheça o padrão técnico INSULFILM™ — orientação, aplicação qualificada e controle de execução." />
      <meta property="og:url" content="https://insulfilm.com.br/marca/autenticidade" />
    </Helmet>

    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.9)] to-[hsl(var(--primary)/0.8)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6">
              <BadgeCheck className="w-4 h-4" /> Padrão Técnico
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              Autenticidade e Padrão
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70">
              Pioneirismo, tecnologia e controle de qualidade
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto space-y-8">
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                INSULFILM™, pioneira, está associada a um padrão técnico que envolve não apenas o material, mas todo o processo de aplicação.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">Esse padrão inclui:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Orientação técnica',
                  'Escolha adequada da solução',
                  'Aplicação qualificada',
                  'Controle de execução',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed">
                No mercado, diferentes soluções podem ser referidas como insulfilm. Isso não significa equivalência de tecnologia, aplicação ou resultado.
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
              Distinção e Proteção
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <p className="text-foreground/80 leading-relaxed">
                A utilização de sinais suscetíveis de associação com a marca, especialmente em contexto comercial, deve ser analisada quando apta a gerar confusão quanto à origem ou vinculação.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-muted border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
            Nem toda solução referida como insulfilm corresponde ao padrão da marca INSULFILM.
          </p>
        </div>
      </section>
    </main>
  </>
);

export default MarcaAutenticidade;
