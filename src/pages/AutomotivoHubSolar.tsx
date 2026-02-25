import { useRef } from 'react';
import ParallaxBreak from '@/components/ParallaxBreak';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sun, Thermometer, Eye, ShieldCheck, Wifi, Gem, Award, ArrowRight, MessageCircle, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

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
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const WHATSAPP_NUMBER = '5511999999999';

const navTabs = ['Dark', 'Eclipse', 'Vip', 'Matrix', 'Polariz Ultra'];

const products = [
  {
    name: 'INSULFILM™ Dark',
    badge: 'Tecnologia de Corante | Linha: Standard',
    text: 'Proteção solar com visual clássico em tom preto, com alta durabilidade de estabilidade da cor. Filtra a maioria dos raios ultravioletas (UV). O INSULFILM™ Dark tem visibilidade interna para dirigir, enquanto o exterior reduz a visão dos curiosos e diminui o excesso de luz solar e brilho. Visual não refletivo, cor preto não opaco.',
    path: '/automotivo/solar/dark',
    id: 'dark',
  },
  {
    name: 'INSULFILM™ Eclipse',
    badge: 'Tecnologia 2ª Geração | Linha: Carbono',
    text: 'Proteção solar focada em privacidade, com melhor desempenho térmico e durabilidade prolongada. Cor estável e duradoura por sua construção em carbono puro verdadeiro. Filtra raios infravermelhos rejeitando o calor. Máxima rejeição dos raios ultravioletas (UV) e tecnologia de alta definição para visibilidade interna superior ao volante. Visual não refletivo, cor carbono opaco.',
    path: '/automotivo/solar/eclipse',
    id: 'eclipse',
  },
  {
    name: 'INSULFILM™ Vip',
    badge: 'Tecnologia 3ª Geração evoluída | Linha: Carbono+Cerâmica, extra rejeição IR',
    text: 'Película em carbono puro verdadeiro com injeção de raios infravermelhos (IR) potencializada. Proteção solar com alta redução de calor e privacidade. Durabilidade prolongada com estabilidade de cor. Máxima rejeição dos raios ultravioletas (UV) e tecnologia de alta definição para visibilidade interna superior ao volante. Visual não refletivo, cor carbono não opaco.',
    path: '/automotivo/solar/vip',
    id: 'vip',
  },
  {
    name: 'INSULFILM™ Matrix',
    badge: 'Tecnologia 4ª Geração | Linha: Cerâmica, máxima rejeição IR',
    highlight: 'Transparente ou escura, você escolhe.',
    text: 'É a top de linha. Película de altíssima rejeição ao calor. Alta performance por conta da nanotecnologia em nano partículas de cerâmica especializadas para entregar a máxima proteção contra os raios infravermelhos do sol, tendo altíssima rejeição térmica, combinada a uma visibilidade interna de ultra definição. Visual não refletivo, cor preto não opaco.',
    path: '/automotivo/solar/matrix',
    id: 'matrix',
  },
  {
    name: 'INSULFILM™ Polariz Ultra',
    badge: 'Tecnologia 5ª Geração | Linha: Cerâmica+metalizada',
    text: 'Película híbrida, com estética visual de visual polarizado e máximo desempenho de retenção de calor. Um visual refinado e alta tecnologia com ultra rejeição térmica em proteção contra os raios infravermelhos. Alta durabilidade e proteção. Excepcional visibilidade interna de ultra definição. Visual polarizado ou semi refletivo tinto, cor grafite não opaco.',
    path: '/automotivo/solar/polariz-ultra',
    id: 'polariz',
  },
];

const benefits = [
  { icon: Thermometer, title: 'Máxima Rejeição de Calor', desc: 'Conforto térmico' },
  { icon: Eye, title: 'Excelente Visibilidade Interna', desc: 'Alta definição' },
  { icon: ShieldCheck, title: 'Privacidade + Segurança Visual', desc: 'Proteção contra curiosos' },
  { icon: Wifi, title: 'Sem Interferência em Sinais', desc: 'Celulares e eletrônicos' },
  { icon: Gem, title: 'Design Sofisticado', desc: 'Visual premium' },
  { icon: Award, title: 'Pacote Completo de Garantias', desc: 'Certificado de fábrica' },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const reversed = index % 2 !== 0;
  const textVariant = reversed ? fadeInRight : fadeInLeft;
  const imgVariant = reversed ? fadeInLeft : fadeInRight;

  return (
    <motion.div
      id={product.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${index > 0 ? 'mt-20' : ''}`}
    >
      {reversed ? (
        <>
          <motion.div variants={imgVariant} className="order-2 md:order-1">
            <div className="glass-card rounded-2xl aspect-[4/3] flex flex-col items-center justify-center gap-3">
              <Sun className="w-16 h-16 text-accent/40" />
              <span className="text-sm text-muted-foreground">Imagem do produto</span>
            </div>
          </motion.div>
          <motion.div variants={textVariant} className="order-1 md:order-2">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-wider px-3 py-1 mb-4">
              {product.badge}
            </Badge>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">{product.name}</h3>
            {product.highlight && (
              <p className="text-accent font-bold text-base mb-3">{product.highlight}</p>
            )}
            <p className="text-muted-foreground font-light leading-relaxed mb-6">{product.text}</p>
            <Link to={product.path}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 rounded-xl shadow-md hover:shadow-lg transition-all">
                VEJA <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div variants={textVariant}>
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-wider px-3 py-1 mb-4">
              {product.badge}
            </Badge>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">{product.name}</h3>
            {product.highlight && (
              <p className="text-accent font-bold text-base mb-3">{product.highlight}</p>
            )}
            <p className="text-muted-foreground font-light leading-relaxed mb-6">{product.text}</p>
            <Link to={product.path}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 rounded-xl shadow-md hover:shadow-lg transition-all">
                VEJA <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={imgVariant}>
            <div className="glass-card rounded-2xl aspect-[4/3] flex flex-col items-center justify-center gap-3">
              <Sun className="w-16 h-16 text-accent/40" />
              <span className="text-sm text-muted-foreground">Imagem do produto</span>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

const AutomotivoHubSolar = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const textureY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -60]), { stiffness: 60, damping: 20 });

  return (
    <>
      <Helmet>
        <title>Películas de Proteção Solar Automotivo | INSULFILM™</title>
        <meta name="description" content="Películas de proteção solar automotiva INSULFILM™: Dark, Eclipse, Vip, Matrix e Polariz Ultra. Redução de calor, proteção UV e design sofisticado." />
        <link rel="canonical" href="https://www.insulfilm.com.br/automotivo/solar" />
      </Helmet>

      <main>
        {/* ═══ HERO ═══ */}
        <section ref={heroRef} className="relative min-h-[70vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: textureY }} />
          <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Sun className="w-3.5 h-3.5 mr-2" />Películas Premium. Sinta a diferença.
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-4 max-w-4xl mx-auto leading-tight">
                Películas de Proteção Solar para Vidros Automotivos
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-accent font-bold mb-4">
                Muito além do simples escurecimento. Alta performance de verdade.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-primary-foreground/60 font-light max-w-3xl mx-auto leading-relaxed">
                Eleve sua experiência ao volante com o conforto e sofisticação das películas originais INSULFILM™. Desenvolvidas com tecnologia de ponta em polímeros e compostos óticos especiais, nossas super películas oferecem redução superior de calor, claridade e até +99% de proteção contra os raios UV. Personalize seu carro com as opções escuras ou transparentes, perfeitas para o seu estilo!
              </motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-8">
                <div className="separator-accent" />
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ═══ NAVEGAÇÃO / ANCORAGEM ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-foreground uppercase tracking-wider">
                Encontre o seu INSULFILM™ ideal
              </motion.h3>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-wrap justify-center gap-3">
              {navTabs.map((tab) => (
                <motion.a
                  key={tab}
                  href={`#${tab.toLowerCase().replace(/\s+/g, '')}`}
                  variants={fadeInUp}
                >
                  <Button variant="outline" className="border-primary-foreground/20 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent font-bold rounded-xl px-6 py-3 transition-all">
                    {tab}
                  </Button>
                </motion.a>
              ))}
              <motion.a href="#matrix" variants={fadeInUp}>
                <Button variant="outline" className="border-primary-foreground/20 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent font-bold rounded-xl px-6 py-3 transition-all">
                  Transparente
                </Button>
              </motion.a>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="flex justify-center mt-14">
              <div className="separator-accent" />
            </motion.div>
          </div>
        </section>

        {/* ═══ CARDS DE PRODUTOS ═══ */}
        <section className="py-24 bg-carbon-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-texture opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            {products.map((p, i) => (
              <div key={p.id}>
                <ProductCard product={p} index={i} />
                {i < products.length - 1 && (
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="flex justify-center my-16">
                    <div className="separator-accent" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Parallax Break */}
        <ParallaxBreak minHeight="30vh" stats={[
          { value: '80%', label: 'Rejeição de Calor' },
          { value: '99%', label: 'Bloqueio UV' },
          { value: 'Vitalícia', label: 'Garantia Matrix' },
        ]} />

        {/* ═══ BENEFÍCIOS ═══ */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground">
                Benefícios que você sente e não vive mais sem
              </motion.h2>
              <motion.div variants={scaleIn} className="flex justify-center mt-6">
                <div className="separator-accent" />
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((b) => (
                <motion.div key={b.title} variants={fadeInUp}>
                  <Card className="glass-card rounded-2xl h-full text-center">
                    <CardContent className="p-8 flex flex-col items-center gap-3">
                      <b.icon className="w-10 h-10 text-accent" />
                      <h4 className="text-base font-extrabold text-foreground uppercase tracking-wide">{b.title}</h4>
                      <p className="text-sm text-muted-foreground font-light">{b.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ CTA FINAL ═══ */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="bg-accent py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-accent-foreground font-extrabold text-base md:text-lg uppercase tracking-wider">
              Exija as películas originais INSULFILM™. Sofisticação e Proteção Solar de verdade para você e sua família.
            </p>
          </div>
        </motion.section>

        <section className="py-24 bg-carbon-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-texture opacity-30" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-8">
                Solicite seu Orçamento
              </motion.h2>
              <motion.div variants={scaleIn} className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base px-8 py-6 rounded-xl">
                  <Link to="/lojas"><MapPin className="w-5 h-5" />Lojas Oficiais</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base px-8 py-6 rounded-xl">
                  <Link to="/parceiro"><Users className="w-5 h-5" />Seja um Aplicador</Link>
                </Button>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as películas de proteção solar automotiva INSULFILM™.')}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AutomotivoHubSolar;
