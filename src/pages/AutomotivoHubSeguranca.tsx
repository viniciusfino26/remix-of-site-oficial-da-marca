import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, MessageCircle, ArrowRight } from 'lucide-react';
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
  { name: 'INSULFILM™ SkinSafe8K', desc: 'Proteção contra estilhaços em quebras acidentais', warranty: '5 anos', path: '/automotivo/seguranca/skinsafe8k' },
  { name: 'INSULFILM™ Antivandalismo 13K', desc: 'Proteção contra vandalismo com dupla laminação', warranty: '5 anos', path: '/automotivo/seguranca/antivandalismo13k' },
  { name: 'INSULFILM™ SkudoGuard', desc: 'Segurança superior contra armas brancas', warranty: '10 anos', path: '/automotivo/seguranca/skudoguard' },
  { name: 'INSULFILM™ SkudoUltra', desc: 'Blindagem extrema — tetra laminação industrial', warranty: '10 anos', path: '/automotivo/seguranca/skudoultra' },
];

const AutomotivoHubSeguranca = () => (
  <>
    <Helmet>
      <title>Películas de Segurança Automotiva | INSULFILM™</title>
      <meta name="description" content="Linha completa de películas de segurança automotiva INSULFILM™: SkinSafe8K, Antivandalismo 13K, SkudoGuard e SkudoUltra." />
      <link rel="canonical" href="https://www.insulfilm.com.br/automotivo/seguranca" />
    </Helmet>
    <main>
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <Shield className="w-3.5 h-3.5 mr-2" />Proteção e Segurança
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">
              Segurança Automotiva
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light max-w-2xl mx-auto">
              Proteção contra estilhaços, vandalismo e invasões criminosas.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {products.map((p) => (
              <motion.div key={p.path} variants={fadeInUp}>
                <Link to={p.path}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-colors">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-extrabold text-primary-foreground mb-3">{p.name}</h3>
                        <p className="text-sm text-primary-foreground/60 mb-2">{p.desc}</p>
                        <p className="text-sm text-primary-foreground/60 mb-6"><span className="font-medium text-primary-foreground/80">Garantia:</span> {p.warranty}</p>
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
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">Proteja sua família. Fale com um especialista.</motion.p>
            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as películas de segurança automotiva INSULFILM™.')}`} target="_blank" rel="noopener noreferrer">
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

export default AutomotivoHubSeguranca;
