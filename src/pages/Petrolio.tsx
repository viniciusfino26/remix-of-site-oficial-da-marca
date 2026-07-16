import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Eye, Sun, Shield, CheckCircle, MessageCircle, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import ParallaxBreak from '@/components/ParallaxBreak';
import TLDR from '@/components/TLDR';
import ProductImagePlaceholder from '@/components/ProductImagePlaceholder';
import { copyBySegment, type Segment } from '@/content/copyBySegment';
import { getPDPSchemas } from '@/lib/pdpFAQs';
import PDPFaqSection from '@/components/PDPFaqSection';
import TechSpecsHighlight from '@/components/TechSpecsHighlight';


const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { icon: Zap, label: 'Tecnologia', value: 'Hybrid Film' },
  { icon: Eye, label: 'Transmissão de Luz', value: '20–50%' },
  { icon: Sun, label: 'Rejeição de IR', value: 'Até 42%' },
  { icon: Shield, label: 'Garantia', value: '3 anos' },
];

const techTable = [
  { version: 'Petrolio 35', privacy: 'Médio', light: '50%', ir: '36%', uv: '>99%', energy: '46%' },
  { version: 'Petrolio 20', privacy: 'Alto', light: '35%', ir: '38%', uv: '>99%', energy: '47%' },
  { version: 'Petrolio 05', privacy: 'Muito Alto', light: '20%', ir: '42%', uv: '>99%', energy: '52%' },
];

const Petrolio = ({ segment }: { segment?: Segment }) => {

  const segmentPath = segment ? `/${segment}` : '';
  const copy = segment ? copyBySegment['petrolio']?.[segment] : undefined;
  const baseCanonical = `https://insulfilm.com.br/arquitetonico${segmentPath}/solar/petrolio`;

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });


  return (
    <>
      <Helmet>
        <title>INSULFILM™ Petrolio | Película Híbrida Arquitetônica | Estética Preta Sofisticada</title>
        <meta name="description" content="INSULFILM™ Petrolio, película arquitetônica híbrida com estética preta sem refletividade intensa, proteção UV >99% e rejeição de IR de até 42%. Para projetos contemporâneos." />
        <meta property="og:title" content="INSULFILM™ Petrolio | Película Híbrida Arquitetônica" />
        <meta property="og:description" content="Design contemporâneo com controle solar e estética preta sofisticada." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={baseCanonical} />
        <link rel="canonical" href={baseCanonical} />
        {(() => { const s = getPDPSchemas('petrolio'); return s ? (<>
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
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5"><Building2 className="w-3.5 h-3.5 mr-2" />Solar Performance</Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
                {copy?.h1 || `Estética arquitetônica. Desempenho técnico. Sem abrir mão de nenhum dos dois.`}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-3xl mx-auto">
                A INSULFILM™ Petrolio foi desenvolvida para projetos que valorizam a estética preta sem refletividade intensa com controle solar eficiente, unindo tecnologia híbrida, alta nitidez ótica e proteção UV total em uma película discreta e sofisticada.
              </motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <TLDR
          question="O que é a película arquitetônica INSULFILM™ Petrolio?"
          answer="A INSULFILM™ Petrolio é uma película arquitetônica híbrida fumê (charcoal) de alta durabilidade, com 42% de rejeição dos raios infravermelhos."
          context="Indicada para projetos que pedem privacidade e estética escura sem efeito espelho excessivo."
          specs={[
            { label: 'Tecnologia', value: 'Híbrida Fumê' },
            { label: 'Tonalidade', value: 'Charcoal' },
            { label: 'Rejeição de IR', value: '42%' },
            { label: 'Bloqueio UV', value: '99%' },
          ]}
        />



        {/* ═══ IMAGEM DO PRODUTO ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ProductImagePlaceholder
              alt="Película arquitetônica INSULFILM™ Petrolio fumê charcoal em vidraça"
              icon={Building2}
              variant="light"
            />
          </div>
        </section>
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
          </div>
        </section>

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">Tecnologia híbrida com o visual que a arquitetura contemporânea exige.</motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light leading-relaxed mb-4">
                A INSULFILM™ Petrolio combina poliéster tingido em profundidade com partículas metálicas, resultando em uma película com durabilidade e estabilidade de cor superiores às películas tingidas convencionais, sem o efeito espelhado intenso das películas metalizadas.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light leading-relaxed">
                O tom preto sofisticado sem efeito espelhado proporciona sofisticação arquitetônica discreta, conforto visual interno e controle de luminosidade, ideal para fachadas, janelas residenciais e ambientes internos envidraçados que exigem performance sem renunciar ao design.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── TECH SPECS HIGHLIGHT ── */}
        <TechSpecsHighlight
          title="Ficha Técnica Petrolio"
          subtitle="Estética preta sofisticada com controle solar real."
          highlights={[
            { value: '42%', label: 'Rejeição IR', sublabel: 'até (versão 05)' },
            { value: '52%', label: 'Energia Solar', sublabel: 'Rejeitada' },
            { value: '>99%', label: 'Bloqueio UV', sublabel: 'Proteção total' },
            { value: '3 anos', label: 'Garantia', sublabel: 'INSULFILM™' },
          ]}
          techTable={techTable}
          warrantyNote="Garantia: até 3 anos. Consulte condições com um Centro Autorizado."
        />

        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-8">Principais Benefícios</motion.h2>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Estética preta sofisticada, perfeita para projetos arquitetônicos contemporâneos',
                  'Conforto térmico: rejeição eficiente de calor sem reflexos espelhados',
                  'Proteção UV >99%, bloqueio total de raios ultravioleta',
                  'Versatilidade: três opções de transparência para diferentes níveis de privacidade',
                  'Estabilidade de cor superior às películas tingidas convencionais',
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInLeft} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-primary-foreground font-medium">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-10">Diferenciais Técnicos</motion.h2>
              <div className="space-y-8">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Tecnologia híbrida</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">A combinação de tingimento profundo com partículas metálicas entrega durabilidade estrutural superior à película apenas tingida, com maior resistência ao desbotamento e à alteração de cor ao longo do tempo.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Estética preta sem reflexo espelhado</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Visual preto sofisticado com aparência que não irradia reflexo intenso, sem o brilho espelhado que algumas películas metalizadas produzem. Ideal para projetos que valorizam a discrição estética.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Excelente claridade ótica interna</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Apesar do acabamento escurecido por fora, a visibilidade interna é preservada com qualidade ótica elevada.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Proteção UV &gt;99%</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Bloqueio total de radiação ultravioleta, protegendo ocupantes, mobiliário e revestimentos.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.h3 variants={fadeInUp} className="text-2xl font-extrabold text-foreground mb-8 text-center">Comparativo na Linha Performance</motion.h3>
              <motion.div variants={fadeInUp} className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-bold text-foreground"></th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Clear70</th>
                    <th className="text-center py-3 px-4 font-bold text-accent">Petrolio</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Grigio Invertito</th>
                  </tr></thead>
                  <tbody>
                    <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium text-foreground">Tecnologia</td><td className="text-center py-3 px-4 text-muted-foreground">Nano cerâmica</td><td className="text-center py-3 px-4 font-semibold text-foreground">Híbrida</td><td className="text-center py-3 px-4 text-muted-foreground">Metalizada invertida</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium text-foreground">Visual</td><td className="text-center py-3 px-4 text-muted-foreground">Neutro, transparente</td><td className="text-center py-3 px-4 font-semibold text-foreground">Preto sem refletividade</td><td className="text-center py-3 px-4 text-muted-foreground">Fumê espelhado</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium text-foreground">Privacidade máx.</td><td className="text-center py-3 px-4 text-muted-foreground">Baixo</td><td className="text-center py-3 px-4 font-semibold text-foreground">Muito Alto</td><td className="text-center py-3 px-4 text-muted-foreground">Muito Alto</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium text-foreground">IR rejeitado (máx.)</td><td className="text-center py-3 px-4 text-muted-foreground">81%</td><td className="text-center py-3 px-4 font-semibold text-foreground">42%</td><td className="text-center py-3 px-4 text-muted-foreground">75%</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium text-foreground">Garantia</td><td className="text-center py-3 px-4 text-muted-foreground">5 anos</td><td className="text-center py-3 px-4 font-semibold text-foreground">3 anos</td><td className="text-center py-3 px-4 text-muted-foreground">3 anos</td></tr>
                  </tbody>
                </table>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-xs text-muted-foreground/60 text-center mt-4 italic">
                A Petrolio prioriza estética arquitetônica preta com tecnologia híbrida, para quem busca visual contemporâneo sem o efeito espelhado intenso.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground/70 font-light max-w-3xl mx-auto text-center">
              Películas para vidro existem em diversos níveis. INSULFILM™ é a marca registrada que estabeleceu o padrão de qualidade e aplicação no segmento arquitetônico no Brasil. Escolher corretamente é uma decisão técnica.
            </p>
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Estética e desempenho em uma única solução.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">
                A INSULFILM™ Petrolio integra o portfólio da marca registrada que definiu o padrão do segmento, para projetos que exigem estética e desempenho.
              </motion.p>
              <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <Link to="/contato"><MessageCircle className="w-5 h-5" />Solicitar Atendimento</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center">
              INSULFILM™ é marca registrada, protegida pela Lei de Propriedade Industrial (Lei nº 9.279/96). O uso do termo por terceiros não possui autorização da titular.
            </p>
          </div>
        </section>
        <PDPFaqSection slug="petrolio" />
      </main>
    </>
  );
};

export default Petrolio;
