import { motion } from 'framer-motion';
import { Handshake, Car, Building2, MessageCircle, Clock } from 'lucide-react';
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

const autosPartners = [
  { title: 'Concessionárias', desc: 'Ofereça películas premium INSULFILM™ como acessório oficial nos veículos 0km da sua concessionária.' },
  { title: 'Aplicador Oficial Autos', desc: 'Torne-se um aplicador oficial credenciado para a linha automotiva INSULFILM™.' },
];

const arqPartners = [
  { title: 'Revendedor Arquitetônico', desc: 'Revenda a linha completa de películas arquitetônicas INSULFILM™ para projetos residenciais e comerciais.' },
  { title: 'Aplicador Oficial Arq', desc: 'Torne-se um aplicador oficial credenciado para a linha arquitetônica INSULFILM™.' },
];

const WHATSAPP = 'https://wa.me/5511976136911?text=Quero%20ser%20parceiro%20INSULFILM';

const Parceiro = () => (
  <main>
    <section className="relative min-h-[60vh] flex items-center bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-texture" />
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
              <Handshake className="w-3.5 h-3.5 mr-2" />
              Programa de Parceiros
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
            Seja um Parceiro Oficial INSULFILM™
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
            Faça parte da maior rede de películas premium do Brasil
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
          <motion.div variants={fadeInUp} className="flex justify-center mt-6">
            <Badge variant="outline" className="border-accent/30 text-accent/80 text-sm px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Em breve — formulário de cadastro online
            </Badge>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Autos */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-3">
            <Car className="w-10 h-10 text-accent" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">Divisão Autos</motion.h2>
          <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {autosPartners.map((p, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-extrabold text-primary-foreground mb-3">{p.title}</h3>
                  <p className="text-primary-foreground/60 font-light mb-6">{p.desc}</p>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold">
                      <MessageCircle className="w-4 h-4 mr-2" /> Fale Conosco
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Arquitetônico */}
    <section className="py-24 bg-carbon-gradient">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-3">
            <Building2 className="w-10 h-10 text-accent" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">Divisão Arquitetônica</motion.h2>
          <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {arqPartners.map((p, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-extrabold text-primary-foreground mb-3">{p.title}</h3>
                  <p className="text-primary-foreground/60 font-light mb-6">{p.desc}</p>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold">
                      <MessageCircle className="w-4 h-4 mr-2" /> Fale Conosco
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </main>
);

export default Parceiro;
