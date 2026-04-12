import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const MarcaHistoria = () => (
  <>
    <Helmet>
      <title>História da INSULFILM™ | Desde 1986 no Brasil</title>
      <meta name="description" content="INSULFILM™ surgiu no Brasil em um contexto de evolução do uso de películas aplicadas ao vidro. Conheça a história da marca registrada." />
      <link rel="canonical" href="https://insulfilm.com.br/marca/historia" />
      <meta property="og:title" content="História da INSULFILM™" />
      <meta property="og:description" content="A trajetória da INSULFILM™ desde 1986 — de marca registrada a referência popular." />
      <meta property="og:url" content="https://insulfilm.com.br/marca/historia" />
    </Helmet>

    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.9)] to-[hsl(var(--primary)/0.8)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Clock className="w-4 h-4" /> Desde 1986
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              História
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70">
              A trajetória de uma marca que se tornou referência
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
                INSULFILM™ surgiu no Brasil em um contexto de evolução do uso de películas aplicadas ao vidro.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Com o desenvolvimento do mercado, a marca passou a ser amplamente reconhecida e seu nome incorporado ao vocabulário popular como referência ao tipo de produto.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Esse fenômeno não altera sua natureza jurídica.
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
                A utilização de variações do termo no mercado não altera a titularidade da marca INSULFILM nem sua proteção jurídica.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-muted border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            O uso popular do termo insulfilm não altera a titularidade da marca INSULFILM.
          </p>
        </div>
      </section>
    </main>
  </>
);

export default MarcaHistoria;
