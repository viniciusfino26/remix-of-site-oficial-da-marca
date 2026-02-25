import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, MessageCircle, ArrowRight, ShieldCheck, AlertTriangle, Lock, Zap, Award, CheckCircle, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import ProductShowcase from '@/components/ProductShowcase';

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
  {
    name: 'INSULFILM™ ISSF4000',
    badge: '4 mil — Proteção Padrão',
    subtitle: 'PROTEÇÃO CONTRA ESTILHAÇOS E ACIDENTES.',
    desc: 'Película de segurança de 4 mil (100 microns) para edificações. Retém fragmentos de vidro em caso de quebra acidental, explosões, ventanias ou falhas estruturais.',
    path: '/arquitetonico/seguranca/issf4000',
  },
  {
    name: 'INSULFILM™ ISSF7000',
    badge: '7 mil — Proteção Reforçada',
    subtitle: 'SEGURANÇA REFORÇADA CONTRA VANDALISMO E INVASÕES.',
    desc: 'Película de segurança reforçada de 7 mil (175 microns). Além de reter estilhaços, dificulta significativamente a transposição do vidro em tentativas de invasão e vandalismo.',
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
      {/* ── HERO ── */}
      <PageHero
        title="Proteção Real para Edificações. Vidros que Resistem Quando Mais Importa."
        subtitle="Conheça as películas de segurança profissional INSULFILM™ para edifícios, fachadas e ambientes corporativos. Engenharia de ponta em polímeros de alta resistência que retêm estilhaços, dificultam invasões e protegem vidas e patrimônio contra o imprevisível."
        badge={{ icon: <Shield className="w-3.5 h-3.5" />, text: 'Segurança Arquitetônica' }}
        cta={{
          text: 'Falar com um Especialista',
          href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista em películas de segurança arquitetônica INSULFILM™.')}`,
          icon: <MessageCircle className="w-5 h-5" />,
          external: true,
        }}
      />

      {/* ── FAIXA DESTAQUE ── */}
      <section className="bg-accent py-5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent-foreground font-extrabold text-sm md:text-base uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            Películas testadas sob rigor. Certificadas por normas internacionais de segurança.
          </p>
        </div>
      </section>

      {/* ── PRODUTOS — SHOWCASES ── */}
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
            {products.map((product, idx) => (
              <ProductShowcase
                key={product.path}
                title={product.name}
                subtitle={product.subtitle}
                badge={product.badge}
                description={product.desc}
                fallbackIcon={<Shield className="w-24 h-24 text-accent/20" />}
                link={product.path}
                reversed={idx % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
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

      {/* ── BOTTOM CTA ── */}
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
              Nossa equipe de engenharia analisa o tipo de vidro, a classificação de risco e as normas exigidas para recomendar a proteção exata.
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
