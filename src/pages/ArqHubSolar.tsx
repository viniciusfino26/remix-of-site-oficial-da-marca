import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sun, MessageCircle, ArrowRight } from 'lucide-react';
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
  { name: 'INSULFILM™ Clear 70', subtitle: 'Nano Cerâmica de alta transparência', path: '/arquitetonico/solar/clear70' },
  { name: 'INSULFILM™ Orizzonte 70', subtitle: 'Nano Cerâmica com visão panorâmica com extremo controle térmico', path: '/arquitetonico/solar/orizzonte70' },
  { name: 'INSULFILM™ Ultravioletti 90', subtitle: 'Bloqueio UV máximo com claridade', path: '/arquitetonico/solar/ultravioletti90' },
  { name: 'INSULFILM™ Naturale', subtitle: 'Estética neutra com tecnologia Sputtered', path: '/arquitetonico/solar/naturale' },
  { name: 'INSULFILM™ Petrólio', subtitle: 'Tonalidade preta não refletiva', path: '/arquitetonico/solar/petrolio' },
  { name: 'INSULFILM™ Grigio Invertito', subtitle: 'Privacidade com acabamento espelhado invertido', path: '/arquitetonico/solar/grigio-invertito' },
  { name: 'INSULFILM™ Metallico Argento', subtitle: 'Espelhado prata premium', path: '/arquitetonico/solar/metallico-argento' },
  { name: "INSULFILM™ Reflesso D'Argento", subtitle: 'Reflexão prateada de alta rejeição', path: '/arquitetonico/solar/reflesso-d-argento' },
  { name: 'INSULFILM™ Specchiato Bronzo', subtitle: 'Refletivo bronze sofisticado e premium', path: '/arquitetonico/solar/specchiato-bronzo' },
];

const faqs = [
  {
    question: 'O que é uma película de controle solar arquitetônico?',
    answer: 'É uma película aplicada diretamente nos vidros de edifícios e residências que reduz a entrada de calor infravermelho e radiação ultravioleta, proporcionando conforto térmico, economia de energia e proteção dos interiores contra desbotamento.'
  },
  {
    question: 'Qual a diferença entre películas refletivas e não refletivas?',
    answer: 'Películas refletivas possuem acabamento espelhado que proporciona alta rejeição de calor e privacidade diurna. Películas não refletivas mantêm a aparência natural do vidro com tonalidade suave, oferecendo controle térmico sem alterar significativamente a estética da fachada.'
  },
  {
    question: 'A película de controle solar escurece o ambiente interno?',
    answer: 'Depende do modelo escolhido. Películas de alta transparência como a Clear 70 e Orizzonte 70 bloqueiam até 95% do calor infravermelho sem reduzir significativamente a luminosidade natural. Já modelos refletivos ou de tonalidade escura oferecem maior controle de claridade.'
  },
  {
    question: 'Quanto tempo dura uma película arquitetônica INSULFILM™?',
    answer: 'As películas INSULFILM™ possuem garantia de até 15 anos contra desbotamento, bolhas e descolamento. Com aplicação profissional e manutenção adequada, a vida útil pode superar 20 anos.'
  },
  {
    question: 'A película de controle solar ajuda a economizar energia?',
    answer: 'Sim. Ao reduzir a entrada de calor nos ambientes, a película diminui a necessidade de uso de ar-condicionado, podendo gerar economia de até 30% no consumo de energia elétrica destinada à climatização.'
  },
];

const ArqHubSolar = () => {
  return (
    <>
      <Helmet>
        <title>Películas de Controle Solar Arquitetônico | INSULFILM™</title>
        <meta name="description" content="Conheça a linha completa de películas de controle solar INSULFILM™ para arquitetura. Rejeição térmica superior, bloqueio UV e eficiência energética para seu projeto." />
        <link rel="canonical" href="https://www.insulfilm.com.br/arquitetonico/solar" />
      </Helmet>

      <main>
        <PageBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Arquitetônico', href: '/arquitetonico' }, { label: 'Controle Solar' }]} />

        {/* ── HERO ── */}
        <PageHero
          title="Controle Solar Arquitetônico"
          subtitle="Películas de última geração com rejeição térmica de até 95%, bloqueio UV de 99% e máxima eficiência energética. Reduza o consumo de climatização e transforme o conforto dos seus ambientes envidraçados."
          badge={{ icon: <Sun className="w-3.5 h-3.5" />, text: 'Controle Solar' }}
          cta={{
            text: 'Falar com um Especialista',
            href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista em películas de controle solar arquitetônico INSULFILM™.')}`,
            icon: <MessageCircle className="w-5 h-5" />,
            external: true
          }}
        />

        {/* ── GRID DE PRODUTOS ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Conheça Nossa Linha Completa
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                9 soluções de controle solar para cada tipo de projeto arquitetônico.
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
          { value: '95%', label: 'Rejeição IR' },
          { value: '99%', label: 'Bloqueio UV' },
          { value: '15+', label: 'Anos de Garantia' }
        ]}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Tecnologia Nano Cerâmica de Última Geração
          </h2>
          <p className="text-primary-foreground/70 text-lg font-light max-w-2xl mx-auto">
            Rejeição de calor infravermelho superior a 95%, com transparência óptica incomparável.
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
                Solicite seu Orçamento
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
                Cada projeto é único. Nossa equipe de consultores está pronta para analisar a sua planta e indicar a película ideal.
              </motion.p>
              <motion.div variants={scaleIn}>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-12 py-7 rounded-xl shadow-premium-lg hover:shadow-premium transition-all uppercase tracking-wide">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para películas de controle solar arquitetônico INSULFILM™.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />Solicitar Orçamento Agora
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
