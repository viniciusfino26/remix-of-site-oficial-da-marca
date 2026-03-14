import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, MessageCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
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
  { name: 'INSULFILM™ ISSF 4000', subtitle: 'Película 4 mil para retenção de estilhaços', path: '/arquitetonico/seguranca/issf4000' },
  { name: 'INSULFILM™ ISSF 7000', subtitle: 'Película 7 mil reforçada anti-invasão', path: '/arquitetonico/seguranca/issf7000' },
];

const faqs = [
  {
    question: 'O que é uma película de segurança arquitetônica?',
    answer: 'É uma película de poliéster de alta resistência aplicada sobre vidros de edificações. Sua principal função é reter fragmentos de vidro em caso de quebra — seja por impacto, explosão, vandalismo ou desastres naturais — protegendo ocupantes e patrimônio.'
  },
  {
    question: 'Qual a diferença entre a ISSF 4000 e a ISSF 7000?',
    answer: 'A ISSF 4000 possui 4 mil (100 microns) de espessura e é indicada para retenção de estilhaços em vidros sujeitos a quebra acidental ou ventanias. A ISSF 7000 possui 7 mil (175 microns), oferecendo proteção reforçada contra tentativas de invasão e vandalismo, além de maior resistência a impactos.'
  },
  {
    question: 'As películas de segurança INSULFILM™ seguem normas internacionais?',
    answer: 'Sim. Nossas películas são testadas conforme normas ANSI Z97.1, ASTM E1886/E1996 e EN 12600, garantindo desempenho comprovado em retenção de fragmentos e resistência a impacto.'
  },
  {
    question: 'Quanto tempo dura uma película de segurança?',
    answer: 'Com aplicação profissional e manutenção adequada, as películas de segurança INSULFILM™ possuem vida útil superior a 15 anos, com garantia de fábrica contra bolhas, descolamento e degradação.'
  },
];

const ArqHubSeguranca = () => {
  return (
    <>
      <Helmet>
        <title>Películas de Segurança Arquitetônica | INSULFILM™</title>
        <meta name="description" content="Películas de segurança profissional INSULFILM™ para edificações. Retenção de estilhaços, proteção anti-invasão e resistência contra explosões. ISSF 4000 e ISSF 7000." />
        <link rel="canonical" href="https://www.insulfilm.com.br/arquitetonico/seguranca" />
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
                <BreadcrumbPage>Proteção e Segurança</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* ── HERO ── */}
        <PageHero
          title="Proteção e Segurança Arquitetônica"
          subtitle="Películas de alta resistência projetadas para reter estilhaços de vidro, dificultar invasões e proteger ocupantes contra explosões e impactos. Engenharia de ponta em polímeros certificados para edificações comerciais, corporativas e residenciais."
          badge={{ icon: <Shield className="w-3.5 h-3.5" />, text: 'Proteção e Segurança' }}
          cta={{
            text: 'Falar com um Especialista',
            href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista em películas de segurança arquitetônica INSULFILM™.')}`,
            icon: <MessageCircle className="w-5 h-5" />,
            external: true
          }}
        />

        {/* ── GRID DE PRODUTOS ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Encontre a Proteção Ideal
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                Duas soluções de segurança para diferentes níveis de exigência.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
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
          { value: '4-7', label: 'mil de espessura' },
          { value: '100%', label: 'Retenção de estilhaços' },
          { value: 'ASTM', label: 'Certificação' }
        ]}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Segurança Certificada por Normas Internacionais
          </h2>
          <p className="text-primary-foreground/70 text-lg font-light max-w-2xl mx-auto">
            Proteção comprovada contra estilhaços, vandalismo e impactos de alta energia.
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
                Solicitar Visita Técnica
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
                Nossa equipe de engenharia analisa o tipo de vidro, a classificação de risco e as normas exigidas para recomendar a proteção exata.
              </motion.p>
              <motion.div variants={scaleIn}>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-12 py-7 rounded-xl shadow-premium-lg hover:shadow-premium transition-all uppercase tracking-wide">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar uma visita técnica para películas de segurança arquitetônica INSULFILM™.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />Solicitar Visita Técnica
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

export default ArqHubSeguranca;
