import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cpu, Sun, ShieldCheck, Eye, Layers, Cog } from 'lucide-react';
import PageHero from '@/components/PageHero';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const plataforma = [
  {
    icon: Sun,
    title: 'Controle Solar',
    desc: 'Tecnologias voltadas à redução de calor e radiação, mantendo conforto e visibilidade.',
    items: [
      'Películas pigmentadas (privacidade e controle de luz)',
      'Tecnologia Carbono (estabilidade e rejeição térmica)',
      'Nanocerâmica IR (alta performance térmica com transparência)',
      'Híbridas metal-cerâmicas (máxima eficiência)',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Segurança e Proteção',
    desc: 'Tecnologias que aumentam a resistência do vidro e controlam seu comportamento após impacto.',
    items: [
      'Estruturas multicamadas de alta resistência',
      'Retenção de estilhaços',
      'Redução de acesso imediato',
    ],
  },
  {
    icon: Eye,
    title: 'Alta Transparência Arquitetônica',
    desc: 'Tecnologias invisíveis que controlam calor sem alterar a estética do vidro.',
    items: [
      'Alta transmissão de luz',
      'Bloqueio de calor e UV',
      'Preservação da fachada e do ambiente',
    ],
  },
];

const engenharia = [
  'Base em poliéster (PET) de alta performance',
  'Estruturas multicamadas',
  'Tecnologias avançadas de deposição',
  'Combinação de materiais orgânicos e inorgânicos',
];

const MarcaTecnologia = () => {
  return (
    <>
      <Helmet>
        <title>Tecnologias INSULFILM™ | Engenharia em Películas para Vidros</title>
        <meta
          name="description"
          content="INSULFILM™ é marca registrada. Conheça as tecnologias de controle solar, segurança e alta transparência arquitetônica desenvolvidas com engenharia de materiais."
        />
        <link rel="canonical" href="https://insulfilm.com.br/marca/tecnologia" />
        <meta property="og:title" content="Tecnologias INSULFILM™ | Engenharia em Películas para Vidros" />
        <meta
          property="og:description"
          content="Engenharia aplicada ao controle solar, proteção e performance. Plataforma tecnológica INSULFILM™."
        />
        <meta property="og:url" content="https://insulfilm.com.br/marca/tecnologia" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <PageHero
          title="Tecnologias INSULFILM™"
          subtitle="Engenharia aplicada ao controle solar, proteção e performance"
          badge={{ icon: <Cpu className="w-4 h-4" />, text: 'Plataforma Tecnológica' }}
        />

        {/* Intro */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-foreground/80 text-lg md:text-xl leading-relaxed"
            >
              A INSULFILM™ é uma marca registrada que organiza suas soluções a partir de tecnologias avançadas de engenharia de materiais, desenvolvidas para controlar calor, luz, radiação e resistência do vidro.
            </motion.p>
          </div>
        </section>

        {/* Plataforma Tecnológica */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-6xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-black text-foreground mb-4 text-center"
              >
                Plataforma Tecnológica
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto"
              >
                As soluções INSULFILM™ são estruturadas em três frentes principais.
              </motion.p>

              <div className="grid md:grid-cols-3 gap-6">
                {plataforma.map((bloco) => (
                  <motion.div
                    key={bloco.title}
                    variants={fadeInUp}
                    className="bg-card border border-border rounded-2xl p-8 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                      <bloco.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{bloco.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-5">{bloco.desc}</p>
                    <ul className="space-y-2.5 mt-auto">
                      {bloco.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-foreground/80 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Engenharia de Construção */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div
                variants={fadeInUp}
                className="bg-card border border-border rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-foreground">
                    Engenharia de Construção
                  </h2>
                </div>
                <p className="text-foreground/70 mb-6">
                  As películas INSULFILM™ são desenvolvidas com:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {engenharia.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Processo O&M */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-accent/10 via-card to-card border border-accent/20 rounded-2xl p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Cog className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-foreground">Processo O&amp;M</h2>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider mt-1">
                    Controle industrial e padronização
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg">
                A INSULFILM™ opera com um sistema de homologação industrial (O&amp;M), garantindo que todas as soluções sigam padrões rigorosos de qualidade, desempenho e consistência.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Essência da Marca */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex w-14 h-14 rounded-2xl bg-accent/10 items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-accent" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                Essência da Marca
              </p>
              <p className="text-2xl md:text-3xl font-black text-foreground leading-tight mb-4">
                INSULFILM™ não é um termo genérico.
              </p>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                É uma marca registrada que representa tecnologia, controle e padrão.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MarcaTecnologia;
