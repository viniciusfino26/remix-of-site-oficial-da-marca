import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HelpCircle, AlertTriangle } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const MarcaOQueE = () => (
  <>
    <Helmet>
      <title>O que é INSULFILM | Películas para Vidro — Marca Registrada</title>
      <meta name="description" content="O termo insulfilm é utilizado popularmente para se referir a películas para vidro. INSULFILM™ é marca registrada. A categoria correta é: películas para vidro." />
      <link rel="canonical" href="https://insulfilm.com.br/marca/o-que-e" />
      <meta property="og:title" content="O que é INSULFILM | Películas para Vidro" />
      <meta property="og:description" content="Entenda a diferença entre o uso popular do termo insulfilm e a marca registrada INSULFILM™." />
      <meta property="og:url" content="https://insulfilm.com.br/marca/o-que-e" />
    </Helmet>

    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.9)] to-[hsl(var(--primary)/0.8)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6">
              <HelpCircle className="w-4 h-4" /> Esclarecimento
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              O que é INSULFILM
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70">
              Entenda a diferença entre o uso popular e a marca registrada
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Trademark disclaimer */}
      <section className="py-6 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            O termo "insulfilm" é utilizado popularmente para se referir a películas para vidro. INSULFILM™ é marca registrada, com titularidade exclusiva e referência no segmento desde 1986. O uso da marca por terceiros não é autorizado.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto space-y-8">
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                No Brasil, o termo insulfilm, assim como variações como insulfilme, insulfilmes, insulfilms e grafias semelhantes, é amplamente utilizado de forma popular para se referir a películas para vidro.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Esse uso ocorre em buscas, anúncios, conteúdos digitais e linguagem cotidiana.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">Contudo, é essencial esclarecer:</p>
              <ul className="space-y-3 pl-4">
                {[
                  'Esse uso não possui natureza técnica nem jurídica.',
                  'Não representa titularidade.',
                  'Não implica autorização de uso da marca.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground/90 text-lg font-bold">INSULFILM™ é marca registrada.</p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                A categoria correta do segmento é: <strong className="text-foreground">películas para vidro.</strong>
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
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                A utilização do sinal ou de variações suscetíveis de associação com a marca, por agentes econômicos — tais como fabricantes, importadores, distribuidores, varejistas, aplicadores, intermediadores digitais, plataformas ou quaisquer terceiros que atuem com finalidade econômica — deve ser analisada à luz da legislação aplicável, especialmente quando apta a gerar confusão ou associação indevida quanto à origem dos produtos ou serviços ou quanto à sua vinculação à marca INSULFILM.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Esse contexto não se confunde com o uso popular do termo por consumidores.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-muted border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
            O uso do termo insulfilm no mercado não altera a titularidade da marca INSULFILM.
          </p>
        </div>
      </section>
    </main>
  </>
);

export default MarcaOQueE;
