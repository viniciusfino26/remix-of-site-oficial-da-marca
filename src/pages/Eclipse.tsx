import { useRef } from 'react';
import ParallaxBreak from '@/components/ParallaxBreak';
import TLDR from '@/components/TLDR';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sun, Zap, Layers, Shield, CheckCircle, MessageCircle, Car } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getPDPSchemas } from '@/lib/pdpFAQs';
import PDPFaqSection from '@/components/PDPFaqSection';

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

const WHATSAPP_NUMBER = '5511936182746';

const specs = [
  { icon: Zap, label: 'Tecnologia', value: 'Carbon Color Stable' },
  { icon: Layers, label: 'Série', value: 'HD' },
  { icon: Sun, label: 'Rejeição de IR', value: 'Até 30%' },
  { icon: Shield, label: 'Garantia', value: '5 anos' },
];

const Eclipse = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });


  return (
    <>
      <Helmet>
        <title>INSULFILM™ Eclipse | Película Automotiva Carbon Color Stable</title>
        <meta name="description" content="Película com nano partículas de carbono verdadeiro. Filtro de 30% de IR e 5 anos de garantia contra desbotamento." />
        <meta property="og:title" content="INSULFILM™ Eclipse | Película Automotiva Carbon Color Stable" />
        <meta property="og:description" content="Película com nano partículas de carbono verdadeiro. Filtro de 30% de IR e 5 anos de garantia contra desbotamento." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="LINK_DA_IMAGEM_AQUI" />
        <meta property="og:url" content="https://www.insulfilm.com.br/eclipse" />
        {(() => { const s = getPDPSchemas('eclipse'); return s ? (<>
          <script type="application/ld+json">{JSON.stringify(s.breadcrumb)}</script>
          {s.productsByLang.map((p, i) => (<script key={`p-${i}`} type="application/ld+json">{JSON.stringify(p)}</script>))}
          {s.faqsByLang.map((f, i) => (<script key={i} type="application/ld+json">{JSON.stringify(f)}</script>))}
        </>) : null; })()}
      </Helmet>
      <main>
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Zap className="w-3.5 h-3.5 mr-2" />
                  Carbon Color Stable
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
                INSULFILM™ Eclipse
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
                {t('automotivePage.eclipse.desc')}
              </motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <TLDR
          question="O que é a película INSULFILM™ Eclipse?"
          answer="A INSULFILM™ Eclipse é uma película automotiva Carbon Color Stable que filtra 30% dos raios infravermelhos e mantém cor estável ao longo do tempo."
          context="Indicada para quem busca acabamento neutro e durável sem desbotamento, com 5 anos de garantia de fábrica."
          specs={[
            { label: 'Tecnologia', value: 'Carbon Color Stable' },
            { label: 'Rejeição de IR', value: 'Até 30%' },
            { label: 'Bloqueio UV', value: '99%' },
            { label: 'Garantia', value: '5 anos' },
          ]}
        />


        <TechSpecsHighlight
          title="Ficha Técnica Eclipse"
          subtitle="Carbono puro. Cor estável. Os índices que justificam a escolha."
          highlights={[
            { value: '30%', label: 'Rejeição IR', sublabel: 'Calor bloqueado' },
            { value: '99%', label: 'Bloqueio UV', sublabel: 'Proteção total' },
            { value: 'Carbono', label: 'Tecnologia', sublabel: 'Color Stable' },
            { value: '5 anos', label: 'Garantia', sublabel: 'Anti-desbotamento' },
          ]}
          warrantyNote="Garantia: 5 anos contra desbotamento. Consulte condições com um Centro Autorizado."
        />

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
                <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">Cor Estável por Anos</motion.h2>
                <motion.p variants={fadeInLeft} className="text-primary-foreground/60 font-light leading-relaxed mb-8">
                  A Eclipse utiliza nano partículas de carbono verdadeiro que garantem estabilidade de cor — sem desbotamento para tons roxos ao longo do tempo. Uma película acessível com qualidade comprovada.
                </motion.p>
                <motion.ul className="space-y-4" variants={stagger}>
                  {['Nano partículas de carbono verdadeiro', 'Color Stable — sem desbotamento', 'Filtro de 30% dos raios infravermelhos', 'Garantia de 5 anos'].map((text, i) => (
                    <motion.li key={i} variants={fadeInLeft} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-primary-foreground font-medium">{text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
                <div className="aspect-[4/3] rounded-2xl bg-muted/10 border border-border/20 flex items-center justify-center">
                  <div className="text-center text-primary-foreground/30"><Car className="w-16 h-16 mx-auto mb-3 opacity-30" /><p className="text-sm">Imagem do produto</p></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Peça já a sua Eclipse</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">Solicite um orçamento e garanta estabilidade de cor por 5 anos.</motion.p>
              <motion.div variants={scaleIn}>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a película INSULFILM Eclipse.')}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />Solicitar Orçamento
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <PDPFaqSection slug="eclipse" />
      </main>
    </>
  );
};

export default Eclipse;
