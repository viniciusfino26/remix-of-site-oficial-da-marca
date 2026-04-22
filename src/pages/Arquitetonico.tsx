import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sun, Shield, Layers, MessageCircle, ArrowRight, MapPin, Building2, Home, Landmark, Trophy, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import ProductBanner from '@/components/ProductBanner';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import homeVideo from '@/assets/home-video.mp4';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Películas Arquitetônicas INSULFILM™",
    "description": "Linha completa de películas para vidros arquitetônicos INSULFILM™ — controle solar, segurança, decorativo e proteção de superfícies para residências e espaços comerciais.",
    "url": "https://insulfilm.com.br/arquitetonico",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "INSULFILM™", "item": "https://insulfilm.com.br" },
        { "@type": "ListItem", "position": 2, "name": "Arquitetônico", "item": "https://insulfilm.com.br/arquitetonico" }
      ]
    },
    "publisher": { "@type": "Organization", "name": "INSULFILM™", "url": "https://insulfilm.com.br" }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Soluções Arquitetônicas INSULFILM™",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Películas Solares Arquitetônicas INSULFILM™", "url": "https://insulfilm.com.br/arquitetonico/solar", "description": "Controle solar para fachadas, sacadas e janelas — Performance e Premium." },
      { "@type": "ListItem", "position": 2, "name": "Películas de Segurança Arquitetônica INSULFILM™", "url": "https://insulfilm.com.br/arquitetonico/seguranca", "description": "Proteção estrutural para vidros — retenção de estilhaços e reforço de segurança." },
      { "@type": "ListItem", "position": 3, "name": "Películas Decorativas INSULFILM™", "url": "https://insulfilm.com.br/arquitetonico/decorativo", "description": "Películas decorativas — Jateado, Whiteout e Blackout." },
      { "@type": "ListItem", "position": 4, "name": "INSULFILM™ Phantom SPF — Proteção de Superfícies", "url": "https://insulfilm.com.br/phantom-arquitetonico", "description": "Surface Protection Film para superfícies de design — Gloss e Matte." }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "O que são películas arquitetônicas?", "acceptedAnswer": { "@type": "Answer", "text": "Películas arquitetônicas são filmes técnicos aplicados sobre vidros de edificações. Oferecem controle solar, redução de calor, proteção UV, privacidade e segurança. INSULFILM™ é a marca registrada referência nesse segmento no Brasil desde 1986." } },
      { "@type": "Question", "name": "Película arquitetônica realmente reduz o calor do ambiente?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. As películas INSULFILM™ bloqueiam entre 45% e 93% dos raios infravermelhos — o principal responsável pela sensação de calor em ambientes com vidro. O resultado é perceptível nos primeiros dias após a aplicação." } },
      { "@type": "Question", "name": "Película arquitetônica serve para residência e para escritório?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. A linha INSULFILM™ foi desenvolvida para ambos os contextos, com produtos específicos para cada tipo de exposição solar, nível de privacidade e exigência estética." } },
      { "@type": "Question", "name": "Qual a garantia das películas arquitetônicas INSULFILM™?", "acceptedAnswer": { "@type": "Answer", "text": "As garantias variam de 3 a 10 anos dependendo do produto. Toda aplicação em canal oficial inclui certificado individual de garantia. Consulte condições com um dos nossos especialistas." } }
    ]
  }
];

const faqs = [
  { q: 'Película arquitetônica realmente reduz o calor do ambiente?', a: 'Sim — e de forma perceptível. As películas INSULFILM™ bloqueiam entre 45% e 93% dos raios infravermelhos, o principal responsável pela sensação de calor em ambientes com vidro. O resultado é sentido nas primeiras horas após a aplicação.' },
  { q: 'Película compromete a luminosidade do ambiente?', a: 'Depende do produto. A Clear70 mantém 72% de transmissão de luz. A Orizzonte70 mantém 68%. Há opções para cada nível de luminosidade desejada — nossos especialistas indicam a mais adequada para cada projeto e orientação de fachada.' },
  { q: 'Quanto tempo dura uma película arquitetônica INSULFILM™?', a: 'As garantias variam de 3 a 10 anos dependendo do produto e da linha. Toda aplicação em canal oficial inclui certificado individual de garantia. Consulte condições com um dos nossos especialistas.' },
  { q: 'Película interfere em sinal de Wi-Fi ou automação predial?', a: 'As películas cerâmicas (Clear70 e Orizzonte70) não interferem em nenhum sinal eletrônico. Algumas películas metalizadas podem apresentar interferência em determinados modelos de antena. Nossos especialistas avaliam antes de especificar.' },
  { q: 'Qual a diferença entre película residencial e comercial?', a: 'O produto é o mesmo. O argumento e o benefício mudam. Para residências, o foco é conforto, privacidade e redução de conta de energia. Para espaços comerciais, entram conformidade NR17, redução de OPEX e documentação para auditorias.' },
  { q: 'Película pode ser aplicada em pergolado ou cobertura de vidro?', a: 'Sim — algumas linhas são indicadas para isso. O Metallico Argento, o Reflesso d\'Argento e o Specchiato Bronzo são aprovados para teto de vidro e pergolados. Fale com um especialista para confirmar a indicação correta para o seu projeto.' },
];

const architecturalCredentials = [
  {
    title: 'Desde 1988',
    description: 'Primeira empresa de películas de controle solar no Brasil.',
    icon: Landmark,
    className: 'xl:col-span-3',
  },
  {
    title: 'Pioneirismo desde 2000',
    description: 'Primeira da América Latina a oferecer películas de segurança para automóveis e construção civil.',
    icon: Trophy,
    className: 'xl:col-span-3',
  },
  {
    title: '+3 milhões m² aplicados',
    description: 'Experiência acumulada em projetos com soluções da marca INSULFILM™.',
    icon: Building2,
    className: 'md:col-span-2 xl:col-span-6',
    featured: true,
  },
  {
    title: 'Portfólio Arquitetônico',
    description: 'Soluções para controle solar, segurança, privacidade e conforto.',
    highlight: 'Soluções técnicas',
    icon: Layers,
    className: 'xl:col-span-6',
  },
  {
    title: 'Treinamento e Homologação',
    description: 'Serviço especializado com treinamento e homologação de fábrica.',
    highlight: 'Respaldo técnico',
    icon: ShieldCheck,
    className: 'xl:col-span-6',
  },
];

const Arquitetonico = () => (
  <>
    <Helmet>
      <title>INSULFILM™ Arquitetônico | Películas para Vidros de Ambientes</title>
      <meta name="description" content="Seu ambiente esquenta, perde privacidade e desbota o que custou caro. Películas arquitetônicas INSULFILM™ resolvem isso — para residências e espaços comerciais." />
      <link rel="canonical" href="https://insulfilm.com.br/arquitetonico" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://insulfilm.com.br/arquitetonico" />
      <meta property="og:title" content="INSULFILM™ Arquitetônico | Películas para Vidros de Ambientes" />
      <meta property="og:description" content="Seu ambiente esquenta, perde privacidade e desbota o que custou caro. Películas arquitetônicas INSULFILM™ resolvem isso — residencial e comercial." />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="INSULFILM™" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="INSULFILM™ Arquitetônico | Películas para Vidros de Ambientes" />
      <meta name="twitter:description" content="Seu ambiente esquenta, perde privacidade e desbota o que custou caro. A INSULFILM™ resolve isso." />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>

    <main>
      {/* ── HERO ── */}
      <PageHero
        title="O vidro que deveria proteger você está te custando caro todos os dias."
        subtitle="Calor acumulado, conta de energia inflada, mobiliário que desbota e privacidade comprometida. Películas arquitetônicas INSULFILM™ resolvem isso — para residências e espaços comerciais."
        badge={{ icon: <Building2 className="w-3.5 h-3.5" />, text: 'DIVISÃO ARQUITETÔNICA — INSULFILM™' }}
        cta={{ text: 'Falar com um Especialista', href: '/contato', icon: <MessageCircle className="w-5 h-5" /> }}
      />

      {/* ── TEXTO DE APRESENTAÇÃO ── */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Películas arquitetônicas INSULFILM™ — para quem mora bem e trabalha bem.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              O ar-condicionado que nunca descansa. O sofá que desbotou antes da hora. A sala de reunião onde ninguém quer sentar perto do vidro. A fachada que expõe o interior para quem passa na rua. Vidros sem proteção cobram esse preço todo mês — na conta de energia, no conforto, no patrimônio e na privacidade de quem vive ou trabalha no ambiente.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              A INSULFILM™ desenvolve películas técnicas para vidros arquitetônicos há quase 40 anos. Películas originais, com tecnologia certificada, aplicação profissional e garantia documentada — para residências e espaços comerciais que não aceitam esse custo.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground/80 font-semibold italic">
              Muitas pessoas utilizam o termo "insulfilm" para se referir a películas para vidro. INSULFILM™ é marca registrada, com titularidade exclusiva. O uso da marca por terceiros não é autorizado.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 overflow-hidden rounded-lg border border-border/30 bg-muted/20 shadow-premium">
              <div className="aspect-video w-full overflow-hidden">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                >
                  <source src={homeVideo} type="video/mp4" />
                </video>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="flex justify-center mt-8"><div className="separator-accent" /></motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Autoridade arquitetônica
              </p>
              <h2 className="text-3xl font-extrabold text-foreground md:text-5xl">
                Credenciais da marca no segmento arquitetônico
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                Projetos arquitetônicos pedem mais do que película. Pedem experiência, escala e respaldo técnico.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
              {architecturalCredentials.map(({ title, description, highlight, icon: Icon, className, featured }) => (
                <motion.div key={title} variants={fadeInUp} className={className}>
                  <Card
                    className={`h-full border-border/60 bg-card shadow-premium transition-transform duration-300 hover:-translate-y-1 ${
                      featured ? 'bg-muted/30' : ''
                    }`}
                  >
                    <CardContent className="flex h-full flex-col gap-6 p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          {highlight ? (
                            <>
                              <p className={`text-foreground ${featured ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'} font-extrabold`}>
                                {highlight}
                              </p>
                              <h3 className="mt-3 text-xl font-extrabold text-foreground md:text-2xl">
                                {title}
                              </h3>
                            </>
                          ) : (
                            <h3 className={`text-foreground ${featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-extrabold leading-tight`}>
                              {title}
                            </h3>
                          )}
                        </div>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border/70 bg-secondary text-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <p className={`leading-relaxed text-muted-foreground ${featured ? 'max-w-2xl text-base md:text-lg' : 'text-sm md:text-base'}`}>
                        {description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 flex justify-center md:mt-14">
              <Button asChild size="lg" className="min-w-[280px] font-bold">
                <a href="#solucoes-arquitetonicas">
                  Conheça as soluções arquitetônicas
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER 1: SOLAR ── */}
      <div id="solucoes-arquitetonicas" className="scroll-mt-24" />
      <ProductBanner
        title="Películas Solares para Vidros"
        description="O calor acumulado pelo vidro não espera o verão. Ele está lá todo dia — sobrecarregando o ar-condicionado, tornando certos cômodos inabitáveis e chegando na sua conta de energia todo mês."
        buttonText="EXPLORE"
        buttonIcon={Sun}
        link="/arquitetonico/solar"
        alignment="right"
        cardVariant="blue"
      />

      {/* Expanded Solar Text */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Películas Solares — porque o calor não pede licença.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              Fachadas envidraçadas vendem apartamentos e valorizam imóveis. E depois cobram o preço diário em calor acumulado, conta de energia inflada e mobiliário que desbota mais rápido do que deveria. A linha solar INSULFILM™ bloqueia entre 45% e 93% do calor infravermelho — antes que ele atravesse o vidro e esquente o ambiente.
            </motion.p>
            <motion.div variants={fadeInUp} className="mb-4">
              <h3 className="text-lg font-extrabold text-foreground mb-2">Linha Performance</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">INSULFILM™ Clear70 · INSULFILM™ Grigio Invertito · INSULFILM™ Petrolio · INSULFILM™ Reflesso d'Argento</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-lg font-extrabold text-foreground mb-2">Linha Premium</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">INSULFILM™ Orizzonte70 · INSULFILM™ Ultravioletti90 · INSULFILM™ Naturale · INSULFILM™ Metallico Argento · INSULFILM™ Specchiato Bronzo</p>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mb-4">
              <strong>Garantia:</strong> de 3 a 10 anos dependendo do produto. Consulte condições com um dos nossos especialistas.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/arquitetonico/solar" className="text-accent font-bold text-sm flex items-center gap-1 hover:underline">
                Ver linha completa <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER 2: SEGURANÇA ── */}
      <ProductBanner
        title="Películas de Segurança para Vidros"
        description="Vidro quebrado sem película se fragmenta. Com estilhaços. Com risco real para quem está dentro. A proteção que você não vê é exatamente a que faz diferença quando importa."
        buttonText="CONHEÇA"
        buttonIcon={Shield}
        link="/arquitetonico/seguranca"
        alignment="left"
        cardVariant="orange"
      />

      {/* Expanded Segurança Text */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Películas de Segurança — porque vidro quebrado sem proteção é risco real.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              A maioria das pessoas nunca pensa no vidro da janela como risco. Até ele quebrar. Um impacto acidental, um objeto arremessado, uma situação de vandalismo — sem película, o vidro se fragmenta em estilhaços que causam lesões reais. Com a película de segurança INSULFILM™, os fragmentos ficam retidos. O acesso é dificultado. O risco é reduzido.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-sm font-light leading-relaxed mb-4">
              <strong>Produtos disponíveis:</strong> INSULFILM™ ISSF4000 · INSULFILM™ ISSF7000
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mb-4">
              <strong>Garantia:</strong> consulte condições com um dos nossos especialistas.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/arquitetonico/seguranca" className="text-accent font-bold text-sm flex items-center gap-1 hover:underline">
                Ver linha completa <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER 3: DECORATIVO ── */}
      <ProductBanner
        title="Películas Decorativas"
        description="Privacidade não deveria depender de cortina fechada. Nem a identidade visual do seu espaço deveria ficar à mercê de quem passa na rua."
        buttonText="EXPLORE"
        buttonIcon={Layers}
        link="/arquitetonico/decorativo"
        alignment="right"
        cardVariant="blue"
      />

      {/* Expanded Decorativo Text */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Películas Decorativas — porque privacidade não deveria depender de cortina.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              Fechar a cortina resolve o problema de privacidade. E elimina a luz natural, o visual e a razão de ter aquele vidro no projeto. As películas decorativas INSULFILM™ entregam privacidade, identidade visual e acabamento estético — sem obras, sem substituição de vidros, sem abrir mão da luminosidade do ambiente.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-sm font-light leading-relaxed mb-4">
              <strong>Produtos disponíveis:</strong> INSULFILM™ Jateado · INSULFILM™ Whiteout · INSULFILM™ Blackout
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mb-4">
              <strong>Garantia:</strong> consulte condições com um dos nossos especialistas.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/arquitetonico/decorativo" className="text-accent font-bold text-sm flex items-center gap-1 hover:underline">
                Ver linha completa <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER 4: PHANTOM SPF ── */}
      <ProductBanner
        title="INSULFILM™ Phantom SPF — Proteção de Superfícies"
        description="O mármore que manchou. O lacado que riscou. O fosco que perdeu a uniformidade. Superfícies de alto padrão não falham por falta de beleza — falham pelo uso. Depois do dano, restaurar não é a mesma coisa."
        buttonText="SAIBA MAIS"
        buttonIcon={Layers}
        link="/phantom-arquitetonico"
        alignment="left"
        cardVariant="gray"
      />

      {/* Expanded Phantom Text */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              INSULFILM™ Phantom SPF — porque o projeto custou caro demais para desgastar.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              Você escolheu o material. Aprovou a execução. Recebeu o ambiente exatamente como imaginou. E o uso diário começa a cobrar o preço — silenciosamente, progressivamente, de forma irreversível. O INSULFILM™ Phantom SPF cria uma camada de proteção invisível sobre a superfície — preservando exatamente o que faz aquele acabamento especial.
            </motion.p>
            <motion.div variants={fadeInUp} className="mb-4">
              <h3 className="text-lg font-extrabold text-foreground mb-1">INSULFILM™ Phantom Gloss</h3>
              <p className="text-muted-foreground text-sm font-light">Para superfícies brilhosas. Preserva profundidade de reflexo, brilho e impacto visual. <em>Brilho não se refaz. Se preserva.</em> <strong>Garantia: 5 anos.</strong></p>
            </motion.div>
            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-lg font-extrabold text-foreground mb-1">INSULFILM™ Phantom Matte</h3>
              <p className="text-muted-foreground text-sm font-light">Para superfícies fosco. Preserva uniformidade, toque aveludado e o luxo silencioso do projeto. <em>Um fosco perfeito não admite correções — apenas preservação.</em> <strong>Garantia: 5 anos.</strong></p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link to="/phantom-arquitetonico" className="text-accent font-bold text-sm flex items-center gap-1 hover:underline">
                Ver linha Phantom SPF <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── RESIDENCIAL / EMPRESARIAL CARDS ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Para residências ou para o seu espaço comercial?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light">A dor é diferente. A solução também.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div variants={fadeInUp}>
              <Link to="/residencial">
                <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-all duration-300 hover:shadow-premium group">
                    <CardContent className="p-10 flex flex-col gap-6">
                      <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                        <Home className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-foreground">Residencial</h3>
                      <p className="text-muted-foreground font-light leading-relaxed text-sm">
                        Você mora no imóvel. O problema está na conta de energia, no conforto e no que você comprou para ficar bonito. A sala que esquenta demais. O sofá que desbotou. O apartamento em andar baixo que se sente exposto para a rua.
                      </p>
                      <span className="text-accent font-bold text-sm flex items-center gap-1 mt-auto pt-2">
                        Ver soluções para residências <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link to="/empresarial">
                <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-all duration-300 hover:shadow-premium group">
                    <CardContent className="p-10 flex flex-col gap-6">
                      <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-foreground">Empresarial</h3>
                      <p className="text-muted-foreground font-light leading-relaxed text-sm">
                        Você gerencia o espaço. O problema está na produtividade, no OPEX e na conformidade com NR17. Postos de trabalho fora da faixa de temperatura. Conta de energia dominada pelo ar-condicionado em carga máxima.
                      </p>
                      <span className="text-accent font-bold text-sm flex items-center gap-1 mt-auto pt-2">
                        Ver soluções para espaços comerciais <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── GEO / LLM SEMANTIC BLOCK ── */}
      <section className="py-16 bg-background border-t border-border/30">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-lg font-extrabold text-foreground mb-4">Películas arquitetônicas INSULFILM™ — o que são e por que a procedência importa.</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
              O termo "insulfilm" é utilizado popularmente no Brasil para se referir a películas para vidro em geral. INSULFILM™ é a marca registrada que originou essa associação — com proteção nominativa válida perante o INPI e presença contínua no segmento desde 1986.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Películas arquitetônicas sem procedência certificada não possuem garantia da marca, não respondem pelo desempenho técnico especificado e não oferecem suporte pós-aplicação. Toda aplicação INSULFILM™ em canal oficial inclui certificado individual de procedência. O uso da marca por terceiros não é autorizado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Perguntas frequentes sobre películas arquitetônicas.</motion.h2>
          </motion.div>
          <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-bold text-foreground">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              O ambiente que você investiu para ter merece a proteção que a INSULFILM™ oferece.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
              Atendimento nacional. Sem compromisso. Com especialistas que orientam a escolha certa antes da aplicação.
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

      {/* ── FOOTER DISCLAIMER ── */}
      <section className="py-6 bg-muted/20 border-t border-border/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground/60 font-light">
            INSULFILM™ é marca registrada, protegida pela Lei de Propriedade Industrial (Lei nº 9.279/96). O uso do termo "insulfilm" por terceiros não possui autorização da titular.
          </p>
        </div>
      </section>
    </main>
  </>
);

export default Arquitetonico;
