import { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
  Sun, Thermometer, Eye, Shield, Palette, Sparkles, ShieldCheck, Award,
  Users, Home, Zap, Lock, CheckCircle, MessageCircle, Heart,
  FileText, Layers, Star, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ParallaxBreakComponent from '@/components/ParallaxBreak';

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

/* ── CountUp ── */
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

/* ── Data ── */
const problemCards = [
  { icon: Thermometer, stat: 80, suffix: '%', label: 'de rejeição de calor solar nos ambientes internos' },
  { icon: Sun, stat: 99, suffix: '%', label: 'de bloqueio dos raios ultravioleta nocivos' },
  { icon: Zap, stat: 30, suffix: '%', label: 'de economia na conta de energia elétrica' },
];

const filmCategories = [
  {
    icon: Eye,
    title: 'Espelhadas',
    desc: 'Espelhamento intenso em ambos os lados para uma rejeição de calor espetacular. Diversas opções de cores externas com interior prata.',
    image: 'https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/SpecchiatoBronzo.jpg',
    href: '/arquitetonico/solar',
  },
  {
    icon: Sun,
    title: 'Transparentes',
    desc: 'Quase imperceptível, mantém o design atual do projeto enquanto proporciona ótima redução de calor por sua tecnologia seletiva de absorção térmica.',
    image: 'https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/Orizzonte80.jpg',
    href: '/arquitetonico/solar',
  },
  {
    icon: Sparkles,
    title: 'Refletivas',
    desc: 'Alta refletividade externa para maximizar a rejeição de calor, com um interior neutro para facilitar a visibilidade externa.',
    image: 'https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/Metallico.jpg',
    href: '/arquitetonico/solar',
  },
  {
    icon: Palette,
    title: 'Neutras',
    desc: 'Visual natural de refletividade baixa ou moderada para aumentar o conforto térmico, sem destacar expressivamente a área envidraçada.',
    image: 'https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/Naturale.jpg',
    href: '/arquitetonico/solar',
  },
  {
    icon: Lock,
    title: 'Não Refletivas',
    desc: 'Visual escuro e não espelhado, proporcionando excelente privacidade e controle de luz que aumenta o conforto térmico.',
    image: 'https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/UltraVioletti90.jpg',
    href: '/arquitetonico/solar',
  },
  {
    icon: Shield,
    title: 'Antivandalismo e Segurança',
    desc: 'Praticamente invisíveis, reforçam a resistência natural do vidro contra quebras acidentais ou criminosas e retêm os estilhaços do vidro quebrado.',
    image: 'https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/Safety&Security.jpg',
    href: '/arquitetonico/seguranca',
  },
];

const benefits = [
  { icon: Thermometer, title: 'Redução de Calor e Economia', desc: 'Até 80% de rejeição do calor solar, reduzindo drasticamente o uso do ar-condicionado e os custos com energia elétrica.' },
  { icon: Eye, title: 'Privacidade e Redução de Claridade', desc: 'Controle da visibilidade externa sem perder a iluminação natural. Mais privacidade para sua família durante o dia.' },
  { icon: Shield, title: 'Proteção contra Estilhaços', desc: 'Em caso de quebra acidental, a película retém os fragmentos de vidro, protegendo crianças e animais de estimação.' },
  { icon: Palette, title: 'Manutenção do Design', desc: 'Películas que se integram à arquitetura, preservando a estética ou personalizando fachadas e janelas.' },
  { icon: Sun, title: 'Anti-desbotamento', desc: 'Até 99% de bloqueio UV que protege móveis, pisos, cortinas e obras de arte contra desbotamento e envelhecimento precoce.' },
];

const differentials = [
  {
    icon: Users, title: 'Atendimento Pré-venda',
    items: ['Especialistas em conforto térmico e acústico', 'Diagnóstico personalizado do seu ambiente', 'Especificação técnica sob medida para cada projeto'],
  },
  {
    icon: Award, title: 'Produto de Alto Desempenho',
    items: ['Películas OEM com tecnologia de ponta', 'Famílias Performance e Premium', 'Garantia certificada com lastro industrial'],
  },
  {
    icon: ShieldCheck, title: 'Serviço de Aplicação',
    items: ['Aplicadores credenciados e treinados', 'Proteção completa do ambiente durante instalação', 'Certificado individual por projeto'],
  },
];

const WHATSAPP_NUMBER = '5511999999999';

/* ── Parallax Section Component ── */
const ParallaxSection = ({ imageUrl, children }: { imageUrl: string; children?: React.ReactNode }) => (
  <section
    className="bg-parallax relative min-h-[200px] md:min-h-[300px] flex items-center justify-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
    {children && <div className="relative z-10 container mx-auto px-4 py-16 text-center">{children}</div>}
  </section>
);

const residencialSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "INSULFILM™ Residencial | Películas Arquitetônicas para sua Casa",
  "description": "Desempenho surpreendente para projetos residenciais. Conforto, economia e proteção para sua família.",
  "url": "https://www.insulfilm.com.br/residencial",
  "publisher": { "@type": "Brand", "name": "INSULFILM™" }
};

const Residencial = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
    <Helmet>
      <title>INSULFILM™ Residencial | Películas Arquitetônicas para sua Casa</title>
      <meta name="description" content="Desempenho surpreendente para projetos residenciais. Conforto, economia e proteção para sua família." />
      <meta property="og:title" content="INSULFILM™ Residencial | Películas Arquitetônicas para sua Casa" />
      <meta property="og:description" content="Desempenho surpreendente para projetos residenciais. Conforto, economia e proteção para sua família." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="LINK_DA_IMAGEM_AQUI" />
      <meta property="og:url" content="https://www.insulfilm.com.br/residencial" />
      <script type="application/ld+json">{JSON.stringify(residencialSchema)}</script>
    </Helmet>
    <main>
      {/* ═══ 1. HERO + VIDEO ═══ */}
      <section ref={heroRef} className="relative min-h-[70vh] flex flex-col items-center bg-carbon-gradient overflow-hidden">
        <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
        <motion.div className="container mx-auto px-4 pt-32 pb-8 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <Home className="w-3.5 h-3.5 mr-2" />
                Películas Arquitetônicas
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              Películas originais INSULFILM™
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
              Desempenho surpreendente para projetos residenciais. Conforto, economia e proteção para sua família.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6">
              <div className="separator-accent" />
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { label: 'Nossas Películas', target: 'peliculas' },
                { label: 'Benefícios', target: 'beneficios' },
                { label: 'Diferenciais', target: 'diferenciais' },
              ].map(btn => (
                <Button key={btn.target} variant="ghost" size="sm" className="border border-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-lg" onClick={() => scrollTo(btn.target)}>
                  {btn.label}
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10 w-full max-w-7xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <div className="relative rounded-2xl overflow-hidden shadow-premium-lg border border-primary-foreground/10">
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/paCtipjRfPI?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&controls=0&autoplay=1&mute=1&loop=1&playlist=paCtipjRfPI"
                title="INSULFILM™ Películas Arquitetônicas"
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

      {/* ═══ 2. O PROBLEMA ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={emotionalFade} className="flex justify-center mb-4">
              <Thermometer className="w-10 h-10 text-accent" />
            </motion.div>
            <motion.h2 variants={emotionalFade} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              O Problema Mora em Casa
            </motion.h2>
            <motion.p variants={emotionalFade} className="text-primary-foreground/60 text-lg font-light max-w-2xl mx-auto">
              Calor excessivo, conta de luz alta, móveis desbotando, falta de privacidade. Sua casa deveria ser seu refúgio — não uma fonte de desconforto.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {problemCards.map((card, i) => (
              <motion.div key={i} variants={emotionalFade}>
                <Card className="glass-card rounded-2xl text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <card.icon className="w-7 h-7 text-accent" />
                    </div>
                    <p className="text-5xl md:text-6xl font-extrabold text-accent mb-3">
                      <CountUp target={card.stat} prefix="até " suffix={card.suffix} />
                    </p>
                    <p className="text-primary-foreground/70 font-light text-sm">{card.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ParallaxBreakComponent minHeight="35vh" stats={[
        { value: '80%', label: 'Rejeição de Calor' },
        { value: '99%', label: 'Bloqueio UV' },
        { value: '30%', label: 'Economia Energia' },
      ]} />

      {/* ═══ 3. NOSSAS PELÍCULAS — Cards com Fotos ═══ */}
      <section id="peliculas" className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Nossas Películas</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">6 categorias de películas para cada necessidade do seu projeto arquitetônico</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {filmCategories.map((cat, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link to={cat.href}>
                  <motion.div whileHover={{ y: -6, transition: { duration: 0.3 } }}>
                    <Card className="card-premium-hover rounded-2xl h-full border-t-2 border-t-transparent hover:border-t-accent/50 overflow-hidden group cursor-pointer">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                              <cat.icon className="w-4 h-4 text-accent" />
                            </div>
                            <h3 className="text-lg font-extrabold text-primary-foreground">{cat.title}</h3>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">{cat.desc}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-accent">
                          Ver produtos <ArrowRight className="w-4 h-4" />
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

      {/* ═══ 4. PARALLAX — Residências ═══ */}
      <ParallaxSection imageUrl="https://www.insulfilmarquitetonico.com.br/__imagens/Arquitetonico--Casas--Interior--G.jpg">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={emotionalFade} className="text-2xl md:text-4xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
          Conforto térmico e proteção UV para todos os ambientes da sua residência
        </motion.p>
      </ParallaxSection>

      {/* ═══ 5. PRINCIPAIS BENEFÍCIOS ═══ */}
      <section id="beneficios" className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Principais Benefícios</motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light max-w-2xl mx-auto">Transforme o conforto e a proteção da sua residência</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="glass-card rounded-2xl h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <b.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-primary-foreground mb-1">{b.title}</h3>
                      <p className="text-sm text-primary-foreground/60 font-light leading-relaxed">{b.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. CTA INTERMEDIÁRIO ═══ */}
      <section className="py-16 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={emotionalFade} className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-4">
              Transforme sua residência. Fale com um especialista.
            </motion.p>
            <motion.p variants={emotionalFade} className="text-primary-foreground/60 font-light mb-6">
              Conforto térmico, economia de energia e proteção para quem você ama — tudo começa com uma consulta gratuita.
            </motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-5 rounded-xl shadow-premium hover:shadow-premium-lg transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as películas arquitetônicas INSULFILM para minha residência.')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Especialista
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 7. NOSSOS DIFERENCIAIS ═══ */}
      <section id="diferenciais" className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Nossos Diferenciais</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">Do diagnóstico à instalação, cada etapa é pensada para entregar o melhor resultado</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            {differentials.map((diff, i) => (
              <motion.div key={i} variants={i === 0 ? fadeInLeft : i === 2 ? fadeInRight : fadeInUp}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="card-premium-hover rounded-2xl h-full border-t-2 border-t-accent/30">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                        <diff.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-extrabold text-foreground mb-4">{diff.title}</h3>
                      <ul className="space-y-3">
                        {diff.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                            <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 8. FAMÍLIAS DE PRODUTOS ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Famílias de Produtos</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInLeft}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="glass-card rounded-2xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <Layers className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-extrabold text-primary-foreground mb-3">Performance</h3>
                    <p className="text-primary-foreground/60 font-light leading-relaxed">
                      Películas eficientes e econômicas. Excelente custo-benefício com desempenho comprovado para projetos residenciais.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="glass-card rounded-2xl h-full border-2 border-accent/30">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <Star className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-extrabold text-primary-foreground mb-3">Premium</h3>
                    <p className="text-primary-foreground/60 font-light leading-relaxed">
                      Máximo desempenho e maior durabilidade. Tecnologia avançada para projetos que exigem o melhor em conforto e proteção.
                    </p>
                    <Badge className="mt-4 bg-accent/20 text-accent border-accent/30 text-xs">Recomendado</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 9. GARANTIA CERTIFICADA ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={emotionalFade}>
            <Card className="rounded-2xl border-2 border-accent/20 shadow-premium-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(19 100% 56% / 0.03), hsl(224 100% 19% / 0.03))' }}>
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Award className="w-10 h-10 text-accent" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-extrabold text-foreground mb-3">Garantia Certificada</h3>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4">
                      Cada projeto recebe um certificado individual com garantia de lastro industrial. Cobertura para o produto e para o serviço de instalação.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { icon: FileText, label: 'Certificado individual' },
                        { icon: Shield, label: 'Garantia do produto' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-accent font-bold">
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══ 9.5. CLIENTES QUE CONFIAM ═══ */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
              Clientes que confiam na INSULFILM™
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light mb-6">
              Grandes projetos em todo o Brasil
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mb-8"><div className="separator-accent" /></motion.div>
            <motion.div variants={fadeInUp}>
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/538892/1757442209/$1chrfqbj4ma"
                alt="Clientes que confiam na INSULFILM"
                className="mx-auto max-w-4xl w-full rounded-xl shadow-premium"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 10. PARALLAX — Escritórios/Fachadas ═══ */}
      <ParallaxSection imageUrl="https://www.insulfilmarquitetonico.com.br/__imagens/solucoes/fachadas-exclusivas.jpg" />

      {/* ═══ 11. PROTEJA SUA CASA E SUA FAMÍLIA ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={emotionalFade} className="flex justify-center mb-4">
              <Heart className="w-10 h-10 text-accent" />
            </motion.div>
            <motion.h2 variants={emotionalFade} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Proteja Sua Casa e Sua Família
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInLeft}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-premium-lg">
                <img
                  src="https://www.insulfilmarquitetonico.com.br/__imagens/Arquitetonico--Casas--Interior--G.jpg"
                  alt="Interior de residência com películas arquitetônicas INSULFILM"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <Card className="card-premium-hover rounded-2xl border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground font-medium leading-relaxed mb-3">
                        Crianças brincando perto de janelas, móveis expostos ao sol intenso, pele vulnerável à radiação UV dentro de casa. Sua família merece um ambiente seguro e confortável.
                      </p>
                      <p className="text-muted-foreground font-light text-sm leading-relaxed">
                        As películas INSULFILM bloqueiam até 99% dos raios UV, reduzem o calor em até 80% e protegem contra estilhaços em caso de quebra acidental do vidro.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-premium-hover rounded-2xl border-l-4 border-l-accent/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Sun className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Móveis, pisos de madeira, cortinas e obras de arte são protegidos contra desbotamento e envelhecimento precoce. Sua casa mantém a beleza por muito mais tempo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 12. CTA FINAL ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Faça Seu Orçamento Agora</motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light mb-8">
              Conforto, economia e proteção para sua família. Fale com um especialista e transforme sua residência.
            </motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de fazer um orçamento de películas INSULFILM para minha residência.')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Especialista
                </a>
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xs text-primary-foreground/40 mt-6 font-light">Atendimento via WhatsApp. Resposta rápida de segunda a sábado.</motion.p>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Residencial;
