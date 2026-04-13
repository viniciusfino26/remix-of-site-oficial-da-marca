import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, Award } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const eras: { era: string; label: string; events: TimelineEvent[] }[] = [
  {
    era: '1980–1990',
    label: 'O nascimento do pioneirismo e a regulamentação do mercado',
    events: [
      { year: '1986/1988', title: 'Inauguração do mercado', description: 'Inauguramos o mercado de películas de proteção solar no país, garantindo inovação exclusiva com patentes registradas desde o início.' },
      { year: '1996/1997/1998', title: 'Maior distribuidora do mundo', description: 'Maior distribuidora de películas para vidros do mundo, título concedido pela maior indústria do mundo à época, sediada nos Estados Unidos da América.' },
      { year: '1996', title: 'Películas arquitetônicas de segurança', description: 'Primeira a oferecer películas arquitetônicas de proteção antivandalismo e segurança, INSULFILM™ SafetySecurityFilm.' },
      { year: '1997', title: 'Películas OEM para o clima brasileiro', description: 'Primeira a oferecer películas fabricadas pelo sistema OEM com características próprias para o clima brasileiro.' },
      { year: '1998', title: 'Regulamentação do Contran', description: 'Lideramos a mudança no setor ao apoiar diretamente a regulamentação do Contran para liberação da comercialização de películas automotivas.' },
    ],
  },
  {
    era: '2000–2010',
    label: 'Expansão e regulamentação do mercado',
    events: [
      { year: '2000', title: 'Películas automotivas antivandalismo', description: 'Primeira a oferecer películas automotivas de proteção antivandalismo e segurança no Brasil, INSULFILM™ Blindado.' },
      { year: '2001', title: 'Primeira loja oficial', description: 'Primeira marca de películas a abrir uma loja oficial para atendimento direto ao consumidor final, Loja Oficial INSULFILM™ — Unidade Água Branca, São Paulo/SP.' },
      { year: '2001', title: 'Inovação em aplicação antivandalismo', description: 'Primeira a sacar os vidros do carro para aplicação de películas de proteção antivandalismo.' },
      { year: '2008', title: 'Película fotocromática', description: 'Primeira a oferecer película automotiva com efeito fotocromático e tecnologia superior para bloquear o calor, não só filtrar; INSULFILM™ Elite.' },
    ],
  },
  {
    era: '2010–2020',
    label: 'Inovação e tecnologia de alto desempenho',
    events: [
      { year: '2011', title: 'Projeto balístico inédito', description: 'Primeiro projeto arquitetônico do Brasil com películas para vidros customizadas para resistência balística.' },
      { year: '2012', title: 'Primeira franquia do Brasil', description: 'Venda da primeira franquia de serviços de película para vidros no Brasil, Loja Oficial INSULFILM™ — Unidade Ribeirão Preto.' },
      { year: '2018', title: 'Tecnologia de alta definição', description: 'Primeira a oferecer películas com tecnologia de alta definição, INSULFILM™ Elite.' },
      { year: '2019', title: 'PPF premium', description: 'Lançamento da película premium de proteção à pintura (PPF), INSULFILM™ Phantom8mil.' },
    ],
  },
  {
    era: '2020–2025',
    label: 'Futuro da proteção e do conforto',
    events: [
      { year: '2024', title: 'Ultra definição', description: 'Lançamento da tecnologia de ultra definição, INSULFILM™ Elite, INSULFILM™ Polariz e INSULFILM™ Matrix.' },
      { year: '2025', title: 'Nova geração de películas', description: 'Lançamento das películas automotivas solar performance INSULFILM™ Eclipse, INSULFILM™ Vip. Película automotiva ultra performance especial para tetos solares INSULFILM™ Panoramic. Lançamento da nova categoria "Películas de Segurança Superior" para vidros automotivos, com diferenciais técnicos exclusivos.' },
    ],
  },
];

const MarcaHistoria = () => {
  const ano = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Nossa História — INSULFILM™ | Pioneira em Películas desde 1986</title>
        <meta name="description" content="Conheça a trajetória da INSULFILM™, a primeira e mais reconhecida marca de películas do Brasil. Quase 40 anos de inovação em proteção solar, segurança e conforto." />
        <link rel="canonical" href="https://insulfilm.com.br/marca/historia" />
        <meta property="og:title" content="Nossa História — INSULFILM™" />
        <meta property="og:description" content="Pioneira em películas para vidros desde 1986. Conheça nossa linha do tempo de inovação." />
        <meta property="og:url" content="https://insulfilm.com.br/marca/historia" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-carbon-gradient" />
          <div className="absolute inset-0 bg-hero-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-6">
                <Clock className="w-4 h-4" /> Nossa História
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight">
                {ano - 1986}+ Anos Liderando a Inovação em Películas
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl font-light text-primary-foreground/70">
                A primeira e mais reconhecida marca de películas do Brasil para vidros automotivos e arquitetônicos.
              </motion.p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Intro */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto space-y-8">
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-foreground">
                Por qual motivo quase todo mundo chama de "insulfilm" as películas de proteção solar?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-foreground/80 text-lg leading-relaxed">
                A INSULFILM™ é a primeira e mais reconhecida marca de películas do Brasil para vidros automotivos e arquitetônicos. São quase {ano - 1986} anos inovando em películas para vidros e superfícies metálicas.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-foreground/80 text-lg leading-relaxed">
                Desde 1988 a INSULFILM™ revolucionou a forma como os brasileiros convivem com seus ambientes envidraçados, transformando essa experiência em conforto e proteção com sofisticação. Nossa inovação vai além das películas, é tecnologia de ponta à serviço do seu bem-estar diário.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center">
          <div className="separator-accent w-20" />
        </div>

        {/* Timeline */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">No Brasil, pioneirismo em películas é conosco</h2>
              <p className="text-foreground/60 font-light max-w-2xl mx-auto">Cada marco reforça nosso compromisso com inovação, qualidade e liderança.</p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {eras.map((era, eraIdx) => (
                <div key={era.era} className="mb-16 last:mb-0">
                  {/* Era Header */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex items-center gap-4 mb-10"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border border-accent/20">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="text-accent font-extrabold text-lg">{era.era}</span>
                      <p className="text-foreground/60 text-sm font-light">{era.label}</p>
                    </div>
                  </motion.div>

                  {/* Events */}
                  <div className="relative pl-8 md:pl-0">
                    {/* Vertical line */}
                    <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                    {era.events.map((event, idx) => {
                      const isLeft = idx % 2 === 0;
                      return (
                        <motion.div
                          key={`${era.era}-${idx}`}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: '-50px' }}
                          variants={scaleIn}
                          className={`relative mb-8 last:mb-0 md:flex md:items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                          {/* Dot */}
                          <div className="absolute left-1.5 md:left-1/2 top-3 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background shadow-sm md:-translate-x-1/2 z-10" />

                          {/* Content */}
                          <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                            <div className="glass-card rounded-xl p-5 card-premium-hover bg-card border border-border">
                              <span className="text-accent font-extrabold text-sm">{event.year}</span>
                              <h3 className="text-foreground font-bold mt-1 mb-2">{event.title}</h3>
                              <p className="text-foreground/70 text-sm leading-relaxed">{event.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hoje */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-3xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-carbon-gradient" />
                <div className="absolute inset-0 bg-hero-texture" />
                <div className="relative z-10 p-10 md:p-14 text-center">
                  <span className="text-accent font-extrabold text-lg tracking-wide">Hoje</span>
                  <p className="text-primary-foreground text-xl md:text-2xl font-light leading-relaxed mt-4">
                    Seguimos liderando a evolução tecnológica do mercado de películas no Brasil, antecipando tendências e garantindo que cada inovação entregue mais segurança, conforto e sofisticação.
                  </p>
                  <p className="text-accent font-extrabold text-lg md:text-xl mt-6">
                    A INSULFILM™ não protege vidros, protege você.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted border-t border-border">
          <div className="container mx-auto px-4 text-center space-y-2">
            <p className="text-xs text-muted-foreground">
              O termo "insulfilm" é utilizado popularmente para se referir a películas para vidro. INSULFILM™ é marca registrada, com titularidade exclusiva e referência no segmento desde 1986. O uso da marca por terceiros não é autorizado.
            </p>
            <p className="text-xs text-muted-foreground">
              INSULFILM™ é marca registrada da INSULFILM DO BRASIL. Todos os direitos reservados.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default MarcaHistoria;
