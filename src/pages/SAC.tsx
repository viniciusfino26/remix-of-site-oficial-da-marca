import { motion } from 'framer-motion';
import { Headphones, MessageCircle, Phone, HelpCircle, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import ParallaxBreak from '@/components/ParallaxBreak';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const options = [
  { icon: MessageCircle, title: 'WhatsApp', desc: 'Atendimento rápido pelo WhatsApp.', href: 'https://wa.me/5511976136911?text=Preciso%20de%20suporte', external: true },
  { icon: Phone, title: 'Telefone', desc: 'Ligue: (11) 97613-6911', href: 'tel:+5511976136911', external: true },
  { icon: HelpCircle, title: 'FAQ', desc: 'Respostas rápidas para dúvidas frequentes.', href: '/faq', external: false },
  { icon: ShieldCheck, title: 'Garantia', desc: 'Informações sobre garantia e como acioná-la.', href: '/garantia', external: false },
];

const SAC = () => (
  <main>
    <section className="relative min-h-[60vh] flex items-center bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-texture" />
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
              <Headphones className="w-3.5 h-3.5 mr-2" />
              SAC
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
            Atendimento ao Cliente
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
            Estamos aqui para ajudar. Escolha o melhor canal de atendimento.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    <ParallaxBreak minHeight="25vh" stats={[
      { value: '4', label: 'Canais' },
      { value: 'Rápido', label: 'Atendimento' },
    ]} />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {options.map((o, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <o.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-extrabold text-primary-foreground mb-2">{o.title}</h3>
                  <p className="text-sm text-primary-foreground/60 font-light mb-6">{o.desc}</p>
                  {o.external ? (
                    <a href={o.href} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">Contatar</Button>
                    </a>
                  ) : (
                    <Link to={o.href}>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">Acessar</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </main>
);

export default SAC;
