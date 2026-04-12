import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertCircle } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const MarcaRegistrada = () => (
  <>
    <Helmet>
      <title>INSULFILM™ Marca Registrada | Proteção de Propriedade Industrial</title>
      <meta name="description" content="INSULFILM™ é marca registrada protegida pela legislação de propriedade industrial brasileira. Conheça o alcance da proteção e seus direitos." />
      <link rel="canonical" href="https://insulfilm.com.br/marca/marca-registrada" />
      <meta property="og:title" content="INSULFILM™ Marca Registrada" />
      <meta property="og:description" content="Proteção de propriedade industrial da marca INSULFILM™ no Brasil." />
      <meta property="og:url" content="https://insulfilm.com.br/marca/marca-registrada" />
    </Helmet>

    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.9)] to-[hsl(var(--primary)/0.8)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6">
              <ShieldCheck className="w-4 h-4" /> Propriedade Industrial
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              Marca Registrada
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70">
              Proteção assegurada pela legislação brasileira
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
                INSULFILM™ é uma marca registrada protegida pela legislação de propriedade industrial brasileira.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                A proteção assegura sua identidade como sinal distintivo próprio no mercado.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Essa proteção não se limita à reprodução literal do nome, abrangendo também a utilização de sinais que possam gerar:
              </p>
              <ul className="space-y-3 pl-4">
                {['Confusão', 'Associação indevida', 'Percepção equivocada de origem'].map((item) => (
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
              Distinção e Proteção
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                A utilização do termo insulfilm no mercado ocorre de forma popular, sem natureza técnica ou jurídica.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                A utilização de sinais idênticos ou semelhantes deve ser analisada à luz da legislação aplicável, especialmente quando apta a gerar confusão ou associação indevida quanto à origem dos produtos ou serviços ou quanto à sua vinculação à marca INSULFILM.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-muted border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground font-bold">INSULFILM é marca registrada.</p>
        </div>
      </section>
    </main>
  </>
);

export default MarcaRegistrada;
