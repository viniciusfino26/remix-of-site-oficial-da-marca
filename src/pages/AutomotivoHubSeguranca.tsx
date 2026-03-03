import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ShieldCheck, ShieldAlert, Swords, MessageCircle, ArrowRight, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import ProductShowcase from '@/components/ProductShowcase';
import ParallaxBreak from '@/components/ParallaxBreak';

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
    id: 'protecao',
    title: 'Proteção',
    icon: <ShieldCheck className="w-5 h-5" />,
    description: 'Películas que retêm os fragmentos de vidro em caso de quebras acidentais, evitando a projeção direta contra os ocupantes do veículo. Proteção contra acidentes e atos de vandalismo.',
    products: [
      { name: 'INSULFILM™ SkinSafe8K', path: '/automotivo/seguranca/skinsafe8k' },
      { name: 'INSULFILM™ Antivandalismo 13K', path: '/automotivo/seguranca/antivandalismo13k' },
    ],
  },
  {
    id: 'defesa',
    title: 'Defesa',
    icon: <Swords className="w-5 h-5" />,
    description: 'Verdadeiros escudos muito mais resistentes a impactos agressivos de invasão. Películas projetadas para transformar os vidros do seu carro numa barreira de altíssima resistência pós-quebra.',
    products: [
      { name: 'INSULFILM™ SkudoGuard', path: '/automotivo/seguranca/skudoguard' },
      { name: 'INSULFILM™ SkudoUltra', path: '/automotivo/seguranca/skudoultra' },
    ],
  },
];

const AutomotivoHubSeguranca = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const visibleCategories = activeFilter
    ? categories.filter((c) => c.id === activeFilter)
    : categories;

  return (
    <>
      <Helmet>
        <title>Películas de Segurança Automotiva | INSULFILM™</title>
        <meta name="description" content="Películas de proteção, antivandalismo e defesa automotiva INSULFILM™. Proteção contra estilhaços, vandalismo e invasões criminosas." />
        <link rel="canonical" href="https://www.insulfilm.com.br/automotivo/seguranca" />
      </Helmet>

      <main>
        {/* ── HERO ── */}
        <PageHero
          title="Proteja-se das incertezas no caminho. Dirija confiante de chegar lá com proteção e segurança de verdade."
          subtitle="Conheça as películas automotivas de Proteção, Antivandalismo e Defesa originais INSULFILM™. Desenvolvidas com engenharia de ponta e polímeros sintéticos de alta performance elástica, nossas películas oferecem muito mais resistência para você rodar com tranquilidade e segurança total do seu carro, uma fortaleza, repelindo os vidros contra acidentes e ataques criminosos."
          badge={{ icon: <Shield className="w-3.5 h-3.5" />, text: 'Proteção e Segurança' }}
          cta={{
            text: 'Falar com um Especialista',
            href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as películas de segurança automotiva INSULFILM™.')}`,
            icon: <MessageCircle className="w-5 h-5" />,
            external: true,
          }}
        />

        {/* ── FAIXA DE DESTAQUE ── */}
        <section className="bg-background">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container mx-auto px-4 py-10 text-center">
            <p className="text-muted-foreground text-sm md:text-base font-light mb-6">
              Não altera a originalidade do veículo. Garantia de montadora preservada.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="bg-accent py-5">
            <p className="text-center text-accent-foreground font-extrabold uppercase tracking-widest text-sm md:text-base px-4">
              Películas Fortes. Feitas para resistir. Rigorosamente testadas para não falhar.
            </p>
          </motion.div>
        </section>

        {/* ── CATEGORIAS COM SHOWCASES ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Encontre o seu INSULFILM™ ideal
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                Escolha o nível de proteção que você precisa para o seu veículo.
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

            {/* Category sections with ProductShowcase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter ?? 'all'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-24"
              >
                {visibleCategories.map((cat, catIdx) => (
                  <div key={cat.id} className="space-y-12">
                    {/* Category showcase */}
                    <ProductShowcase
                      title={cat.title}
                      description={cat.description}
                      fallbackIcon={<Shield className="w-16 h-16 text-accent/40" />}
                      link={cat.products[0]?.path || '#'}
                      linkText="Explorar Categoria"
                      reversed={catIdx % 2 !== 0}
                    />

                    {/* Product cards */}
                    <motion.div
                      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={stagger}
                    >
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

        {/* Parallax Break */}
        <ParallaxBreak minHeight="30vh" stats={[
          { value: '8-22', label: 'mil de espessura' },
          { value: '100%', label: 'Retenção de Estilhaços' },
          { value: 'Certificado', label: 'de Fábrica' },
        ]} />

        {/* ── CTA FINAL ── */}
        <section className="py-24 bg-carbon-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-texture opacity-30" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
                Exija as películas originais INSULFILM™
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light mb-4">
                Proteção e Segurança de verdade para você e sua família.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-extrabold text-accent mb-10">
                Elimine as vantagens do marginal.
              </motion.p>
              <motion.div variants={scaleIn} className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base px-8 py-6 rounded-xl">
                  <Link to="/lojas"><MapPin className="w-5 h-5" />Centros Autorizados</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base px-8 py-6 rounded-xl">
                  <Link to="/parceiro"><Users className="w-5 h-5" />Seja um Aplicador</Link>
                </Button>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as películas de segurança automotiva INSULFILM™.')}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />WhatsApp
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

export default AutomotivoHubSeguranca;
