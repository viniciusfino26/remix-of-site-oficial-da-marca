import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Shield, CheckCircle, Eye, Sun, Heart,
  Award, FileText, MessageCircle,
  Layers, Zap, Wrench, ArrowRight,
  AlertTriangle, HeartCrack, UserX, Thermometer,
  Sparkles, Lock, Lightbulb
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ParallaxBreak from '@/components/ParallaxBreak';
import autoSkinSafe8K from '@/assets/auto-skinsafe8k.jpg';

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

/* ── danger cards ── */
const dangerCards = [
  { icon: AlertTriangle, title: 'Estilhaços projetados', desc: 'O vidro temperado se fragmenta em dezenas de pedaços que são projetados com força contra os ocupantes no momento da quebra.' },
  { icon: Eye, title: 'Risco para olhos e rosto', desc: 'Fragmentos de vidro podem atingir diretamente olhos, rosto e pescoço — áreas extremamente vulneráveis e expostas.' },
  { icon: HeartCrack, title: 'Cortes na pele exposta', desc: 'Braços, mãos e colo ficam expostos a cortes de vidro que podem causar lesões sérias, mesmo em baixa velocidade.' },
  { icon: UserX, title: 'Crianças no banco traseiro', desc: 'Crianças sentadas atrás estão na linha direta de projeção dos vidros laterais e traseiro — as áreas mais vulneráveis.' },
];

/* ── mechanical properties ── */
const mechProps = [
  { label: 'Força de Ruptura', value: '176 lbs/in (31,4 kgf/cm)', icon: Shield },
  { label: 'Força de Punção', value: '87 lbs (39,4 kg)', icon: Wrench },
  { label: 'Resistência à Tensão', value: '20.197 PSI (1.420 kgf/cm)', icon: Zap },
  { label: 'Alongamento na Ruptura', value: '62%', icon: ArrowRight },
  { label: 'Força de Arrancamento', value: '>3 lbs/in (>535,73 g/cm)', icon: Layers },
];

/* ── solar properties ── */
const solarProps = [
  { label: 'Energia Solar Rejeitada', value: '16%', icon: Sun },
  { label: 'Proteção UV', value: '30%', icon: Shield },
  { label: 'Transmissão Luz Visível', value: '83%', icon: Eye },
];

/* ── optical benefits ── */
const opticalBenefits = [
  { icon: Eye, title: 'Alta Nitidez Óptica', desc: 'Transparência cristal — praticamente imperceptível após a aplicação.' },
  { icon: Sun, title: '100% UV com Solar', desc: 'Em combinação com película solar, atinge bloqueio total de raios ultravioleta.' },
  { icon: Lock, title: 'Privacidade', desc: 'Combinada com película solar escura, oferece privacidade sem comprometer a segurança.' },
  { icon: Lightbulb, title: 'Conforto Visual', desc: 'Reduz reflexos e melhora o conforto visual em conjunto com a película solar.' },
];

const WHATSAPP_NUMBER = '5511936182746';

const SkinSafe8K = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "INSULFILM™ SkinSafe8K",
    "brand": { "@type": "Brand", "name": "INSULFILM™" },
    "description": "Película de proteção (7 mil / 177,8 micras) para laminação do vidro em quebras acidentais. Minimiza a projeção de estilhaços contra os ocupantes. 5 anos de garantia.",
    "image": `https://www.insulfilm.com.br${autoSkinSafe8K}`,
    "url": "https://www.insulfilm.com.br/skinsafe8k",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Espessura", "value": "7 mil / 177,8 micras" },
      { "@type": "PropertyValue", "name": "Função", "value": "Laminação do vidro — proteção contra estilhaços" },
      { "@type": "PropertyValue", "name": "Garantia", "value": "5 anos" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ SkinSafe8K | Proteção Contra Estilhaços</title>
        <meta name="description" content="Película de proteção (7 mil) para laminação do vidro em quebras acidentais. Minimiza a projeção de estilhaços contra os ocupantes. 5 anos de garantia." />
        <meta property="og:image" content={`https://www.insulfilm.com.br${autoSkinSafe8K}`} />
        <meta property="og:title" content="INSULFILM™ SkinSafe8K | Proteção Contra Estilhaços" />
        <meta property="og:description" content="Película de proteção para laminação do vidro em quebras acidentais. Minimiza a projeção de estilhaços contra os ocupantes." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.insulfilm.com.br/skinsafe8k" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
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
                Película de Proteção
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              INSULFILM™ SkinSafe8K
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
              Laminação do vidro em quebras acidentais
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          className="mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10 w-full max-w-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-premium-lg border border-primary-foreground/10">
            <video
              className="w-full aspect-video object-cover"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              src="https://www.insulfilm.com.br/automotivo/__videos/Antivandalismo--Video-Estilhacamento-2.mp4"
            />
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ═══ 2. CONTEXTO EMOCIONAL ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                O vidro ainda é a parte mais frágil do carro
              </motion.h2>
              <motion.p variants={fadeInLeft} className="text-muted-foreground font-light leading-relaxed mb-8">
                Mesmo com tantos itens de segurança, o vidro ainda é a parte mais frágil do carro. O INSULFILM™ SkinSafe8K contribui de forma importante para minimizar a projeção direta de estilhaços contra os ocupantes em quebras inesperadas — uma prevenção simples que reduz o risco de lesões sérias.
              </motion.p>
              <motion.p variants={fadeInLeft} className="text-muted-foreground font-light leading-relaxed mb-8">
                A película SkinSafe8K é uma película de proteção com 7 mil (177,8 micras) de espessura, projetada para laminar os fragmentos de vidro projetados em quebras acidentais, mantendo-os aderidos à película e reduzindo significativamente o risco de ferimentos nos ocupantes.
              </motion.p>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Não aplicável à furtos — produto exclusivo para quebras acidentais',
                  'Não interfere em sinais de celulares, GPS ou pedágios',
                  'Não altera a originalidade do veículo'
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInLeft} className="flex items-start gap-3">
                    <motion.div
                      className="mt-0.5"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, type: 'spring', stiffness: 300 }}
                    >
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
                  src={autoSkinSafe8K}
                  alt="Vidro automotivo estilhaçado retido pela película INSULFILM™ SkinSafe8K — proteção contra projeção de fragmentos"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 3. O PERIGO REAL ═══ */}
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
              O perigo real
            </motion.h2>
            <motion.p variants={emotionalFade} className="text-muted-foreground text-lg font-light max-w-3xl mx-auto">
              Em uma quebra acidental, o maior risco não é o vidro que cai — é o que ele projeta contra quem está dentro do carro.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
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

      {/* ═══ CTA — PROTEGER MINHA PELE ═══ */}
      <section className="py-16 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light text-lg mb-6">
              Uma prevenção simples que pode evitar lesões sérias.
            </motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de proteger minha pele com a película INSULFILM SkinSafe8K.')}`} target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="w-5 h-5" />
                  PROTEGER MINHA PELE
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ParallaxBreak minHeight="35vh" stats={[
        { value: '7 mil', label: 'Espessura' },
        { value: '100%', label: 'Retenção de Fragmentos' },
        { value: '5 anos', label: 'Garantia' },
      ]} />

      {/* ═══ 4. APLICABILIDADE ═══ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Aplicabilidade</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInLeft}>
              <Card className="glass-card rounded-2xl overflow-hidden h-full">
                <div className="aspect-[16/10] bg-primary-foreground/5 flex items-center justify-center">
                  <div className="text-center text-primary-foreground/30">
                    <Layers className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-xs">Imagem em breve</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-extrabold text-primary-foreground mb-2">SkinSafe8K</h3>
                  <p className="text-primary-foreground/60 font-light text-sm">Aplicada nos vidros laterais e traseiro do veículo. Película transparente de proteção com 7 mil de espessura para laminação dos fragmentos.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <Card className="glass-card rounded-2xl overflow-hidden h-full">
                <div className="aspect-[16/10] bg-primary-foreground/5 flex items-center justify-center">
                  <div className="text-center text-primary-foreground/30">
                    <Sun className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-xs">Imagem em breve</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-extrabold text-primary-foreground mb-2">SkinSafe8K + Solar</h3>
                  <p className="text-primary-foreground/60 font-light text-sm">Combinação da SkinSafe8K com película solar nos vidros laterais e traseiro. Une proteção contra estilhaços com rejeição de calor, bloqueio UV total e privacidade.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Linhas solares compatíveis */}
          <motion.div className="max-w-4xl mx-auto mt-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-8 text-center">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-extrabold text-primary-foreground mb-3">Compatível com todas as linhas solares automotivas</h3>
              <p className="text-primary-foreground/60 font-light text-sm mb-6 max-w-2xl mx-auto">
                A SkinSafe8K pode ser combinada com todas as nossas linhas de proteção solar automotiva para oferecer proteção completa:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'Dark', gen: '2ª Geração — Pigmentada', href: '/automotivo/solar/dark' },
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

      {/* ═══ 5. PROPRIEDADES MECÂNICAS ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Propriedades Mecânicas</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {mechProps.map((prop, i) => (
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

      {/* ═══ 6. PROPRIEDADES SOLARES ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Propriedades Solares</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">Desempenho solar da película SkinSafe8K isolada, sem combinação com película solar</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {solarProps.map((prop, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="card-premium-hover rounded-2xl h-full">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <prop.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium mb-1">{prop.label}</p>
                        <p className="text-xl font-extrabold text-foreground">{prop.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 7. BENEFÍCIOS ÓPTICOS E SOLARES ═══ */}
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

      {/* ═══ 8. GARANTIA ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Garantia</motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.div variants={fadeInLeft}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="card-premium-hover rounded-2xl h-full border-t-2 border-t-accent/30">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4"><Award className="w-6 h-6 text-accent" /></div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">Garantia do Produto — 5 anos</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">Cobertura contra defeitos de fabricação que comprometam o desempenho da película.</p>
                    <ul className="space-y-2">
                      {['Falha adesiva', 'Delaminação', 'Rachadura espontânea'].map(item => (
                        <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="card-premium-hover rounded-2xl h-full border-t-2 border-t-accent/30">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4"><FileText className="w-6 h-6 text-accent" /></div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">Garantia do Serviço</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">Cobertura de defeitos de instalação realizados pela rede autorizada INSULFILM™.</p>
                    <ul className="space-y-2">
                      {['Riscos de instalação', 'Rasgos e frestas', 'Bolhas residuais'].map(item => (
                        <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 9. CTA FINAL ═══ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Proteja quem você ama</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">
              Uma prevenção simples que pode evitar lesões sérias. Fale com um especialista.
            </motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a película INSULFILM SkinSafe8K para proteção contra estilhaços.')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
                </a>
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xs text-muted-foreground mt-6 font-light">
              Atendimento via WhatsApp. Resposta rápida de segunda a sábado.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
};

export default SkinSafe8K;
