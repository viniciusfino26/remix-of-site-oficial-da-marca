import { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
  Shield, CheckCircle, Eye, Lock, Sun,
  Award, FileText, RefreshCw, MessageCircle, Swords,
  Layers, ArrowRight, BookOpen, Wrench, Zap,
  AlertTriangle, HeartCrack, UserX, Quote, Heart, ShieldAlert, Users, ShieldCheck, Sparkles
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ParallaxBreak from '@/components/ParallaxBreak';
import TLDR from '@/components/TLDR';
import ProductImagePlaceholder from '@/components/ProductImagePlaceholder';
import autoSkudoUltra from '@/assets/auto-skudoultra.jpg';
import { getPDPSchemas } from '@/lib/pdpFAQs';
import PDPFaqSection from '@/components/PDPFaqSection';

/* ── animation variants ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const emotionalFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

/* ── CountUp component ── */
const CountUp = ({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      setDisplay(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{display.toLocaleString('pt-BR')}{suffix}</span>;
};

/* ── Physical properties (dados oficiais do PDF) ── */
const physicalProps = [
  { label: 'Espessura Total', value: '24 mil / 609,6 micras / 0,609 mm', icon: Layers },
  { label: 'Força de Ruptura', value: '440 lbs/in (PLI) / 78,57 kgf/cm', icon: Shield },
  { label: 'Força de Punção', value: '375 lbs / 151,95 kg', icon: Wrench },
  { label: 'Resistência à Tensão', value: '32.000 PSI / 2.249,82 kgf/cm²', icon: Zap },
  { label: 'Alongamento na Ruptura', value: '200%', icon: ArrowRight },
  { label: 'Força de Arrancamento', value: '>5 lbs/in (PLI) / >892,89 g/cm', icon: Lock },
];

/* ── Danger cards ── */
const dangerCards = [
  { icon: AlertTriangle, title: 'O Agressor Insiste', desc: 'Diferente de uma abordagem rápida, quando não há possibilidade de evasão o criminoso insiste com violência repetida. O vidro comum cede no primeiro impacto.' },
  { icon: Swords, title: 'Armas Brancas Pesadas', desc: 'Facões, martelos e barras de ferro são usados com força total contra o vidro. A película SkudoUltra foi projetada para resistir a esse nível de agressão.' },
  { icon: HeartCrack, title: 'Investidas Repetidas', desc: 'O criminoso não para na primeira tentativa. Bate uma, duas, três vezes. O SkudoUltra mantém a barreira intacta mesmo após múltiplos impactos violentos.' },
  { icon: UserX, title: 'Crianças e Família em Risco', desc: 'No banco de trás, seus filhos estão na linha direta. Sem proteção de extrema segurança, não há barreira entre eles e um agressor determinado.' },
  { icon: Eye, title: 'O Marginal Desiste', desc: 'Conforme comprova o vídeo acima, após insistir repetidamente com violência extrema, o agressor desiste da investida. O SkudoUltra vence pelo cansaço.' },
];

/* ── Tech differentials ── */
const techDifferentials = [
  { icon: Layers, title: 'TETRA Laminação Industrial', desc: 'Estrutura multicamadas com TETRA laminação — um nível acima da tripla laminação do SkudoGuard. Resistência exponencialmente superior.' },
  { icon: Shield, title: 'Poliéster de Alta Densidade', desc: 'Polímeros de altíssima densidade que absorvem e distribuem a energia de impactos extremos, impedindo a penetração mesmo sob agressões repetidas.' },
  { icon: Zap, title: 'Adesivo Performance', desc: 'Adesivo especial com aderência máxima — mantém os fragmentos unidos e a barreira intacta mesmo sob impactos violentos e prolongados.' },
  { icon: Eye, title: 'Nitidez Óptica Cristal', desc: 'Apesar da proteção extrema, mantém transparência total e claridade visual sem distorções.' },
];

/* ── Comparativo ── */
const comparison = [
  { label: 'Laminação', guard: 'Tripla Laminação Industrial', ultra: 'TETRA Laminação Industrial' },
  { label: 'Resistência à Tensão', guard: '≥ 200 MPa', ultra: '32.000 PSI / 2.249,82 kgf/cm²' },
  { label: 'Força de Ruptura', guard: '≥ 450 N/25mm', ultra: '440 lbs/in (PLI) / 78,57 kgf/cm' },
  { label: 'Espessura', guard: '—', ultra: '24 mil / 609,6 micras' },
  { label: 'Força de Punção', guard: '≥ 110 N', ultra: '375 lbs / 151,95 kg' },
  { label: 'Tecnologia', guard: 'Tripla camada + adesivo performance', ultra: 'TETRA camada + adesivo extremo' },
];

const WHATSAPP_NUMBER = '5511936182746';

const SkudoUltra = () => {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });


  return (
    <>
      <Helmet>
        <title>INSULFILM™ SkudoUltra | Blindagem Extrema Contra Armas Brancas</title>
        <meta name="description" content="A proteção máxima para seus vidros laterais. Película de 24 mil com tetra laminação e 10 anos de garantia." />
        <meta property="og:title" content="INSULFILM™ SkudoUltra | Blindagem Extrema Contra Armas Brancas" />
        <meta property="og:description" content="A proteção máxima para seus vidros laterais. Película de 24 mil com tetra laminação e 10 anos de garantia." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={`https://www.insulfilm.com.br${autoSkudoUltra}`} />
        <meta property="og:url" content="https://www.insulfilm.com.br/skudo-ultra" />
        {(() => { const s = getPDPSchemas('skudo-ultra'); return s ? (<>
          <script type="application/ld+json">{JSON.stringify(s.breadcrumb)}</script>
          {s.productsByLang.map((p, i) => (<script key={`p-${i}`} type="application/ld+json">{JSON.stringify(p)}</script>))}
          {s.faqsByLang.map((f, i) => (<script key={i} type="application/ld+json">{JSON.stringify(f)}</script>))}
        </>) : null; })()}
      </Helmet>
    <main>
      {/* ═══ 1. HERO + VIDEO ═══ */}
      <section ref={heroRef} className="relative min-h-[70vh] flex flex-col items-center bg-carbon-gradient overflow-hidden">
        <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
        <motion.div
          className="container mx-auto px-4 pt-32 pb-8 relative z-10 text-center"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <ShieldCheck className="w-3.5 h-3.5 mr-2" />
                Película de Extrema Segurança
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              INSULFILM™ SkudoUltra
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
              Segurança superior contra ataques repetidos e agressivos para invasão
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10 w-full max-w-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-premium-lg border border-primary-foreground/10">
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/iiN1wWGiECw?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&controls=0&autoplay=1&mute=1&loop=1&playlist=iiN1wWGiECw"
                title="INSULFILM™ SkudoUltra — Teste de Resistência"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 z-10 cursor-default" />
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <TLDR
        question="O que é a película INSULFILM™ SkudoUltra?"
        answer="A INSULFILM™ SkudoUltra é a película de segurança automotiva mais robusta da marca, com 24 mil de espessura (609,6 micras) em construção tetra laminada, oferecendo proteção extrema contra ataques, vandalismo e tentativas de invasão."
        context="Recomendada para perfis de alto risco e veículos blindados leves, com 10 anos de garantia de fábrica."
        specs={[
          { label: 'Espessura', value: '24 mil (609,6 µm)' },
          { label: 'Construção', value: 'Tetra Laminação' },
          { label: 'Aplicação', value: 'Vidros Laterais' },
          { label: 'Garantia', value: '10 anos' },
        ]}
      />


        {/* ═══ IMAGEM DO PRODUTO ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ProductImagePlaceholder
              alt="Película de segurança automotiva INSULFILM™ SkudoUltra com tetra laminação 24 mil"
              icon={Shield}
              variant="light"
            />
          </div>
        </section>
      {/* ═══ 2. A REALIDADE DA VIOLÊNCIA ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={emotionalFade} className="flex justify-center mb-4">
              <ShieldAlert className="w-10 h-10 text-accent" />
            </motion.div>
            <motion.h2 variants={emotionalFade} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              A Realidade da Violência no Brasil
            </motion.h2>
            <motion.p variants={emotionalFade} className="text-primary-foreground/60 text-lg font-light max-w-2xl mx-auto">
              Quando o agressor insiste e não há como fugir, cada segundo de resistência do vidro decide tudo.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={emotionalFade}>
              <Card className="glass-card rounded-2xl text-center h-full">
                <CardContent className="p-8">
                  <p className="text-5xl md:text-6xl font-extrabold text-accent mb-3">
                    <CountUp target={47} suffix=" mil" />
                  </p>
                  <p className="text-primary-foreground/70 font-light text-sm">Latrocínios e roubos com violência registrados por ano</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={emotionalFade}>
              <Card className="glass-card rounded-2xl text-center h-full">
                <CardContent className="p-8">
                  <p className="text-5xl md:text-6xl font-extrabold text-accent mb-3">
                    <CountUp target={82} suffix="%" />
                  </p>
                  <p className="text-primary-foreground/70 font-light text-sm">Das invasões a veículos utilizam quebra do vidro como ponto de entrada</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={emotionalFade}>
              <Card className="glass-card rounded-2xl text-center h-full">
                <CardContent className="p-8">
                  <p className="text-5xl md:text-6xl font-extrabold text-accent mb-3">
                    <CountUp target={3} suffix="x" />
                  </p>
                  <p className="text-primary-foreground/70 font-light text-sm">Aumento de assaltos com arma branca nos últimos 5 anos</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={emotionalFade}>
              <Card className="glass-card rounded-2xl text-center h-full">
                <CardContent className="p-8">
                  <p className="text-5xl md:text-6xl font-extrabold text-accent mb-3">
                    <CountUp target={30} suffix="+" />
                  </p>
                  <p className="text-primary-foreground/70 font-light text-sm">Segundos de resistência contínua — tempo que leva o agressor a desistir</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-xs text-primary-foreground/60 mt-6 text-center italic"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={emotionalFade}
          >
            Fontes: SSP-SP, Fórum Brasileiro de Segurança Pública, Atlas da Violência 2024
          </motion.p>
        </div>
      </section>

      <ParallaxBreak minHeight="35vh" stats={[
        { value: '24 mil', label: 'Espessura' },
        { value: 'TETRA', label: 'Laminação' },
        { value: '10 anos', label: 'Garantia' },
      ]} />

      {/* ═══ 3. DESCRIÇÃO DO PRODUTO ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Proteção de Extrema Segurança
              </motion.h2>
              <motion.p variants={fadeInLeft} className="text-muted-foreground font-light leading-relaxed mb-4">
                Película premium de extrema segurança para blindagem dos vidros contra armas brancas pesadas. TETRA laminação industrial, adesivo performance com aderência máxima, polímeros de altíssima densidade. Após a quebra do vidro, a película SkudoUltra cria um escudo de difícil ruptura que resiste a investidas repetidas e prolongadas.
              </motion.p>

              <motion.div variants={fadeInLeft} className="mb-8">
                <Card className="rounded-2xl border-2 border-accent/20 shadow-premium bg-gradient-to-r from-accent/5 to-transparent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="w-8 h-8 text-accent/40 shrink-0 mt-1" />
                      <p className="text-foreground/80 font-light leading-relaxed italic">
                        "Se a sua expectativa é segurança superior em situações em que não há possibilidade de rápida evasão e o agressor insiste na abordagem, o INSULFILM™ SkudoUltra é a defesa projetada para isso. Com resistência muito acima do antivandalismo, enfrenta situações mais agressivas de tentativa de invasão com o uso de armas brancas. Reforça o vidro antes e, principalmente, depois da quebra - dificultando de forma significativa o acesso imediato. Torna vidro + película um escudo de difícil ruptura, mesmo diante de investidas repetidas. É a escolha para quem quer um desempenho de resistência além do padrão que o agressor espera encontrar."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Retenção de fragmentos — protege pele, rosto e olhos de todos os ocupantes',
                  'Não altera a originalidade do veículo — instalação discreta e profissional',
                  'Não interfere em sinais eletrônicos — pedágio, GPS e celular funcionam normalmente',
                  'Resistência extrema contra armas brancas pesadas — facões, martelos e barras de ferro',
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInLeft} className="flex items-start gap-3">
                    <motion.div className="mt-0.5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3, type: 'spring', stiffness: 300 }}>
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </motion.div>
                    <span className="text-foreground font-medium">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-premium">
                <img
                  src={autoSkudoUltra}
                  alt="Vidro automotivo após múltiplos impactos resistido pela película INSULFILM™ SkudoUltra — blindagem extrema contra armas brancas"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 4. O QUE ACONTECE EM SEGUNDOS ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={emotionalFade} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              O Que Acontece Quando o Agressor Insiste
            </motion.h2>
            <motion.p variants={emotionalFade} className="text-muted-foreground text-lg font-light max-w-3xl mx-auto">
              Quando não há como fugir, o criminoso armado insiste com violência extrema. Sem proteção adequada, o vidro cede rapidamente. Com o SkudoUltra, ele desiste.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {dangerCards.map((card, i) => (
              <motion.div key={i} variants={emotionalFade}>
                <Card className="card-premium-hover rounded-2xl h-full border-l-4 border-l-accent/60">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <card.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-foreground mb-1">{card.title}</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{card.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 5. PROTEJA QUEM VOCÊ AMA ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={emotionalFade} className="flex justify-center mb-4">
              <Heart className="w-10 h-10 text-accent" />
            </motion.div>
            <motion.h2 variants={emotionalFade} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Proteja Quem Você Ama
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInLeft}>
              <div className="aspect-[4/3] rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center">
                <div className="text-center text-primary-foreground/70">
                  <Users className="w-16 h-16 mx-auto mb-3" />
                  <p className="text-sm font-light">Foto ilustrativa — família</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <Card className="glass-card rounded-2xl border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <ShieldAlert className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-primary-foreground font-medium leading-relaxed mb-3">
                        Quando o agressor insiste e não desiste, o SkudoUltra é a barreira que separa sua família do perigo. O vídeo comprova: o marginal desiste de tanto insistir.
                      </p>
                      <p className="text-primary-foreground/60 font-light text-sm leading-relaxed">
                        Não é sobre o vidro. É sobre os olhos do seu filho no banco de trás. É sobre ter uma barreira de extrema resistência quando cada segundo decide tudo.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card rounded-2xl border-l-4 border-l-accent/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <p className="text-primary-foreground/80 font-light leading-relaxed">
                      A película não protege só o vidro. Protege a pele, os olhos e a vida de quem está dentro. Quando um criminoso armado insiste com violência extrema, o SkudoUltra é o escudo que não cede.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. CTA INTERMEDIÁRIO ═══ */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={emotionalFade} className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              O agressor desiste. Você não precisa.
            </motion.p>
            <motion.p variants={emotionalFade} className="text-muted-foreground font-light mb-6">
              Não espere uma situação extrema para descobrir que poderia ter protegido sua família.
            </motion.p>
            <motion.div variants={scaleIn}>
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-5 rounded-xl shadow-premium hover:shadow-premium-lg transition-all"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de proteger meu veículo e minha família com a película INSULFILM SkudoUltra.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quero proteção extrema
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 7. DIFERENCIAIS TÉCNICOS ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Diferenciais Técnicos</motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light max-w-2xl mx-auto">TETRA laminação industrial — um nível acima do SkudoGuard</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {techDifferentials.map((diff, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <motion.div whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                  <Card className="glass-card rounded-2xl h-full">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                        <diff.icon className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-primary-foreground mb-2">{diff.title}</h3>
                        <p className="text-sm text-primary-foreground/60 font-light leading-relaxed">{diff.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 8. PROPRIEDADES FÍSICAS ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Propriedades Físicas</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light">Dados oficiais — conformidade com normas ANSI 97, ASTM E-308, ASTM E-903, ASTM D-882, ASTM D-1044</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {physicalProps.map((prop, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <motion.div whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                  <Card className="card-premium-hover rounded-xl h-full border-t-2 border-t-transparent hover:border-t-accent/50">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                        <prop.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{prop.label}</p>
                      <p className="text-lg font-extrabold text-foreground">{prop.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 9. COMPARATIVO SkudoGuard vs SkudoUltra ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              SkudoGuard vs SkudoUltra
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light">
              Compare os dois níveis de proteção e escolha o ideal para sua necessidade
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            <Card className="rounded-2xl border-2 border-primary-foreground/10 shadow-premium-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-3 bg-primary-foreground/5 border-b border-primary-foreground/10">
                  <div className="p-4 md:p-6">
                    <span className="text-sm font-bold text-primary-foreground/60 uppercase tracking-wider">Especificação</span>
                  </div>
                  <div className="p-4 md:p-6 text-center">
                    <span className="text-sm font-bold text-primary-foreground/60 uppercase tracking-wider">SkudoGuard</span>
                  </div>
                  <div className="p-4 md:p-6 text-center bg-accent/5">
                    <span className="text-sm font-bold text-accent uppercase tracking-wider">SkudoUltra</span>
                  </div>
                </div>

                {comparison.map((row, i) => (
                  <motion.div
                    key={i}
                    className="grid grid-cols-3 border-b border-primary-foreground/10 last:border-b-0"
                    variants={fadeInUp}
                  >
                    <div className="p-4 md:p-6 flex items-center">
                      <span className="text-sm font-bold text-primary-foreground">{row.label}</span>
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-center">
                      <span className="text-sm text-primary-foreground/60">{row.guard}</span>
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-center bg-accent/5">
                      <span className="text-sm font-bold text-accent">{row.ultra}</span>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══ 10. GARANTIAS ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Garantia</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.div variants={fadeInLeft}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="card-premium-hover rounded-2xl h-full border-t-2 border-t-accent/30">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4"><Award className="w-6 h-6 text-accent" /></div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">Garantia do Produto</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">10 anos de garantia contra defeitos de fabricação da película SkudoUltra.</p>
                    <ul className="space-y-2">
                      {['Falha adesiva', 'Delaminação', 'Rachadura espontânea'].map(k => (
                        <li key={k} className="flex items-start gap-2 text-xs text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />{k}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="card-premium-hover rounded-2xl h-full border-t-2 border-t-accent/30">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4"><FileText className="w-6 h-6 text-accent" /></div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">Garantia do Serviço</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">Cobertura completa do serviço de instalação profissional.</p>
                    <ul className="space-y-2">
                      {['Descolamento', 'Bolhas'].map(k => (
                        <li key={k} className="flex items-start gap-2 text-xs text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />{k}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="card-premium-hover rounded-2xl h-full border-2 border-accent/30 shadow-premium">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4"><RefreshCw className="w-6 h-6 text-accent" /></div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">Reposição Gratuita</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">Reposição gratuita das películas nos vidros móveis das portas laterais.</p>
                    <p className="text-xs text-accent font-bold">Consulte condições e cobertura com seu instalador autorizado.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 11. GLOSSÁRIO TÉCNICO ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-3"><BookOpen className="w-8 h-8 text-accent" /></motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Glossário Técnico</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="mech" className="glass-card rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left font-bold text-primary-foreground hover:no-underline py-5">Propriedades Mecânicas</AccordionTrigger>
                <AccordionContent className="text-primary-foreground/60 font-light leading-relaxed pb-5">
                  Resistência à Tensão: capacidade do material de suportar forças de tração sem romper. Força de Ruptura: carga máxima antes do rompimento total. Força de Arrancamento: resistência do adesivo ao descolamento. Alongamento na Ruptura: elasticidade antes da falha. Força de Punção: resistência a objetos pontiagudos que tentam perfurar a película.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tests" className="glass-card rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left font-bold text-primary-foreground hover:no-underline py-5">Métodos de Teste</AccordionTrigger>
                <AccordionContent className="text-primary-foreground/60 font-light leading-relaxed pb-5">
                  ANSI 97: padrão de segurança para películas de proteção. ASTM E-308: método para cálculo de valores de cor. ASTM E-903: método para propriedades solares integradas de materiais. ASTM D-882: método para propriedades de tração de filmes plásticos finos. ASTM D-1044: método para resistência à abrasão de superfícies transparentes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ═══ 12. APLICABILIDADE — LINHAS SOLARES ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-8 text-center">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-extrabold text-primary-foreground mb-3">Compatível com todas as linhas solares automotivas</h3>
              <p className="text-primary-foreground/60 font-light text-sm mb-6 max-w-2xl mx-auto">
                A SkudoUltra pode ser combinada com todas as nossas linhas de proteção solar automotiva para oferecer proteção completa:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'RayStart', gen: 'Solar Performance · Basic Film Pigmentada', href: '/automotivo/solar/raystart' },
                  { name: 'Eclipse', gen: '3ª Geração — Carbono', href: '/automotivo/solar/eclipse' },
                  { name: 'Vip', gen: '3ª Geração evoluída — Carbono-Cerâmica', href: '/automotivo/solar/vip' },
                  { name: 'Matrix', gen: '4ª Geração — Cerâmica', href: '/automotivo/solar/matrix' },
                  { name: 'Polariz Ultra', gen: '5ª Geração — Cerâmica Metalizada', href: '/automotivo/solar/polariz-ultra' },
                ].map((line) => (
                  <a key={line.name} href={line.href} className="group">
                    <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors px-4 py-2 text-sm cursor-pointer">
                      <Sun className="w-3.5 h-3.5 mr-2" />
                      <span className="font-bold">{line.name}</span>
                      <span className="hidden sm:inline text-accent/60 ml-1.5 font-light">— {line.gen}</span>
                    </Badge>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 13. CTA FINAL ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Proteja Sua Família com Extrema Segurança</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">O agressor desiste. Você não. Fale com um especialista e instale o SkudoUltra hoje.</motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a película INSULFILM SkudoUltra de extrema segurança.')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Especialista
                </a>
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xs text-muted-foreground mt-6 font-light">Atendimento via WhatsApp. Resposta rápida de segunda a sábado.</motion.p>
          </motion.div>
        </div>
      </section>
      <PDPFaqSection slug="skudo-ultra" />
    </main>
    </>
  );
};

export default SkudoUltra;
