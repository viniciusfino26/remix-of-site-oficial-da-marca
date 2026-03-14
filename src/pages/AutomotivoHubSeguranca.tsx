import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, MessageCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PageHero from '@/components/PageHero';
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

const WHATSAPP_NUMBER = '5511976136911';

const products = [
  { name: 'INSULFILM™ SkinSafe 8K', tag: 'Proteção', thickness: '8 mil', desc: 'Película de proteção que retém fragmentos de vidro em caso de quebra acidental, evitando projeção contra os ocupantes do veículo.', path: '/automotivo/seguranca/skinsafe8k' },
  { name: 'INSULFILM™ Antivandalismo 13K', tag: 'Antivandalismo', thickness: '13 mil', desc: 'Proteção reforçada contra atos de vandalismo e tentativas de quebra. Maior espessura para resistência superior a impactos.', path: '/automotivo/seguranca/antivandalismo13k' },
  { name: 'INSULFILM™ SkudoGuard', tag: 'Defesa', thickness: '16 mil', desc: 'Escudo de alta resistência pós-quebra. Projetada para transformar os vidros do carro numa barreira contra invasões.', path: '/automotivo/seguranca/skudoguard' },
  { name: 'INSULFILM™ SkudoUltra', tag: 'Defesa Premium', thickness: '22 mil', desc: 'Máxima resistência a impactos agressivos. Verdadeiro escudo blindado em película, com a maior espessura da linha de segurança.', path: '/automotivo/seguranca/skudoultra' },
];

const faqs = [
  { q: 'Qual a diferença entre película de proteção e película de defesa?', a: 'As películas de proteção (SkinSafe 8K e Antivandalismo 13K) retêm estilhaços em caso de quebra, protegendo os ocupantes. As de defesa (SkudoGuard e SkudoUltra) vão além: criam uma barreira de altíssima resistência pós-quebra, dificultando invasões e ataques criminosos.' },
  { q: 'A película de segurança altera a aparência do vidro?', a: 'Não. As películas de segurança INSULFILM™ são transparentes e não alteram a estética original do veículo. Elas mantêm a transparência do vidro e não comprometem a garantia de montadora.' },
  { q: 'Qual a espessura ideal para o meu veículo?', a: 'Depende do nível de proteção desejado: 8 mil para proteção básica contra estilhaços, 13 mil para antivandalismo, e 16 a 22 mil para defesa contra invasões. Um especialista pode recomendar a melhor opção para o seu perfil de uso.' },
  { q: 'A película de segurança pode ser combinada com película solar?', a: 'Sim. É possível aplicar película solar sobre a película de segurança, combinando proteção contra estilhaços/invasão com conforto térmico e privacidade. Consulte um centro autorizado para a melhor combinação.' },
];

const AutomotivoHubSeguranca = () => (
  <>
    <Helmet>
      <title>Películas de Proteção e Segurança Automotiva | INSULFILM™</title>
      <meta name="description" content="Películas de proteção, antivandalismo e defesa automotiva INSULFILM™. Proteção contra estilhaços, vandalismo e invasões criminosas." />
      <link rel="canonical" href="https://www.insulfilm.com.br/automotivo/seguranca" />
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
            <span className="text-foreground font-medium">Proteção e Segurança</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <PageHero
        title="Películas de Proteção e Segurança Automotiva"
        subtitle="Proteja-se das incertezas no caminho. Películas desenvolvidas com engenharia de ponta e polímeros sintéticos de alta performance elástica para proteção contra estilhaços, vandalismo e invasões criminosas. De 8 a 22 mil de espessura, com 100% de retenção de fragmentos de vidro."
        badge={{ icon: <Shield className="w-3.5 h-3.5" />, text: 'Proteção e Segurança' }}
        cta={{
          text: 'Falar com Especialista',
          href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as películas de segurança automotiva INSULFILM™.')}`,
          icon: <MessageCircle className="w-5 h-5" />,
          external: true,
        }}
      />

      {/* Grid de produtos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Encontre o seu nível de proteção</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">Películas fortes, feitas para resistir e rigorosamente testadas para não falhar.</motion.p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {products.map((p) => (
              <motion.div key={p.path} variants={fadeInUp}>
                <Link to={p.path}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-all duration-300 hover:shadow-premium">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs uppercase tracking-widest">{p.tag}</Badge>
                          <span className="text-xs text-muted-foreground">{p.thickness}</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-foreground mb-3">{p.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
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
        { value: '8-22', label: 'mil de espessura' },
        { value: '100%', label: 'Retenção de Estilhaços' },
        { value: 'Certificado', label: 'de Fábrica' },
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
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Fale com um Especialista</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light mb-8">Proteção e segurança de verdade para você e sua família. Elimine as vantagens do marginal.</motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as películas de segurança automotiva INSULFILM™.')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />Falar com Especialista
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default AutomotivoHubSeguranca;
