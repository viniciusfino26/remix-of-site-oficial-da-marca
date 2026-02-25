import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sun, MessageCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const WHATSAPP_NUMBER = '5511999999999';

const products = [
  { name: 'INSULFILM™ Clear70', path: '/arquitetonico/solar/clear70' },
  { name: 'INSULFILM™ Orizzonte70', path: '/arquitetonico/solar/orizzonte70' },
  { name: 'INSULFILM™ Ultravioletti90', path: '/arquitetonico/solar/ultravioletti90' },
  { name: 'INSULFILM™ Naturale', path: '/arquitetonico/solar/naturale' },
  { name: 'INSULFILM™ Petrolio', path: '/arquitetonico/solar/petrolio' },
  { name: 'INSULFILM™ Grigio Invertito', path: '/arquitetonico/solar/grigio-invertito' },
  { name: 'INSULFILM™ Metallico Argento', path: '/arquitetonico/solar/metallico-argento' },
  { name: 'INSULFILM™ Reflesso d\'Argento', path: '/arquitetonico/solar/reflesso-d-argento' },
  { name: 'INSULFILM™ Specchiato Bronzo', path: '/arquitetonico/solar/specchiato-bronzo' },
];

const ArqHubSolar = () => (
  <>
    <Helmet>
      <title>Películas de Controle Solar Arquitetônico | INSULFILM™</title>
      <meta name="description" content="Linha completa de películas de controle solar para edificações INSULFILM™. Conforto térmico, proteção UV e privacidade." />
      <link rel="canonical" href="https://www.insulfilm.com.br/arquitetonico/solar" />
    </Helmet>
    <main>
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <Sun className="w-3.5 h-3.5 mr-2" />Controle Solar
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">
              Controle Solar Arquitetônico
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light max-w-2xl mx-auto">
              Películas premium para fachadas, janelas e divisórias de vidro.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {products.map((p) => (
              <motion.div key={p.path} variants={fadeInUp}>
                <Link to={p.path}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-colors">
                      <CardContent className="p-8">
                        <h3 className="text-lg font-extrabold text-primary-foreground mb-4">{p.name}</h3>
                        <span className="text-accent font-bold text-sm flex items-center gap-1">
                          Ver detalhes <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Solicite seu Orçamento</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">Fale com um especialista em películas arquitetônicas.</motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as películas de controle solar arquitetônico INSULFILM™.')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />Solicitar Orçamento
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default ArqHubSolar;
