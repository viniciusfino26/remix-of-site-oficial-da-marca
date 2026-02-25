import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layers, MessageCircle, ArrowRight, Eye, EyeOff, Sun, Paintbrush, Award, CheckCircle, Sparkles } from 'lucide-react';
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
    name: 'INSULFILM™ Jateado',
    badge: 'Efeito Vidro Jateado',
    subtitle: 'PRIVACIDADE COM LUMINOSIDADE NATURAL.',
    desc: 'Reproduz o sofisticado efeito de vidro jateado (fosco) sem a necessidade de tratamento ácido ou abrasão no vidro. Permite a passagem de luz natural difusa, garantindo privacidade visual em divisórias, portas, janelas de banheiros e salas de reunião. Fácil aplicação e remoção — sem alterar o vidro original.',
    path: '/arquitetonico/decorativo/jateado',
    icon: <Eye className="w-24 h-24 text-accent/20" />,
  },
  {
    name: 'INSULFILM™ Whiteout',
    badge: 'Branco Opaco Total',
    subtitle: 'BLOQUEIO TOTAL DE VISIBILIDADE COM LUZ DIFUSA.',
    desc: 'Película branca opaca que elimina completamente a transparência do vidro, criando uma barreira visual total. Ideal para ambientes que exigem privacidade absoluta — consultórios, laboratórios, vitrines de estoque e salas técnicas. Mantém a entrada de luminosidade difusa suave.',
    path: '/arquitetonico/decorativo/whiteout',
    icon: <EyeOff className="w-24 h-24 text-accent/20" />,
  },
  {
    name: 'INSULFILM™ Blackout',
    badge: 'Preto Opaco Total',
    subtitle: 'BLOQUEIO TOTAL DE LUZ E VISIBILIDADE.',
    desc: 'Película preta opaca que bloqueia 100% da luz e da visibilidade através do vidro. Perfeita para salas de cinema, estúdios fotográficos, quartos escuros, vitrines e ambientes que exigem escuridão total ou uma estética preta sofisticada e uniforme.',
    path: '/arquitetonico/decorativo/blackout',
    icon: <Sun className="w-24 h-24 text-accent/20" />,
  },
];

const useCases = [
  { icon: <Paintbrush className="w-7 h-7" />, title: 'Design de Interiores', text: 'Divisórias elegantes, painéis decorativos e acabamentos visuais refinados sem obras.' },
  { icon: <Eye className="w-7 h-7" />, title: 'Privacidade Profissional', text: 'Consultórios, salas de reunião, escritórios e ambientes que exigem discrição visual.' },
  { icon: <Sparkles className="w-7 h-7" />, title: 'Vitrines e Retail', text: 'Crie fundos opacos, destaque produtos e controle a exposição visual da sua loja.' },
  { icon: <Award className="w-7 h-7" />, title: 'Fachadas Corporativas', text: 'Uniformize visualmente painéis de vidro e crie identidade arquitetônica única.' },
  { icon: <CheckCircle className="w-7 h-7" />, title: 'Aplicação Reversível', text: 'Instalação profissional sem danificar o vidro. Pode ser removida ou substituída a qualquer momento.' },
  { icon: <Layers className="w-7 h-7" />, title: 'Custo-Benefício Superior', text: 'Efeito visual de vidro premium por uma fração do custo de vidros especiais ou tratamentos químicos.' },
];

const ArqHubDecorativo = () => (
  <>
    <Helmet>
      <title>Películas Decorativas para Vidros | INSULFILM™</title>
      <meta name="description" content="Películas decorativas INSULFILM™: Jateado, Whiteout e Blackout. Privacidade, design e funcionalidade para vidros arquitetônicos sem obras." />
      <link rel="canonical" href="https://www.insulfilm.com.br/arquitetonico/decorativo" />
    </Helmet>

    <main>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <Layers className="w-3.5 h-3.5 mr-2" />Películas Decorativas
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 max-w-5xl mx-auto leading-tight">
              Transforme Seus Vidros em Elementos de Design
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70 font-light max-w-3xl mx-auto mb-4 leading-relaxed">
              Privacidade, estética e funcionalidade — sem obras, sem complicação.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base text-primary-foreground/50 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              As películas decorativas INSULFILM™ oferecem soluções visuais profissionais para vidros em ambientes corporativos, residenciais e comerciais. Do efeito jateado sofisticado ao bloqueio total de luz — tudo com aplicação reversível e sem alterar a estrutura do vidro.
            </motion.p>

            <motion.div variants={scaleIn}>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista em películas decorativas INSULFILM™.')}`}
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

      {/* ── NAVEGAÇÃO / ANCORAGEM ────────────────────────────────── */}
      <section className="py-6 bg-muted/30 border-b border-border sticky top-[67px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((p) => (
              <Button
                key={p.path}
                variant="outline"
                className="rounded-full px-6 py-2 gap-2 border-accent/20 hover:border-accent hover:text-accent transition-all"
                onClick={() => document.getElementById(p.name.replace(/\s/g, '-'))?.scrollIntoView({ behavior: 'smooth' })}
              >
                {p.name.split('™ ')[1]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUTOS — LAYOUT ALTERNADO ──────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-20">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Encontre o Efeito Visual Perfeito
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
              Cada película decorativa atende a uma necessidade específica de estética e privacidade.
            </motion.p>
          </motion.div>

          <div className="space-y-24 max-w-6xl mx-auto">
            {products.map((product, idx) => {
              const reversed = idx % 2 !== 0;
              return (
                <motion.div
                  key={product.path}
                  id={product.name.replace(/\s/g, '-')}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={stagger}
                  className="grid md:grid-cols-2 gap-12 items-center"
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
                      {product.icon}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CASOS DE USO ─────────────────────────────────────────── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Aplicações e Vantagens
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
              Versatilidade para qualquer projeto — do residencial ao corporativo.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {useCases.map((u) => (
              <motion.div key={u.title} variants={fadeInUp}>
                <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="text-accent mb-4 flex justify-center">{u.icon}</div>
                    <h3 className="text-lg font-extrabold text-foreground mb-2">{u.title}</h3>
                    <p className="text-muted-foreground text-sm font-light">{u.text}</p>
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
            Exija as películas originais INSULFILM™. Design profissional sem obras e com garantia de fábrica.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Pronto para Transformar Seus Vidros?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
              Nossos consultores ajudam você a escolher o efeito decorativo ideal, com orçamento personalizado e instalação profissional.
            </motion.p>
            <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-10 py-7 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para películas decorativas INSULFILM™.')}`}
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

export default ArqHubDecorativo;
