import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Eye, Sun, Layers, CheckCircle, MessageCircle, ArrowRight, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import ParallaxBreak from '@/components/ParallaxBreak';
import TLDR from '@/components/TLDR';
import ProductImagePlaceholder from '@/components/ProductImagePlaceholder';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import { copyBySegment, type Segment } from '@/content/copyBySegment';
import { getPDPSchemas } from '@/lib/pdpFAQs';
import PDPFaqSection from '@/components/PDPFaqSection';


const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { icon: Zap, label: 'Tecnologia', value: 'Nano Cerâmica' },
  { icon: Eye, label: 'Transmissão de Luz', value: '72%' },
  { icon: Sun, label: 'Rejeição de IR', value: 'Até 81%' },
  { icon: Layers, label: 'Garantia', value: 'Até 5 anos' },
];

const techTable = [
  { version: 'Clear70', privacy: 'Baixo', light: '72%', ir: '81%', uv: '>99%', energy: '50%' },
];

const Clear70 = ({ segment }: { segment?: Segment }) => {

  const segmentPath = segment ? `/${segment}` : '';
  const copy = segment ? copyBySegment['clear70']?.[segment] : undefined;
  const baseCanonical = `https://insulfilm.com.br/arquitetonico${segmentPath}/solar/clear70`;

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    "@context": "https://schema.org", "@type": "Product",
    "name": "INSULFILM™ Clear70",
    "brand": { "@type": "Brand", "name": "INSULFILM™" },
    "description": "Película arquitetônica de tecnologia nano cerâmica com 72% de transparência, rejeição de IR de 81% e proteção UV >99%. Marca registrada.",
    "url": baseCanonical,
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Tecnologia", "value": "Nano Ceramic Infrared Film" },
      { "@type": "PropertyValue", "name": "Transmissão de Luz", "value": "72%" },
      { "@type": "PropertyValue", "name": "Rejeição de Infravermelho", "value": "81%" },
      { "@type": "PropertyValue", "name": "Garantia", "value": "Até 5 anos" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Clear70 | Película Arquitetônica Nano Cerâmica | Alta Transparência</title>
        <meta name="description" content="INSULFILM™ Clear70 — película arquitetônica de tecnologia nano cerâmica com 72% de transparência, rejeição de IR de 81% e proteção UV >99%. Marca registrada." />
        <meta property="og:title" content="INSULFILM™ Clear70 | Película Arquitetônica Nano Cerâmica" />
        <meta property="og:description" content="Conforto térmico sem abrir mão da luminosidade natural. 72% de transmissão de luz, 81% de rejeição IR." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={baseCanonical} />
        <link rel="canonical" href={baseCanonical} />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        {(() => { const s = getPDPSchemas('clear70'); return s ? (<>
          <script type="application/ld+json">{JSON.stringify(s.breadcrumb)}</script>
          <script type="application/ld+json">{JSON.stringify(s.faq)}</script>
        </>) : null; })()}
      </Helmet>
      <main>
        {/* ── HERO ── */}
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5"><Building2 className="w-3.5 h-3.5 mr-2" />Solar Performance</Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
                {copy?.h1 || `Ambientes mais frescos. Luminosidade preservada. Estética intacta.`}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-3xl mx-auto">
                A INSULFILM™ Clear70 foi desenvolvida para fachadas, residências e prédios comerciais que exigem conforto térmico eficiente sem comprometer a clareza visual ou a estética do projeto.
              </motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <TLDR
          question="O que é a película arquitetônica INSULFILM™ Clear70?"
          answer="A INSULFILM™ Clear70 é uma película arquitetônica de nano cerâmica transparente com 72% de transmissão de luz visível e até 81% de rejeição dos raios infravermelhos."
          context="Ideal para fachadas, escritórios e residências que precisam manter a vista panorâmica e a luminosidade natural enquanto reduzem o calor solar."
          specs={[
            { label: 'Tecnologia', value: 'Nano Cerâmica' },
            { label: 'Transparência', value: '72% VLT' },
            { label: 'Rejeição de IR', value: 'Até 81%' },
            { label: 'Bloqueio UV', value: '99%' },
          ]}
        />


        {/* ═══ IMAGEM DO PRODUTO ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ProductImagePlaceholder
              alt="Película arquitetônica INSULFILM™ Clear70 aplicada em fachada de vidro transparente"
              icon={Building2}
              variant="light"
            />
          </div>
        </section>
        {/* ── TRADEMARK BLOCK ── */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <LegalDisclaimer />
          </div>
        </section>

        {/* ── POSITIONING ── */}
        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">Tecnologia nano cerâmica para quem não quer abrir mão de nada.</motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light leading-relaxed mb-4">
                A INSULFILM™ Clear70 combina o que os projetos arquitetônicos mais exigentes precisam: alta eficiência no controle solar com máxima preservação da luz natural e estética neutra que não interfere no design.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light leading-relaxed mb-4">
                Sua composição com nanopartículas cerâmicas entrega rejeição de infravermelho sem metalização — preservando sinais eletrônicos, mantendo aparência neutra e oferecendo desempenho estável ao longo do tempo.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light leading-relaxed">
                Para fachadas, sacadas e janelas onde a claridade é parte do projeto, a Clear70 é a escolha técnica correta.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── SPECS CARDS ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Especificações Técnicas</motion.h2>
              <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
            </motion.div>
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {specs.map((s, i) => (
                <motion.div key={i} variants={fadeInUp}><motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card rounded-2xl h-full text-center"><CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4"><s.icon className="w-7 h-7 text-accent" /></div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">{s.label}</p>
                    <p className="text-xl font-extrabold text-foreground">{s.value}</p>
                  </CardContent></Card>
                </motion.div></motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TECH TABLE ── */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.h3 variants={fadeInUp} className="text-2xl font-extrabold text-foreground mb-8 text-center">Ficha Técnica</motion.h3>
              <motion.div variants={fadeInUp} className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-bold text-foreground">Versão</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Privacidade</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Luz Visível</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Infravermelho</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">UV</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Energia Solar</th>
                  </tr></thead>
                  <tbody>
                    {techTable.map((row) => (
                      <tr key={row.version} className="border-b border-border/50">
                        <td className="py-3 px-4 font-semibold text-foreground">{row.version}</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">{row.privacy}</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">{row.light}</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">{row.ir}</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">{row.uv}</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">{row.energy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
              <p className="text-xs text-muted-foreground/60 text-center mt-4">Garantia: até 5 anos. Consulte condições.</p>
            </motion.div>
          </div>
        </section>

        <ParallaxBreak minHeight="25vh" stats={[
          { value: '72%', label: 'Transmissão de Luz' },
          { value: '81%', label: 'Rejeição IR' },
          { value: '>99%', label: 'Bloqueio UV' },
        ]} />

        {/* ── BENEFITS ── */}
        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-8">Principais Benefícios</motion.h2>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Iluminação natural preservada — 72% de transmissão de luz visível',
                  'Redução do calor por bloqueio de raios infravermelhos (IR) — 81% rejeitados',
                  'Proteção UV >99% — prevenção de desbotamento e danos à pele',
                  'Preserva móveis, pisos e objetos contra degradação solar',
                  'Sem interferência em sinais eletrônicos',
                  'Alta visibilidade com estética completamente discreta',
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

        {/* ── DIFFERENTIALS ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-10">Diferenciais Técnicos</motion.h2>
              <div className="space-y-8">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Tecnologia nano cerâmica</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Controle solar eficaz sem metalização — sem reflexo espelhado, sem interferência de sinal, sem alteração visual do ambiente.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">72% de transmissão de luz visível</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">A luz natural entra. O calor, não. Ideal para projetos onde luminosidade é elemento de design.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Baixa refletividade interna e externa</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Aparência neutra e compatível com qualquer projeto arquitetônico — não muda o visual dos vidros.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Estabilidade técnica</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Nano cerâmica não sofre corrosão e mantém desempenho estável por toda a vida útil garantida.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h3 variants={fadeInUp} className="text-2xl font-extrabold text-foreground mb-6">Para qual projeto é indicada</motion.h3>
              <motion.ul className="space-y-3" variants={stagger}>
                {[
                  'Fachadas comerciais e residenciais com alto índice de luz natural',
                  'Sacadas e ambientes onde escurecer o vidro não é uma opção',
                  'Projetos arquitetônicos onde a estética dos vidros é parte do conceito',
                  'Ambientes com telas, equipamentos eletrônicos ou antenas sensíveis',
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground font-medium">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p variants={fadeInUp} className="text-sm text-muted-foreground/70 mt-6 italic">
                Nota: Para projetos que necessitam de maior privacidade ou maior rejeição térmica com estética diferenciada, as linhas Solar Premium — Orizzonte70, Naturale, Metallico Argento e Specchiato Bronzo — oferecem opções com desempenho superior.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── REINFORCEMENT ── */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground/70 font-light max-w-3xl mx-auto text-center">
              Películas para vidro existem em diversos níveis. INSULFILM™ é a marca registrada que estabeleceu o padrão de qualidade e aplicação no segmento arquitetônico no Brasil. Escolher corretamente é uma decisão técnica — e começa por um atendimento especializado.
            </p>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Eficiência térmica sem comprometer a luminosidade.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">
                A INSULFILM™ Clear70 é a escolha para quem quer eficiência térmica sem comprometer a luminosidade ou a estética do projeto.
              </motion.p>
              <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <Link to="/contato"><MessageCircle className="w-5 h-5" />Solicitar Atendimento</Link>
                </Button>
                <Button asChild variant="outline" className="font-bold text-lg px-8 py-6 rounded-xl">
                  <Link to={`/arquitetonico${segmentPath}/solar`}>Conhecer a linha Solar Premium <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── LEGAL FOOTER ── */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground/50 text-center">
              INSULFILM™ é marca registrada, protegida pela Lei de Propriedade Industrial (Lei nº 9.279/96). O uso do termo por terceiros não possui autorização da titular.
            </p>
          </div>
        </section>
        <PDPFaqSection slug="clear70" />
      </main>
    </>
  );
};

export default Clear70;
