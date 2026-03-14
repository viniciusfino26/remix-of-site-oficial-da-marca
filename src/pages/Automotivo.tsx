import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Shield, Layers, Cpu, Store, Award, Wrench, ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import PageHero from '@/components/PageHero';
import ParallaxBreak from '@/components/ParallaxBreak';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Analytics } from '@/components/Analytics';

const WA = '5511976136911';
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const categories = [
  {
    icon: Sun,
    title: 'Películas Solares',
    description: 'Dark, Eclipse, Vip, Polariz Ultra, Matrix — do básico ao cerâmico.',
    href: '/automotivo/solar',
    accent: 'from-amber-500/20 to-orange-500/10',
  },
  {
    icon: Shield,
    title: 'Proteção e Segurança',
    description: 'SkinSafe8K, Antivandalismo, SkudoGuard, SkudoUltra.',
    href: '/automotivo/seguranca',
    accent: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    icon: Layers,
    title: 'PPF — Proteção de Pintura',
    description: 'Phantom 6 mil e Phantom 8 mil — proteção de pintura premium.',
    href: '/automotivo/ppf',
    accent: 'from-violet-500/20 to-purple-500/10',
  },
];

const diferenciais = [
  { icon: Cpu, title: 'Tecnologia de Ponta', desc: 'Películas com nanotecnologia cerâmica e multicamadas de última geração.' },
  { icon: Store, title: 'Rede Autorizada', desc: '4 centros autorizados em São Paulo com padrão de instalação certificado.' },
  { icon: Award, title: 'Garantia de Fábrica', desc: 'Garantia oficial INSULFILM™ com cobertura contra bolhas, descoloração e descolamento.' },
  { icon: Wrench, title: 'Instalação Profissional', desc: 'Instaladores treinados e certificados pela fábrica, com ambiente controlado.' },
];

const centros = [
  { nome: 'Moema', zona: 'Zona Sul', endereco: 'Av. Moema, 801' },
  { nome: 'Paulista', zona: 'Centro', endereco: 'R. Augusta, 2.200' },
  { nome: 'Santana', zona: 'Zona Norte', endereco: 'R. Voluntários da Pátria, 3.800' },
  { nome: 'Pacaembu', zona: 'Zona Oeste', endereco: 'R. Cardoso de Almeida, 1.950' },
];

const faqs = [
  { q: 'Qual película automotiva é ideal para o meu veículo?', a: 'Depende da sua prioridade: se busca proteção solar básica, a linha Dark atende bem. Para máximo conforto térmico, recomendamos a Matrix (cerâmica). Para proteção de vidros, a linha de segurança (SkudoGuard ou SkudoUltra) é mais indicada. Nossos consultores ajudam a escolher a solução ideal.' },
  { q: 'A instalação demora quanto tempo?', a: 'A aplicação de película solar leva em média 2 a 4 horas, dependendo do modelo do veículo e da quantidade de vidros. PPF pode levar de 1 a 3 dias para cobertura completa. Agendamos horário para sua conveniência.' },
  { q: 'As películas INSULFILM™ são permitidas pela legislação?', a: 'Sim. A linha INSULFILM™ inclui opções que atendem à Resolução CONTRAN 254/07, com transmissão luminosa dentro dos limites permitidos para cada vidro. Orientamos sobre a regulamentação durante o atendimento.' },
  { q: 'Vocês atendem em domicílio ou apenas nos centros autorizados?', a: 'A instalação é realizada exclusivamente em nossos centros autorizados em São Paulo, onde temos ambiente controlado, iluminação adequada e todas as ferramentas para um resultado impecável.' },
];

const Automotivo = () => (
  <>
    <Helmet>
      <title>Películas Automotivas INSULFILM™ São Paulo | Solar, Segurança e PPF</title>
      <meta name="description" content="Películas automotivas INSULFILM™ em São Paulo. Linha solar (Dark, Eclipse, VIP, Polariz, Matrix), segurança (SkudoGuard, SkudoUltra) e PPF Phantom. 4 centros autorizados." />
    </Helmet>

    <PageBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Automotivo' }]} />

    {/* Hero */}
    <PageHero
      title="Películas Automotivas INSULFILM™ — São Paulo"
      subtitle="Conforto térmico, proteção UV, privacidade e segurança para o seu veículo. Conheça nossas linhas de películas solares, películas de segurança e PPF de proteção de pintura."
      badge={{ icon: <Sun className="w-3.5 h-3.5" />, text: 'Automotivo' }}
      cta={{ text: 'Agendar Instalação', href: waLink('Olá! Gostaria de agendar a instalação de película automotiva.'), external: true, icon: <MessageCircle className="w-4 h-4" /> }}
    />

    {/* Category grid */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <motion.div key={cat.href} variants={fadeInUp}>
              <Link to={cat.href} className="group block h-full" onClick={() => Analytics.ctaClick(cat.title, 'automotivo')}>
                <Card className="h-full border-border/50 bg-card hover:border-accent/30 hover:shadow-premium transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${cat.accent}`} />
                  <CardContent className="p-8 flex flex-col items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <cat.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{cat.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{cat.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                      Explorar <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <ParallaxBreak
      stats={[
        { value: '+40', label: 'Países' },
        { value: '5', label: 'Gerações de Tecnologia' },
        { value: '#1', label: 'Marca do Brasil' },
      ]}
    />

    {/* Diferenciais */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
          Por que escolher INSULFILM™
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {diferenciais.map((d) => (
            <motion.div key={d.title} variants={fadeInUp} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <d.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Centros Autorizados */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Centros Autorizados em São Paulo
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          4 centros autorizados estrategicamente localizados para atender você com excelência.
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {centros.map((c) => (
            <motion.div key={c.nome} variants={fadeInUp}>
              <Card className="border-border/50 bg-card hover:border-accent/30 transition-all">
                <CardContent className="p-6 flex flex-col gap-3">
                  <Badge variant="outline" className="w-fit text-xs">{c.zona}</Badge>
                  <h3 className="font-bold text-lg text-foreground">{c.nome}</h3>
                  <p className="text-sm text-muted-foreground flex items-start gap-1.5"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />{c.endereco}</p>
                  <Button variant="outline" size="sm" asChild className="mt-2">
                    <Link to="/lojas" onClick={() => Analytics.storeLocatorClick(c.nome)}>Ver Centro Autorizado</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Perguntas Frequentes
        </motion.h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA Final */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Agende sua instalação</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Fale com nossos especialistas e escolha a melhor película para o seu veículo.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg">
            <a href={waLink('Olá! Gostaria de agendar a instalação de película automotiva.')} target="_blank" rel="noopener noreferrer" onClick={() => Analytics.whatsappClick('cta-final', 'automotivo')}>
              <MessageCircle className="w-5 h-5" />
              Agendar Instalação
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  </>
);

export default Automotivo;
