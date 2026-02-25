import { Helmet } from 'react-helmet-async';
import ParallaxBreak from '@/components/ParallaxBreak';
import { motion } from 'framer-motion';
import { Paintbrush, Shield, Sparkles, Layers, Droplets, Thermometer, FlaskConical, MessageCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const PRODUCT_NAME = 'INSULFILM™ Phantom 6mil';
const CANONICAL = 'https://www.insulfilm.com.br/automotivo/ppf/phantom-6mil';

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: PRODUCT_NAME,
  description: 'Película PPF de proteção de pintura com 6 mil de espessura (~150 microns), acabamento transparente gloss, composição de 5 camadas e garantia de 5 anos.',
  brand: { '@type': 'Brand', name: 'INSULFILM™' },
  url: CANONICAL,
  category: 'Paint Protection Film',
  offers: { '@type': 'Offer', priceCurrency: 'BRL', availability: 'https://schema.org/InStock' },
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Espessura', value: '6 mil / ~150 microns' },
    { '@type': 'PropertyValue', name: 'Acabamento', value: 'Transparente Gloss' },
    { '@type': 'PropertyValue', name: 'Garantia', value: '5 anos' },
  ],
};

const protections = ['Pedras', 'Granizo', 'Manchas', 'Insetos e Pássaros', 'Riscos', 'Lascas', 'Arranhões', 'e muito mais'];
const highlights = ['Imperceptível', 'Brilho Intenso', 'Regenerativo', 'Hidrofóbico', 'Anti-Amarelamento'];

const compositionLayers = [
  { title: 'Selante de brilho intenso', desc: 'Revestimento que potencializa o brilho da pintura.', icon: Sparkles },
  { title: 'Camada transparente hidrofóbica', desc: 'Revestimento de poliuretano flexível com propriedades anti-contaminante, hidro-repelente e regenerativa para correção de arranhões superficiais leves.', icon: Droplets },
  { title: 'Uretano Termoplástico (TPU)', desc: 'Resistente a rachaduras, impactos leves e perfurações. Formulado para excelente rejeição de calor e raios UV.', icon: Shield },
  { title: 'Adesivo', desc: 'Acrílico anti-amarelamento com elasticidade para manuseio e aderência às superfícies curvas.', icon: FlaskConical },
  { title: 'Forro protetor descartável', desc: 'Forro fosco de poliéster para proteção do adesivo.', icon: Layers },
];

const physicalProps = [
  { prop: 'Espessura total — livre de camadas protetivas', value: '6 mil / ≈150 microns' },
  { prop: 'Força do adesivo contra arrancamento', value: '≥15N / 25mm' },
  { prop: 'Força para rompimento da película', value: '≈320 lbs/in' },
  { prop: 'Intervalo de resistência à temperatura', value: '-35°C ~ 116°C' },
];

const WHATSAPP = `https://wa.me/5511976136911?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o INSULFILM™ Phantom 6mil.')}`;

const AutomotivoPhantom6 = () => (
  <>
    <Helmet>
      <title>{PRODUCT_NAME} — PPF Proteção de Pintura Automotiva | INSULFILM™</title>
      <meta name="description" content="INSULFILM™ Phantom 6mil: película PPF transparente gloss com 5 camadas de proteção, 150 microns de espessura e garantia de 5 anos." />
      <link rel="canonical" href={CANONICAL} />
      <meta property="og:title" content={`${PRODUCT_NAME} — PPF Automotivo`} />
      <meta property="og:description" content="Proteção invisível de 6mil contra riscos, pedras e intempéries." />
      <meta property="og:url" content={CANONICAL} />
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </Helmet>
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <Paintbrush className="w-3.5 h-3.5 mr-2" />PPF — 6 mil
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-5 leading-[0.95]">
              {PRODUCT_NAME.replace('INSULFILM™', 'INSULFILM™ ').replace('  ', ' ')}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70 font-light max-w-2xl mx-auto italic">
              "Proteção invisível para trafegar confiante.<br />Depois do dano, será tarde."
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 mb-6">
              <p className="text-sm text-primary-foreground/50 uppercase tracking-wider mb-3">Livre-se da preocupação com:</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
                {protections.map((p, i) => (
                  <Badge key={i} variant="outline" className="border-accent/30 text-accent/90 text-xs px-3 py-1">{p}</Badge>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mt-6">
              {highlights.map((h, i) => (
                <span key={i} className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary-foreground/80">
                  {i > 0 && <span className="text-accent mx-1">|</span>}{h}
                </span>
              ))}
            </motion.div>
            <motion.div variants={scaleIn} className="flex justify-center mt-8"><div className="separator-accent" /></motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Product Name */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-2">
              Phantom 6mil <span className="text-accent">Transparente Gloss</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light max-w-lg mx-auto">
              Filme PPF de última geração com 5 camadas de proteção — espessura 6 mil
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
        </div>
      </section>

      <ParallaxBreak minHeight="25vh" stats={[
        { value: '6', label: 'mil de espessura' },
        { value: '5', label: 'Camadas' },
        { value: '5', label: 'Anos Garantia' },
      ]} />

      {/* Composition */}
      <section className="py-20 bg-carbon-gradient">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">Composição</motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/50 font-light">5 camadas de engenharia de proteção</motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="max-w-4xl mx-auto space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {compositionLayers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <motion.div key={i} variants={fadeInLeft}>
                  <Card className="glass-card rounded-2xl border-l-4 border-l-accent/40">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary-foreground mb-1">{layer.title}</h3>
                        <p className="text-primary-foreground/60 font-light text-sm leading-relaxed">{layer.desc}</p>
                      </div>
                      <span className="text-accent/30 font-extrabold text-2xl ml-auto shrink-0">0{i + 1}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Physical Properties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
              <Thermometer className="w-8 h-8 inline-block mr-3 text-accent" />Propriedades Físicas
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
          </motion.div>
          <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Card className="glass-card rounded-2xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-accent/20">
                    <TableHead className="text-primary-foreground/80 font-bold text-sm">Propriedade</TableHead>
                    <TableHead className="text-right text-accent font-bold text-sm">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {physicalProps.map((row, i) => (
                    <TableRow key={i} className="border-b border-border/30 hover:bg-accent/5 transition-colors">
                      <TableCell className="text-primary-foreground/70 text-sm font-medium py-4">{row.prop}</TableCell>
                      <TableCell className="text-right text-primary-foreground font-bold text-sm py-4">{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Warranty */}
      <section className="py-20 bg-carbon-gradient">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">
                <Shield className="w-8 h-8 inline-block mr-3 text-accent" />Garantia do Produto
              </h2>
              <div className="flex justify-center mt-4"><div className="separator-accent" /></div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="glass-card rounded-2xl border-t-2 border-t-accent/30">
                <CardContent className="p-8">
                  <p className="text-primary-foreground/70 font-light leading-relaxed text-sm md:text-base">
                    Para você dirigir tranquilo, sabendo que seu investimento está protegido por muito tempo, oferecemos — com confiança — a <span className="text-accent font-bold">garantia de cinco anos</span> desde a data de instalação em superfícies metálicas.
                  </p>
                  <p className="text-primary-foreground/70 font-light leading-relaxed text-sm md:text-base mt-4">
                    A cobertura compreende: <span className="text-primary-foreground font-semibold">rachaduras, formação de bolhas ou amarelamento</span> causados apenas por defeitos na fabricação.
                  </p>
                  <div className="flex items-start gap-3 mt-6 p-4 rounded-xl bg-accent/5 border border-accent/10">
                    <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-xs text-primary-foreground/50">
                      A garantia é válida exclusivamente para instalações realizadas por aplicadores autorizados INSULFILM™. Consulte as condições completas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Proteja a Pintura do Seu Veículo</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light mb-8 max-w-lg mx-auto">
              Solicite um orçamento personalizado para o {PRODUCT_NAME}.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg text-lg px-10 py-6 rounded-xl">
                  <MessageCircle className="w-5 h-5 mr-2" /> Solicitar Orçamento
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default AutomotivoPhantom6;
