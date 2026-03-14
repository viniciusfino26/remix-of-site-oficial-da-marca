import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Paintbrush, MessageCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PageHero from '@/components/PageHero';
import ParallaxBreak from '@/components/ParallaxBreak';
import PageBreadcrumb from '@/components/PageBreadcrumb';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const WHATSAPP_NUMBER = '5511976136911';

const products = [
  { name: 'INSULFILM™ Phantom 6mil', thickness: '6 mil / ~150 microns', finish: 'Transparente Gloss', warranty: '5 anos', path: '/automotivo/ppf/phantom-6mil' },
  { name: 'INSULFILM™ Phantom 8mil', thickness: '8 mil / ~200 microns', finish: 'Transparente Gloss (Premium)', warranty: '5 anos', path: '/automotivo/ppf/phantom-8mil' },
];

const faqs = [
  { q: 'O que é PPF e qual a diferença para película solar?', a: 'PPF (Paint Protection Film) é uma película de proteção aplicada sobre a pintura do veículo para proteger contra riscos, pedras, insetos e intempéries. Diferente da película solar, que é aplicada nos vidros para rejeição de calor e UV, o PPF protege a lataria e é transparente, mantendo a cor e brilho originais da pintura.' },
  { q: 'O PPF Phantom possui auto-regeneração?', a: 'Sim. As películas Phantom 6mil e 8mil contam com tecnologia de auto-regeneração (self-healing) na camada superior. Pequenos riscos e marcas superficiais desaparecem com a aplicação de calor, seja do sol ou de água morna.' },
  { q: 'Qual a diferença entre o Phantom 6mil e o 8mil?', a: 'A principal diferença é a espessura e o nível de proteção. O Phantom 6mil (~150 microns) oferece proteção padrão para o dia a dia. O Phantom 8mil (~200 microns) é a versão premium, com maior resistência a impactos de pedras e detritos, ideal para veículos expostos a condições mais severas.' },
  { q: 'O PPF pode ser removido sem danificar a pintura?', a: 'Sim. O PPF INSULFILM™ Phantom é projetado para remoção limpa, sem deixar resíduos de adesivo ou danificar a pintura original do veículo, desde que aplicado e removido por um centro autorizado seguindo os procedimentos corretos.' },
];

const AutomotivoHubPPF = () => (
  <>
    <Helmet>
      <title>PPF — Película de Proteção de Pintura Automotiva | INSULFILM™</title>
      <meta name="description" content="Linha INSULFILM™ Phantom PPF: proteção invisível contra riscos, pedras, insetos e intempéries. Disponível em 6mil e 8mil com auto-regeneração." />
      <link rel="canonical" href="https://www.insulfilm.com.br/automotivo/ppf" />
    </Helmet>

    <main>
      {/* Breadcrumb */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/automotivo" className="hover:text-foreground transition-colors">Automotivo</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">PPF</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <PageHero
        title="PPF — Proteção de Pintura"
        subtitle="Proteção invisível contra riscos, pedras, insetos e intempéries para a pintura do seu veículo. A linha INSULFILM™ Phantom utiliza tecnologia de 5 camadas com auto-regeneração, mantendo o brilho e a cor original da pintura por anos."
        badge={{ icon: <Paintbrush className="w-3.5 h-3.5" />, text: 'Paint Protection Film' }}
        cta={{
          text: 'Solicitar Orçamento PPF',
          href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para PPF INSULFILM™ Phantom.')}`,
          icon: <MessageCircle className="w-5 h-5" />,
          external: true,
        }}
      />

      {/* Seção explicativa */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">O que é PPF?</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-4">
              PPF (Paint Protection Film) é uma película de uretano termoplástico ultra-transparente aplicada diretamente sobre a pintura do veículo. Diferente da película solar — que é instalada nos vidros para rejeição de calor — o PPF protege a lataria contra danos físicos do dia a dia.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed">
              A linha INSULFILM™ Phantom é construída em 5 camadas especializadas com tecnologia de auto-regeneração: riscos superficiais desaparecem com calor, mantendo a estética impecável por toda a vida útil da película.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid de produtos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Escolha o seu Phantom</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">Duas opções de espessura para o nível de proteção que você precisa.</motion.p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {products.map((p) => (
              <motion.div key={p.path} variants={fadeInUp}>
                <Link to={p.path}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-all duration-300 hover:shadow-premium">
                      <CardContent className="p-8">
                        <Badge variant="secondary" className="mb-3 text-xs uppercase tracking-widest">PPF</Badge>
                        <h3 className="text-xl font-extrabold text-foreground mb-3">{p.name}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground mb-6">
                          <p><span className="font-medium text-foreground/80">Espessura:</span> {p.thickness}</p>
                          <p><span className="font-medium text-foreground/80">Acabamento:</span> {p.finish}</p>
                          <p><span className="font-medium text-foreground/80">Garantia:</span> {p.warranty}</p>
                        </div>
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
      </section>

      {/* ParallaxBreak */}
      <ParallaxBreak minHeight="25vh" stats={[
        { value: '5', label: 'Camadas de Proteção' },
        { value: '5+', label: 'Anos de Garantia' },
        { value: '∞', label: 'Auto-Regeneração' },
      ]} />

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Perguntas Frequentes</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-bold text-foreground">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-carbon-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Solicite seu Orçamento PPF</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light mb-8">Fale com um especialista e proteja a pintura do seu veículo.</motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para PPF INSULFILM™ Phantom.')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />Solicitar Orçamento PPF
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default AutomotivoHubPPF;
