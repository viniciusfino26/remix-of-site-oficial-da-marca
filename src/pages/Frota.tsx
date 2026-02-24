import { motion } from 'framer-motion';
import { Truck, Thermometer, Shield, Eye, Layers, Lock, Clock, Award, RefreshCw, DollarSign, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const comfortCards = [
  { icon: Thermometer, title: 'Bloqueio de Calor (IR)', desc: 'Redução drástica da temperatura interna, diminuindo o uso do ar-condicionado e o consumo de combustível.' },
  { icon: Shield, title: 'Proteção UV Total', desc: 'Escudo contra raios ultravioleta, prevenindo doenças de pele e o envelhecimento precoce de componentes internos.' },
  { icon: Eye, title: 'Redução de Ofuscamento', desc: 'Maior visibilidade e menos cansaço visual, aumentando a segurança ativa na condução.' },
];

const securityCards = [
  { icon: Layers, title: 'Tecnologia Antiestilhaçamento', desc: 'Em caso de impacto, a película retém os fragmentos de vidro, protegendo o motorista de ferimentos e dificultando o acesso ao interior do veículo.' },
  { icon: Lock, title: 'Privacidade Estratégica', desc: 'Reduz a visibilidade externa sobre equipamentos, ferramentas e cargas, desestimulando ações criminosas por oportunidade.' },
  { icon: Clock, title: 'Barreira de Tempo', desc: 'Aumenta o tempo necessário para uma invasão, fator crucial para a preservação da integridade física da equipe.' },
];

const whyCards = [
  { icon: Award, title: 'Padronização', desc: 'Garanta a mesma estética e nível de proteção em toda a sua frota nacional.' },
  { icon: RefreshCw, title: 'Durabilidade', desc: 'Películas que não desbotam, não criam bolhas e mantêm a performance por anos.' },
  { icon: DollarSign, title: 'Valor de Revenda', desc: 'Proteção do interior contra o ressecamento causado pelo sol, preservando o patrimônio da empresa.' },
];

const WHATSAPP = 'https://wa.me/5511976136911?text=Preciso%20de%20películas%20para%20minha%20frota';

/* Dark variant for carbon-gradient sections */
const DarkSectionCards = ({ cards }: { cards: typeof comfortCards }) => (
  <motion.div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
    {cards.map((c, i) => (
      <motion.div key={i} variants={fadeInUp}>
        <Card className="glass-card rounded-2xl h-full">
          <CardContent className="p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
              <c.icon className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-extrabold text-primary-foreground">{c.title}</h3>
            <p className="text-sm text-primary-foreground/60 font-light leading-relaxed">{c.desc}</p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </motion.div>
);

/* Light variant for bg-background sections */
const LightSectionCards = ({ cards }: { cards: typeof comfortCards }) => (
  <motion.div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
    {cards.map((c, i) => (
      <motion.div key={i} variants={fadeInUp}>
        <motion.div whileHover={{ y: -4, transition: { duration: 0.3 } }}>
          <Card className="card-premium-hover rounded-2xl h-full border-t-2 border-t-transparent hover:border-t-accent/50">
            <CardContent className="p-8 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                <c.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-extrabold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{c.desc}</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
);

const Frota = () => (
  <main>
    {/* HERO */}
    <section className="relative min-h-[70vh] flex items-center bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-texture" />
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
              <Truck className="w-3.5 h-3.5 mr-2" />
              Frotas Corporativas
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
            Para Minha Frota
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-accent font-semibold max-w-2xl mx-auto mb-4">
            Soluções de Alta Performance para Frotas Corporativas
          </motion.p>
          <motion.p variants={fadeInUp} className="text-base text-primary-foreground/60 font-light max-w-2xl mx-auto leading-relaxed">
            O veículo de frota é o posto de trabalho do seu colaborador. Proporcionar um ambiente seguro e térmicamente controlado não é apenas conforto, é eficiência operacional e dever de cuidado.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-8"><div className="separator-accent" /></motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* CONFORTO TÉRMICO */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Conforto Térmico e Saúde do Motorista</motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light max-w-2xl mx-auto">
            Horas ao volante sob sol forte causam fadiga precoce e exposição perigosa a radiações.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
        </motion.div>
        <LightSectionCards cards={comfortCards} />
      </div>
    </section>

    {/* SEGURANÇA E PROTEÇÃO DE ATIVOS */}
    <section className="py-24 bg-carbon-gradient">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Segurança e Proteção de Ativos</motion.h2>
          <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light max-w-2xl mx-auto">
            Vidros são os pontos mais vulneráveis em tentativas de invasão ou vandalismo.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
        </motion.div>
        <DarkSectionCards cards={securityCards} />
      </div>
    </section>

    {/* POR QUE ESCOLHER INSULFILM */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Por que escolher INSULFILM™ para sua frota?
          </motion.h2>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
        </motion.div>
        <LightSectionCards cards={whyCards} />
      </div>
    </section>

    {/* CTA FINAL */}
    <section className="py-24 bg-carbon-gradient">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Atendimento Especializado para Frotas
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light mb-8 max-w-lg mx-auto">
            Condições especiais, orçamento personalizado e logística sob medida para a sua frota.
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

export default Frota;
