import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Shield, Layers, Sparkles, MessageCircle, MapPin, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/PageHero';
import LegalDisclaimer from '@/components/LegalDisclaimer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const categorias = [
  {
    title: 'Controle Solar',
    icon: <Sun className="w-7 h-7" />,
    quando: 'Ambientes quentes, contas de luz altas, ofuscamento na TV/monitor, móveis desbotando.',
    beneficios: ['Rejeita até 93% do infravermelho', 'Protege móveis e pisos contra UV', 'Reduz uso de ar-condicionado'],
    exemplos: ['INSULFILM™ Clear70', 'INSULFILM™ Orizzonte70', 'INSULFILM™ Naturale'],
    path: '/arquitetonico/residencial/solar',
  },
  {
    title: 'Segurança',
    icon: <Shield className="w-7 h-7" />,
    quando: 'Andar térreo, imóveis expostos, casas com crianças, proteção contra estilhaços e invasões.',
    beneficios: ['Retém estilhaços em caso de quebra', 'Dificulta invasões', 'Mantém a transparência do vidro'],
    exemplos: ['INSULFILM™ ISSF4000', 'INSULFILM™ ISSF7000'],
    path: '/arquitetonico/residencial/seguranca',
  },
  {
    title: 'Decorativo',
    icon: <Layers className="w-7 h-7" />,
    quando: 'Banheiros, suítes, escritórios em casa, divisórias de vidro, home cinema.',
    beneficios: ['Privacidade sem obra civil', 'Efeito jateado, fosco ou blackout', 'Preserva a passagem de luz (exceto blackout)'],
    exemplos: ['INSULFILM™ Jateado', 'INSULFILM™ Whiteout', 'INSULFILM™ Blackout'],
    path: '/arquitetonico/residencial/decorativo',
  },
  {
    title: 'Proteção de Superfícies (SPF)',
    icon: <Sparkles className="w-7 h-7" />,
    quando: 'Bancadas, portas, revestimentos e superfícies nobres sujeitas a riscos e desgaste.',
    beneficios: ['Proteção invisível contra riscos', 'Preserva o acabamento original', 'Remoção sem resíduo'],
    exemplos: ['INSULFILM™ Phantom'],
    path: '/arquitetonico/residencial/spf',
  },
];

const passos = [
  { n: '1', title: 'Identifique a necessidade principal', desc: 'Calor e conta de luz? Privacidade? Proteção da família? Cada objetivo aponta para uma categoria diferente.' },
  { n: '2', title: 'Considere a orientação solar do ambiente', desc: 'Janelas voltadas ao Norte e Oeste recebem mais sol e pedem películas com maior rejeição térmica.' },
  { n: '3', title: 'Avalie estética e privacidade desejadas', desc: 'Quer manter a vista? Escolha películas transparentes. Precisa de privacidade? Considere fumês, espelhadas ou decorativas.' },
  { n: '4', title: 'Confirme com um Centro Autorizado INSULFILM™', desc: 'A aplicação correta define a durabilidade e a garantia. Todo Centro Autorizado avalia o vidro antes de recomendar.' },
];

const faqs = [
  { q: 'Qual a melhor película para janela residencial?', a: 'Depende do objetivo. Para conforto térmico com transparência, a linha Solar (Clear70, Orizzonte70) é a mais indicada. Para privacidade, as decorativas. Para segurança, a linha ISSF.' },
  { q: 'Insulfilm para janela de casa escurece o ambiente?', a: 'Não necessariamente. Existem películas de alta transparência (até 70% de transmissão de luz) que rejeitam calor e UV sem escurecer o vidro.' },
  { q: 'Quanto tempo dura uma película INSULFILM™ residencial?', a: 'Aplicada por um Centro Autorizado, tem garantia de fábrica que pode chegar a 10 anos, dependendo da linha e da exposição solar.' },
  { q: 'Posso instalar película em qualquer tipo de vidro?', a: 'A maioria dos vidros residenciais aceita película, mas vidros temperados espessos, laminados e insulados exigem análise técnica prévia para evitar choque térmico.' },
  { q: 'Insulfilmes para janela protegem contra raios UV?', a: 'Sim. As películas INSULFILM™ bloqueiam mais de 99% dos raios UV, protegendo móveis, pisos, obras de arte e a pele da família.' },
];

const ArqResidencialGuiaCompleto = () => {
  const canonical = 'https://www.insulfilm.com.br/arquitetonico/residencial/guia-completo';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'INSULFILM™', item: 'https://www.insulfilm.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Arquitetônico', item: 'https://www.insulfilm.com.br/arquitetonico' },
      { '@type': 'ListItem', position: 3, name: 'Residencial', item: 'https://www.insulfilm.com.br/arquitetonico/residencial' },
      { '@type': 'ListItem', position: 4, name: 'Guia Completo', item: canonical },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Insulfilmes para Janela: Guia Completo Residencial | INSULFILM™</title>
        <meta name="description" content="Guia completo de insulfilmes para janela residencial: como escolher entre películas de controle solar, segurança e decorativas. Compare tipos, benefícios e aplicações." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Insulfilmes para Janela: Guia Completo Residencial | INSULFILM™" />
        <meta property="og:description" content="Como escolher a película certa para as janelas da sua casa. Compare solar, segurança e decorativa, com benefícios e recomendações." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main>
        <PageHero
          title="Insulfilmes para janela: o guia completo para sua casa."
          subtitle="Como escolher a película certa entre controle solar, segurança e decorativa, sem depender de achismo. Um guia INSULFILM™ para quem quer decidir com base em benefício real."
          badge={{ icon: <HelpCircle className="w-3.5 h-3.5" />, text: 'GUIA RESIDENCIAL' }}
          cta={{ text: 'Falar com um Especialista', href: '/contato', icon: <MessageCircle className="w-5 h-5" /> }}
        />

        {/* Intro */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-extrabold text-foreground mb-4">
                O que é uma película para janela residencial?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light leading-relaxed mb-4">
                Insulfilme para janela é uma película técnica aplicada sobre o vidro que agrega funções que o vidro comum não oferece: rejeição de calor, bloqueio de UV, privacidade, segurança contra estilhaços e proteção decorativa. Na sua casa, ela transforma o vidro em um componente ativo do conforto e da segurança do ambiente.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light leading-relaxed">
                INSULFILM™ é a marca registrada pioneira no Brasil. Neste guia, você vai entender as diferenças entre os principais tipos de películas residenciais e como escolher a certa para cada ambiente.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Tipos de películas */}
        <section className="py-16 bg-background/50">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12 max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Os 4 tipos de películas para janela residencial
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light">
                Cada categoria resolve um problema específico. Entenda quando escolher cada uma.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {categorias.map((cat) => (
                <motion.div key={cat.title} variants={fadeInUp}>
                  <Card className="glass-card rounded-2xl h-full border-accent/20 hover:border-accent/40 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="text-accent mb-4">{cat.icon}</div>
                      <h3 className="text-xl font-extrabold text-foreground mb-3">{cat.title}</h3>
                      <p className="text-sm text-muted-foreground font-light mb-4"><strong className="text-foreground">Quando escolher:</strong> {cat.quando}</p>
                      <ul className="space-y-2 mb-4">
                        {cat.beneficios.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-muted-foreground mb-4"><strong className="text-foreground">Exemplos:</strong> {cat.exemplos.join(', ')}</p>
                      <Link to={cat.path} className="text-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Explorar linha <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Como escolher */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-10 text-center">
                Como escolher a película certa em 4 passos
              </motion.h2>
              <div className="space-y-6">
                {passos.map((p) => (
                  <motion.div key={p.n} variants={fadeInUp}>
                    <Card className="glass-card rounded-2xl border-accent/20">
                      <CardContent className="p-6 flex gap-5 items-start">
                        <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-extrabold text-lg shrink-0">
                          {p.n}
                        </div>
                        <div>
                          <h3 className="text-lg font-extrabold text-foreground mb-1">{p.title}</h3>
                          <p className="text-muted-foreground font-light">{p.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-10 text-center">
                Dúvidas frequentes sobre insulfilmes para janela
              </motion.h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <motion.div key={f.q} variants={fadeInUp}>
                    <Card className="glass-card rounded-2xl border-accent/20">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-extrabold text-foreground mb-2">{f.q}</h3>
                        <p className="text-muted-foreground font-light">{f.a}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <LegalDisclaimer />
        </div>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Pronto para escolher a película certa para sua casa?
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-8">
              Um especialista INSULFILM™ orienta antes da aplicação, sem compromisso.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg px-10 py-6 rounded-xl shadow-premium-lg">
                <Link to="/contato"><MessageCircle className="w-5 h-5" />Falar com um Especialista</Link>
              </Button>
              <Button asChild variant="outline" className="font-bold text-lg px-10 py-6 rounded-xl">
                <Link to="/lojas"><MapPin className="w-5 h-5" />Encontrar Centro Autorizado</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ArqResidencialGuiaCompleto;
