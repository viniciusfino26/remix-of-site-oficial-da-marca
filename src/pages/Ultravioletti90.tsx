import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Eye, Shield, Sun, Layers, CheckCircle, ArrowRight, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import ParallaxBreak from '@/components/ParallaxBreak';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import { copyBySegment, type Segment } from '@/content/copyBySegment';


const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { icon: Eye, label: 'Transmissão de Luz', value: '88%' },
  { icon: Shield, label: 'Bloqueio UV', value: '>99%' },
  { icon: Sun, label: 'Aparência', value: 'Incolor' },
  { icon: Layers, label: 'Garantia', value: '5 anos' },
];

const techTable = [
  { version: 'Ultravioletti90', privacy: 'Nenhuma', light: '88%', ir: '11%', uv: '>99%', energy: '16%' },
];

const Ultravioletti90 = ({ segment }: { segment?: Segment }) => {

  const segmentPath = segment ? `/${segment}` : '';
  const copy = segment ? copyBySegment['ultravioletti90']?.[segment] : undefined;
  const baseCanonical = `https://insulfilm.com.br/arquitetonico${segmentPath}/solar/ultravioletti90`;

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextureY = useSpring(useTransform(heroProgress, [0, 1], [0, 35]), { stiffness: 60, damping: 20 });

  const schemaMarkup = {
    "@context": "https://schema.org", "@type": "Product",
    "name": "INSULFILM™ Ultravioletti90",
    "brand": { "@type": "Brand", "name": "INSULFILM™" },
    "description": "Película arquitetônica incolor com bloqueio de >99% de raios UV. Proteção máxima invisível para vidros, sem alterar estética ou luminosidade.",
    "url": baseCanonical,
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Tecnologia", "value": "UV Concentrated" },
      { "@type": "PropertyValue", "name": "Transmissão de Luz", "value": "88%" },
      { "@type": "PropertyValue", "name": "Bloqueio UV", "value": ">99%" },
      { "@type": "PropertyValue", "name": "Garantia", "value": "Até 5 anos" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>INSULFILM™ Ultravioletti90 | Película Anti-UV Invisível | &gt;99% Bloqueio UV</title>
        <meta name="description" content="INSULFILM™ Ultravioletti90 — película arquitetônica incolor com bloqueio de >99% de raios UV. Proteção máxima invisível para vidros, sem alterar estética ou luminosidade." />
        <link rel="canonical" href={baseCanonical} />
        <meta property="og:title" content="INSULFILM™ Ultravioletti90 | Película Anti-UV Invisível | >99% Bloqueio UV" />
        <meta property="og:description" content="INSULFILM™ Ultravioletti90 — película arquitetônica incolor com bloqueio de >99% de raios UV." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={baseCanonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <main>
        {/* ── HERO ── */}
        <section ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: heroTextureY }} />
          <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center" style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5"><Building2 className="w-3.5 h-3.5 mr-2" />Solar Premium — Arquitetônica</Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
                {copy?.h1 || `INSULFILM™ Ultravioletti90 — proteção UV máxima com transparência absoluta`}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">Proteção UV de 99%. O vidro parece sem película. Porque a proteção não precisa aparecer.</motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ── TRADEMARK ── */}
        <section className="py-10 bg-background border-b border-border/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm text-muted-foreground leading-relaxed">Muitas pessoas utilizam o termo "insulfilm" ou "insulfilme" para se referir a películas para vidro. Esse é um uso popular. <strong className="text-foreground">INSULFILM™ é marca registrada, com titularidade exclusiva e referência no segmento.</strong> O uso da marca por terceiros não é autorizado.</p>
          </div>
        </section>

        {/* ── POSITIONING ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-8">Uma categoria única: proteção sem presença visual.</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed mb-6">A INSULFILM™ Ultravioletti90 existe para resolver um problema específico: proteger ambientes, pessoas e materiais contra a radiação ultravioleta sem alterar minimamente a aparência dos vidros.</motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">É a única película da linha arquitetônica INSULFILM™ com transmissão de luz visível de 88% e aparência completamente incolor após aplicação. Para quem precisa de proteção UV máxima sem nenhum compromisso estético ou de luminosidade, não existe alternativa superior dentro do portfólio.</motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── SPECS CARDS ── */}
        <section className="py-24 bg-card/30 overflow-hidden">
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
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 text-center">Ficha Técnica Completa</motion.h2>
              <motion.div variants={fadeInUp} className="overflow-x-auto">
                <Table>
                  <TableHeader><TableRow className="border-accent/20">
                    <TableHead className="text-accent font-bold">Versão</TableHead>
                    <TableHead>Privacidade</TableHead><TableHead>Luz Visível</TableHead>
                    <TableHead>IR Rejeitado</TableHead><TableHead>UV Rejeitado</TableHead><TableHead>Energia Solar</TableHead>
                  </TableRow></TableHeader>
                  <TableBody>
                    {techTable.map((row, i) => (
                      <TableRow key={i}><TableCell className="font-bold text-foreground">{row.version}</TableCell>
                        <TableCell>{row.privacy}</TableCell><TableCell>{row.light}</TableCell>
                        <TableCell>{row.ir}</TableCell><TableCell className="text-accent font-semibold">{row.uv}</TableCell><TableCell>{row.energy}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mt-4">Garantia: até 5 anos. Consulte condições com um dos nossos especialistas.</motion.p>
            </motion.div>
          </div>
        </section>

        <ParallaxBreak minHeight="35vh" stats={[
          { value: '>99%', label: 'Bloqueio UV' },
          { value: '88%', label: 'Transmissão de Luz' },
          { value: 'Incolor', label: 'Aparência' },
        ]} />

        {/* ── BENEFITS ── */}
        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-8">Principais Benefícios</motion.h2>
              <motion.ul className="space-y-4" variants={stagger}>
                {[
                  'Bloqueio >99% de raios UV — proteção máxima para pele, móveis e eletrônicos',
                  '88% de transmissão de luz visível — a mais alta da linha arquitetônica',
                  'Aparência completamente incolor e imperceptível após aplicação',
                  'Proteção contínua: desempenho mantido mesmo com total transparência',
                  'Visual limpo: não interfere na estética de nenhum projeto',
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInLeft} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" /><span className="text-primary-foreground font-medium">{text}</span></motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-10">Para qual aplicação é indicada</motion.h2>
              <div className="space-y-8">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Museus, galerias e espaços culturais</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Obras de arte, tecidos e materiais sensíveis à radiação UV exigem proteção máxima sem qualquer escurecimento dos vidros.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Clínicas, hospitais e espaços de saúde</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Proteção contínua contra UVA e UVB sem alterar a luminosidade terapêutica dos ambientes.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Showrooms e espaços expositivos</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Produtos expostos protegidos sem que a película interfira na percepção visual dos materiais.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Residências com vidros panorâmicos</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Para quem não quer abrir mão da luminosidade total mas precisa de proteção UV real para a família e o mobiliário.</p>
                </motion.div>
              </div>
              <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mt-8 p-4 bg-card/50 rounded-xl border border-border/30"><strong>Nota técnica:</strong> A Ultravioletti90 não tem foco em controle térmico — sua rejeição de IR é de 11%. Para ambientes que precisam simultaneamente de proteção UV e controle térmico, a <Link to="/arquitetonico/solar/orizzonte70" className="text-accent hover:underline">Orizzonte70</Link> ou o <Link to="/arquitetonico/solar/naturale" className="text-accent hover:underline">Naturale</Link> são as indicações corretas.</motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── DIFFERENTIALS ── */}
        <section className="py-24 bg-card/30 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-10">Diferenciais Técnicos</motion.h2>
              <div className="space-y-10">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Bloqueio UV avançado (&gt;99% UVA e UVB)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Filtragem de espectro completo — sem lacunas na cobertura de proteção UV.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">88% de transmissão de luz visível</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">A mais alta da linha arquitetônica INSULFILM™ — ideal para projetos onde a luminosidade é inegociável.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Aparência incolor e imperceptível</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">A película não é percebida visualmente após a aplicação — o projeto mantém exatamente a aparência original.</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-foreground mb-2">Alta durabilidade e estabilidade técnica</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Desempenho mantido por toda a vida útil garantida, sem degradação progressiva da capacidade de bloqueio UV.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── REINFORCEMENT ── */}
        <section className="py-16 bg-background border-t border-border/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-muted-foreground font-light leading-relaxed">Películas para vidro existem em diversos níveis. <strong className="text-foreground">INSULFILM™ é a marca registrada que estabeleceu o padrão de qualidade e aplicação no segmento arquitetônico no Brasil.</strong> Escolher corretamente é uma decisão técnica.</p>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-24 bg-carbon-gradient overflow-hidden relative">
          <div className="absolute inset-0 bg-diagonal-texture" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Solicite Atendimento Nacional</motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-lg font-light mb-8">A INSULFILM™ Ultravioletti90 é a solução definitiva para quem precisa de proteção UV máxima sem nenhum comprometimento visual — com a procedência da marca registrada referência no segmento.</motion.p>
              <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <Link to="/contato"><ArrowRight className="w-5 h-5" />Solicitar atendimento nacional</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── LEGAL FOOTER ── */}
        <section className="py-8 bg-background border-t border-border/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-xs text-muted-foreground">INSULFILM™ é marca registrada, protegida pela Lei de Propriedade Industrial (Lei nº 9.279/96). O uso do termo por terceiros não possui autorização da titular.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Ultravioletti90;
