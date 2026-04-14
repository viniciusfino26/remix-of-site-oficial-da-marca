import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Building2, Sun, Shield, Layers, Sparkles, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
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
    desc: 'Reduza o OPEX com energia, cumpra a NR17 e aumente a produtividade. Películas que bloqueiam até 93% do infravermelho sem comprometer a iluminação natural.',
    path: '/arquitetonico/comercial/solar',
  },
  {
    title: 'Proteção e Segurança',
    icon: <Shield className="w-8 h-8" />,
    desc: 'Retenção de estilhaços, barreira anti-invasão e proteção patrimonial. Conformidade com normas de segurança para edificações comerciais e corporativas.',
    path: '/arquitetonico/comercial/seguranca',
  },
  {
    title: 'Decorativo',
    icon: <Layers className="w-8 h-8" />,
    desc: 'Privacidade para salas de reunião, divisórias e fachadas. Jateado, Whiteout e Blackout — soluções profissionais sem obra civil.',
    path: '/arquitetonico/comercial/decorativo',
  },
  {
    title: 'Proteção de Superfícies (SPF)',
    icon: <Sparkles className="w-8 h-8" />,
    desc: 'Proteção invisível para elevadores, balcões, revestimentos e superfícies de alto tráfego. Reduza custos de manutenção e preserve o acabamento original.',
    path: '/arquitetonico/comercial/spf',
  },
];

const ArquitetonicoComercial = () => (
  <>
    <Helmet>
      <title>Películas para Empresas | INSULFILM™ Arquitetônico Comercial</title>
      <meta name="description" content="Películas INSULFILM™ para empresas — controle solar (NR17), segurança patrimonial, decorativo e proteção de superfícies. Reduza OPEX e aumente a produtividade." />
      <link rel="canonical" href="https://insulfilm.com.br/arquitetonico/comercial" />
      <meta property="og:title" content="Películas para Empresas | INSULFILM™" />
      <meta property="og:description" content="Linha completa de películas INSULFILM™ para edificações comerciais. OPEX, NR17 e produtividade." />
      <meta property="og:url" content="https://insulfilm.com.br/arquitetonico/comercial" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Películas Comerciais INSULFILM™",
        "description": "Linha completa de películas para edificações comerciais INSULFILM™ — controle solar, segurança, decorativo e proteção de superfícies.",
        "url": "https://insulfilm.com.br/arquitetonico/comercial",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "INSULFILM™", "item": "https://insulfilm.com.br" },
            { "@type": "ListItem", "position": 2, "name": "Arquitetônico", "item": "https://insulfilm.com.br/arquitetonico" },
            { "@type": "ListItem", "position": 3, "name": "Comercial", "item": "https://insulfilm.com.br/arquitetonico/comercial" }
          ]
        }
      })}</script>
    </Helmet>

    <main>
      <PageHero
        title="Menos OPEX, mais produtividade. Vidros que trabalham a favor da sua operação."
        subtitle="Películas INSULFILM™ para edificações comerciais e corporativas — controle solar conforme NR17, segurança patrimonial e estética profissional que reduz custos operacionais."
        badge={{ icon: <Building2 className="w-3.5 h-3.5" />, text: 'INSULFILM™ COMERCIAL' }}
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
              Soluções por necessidade operacional
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light max-w-3xl mx-auto">
              Cada edificação tem um desafio diferente. A linha INSULFILM™ entrega resultado mensurável para cada um deles.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <motion.div key={cat.title} variants={fadeInUp}>
                <Link to={cat.path}>
                  <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full hover:border-accent/40 transition-all duration-300 hover:shadow-premium bg-accent/10 border-accent/20">
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
              A película certa para o seu projeto começa por uma conversa.
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

export default ArquitetonicoComercial;
