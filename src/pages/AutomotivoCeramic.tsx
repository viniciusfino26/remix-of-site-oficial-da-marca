import { useRef } from 'react';
import ParallaxBreak from '@/components/ParallaxBreak';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Layers, Shield, CheckCircle, MessageCircle, Eye, ArrowRight, Sun, Thermometer, CloudFog, FileCheck, Wifi } from 'lucide-react';
import productImage from '@/assets/auto-solar-matrix.png';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import PdpFaq from '@/components/PdpFaq';

const faqItems = [
  {
    question: 'Quanto de infravermelho a Ceramic rejeita?',
    answer: 'Mais de 85% em todas as variantes — Ceramic 35, Ceramic 20 e Ceramic 05. A performance térmica não depende da tonalidade: a variante clara entrega o mesmo patamar de IR rejeitado que a escura.',
  },
  {
    question: 'Qual a diferença da Ceramic para a Carbon e para películas pigmentadas?',
    answer: 'A Ceramic usa construção nanocerâmica (Advanced Plus) com alta rejeição de infravermelho (>85%) e alta estabilidade de cor. Diferente da pigmentação simples e do carbono, mantém o tom neutro por mais tempo, sem virar cor e sem efeito neblina.',
  },
  {
    question: 'Qual é a garantia oficial da Ceramic?',
    answer: '4 anos, com Certificado Individual emitido no ato do serviço técnico, número único de rastreamento e cobertura contra desbotamento e mudança de cor. Consulte condições.',
  },
  {
    question: 'A Ceramic interfere em GPS, celular ou tag de pedágio?',
    answer: 'Não. A construção é nanocerâmica, sem metalização — celular, GPS, rádio e tag de pedágio funcionam normalmente após o serviço técnico.',
  },
  {
    question: 'Qual o bloqueio UV e a nitidez óptica da Ceramic?',
    answer: '99% de bloqueio UV em todas as variantes e nitidez óptica Alta · High Definition, com acabamento neutro e não refletivo.',
  },
];

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { icon: Zap, label: 'Construção', value: 'Advanced Plus · Nanocerâmica' },
  { icon: Layers, label: 'Nitidez Óptica', value: 'Alta · High Definition' },
  { icon: Eye, label: 'Bloqueio UV', value: '99%' },
  { icon: Shield, label: 'Garantia', value: '4 anos' },
];

const techTable = [
  { version: 'Ceramic 35', privacy: 'Médio', light: '35%', ir: '>85%', uv: '99%', energy: '54%' },
  { version: 'Ceramic 20', privacy: 'Médio Alto', light: '20%', ir: '>85%', uv: '99%', energy: '58%' },
  { version: 'Ceramic 05', privacy: 'Alto', light: '05%', ir: '>85%', uv: '99%', energy: '63%' },
];

const problems = [
  { icon: Thermometer, title: 'Calor intenso que o ar-condicionado não vence sozinho', text: 'Em trajetos longos ou com sol de frente, o calor entra mais rápido do que o ar-condicionado compensa. Com mais de 85% de rejeição de infravermelho, o Ceramic barra a maior parte do calor antes que ele chegue ao habitáculo.' },
  { icon: CloudFog, title: 'Cor que envelhece e perde o acabamento', text: 'A construção nanocerâmica garante estabilidade de cor superior à pigmentação simples e ao carbono, mantendo o tom neutro por mais tempo, sem virar cor e sem efeito neblina.' },
  { icon: Sun, title: 'Exposição diária que afeta o bem-estar dos ocupantes', text: 'Com 99% de bloqueio UV e alta rejeição de infravermelho, o Ceramic cria conforto térmico real para motorista e passageiros, com estabilidade de cor ao longo dos anos.' },
];

const benefits = [
  { title: 'Mais de 85% de rejeição de infravermelho', text: 'O Ceramic entrega alta rejeição de calor em todas as variantes, do Ceramic 35 ao Ceramic 05. É conforto térmico perceptível na pele desde os primeiros minutos de trajeto.' },
  { title: 'Conforto térmico sem escurecer demais', text: 'A performance térmica não depende da tonalidade: a variante clara entrega o mesmo patamar de IR rejeitado que a escura. Liberdade de escolha do tom.' },
  { title: 'Nitidez óptica High Definition, visual neutro', text: 'Clareza de visão superior, sem efeito neblina, com acabamento neutro e não refletivo que não altera a identidade do veículo.' },
  { title: 'Não interfere em eletrônicos', text: 'Construção nanocerâmica, sem metalização. Celular, GPS, rádio e tag de pedágio funcionam normalmente após o serviço técnico.' },
];

const portfolio = {
  performance: [
    { name: 'INSULFILM™ RayStart', current: false },
    { name: 'INSULFILM™ RayPro', current: false },
    { name: 'INSULFILM™ Carbon', current: false },
    { name: 'INSULFILM™ Ceramic', current: true },
    { name: 'INSULFILM™ Polariz', current: false },
  ],
  premium: [
    { name: 'INSULFILM™ Matrix', current: false },
    { name: 'INSULFILM™ Polariz Ultra', current: false },
  ],
};

const AutomotivoCeramic = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    '@context': 'https://schema.org', '@type': 'Product',
    name: 'INSULFILM™ Ceramic', brand: { '@type': 'Brand', name: 'INSULFILM™' },
    description: 'INSULFILM™ Ceramic — nanocerâmica da Solar Performance Films. Mais de 85% de IR rejeitado em todas as variantes, 99% UV, nitidez High Definition e 4 anos de garantia.',
    url: 'https://insulfilm.com.br/automotivo/solar/ceramic',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Construção', value: 'Advanced Plus Film — Nanocerâmica' },
      { '@type': 'PropertyValue', name: 'Nitidez Óptica', value: 'Alta — High Definition' },
      { '@type': 'PropertyValue', name: 'Bloqueio UV', value: '99%' },
      { '@type': 'PropertyValue', name: 'Garantia', value: '4 anos' },
    ],
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Ceramic | Solar Performance Films · Nanocerâmica</title>
        <meta name="description" content="INSULFILM™ Ceramic: nanocerâmica com mais de 85% de rejeição de infravermelho em todas as tonalidades, 99% de UV, nitidez High Definition e 4 anos de garantia." />
        <meta property="og:title" content="INSULFILM™ Ceramic | Solar Performance Films" />
        <meta property="og:description" content="Quando o cliente procura cerâmica, é aqui que o calor para de entrar." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://insulfilm.com.br/automotivo/solar/ceramic" />
        <link rel="canonical" href="https://insulfilm.com.br/automotivo/solar/ceramic" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <main>
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Sun className="w-3.5 h-3.5 mr-2" /> Solar Performance Films · Nanocerâmica
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">INSULFILM™ Ceramic</motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70 font-light italic max-w-3xl mx-auto mb-4">Quando o cliente procura cerâmica, é aqui que o calor para de entrar.</motion.p>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-primary-foreground/60 font-light max-w-3xl mx-auto">★ Alta Rejeição Térmica &nbsp;·&nbsp; Nitidez Óptica: Alta · High Definition</motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-14 max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">▪ O que esta linha resolve</motion.p>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-foreground font-light italic leading-relaxed">A cerâmica é o nome que o mercado associa a conforto térmico. O Ceramic entrega o que a palavra promete: mais de 85% de rejeição de infravermelho, com visual neutro.</motion.p>
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
                <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-6 leading-tight">A nanocerâmica que rejeita calor sem escurecer demais.</motion.h2>
                <motion.p variants={fadeInUp} className="text-primary-foreground/70 font-light leading-relaxed mb-4">A INSULFILM™ Ceramic é película de alta performance desenvolvida com avançada tecnologia nanocerâmica. Proporciona elevada rejeição de calor, excelente conforto térmico e alta estabilidade de cor ao longo dos anos, com visual neutro e não refletivo.</motion.p>
                <motion.p variants={fadeInUp} className="text-primary-foreground/70 font-light leading-relaxed">Três tonalidades (Ceramic 35, 20 e 05), rejeição superior a 85% de IR em todas elas, 99% de UV, nitidez óptica High Definition e 4 anos de garantia oficial com certificado individual.</motion.p>
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden"><img src={productImage} alt="INSULFILM™ Ceramic — Película nanocerâmica" className="w-full h-full object-cover rounded-2xl" /></div>
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
          { value: '>85%', label: 'IR Rejeitado' },
          { value: '99%', label: 'Bloqueio UV' },
          { value: '4', label: 'Anos Garantia' },
        ]} />

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">▪ O que você recebe</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-10">Cerâmica de verdade, com desempenho que se sente.</motion.h2>
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
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-3 gap-4">
                {['Vidros laterais', 'Vidro traseiro', 'Para-brisa'].map((item) => (
                  <div key={item} className="glass-card rounded-xl p-6 text-center">
                    <CheckCircle className="w-6 h-6 text-accent mx-auto mb-3" />
                    <p className="text-foreground font-bold">{item}</p>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeInUp} className="text-center text-muted-foreground text-sm mt-6 font-light">Conforme ficha técnica. A aplicação (serviço técnico) deve ser realizada em Centro Autorizado INSULFILM™.</motion.p>
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <Wifi className="w-4 h-4 text-accent" /><span>Não interfere em GPS, celular, rádio ou tag de pedágio</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3 text-center">▪ Garantia Oficial</motion.p>
              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <p className="text-6xl md:text-7xl font-extrabold text-accent leading-none">4 anos</p>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold mt-2">Garantia Oficial</p>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-3"><FileCheck className="w-6 h-6 text-accent mt-1 shrink-0" /><h4 className="text-lg font-extrabold text-foreground">Garantia com Certificado Individual</h4></div>
                  <p className="text-muted-foreground font-light mb-3">Consulte condições.</p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Certificado emitido no ato do serviço técnico</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Número único de rastreamento</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0" /> Cobertura contra desbotamento e mudança de cor</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Nanocerâmica com desempenho térmico de verdade.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">A INSULFILM™ Ceramic é o topo da Solar Performance Films — com 4 anos de garantia e a procedência da marca original.</motion.p>
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

export default AutomotivoCeramic;
