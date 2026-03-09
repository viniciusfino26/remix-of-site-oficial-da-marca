import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
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

const channels = [
  { icon: MessageCircle, title: 'WhatsApp', desc: 'Atendimento rápido via WhatsApp de segunda a sábado.', action: 'Falar pelo WhatsApp', href: 'https://wa.me/5511976136911', external: true },
  { icon: Phone, title: 'Telefone', desc: 'Ligue para nossa central de vendas: (11) 97613-6911', action: 'Ligar Agora', href: 'tel:+5511976136911', external: true },
  { icon: Mail, title: 'E-mail', desc: 'Envie sua consulta por e-mail: vendas@insulfilm.com.br', action: 'Enviar E-mail', href: 'mailto:vendas@insulfilm.com.br', external: true },
  { icon: MapPin, title: 'Centros Autorizados', desc: 'Encontre o Centro Autorizado INSULFILM™ mais próximo de você.', action: 'Ver Centros Autorizados', href: '/lojas', external: false },
];

const Vendas = () => (
  <main>
    <section className="relative min-h-[60vh] flex items-center bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-texture" />
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
              <Phone className="w-3.5 h-3.5 mr-2" />
              Vendas
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
            Central de Vendas
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
            Entre em contato com nossa equipe comercial
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    <ParallaxBreak minHeight="25vh" stats={[
      { value: '4', label: 'Canais' },
      { value: 'Seg–Sáb', label: 'Atendimento' },
    ]} />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {channels.map((c, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <c.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground font-light mb-6">{c.desc}</p>
                  {c.external ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">{c.action}</Button>
                    </a>
                  ) : (
                    <Link to={c.href}>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">{c.action}</Button>
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

export default Vendas;
