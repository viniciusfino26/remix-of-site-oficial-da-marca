import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Thermometer, Eye, ShieldCheck, Wifi, Gem, Award, ArrowRight, Settings } from 'lucide-react';
import autoSolarDark from '@/assets/auto-solar-dark.png';
import autoSolarEclipse from '@/assets/auto-solar-eclipse.png';
import autoSolarPolarizSolar from '@/assets/auto-solar-polariz.png';
import autoSolarMatrix from '@/assets/auto-solar-matrix.png';
import autoSolarPolariz from '@/assets/auto-solar-polariz.png';
import autoSolarNavBg from '@/assets/auto-solar-nav-bg.png';
import autoSolarHero from '@/assets/auto-solar-hero.png';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const navTabs = [
  { label: 'RayStart', href: '#raystart' },
  { label: 'RayPro', href: '#raypro' },
  { label: 'Carbon', href: '#carbon' },
  { label: 'Polariz', href: '#polariz' },
  { label: 'Matrix', href: '#matrix' },
  { label: 'Polariz Ultra', href: '#polariz-ultra' },
];

type Product = {
  name: string;
  tech: string;
  serie: string;
  highlight?: string;
  text: string;
  path: string;
  id: string;
  image: string;
};

const performanceProducts: Product[] = [
  {
    name: 'INSULFILM™ RayStart',
    tech: 'Solar Performance Films · Linha de Entrada',
    serie: 'Série: Basic Film · Pigmentada',
    highlight: 'O primeiro passo para escurecer o vidro e recuperar o conforto visual.',
    text: 'Porta de entrada da linha solar. Película pigmentada em tom preto clássico não refletivo, para quem busca escurecer o vidro, reduzir o excesso de claridade e ganhar reserva visual, com três tonalidades para escolher (RayStart 35, 20 e 05).\n\nVisual: não refletivo, tom preto clássico. 90% de bloqueio UV em todas as variantes.',
    path: '/automotivo/solar/raystart',
    id: 'raystart',
    image: autoSolarDark,
  },
  {
    name: 'INSULFILM™ RayPro',
    tech: 'Solar Performance Films · Linha Clássica',
    serie: 'Série: Classic Film · Pigmentação Homogênea',
    highlight: 'Pigmentação que não desvanece. Cor que resiste ao tempo.',
    text: 'Um passo acima do básico. Película de pigmentação homogênea fundida ao poliéster, com camada dedicada de rejeição UV que retarda o clareamento e a virada de tom típicos das películas apenas tingidas. Três tonalidades (RayPro 35, 20 e 05).\n\nVisual: não refletivo, tom preto clássico. 98% de bloqueio UV — o maior da faixa de entrada.',
    path: '/automotivo/solar/raypro',
    id: 'raypro',
    image: autoSolarEclipse,
  },
  {
    name: 'INSULFILM™ Polariz',
    tech: 'Solar Performance Films · Tecnologia 4ª Geração',
    serie: 'Série: Cerâmica metalizada',
    text: 'Película espectro seletiva híbrida com estética visual polarizada e alto desempenho de retenção de calor. Visual refinado com tecnologia avançada de rejeição térmica e proteção contra raios infravermelhos.\n\nVisual: polarizado de baixa refletividade, cor grafite não opaco.',
    path: '/automotivo/solar/polariz',
    id: 'polariz',
    image: autoSolarPolarizSolar,
  },
];

const premiumProducts: Product[] = [
  {
    name: 'INSULFILM™ Matrix',
    tech: 'Solar Premium Films',
    serie: 'Série: Cerâmica, máxima rejeição IR',
    highlight: 'Transparente ou escura, você escolhe.',
    text: 'Extra-classe. Película espectro seletiva, enriquecida por cerâmica incorporada em nano partículas especializadas para entregar a máxima proteção contra os raios infravermelhos do sol, tendo altíssima rejeição térmica, combinada a uma visibilidade interna de ultra definição.\n\nVisual: não refletivo, cor preta não opaca.',
    path: '/automotivo/solar/matrix',
    id: 'matrix',
    image: autoSolarMatrix,
  },
  {
    name: 'INSULFILM™ Polariz Ultra',
    tech: 'Solar Premium Films',
    serie: 'Série: Cerâmica metalizada',
    text: 'Exclusiva. Película espectro seletiva híbrida: metalizada combinada à cerâmica, com estética visual polarizada e máximo desempenho de retenção de calor. Um visual refinado e alta tecnologia com ultra rejeição térmica em proteção contra os raios infravermelhos. Alta durabilidade e proteção. Excepcional visibilidade interna de ultra definição.\n\nVisual: polarizado de baixa refletividade, cor grafite não opaco.',
    path: '/automotivo/solar/polariz-ultra',
    id: 'polariz-ultra',
    image: autoSolarPolariz,
  },
];

const benefits = [
  { icon: Thermometer, title: 'MÁXIMA REJEIÇÃO DE CALOR, RAIOS UV E IR' },
  { icon: Eye, title: 'EXCELENTE VISIBILIDADE INTERNA' },
  { icon: ShieldCheck, title: 'PRIVACIDADE E SEGURANÇA VISUAL' },
  { icon: Wifi, title: 'CELULARES E ELETRÔNICOS' },
  { icon: Gem, title: 'DESIGN SOFISTICADO' },
];

const ProductSection = ({ product, index }: { product: Product; index: number }) => {
  const reversed = index % 2 !== 0;
  const textVariant = reversed ? fadeInRight : fadeInLeft;
  const imgVariant = reversed ? fadeInLeft : fadeInRight;

  const textBlock = (
    <motion.div variants={textVariant} className="flex flex-col justify-center">
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
        <Settings className="w-4 h-4" />
        <span>{product.tech}</span>
        <span className="text-muted-foreground">|</span>
        <span>{product.serie}</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-3">{product.name}</h3>
      {product.highlight && (
        <p className="text-accent font-bold text-base mb-3">{product.highlight}</p>
      )}
      <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-6">{product.text}</p>
      <Link to={product.path}>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold gap-2 rounded-lg px-6 transition-all">
          EXPLORE <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
    </motion.div>
  );

  const imgBlock = (
    <motion.div variants={imgVariant}>
      <img src={product.image} alt={product.name} className="w-full rounded-xl aspect-[4/3] object-cover" loading="lazy" />
    </motion.div>
  );

  return (
    <motion.div
      id={product.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-16"
    >
      {reversed ? (
        <>
          <div className="order-2 md:order-1">{imgBlock}</div>
          <div className="order-1 md:order-2">{textBlock}</div>
        </>
      ) : (
        <>
          {textBlock}
          {imgBlock}
        </>
      )}
    </motion.div>
  );
};

const AutomotivoHubSolar = () => {
  return (
    <>
      <Helmet>
        <title>Películas de Proteção Solar Automotivo | INSULFILM™</title>
        <meta name="description" content="Películas de proteção solar automotiva INSULFILM™: RayStart, Polariz, Matrix e Polariz Ultra. Redução de calor, proteção UV e design sofisticado." />
        <link rel="canonical" href="https://www.insulfilm.com.br/automotivo/solar" />
      </Helmet>

      <main>
        {/* ═══ HERO ═══ */}
        <section className="relative w-full overflow-hidden bg-gray-800">
          <img
            src={autoSolarHero}
            alt="Película solar automotiva aplicada"
            className="block w-full h-auto max-h-[260px] md:max-h-[280px] object-cover"
          />
          {/* Badge laranja inferior esquerdo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="absolute left-0 bottom-6 md:bottom-8 bg-accent/90 text-accent-foreground px-8 md:px-10 py-4 md:py-5 shadow-lg backdrop-blur-sm"
          >
            <p className="text-xl md:text-2xl font-extrabold leading-tight">Películas Premium</p>
            <p className="text-base md:text-lg font-light leading-tight">Sinta a diferença</p>
          </motion.div>
          {/* Crédito inferior direito */}
          <span className="absolute right-4 bottom-3 text-white/80 text-[11px] italic">
            Imagem meramente ilustrativa
          </span>
        </section>

        {/* ═══ INTRODUÇÃO ═══ */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight">
                Películas de Proteção Solar para Vidros Automotivos
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl font-bold italic text-accent mb-6">
                Muito além do simples escurecimento. Alta performance de verdade.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed">
                Eleve sua experiência ao volante com o conforto e sofisticação das películas originais INSULFILM™. Desenvolvidas com tecnologia de ponta em polímeros e compostos óticos especiais, nossas super películas oferecem redução superior de calor, claridade e até +99% de proteção contra os raios UV.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ═══ NAVEGAÇÃO / ANCORAGEM ═══ */}
        <section className="relative py-14 overflow-hidden">
          <img src={autoSolarNavBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-8">
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wider">
                Encontre o seu INSULFILM™ ideal
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/60 mt-2">Conheça nossas películas</motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-wrap justify-center items-center gap-3">
              {navTabs.map((tab, i) => (
                <motion.div key={tab.label} variants={fadeInUp} className="flex items-center gap-3">
                  {i > 0 && tab.label !== 'Transparente' && <span className="text-white/30 text-lg font-light">|</span>}
                  {tab.label === 'Transparente' && <span className="text-white/30 text-lg font-light">|</span>}
                  <a href={tab.href}>
                    <Button
                      variant={i === 0 ? 'default' : 'outline'}
                      className={
                        i === 0
                          ? 'bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full px-6'
                          : 'border-white/30 bg-transparent text-white hover:bg-white/10 font-bold rounded-full px-6'
                      }
                    >
                      {tab.label}
                    </Button>
                  </a>
                  {tab.label === 'Transparente' && <span className="text-white/30 text-lg font-light">|</span>}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ SOLAR PERFORMANCE FILMS ═══ */}
        <section className="bg-white overflow-x-hidden pt-16">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto text-center border-b border-border pb-8 mb-4">
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">Linha Performance</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">Solar Performance Films</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground mt-3 font-light">Do primeiro escurecimento à tecnologia polarizada de 4ª geração.</motion.p>
            </motion.div>
            {performanceProducts.map((p, i) => (
              <div key={p.id}>
                <ProductSection product={p} index={i} />
                {i < performanceProducts.length - 1 && (<div className="border-b border-border" />)}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ SOLAR PREMIUM FILMS ═══ */}
        <section className="bg-white overflow-x-hidden pt-16 border-t border-border">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto text-center border-b border-border pb-8 mb-4">
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">Linha Premium</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">Solar Premium Films</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground mt-3 font-light">O ápice da engenharia INSULFILM™ em rejeição térmica e visibilidade.</motion.p>
            </motion.div>
            {premiumProducts.map((p, i) => (
              <div key={p.id}>
                <ProductSection product={p} index={i} />
                {i < premiumProducts.length - 1 && (<div className="border-b border-border" />)}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ BENEFÍCIOS ═══ */}
        <section className="py-20 bg-white border-t border-border">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-6 mb-10 max-w-5xl mx-auto">
              {benefits.map((b) => (
                <motion.div key={b.title} variants={fadeInUp} className="flex flex-col items-center text-center">
                  <b.icon className="w-10 h-10 text-accent mb-3" strokeWidth={1.5} />
                  <span className="text-xs font-bold text-primary uppercase tracking-wide leading-tight">{b.title}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center gap-2 text-muted-foreground text-sm font-bold uppercase tracking-wider">
                <Award className="w-5 h-5 text-accent" />
                Pacote completo de garantias · Certificado individual
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ CTA FINAL ═══ */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-accent py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-accent-foreground font-extrabold text-base md:text-lg uppercase tracking-wider">
              Exija as películas originais INSULFILM™!
            </p>
            <p className="text-accent-foreground/80 text-sm mt-1">
              Sofisticação e Proteção Solar de verdade para você e a sua família.
            </p>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default AutomotivoHubSolar;
