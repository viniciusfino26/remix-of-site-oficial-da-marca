import { motion } from 'framer-motion';
import { Paintbrush, Shield, Sparkles, Clock, Wrench, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const products = [
  {
    name: 'Phantom® 6mil',
    specs: ['Espessura: 6 mil (150μm)', 'Auto-regenerativo', 'Proteção contra riscos leves', 'Garantia de 5 anos'],
    desc: 'Proteção invisível para o dia a dia. Ideal para veículos urbanos que precisam de proteção contra riscos de estacionamento e pequenos impactos.',
  },
  {
    name: 'Phantom® 8mil',
    specs: ['Espessura: 8 mil (200μm)', 'Auto-regenerativo avançado', 'Proteção contra impactos moderados', 'Garantia Premium de 10 anos'],
    desc: 'O máximo em proteção de pintura. Para quem exige o melhor em preservação do valor e da estética do veículo.',
  },
];

const WHATSAPP = 'https://wa.me/5511976136911?text=Quero%20saber%20mais%20sobre%20PPF%20Phantom';

const PPF = () => (
  <main>
    <section className="relative min-h-[60vh] flex items-center bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-texture" />
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
              <Paintbrush className="w-3.5 h-3.5 mr-2" />
              PPF — Proteção de Pintura
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
            INSULFILM™ Phantom®
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
            Filme de proteção de pintura auto-regenerativo — invisível e ultra resistente
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Nossos Produtos PPF</motion.h2>
          <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {products.map((p, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl h-full border-t-2 border-t-accent/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-primary-foreground">{p.name}</h3>
                  </div>
                  <p className="text-primary-foreground/60 font-light mb-6">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.specs.map((s, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                        <Sparkles className="w-4 h-4 text-accent shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-carbon-gradient">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <Badge variant="outline" className="border-accent/30 text-accent/80 text-sm px-4 py-2">
              <Wrench className="w-4 h-4 mr-2" />
              Ferramenta Interativa — Em breve
            </Badge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-2xl font-extrabold text-primary-foreground mb-2">Simulador de Cobertura PPF</motion.h2>
          <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light max-w-lg mx-auto">
            Em breve você poderá simular a cobertura PPF no seu veículo diretamente no site.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Proteja a Pintura do Seu Veículo</motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light mb-8 max-w-lg mx-auto">
            Solicite um orçamento personalizado para o Phantom® PPF.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" /> Solicitar Orçamento
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default PPF;
