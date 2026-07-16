import { useRef } from 'react';
import ParallaxBreak from '@/components/ParallaxBreak';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Layers, Shield, CheckCircle, MessageCircle, Eye, ArrowRight, Sun, Thermometer, Palette, FileCheck, Sparkles } from 'lucide-react';
import productImage from '@/assets/auto-solar-polariz.png';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import PdpFaq from '@/components/PdpFaq';

const faqItems = [
  {
    question: 'Quais tonalidades a Polariz oferece?',
    answer: 'Polariz 20 (20% de transmissão de luz, TSER 47%), Polariz 10 (10%, TSER 50%) e Polariz 05 (5%, TSER 57%). IR rejeitado de 38% a 44% e 99% de UV em todas.',
  },
  {
    question: 'A Polariz pode ser aplicada em teto-solar?',
    answer: 'Sim. É uma das linhas indicadas para teto-solar, controlando o calor no ponto de maior incidência solar do veículo. Também é aplicável em vidros laterais, vidro traseiro e para-brisa.',
  },
  {
    question: 'Como funciona a rejeição de calor da Polariz?',
    answer: 'A construção híbrida metalizada (Hybrid Film) reflete o calor do sol antes que ele entre. A Polariz 05 chega a 57% de rejeição de energia solar total (TSER), com sensação térmica imediata no habitáculo.',
  },
  {
    question: 'O que diferencia visualmente a Polariz das outras linhas?',
    answer: 'A tonalidade polarizada neutro-petróleo cria uma assinatura visual exclusiva: brilho intenso com refletividade discreta, diferente do preto das demais linhas da faixa.',
  },
  {
    question: 'Qual é a garantia oficial da Polariz?',
    answer: '5 anos, com Certificado Individual emitido no ato do serviço técnico e número único de rastreamento. Consulte condições.',
  },
];

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { icon: Zap, label: 'Construção', value: 'Hybrid Film · Metalizada' },
  { icon: Layers, label: 'Nitidez Óptica', value: 'Alta · High Definition' },
  { icon: Eye, label: 'Bloqueio UV', value: '99%' },
  { icon: Shield, label: 'Garantia', value: '5 anos' },
];

const techTable = [
  { version: 'Polariz 20', privacy: 'Médio-Alto', light: '20%', ir: '38%', uv: '99%', energy: '47%' },
  { version: 'Polariz 10', privacy: 'Médio-Alto+', light: '10%', ir: '44%', uv: '99%', energy: '50%' },
  { version: 'Polariz 05', privacy: 'Alto', light: '05%', ir: '44%', uv: '99%', energy: '57%' },
];

const problems = [
  { icon: Thermometer, title: 'Calor que só a rejeição por reflexão elimina', text: 'A construção híbrida metalizada da Polariz reflete o calor do sol antes que ele entre, até 57% de rejeição de energia solar total, sensação térmica imediata no habitáculo.' },
  { icon: Palette, title: 'Visual comum, sem identidade própria', text: 'A tonalidade polarizada neutro-petróleo cria uma assinatura visual exclusiva. Brilho intenso com refletividade discreta que diferencia o veículo das linhas convencionais.' },
  { icon: Sun, title: 'Teto-solar sem controle térmico', text: 'A Polariz é uma das linhas indicadas para teto-solar, controlando o calor no ponto de maior incidência solar do veículo, onde outras películas não performam.' },
];

const benefits = [
  { title: 'Conforto térmico por reflexão', text: 'A construção híbrida metalizada reflete e rejeita o calor do sol, elevando o conforto térmico de forma perceptível na pele, com até 57% de rejeição de energia solar total.' },
  { title: 'Visual exclusivo em tom neutro-petróleo', text: 'Brilho intenso com refletividade discreta. Um acabamento que se destaca e dá identidade ao veículo, diferente do preto das demais linhas da faixa.' },
  { title: 'Aplicável em teto-solar', text: 'Uma das linhas indicadas para teto-solar, controlando o calor no ponto de maior incidência do veículo.' },
  { title: 'Nitidez óptica High Definition', text: 'Alta visibilidade de dentro para fora, clara por dentro, com rejeição dedicada de infravermelho.' },
];

const portfolio = {
  performance: [
    { name: 'INSULFILM™ RayStart', current: false },
    { name: 'INSULFILM™ RayPro', current: false },
    { name: 'INSULFILM™ Carbon', current: false },
    { name: 'INSULFILM™ Ceramic', current: false },
    { name: 'INSULFILM™ Polariz', current: true },
  ],
  premium: [
    { name: 'INSULFILM™ Matrix', current: false },
    { name: 'INSULFILM™ Polariz Ultra', current: false },
  ],
};

const AutomotivoSolarPolariz = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    '@context': 'https://schema.org', '@type': 'Product',
    name: 'INSULFILM™ Polariz', brand: { '@type': 'Brand', name: 'INSULFILM™' },
    description: 'INSULFILM™ Polariz, construção híbrida metalizada com visual polarizado neutro-petróleo. Até 57% de TSER, 99% UV, aplicável em teto-solar e 5 anos de garantia.',
    url: 'https://insulfilm.com.br/automotivo/solar/polariz',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Construção', value: 'Hybrid Film, Metalizada' },
      { '@type': 'PropertyValue', name: 'Nitidez Óptica', value: 'Alta, High Definition' },
      { '@type': 'PropertyValue', name: 'Bloqueio UV', value: '99%' },
      { '@type': 'PropertyValue', name: 'Garantia', value: '5 anos' },
    ],
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Polariz | Solar Performance Films · Híbrida Metalizada</title>
        <meta name="description" content="INSULFILM™ Polariz: reflexão de calor com visual polarizado exclusivo. Até 57% de rejeição solar total, 99% UV, aplicável em teto-solar e 5 anos de garantia." />
        <meta property="og:title" content="INSULFILM™ Polariz | Solar Performance Films" />
        <meta property="og:description" content="Reflexão de calor e um visual que nenhuma outra linha da faixa entrega." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://insulfilm.com.br/automotivo/solar/polariz" />
        <link rel="canonical" href="https://insulfilm.com.br/automotivo/solar/polariz" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <main>
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Sparkles className="w-3.5 h-3.5 mr-2" /> Solar Performance Films · Híbrida Metalizada
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">INSULFILM™ Polariz</motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70 font-light italic max-w-3xl mx-auto mb-4">Reflexão de calor e um visual que nenhuma outra linha da faixa entrega.</motion.p>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-primary-foreground/60 font-light max-w-3xl mx-auto">★ Estética Diferenciada &nbsp;·&nbsp; Nitidez Óptica: Alta · High Definition</motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-14 max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">▪ O que esta linha resolve</motion.p>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-foreground font-light italic leading-relaxed">A Polariz é o único ponto da Solar Performance Films em que estética polarizada e reflexão térmica caminham juntas, inclusive em teto-solar.</motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
            <motion.div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {problems.map((p, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full"><CardContent className="p-8">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5"><p.icon className="w-7 h-7 text-accent" /></div>
                      <h3 className="text-lg font-extrabold text-foreground mb-3 leading-snug">{p.title}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed text-sm">{p.text}</p>
                    </CardContent></Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
                <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">▪ Sobre esta linha</motion.p>
                <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-6 leading-tight">A híbrida metalizada da Solar Performance Films.</motion.h2>
                <motion.p variants={fadeInUp} className="text-primary-foreground/70 font-light leading-relaxed mb-4">A INSULFILM™ Polariz é película espectro seletiva híbrida com estética visual polarizada e alto desempenho de retenção de calor. Visual refinado combinado a rejeição térmica avançada por reflexão.</motion.p>
                <motion.p variants={fadeInUp} className="text-primary-foreground/70 font-light leading-relaxed">Três tonalidades (Polariz 20, 10 e 05), até 57% de TSER, 99% de UV, aplicável em teto-solar e 5 anos de garantia oficial com certificado individual.</motion.p>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
                <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">▪ Posição no portfólio</motion.p>
                <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-6">
                  <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">Solar Performance Films</p>
                  <ul className="space-y-2 mb-6">{portfolio.performance.map((it) => (
                    <li key={it.name} className={`flex items-center gap-3 ${it.current ? 'text-primary-foreground font-bold' : 'text-primary-foreground/50 font-light'}`}>
                      <span className={`w-2 h-2 rounded-full ${it.current ? 'bg-accent' : 'bg-primary-foreground/30'}`} />
                      {it.name}{it.current && <Badge className="bg-accent/20 text-accent border-0 text-[10px] ml-2">VOCÊ ESTÁ AQUI</Badge>}
                    </li>))}
                  </ul>
                  <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">Solar Premium Films</p>
                  <ul className="space-y-2">{portfolio.premium.map((it) => (
                    <li key={it.name} className="flex items-center gap-3 text-primary-foreground/50 font-light">
                      <span className="w-2 h-2 rounded-full bg-primary-foreground/30" />{it.name}
                    </li>))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden"><img src={productImage} alt="INSULFILM™ Polariz, Película híbrida metalizada polarizada" className="w-full h-full object-cover rounded-2xl" /></div>
              <p className="text-center text-muted-foreground text-sm mt-3">Imagem meramente ilustrativa</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Especificações Técnicas</motion.h2>
              <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
            </motion.div>
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {specs.map((s, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full text-center"><CardContent className="p-8">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4"><s.icon className="w-7 h-7 text-accent" /></div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">{s.label}</p>
                      <p className="text-xl font-extrabold text-foreground">{s.value}</p>
                    </CardContent></Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3 text-center">▪ Performance Técnica</motion.p>
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-foreground mb-8 text-center">Ficha Técnica</motion.h3>
              <motion.div variants={fadeInUp} className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-bold text-foreground">Variante</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Transmissão de Luz</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">IR Rejeitado</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">UV Rejeitado</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Energia Solar (TSER)</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Privacidade</th>
                  </tr></thead>
                  <tbody>{techTable.map((row) => (
                    <tr key={row.version} className="border-b border-border/50">
                      <td className="py-3 px-4 font-semibold text-foreground">{row.version}</td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{row.light}</td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{row.ir}</td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{row.uv}</td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{row.energy}</td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{row.privacy}</td>
                    </tr>))}
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <ParallaxBreak minHeight="25vh" stats={[
          { value: '57%', label: 'TSER (Polariz 05)' },
          { value: '99%', label: 'Bloqueio UV' },
          { value: '5', label: 'Anos Garantia' },
        ]} />

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">▪ O que você recebe</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-10">Reflexão de calor e assinatura visual em uma só linha.</motion.h2>
              <motion.ul className="space-y-6" variants={stagger}>{benefits.map((b, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-bold text-lg mb-1">▸ {b.title}</p>
                    <p className="text-primary-foreground/60 font-light leading-relaxed">{b.text}</p>
                  </div>
                </motion.li>))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3 text-center">✓ Aplicabilidade</motion.p>
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-foreground mb-8 text-center">Onde pode ser aplicada</motion.h3>
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {['Vidros laterais', 'Vidro traseiro', 'Para-brisa', 'Teto-solar'].map((item) => (
                  <div key={item} className="glass-card rounded-xl p-6 text-center">
                    <CheckCircle className="w-6 h-6 text-accent mx-auto mb-3" />
                    <p className="text-foreground font-bold">{item}</p>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeInUp} className="text-center text-muted-foreground text-sm mt-6 font-light">Conforme ficha técnica. A aplicação (serviço técnico) deve ser realizada em Centro Autorizado INSULFILM™.</motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3 text-center">▪ Garantia Oficial</motion.p>
              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <p className="text-6xl md:text-7xl font-extrabold text-accent leading-none">5 anos</p>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold mt-2">Garantia Oficial</p>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-3"><FileCheck className="w-6 h-6 text-accent mt-1 shrink-0" /><h4 className="text-lg font-extrabold text-foreground">Garantia com Certificado Individual</h4></div>
                  <p className="text-muted-foreground font-light mb-3">Consulte condições.</p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Certificado emitido no ato do serviço técnico</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Número único de rastreamento</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <PdpFaq productName="INSULFILM™ Polariz" items={faqItems} variant="dark" />

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Reflexão térmica com estética polarizada.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">A INSULFILM™ Polariz encerra a Solar Performance Films com visual exclusivo e desempenho premium, com 5 anos de garantia.</motion.p>
              <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <Link to="/contato"><MessageCircle className="w-5 h-5" />Solicitar Orçamento</Link>
                </Button>
                <Button asChild variant="outline" className="font-bold text-lg px-8 py-6 rounded-xl">
                  <Link to="/automotivo/solar">Conhecer a linha completa <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AutomotivoSolarPolariz;
