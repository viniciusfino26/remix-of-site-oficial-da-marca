import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, MessageCircle, ArrowRight, Shield, Eye, Thermometer, Sparkles, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import ProductShowcase from '@/components/ProductShowcase';
import arqSolarTransparencia from '@/assets/arq-solar-alta-transparencia.png';
import arqSolarNeutra from '@/assets/arq-solar-estetica-neutra.png';
import arqSolarFume from '@/assets/arq-solar-fume-invertida.png';
import arqSolarEspelhados from '@/assets/arq-solar-privacidade-espelhados.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

type Category = {
  id: string;
  title: string;
  icon: React.ReactNode;
  imageSrc?: string;
  fallbackIcon?: React.ReactNode;
  description: string;
  products: { name: string; path: string }[];
};

const categories: Category[] = [
  {
    id: 'alta-transparencia',
    title: 'Alta Transparência',
    icon: <Eye className="w-5 h-5" />,
    imageSrc: arqSolarTransparencia,
    description: 'O calor entra pelo infravermelho, não pela luz. Estas películas bloqueiam até 93% do calor sem escurecer o ambiente — para quem não quer abrir mão da luminosidade natural nem da vista.',
    products: [
      { name: 'INSULFILM™ Clear70', path: '/arquitetonico/solar/clear70' },
      { name: 'INSULFILM™ Orizzonte70', path: '/arquitetonico/solar/orizzonte70' },
      { name: 'INSULFILM™ Ultravioletti90', path: '/arquitetonico/solar/ultravioletti90' }
    ]
  },
  {
    id: 'estetica-neutra',
    title: 'Estética Neutra',
    icon: <Sparkles className="w-5 h-5" />,
    imageSrc: arqSolarNeutra,
    description: 'Para projetos que não admitem reflexo espelhado nem escurecimento visível. Tonalidade sutil que respeita o design original da arquitetura — com controle solar real e garantia de até 10 anos.',
    products: [
      { name: 'INSULFILM™ Naturale', path: '/arquitetonico/solar/naturale' }
    ]
  },
  {
    id: 'privacidade-espelhados',
    title: 'Privacidade e Espelhados',
    icon: <Shield className="w-5 h-5" />,
    imageSrc: arqSolarEspelhados,
    description: 'Fachadas muito expostas ao sol e ambientes que precisam de privacidade diurna sem fechar as cortinas. Alto desempenho térmico com estética espelhada que valoriza o imóvel.',
    products: [
      { name: 'INSULFILM™ Metallico Argento', path: '/arquitetonico/solar/metallico-argento' },
      { name: "INSULFILM™ Reflesso d'Argento", path: '/arquitetonico/solar/reflesso-d-argento' },
      { name: 'INSULFILM™ Specchiato Bronzo', path: '/arquitetonico/solar/specchiato-bronzo' }
    ]
  },
  {
    id: 'fume-invertida',
    title: 'Não Refletivas',
    icon: <Thermometer className="w-5 h-5" />,
    imageSrc: arqSolarFume,
    description: 'Estética preta sem refletividade intensa ou privacidade invertida com visual fumê elegante — para quem busca controle de claridade e redução de ofuscamento sem o efeito espelhado.',
    products: [
      { name: 'INSULFILM™ Petrolio', path: '/arquitetonico/solar/petrolio' },
      { name: 'INSULFILM™ Grigio Invertito', path: '/arquitetonico/solar/grigio-invertito' }
    ]
  }
];

const ArqHubSolar = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const visibleCategories = activeFilter
    ? categories.filter((c) => c.id === activeFilter)
    : categories;

  return (
    <>
      <Helmet>
        <title>Películas Solares Arquitetônicas | INSULFILM™</title>
        <meta name="description" content="Películas solares INSULFILM™ para fachadas, sacadas e janelas — controle de calor, proteção UV e eficiência energética para residências e espaços comerciais." />
        <link rel="canonical" href="https://www.insulfilm.com.br/arquitetonico/solar" />
      </Helmet>

      <main>
        {/* ── HERO ── */}
        <PageHero
          title="O vidro que você tem não é o problema. O calor que ele deixa entrar, é."
          subtitle="Películas solares INSULFILM™ para fachadas, sacadas e janelas — de residências e espaços comerciais que não aceitam calor excessivo, conta de energia inflada e mobiliário que desbota antes da hora."
          badge={{ icon: <Sun className="w-3.5 h-3.5" />, text: 'PELÍCULAS SOLARES ARQUITETÔNICAS — INSULFILM™' }}
          cta={{
            text: 'Falar com um Especialista',
            href: '/contato',
            icon: <MessageCircle className="w-5 h-5" />
          }}
        />

        {/* ── CATEGORIAS COM SHOWCASES ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Cada fachada tem uma necessidade. Cada necessidade tem uma película.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-3xl mx-auto">
                A linha solar INSULFILM™ reúne tecnologias distintas para cada tipo de projeto, exposição solar e exigência estética. Escolha pela sua necessidade — não pela embalagem.
              </motion.p>
            </motion.div>

            {/* Filter buttons */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-wrap justify-center gap-3 mb-10">
              <motion.div variants={fadeInUp}>
                <Button
                  variant={activeFilter === null ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(null)}
                  className="rounded-full px-6 py-2">
                  Todos
                </Button>
              </motion.div>
              {categories.map((cat) => (
                <motion.div key={cat.id} variants={fadeInUp}>
                  <Button
                    variant={activeFilter === cat.id ? 'default' : 'outline'}
                    onClick={() => setActiveFilter(activeFilter === cat.id ? null : cat.id)}
                    className="rounded-full px-6 py-2 gap-2">
                    {cat.icon}
                    {cat.title}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Disclaimer de marca */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs text-muted-foreground/70 text-center max-w-3xl mx-auto mb-16 font-light leading-relaxed"
            >
              O termo "insulfilm" é utilizado popularmente para se referir a películas para vidro. INSULFILM™ é marca registrada, com titularidade exclusiva e referência no segmento desde 1986. O uso da marca por terceiros não é autorizado.
            </motion.p>

            {/* Category sections with ProductShowcase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter ?? 'all'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-24">
                {visibleCategories.map((cat, catIdx) => (
                  <div key={cat.id} className="space-y-12">
                    <ProductShowcase
                      title={cat.title}
                      description={cat.description}
                      imageSrc={cat.imageSrc}
                      fallbackIcon={cat.fallbackIcon}
                      link={cat.products[0]?.path || '#'}
                      linkText="Explorar Categoria"
                      reversed={catIdx % 2 !== 0}
                    />

                    <motion.div
                      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={stagger}>
                      {cat.products.map((p) => (
                        <motion.div key={p.path} variants={fadeInUp}>
                          <Link to={p.path}>
                            <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.3 }}>
                              <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-all duration-300 hover:shadow-premium">
                                <CardContent className="p-8">
                                  <h4 className="text-lg font-extrabold mb-4 text-primary">{p.name}</h4>
                                  <span className="text-accent font-bold text-sm flex items-center gap-1">
                                    Ver detalhes <ArrowRight className="w-4 h-4" />
                                  </span>
                                </CardContent>
                              </Card>
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                A película certa para o seu projeto começa por uma conversa.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
                Atendimento nacional. Sem compromisso. Especialistas que orientam antes de aplicar.
              </motion.p>
              <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-12 py-7 rounded-xl shadow-premium-lg hover:shadow-premium transition-all uppercase tracking-wide">
                  <Link to="/contato">
                    <MessageCircle className="w-5 h-5" />
                    Falar com um Especialista
                  </Link>
                </Button>
                <Button asChild variant="outline" className="font-bold text-lg px-10 py-7 rounded-xl">
                  <Link to="/rede/lojas-oficiais">
                    <MapPin className="w-5 h-5" />
                    Encontrar Loja Oficial
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ArqHubSolar;
