import { motion } from 'framer-motion';
import { ShieldAlert, QrCode, FileCheck, AlertTriangle, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

const verifySteps = [
  { icon: QrCode, title: 'QR Code Verificável', desc: 'Cada produto original possui um QR Code único que pode ser escaneado para verificar a autenticidade diretamente no sistema INSULFILM™.' },
  { icon: FileCheck, title: 'Certificado de Autenticidade', desc: 'Todo produto INSULFILM™ é acompanhado de um certificado de autenticidade emitido pelo fabricante.' },
  { icon: ShieldAlert, title: 'Selo de Garantia', desc: 'O selo de garantia garante a procedência e a qualidade do produto adquirido.' },
];

const warnings = [
  'Preços muito abaixo do mercado podem indicar produto falsificado',
  'Exija sempre o certificado de autenticidade com QR Code',
  'Compre apenas de revendedores autorizados INSULFILM™',
  'Produtos piratas não possuem garantia de fábrica',
];

const WHATSAPP = 'https://wa.me/5511976136911?text=Quero%20denunciar%20pirataria%20INSULFILM';

const AntiPirataria = () => (
  <main>
    <section className="relative min-h-[60vh] flex items-center bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-texture" />
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
              <ShieldAlert className="w-3.5 h-3.5 mr-2" />
              Anti-Pirataria
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
            Autenticidade e Anti-Pirataria
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
            INSULFILM™ é marca registrada no INPI desde 1987. Uso indevido é crime, Lei nº 9.279/96.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Como Verificar a Autenticidade</motion.h2>
          <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {verifySteps.map((s, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <s.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-extrabold text-primary-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-primary-foreground/60 font-light leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <ParallaxBreak minHeight="30vh" stats={[
      { value: '1987', label: 'Registro INPI' },
      { value: 'QR Code', label: 'Verificação' },
    ]} />

    <section className="py-24 bg-carbon-gradient">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <AlertTriangle className="w-10 h-10 text-yellow-500" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Alerta sobre Produtos Piratas</motion.h2>
          <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="max-w-2xl mx-auto space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {warnings.map((w, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-xl">
                <CardContent className="p-5 flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" />
                  <p className="text-primary-foreground/80 font-light">{w}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="text-center mt-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold shadow-lg">
              <MessageCircle className="w-5 h-5 mr-2" /> Denunciar Pirataria
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  </main>
);

export default AntiPirataria;
