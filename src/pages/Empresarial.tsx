import { Helmet } from 'react-helmet-async';
import ParallaxBreak from '@/components/ParallaxBreak';
import { motion } from 'framer-motion';
import { Building2, Zap, Eye, Shield, Palette, Sun, Lock, MessageCircle } from 'lucide-react';
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
  { icon: Zap, title: 'Eficiência Energética', desc: 'Redução de até 30% no consumo de energia com ar-condicionado graças à rejeição solar das películas.' },
  { icon: Eye, title: 'Privacidade Corporativa', desc: 'Controle de visibilidade para salas de reunião, escritórios executivos e fachadas.' },
  { icon: Shield, title: 'Segurança Reforçada', desc: 'Películas de segurança que retêm estilhaços e dificultam a invasão por vidros.' },
  { icon: Palette, title: 'Design Decorativo', desc: 'Películas decorativas para personalização de ambientes corporativos e divisórias.' },
];

const filmTypes = [
  { icon: Sun, title: 'Controle Solar', desc: 'Películas de alto desempenho para fachadas e janelas com rejeição de calor de até 80%.' },
  { icon: Shield, title: 'Segurança — ISSF4000/7000', desc: 'Películas de segurança industrial para proteção contra impactos, vandalismo e tentativas de invasão.' },
  { icon: Lock, title: 'Jateado / Fosco', desc: 'Privacidade elegante com efeito jateado. Ideal para divisórias e salas de reunião.' },
  { icon: Palette, title: 'Whiteout / Blackout', desc: 'Controle total de luz e privacidade para ambientes que exigem bloqueio visual completo.' },
];

const WHATSAPP = 'https://wa.me/5511976136911?text=Preciso%20de%20películas%20para%20minha%20empresa';

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "INSULFILM™ Empresarial | Películas para Escritórios e Fachadas",
  "description": "Películas arquitetônicas profissionais para eficiência energética, segurança e design corporativo.",
  "url": "https://www.insulfilm.com.br/empresarial",
  "publisher": { "@type": "Brand", "name": "INSULFILM™" }
};

const Empresarial = () => (
  <>
    <Helmet>
      <title>INSULFILM™ Empresarial | Películas para Escritórios e Fachadas</title>
      <meta name="description" content="Películas arquitetônicas profissionais para eficiência energética, segurança e design corporativo." />
      <meta property="og:title" content="INSULFILM™ Empresarial | Películas para Escritórios e Fachadas" />
      <meta property="og:description" content="Películas arquitetônicas profissionais para eficiência energética, segurança e design corporativo." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="LINK_DA_IMAGEM_AQUI" />
      <meta property="og:url" content="https://www.insulfilm.com.br/empresarial" />
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </Helmet>
    <main>
    <section className="relative min-h-[60vh] flex items-center bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-texture" />
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
              <Building2 className="w-3.5 h-3.5 mr-2" />
              Empresarial
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
            Para Minha Empresa
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
            Películas arquitetônicas profissionais para eficiência energética, segurança e design corporativo
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Benefícios para Empresas</motion.h2>
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
      { value: '30%', label: 'Economia Energética' },
      { value: '80%', label: 'Rejeição Térmica' },
      { value: '99%', label: 'Proteção UV' },
    ]} />

    <section className="py-24 bg-carbon-gradient">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Tipos de Película</motion.h2>
          <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {filmTypes.map((f, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl h-full">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-primary-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-primary-foreground/60 font-light leading-relaxed">{f.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Solicite um Projeto</motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light mb-8 max-w-lg mx-auto">
            Nossa equipe técnica faz o diagnóstico do seu ambiente e recomenda a melhor solução.
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
  </>
);

export default Empresarial;
