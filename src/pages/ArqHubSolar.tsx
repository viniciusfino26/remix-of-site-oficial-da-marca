import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, MessageCircle, ArrowRight, Shield, Award, Eye, Thermometer, Sparkles, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const WHATSAPP_NUMBER = '5511999999999';

type Category = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  products: { name: string; path: string }[];
};

const categories: Category[] = [
  {
    id: 'alta-transparencia',
    title: 'Alta Transparência',
    icon: <Eye className="w-5 h-5" />,
    description: 'Para quem exige máximo bloqueio de calor, mas não quer alterar a fachada ou perder a luz natural. A verdadeira revolução da Nano Cerâmica.',
    products: [
      { name: 'INSULFILM™ Clear70', path: '/arquitetonico/solar/clear70' },
      { name: 'INSULFILM™ Orizzonte70', path: '/arquitetonico/solar/orizzonte70' },
      { name: 'INSULFILM™ Ultravioletti90', path: '/arquitetonico/solar/ultravioletti90' },
    ],
  },
  {
    id: 'estetica-neutra',
    title: 'Estética Neutra',
    icon: <Sparkles className="w-5 h-5" />,
    description: 'Tecnologia Sputtered de bombardeamento iônico. Controle solar inteligente com uma tonalidade suave que respeita o design original da arquitetura.',
    products: [
      { name: 'INSULFILM™ Naturale', path: '/arquitetonico/solar/naturale' },
    ],
  },
  {
    id: 'privacidade-espelhados',
    title: 'Privacidade e Espelhados',
    icon: <Shield className="w-5 h-5" />,
    description: 'A solução definitiva para grandes fachadas ensolaradas. Proporciona privacidade diurna rigorosa de fora para dentro e alívio térmico imediato.',
    products: [
      { name: 'INSULFILM™ Metallico Argento', path: '/arquitetonico/solar/metallico-argento' },
      { name: "INSULFILM™ Reflesso d'Argento", path: '/arquitetonico/solar/reflesso-d-argento' },
      { name: 'INSULFILM™ Specchiato Bronzo', path: '/arquitetonico/solar/specchiato-bronzo' },
    ],
  },
  {
    id: 'fume-invertida',
    title: 'Estética Fumê e Invertida',
    icon: <Thermometer className="w-5 h-5" />,
    description: 'O visual preto sofisticado (charcoal) ou a privacidade inteligente (espelhado fora, fumê dentro). Ideal para controle de claridade e redução de ofuscamento.',
    products: [
      { name: 'INSULFILM™ Petrolio', path: '/arquitetonico/solar/petrolio' },
      { name: 'INSULFILM™ Grigio Invertito', path: '/arquitetonico/solar/grigio-invertito' },
    ],
  },
];

const ArqHubSolar = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const visibleCategories = activeFilter
    ? categories.filter((c) => c.id === activeFilter)
    : categories;

  return (
    <>
      <Helmet>
        <title>Películas de Controle Solar Arquitetônico | INSULFILM™</title>
        <meta name="description" content="Conforto térmico e design sofisticado para o seu projeto. Reduza o calor, elimine o ofuscamento e proteja contra UV com a tecnologia INSULFILM™." />
        <link rel="canonical" href="https://www.insulfilm.com.br/arquitetonico/solar" />
      </Helmet>

      <main>
        {/* ── SEÇÃO 1: HERO ──────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <div className="absolute inset-0 bg-hero-texture" />
          <div className="container mx-auto px-4 pt-32 pb-24 relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-6">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Sun className="w-3.5 h-3.5 mr-2" />Controle Solar Arquitetônico
                </Badge>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
                Conforto Térmico e Design Sofisticado para o Seu Projeto
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
                Reduza o calor extremo, elimine o ofuscamento e proteja seus móveis contra os raios UV sem abrir mão da estética. A tecnologia original INSULFILM™ oferece a solução exata para transformar a sua fachada, sacada ou ambiente corporativo em um espaço de bem-estar absoluto.
              </motion.p>

              <motion.div variants={scaleIn}>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista em películas arquitetônicas INSULFILM™.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />Falar com um Especialista Arquitetônico
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ── SEÇÃO 2: FILTROS E CATEGORIZAÇÃO VISUAL ─────────────── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Como você deseja transformar o seu ambiente?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                Escolha a estética ideal para o seu vidro e descubra as películas com a tecnologia certa para a sua necessidade.
              </motion.p>
            </motion.div>

            {/* Filter buttons */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-wrap justify-center gap-3 mb-16">
              <motion.div variants={fadeInUp}>
                <Button
                  variant={activeFilter === null ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(null)}
                  className="rounded-full px-6 py-2"
                >
                  Todos
                </Button>
              </motion.div>
              {categories.map((cat) => (
                <motion.div key={cat.id} variants={fadeInUp}>
                  <Button
                    variant={activeFilter === cat.id ? 'default' : 'outline'}
                    onClick={() => setActiveFilter(activeFilter === cat.id ? null : cat.id)}
                    className="rounded-full px-6 py-2 gap-2"
                  >
                    {cat.icon}
                    {cat.title}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Category sections */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter ?? 'all'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-20"
              >
                {visibleCategories.map((cat) => (
                  <div key={cat.id}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-8">
                      <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
                        <span className="text-accent">{cat.icon}</span>
                        <h3 className="text-2xl font-bold text-foreground">{cat.title}</h3>
                      </motion.div>
                      <motion.p variants={fadeInUp} className="text-muted-foreground font-light max-w-2xl">
                        {cat.description}
                      </motion.p>
                    </motion.div>

                    <motion.div
                      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={stagger}
                    >
                      {cat.products.map((p) => (
                        <motion.div key={p.path} variants={fadeInUp}>
                          <Link to={p.path}>
                            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                              <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-colors">
                                <CardContent className="p-8">
                                  <h4 className="text-lg font-extrabold text-primary-foreground mb-4">{p.name}</h4>
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

        {/* ── SEÇÃO 3: PROVA SOCIAL E GARANTIA ───────────────────── */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
                Tecnologia e Confiança de Quem Criou o Mercado
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-16 max-w-3xl mx-auto leading-relaxed">
                Ao escolher a marca INSULFILM™, você investe em nanotecnologia testada globalmente. Produtos que não desbotam, não formam bolhas e oferecem as maiores garantias do mercado arquitetônico, aplicados exclusivamente por nossos especialistas certificados.
              </motion.p>

              <motion.div variants={stagger} className="grid sm:grid-cols-3 gap-8">
                {[
                  { icon: <Shield className="w-8 h-8" />, title: 'Garantia Líder', text: 'As maiores garantias do segmento arquitetônico' },
                  { icon: <Award className="w-8 h-8" />, title: 'Aplicadores Certificados', text: 'Rede exclusiva de especialistas treinados' },
                  { icon: <CheckCircle className="w-8 h-8" />, title: 'Nanotecnologia Global', text: 'Testada e aprovada em mais de 40 países' },
                ].map((item) => (
                  <motion.div key={item.title} variants={fadeInUp} className="flex flex-col items-center gap-3">
                    <div className="text-accent">{item.icon}</div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-light">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── SEÇÃO 4: BOTTOM CTA ────────────────────────────────── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Qual é a película ideal para o seu vidro?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
                Cada projeto é único. Nossa engenharia e equipe de consultores estão prontas para analisar a sua planta, a incidência solar do seu imóvel e indicar a linha perfeita com o melhor custo-benefício.
              </motion.p>
              <motion.div variants={scaleIn}>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-12 py-7 rounded-xl shadow-premium-lg hover:shadow-premium transition-all uppercase tracking-wide">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para películas arquitetônicas INSULFILM™.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />Solicite seu Orçamento Agora
                  </a>
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
