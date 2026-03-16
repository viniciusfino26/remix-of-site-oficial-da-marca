import { motion } from 'framer-motion';
import ParallaxBreak from '@/components/ParallaxBreak';
import { Store, Award, HeadphonesIcon, MapPin, TrendingUp, MessageCircle } from 'lucide-react';
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

const benefits = [
  { icon: Award, title: 'Marca Reconhecida', desc: 'A marca mais lembrada do Brasil no segmento de películas. Mais de 35 anos de liderança e reconhecimento nacional.' },
  { icon: HeadphonesIcon, title: 'Suporte Completo', desc: 'Treinamento técnico, marketing, gestão e suporte contínuo para o sucesso da sua franquia.' },
  { icon: MapPin, title: 'Território Exclusivo', desc: 'Área de atuação exclusiva garantida por contrato, sem concorrência interna entre franqueados.' },
  { icon: TrendingUp, title: 'Retorno Rápido', desc: 'Modelo de negócio validado com payback acelerado e margem de lucro atrativa.' },
];

const WHATSAPP = 'https://wa.me/5511976136911?text=Tenho%20interesse%20na%20franquia%20INSULFILM';

const Franquias = () => (
  <main>
    <section className="relative min-h-[60vh] flex items-center bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-texture" />
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
              <Store className="w-3.5 h-3.5 mr-2" />
              Franquias
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
            Franquia INSULFILM™
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
            Invista na marca líder de películas do Brasil e construa um negócio sólido e rentável.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Por que ser um Franqueado?</motion.h2>
          <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {benefits.map((b, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl h-full">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <b.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-primary-foreground mb-2">{b.title}</h3>
                    <p className="text-sm text-primary-foreground/60 font-light leading-relaxed">{b.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <ParallaxBreak minHeight="25vh" stats={[
      { value: '35+', label: 'Anos de Mercado' },
      { value: '#1', label: 'Marca Nacional' },
      { value: 'ROI', label: 'Acelerado' },
    ]} />

    <section className="py-24 bg-carbon-gradient">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">Quer saber mais?</motion.h2>
          <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light mb-8 max-w-lg mx-auto">
            Entre em contato com nossa equipe de expansão e descubra como abrir sua franquia INSULFILM™.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" /> Falar com Expansão
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Franquias;
