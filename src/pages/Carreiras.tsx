import { motion } from 'framer-motion';
import { Users, TrendingUp, Lightbulb, Shield, Target, Briefcase, MessageCircle, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const reasons = [
  { icon: TrendingUp, title: 'Liderança de Mercado', desc: 'Atue na empresa que é referência absoluta no segmento automotivo, arquitetônico e de segurança.' },
  { icon: Lightbulb, title: 'Inovação Constante', desc: 'Tenha acesso às tecnologias mais avançadas do mundo em películas solares e de proteção.' },
  { icon: Target, title: 'Cultura de Excelência', desc: 'Um ambiente que valoriza a precisão técnica e o atendimento consultivo de alto nível.' },
  { icon: ChevronRight, title: 'Crescimento Real', desc: 'Oportunidades para quem busca especialização e deseja evoluir junto com uma marca em expansão nacional.' },
];

const pillars = [
  { icon: Shield, num: '01', title: 'Excelência Técnica', desc: 'Rigor no acabamento e domínio das propriedades físicas das películas.' },
  { icon: Users, num: '02', title: 'Foco no Cliente', desc: 'Entender a dor do usuário para oferecer a proteção exata que ele precisa.' },
  { icon: Briefcase, num: '03', title: 'Integridade e Segurança', desc: 'Ética em todas as relações e compromisso com a proteção de vidas e patrimônios.' },
];

const WHATSAPP_VAGAS = 'https://wa.me/5511976136911?text=Gostaria%20de%20saber%20sobre%20vagas%20abertas%20na%20INSULFILM';
const WHATSAPP_BANCO = 'https://wa.me/5511976136911?text=Gostaria%20de%20enviar%20meu%20curr%C3%ADculo%20para%20o%20banco%20de%20talentos%20INSULFILM';

const Carreiras = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-texture" />
      <div className="container mx-auto px-4 pt-36 pb-20 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-5">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-[0.2em] px-5 py-1.5">
              <Users className="w-3.5 h-3.5 mr-2" />
              Trabalhe Conosco
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-[0.95]">
            Faça Parte da Autoridade<br className="hidden md:block" /> em Películas
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/50 font-light max-w-3xl mx-auto leading-relaxed">
            Trabalhar na INSULFILM™ é representar a marca que definiu um mercado. Buscamos profissionais que, assim como nossos produtos, entregam alta performance, proteção e excelência em cada detalhe.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-8"><div className="separator-accent" /></motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Por que construir sua carreira aqui? */}
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Por que construir sua carreira aqui?
          </motion.h2>
          <motion.div variants={scaleIn} className="flex justify-center mt-4"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {reasons.map((r, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl h-full border-transparent hover:border-accent/20 transition-colors duration-500">
                <CardContent className="p-8 md:p-10 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <r.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-primary-foreground mb-2">{r.title}</h3>
                    <p className="text-sm text-primary-foreground/50 font-light leading-relaxed">{r.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Nossos Pilares de Atuação */}
    <section className="py-28 bg-carbon-gradient">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Nossos Pilares de Atuação
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-primary-foreground/50 font-light max-w-2xl mx-auto">
            Seja na linha de frente técnica ou na inteligência estratégica, nosso compromisso é com a qualidade.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {pillars.map((p, i) => (
            <motion.div key={i} variants={i === 0 ? fadeInLeft : i === 2 ? fadeInRight : fadeInUp}>
              <Card className="glass-card rounded-2xl h-full border-transparent hover:border-accent/20 transition-colors duration-500">
                <CardContent className="p-8 md:p-10 text-center">
                  <span className="text-accent/30 text-5xl font-extrabold block mb-4">{p.num}</span>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <p.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-extrabold text-primary-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-primary-foreground/50 font-light leading-relaxed">{p.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA Final */}
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Prepare o seu futuro com a gente
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-foreground/50 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Estamos em busca de talentos para as áreas técnica, comercial e administrativa que desejam transformar o mercado de proteção solar no Brasil.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={WHATSAPP_VAGAS} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" /> Ver Vagas Abertas
              </Button>
            </a>
            <a href={WHATSAPP_BANCO} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10 font-bold w-full sm:w-auto">
                <Briefcase className="w-5 h-5 mr-2" /> Enviar Currículo para Banco de Talentos
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Carreiras;
