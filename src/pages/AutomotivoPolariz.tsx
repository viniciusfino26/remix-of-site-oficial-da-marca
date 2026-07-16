import { useRef } from 'react';
import ParallaxBreak from '@/components/ParallaxBreak';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Layers, Shield, CheckCircle, MessageCircle, Eye, ArrowRight, Trophy, Thermometer, Palette, FileCheck, Sparkles } from 'lucide-react';
import productImage from '@/assets/auto-solar-polariz.png';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import PdpFaq from '@/components/PdpFaq';

const faqItems = [
  {
    question: 'Por que a Polariz Ultra é considerada o topo do portfólio?',
    answer: 'Porque a Polariz Ultra 05 chega a 70% de TSER, o recorde de rejeição de energia solar do portfólio automotivo INSULFILM™. Nenhuma outra linha rejeita mais energia solar hoje.',
  },
  {
    question: 'Quais tonalidades a Polariz Ultra oferece?',
    answer: 'Polariz Ultra 15 (15% de transmissão de luz, TSER 65%, privacidade Médio) e Polariz Ultra 05 (5% de luz, TSER 70%, Alto). Ambas com 75% de IR rejeitado e mais de 99% de UV.',
  },
  {
    question: 'Qual a construção da Polariz Ultra?',
    answer: 'Ultra Hybrid, construção híbrida metal-cerâmica que combina reflexão e absorção seletiva, com nitidez óptica Excelente · Ultra Definition.',
  },
  {
    question: 'Qual é a garantia oficial da Polariz Ultra?',
    answer: '10 anos, a cobertura mais abrangente do portfólio, com Certificado Individual emitido no ato do serviço técnico e número único de rastreamento. Consulte condições.',
  },
  {
    question: 'Qual a diferença entre a Polariz Ultra e a Polariz (Performance)?',
    answer: 'A Polariz (Solar Performance Films) é híbrida metalizada, com até 57% de TSER, 44% de IR e 5 anos de garantia. A Polariz Ultra (Solar Premium Films) é híbrida metal-cerâmica, atinge 70% de TSER, 75% de IR e 10 anos de garantia, patamar acima.',
  },
];

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { icon: Zap, label: 'Construção', value: 'Ultra Hybrid · Metal-Cerâmica' },
  { icon: Layers, label: 'Nitidez Óptica', value: 'Excelente · Ultra Definition' },
  { icon: Eye, label: 'Bloqueio UV', value: '>99%' },
  { icon: Shield, label: 'Garantia', value: '10 anos' },
];

const techTable = [
  { version: 'Polariz Ultra 15', privacy: 'Médio', light: '15%', ir: '75%', uv: '>99%', energy: '65%' },
  { version: 'Polariz Ultra 05', privacy: 'Alto', light: '05%', ir: '75%', uv: '>99%', energy: '70%' },
];

const problems = [
  { icon: Trophy, title: 'Quando a exigência é o teto do que existe', text: '70% de TSER é o recorde do portfólio INSULFILM™. A Polariz Ultra 05 representa o limite máximo do que a engenharia de películas solares oferece hoje, nenhuma outra linha rejeita mais energia solar.' },
  { icon: Thermometer, title: 'Rejeição térmica sem precisar reflexão pura', text: 'A construção híbrida metal-cerâmica combina reflexão e absorção seletiva: 75% de IR nas duas tonalidades, com desempenho térmico que se sente na pele desde os primeiros minutos.' },
  { icon: Palette, title: 'Identidade visual que se reconhece à distância', text: 'O acabamento polarizado exclusivo tem profundidade e reflexo controlado. Uma assinatura visual que eleva a presença do veículo, não confundível com nenhuma outra linha.' },
];

const benefits = [
  { title: '70% de TSER, o recorde do portfólio', text: 'Nenhuma outra linha automotiva da INSULFILM™ rejeita mais energia solar. A Polariz Ultra 05 representa o teto do que a engenharia de películas oferece hoje.' },
  { title: '75% de IR nas duas tonalidades', text: 'Tanto a Polariz Ultra 15 quanto a 05 entregam o mais alto índice de rejeição de infravermelho do portfólio, ao lado da Matrix.' },
  { title: 'Visual polarizado exclusivo', text: 'Acabamento imediatamente reconhecível: profundidade, reflexo controlado e presença que elevam a identidade do veículo a outro patamar.' },
  { title: '10 anos de garantia com Certificado Individual', text: 'Cobertura mais abrangente do portfólio, com número único de rastreamento, emitido no ato do serviço técnico.' },
];

const portfolio = {
  performance: [
    { name: 'INSULFILM™ RayStart', current: false },
    { name: 'INSULFILM™ RayPro', current: false },
    { name: 'INSULFILM™ Carbon', current: false },
    { name: 'INSULFILM™ Ceramic', current: false },
    { name: 'INSULFILM™ Polariz', current: false },
  ],
  premium: [
    { name: 'INSULFILM™ Matrix', current: false },
    { name: 'INSULFILM™ Polariz Ultra', current: true },
  ],
};

const AutomotivoPolariz = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    '@context': 'https://schema.org', '@type': 'Product',
    name: 'INSULFILM™ Polariz Ultra', brand: { '@type': 'Brand', name: 'INSULFILM™' },
    description: 'INSULFILM™ Polariz Ultra, construção híbrida metal-cerâmica, topo absoluto da Solar Premium Films. Até 70% de TSER, 75% de IR nas duas tonalidades e 10 anos de garantia.',
    url: 'https://insulfilm.com.br/automotivo/solar/polariz-ultra',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Construção', value: 'Ultra Hybrid, Metal-Cerâmica' },
      { '@type': 'PropertyValue', name: 'Nitidez Óptica', value: 'Excelente, Ultra Definition' },
      { '@type': 'PropertyValue', name: 'Bloqueio UV', value: '>99%' },
      { '@type': 'PropertyValue', name: 'Garantia', value: '10 anos' },
    ],
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Polariz Ultra | Solar Premium Films · Topo do Portfólio</title>
        <meta name="description" content="INSULFILM™ Polariz Ultra: híbrida metal-cerâmica com 70% de TSER, o recorde do portfólio. 75% de IR, visual polarizado exclusivo e 10 anos de garantia." />
        <meta property="og:title" content="INSULFILM™ Polariz Ultra | Solar Premium Films" />
        <meta property="og:description" content="O limite máximo da engenharia de películas solares automotivas." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://insulfilm.com.br/automotivo/solar/polariz-ultra" />
        <link rel="canonical" href="https://insulfilm.com.br/automotivo/solar/polariz-ultra" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <main>
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Trophy className="w-3.5 h-3.5 mr-2" /> Solar Premium Films · Ultra Híbrida
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">INSULFILM™ Polariz Ultra</motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70 font-light italic max-w-3xl mx-auto mb-4">O limite máximo da engenharia de películas solares automotivas.</motion.p>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-primary-foreground/60 font-light max-w-3xl mx-auto">★ Melhor Performance &nbsp;·&nbsp; Nitidez Óptica: Excelente · Ultra Definition</motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-14 max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">▪ O que esta linha resolve</motion.p>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-foreground font-light italic leading-relaxed">A Polariz Ultra é o teto absoluto do portfólio INSULFILM™: máxima rejeição solar, IR de ponta e um acabamento visual que nenhuma outra linha reproduz.</motion.p>
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
                <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-6 leading-tight">O topo absoluto da Solar Premium Films.</motion.h2>
                <motion.p variants={fadeInUp} className="text-primary-foreground/70 font-light leading-relaxed mb-4">A INSULFILM™ Polariz Ultra é película espectro seletiva híbrida, metalizada combinada à cerâmica, com estética polarizada e o máximo desempenho de retenção térmica do portfólio. Visual refinado, alta tecnologia e ultra rejeição de infravermelho.</motion.p>
                <motion.p variants={fadeInUp} className="text-primary-foreground/70 font-light leading-relaxed">Duas tonalidades (Polariz Ultra 15 e 05), até 70% de TSER, 75% de IR nas duas versões, mais de 99% de UV, nitidez Ultra Definition e 10 anos de garantia oficial com certificado individual.</motion.p>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
                <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">▪ Posição no portfólio</motion.p>
                <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-6">
                  <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">Solar Performance Films</p>
                  <ul className="space-y-2 mb-6">{portfolio.performance.map((it) => (
                    <li key={it.name} className="flex items-center gap-3 text-primary-foreground/50 font-light">
                      <span className="w-2 h-2 rounded-full bg-primary-foreground/30" />{it.name}
                    </li>))}
                  </ul>
                  <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">Solar Premium Films</p>
                  <ul className="space-y-2">{portfolio.premium.map((it) => (
                    <li key={it.name} className={`flex items-center gap-3 ${it.current ? 'text-primary-foreground font-bold' : 'text-primary-foreground/50 font-light'}`}>
                      <span className={`w-2 h-2 rounded-full ${it.current ? 'bg-accent' : 'bg-primary-foreground/30'}`} />
                      {it.name}{it.current && <Badge className="bg-accent/20 text-accent border-0 text-[10px] ml-2">VOCÊ ESTÁ AQUI</Badge>}
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden"><img src={productImage} alt="INSULFILM™ Polariz Ultra, Híbrida metal-cerâmica" className="w-full h-full object-cover rounded-2xl" /></div>
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
          { value: '70%', label: 'TSER (recorde)' },
          { value: '75%', label: 'IR Rejeitado' },
          { value: '10', label: 'Anos Garantia' },
        ]} />

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">▪ O que você recebe</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-10">O teto do portfólio, em desempenho e em estética.</motion.h2>
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
                  <p className="text-6xl md:text-7xl font-extrabold text-accent leading-none">10 anos</p>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold mt-2">Garantia Oficial</p>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-3"><FileCheck className="w-6 h-6 text-accent mt-1 shrink-0" /><h4 className="text-lg font-extrabold text-foreground">Garantia com Certificado Individual</h4></div>
                  <p className="text-muted-foreground font-light mb-3">Cobertura mais abrangente do portfólio. Consulte condições.</p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Certificado emitido no ato do serviço técnico</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Número único de rastreamento</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Cobertura contra desbotamento, mudança de cor e efeito neblina</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <PdpFaq productName="INSULFILM™ Polariz Ultra" items={faqItems} variant="dark" />

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">O topo do portfólio.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">A INSULFILM™ Polariz Ultra é o teto do que a engenharia de películas solares oferece, com 10 anos de garantia e a procedência da marca original.</motion.p>
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

export default AutomotivoPolariz;
