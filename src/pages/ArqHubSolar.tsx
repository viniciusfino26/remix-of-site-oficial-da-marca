import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, MessageCircle, ArrowRight, Shield, Award, Eye, Thermometer, Sparkles, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import ProductShowcase from '@/components/ProductShowcase';
import ParallaxBreak from '@/components/ParallaxBreak';
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

const WHATSAPP_NUMBER = '5511936182746';

type Category = {
  id: string;
  title: string;
  icon: React.ReactNode;
  imageSrc?: string;
  fallbackIcon?: React.ReactNode;
  description: string;
  products: {name: string;path: string;}[];
};

const categories: Category[] = [
{
  id: 'alta-transparencia',
  title: 'Alta Transparência',
  icon: <Eye className="w-5 h-5" />,
  imageSrc: arqSolarTransparencia,
  description: 'Para quem exige máximo bloqueio de calor, mas não quer alterar a fachada ou perder a luz natural. A verdadeira revolução da Nano Cerâmica.',
  products: [
  { name: 'INSULFILM™ Clear70', path: '/arquitetonico/solar/clear70' },
  { name: 'INSULFILM™ Orizzonte70', path: '/arquitetonico/solar/orizzonte70' },
  { name: 'INSULFILM™ Ultravioletti90', path: '/arquitetonico/solar/ultravioletti90' }]

},
{
  id: 'estetica-neutra',
  title: 'Estética Neutra',
  icon: <Sparkles className="w-5 h-5" />,
  imageSrc: arqSolarNeutra,
  description: 'Tecnologia Sputtered de bombardeamento iônico. Controle solar inteligente com uma tonalidade suave que respeita o design original da arquitetura.',
  products: [
  { name: 'INSULFILM™ Naturale', path: '/arquitetonico/solar/naturale' }]

},
{
  id: 'privacidade-espelhados',
  title: 'Privacidade e Espelhados',
  icon: <Shield className="w-5 h-5" />,
  imageSrc: arqSolarEspelhados,
  description: 'A solução definitiva para grandes fachadas ensolaradas. Proporciona privacidade diurna rigorosa de fora para dentro e alívio térmico imediato.',
  products: [
  { name: 'INSULFILM™ Metallico Argento', path: '/arquitetonico/solar/metallico-argento' },
  { name: "INSULFILM™ Reflesso d'Argento", path: '/arquitetonico/solar/reflesso-d-argento' },
  { name: 'INSULFILM™ Specchiato Bronzo', path: '/arquitetonico/solar/specchiato-bronzo' },
  { name: 'INSULFILM™ Grigio Invertito', path: '/arquitetonico/solar/grigio-invertito' }]

},
{
  id: 'fume-invertida',
  title: 'Não Refletivas',
  icon: <Thermometer className="w-5 h-5" />,
  imageSrc: arqSolarFume,
  description: 'O visual preto sofisticado (charcoal) ou a privacidade inteligente (espelhado fora, fumê dentro). Ideal para controle de claridade e redução de ofuscamento.',
  products: [
  { name: 'INSULFILM™ Petrolio', path: '/arquitetonico/solar/petrolio' }]

}];


const ArqHubSolar = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const visibleCategories = activeFilter ?
  categories.filter((c) => c.id === activeFilter) :
  categories;

  return (
    <>
      <Helmet>
        <title>Películas de Controle Solar Arquitetônico | INSULFILM™</title>
        <meta name="description" content="Conforto térmico e design sofisticado para o seu projeto. Reduza o calor, elimine o ofuscamento e proteja contra UV com a tecnologia INSULFILM™." />
        <link rel="canonical" href="https://www.insulfilm.com.br/arquitetonico/solar" />
      </Helmet>

      <main>
        {/* ── HERO ── */}
        <PageHero
          title="Conforto Térmico e Design Sofisticado para o Seu Projeto"
          subtitle="A INSULFILM™ oferece a maior variedade em películas arquitetônicas para melhor desempenho de painéis de vidros em projetos residenciais e comerciais."
          badge={{ icon: <Sun className="w-3.5 h-3.5" />, text: 'Controle Solar Arquitetônico' }}
          cta={{
            text: 'Falar com um Especialista Arquitetônico',
            href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista em películas arquitetônicas INSULFILM™.')}`,
            icon: <MessageCircle className="w-5 h-5" />,
            external: true
          }} />


        {/* ── CATEGORIAS COM SHOWCASES ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Como você deseja transformar o seu ambiente?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">Transforme sua área envidraçada em uma experiência com muito mais conforto e sofisticação.

              </motion.p>
            </motion.div>

            {/* Filter buttons */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-wrap justify-center gap-3 mb-16">
              <motion.div variants={fadeInUp}>
                <Button
                  variant={activeFilter === null ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(null)}
                  className="rounded-full px-6 py-2">

                  Todos
                </Button>
              </motion.div>
              {categories.map((cat) =>
              <motion.div key={cat.id} variants={fadeInUp}>
                  <Button
                  variant={activeFilter === cat.id ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(activeFilter === cat.id ? null : cat.id)}
                  className="rounded-full px-6 py-2 gap-2">

                    {cat.icon}
                    {cat.title}
                  </Button>
                </motion.div>
              )}
            </motion.div>

            {/* Category sections with ProductShowcase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter ?? 'all'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-24">

                {visibleCategories.map((cat, catIdx) =>
                <div key={cat.id} className="space-y-12">
                    {/* Category showcase */}
                    <ProductShowcase
                    title={cat.title}
                    description={cat.description}
                    imageSrc={cat.imageSrc}
                    fallbackIcon={cat.fallbackIcon}
                    link={cat.products[0]?.path || '#'}
                    linkText="Explorar Categoria"
                    reversed={catIdx % 2 !== 0} />


                    {/* Product cards */}
                    <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}>

                      {cat.products.map((p) =>
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
                    )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── PARALLAX BREAK ── */}
        <ParallaxBreak minHeight="40vh" stats={[
        { value: '95%', label: 'Rejeição IR' },
        { value: '99%', label: 'Bloqueio UV' },
        { value: '15+', label: 'Anos de Garantia' }]
        }>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Tecnologia Nano Cerâmica de Última Geração
          </h2>
          <p className="text-primary-foreground/70 text-lg font-light max-w-2xl mx-auto">
            Rejeição de calor infravermelho superior a 95%, com transparência óptica incomparável.
          </p>
        </ParallaxBreak>

        {/* ── PROVA SOCIAL ── */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
                Tecnologia e Confiança de Quem Criou o Mercado
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-16 max-w-3xl mx-auto leading-relaxed">
                Ao escolher a marca INSULFILM™, você investe em nanotecnologia testada globalmente. Produtos que não desbotam, não formam bolhas e oferecem as maiores garantias do mercado arquitetônico.
              </motion.p>

              <motion.div variants={stagger} className="grid sm:grid-cols-3 gap-8">
                {[
                { icon: <Shield className="w-8 h-8" />, title: 'Garantia Líder', text: 'As maiores garantias do segmento arquitetônico' },
                { icon: <Award className="w-8 h-8" />, title: 'Aplicadores Certificados', text: 'Rede exclusiva de especialistas treinados' },
                { icon: <CheckCircle className="w-8 h-8" />, title: 'Nanotecnologia Global', text: 'Testada e aprovada em mais de 40 países' }].
                map((item) =>
                <motion.div key={item.title} variants={fadeInUp} className="flex flex-col items-center gap-3">
                    <div className="text-accent">{item.icon}</div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-light">{item.text}</p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Qual é a película ideal para o seu vidro?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
                Cada projeto é único. Nossa engenharia e equipe de consultores estão prontas para analisar a sua planta e indicar a linha perfeita.
              </motion.p>
              <motion.div variants={scaleIn}>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-12 py-7 rounded-xl shadow-premium-lg hover:shadow-premium transition-all uppercase tracking-wide">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para películas arquitetônicas INSULFILM™.')}`}
                    target="_blank"
                    rel="noopener noreferrer">

                    <MessageCircle className="w-5 h-5" />Solicite seu Orçamento Agora
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>);

};

export default ArqHubSolar;