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
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const WHATSAPP_NUMBER = '5511999999999';

const products = [
  { name: 'INSULFILM™ Matrix', tech: 'Nano Cerâmica', ir: 'Até 75%', warranty: '10 anos', path: '/automotivo/solar/matrix' },
  { name: 'INSULFILM™ Polariz Ultra', tech: 'Híbrida Metal-Cerâmica', ir: 'Até 75%', warranty: '10 anos', path: '/automotivo/solar/polariz-ultra' },
  { name: 'INSULFILM™ VIP', tech: 'Carbono Alta Performance', ir: 'Até 65%', warranty: '5 anos', path: '/automotivo/solar/vip' },
  { name: 'INSULFILM™ Eclipse', tech: 'Carbon Color Stable', ir: 'Até 30%', warranty: '5 anos', path: '/automotivo/solar/eclipse' },
  { name: 'INSULFILM™ Dark', tech: 'Pigmentada Não Refletiva', ir: '—', warranty: '2 anos', path: '/automotivo/solar/dark' },
];

const AutomotivoHubSolar = () => (
  <>
    <Helmet>
      <title>Películas de Controle Solar Automotivo | INSULFILM™</title>
      <meta name="description" content="Conheça a linha completa de películas de controle solar automotivo INSULFILM™: Matrix, Polariz Ultra, VIP, Eclipse e Dark." />
      <link rel="canonical" href="https://www.insulfilm.com.br/automotivo/solar" />
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
              Controle Solar Automotivo
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light max-w-2xl mx-auto">
              Conforto térmico, proteção UV e estabilidade de cor para o seu veículo.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {products.map((p) => (
              <motion.div key={p.path} variants={fadeInUp}>
                <Link to={p.path}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-colors">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-extrabold text-primary-foreground mb-3">{p.name}</h3>
                        <div className="space-y-2 text-sm text-primary-foreground/60 mb-6">
                          <p><span className="font-medium text-primary-foreground/80">Tecnologia:</span> {p.tech}</p>
                          <p><span className="font-medium text-primary-foreground/80">Rejeição de IR:</span> {p.ir}</p>
                          <p><span className="font-medium text-primary-foreground/80">Garantia:</span> {p.warranty}</p>
                        </div>
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
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">Fale com um especialista e escolha a película ideal para o seu veículo.</motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as películas de controle solar automotivo INSULFILM™.')}`} target="_blank" rel="noopener noreferrer">
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

export default AutomotivoHubSolar;
