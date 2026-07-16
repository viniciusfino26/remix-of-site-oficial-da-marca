import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Thermometer, Eye, ShieldCheck, Wifi, Gem, Award, ArrowRight, Settings, Check, Minus, Sparkles, Snowflake, Zap, Scale } from 'lucide-react';
import autoSolarDark from '@/assets/auto-solar-dark.png';
import autoSolarVip from '@/assets/auto-solar-vip.png';
import autoSolarEclipse from '@/assets/auto-solar-eclipse.png';
import autoSolarPolarizSolar from '@/assets/auto-solar-polariz.png';
import autoSolarMatrix from '@/assets/auto-solar-matrix.png';
import autoSolarPolariz from '@/assets/auto-solar-polariz.png';
import autoSolarNavBg from '@/assets/auto-solar-nav-bg.png';
import autoSolarHero from '@/assets/auto-solar-hero.png';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PdpFaq, { type FaqItem } from '@/components/PdpFaq';

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

const navGroups = [
  {
    label: 'Solar Performance Films',
    tabs: [
      { label: 'RayStart', href: '#raystart' },
      { label: 'RayPro', href: '#raypro' },
      { label: 'Carbon', href: '#carbon' },
    ],
  },
  {
    label: 'Solar High Performance Films',
    tabs: [
      { label: 'Ceramic', href: '#ceramic' },
      { label: 'Polariz', href: '#polariz' },
    ],
  },
  {
    label: 'Solar Ultra Performance Films',
    tabs: [
      { label: 'Matrix', href: '#matrix' },
      { label: 'Polariz Ultra', href: '#polariz-ultra' },
    ],
  },
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
  badge?: string;
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
    badge: 'Entrada',
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
    badge: 'Mais vendido da linha clássica',
  },
  {
    name: 'INSULFILM™ Carbon',
    tech: 'Solar Performance Films · Carbono Verdadeiro',
    serie: 'Série: Carbon Film · Cor Estável',
    highlight: 'Quando o cliente procura carbono de verdade, é aqui que a rejeição de calor começa.',
    text: 'Salto de tecnologia dentro da Solar Performance Films. Construção em carbono verdadeiro, sem metalização, com filtro dedicado de infravermelho que entrega até mais de 50% de IR rejeitado. Três tonalidades (Carbon 35, 20 e 05).\n\nVisual: não refletivo, cor preta não opaca. 99% de bloqueio UV, nitidez óptica High Definition e 4 anos de garantia.',
    path: '/automotivo/solar/carbon',
    id: 'carbon',
    image: autoSolarVip,
    badge: 'Carbono verdadeiro',
  },
  {
    name: 'INSULFILM™ Ceramic',
    tech: 'Solar Performance Films · Nanocerâmica',
    serie: 'Série: Advanced Plus Film · Nanocerâmica',
    highlight: 'Quando o cliente procura cerâmica, é aqui que o calor para de entrar.',
    text: 'Topo da Solar Performance Films. Nanocerâmica com mais de 85% de rejeição de infravermelho em todas as tonalidades — a mesma performance térmica no claro e no escuro. Três tonalidades (Ceramic 35, 20 e 05).\n\nVisual: neutro não refletivo. 99% de bloqueio UV, nitidez High Definition e 5 anos de garantia.',
    path: '/automotivo/solar/ceramic',
    id: 'ceramic',
    image: autoSolarMatrix,
    badge: 'Cerâmica real',
  },
  {
    name: 'INSULFILM™ Polariz',
    tech: 'Solar Performance Films · Híbrida Metalizada',
    serie: 'Série: Hybrid Film · Metalizada',
    highlight: 'Reflexão de calor e um visual que nenhuma outra linha da faixa entrega.',
    text: 'Película espectro seletiva híbrida metalizada com estética polarizada exclusiva. Reflexão térmica com até 57% de rejeição de energia solar total e visual neutro-petróleo reconhecível. Três tonalidades (Polariz 20, 10 e 05).\n\nVisual: polarizado de baixa refletividade. Aplicável em teto-solar. 99% de UV e 5 anos de garantia.',
    path: '/automotivo/solar/polariz',
    id: 'polariz',
    image: autoSolarPolarizSolar,
    badge: 'Teto-solar (Performance)',
  },
];

const premiumProducts: Product[] = [
  {
    name: 'INSULFILM™ Matrix',
    tech: 'Solar Premium Films · Nanocerâmica Premium',
    serie: 'Série: Premium Film · Nanocerâmica',
    highlight: 'A nanocerâmica que rejeita calor sem comprometer a clareza.',
    text: 'Entrada da Solar Premium Films. Nanocerâmica de última geração com até 75% de rejeição de infravermelho em qualquer tonalidade — mesmo a variante mais clara. Quatro tonalidades (Matrix 70, 35, 15 e 05).\n\nVisual: não refletivo, neutro. Mais de 99% de UV, nitidez Ultra Definition e 10 anos de garantia.',
    path: '/automotivo/solar/matrix',
    id: 'matrix',
    image: autoSolarMatrix,
    badge: 'Melhor custo-benefício Premium',
  },
  {
    name: 'INSULFILM™ Polariz Ultra',
    tech: 'Solar Premium Films · Ultra Híbrida Metal-Cerâmica',
    serie: 'Série: Ultra Hybrid Film · Metal-Cerâmica',
    highlight: 'O limite máximo da engenharia de películas solares automotivas.',
    text: 'Topo absoluto do portfólio. Híbrida metal-cerâmica com 70% de TSER (o recorde) e 75% de IR nas duas tonalidades. Estética polarizada exclusiva e desempenho térmico sem paralelo. Duas tonalidades (Polariz Ultra 15 e 05).\n\nVisual: polarizado de baixa refletividade. Aplicabilidade: vidros laterais e traseiro. Mais de 99% de UV e 10 anos de garantia.',
    path: '/automotivo/solar/polariz-ultra',
    id: 'polariz-ultra',
    image: autoSolarPolariz,
    badge: 'Topo absoluto · 70% TSER',
  },
];

const benefits = [
  { icon: Thermometer, title: 'MÁXIMA REJEIÇÃO DE CALOR, RAIOS UV E IR' },
  { icon: Eye, title: 'EXCELENTE VISIBILIDADE INTERNA' },
  { icon: ShieldCheck, title: 'PRIVACIDADE E SEGURANÇA VISUAL' },
  { icon: Wifi, title: 'CELULARES E ELETRÔNICOS' },
  { icon: Gem, title: 'DESIGN SOFISTICADO' },
];

// ═══ COMPARATIVO ═══
type ComparisonRow = {
  name: string;
  construction: string;
  tons: string;
  uv: string;
  ir: string;
  tser: string;
  warranty: string;
  badge: string;
  path: string;
};

const comparisonRows: ComparisonRow[] = [
  { name: 'RayStart', construction: 'Pigmentada', tons: '35 / 20 / 05', uv: '90%', ir: '5%', tser: '24–29%', warranty: '1 ano', badge: 'Entrada', path: '/automotivo/solar/raystart' },
  { name: 'RayPro', construction: 'Pigmentação homogênea + UV', tons: '35 / 20 / 05', uv: '98%', ir: '5%', tser: '34–39%', warranty: '3 anos', badge: 'Clássica', path: '/automotivo/solar/raypro' },
  { name: 'Carbon', construction: 'Carbono verdadeiro + filtro IR', tons: '35 / 20 / 05', uv: '99%', ir: '30–50%', tser: '36–45%', warranty: '4 anos', badge: 'Carbono real', path: '/automotivo/solar/carbon' },
  { name: 'Ceramic', construction: 'Nanocerâmica', tons: '35 / 20 / 05', uv: '99%', ir: '>85%', tser: '54–63%', warranty: '5 anos', badge: 'Cerâmica real', path: '/automotivo/solar/ceramic' },
  { name: 'Polariz', construction: 'Híbrida metalizada', tons: '20 / 10 / 05', uv: '99%', ir: '38–44%', tser: '47–57%', warranty: '5 anos', badge: 'Teto-solar', path: '/automotivo/solar/polariz' },
  { name: 'Matrix', construction: 'Nanocerâmica Premium', tons: '70 / 35 / 15 / 05', uv: '>99%', ir: '67–75%', tser: '44–62%', warranty: '10 anos', badge: 'Premium', path: '/automotivo/solar/matrix' },
  { name: 'Polariz Ultra', construction: 'Metal-cerâmica', tons: '15 / 05', uv: '>99%', ir: '75%', tser: '65–70%', warranty: '10 anos', badge: 'Topo absoluto', path: '/automotivo/solar/polariz-ultra' },
];

const chooseProfiles = [
  {
    icon: Eye,
    title: 'Quero apenas escurecer',
    subtitle: 'Conforto visual e reserva de privacidade',
    lines: [
      { name: 'RayStart', desc: 'O primeiro passo para escurecer o vidro e recuperar o conforto visual.', path: '/automotivo/solar/raystart' },
      { name: 'RayPro', desc: 'Pigmentação que não desvanece. Cor que resiste ao tempo.', path: '/automotivo/solar/raypro' },
    ],
  },
  {
    icon: Snowflake,
    title: 'Quero rejeitar calor de verdade',
    subtitle: 'Carbono, cerâmica e reflexão térmica',
    lines: [
      { name: 'Carbon', desc: 'Quando o cliente procura carbono de verdade, é aqui que a rejeição de calor começa.', path: '/automotivo/solar/carbon' },
      { name: 'Ceramic', desc: 'Quando o cliente procura cerâmica, é aqui que o calor para de entrar.', path: '/automotivo/solar/ceramic' },
      { name: 'Polariz', desc: 'Reflexão de calor e um visual que nenhuma outra linha da faixa entrega.', path: '/automotivo/solar/polariz' },
    ],
  },
  {
    icon: Zap,
    title: 'Quero o máximo de performance',
    subtitle: 'Linha Premium · 10 anos de garantia',
    lines: [
      { name: 'Matrix', desc: 'A nanocerâmica que rejeita calor sem comprometer a clareza.', path: '/automotivo/solar/matrix' },
      { name: 'Polariz Ultra', desc: 'O limite máximo da engenharia de películas solares automotivas.', path: '/automotivo/solar/polariz-ultra' },
    ],
  },
];

const faqItems: FaqItem[] = [
  {
    question: 'Qual a diferença entre RayStart e RayPro?',
    answer:
      'A RayStart é a porta de entrada da linha solar: película pigmentada em tom preto clássico não refletivo, com 90% de bloqueio UV e 1 ano de garantia. A RayPro é um passo acima: pigmentação homogênea fundida ao poliéster, com camada dedicada de rejeição UV que retarda o clareamento e a virada de tom, elevando o bloqueio UV para 98% e a garantia para 3 anos. Ambas em três tonalidades (35, 20 e 05).',
  },
  {
    question: 'Carbon ou Ceramic: quando cada uma faz sentido?',
    answer:
      'A Carbon é construída em carbono verdadeiro, sem metalização, com filtro dedicado de infravermelho e rejeição de IR acima de 50% — indicada para quem procura carbono de verdade e cor estável, com 4 anos de garantia. A Ceramic é nanocerâmica com mais de 85% de rejeição de IR em todas as tonalidades — a mesma performance térmica no claro e no escuro — com nitidez High Definition e 5 anos de garantia. Escolha Carbon pela estética carbono; escolha Ceramic pela máxima rejeição térmica dentro da linha Performance.',
  },
  {
    question: 'Qual película INSULFILM™ posso aplicar em teto-solar?',
    answer:
      'Dentro do portfólio solar, a linha Polariz (Performance) é a indicada para teto-solar — construção híbrida metalizada com estética polarizada exclusiva, aplicável também em vidros laterais, traseiro e para-brisa.',
  },
  {
    question: 'Qual a diferença entre Polariz e Polariz Ultra?',
    answer:
      'A Polariz pertence à Solar Performance Films: híbrida metalizada, até 57% de rejeição de energia solar total (TSER), 99% de UV e 5 anos de garantia, em três tonalidades (20, 10 e 05) — aplicável em vidros laterais, traseiro, para-brisa e teto-solar. A Polariz Ultra é o topo absoluto do portfólio, na Solar Premium Films: híbrida metal-cerâmica com 70% de TSER (o recorde) e 75% de IR nas duas tonalidades (15 e 05), com mais de 99% de UV e 10 anos de garantia — aplicável em vidros laterais e traseiro. Ambas com estética polarizada exclusiva.',
  },
  {
    question: 'Quais linhas têm 10 anos de garantia?',
    answer:
      'Apenas as duas linhas da Solar Premium Films oferecem 10 anos de garantia: Matrix (nanocerâmica premium) e Polariz Ultra (ultra híbrida metal-cerâmica).',
  },
  {
    question: 'Qual linha entrega a máxima rejeição de calor (IR/TSER)?',
    answer:
      'A Polariz Ultra é o limite máximo da engenharia INSULFILM™: 70% de TSER (recorde) e 75% de IR nas duas tonalidades. Em seguida vêm a Matrix, com até 75% de IR em qualquer tonalidade, e a Ceramic, com mais de 85% de rejeição de IR mantida no claro e no escuro. Na Performance, a Polariz reflete calor com até 57% de TSER e a Carbon rejeita mais de 50% de IR.',
  },
];

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 bg-accent/15 text-accent border border-accent/30 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
    <Sparkles className="w-3 h-3" />
    {children}
  </span>
);

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
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <h3 className="text-2xl md:text-3xl font-extrabold text-primary">{product.name}</h3>
        {product.badge && <Badge>{product.badge}</Badge>}
      </div>
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
        <meta name="description" content="Compare as 7 linhas de películas solares automotivas INSULFILM™: RayStart, RayPro, Carbon, Ceramic, Polariz, Matrix e Polariz Ultra. Rejeição de calor, UV e garantia lado a lado." />
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="absolute left-0 bottom-6 md:bottom-8 bg-accent/90 text-accent-foreground px-8 md:px-10 py-4 md:py-5 shadow-lg backdrop-blur-sm"
          >
            <p className="text-xl md:text-2xl font-extrabold leading-tight">Películas Premium</p>
            <p className="text-base md:text-lg font-light leading-tight">Sinta a diferença</p>
          </motion.div>
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
                  {i > 0 && <span className="text-white/30 text-lg font-light">|</span>}
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

        {/* ═══ TABELA COMPARATIVA ═══ */}
        <section id="comparar" className="py-24 bg-carbon-gradient relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto text-center mb-12">
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">▪ Comparativo Completo</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground leading-tight">
                As 7 linhas solares INSULFILM™ lado a lado
              </motion.h2>
              <motion.div variants={fadeInUp} className="separator-accent mx-auto mt-6" />
              <motion.p variants={fadeInUp} className="text-primary-foreground/70 mt-6 font-light">
                Construção, tonalidades, bloqueio UV, rejeição de IR, TSER e garantia — para você comparar objetivamente antes de recomendar.
              </motion.p>
            </motion.div>

            {/* Desktop: tabela */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="hidden md:block glass-card rounded-2xl p-2 overflow-x-auto"
            >
              <table className="w-full text-left text-sm text-primary-foreground/90 min-w-[720px]">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-accent">
                    <th className="px-4 py-4 font-bold">Linha</th>
                    <th className="px-4 py-4 font-bold">Construção</th>
                    <th className="px-4 py-4 font-bold">Tons</th>
                    <th className="px-4 py-4 font-bold text-center">UV</th>
                    <th className="px-4 py-4 font-bold text-center">IR</th>
                    <th className="px-4 py-4 font-bold text-center">TSER</th>
                    <th className="px-4 py-4 font-bold text-center">Garantia</th>
                    <th className="px-4 py-4 font-bold text-right">Destaque</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((r) => (
                    <tr key={r.name} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                      <td className="px-4 py-4">
                        <Link to={r.path} className="font-extrabold text-primary-foreground hover:text-accent transition-colors flex items-center gap-1.5">
                          {r.name}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                      <td className="px-4 py-4 text-primary-foreground/70 font-light">{r.construction}</td>
                      <td className="px-4 py-4 text-primary-foreground/70 font-light whitespace-nowrap">{r.tons}</td>
                      <td className="px-4 py-4 text-center font-bold">{r.uv}</td>
                      <td className="px-4 py-4 text-center font-bold">
                        {r.ir === '—' ? <Minus className="w-4 h-4 mx-auto text-primary-foreground/30" /> : r.ir}
                      </td>
                      <td className="px-4 py-4 text-center font-bold">
                        {r.tser === '—' ? <Minus className="w-4 h-4 mx-auto text-primary-foreground/30" /> : r.tser}
                      </td>
                      <td className="px-4 py-4 text-center font-bold whitespace-nowrap">{r.warranty}</td>
                      <td className="px-4 py-4 text-right">
                        <span className="inline-block bg-accent/15 text-accent border border-accent/30 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full whitespace-nowrap">
                          {r.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Mobile: cards */}
            <div className="md:hidden space-y-4">
              {comparisonRows.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="glass-card rounded-2xl p-5"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <Link to={r.path} className="font-extrabold text-primary-foreground text-lg hover:text-accent flex items-center gap-1.5">
                      {r.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="inline-block bg-accent/15 text-accent border border-accent/30 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full whitespace-nowrap">
                      {r.badge}
                    </span>
                  </div>
                  <p className="text-primary-foreground/70 text-sm font-light mb-4">{r.construction}</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="text-primary-foreground/50 text-xs uppercase tracking-wider block mb-0.5">Tons</span><span className="font-bold text-primary-foreground">{r.tons}</span></div>
                    <div><span className="text-primary-foreground/50 text-xs uppercase tracking-wider block mb-0.5">Garantia</span><span className="font-bold text-primary-foreground">{r.warranty}</span></div>
                    <div><span className="text-primary-foreground/50 text-xs uppercase tracking-wider block mb-0.5">UV</span><span className="font-bold text-accent">{r.uv}</span></div>
                    <div><span className="text-primary-foreground/50 text-xs uppercase tracking-wider block mb-0.5">IR</span><span className="font-bold text-accent">{r.ir}</span></div>
                    <div className="col-span-2"><span className="text-primary-foreground/50 text-xs uppercase tracking-wider block mb-0.5">TSER</span><span className="font-bold text-accent">{r.tser}</span></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ QUAL ESCOLHER? ═══ */}
        <section className="py-24 bg-white border-t border-border">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center mb-14">
              <motion.p variants={fadeInUp} className="text-xs uppercase tracking-widest text-accent font-bold mb-3">▪ Guia rápido</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
                Qual linha INSULFILM™ escolher?
              </motion.h2>
              <motion.div variants={fadeInUp} className="separator-accent mx-auto mt-6" />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {chooseProfiles.map((p) => (
                <motion.div key={p.title} variants={fadeInUp} className="border border-border rounded-2xl p-8 bg-muted/20 flex flex-col hover:border-accent/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-5">
                    <p.icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-extrabold text-primary mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground font-light mb-6">{p.subtitle}</p>
                  <div className="space-y-4 flex-1">
                    {p.lines.map((l) => (
                      <Link key={l.name} to={l.path} className="block group">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-accent shrink-0 mt-1" />
                          <div>
                            <span className="font-bold text-primary group-hover:text-accent transition-colors">
                              {l.name} <ArrowRight className="w-3 h-3 inline" />
                            </span>
                            <p className="text-sm text-muted-foreground font-light leading-snug mt-0.5">{l.desc}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
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

        {/* ═══ FAQ COMPARATIVO ═══ */}
        <PdpFaq productName="linha solar INSULFILM™" items={faqItems} variant="dark" />

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
