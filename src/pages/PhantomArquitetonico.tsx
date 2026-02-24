import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Sparkles, Droplets, Eye, Layers, Sun, CheckCircle, ArrowRight, Gem, TreeDeciduous, Building, GlassWater, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

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

const PhantomArquitetonico = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroGlowY = useSpring(useTransform(heroProgress, [0, 1], [0, 50]), { stiffness: 80, damping: 25 });

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center bg-carbon-gradient overflow-hidden">
        <motion.div className="absolute inset-0 bg-hero-texture" />
        <motion.div className="absolute inset-0" style={{ y: heroGlowY }}>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-glow-pulse" />
        </motion.div>

        <motion.div className="container mx-auto px-4 pt-32 pb-20 relative z-10" style={{ y: heroTextY, opacity: heroOpacity }}>
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInLeft}>
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-6 text-xs tracking-widest uppercase">
                Proteção de Superfícies Arquitetônicas
              </Badge>
            </motion.div>
            <motion.p variants={fadeInLeft} className="text-sm uppercase tracking-[0.4em] text-accent mb-3 font-semibold">
              INSULFILM™
            </motion.p>
            <motion.h1 variants={fadeInLeft} className="text-5xl md:text-7xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
              Phantom
            </motion.h1>
            <motion.p variants={fadeInLeft} className="text-xl md:text-2xl text-primary-foreground/80 font-light mb-2">
              Preservando o Design dos Seus Acabamentos
            </motion.p>
            <motion.p variants={fadeInLeft} className="text-base text-primary-foreground/50 font-light">
              Um guia para arquitetos, designers e proprietários exigentes.
            </motion.p>
            <motion.div variants={scaleIn} className="flex mt-6">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* A Decisão que Define a Atmosfera */}
      <section className="py-24 bg-background overflow-hidden">
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

          <motion.div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
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

      {/* Quando o Design Encontra o Uso Diário */}
      <section className="py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              Quando o Design Encontra o Uso Diário
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light leading-relaxed mb-8">
              Superfícies de alto padrão não falham por falta de beleza — <span className="text-accent font-semibold">falham pelo uso.</span> O conflito central do design de interiores é que as superfícies mais bonitas são as mais expostas. Pequenos acontecimentos degradam a estética original:
            </motion.p>
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
              {['Um copo de vinho apoiado sem cuidado.', 'Um respingo de limão.', 'A limpeza com um pano abrasivo.'].map((text, i) => (
                <div key={i} className="glass-card p-5 rounded-xl text-center">
                  <p className="text-sm text-primary-foreground/80 font-light italic">"{text}"</p>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeInUp} className="text-primary-foreground/50 font-light mt-6 text-center">
              Pequenos gestos que deixam marcas permanentes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Anatomia do Dano */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 text-center">
              Anatomia do Dano
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mb-12">
              <div className="separator-accent" />
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Gloss damage */}
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

              {/* Matte damage */}
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

            {/* Comparativo */}
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

      {/* A Solução — Películas de Proteção Phantom */}
      <section className="py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              A Solução: Películas de Proteção <span className="text-accent">Phantom</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light mb-12">
              Uma camada de engenharia invisível.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { value: '180μ', label: 'Espessura premium para máxima proteção' },
                { value: '∞', label: 'Invisibilidade de nível industrial' },
                { value: '5 Anos', label: 'Garantia de fábrica' },
                { value: '360°', label: 'Resistência contra químicos e radiação UV' },
                { value: 'UV', label: 'Proteção contra desbotamento e degradação' },
              ].map((spec, i) => (
                <div key={i} className="glass-card p-5 rounded-xl text-center">
                  <p className="text-2xl font-extrabold text-accent mb-1">{spec.value}</p>
                  <p className="text-xs text-primary-foreground/60 font-light">{spec.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="text-primary-foreground/50 font-light mt-8 text-sm">
              Preserva exatamente o visual e o toque original da superfície.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Phantom Gloss */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-2">
              Phantom <span className="text-accent">Gloss</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground font-light mb-10">
              Um escudo para o espelho. Para quem não aceita ver o brilho desaparecer com o tempo.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              {glossBenefits.map((b, i) => (
                <motion.div key={i} variants={i % 2 === 0 ? fadeInLeft : fadeInRight} whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                  <Card className="card-premium-hover h-full">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
                        <b.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-foreground mb-1">{b.title}</h3>
                        <p className="text-sm text-muted-foreground font-light">{b.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Phantom Matte */}
      <section className="py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-2">
              Phantom <span className="text-accent">Matte</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light mb-10">
              Proteção sem brilho. Respeita a essência do acabamento fosco original.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              {matteBenefits.map((b, i) => (
                <motion.div key={i} variants={i % 2 === 0 ? fadeInLeft : fadeInRight} whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                  <Card className="glass-card h-full">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <b.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-primary-foreground mb-1">{b.title}</h3>
                        <p className="text-sm text-primary-foreground/60 font-light">{b.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proteção Versátil para Materiais Nobres */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
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

      {/* O Futuro do Seu Projeto */}
      <section className="py-24 bg-carbon-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              O Futuro do Seu Projeto
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light leading-relaxed mb-10">
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
                  <p className="text-primary-foreground/80 font-light">{text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
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
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a película Phantom para proteção de superfícies arquitetônicas."
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
  );
};

export default PhantomArquitetonico;
