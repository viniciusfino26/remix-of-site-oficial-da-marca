import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, Sun, Shield, Layers, Sparkles, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import LegalDisclaimer from '@/components/LegalDisclaimer';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const categories = [
  {
    title: 'Controle Solar',
    icon: <Sun className="w-8 h-8" />,
    desc: 'Reduza o calor, o ofuscamento e a conta de energia sem perder a vista ou a luminosidade. Películas que bloqueiam até 93% do infravermelho.',
    path: '/arquitetonico/residencial/solar',
    accent: 'bg-accent/10 border-accent/20',
  },
  {
    title: 'Proteção e Segurança',
    icon: <Shield className="w-8 h-8" />,
    desc: 'Vidros que retêm estilhaços e dificultam invasões. Proteção real para sua família e patrimônio, sem alterar a estética do imóvel.',
    path: '/arquitetonico/residencial/seguranca',
    accent: 'bg-accent/10 border-accent/20',
  },
  {
    title: 'Decorativo',
    icon: <Layers className="w-8 h-8" />,
    desc: 'Privacidade, estilo e personalidade para cada ambiente. Jateado, Whiteout e Blackout, sem obra, sem resíduo, com garantia.',
    path: '/arquitetonico/residencial/decorativo',
    accent: 'bg-accent/10 border-accent/20',
  },
  {
    title: 'Proteção de Superfícies (SPF)',
    icon: <Sparkles className="w-8 h-8" />,
    desc: 'Proteção invisível para superfícies nobres, bancadas, portas, elevadores e revestimentos que precisam resistir ao uso diário sem perder o acabamento.',
    path: '/arquitetonico/residencial/spf',
    accent: 'bg-accent/10 border-accent/20',
  },
];

const ArquitetonicoResidencial = () => (
  <>
    <Helmet>
      <title>Películas para Residências | INSULFILM™ Arquitetônico Residencial</title>
      <meta name="description" content="Películas INSULFILM™ para residências, controle solar, segurança, decorativo e proteção de superfícies. Conforto, estética e proteção de patrimônio." />
      <link rel="canonical" href="https://insulfilm.com.br/arquitetonico/residencial" />
      <meta property="og:title" content="Películas para Residências | INSULFILM™" />
      <meta property="og:description" content="Linha completa de películas INSULFILM™ para residências. Conforto térmico, segurança e estética para o seu lar." />
      <meta property="og:url" content="https://insulfilm.com.br/arquitetonico/residencial" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Películas Residenciais INSULFILM™",
        "description": "Linha completa de películas para residências INSULFILM™, controle solar, segurança, decorativo e proteção de superfícies.",
        "url": "https://insulfilm.com.br/arquitetonico/residencial",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "INSULFILM™", "item": "https://insulfilm.com.br" },
            { "@type": "ListItem", "position": 2, "name": "Arquitetônico", "item": "https://insulfilm.com.br/arquitetonico" },
            { "@type": "ListItem", "position": 3, "name": "Residencial", "item": "https://insulfilm.com.br/arquitetonico/residencial" }
          ]
        }
      })}</script>
    </Helmet>

    <main>
      <PageHero
        title="Sua casa merece mais conforto, mais segurança e mais privacidade."
        subtitle="Películas INSULFILM™ para residências, tecnologia que transforma o vidro em aliado do seu conforto, da sua segurança e da valorização do seu patrimônio."
        badge={{ icon: <Home className="w-3.5 h-3.5" />, text: 'INSULFILM™ RESIDENCIAL' }}
        cta={{
          text: 'Falar com um Especialista',
          href: '/contato',
          icon: <MessageCircle className="w-5 h-5" />
        }}
      />

      {/* Categorias */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Escolha pela necessidade do seu lar
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-3xl mx-auto">
              Cada ambiente da sua casa tem uma exigência diferente. A linha INSULFILM™ tem a solução certa para cada vidro.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <motion.div key={cat.title} variants={fadeInUp}>
                <Link to={cat.path}>
                  <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <Card className={`glass-card rounded-2xl h-full hover:border-accent/40 transition-all duration-300 hover:shadow-premium ${cat.accent}`}>
                      <CardContent className="p-10">
                        <div className="text-accent mb-5">{cat.icon}</div>
                        <h3 className="text-xl font-extrabold text-foreground mb-3">{cat.title}</h3>
                        <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4">{cat.desc}</p>
                        <span className="text-accent font-bold text-sm flex items-center gap-1">
                          Explorar <ArrowRight className="w-4 h-4" />
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

      <div className="container mx-auto px-4">
        <LegalDisclaimer />
      </div>

      {/* CTA Final */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Transforme o conforto da sua casa com uma conversa.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10">
              Atendimento nacional. Sem compromisso. Especialistas que orientam antes de aplicar.
            </motion.p>
            <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-12 py-7 rounded-xl shadow-premium-lg">
                <Link to="/contato"><MessageCircle className="w-5 h-5" />Falar com um Especialista</Link>
              </Button>
              <Button asChild variant="outline" className="font-bold text-lg px-10 py-7 rounded-xl">
                <Link to="/lojas"><MapPin className="w-5 h-5" />Encontrar Loja Oficial</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default ArquitetonicoResidencial;
