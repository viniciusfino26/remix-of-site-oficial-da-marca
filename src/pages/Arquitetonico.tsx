import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sun, Shield, Layers, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const divisions = [
  {
    icon: <Sun className="w-10 h-10" />,
    title: 'Controle Solar',
    description: 'Películas de alta performance para redução de calor, bloqueio UV e eficiência energética — sem comprometer a estética do projeto.',
    path: '/arquitetonico/solar',
    products: ['Clear70', 'Orizzonte70', 'Ultravioletti90', 'Naturale', 'Metallico Argento', 'Specchiato Bronzo', 'Petrolio', 'Grigio Invertito'],
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Proteção e Segurança',
    description: 'Películas de segurança que retêm estilhaços, dificultam invasões e protegem o patrimônio — com certificações internacionais.',
    path: '/arquitetonico/seguranca',
    products: ['ISSF4000', 'ISSF7000'],
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: 'Decorativo',
    description: 'Privacidade, design e controle de luminosidade com películas decorativas — efeito jateado, branco opaco e preto opaco.',
    path: '/arquitetonico/decorativo',
    products: ['Jateado', 'Whiteout', 'Blackout'],
  },
];

const benefits = [
  { title: 'Eficiência Energética', text: 'Redução significativa no consumo de ar-condicionado com películas de controle solar.' },
  { title: 'Conforto Térmico', text: 'Ambientes mais agradáveis o ano inteiro, sem pontos quentes próximos ao vidro.' },
  { title: 'Proteção UV', text: 'Bloqueio de até 99% da radiação ultravioleta — protege móveis, pisos e ocupantes.' },
  { title: 'Valorização do Imóvel', text: 'Películas que agregam tecnologia, segurança e sofisticação a qualquer projeto.' },
];

const Arquitetonico = () => (
  <>
    <Helmet>
      <title>INSULFILM™ Arquitetônico | Películas para Vidros de Edificações</title>
      <meta name="description" content="Películas arquitetônicas INSULFILM™ para controle solar, segurança e decoração de fachadas, janelas e divisórias. Linha completa para residências e espaços comerciais." />
      <link rel="canonical" href="https://insulfilm.com.br/arquitetonico" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="INSULFILM™ Arquitetônico | Películas para Vidros de Edificações" />
      <meta property="og:description" content="Linha completa de películas arquitetônicas INSULFILM™: controle solar, segurança e decorativo." />
      <meta property="og:url" content="https://insulfilm.com.br/arquitetonico" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Películas Arquitetônicas INSULFILM™",
        "description": "Linha completa de películas arquitetônicas INSULFILM™ para edificações.",
        "url": "https://insulfilm.com.br/arquitetonico",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "INSULFILM™", "item": "https://insulfilm.com.br" },
            { "@type": "ListItem", "position": 2, "name": "Arquitetônico", "item": "https://insulfilm.com.br/arquitetonico" }
          ]
        }
      })}</script>
    </Helmet>

    <main>
      {/* ── HERO ── */}
      <PageHero
        title="Películas Arquitetônicas INSULFILM™ para Edificações de Alto Padrão"
        subtitle="Controle solar, segurança estrutural e estética decorativa — tudo em uma única marca. A linha arquitetônica INSULFILM™ transforma vidros comuns em superfícies inteligentes."
        badge={{ icon: <Sun className="w-3.5 h-3.5" />, text: 'DIVISÃO ARQUITETÔNICA — INSULFILM™' }}
        cta={{
          text: 'Falar com um Especialista',
          href: '/contato',
          icon: <MessageCircle className="w-5 h-5" />,
        }}
      />

      {/* ── DIVISÕES ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Três linhas. Uma solução completa para o seu projeto.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-3xl mx-auto">
              Cada linha foi desenvolvida para resolver uma necessidade específica da arquitetura moderna — do conforto térmico à proteção patrimonial.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {divisions.map((div) => (
              <motion.div key={div.title} variants={fadeInUp}>
                <Link to={div.path}>
                  <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-all duration-300 hover:shadow-premium group">
                      <CardContent className="p-10 flex flex-col items-center text-center gap-6">
                        <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                          {div.icon}
                        </div>
                        <h3 className="text-2xl font-extrabold text-foreground">{div.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">{div.description}</p>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                          {div.products.slice(0, 4).map((p) => (
                            <span key={p} className="text-xs bg-muted/50 text-muted-foreground px-2.5 py-1 rounded-full">{p}</span>
                          ))}
                          {div.products.length > 4 && (
                            <span className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-semibold">
                              +{div.products.length - 4} mais
                            </span>
                          )}
                        </div>
                        <span className="text-accent font-bold text-sm flex items-center gap-1 mt-auto pt-4">
                          Explorar linha <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Por que especificar INSULFILM™ no seu projeto?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeInUp} className="text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Transforme o vidro do seu projeto em uma superfície inteligente.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
              Atendimento nacional. Sem compromisso. Especialistas que orientam antes de aplicar.
            </motion.p>
            <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-12 py-7 rounded-xl shadow-premium-lg hover:shadow-premium transition-all uppercase tracking-wide">
                <Link to="/contato">
                  <MessageCircle className="w-5 h-5" />
                  Falar com um Especialista
                </Link>
              </Button>
              <Button asChild variant="outline" className="font-bold text-lg px-10 py-7 rounded-xl">
                <Link to="/rede/lojas-oficiais">
                  <MapPin className="w-5 h-5" />
                  Encontrar Loja Oficial
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default Arquitetonico;
