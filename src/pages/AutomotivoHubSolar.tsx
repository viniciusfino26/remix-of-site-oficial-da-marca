import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sun, MessageCircle, ArrowRight } from 'lucide-react';
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
  { name: 'INSULFILM™ Dark', tag: 'Standard Dyed', gen: '2ª Geração — Pigmentada', desc: 'Proteção solar com foco em privacidade e controle da luminosidade. Filtro elevado de raios UV com ótima nitidez ótica interna.', path: '/automotivo/solar/dark' },
  { name: 'INSULFILM™ Eclipse', tag: 'Nano Carbon', gen: '3ª Geração — Carbono', desc: 'Melhor desempenho térmico com carbono puro verdadeiro. Cor estável, durabilidade prolongada e rejeição avançada de raios IR.', path: '/automotivo/solar/eclipse' },
  { name: 'INSULFILM™ Vip', tag: 'Carbon Plus', gen: '3ª Geração evoluída — Carbono-Cerâmica', desc: 'Carbono puro com rejeição de infravermelho potencializada. Alta redução de calor, privacidade e estabilidade de cor superior.', path: '/automotivo/solar/vip' },
  { name: 'INSULFILM™ Polariz Ultra', tag: 'Hybrid Ceramic', gen: '5ª Geração — Cerâmica Metalizada', desc: 'Híbrida metalizada + cerâmica com visual polarizado. Ultra rejeição térmica e excepcional visibilidade interna de alta definição.', path: '/automotivo/solar/polariz-ultra' },
  { name: 'INSULFILM™ Matrix', tag: 'True Ceramic', gen: '4ª Geração — Cerâmica', desc: 'Extra-classe. Espectro seletiva com nano cerâmica para máxima rejeição térmica. Disponível transparente ou escura. Ultra definição ótica.', path: '/automotivo/solar/matrix' },
];

const comparison = [
  { name: 'Dark', ir: 'Moderada', uv: '+99%', tech: 'Pigmentada (Dyed)' },
  { name: 'Eclipse', ir: 'Avançada', uv: '+99%', tech: 'Nano Carbono' },
  { name: 'Vip', ir: 'Alta', uv: '+99%', tech: 'Carbono-Cerâmica' },
  { name: 'Polariz Ultra', ir: 'Ultra', uv: '+99%', tech: 'Cerâmica Metalizada' },
  { name: 'Matrix', ir: 'Máxima', uv: '+99%', tech: 'Cerâmica Pura' },
];

const faqs = [
  { q: 'Qual a diferença entre película pigmentada e cerâmica?', a: 'A película pigmentada (Dark) usa corantes para escurecimento e proteção básica. Já a cerâmica (Matrix) utiliza nano partículas que rejeitam muito mais calor sem depender da tonalidade, oferecendo desempenho térmico superior mesmo em versões mais claras.' },
  { q: 'Película solar automotiva interfere no sinal do celular ou GPS?', a: 'Películas não metalizadas como Dark, Eclipse, Vip e Matrix não interferem em sinais eletrônicos. A Polariz Ultra, por conter componente metalizado, pode causar atenuação mínima em alguns casos, mas foi projetada para minimizar esse efeito.' },
  { q: 'Quanto tempo dura uma película solar INSULFILM™?', a: 'A durabilidade varia conforme a linha: a Dark tem garantia de fábrica padrão, enquanto Eclipse, Vip, Matrix e Polariz Ultra possuem garantias estendidas de até 10 anos, dependendo do produto e das condições de uso e manutenção.' },
  { q: 'Posso aplicar película solar no para-brisa?', a: 'Sim, a linha Matrix possui versões de alta transparência (70% VLT) homologadas para aplicação no para-brisa, mantendo a rejeição térmica elevada sem comprometer a visibilidade exigida por lei.' },
  { q: 'Qual película solar rejeita mais calor?', a: 'A Matrix (cerâmica pura) e a Polariz Ultra (cerâmica metalizada) oferecem os maiores índices de rejeição de calor da linha INSULFILM™, sendo ideais para quem busca o máximo conforto térmico no veículo.' },
];

const AutomotivoHubSolar = () => (
  <>
    <Helmet>
      <title>Películas de Proteção Solar Automotivo | INSULFILM™</title>
      <meta name="description" content="Películas de proteção solar automotiva INSULFILM™: Dark, Eclipse, Vip, Matrix e Polariz Ultra. Redução de calor, proteção UV e design sofisticado." />
      <link rel="canonical" href="https://www.insulfilm.com.br/automotivo/solar" />
    </Helmet>

    <main>
      <PageBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Automotivo', href: '/automotivo' }, { label: 'Películas Solares' }]} />

      {/* Hero */}
      <PageHero
        title="Películas Solares Automotivas INSULFILM™"
        subtitle="Muito além do simples escurecimento. Tecnologia de ponta em polímeros e compostos óticos especiais para redução superior de calor, claridade e até +99% de proteção contra raios UV. Da 2ª à 5ª geração, escolha o nível de performance ideal para o seu veículo."
        badge={{ icon: <Sun className="w-3.5 h-3.5" />, text: 'Proteção Solar' }}
        cta={{
          text: 'Agendar Instalação',
          href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar a instalação de película solar automotiva INSULFILM™.')}`,
          icon: <MessageCircle className="w-5 h-5" />,
          external: true,
        }}
      />

      {/* Grid de produtos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Encontre o seu INSULFILM™ ideal</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">Do essencial ao topo de linha — cada película é projetada para uma necessidade específica.</motion.p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {products.map((p) => (
              <motion.div key={p.path} variants={fadeInUp}>
                <Link to={p.path}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-all duration-300 hover:shadow-premium">
                      <CardContent className="p-8">
                        <Badge variant="secondary" className="mb-3 text-xs uppercase tracking-widest">{p.tag}</Badge>
                        <h3 className="text-xl font-extrabold text-foreground mb-1">{p.name}</h3>
                        <p className="text-xs text-muted-foreground mb-3">{p.gen}</p>
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

      {/* Comparativo */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Comparativo Rápido</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light">Veja as principais diferenças entre as linhas.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-bold text-foreground">Produto</th>
                  <th className="text-center py-3 px-4 font-bold text-foreground">Rejeição IR</th>
                  <th className="text-center py-3 px-4 font-bold text-foreground">Proteção UV</th>
                  <th className="text-center py-3 px-4 font-bold text-foreground">Tecnologia</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.name} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-foreground">{row.name}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.ir}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.uv}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ParallaxBreak */}
      <ParallaxBreak minHeight="25vh" stats={[
        { value: '5', label: 'Gerações de Tecnologia' },
        { value: '+99%', label: 'Proteção UV' },
        { value: '10+', label: 'Anos de Garantia' },
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
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Agende sua Instalação</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light mb-8">Fale com um especialista e escolha a película ideal para o seu veículo.</motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar a instalação de película solar automotiva INSULFILM™.')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />Agendar Instalação
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default AutomotivoHubSolar;
