import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layers, MessageCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import PageHero from '@/components/PageHero';
import ParallaxBreak from '@/components/ParallaxBreak';

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

const products = [
  { name: 'INSULFILM™ Jateado', subtitle: 'Efeito vidro jateado com privacidade', path: '/arquitetonico/decorativo/jateado' },
  { name: 'INSULFILM™ Whiteout', subtitle: 'Branco opaco total', path: '/arquitetonico/decorativo/whiteout' },
  { name: 'INSULFILM™ Blackout', subtitle: 'Preto opaco total', path: '/arquitetonico/decorativo/blackout' },
];

const faqs = [
  {
    question: 'As películas decorativas podem ser removidas sem danificar o vidro?',
    answer: 'Sim. Todas as películas decorativas INSULFILM™ são 100% reversíveis. Podem ser removidas profissionalmente sem deixar resíduos permanentes ou danificar a superfície do vidro, permitindo substituição ou atualização a qualquer momento.'
  },
  {
    question: 'Qual a diferença entre Jateado, Whiteout e Blackout?',
    answer: 'A película Jateado reproduz o efeito de vidro fosco, permitindo a passagem de luz difusa com privacidade visual. A Whiteout é branca opaca, eliminando completamente a transparência mas mantendo luminosidade difusa. A Blackout é preta opaca, bloqueando 100% da luz e visibilidade.'
  },
  {
    question: 'Quais são as principais aplicações das películas decorativas?',
    answer: 'São amplamente utilizadas em divisórias de escritórios, salas de reunião, consultórios médicos, banheiros, vitrines de lojas, estúdios fotográficos, salas de cinema e fachadas corporativas — sempre que se deseja controlar privacidade, luz ou estética dos vidros sem obras.'
  },
];

const ArqHubDecorativo = () => {
  return (
    <>
      <Helmet>
        <title>Películas Decorativas para Vidros | INSULFILM™</title>
        <meta name="description" content="Películas decorativas INSULFILM™: Jateado, Whiteout e Blackout. Privacidade, design e funcionalidade para vidros arquitetônicos sem obras." />
        <link rel="canonical" href="https://www.insulfilm.com.br/arquitetonico/decorativo" />
      </Helmet>

      <main>
        {/* ── BREADCRUMB ── */}
        <div className="container mx-auto px-4 pt-28 pb-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/arquitetonico">Arquitetônico</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Decorativo</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* ── HERO ── */}
        <PageHero
          title="Películas Decorativas"
          subtitle="Privacidade, estética e funcionalidade — sem obras, sem complicação. Transforme seus vidros em elementos de design com películas profissionais que oferecem controle de visibilidade e luminosidade para qualquer ambiente."
          badge={{ icon: <Layers className="w-3.5 h-3.5" />, text: 'Decorativo' }}
          cta={{
            text: 'Falar com um Especialista',
            href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista em películas decorativas INSULFILM™.')}`,
            icon: <MessageCircle className="w-5 h-5" />,
            external: true
          }}
        />

        {/* ── GRID DE PRODUTOS ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Encontre o Efeito Visual Perfeito
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                Cada película decorativa atende a uma necessidade específica de estética e privacidade.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {products.map((p) => (
                <motion.div key={p.path} variants={fadeInUp}>
                  <Link to={p.path} className="block h-full">
                    <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.3 }} className="h-full">
                      <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-all duration-300 hover:shadow-premium">
                        <CardContent className="p-8 flex flex-col justify-between h-full">
                          <div>
                            <h3 className="text-lg font-extrabold mb-2 text-primary">{p.name}</h3>
                            <p className="text-muted-foreground text-sm font-light mb-6">{p.subtitle}</p>
                          </div>
                          <span className="text-accent font-bold text-sm flex items-center gap-1">
                            Ver produto <ArrowRight className="w-4 h-4" />
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PARALLAX BREAK ── */}
        <ParallaxBreak minHeight="40vh" stats={[
          { value: '3', label: 'Linhas Decorativas' },
          { value: '100%', label: 'Reversível' },
          { value: '∞', label: 'Possibilidades' }
        ]}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Design Profissional Sem Obras
          </h2>
          <p className="text-primary-foreground/70 text-lg font-light max-w-2xl mx-auto">
            Efeito visual de vidro premium por uma fração do custo de vidros especiais.
          </p>
        </ParallaxBreak>

        {/* ── FAQ ── */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-12 text-center">
                Perguntas Frequentes
              </motion.h2>
              <motion.div variants={fadeInUp}>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left text-base font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Ver Catálogo Completo
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
                Nossos consultores ajudam você a escolher o efeito decorativo ideal, com orçamento personalizado e instalação profissional.
              </motion.p>
              <motion.div variants={scaleIn}>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-12 py-7 rounded-xl shadow-premium-lg hover:shadow-premium transition-all uppercase tracking-wide">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de ver o catálogo completo de películas decorativas INSULFILM™.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />Solicitar Catálogo
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

export default ArqHubDecorativo;
