import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layers, MessageCircle, Eye, EyeOff, Sun, Paintbrush, Award, CheckCircle, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import ProductShowcase from '@/components/ProductShowcase';
import ParallaxBreak from '@/components/ParallaxBreak';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const WHATSAPP_NUMBER = '5511936182746';

const products = [
  {
    name: 'INSULFILM™ Jateado',
    badge: 'Efeito Vidro Jateado',
    subtitle: 'PRIVACIDADE COM LUMINOSIDADE NATURAL.',
    desc: 'Reproduz o sofisticado efeito de vidro jateado (fosco) sem a necessidade de tratamento ácido ou abrasão no vidro. Permite a passagem de luz natural difusa, garantindo privacidade visual em divisórias, portas, janelas de banheiros e salas de reunião.',
    path: '/arquitetonico/decorativo/jateado',
    fallbackIcon: <Eye className="w-24 h-24 text-accent/20" />,
  },
  {
    name: 'INSULFILM™ Whiteout',
    badge: 'Branco Opaco Total',
    subtitle: 'BLOQUEIO TOTAL DE VISIBILIDADE COM LUZ DIFUSA.',
    desc: 'Película branca opaca que elimina completamente a transparência do vidro, criando uma barreira visual total. Ideal para ambientes que exigem privacidade absoluta, consultórios, laboratórios, vitrines de estoque e salas técnicas.',
    path: '/arquitetonico/decorativo/whiteout',
    fallbackIcon: <EyeOff className="w-24 h-24 text-accent/20" />,
  },
  {
    name: 'INSULFILM™ Blackout',
    badge: 'Preto Opaco Total',
    subtitle: 'BLOQUEIO TOTAL DE LUZ E VISIBILIDADE.',
    desc: 'Película preta opaca que bloqueia 100% da luz e da visibilidade através do vidro. Perfeita para salas de cinema, estúdios fotográficos, quartos escuros, vitrines e ambientes que exigem escuridão total.',
    path: '/arquitetonico/decorativo/blackout',
    fallbackIcon: <Sun className="w-24 h-24 text-accent/20" />,
  },
];

const useCases = [
  { icon: <Paintbrush className="w-7 h-7" />, title: 'Design de Interiores', text: 'Divisórias elegantes, painéis decorativos e acabamentos visuais refinados sem obras.' },
  { icon: <Eye className="w-7 h-7" />, title: 'Privacidade Profissional', text: 'Consultórios, salas de reunião, escritórios e ambientes que exigem discrição visual.' },
  { icon: <Sparkles className="w-7 h-7" />, title: 'Vitrines e Retail', text: 'Crie fundos opacos, destaque produtos e controle a exposição visual da sua loja.' },
  { icon: <Award className="w-7 h-7" />, title: 'Fachadas Corporativas', text: 'Uniformize visualmente painéis de vidro e crie identidade arquitetônica única.' },
  { icon: <CheckCircle className="w-7 h-7" />, title: 'Aplicação Reversível', text: 'Instalação profissional sem danificar o vidro. Pode ser removida ou substituída a qualquer momento.' },
  { icon: <Layers className="w-7 h-7" />, title: 'Custo-Benefício Superior', text: 'Efeito visual de vidro premium por uma fração do custo de vidros especiais.' },
];

const ArqHubDecorativo = () => (
  <>
    <Helmet>
      <title>Películas Decorativas para Vidros | INSULFILM™</title>
      <meta name="description" content="Películas decorativas INSULFILM™: Jateado, Whiteout e Blackout. Privacidade, design e funcionalidade para vidros arquitetônicos sem obras." />
      <link rel="canonical" href="https://www.insulfilm.com.br/arquitetonico/decorativo" />
    </Helmet>

    <main>
      {/* ── HERO ── */}
      <PageHero
        title="Transforme Seus Vidros em Elementos de Design"
        subtitle="Privacidade, estética e funcionalidade, sem obras, sem complicação. As películas decorativas INSULFILM™ oferecem soluções visuais profissionais para vidros em ambientes corporativos, residenciais e comerciais."
        badge={{ icon: <Layers className="w-3.5 h-3.5" />, text: 'Películas Decorativas' }}
        cta={{
          text: 'Falar com um Especialista',
          href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista em películas decorativas INSULFILM™.')}`,
          icon: <MessageCircle className="w-5 h-5" />,
          external: true,
        }}
      />

      {/* ── NAVEGAÇÃO / ANCORAGEM ── */}
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

      {/* ── PRODUTOS, SHOWCASES ── */}
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
            {products.map((product, idx) => (
              <div key={product.path} id={product.name.replace(/\s/g, '-')}>
                <ProductShowcase
                  title={product.name}
                  subtitle={product.subtitle}
                  badge={product.badge}
                  description={product.desc}
                  fallbackIcon={product.fallbackIcon}
                  link={product.path}
                  reversed={idx % 2 !== 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX BREAK ── */}
      <ParallaxBreak minHeight="30vh" stats={[
        { value: '3', label: 'Linhas Decorativas' },
        { value: '100%', label: 'Reversível' },
        { value: '∞', label: 'Possibilidades' },
      ]} />

      {/* ── CASOS DE USO ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Aplicações e Vantagens
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
              Versatilidade para qualquer projeto, do residencial ao corporativo.
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

      {/* ── BOTTOM CTA ── */}
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
                <Link to="/lojas">Centros Autorizados</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default ArqHubDecorativo;
