import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sun, Shield, Layers, Thermometer, Zap, Building2, TrendingUp, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Analytics } from '@/components/Analytics';
import PageBreadcrumb from '@/components/PageBreadcrumb';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const categories = [
  {
    icon: Sun,
    title: 'Controle Solar',
    description: 'Películas de alta performance para rejeição de calor, controle de luminosidade e proteção UV em fachadas e ambientes internos.',
    link: '/arquitetonico/solar',
    accent: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: Shield,
    title: 'Proteção e Segurança',
    description: 'Películas de segurança que reforçam vidros contra impactos, tentativas de invasão e estilhaçamento acidental.',
    link: '/arquitetonico/seguranca',
    accent: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Layers,
    title: 'Decorativo',
    description: 'Películas decorativas para privacidade, estética e personalização de ambientes com efeitos jateado, whiteout e blackout.',
    link: '/arquitetonico/decorativo',
    accent: 'from-purple-500/20 to-pink-500/20',
  },
];

const benefits = [
  { icon: Zap, title: 'Eficiência Energética', desc: 'Reduza até 80% do calor solar e economize com ar-condicionado.' },
  { icon: Thermometer, title: 'Conforto Térmico', desc: 'Ambientes mais agradáveis com temperatura estável o ano todo.' },
  { icon: Sun, title: 'Proteção UV', desc: 'Bloqueio de até 99% dos raios ultravioleta que danificam móveis e pisos.' },
  { icon: TrendingUp, title: 'Valorização do Imóvel', desc: 'Melhore a estética e funcionalidade, agregando valor ao patrimônio.' },
];

const WHATSAPP_NUMBER = '5511976136911';
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Gostaria de saber mais sobre as películas arquitetônicas INSULFILM™.');

const Arquitetonico = () => {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center bg-carbon-gradient overflow-hidden">
        <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
        <motion.div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-glow-pulse" />
        </motion.div>

        <motion.div className="container mx-auto px-4 pt-32 pb-16 relative z-10" style={{ y: heroTextY, opacity: heroOpacity }}>
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInLeft} className="text-sm uppercase tracking-[0.4em] text-accent mb-4 font-semibold">
              INSULFILM™ ARQUITETÔNICO
            </motion.p>
            <motion.h1 variants={fadeInLeft} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              Películas Arquitetônicas INSULFILM™
            </motion.h1>
            <motion.p variants={fadeInLeft} className="text-lg text-primary-foreground/60 font-light">
              Soluções completas em controle solar, segurança e decoração para residências, edifícios comerciais e projetos arquitetônicos de alto padrão.
            </motion.p>
            <motion.div variants={scaleIn} className="flex mt-6">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Transforme Seus Ambientes
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed max-w-3xl mx-auto">
              A linha arquitetônica INSULFILM™ reúne as mais avançadas tecnologias em películas para vidros, desenvolvidas para oferecer máximo desempenho em conforto térmico, segurança estrutural e estética. Cada solução é projetada para atender às exigências de projetos residenciais, comerciais e corporativos com a qualidade e durabilidade que só a marca original pode garantir.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-8">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 md:py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Nossas Linhas de Produto
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {categories.map((cat, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="bg-primary-foreground/5 border-primary-foreground/10 hover:border-accent/30 transition-all duration-300 h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${cat.accent} flex items-center justify-center mb-6 icon-ring-glow`}
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    >
                      <cat.icon className="w-7 h-7 text-accent" />
                    </motion.div>

                    <h3 className="text-xl font-extrabold text-primary-foreground mb-3">{cat.title}</h3>
                    <p className="text-sm text-primary-foreground/60 font-light leading-relaxed mb-6 flex-1">
                      {cat.description}
                    </p>

                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full">
                      <Link to={cat.link}>
                        Explorar
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Benefícios da Linha Arquitetônica
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center icon-ring-glow"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <b.icon className="w-7 h-7 text-accent" />
                </motion.div>
                <h4 className="text-sm font-extrabold text-foreground mb-1">{b.title}</h4>
                <p className="text-xs text-muted-foreground font-light">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <Building2 className="w-12 h-12 mx-auto mb-6 text-accent-foreground/80" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-accent-foreground mb-4">
              Fale com um Especialista
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-accent-foreground/70 font-light mb-8">
              Nossos consultores estão prontos para ajudar você a encontrar a solução ideal para o seu projeto arquitetônico.
            </motion.p>
            <motion.div variants={scaleIn}>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => Analytics.whatsappClick('arquitetonico-cta')}
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale com um Especialista
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Arquitetonico;
