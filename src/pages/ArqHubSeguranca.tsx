import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, MessageCircle, ArrowRight, ShieldCheck, AlertTriangle, Lock, Zap, Award, CheckCircle, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

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
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const WHATSAPP_NUMBER = '5511999999999';

const products = [
  {
    name: 'INSULFILM™ ISSF4000',
    badge: '4 mil — Proteção Padrão',
    subtitle: 'PROTEÇÃO CONTRA ESTILHAÇOS E ACIDENTES.',
    desc: 'Película de segurança de 4 mil (100 microns) para edificações. Retém fragmentos de vidro em caso de quebra acidental, explosões, ventanias ou falhas estruturais. Reduz drasticamente o risco de ferimentos por estilhaços projetados, protegendo ocupantes e patrimônio.',
    path: '/arquitetonico/seguranca/issf4000',
  },
  {
    name: 'INSULFILM™ ISSF7000',
    badge: '7 mil — Proteção Reforçada',
    subtitle: 'SEGURANÇA REFORÇADA CONTRA VANDALISMO E INVASÕES.',
    desc: 'Película de segurança reforçada de 7 mil (175 microns). Além de reter estilhaços, dificulta significativamente a transposição do vidro em tentativas de invasão, vandalismo e ataques deliberados. O padrão para edifícios corporativos, lojas e agências bancárias que exigem segurança patrimonial superior.',
    path: '/arquitetonico/seguranca/issf7000',
  },
];

const benefits = [
  { icon: <ShieldCheck className="w-7 h-7" />, title: 'Retenção de Estilhaços', text: 'Mantém os fragmentos de vidro aderidos à película, evitando projeção contra ocupantes.' },
  { icon: <Lock className="w-7 h-7" />, title: 'Barreira Anti-Invasão', text: 'Dificulta a transposição rápida do vidro, retardando acessos não autorizados.' },
  { icon: <Zap className="w-7 h-7" />, title: 'Proteção contra Explosões', text: 'Resiste a ondas de choque de explosões, mantendo a integridade do painel de vidro.' },
  { icon: <Building2 className="w-7 h-7" />, title: 'Patrimônio Preservado', text: 'Protege equipamentos, mobiliário e acervo contra danos por vidros quebrados.' },
  { icon: <Award className="w-7 h-7" />, title: 'Normas Internacionais', text: 'Testadas conforme normas ANSI, ASTM e EN 12600 para desempenho comprovado.' },
  { icon: <CheckCircle className="w-7 h-7" />, title: 'Garantia de Fábrica', text: 'Certificado de autenticidade e garantia estendida para instalações profissionais.' },
];

const ArqHubSeguranca = () => (
  <>
    <Helmet>
      <title>Películas de Segurança Arquitetônica | INSULFILM™</title>
      <meta name="description" content="Películas de segurança profissional INSULFILM™ para edificações. Retenção de estilhaços, proteção anti-invasão e resistência contra explosões. ISSF4000 e ISSF7000." />
      <link rel="canonical" href="https://www.insulfilm.com.br/arquitetonico/seguranca" />
    </Helmet>

    <main>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <Shield className="w-3.5 h-3.5 mr-2" />Segurança Arquitetônica
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 max-w-5xl mx-auto leading-tight">
              Proteção Real para Edificações. Vidros que Resistem Quando Mais Importa.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Conheça as películas de segurança profissional INSULFILM™ para edifícios, fachadas e ambientes corporativos. Engenharia de ponta em polímeros de alta resistência que retêm estilhaços, dificultam invasões e protegem vidas e patrimônio contra o imprevisível.
            </motion.p>

            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista em películas de segurança arquitetônica INSULFILM™.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />Falar com um Especialista
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── FAIXA DESTAQUE ───────────────────────────────────────── */}
      <section className="bg-accent py-5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent-foreground font-extrabold text-sm md:text-base uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            Películas testadas sob rigor. Certificadas por normas internacionais de segurança.
          </p>
        </div>
      </section>

      {/* ── PRODUTOS — LAYOUT ALTERNADO ──────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-20">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Encontre a Proteção Ideal para o Seu Projeto
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
              Do padrão residencial ao reforço corporativo — cada película atende a um nível específico de exigência.
            </motion.p>
          </motion.div>

          <div className="space-y-24 max-w-6xl mx-auto">
            {products.map((product, idx) => {
              const reversed = idx % 2 !== 0;
              return (
                <motion.div
                  key={product.path}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={stagger}
                  className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:direction-rtl' : ''}`}
                >
                  <motion.div variants={reversed ? fadeInRight : fadeInLeft} className={reversed ? 'md:order-2' : ''}>
                    <Badge variant="outline" className="mb-4 text-xs uppercase tracking-widest border-accent/30 text-accent">
                      {product.badge}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">
                      {product.subtitle}
                    </p>
                    <p className="text-muted-foreground font-light leading-relaxed mb-8 text-base">
                      {product.desc}
                    </p>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl px-8 py-5 shadow-premium-lg hover:shadow-premium transition-all">
                      <Link to={product.path}>
                        VEJA <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div variants={reversed ? fadeInLeft : fadeInRight} className={reversed ? 'md:order-1' : ''}>
                    <div className="glass-card rounded-2xl aspect-[4/3] flex items-center justify-center">
                      <Shield className="w-24 h-24 text-accent/20" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ───────────────────────────────────────────── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Por Que Escolher Películas de Segurança INSULFILM™
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
              Proteção comprovada que vai muito além do vidro comum.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeInUp}>
                <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="text-accent mb-4 flex justify-center">{b.icon}</div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm font-light">{b.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="bg-accent py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent-foreground font-extrabold text-base md:text-lg">
            Exija as películas originais INSULFILM™. Segurança profissional de verdade para o seu patrimônio.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Qual é a película de segurança ideal para o seu projeto?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
              Nossa equipe de engenharia analisa o tipo de vidro, a classificação de risco e as normas exigidas para recomendar a proteção exata para o seu edifício.
            </motion.p>
            <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-10 py-7 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para películas de segurança arquitetônica INSULFILM™.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />Solicitar Orçamento
                </a>
              </Button>
              <Button asChild variant="outline" className="font-bold text-lg px-10 py-7 rounded-xl border-accent/30 hover:border-accent text-foreground transition-all">
                <Link to="/lojas">Lojas Oficiais</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default ArqHubSeguranca;
