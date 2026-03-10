import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Droplets, Eye, Layers, Sun, CheckCircle, ArrowRight, Gem, TreeDeciduous, Building, GlassWater, MessageCircle, ChevronDown, Home, UtensilsCrossed, Hotel, Briefcase, Quote, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ParallaxBreak from '@/components/ParallaxBreak';

import phantomSolutionThickness from '@/assets/phantom-solution-thickness.png';

// ═══════════════════════ ANIMATION VARIANTS ═══════════════════════

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

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// ═══════════════════════ DATA ═══════════════════════

const glossBenefits = [
  { icon: Sparkles, title: 'Preserva o Brilho', desc: 'Mantém a profundidade e reflexos impecáveis como no dia da entrega.' },
  { icon: Droplets, title: 'Barreira Química', desc: 'Impede manchas de vinho, cítricos e produtos agressivos.' },
  { icon: Shield, title: 'Resistência a Riscos', desc: 'Protege contra abrasões do uso cotidiano.' },
  { icon: Eye, title: 'Limpeza Facilitada', desc: 'Superfície ultra lisa que facilita a manutenção diária.' },
];

const matteBenefits = [
  { icon: Layers, title: 'Respeito ao Projeto', desc: 'Protege sem adicionar brilho ou reflexo indesejado.' },
  { icon: Eye, title: 'Toque Aveludado', desc: 'Preserva a experiência sensorial original do acabamento.' },
  { icon: Droplets, title: 'Anti-Óleo', desc: 'Barreira contra impressões digitais e ácidos leves.' },
  { icon: Shield, title: 'Uniformidade', desc: 'Evita o polimento acidental durante a limpeza.' },
];

const materials = [
  { icon: Gem, title: 'Mármore', desc: 'Proteção contra manchas de ácidos e riscos em superfícies polidas ou acetinadas.' },
  { icon: TreeDeciduous, title: 'Madeira', desc: 'Bloqueio contra umidade, desgaste e descoloração por luz solar.' },
  { icon: Building, title: 'Aço Inox', desc: 'Evita oxidação, marcas de digitais e riscos em elevadores e painéis.' },
  { icon: GlassWater, title: 'Vidro', desc: 'Preserva a transparência e clareza em divisórias e fachadas internas.' },
];

const segments = [
  { icon: Home, title: 'Residências', desc: 'Proteção que valoriza a sua casa e mantém a beleza sempre impecável.' },
  { icon: UtensilsCrossed, title: 'Restaurantes', desc: 'Proteção para cada ambiente, mantendo o acolhimento que torna seu restaurante único.' },
  { icon: Hotel, title: 'Hotéis', desc: 'Preservando a elegância do seu hotel e garantindo uma experiência para cada hóspede.' },
  { icon: Briefcase, title: 'Escritórios', desc: 'Soluções que protegem seu espaço de trabalho, refletindo cuidado e profissionalismo.' },
];

const testimonials = [
  { quote: 'Aplicamos o Phantom em todo o mármore da nossa sala e cozinha. Depois de dois anos, está exatamente como no dia da entrega. Não preciso mais ter medo de manchas.', name: 'Fernanda Oliveira', role: 'Proprietária residencial' },
  { quote: 'Recomendo o Phantom para todos os meus projetos de alto padrão. É a única solução que protege sem comprometer a intenção do design original.', name: 'Ricardo Menezes', role: 'Arquiteto de interiores' },
  { quote: 'Nosso balcão de aço inox vivia com marcas de digitais e riscos. Com o Phantom, a manutenção caiu pela metade e os clientes elogiam o visual impecável.', name: 'Juliana Costa', role: 'Proprietária de restaurante' },
];

const faqs = [
  { q: 'Vai mudar o visual do meu ambiente?', a: 'Não. A película Phantom foi projetada para ser completamente invisível. A versão Gloss mantém o brilho original e a versão Matte preserva o toque aveludado e a aparência fosca, sem alterar cores ou texturas.' },
  { q: 'Se eu quiser tirar depois, posso?', a: 'Sim. A película pode ser removida profissionalmente sem deixar resíduos ou danificar a superfície original. É uma proteção reversível.' },
  { q: 'Funciona em ambientes com muita circulação?', a: 'Absolutamente. O Phantom foi desenvolvido para ambientes de alto tráfego como lobbies de hotéis, restaurantes e corredores comerciais. A película de 180 microns resiste a impactos e abrasões do uso intenso.' },
  { q: 'Essa película realmente protege ou é só estética?', a: 'Proteção real e comprovada. O Phantom cria uma barreira física contra riscos, manchas ácidas, produtos químicos, óleos e raios UV. Não é apenas cosmético — é engenharia de proteção.' },
  { q: 'Quanto tempo leva pra instalar?', a: 'A instalação é rápida e limpa. Dependendo da área, um ambiente pode ser protegido em poucas horas. Nossa equipe avalia o espaço e fornece um cronograma preciso antes do início.' },
  { q: 'É resistente com criança, pet ou muito movimento?', a: 'Sim. O Phantom é ideal para famílias com crianças e pets. Protege contra arranhões de unhas, marcas de brinquedos e derramamentos acidentais, mantendo a superfície sempre como nova.' },
];

const phantomSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "INSULFILM™ Phantom Arquitetônico | PPF para Superfícies",
  "description": "Película de proteção de superfícies (PPF) para mármores, madeiras, aço inox e vidros. Preservando o design dos seus acabamentos.",
  "url": "https://www.insulfilm.com.br/phantom-arquitetonico",
  "publisher": { "@type": "Brand", "name": "INSULFILM™" }
};

const PhantomArquitetonico = () => {
  return (
    <>
    <Helmet>
      <title>INSULFILM™ Phantom Arquitetônico | PPF para Superfícies</title>
      <meta name="description" content="Película de proteção de superfícies (PPF) para mármores, madeiras, aço inox e vidros. Preservando o design dos seus acabamentos." />
      <meta property="og:title" content="INSULFILM™ Phantom Arquitetônico | PPF para Superfícies" />
      <meta property="og:description" content="Película de proteção de superfícies (PPF) para mármores, madeiras, aço inox e vidros. Preservando o design dos seus acabamentos." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="LINK_DA_IMAGEM_AQUI" />
      <meta property="og:url" content="https://www.insulfilm.com.br/phantom-arquitetonico" />
      <script type="application/ld+json">{JSON.stringify(phantomSchema)}</script>
    </Helmet>
    <main>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-carbon-gradient">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInLeft}>
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-6 text-xs tracking-widest uppercase">
                Proteção de Superfícies Arquitetônicas
              </Badge>
            </motion.div>
            <motion.p variants={fadeInLeft} className="text-sm uppercase tracking-[0.4em] text-accent mb-3 font-semibold">
              INSULFILM™
            </motion.p>
            <motion.h1 variants={fadeInLeft} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              Phantom
            </motion.h1>
            <motion.p variants={fadeInLeft} className="text-xl md:text-2xl text-primary-foreground/80 font-light mb-2">
              Preservando o Design dos Seus Acabamentos
            </motion.p>
            <motion.p variants={fadeInLeft} className="text-base text-primary-foreground/50 font-light mb-8">
              Um guia para arquitetos, designers e proprietários exigentes.
            </motion.p>
            <motion.div variants={scaleIn}>
              <a
                href="https://wa.me/5511936182746?text=Olá! Gostaria de saber mais sobre a película Phantom para proteção de superfícies arquitetônicas."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all text-base px-8">
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="text-primary-foreground/50 text-xs tracking-widest uppercase font-light">Continue navegando</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6 text-accent" />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ═══════════════════════ SOLUÇÕES POR SEGMENTO ═══════════════════════ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4 text-xs tracking-widest uppercase">
                Segmentos
              </Badge>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Soluções para Cada Ambiente
              </h2>
              <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                Proteção sob medida para os ambientes mais exigentes do mundo.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {segments.map((s, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                  <Card className="card-premium-hover h-full border-t-2 border-t-accent/30 text-center group">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:shadow-lg transition-shadow duration-300">
                        <s.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-lg font-extrabold text-foreground mb-3">{s.title}</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ParallaxBreak minHeight="35vh" stats={[
        { value: '180μm', label: 'Espessura' },
        { value: 'Gloss', label: '& Matte' },
        { value: '4+', label: 'Materiais' },
      ]} />

      {/* ═══════════════════════ A DECISÃO QUE DEFINE A ATMOSFERA ═══════════════════════ */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              A Decisão que Define a Atmosfera
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground font-light leading-relaxed">
              Escolher um acabamento é definir o caráter de um espaço. Do drama luminoso de uma superfície gloss à elegância tátil de um acabamento matte, essa decisão impacta como a luz interage com o ambiente.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm text-accent font-semibold mt-4 tracking-wide">
              Presente nos ambientes mais exigentes — de suítes presidenciais a restaurantes de alta gastronomia.
            </motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInLeft}>
              <Card className="card-premium-hover h-full border-t-2 border-t-accent/30">
                <CardContent className="p-8">
                  <Sparkles className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-extrabold text-foreground mb-3">Gloss — Declaração Ousada</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground font-light">
                    <li><span className="font-semibold text-foreground">Luz:</span> Amplia a luz natural e artificial com efeito espelhado.</li>
                    <li><span className="font-semibold text-foreground">Cor:</span> Intensifica a profundidade visual e os veios naturais.</li>
                    <li><span className="font-semibold text-foreground">Impacto:</span> Transmite luxo moderno e sofisticação vibrante.</li>
                  </ul>
                  <p className="mt-4 text-accent text-sm font-semibold italic">"Brilho não se faz, se preserva."</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <Card className="card-premium-hover h-full border-t-2 border-t-accent/30">
                <CardContent className="p-8">
                  <Layers className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-extrabold text-foreground mb-3">Matte — O Luxo Silencioso</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground font-light">
                    <li><span className="font-semibold text-foreground">Toque:</span> Sensação aveludada e sedosa, natureza sensorial.</li>
                    <li><span className="font-semibold text-foreground">Luz:</span> Absorve a luminosidade para uma atmosfera calma.</li>
                    <li><span className="font-semibold text-foreground">Estética:</span> Ideal para o minimalismo onde a forma prevalece sobre o reflexo.</li>
                  </ul>
                  <p className="mt-4 text-accent text-sm font-semibold italic">"Um fosco perfeito não admite correções — apenas preservação."</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ QUANDO O DESIGN ENCONTRA O USO DIÁRIO ═══════════════════════ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 variants={fadeInLeft} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
                  Quando o Design Encontra o Uso Diário
                </motion.h2>
                <motion.p variants={fadeInLeft} className="text-lg text-primary-foreground/60 font-light leading-relaxed mb-8">
                  Superfícies de alto padrão não falham por falta de beleza — <span className="text-accent font-semibold">falham pelo uso.</span> O conflito central do design de interiores é que as superfícies mais bonitas são as mais expostas.
                </motion.p>
                <motion.div variants={fadeInLeft} className="space-y-3">
                  {['Um copo de vinho apoiado sem cuidado.', 'Um respingo de limão.', 'A limpeza com um pano abrasivo.'].map((text, i) => (
                    <div key={i} className="glass-card p-4 rounded-xl">
                      <p className="text-sm text-primary-foreground/80 font-light italic">"{text}"</p>
                    </div>
                  ))}
                </motion.div>
                <motion.p variants={fadeInLeft} className="text-primary-foreground/50 font-light mt-6">
                  Pequenos gestos que deixam marcas permanentes.
                </motion.p>
              </div>

              <motion.div variants={fadeInRight}>
                <Card className="glass-card border-primary-foreground/10">
                  <CardContent className="p-8 text-center">
                    <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
                    <p className="text-primary-foreground/70 font-light text-sm leading-relaxed">
                      O uso diário compromete até os acabamentos mais resistentes. A solução é proteger antes que o dano aconteça.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ ANATOMIA DO DANO ═══════════════════════ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 text-center">
              Anatomia do Dano
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mb-12">
              <div className="separator-accent" />
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-destructive/20">
                <CardContent className="p-8">
                  <h3 className="text-lg font-extrabold text-foreground mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" /> Danos ao Gloss
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-bold text-foreground text-sm">Micro-riscos</p>
                      <p className="text-sm text-muted-foreground font-light">O uso cotidiano cria uma rede de abrasões que difunde a luz e mata o brilho.</p>
                    </li>
                    <li>
                      <p className="font-bold text-foreground text-sm">Manchas Ácidas</p>
                      <p className="text-sm text-muted-foreground font-light">Vinho e cítricos causam manchas permanentes e opacas.</p>
                    </li>
                    <li>
                      <p className="font-bold text-foreground text-sm">Perda de Brilhância</p>
                      <p className="text-sm text-muted-foreground font-light">O desgaste gradualmente diminui o impacto do design em áreas de uso intenso.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardContent className="p-8">
                  <h3 className="text-lg font-extrabold text-foreground mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-accent" /> Danos ao Matte
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-bold text-foreground text-sm">Quebra de Uniformidade</p>
                      <p className="text-sm text-muted-foreground font-light">O dano não é a perda de brilho, mas a interrupção da superfície visual.</p>
                    </li>
                    <li>
                      <p className="font-bold text-foreground text-sm">Manchas de Óleo</p>
                      <p className="text-sm text-muted-foreground font-light">A porosidade absorve digitais e óleos, criando marcas escuras semipermanentes.</p>
                    </li>
                    <li>
                      <p className="font-bold text-foreground text-sm">Polimento Indesejado</p>
                      <p className="text-sm text-muted-foreground font-light">A limpeza inadequada pode "polir" a superfície, criando pontos brilhantes que estragam o efeito fosco.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-base font-extrabold text-foreground mb-4">Comparativo de Vulnerabilidades</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold">Característica</TableHead>
                        <TableHead className="font-bold">Gloss</TableHead>
                        <TableHead className="font-bold">Matte</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Efeito</TableCell>
                        <TableCell>Espelhado, amplia a luz</TableCell>
                        <TableCell>Aveludado, absorve a luz</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Desafio Principal</TableCell>
                        <TableCell>Evidencia micro-riscos e manchas ácidas</TableCell>
                        <TableCell>Evidencia marcas de óleo e polimento por limpeza</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Sensação</TableCell>
                        <TableCell>Ultra liso</TableCell>
                        <TableCell>Macio e sedoso</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ A SOLUÇÃO — PELÍCULAS PHANTOM ═══════════════════════ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
                A Solução: Películas de Proteção <span className="text-accent">Phantom</span>
              </h2>
              <p className="text-lg text-primary-foreground/60 font-light">
                Uma camada de engenharia invisível.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="overflow-hidden rounded-2xl mb-12 border border-primary-foreground/10">
              <img src={phantomSolutionThickness} alt="Película Phantom - 180 microns de espessura premium" className="w-full object-contain bg-muted/10" />
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
              {[
                { value: '180μ', label: 'Espessura' },
                { value: '∞', label: 'Invisibilidade' },
                { value: '5 Anos', label: 'Garantia' },
                { value: '360°', label: 'Proteção Total' },
                { value: 'UV', label: 'Bloqueio' },
              ].map((spec) => (
                <div key={spec.label} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 text-center">
                  <span className="block text-2xl md:text-3xl font-extrabold text-accent mb-1">{spec.value}</span>
                  <span className="text-sm text-primary-foreground/60 font-medium">{spec.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="text-center text-primary-foreground/50 text-base font-light max-w-3xl mx-auto">
              Preserva exatamente o visual original de qualquer superfície — com uma camada de proteção invisível de engenharia avançada.
            </motion.p>

          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ PHANTOM GLOSS ═══════════════════════ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 variants={fadeInLeft} className="text-3xl md:text-5xl font-extrabold text-foreground mb-2">
                  Phantom <span className="text-accent">Gloss</span>
                </motion.h2>
                <motion.p variants={fadeInLeft} className="text-lg text-muted-foreground font-light mb-8">
                  Um escudo para o espelho. Para quem não aceita ver o brilho desaparecer com o tempo.
                </motion.p>

                <motion.div variants={fadeInLeft} className="space-y-4">
                  {glossBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
                        <b.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-foreground mb-0.5">{b.title}</h3>
                        <p className="text-sm text-muted-foreground font-light">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={fadeInRight}>
                <Card className="card-premium-hover border-t-2 border-t-accent/30">
                  <CardContent className="p-8 text-center">
                    <Sparkles className="w-16 h-16 text-accent mx-auto mb-4" />
                    <p className="text-2xl font-extrabold text-foreground mb-2">100%</p>
                    <p className="text-sm text-muted-foreground font-light">Brilho Preservado</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ PHANTOM MATTE ═══════════════════════ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="order-last lg:order-first">
                <Card className="glass-card border-primary-foreground/10">
                  <CardContent className="p-8 text-center">
                    <Layers className="w-16 h-16 text-accent mx-auto mb-4" />
                    <p className="text-2xl font-extrabold text-primary-foreground mb-2">Fosco Intacto</p>
                    <p className="text-sm text-primary-foreground/60 font-light">Toque aveludado preservado</p>
                  </CardContent>
                </Card>
              </motion.div>

              <div>
                <motion.h2 variants={fadeInRight} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-2">
                  Phantom <span className="text-accent">Matte</span>
                </motion.h2>
                <motion.p variants={fadeInRight} className="text-lg text-primary-foreground/60 font-light mb-8">
                  Proteção sem brilho. Respeita a essência do acabamento fosco original.
                </motion.p>

                <motion.div variants={fadeInRight} className="space-y-4">
                  {matteBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <b.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-primary-foreground mb-0.5">{b.title}</h3>
                        <p className="text-sm text-primary-foreground/60 font-light">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ MATERIAIS NOBRES ═══════════════════════ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 text-center">
              Proteção Versátil para Materiais Nobres
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mb-12">
              <div className="separator-accent" />
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materials.map((m, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -6, transition: { duration: 0.3 } }}>
                  <Card className="card-premium-hover h-full text-center border-t-2 border-t-accent/30">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4">
                        <m.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-base font-extrabold text-foreground mb-2">{m.title}</h3>
                      <p className="text-sm text-muted-foreground font-light">{m.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ DEPOIMENTOS ═══════════════════════ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4 text-xs tracking-widest uppercase">
                Depoimentos
              </Badge>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
                Quem Protegeu, Recomenda
              </h2>
              <p className="text-lg text-primary-foreground/60 font-light">
                Histórias de quem escolheu preservar o que é valioso.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full border-primary-foreground/10 bg-primary-foreground/5">
                    <CardContent className="p-8">
                      <Quote className="w-8 h-8 text-accent/40 mb-4" />
                      <p className="text-primary-foreground/80 font-light italic leading-relaxed mb-6 text-sm">
                        "{t.quote}"
                      </p>
                      <div className="border-t border-primary-foreground/10 pt-4">
                        <p className="text-primary-foreground font-bold text-sm">{t.name}</p>
                        <p className="text-accent text-xs font-semibold">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ O FUTURO DO SEU PROJETO ═══════════════════════ */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              O Futuro do Seu Projeto
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
              Você não precisa mais escolher entre estética e praticidade. Com a tecnologia Phantom, beleza e durabilidade coexistem.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4 max-w-lg mx-auto text-left mb-12">
              {[
                'Preservação do investimento financeiro.',
                'Manutenção da intenção original do design.',
                'Projeto impactante e impecável como no dia da entrega.',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-muted-foreground font-light">{text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4 text-xs tracking-widest uppercase">
                Dúvidas Frequentes
              </Badge>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Tudo que você precisa saber antes de proteger seus acabamentos.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground font-semibold hover:text-accent hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ ENCONTRE UM CENTRO AUTORIZADO ═══════════════════════ */}
      <section className="py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={fadeInUp}>
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
                Encontre um Centro Autorizado <span className="text-accent">INSULFILM</span>
              </h2>
              <p className="text-lg text-primary-foreground/60 font-light mb-8 max-w-xl mx-auto">
                Encontre nossos Centros Autorizados em todo o Brasil e tenha acesso ao que há de melhor em proteção e sofisticação.
              </p>
              <Link to="/lojas">
                <Button size="lg" variant="outline" className="border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground font-bold text-base px-8 transition-all">
                  <MapPin className="w-5 h-5" />
                  Ver Centros Autorizados
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ CTA FINAL ═══════════════════════ */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-2xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
              Elegância que permanece.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-accent font-semibold mb-8">
              Proteção que não aparece.
            </motion.p>

            <motion.div variants={scaleIn}>
              <a
                href="https://wa.me/5511936182746?text=Olá! Gostaria de saber mais sobre a película Phantom para proteção de superfícies arquitetônicas."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-sm hover:shadow-md transition-all text-base px-8">
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
};

export default PhantomArquitetonico;
