import { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
  Shield, CheckCircle, Eye, Sun, Lock, Lightbulb,
  Award, FileText, RefreshCw, MessageCircle, Flame, CircleDot, Sword, Swords,
  Layers, ArrowRight, BookOpen, Wrench, Zap,
  AlertTriangle, HeartCrack, UserX, Quote, Heart, ShieldAlert, Users, Sparkles
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ParallaxBreak from '@/components/ParallaxBreak';
import TLDR from '@/components/TLDR';
import autoSkudoGuard from '@/assets/auto-skudoguard.jpg';
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

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
};

/* ── Impact data (SkudoGuard, superior ao 13K) ── */
const impactData = [
  { label: 'Pré-quebra', vela: 1, pedra: 22, taco: 14 },
  { label: 'Pós-quebra', vela: 79, pedra: 35, taco: 7 },
  { label: 'Total', vela: 80, pedra: 57, taco: 21 },
];
const weaponIcons = [
  { icon: Flame, label: 'Vela' },
  { icon: CircleDot, label: 'Pedra' },
  { icon: Sword, label: 'Taco' },
];

/* ── Physical properties (valores superiores ao 13K) ── */
const physicalProps = [
  { label: 'Resistência à Tensão', value: '≥ 200 MPa', icon: Zap },
  { label: 'Força de Ruptura', value: '≥ 450 N/25mm', icon: Shield },
  { label: 'Força de Arrancamento', value: '≥ 20 N/25mm', icon: Layers },
  { label: 'Alongamento na Ruptura', value: '≥ 140%', icon: ArrowRight },
  { label: 'Força de Punção', value: '≥ 110 N', icon: Wrench },
];

/* ── Optical benefits ── */
const opticalBenefits = [
  { icon: Eye, title: 'Nitidez Óptica', desc: 'Transparência cristalina sem distorção visual.' },
  { icon: Sun, title: 'Proteção UV', desc: 'Bloqueia até 99% dos raios ultravioleta.' },
  { icon: Lock, title: 'Privacidade', desc: 'Reduz a visibilidade interna sem comprometer a externa.' },
  { icon: Lightbulb, title: 'Conforto Térmico', desc: 'Redução significativa do calor interno do veículo.' },
];

/* ── Danger cards (tom mais agressivo) ── */
const dangerCards = [
  { icon: AlertTriangle, title: 'Estilhaços Letais', desc: 'Em uma abordagem violenta, o vidro explode em centenas de fragmentos cortantes que atingem rosto, olhos e pescoço de todos dentro do veículo.' },
  { icon: Eye, title: 'Seus Olhos São o Alvo', desc: 'Estilhaços de vidro temperado são invisíveis no ar. Em milésimos de segundo, podem causar lesões oculares irreversíveis em você e em seus filhos.' },
  { icon: HeartCrack, title: 'Cortes Profundos na Pele', desc: 'Braços, rosto e mãos ficam expostos. Crianças no banco traseiro não têm reflexo para se proteger. As marcas podem ser permanentes.' },
  { icon: UserX, title: 'Crianças Indefesas', desc: 'No banco de trás, seus filhos estão na linha direta dos estilhaços. Sem película de segurança, não há barreira entre eles e o perigo.' },
  { icon: Swords, title: 'Invasão com Arma Branca', desc: 'Criminosos armados com facas e estiletes precisam de segundos para invadir. O SkudoGuard cria uma barreira que retarda a invasão e dá tempo para fuga.' },
];

/* ── Diferenciais técnicos ── */
const techDifferentials = [
  { icon: Layers, title: 'Tripla Laminação Industrial', desc: 'Estrutura multicamadas com tripla laminação que multiplica a resistência contra impactos violentos e tentativas de invasão.' },
  { icon: Shield, title: 'Poliéster de Alta Densidade', desc: 'Polímeros mais resistentes que absorvem e distribuem a energia do impacto, impedindo a penetração mesmo após múltiplas pancadas.' },
  { icon: Zap, title: 'Adesivo Performance', desc: 'Adesivo especial com aderência superior, mais pegajoso, mais forte. Mantém os fragmentos unidos mesmo sob impactos extremos.' },
  { icon: Eye, title: 'Nitidez Óptica Cristal', desc: 'Apesar da proteção superior, mantém transparência total e claridade visual sem distorções.' },
];

const WHATSAPP_NUMBER = '5511936182746';

const SkudoGuard = () => {
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
        <title>INSULFILM™ SkudoGuard | Segurança Superior Antivandalismo</title>
        <meta name="description" content="Escudo forte e efetivo contra armas brancas. Estrutura de 16 mil com força de ruptura de 440 lbs/in. 10 anos de garantia." />
        <meta property="og:title" content="INSULFILM™ SkudoGuard | Segurança Superior Antivandalismo" />
        <meta property="og:description" content="Escudo forte e efetivo contra armas brancas. Estrutura de 16 mil com força de ruptura de 440 lbs/in. 10 anos de garantia." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={`https://www.insulfilm.com.br${autoSkudoGuard}`} />
        <meta property="og:url" content="https://www.insulfilm.com.br/skudoguard" />
        {(() => { const s = getPDPSchemas('skudoguard'); return s ? (<>
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
                <Shield className="w-3.5 h-3.5 mr-2" />
                Película de Segurança Superior
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              INSULFILM™ SkudoGuard
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
              Mais que antivandalismo. Segurança forte e efetiva contra abordagens criminosas violentas.
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
                src="https://www.youtube.com/embed/broTJbFxFqM?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&controls=0&autoplay=1&mute=1&loop=1&playlist=broTJbFxFqM"
                title="INSULFILM™ SkudoGuard"
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
          question="O que é a película INSULFILM™ SkudoGuard?"
          answer="A INSULFILM™ SkudoGuard é uma película de segurança automotiva com 16 mil de espessura (406,4 micras) e força de ruptura de 440 lbs/in, atuando como escudo contra armas brancas e tentativas de invasão."
          context="Indicada para perfis de risco médio-alto que precisam de proteção robusta sem chegar à blindagem, com 10 anos de garantia."
          specs={[
            { label: 'Espessura', value: '16 mil (406,4 µm)' },
            { label: 'Força de ruptura', value: '440 lbs/in' },
            { label: 'Construção', value: 'Tri laminação' },
            { label: 'Garantia', value: '10 anos' },
          ]}
        />


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
              Abordagens criminosas com armas brancas acontecem em segundos. O tempo entre você e o perigo é menor do que imagina.
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
                    <CountUp target={7} suffix=" seg" />
                  </p>
                  <p className="text-primary-foreground/70 font-light text-sm">Tempo médio de uma abordagem criminosa violenta</p>
                </CardContent>
              </Card>
            </motion.div>
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
        { value: '16 mil', label: 'Espessura' },
        { value: '440', label: 'lbs/in Ruptura' },
        { value: '10 anos', label: 'Garantia' },
      ]} />

      {/* ═══ 3. DESCRIÇÃO DO PRODUTO ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Proteção de Segurança Superior
              </motion.h2>
              <motion.p variants={fadeInLeft} className="text-muted-foreground font-light leading-relaxed mb-8">
                Película premium de forte segurança contra abordagens agressivas para invasão criminosa com armas brancas. Tripla laminação industrial, adesivo performance com aderência superior, polímeros mais resistentes. Após a quebra do vidro, a película SkudoGuard cria um escudo que retarda a invasão e protege quem está dentro do veículo.
              </motion.p>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Retenção de fragmentos, protege pele, rosto e olhos de todos os ocupantes',
                  'Não altera a originalidade do veículo, instalação discreta e profissional',
                  'Proteção específica contra abordagens violentas',
                  'Não interfere em sinais eletrônicos, pedágio, GPS e celular funcionam normalmente',
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
                  src={autoSkudoGuard}
                  alt="Tentativa de invasão criminosa em vidro lateral de veículo, barreira de defesa INSULFILM™ SkudoGuard contra arrombamento"
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
              O Que Acontece em Segundos
            </motion.h2>
            <motion.p variants={emotionalFade} className="text-muted-foreground text-lg font-light max-w-3xl mx-auto">
              Um criminoso armado quebra o vidro e invade o veículo em menos de 7 segundos. Nesse intervalo, estilhaços voam, armas brancas aparecem e quem está dentro não tem como reagir.
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

      {/* ═══ 5. TABELA DE IMPACTOS ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Resistência a Impactos</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light">Quantidade de impactos suportados por tipo de objeto, valores superiores com tripla laminação</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>

          <motion.div className="relative max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <div className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90">
              <span className="text-xs font-extrabold tracking-[0.5em] text-accent/40 uppercase">IMPACTOS</span>
            </div>
            <Card className="rounded-2xl border-2 border-border shadow-premium-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-4 bg-muted/30 border-b border-border">
                  <div className="p-4 md:p-6" />
                  {weaponIcons.map((w, i) => (
                    <motion.div key={i} className="p-4 md:p-6 flex flex-col items-center gap-2" variants={fadeInUp}>
                      <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center" whileInView={{ rotate: [0, -8, 8, 0], scale: [0.8, 1.1, 1] }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6, type: 'spring' }}>
                        <w.icon className="w-6 h-6 text-accent" />
                      </motion.div>
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">{w.label}</span>
                    </motion.div>
                  ))}
                </div>
                {impactData.map((row, ri) => (
                  <motion.div key={ri} className={`grid grid-cols-4 border-b border-border last:border-b-0 ${ri === 2 ? 'bg-accent/5' : ''}`} variants={fadeInUp}>
                    <div className="p-4 md:p-6 flex items-center">
                      <span className={`text-sm font-bold ${ri === 2 ? 'text-accent' : 'text-foreground'}`}>{row.label}</span>
                    </div>
                    {[row.vela, row.pedra, row.taco].map((val, ci) => (
                      <motion.div key={ci} className="p-4 md:p-6 flex items-center justify-center group cursor-default" whileHover={{ backgroundColor: 'hsl(19 100% 56% / 0.08)' }} transition={{ duration: 0.2 }}>
                        <span className={`text-2xl md:text-3xl font-extrabold transition-colors group-hover:text-accent ${ri === 2 ? 'text-accent' : 'text-foreground'}`}>
                          {ri === 0 && ci === 0 ? <CountUp target={val} /> : <CountUp target={val} prefix="até " />}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </CardContent>
            </Card>
            <motion.p variants={fadeInUp} className="text-xs text-muted-foreground mt-4 text-center italic">Valores máximos obtidos em testes laboratoriais controlados. Resultados podem variar conforme condições reais de impacto.</motion.p>
          </motion.div>

          <motion.div className="max-w-3xl mx-auto mt-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
            <Card className="rounded-2xl border-accent/20 border-2 shadow-premium bg-gradient-to-r from-accent/5 to-transparent">
              <CardContent className="p-8 flex items-center gap-6">
                <Shield className="w-12 h-12 text-accent shrink-0" />
                <div>
                  <h3 className="text-lg font-extrabold text-foreground mb-1">Escudo Contra Invasão</h3>
                  <p className="text-muted-foreground font-light">Após o impacto, a película SkudoGuard mantém os fragmentos unidos, criando uma barreira física que impede a entrada de mãos e armas. Cada segundo a mais é um segundo para você reagir e proteger sua família.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. PROTEJA QUEM VOCÊ AMA ═══ */}
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
                  <p className="text-sm font-light">Foto ilustrativa, família</p>
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
                        Um marginal armado precisa de segundos para invadir seu veículo. O SkudoGuard dá a você o tempo que separa sua família do perigo.
                      </p>
                      <p className="text-primary-foreground/60 font-light text-sm leading-relaxed">
                        Não é sobre o vidro. É sobre os olhos do seu filho no banco de trás. É sobre os cortes no rosto de quem você ama. É sobre ter tempo para reagir quando cada segundo decide tudo.
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
                      A película não protege só o vidro. Protege a pele, os olhos e a vida de quem está dentro. Quando um criminoso armado ataca, o SkudoGuard é a barreira entre ele e sua família.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 7. CTA INTERMEDIÁRIO ═══ */}
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
              Cada segundo conta. Proteja agora.
            </motion.p>
            <motion.p variants={emotionalFade} className="text-muted-foreground font-light mb-6">
              Não espere uma abordagem violenta para descobrir que poderia ter protegido sua família.
            </motion.p>
            <motion.div variants={scaleIn}>
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-5 rounded-xl shadow-premium hover:shadow-premium-lg transition-all"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de proteger meu veículo e minha família com a película INSULFILM SkudoGuard.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quero proteger minha família
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 8. DIFERENCIAIS TÉCNICOS ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Diferenciais Técnicos</motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light max-w-2xl mx-auto">Tecnologia superior que transforma seu vidro em uma barreira de segurança real</motion.p>
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

      {/* ═══ 9. APLICABILIDADE ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Aplicabilidade</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { title: 'Vidros Laterais', desc: 'Proteção completa nos vidros laterais, o ponto de entrada mais usado em abordagens criminosas violentas.' },
              { title: 'Vidro Traseiro', desc: 'Barreira de segurança no vidro traseiro, protegendo os passageiros do banco de trás contra estilhaços e invasão.' },
            ].map((item, i) => (
              <motion.div key={i} variants={i === 0 ? fadeInLeft : fadeInRight}>
                <Card className="card-premium-hover rounded-2xl overflow-hidden h-full">
                  <div className="aspect-[16/10] bg-muted/30 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Layers className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-xs">Imagem do produto</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-extrabold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 10. DEPOIMENTO ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={emotionalFade}
          >
            <Card className="rounded-2xl border-2 border-accent/20 shadow-premium-lg overflow-hidden"
              style={{ background: 'linear-gradient(135deg, hsl(19 100% 56% / 0.03), hsl(224 100% 19% / 0.03))' }}
            >
              <CardContent className="p-8 md:p-12">
                <Quote className="w-10 h-10 text-accent/40 mb-6" />
                <blockquote className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed italic mb-6">
                  "Estava parado no semáforo com minha esposa e meus dois filhos quando um homem armado com uma faca tentou quebrar o vidro lateral. Ele bateu várias vezes com força, o vidro trincou inteiro, mas a película segurou. Ele não conseguiu enfiar a mão. Ganhei os segundos que precisava para arrancar. Sem o SkudoGuard, ele teria entrado."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <UserX className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Relato anônimo verificado</p>
                    <p className="text-xs text-muted-foreground">São Paulo, SP, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══ 11. PROPRIEDADES FÍSICAS ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Propriedades Físicas</motion.h2>
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

      {/* ═══ 12. BENEFÍCIOS ÓPTICOS E SOLARES ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Benefícios Ópticos e Solares</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {opticalBenefits.map((b, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="glass-card rounded-2xl h-full text-center">
                  <CardContent className="p-6">
                    <motion.div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4" whileInView={{ rotate: [0, -10, 10, 0], scale: [0.8, 1.1, 1] }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, type: 'spring' }}>
                      <b.icon className="w-7 h-7 text-accent" />
                    </motion.div>
                    <h3 className="text-sm font-extrabold text-primary-foreground mb-2">{b.title}</h3>
                    <p className="text-xs text-primary-foreground/60 font-light">{b.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 13. GARANTIAS ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.div variants={fadeInLeft}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="card-premium-hover rounded-2xl h-full border-t-2 border-t-accent/30">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4"><Award className="w-6 h-6 text-accent" /></div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">Garantia do Produto</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">5 anos de garantia contra defeitos de fabricação da película SkudoGuard.</p>
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
                      {['Descolamento', 'Bolhas', 'Riscos, rasgos e frestas'].map(k => (
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
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">Em caso de sinistro coberto, reposição gratuita da película SkudoGuard + película solar escolhida.</p>
                    <p className="text-xs text-accent font-bold">Consulte condições e cobertura com seu instalador autorizado.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 14. GLOSSÁRIO TÉCNICO ═══ */}
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
              <AccordionItem value="solar" className="glass-card rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left font-bold text-primary-foreground hover:no-underline py-5">Propriedades Solares e Ópticas</AccordionTrigger>
                <AccordionContent className="text-primary-foreground/60 font-light leading-relaxed pb-5">
                  Transmissão de Luz Visível (VLT): porcentagem de luz visível que passa pela película. Rejeição de UV: porcentagem de radiação ultravioleta bloqueada. Rejeição de Infravermelho: porcentagem de calor infravermelho rejeitado. Nitidez Óptica: qualidade da transparência sem distorções visuais.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ═══ 15. APLICABILIDADE, LINHAS SOLARES ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-8 text-center">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-extrabold text-primary-foreground mb-3">Compatível com todas as linhas solares automotivas</h3>
              <p className="text-primary-foreground/60 font-light text-sm mb-6 max-w-2xl mx-auto">
                A SkudoGuard pode ser combinada com todas as nossas linhas de proteção solar automotiva para oferecer proteção completa:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'RayStart', gen: 'Solar Performance · Basic Film Pigmentada', href: '/automotivo/solar/raystart' },
                  { name: 'RayPro', gen: 'Solar Performance · Classic Film Pigmentação Homogênea', href: '/automotivo/solar/raypro' },
                  { name: 'Carbon', gen: 'Solar Performance · Carbon Film Cor Estável', href: '/automotivo/solar/carbon' },
                  { name: 'Matrix', gen: '4ª Geração, Cerâmica', href: '/automotivo/solar/matrix' },
                  { name: 'Polariz Ultra', gen: '5ª Geração, Cerâmica Metalizada', href: '/automotivo/solar/polariz-ultra' },
                ].map((line) => (
                  <a key={line.name} href={line.href} className="group">
                    <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors px-4 py-2 text-sm cursor-pointer">
                      <Sun className="w-3.5 h-3.5 mr-2" />
                      <span className="font-bold">{line.name}</span>
                      <span className="hidden sm:inline text-accent/60 ml-1.5 font-light">, {line.gen}</span>
                    </Badge>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 16. CTA FINAL ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Proteja Sua Família Agora</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">Não espere a violência bater no seu vidro. Fale com um especialista e instale o SkudoGuard hoje.</motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a película INSULFILM SkudoGuard para proteger minha família.')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Especialista
                </a>
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xs text-muted-foreground mt-6 font-light">Atendimento via WhatsApp. Resposta rápida de segunda a sábado.</motion.p>
          </motion.div>
        </div>
      </section>
      <PDPFaqSection slug="skudoguard" />
    </main>
    </>
  );
};

export default SkudoGuard;
