import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ParallaxBreak from '@/components/ParallaxBreak';
import { Store, Award, Globe, TrendingUp, Shield, MapPin, MessageCircle, GraduationCap, Megaphone, Settings, Sun, Car, Building2, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import homeSolar from '@/assets/home-solar.png';
import homeSeguranca from '@/assets/home-seguranca.png';
import homeComercial from '@/assets/home-comercial.png';
import homePpf from '@/assets/home-ppf.png';
import autoSolar from '@/assets/auto-solar.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const WHATSAPP = 'https://wa.me/5511976136911?text=Tenho%20interesse%20na%20franquia%20INSULFILM%E2%84%A2';
const ANOS = new Date().getFullYear() - 1986;

const produtos = [
  { img: homeSolar, title: 'Linha Solar', desc: 'Proteção e conforto térmico para veículos e edificações, o carro-chefe da marca.', icon: Sun },
  { img: homeSeguranca, title: 'Linha Segurança', desc: 'Películas antivandalismo e proteção patrimonial com alta demanda o ano todo.', icon: Shield },
  { img: homeComercial, title: 'Linha Arquitetônica', desc: 'Soluções decorativas e funcionais para projetos residenciais e comerciais.', icon: Building2 },
  { img: homePpf, title: 'Linha PPF', desc: 'Paint Protection Film, proteção de pintura automotiva, segmento premium em expansão.', icon: Layers },
];

const diferenciais = [
  { icon: Award, title: 'Pioneira no Brasil', desc: `Com ${ANOS}+ anos de mercado, a INSULFILM™ foi a primeira marca de películas do Brasil, tornando-se sinônimo da categoria.` },
  { icon: Globe, title: 'Visibilidade Nacional e Internacional', desc: 'Presença consolidada em todo o território brasileiro e reconhecimento em mercados internacionais.' },
  { icon: TrendingUp, title: 'Mercado em Crescimento Constante', desc: 'Frota brasileira em expansão e demanda crescente por eficiência energética garantem um mercado sempre aquecido.' },
  { icon: Car, title: 'Marca Mais Reconhecida', desc: 'A marca nº1 em reconhecimento espontâneo, quando o consumidor pensa em película, pensa em INSULFILM™.' },
  { icon: MapPin, title: 'Território com Exclusividade', desc: 'Atuação em região exclusiva com suporte dedicado, garantindo ROI acelerado e proteção de mercado.' },
  { icon: Store, title: 'Modelo de Negócio Comprovado', desc: 'Estrutura testada e validada ao longo de décadas, com processos otimizados e alto índice de satisfação.' },
];

const suporte = [
  { icon: GraduationCap, title: 'Treinamento Técnico', desc: 'Capacitação completa em aplicação, vendas e gestão para você e sua equipe desde o primeiro dia.' },
  { icon: Megaphone, title: 'Marketing Nacional', desc: 'Campanhas institucionais, materiais de PDV e presença digital que geram demanda para sua unidade.' },
  { icon: Settings, title: 'Gestão e Operação', desc: 'Sistemas, processos e consultoria contínua para maximizar a eficiência e rentabilidade da sua franquia.' },
];

const Franquias = () => (
  <main>
    <Helmet>
      <title>Franquias INSULFILM™ | Empreenda com a Marca Nº1 do Brasil</title>
      <meta name="description" content="Seja franqueado INSULFILM™. Mais de 39 anos de mercado, portfólio multi-produto e território exclusivo. Solicite informações." />
      <link rel="canonical" href="https://www.insulfilm.com.br/franquias" />
      <meta property="og:title" content="Franquias INSULFILM™ | Empreenda com a Marca Nº1" />
      <meta property="og:description" content="Torne-se franqueado da marca de películas mais reconhecida do Brasil. Suporte, treinamento e território exclusivo." />
      <meta property="og:url" content="https://www.insulfilm.com.br/franquias" />
      <meta property="og:type" content="website" />
    </Helmet>
    {/* HERO */}
    <section className="relative min-h-[70vh] flex items-center bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-texture" />
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
              <Store className="w-3.5 h-3.5 mr-2" />
              Franquias INSULFILM™
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-5 leading-[0.95]">
            Empreenda com a<br />Marca Nº1 do Brasil
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto mb-8">
            São {ANOS}+ anos de liderança, milhões de metros quadrados instalados e a marca mais lembrada do segmento. Agora é a sua vez de fazer parte dessa história.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mb-8"><div className="separator-accent" /></motion.div>
          <motion.div variants={fadeInUp}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold shadow-lg text-base px-8 py-6">
                <MessageCircle className="w-5 h-5 mr-2" /> Quero Ser Franqueado
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* MULTI-PRODUTO */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-3">
            Portfólio Multi-Produto
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light max-w-xl mx-auto">
            Diversas linhas de produto, diversas fontes de receita. Uma franquia INSULFILM™ atende múltiplos mercados.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-5"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {produtos.map((p, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl overflow-hidden h-full group">
                <div className="relative h-48 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-extrabold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* PARALLAX STATS */}
    <ParallaxBreak minHeight="25vh" stats={[
      { value: `${ANOS}+`, label: 'Anos de Mercado' },
      { value: '+4Mi', label: 'm² Instalados' },
      { value: '#1', label: 'Marca Mais Conhecida Nacionalmente' },
    ]} />

    {/* POR QUE INSULFILM */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-3">
            Por que INSULFILM™?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light max-w-xl mx-auto">
            Diferenciais que transformam sua franquia em um negócio sólido e rentável.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-5"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {diferenciais.map((d, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl h-full">
                <CardContent className="p-8 flex flex-col items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <d.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">{d.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{d.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* MERCADO EM EXPANSÃO */}
    <section className="py-24 bg-carbon-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeInUp}>
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5 mb-6">
              <TrendingUp className="w-3.5 h-3.5 mr-2" />
              Oportunidade
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">
              Um Mercado que Não Para de Crescer
            </h2>
            <div className="space-y-4 text-primary-foreground/70 font-light leading-relaxed">
              <p>
                O Brasil possui uma das maiores frotas de veículos do mundo, com crescimento constante ano após ano. Somado a isso, a demanda por eficiência energética em edificações comerciais e residenciais segue em forte expansão.
              </p>
              <p>
                A película deixou de ser apenas estética, hoje é item de <strong className="text-primary-foreground font-semibold">segurança, economia e conforto</strong>. Isso significa demanda contínua e recorrente para o franqueado INSULFILM™.
              </p>
              <p>
                Com um portfólio que vai do solar ao PPF, do automotivo ao arquitetônico, sua franquia atende desde o motorista que quer conforto até o incorporador que busca certificação sustentável.
              </p>
            </div>
          </motion.div>
          <motion.div variants={scaleIn} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={autoSolar} alt="Película solar aplicada em veículo" className="w-full h-80 md:h-96 object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-accent/10 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-accent/5 blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* SUPORTE */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-3">
            Suporte Completo ao Franqueado
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light max-w-xl mx-auto">
            Você nunca estará sozinho. Nossa estrutura garante suporte em todas as frentes do negócio.
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-5"><div className="separator-accent" /></motion.div>
        </motion.div>
        <motion.div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {suporte.map((s, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass-card rounded-2xl h-full">
                <CardContent className="p-8 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <s.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-extrabold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA FINAL */}
    <section className="py-24 bg-carbon-gradient">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Faça Parte da Marca Líder
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-primary-foreground/60 font-light mb-10 max-w-lg mx-auto text-lg">
            Vagas limitadas por região. Entre em contato agora e descubra se a sua cidade está disponível.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold shadow-lg text-lg px-10 py-7">
                <MessageCircle className="w-6 h-6 mr-2" /> Quero Ser Franqueado
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Franquias;
