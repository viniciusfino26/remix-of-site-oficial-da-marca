import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sun, Shield, Eye, MessageCircle, ArrowRight, MapPin, Home, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import ProductBanner from '@/components/ProductBanner';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Películas Arquitetônicas Residenciais INSULFILM™",
  "description": "Soluções INSULFILM™ para residências, controle solar, privacidade, segurança e proteção de superfícies para apartamentos e casas.",
  "url": "https://insulfilm.com.br/residencial",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "INSULFILM™", "item": "https://insulfilm.com.br" },
      { "@type": "ListItem", "position": 2, "name": "Arquitetônico", "item": "https://insulfilm.com.br/arquitetonico" },
      { "@type": "ListItem", "position": 3, "name": "Residencial", "item": "https://insulfilm.com.br/residencial" }
    ]
  }
};

const Residencial = () => (
  <>
    <Helmet>
      <title>INSULFILM™ Residencial | Películas para Janelas e Fachadas de Casa</title>
      <meta name="description" content="O calor que sufoca, o sofá que desbotou, o apartamento exposto para a rua. Películas INSULFILM™ para residências resolvem isso, com garantia documentada." />
      <link rel="canonical" href="https://insulfilm.com.br/residencial" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://insulfilm.com.br/residencial" />
      <meta property="og:title" content="INSULFILM™ Residencial | Películas para Janelas e Fachadas de Casa" />
      <meta property="og:description" content="O calor que sufoca, o sofá que desbotou, o apartamento exposto. Películas INSULFILM™ para residências resolvem isso." />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="INSULFILM™" />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>

    <main>
      {/* ── HERO ── */}
      <PageHero
        title="Você investiu no imóvel. O sol está cobrando o preço todo dia."
        subtitle="Fachadas envidraçadas vendem imóveis. E depois cobram o preço em calor, conta de energia e mobiliário que desbota. Películas INSULFILM™ resolvem esse paradoxo."
        badge={{ icon: <Home className="w-3.5 h-3.5" />, text: 'PELÍCULAS RESIDENCIAIS, INSULFILM™' }}
        cta={{ text: 'Falar com um Especialista', href: '/contato', icon: <MessageCircle className="w-5 h-5" /> }}
      />

      {/* ── TEXTO DE APRESENTAÇÃO ── */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Películas para residências INSULFILM™, para quem não aceita escolher entre conforto e visual.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              Fachadas envidraçadas vendem imóveis. Sacadas com vista são o argumento principal de dezenas de lançamentos. E depois da compra, o morador descobre o outro lado: o calor que acumula, a conta de energia que não fecha, o sofá que desbota antes da hora e o apartamento em andar baixo que se sente exposto para a rua o tempo todo.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              A INSULFILM™ resolve esse paradoxo sem obras, sem perda de luminosidade e sem alterar a fachada, com películas técnicas para vidros residenciais que trabalham silenciosamente, todos os dias.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground/80 font-semibold italic">
              Muitas pessoas utilizam o termo "insulfilm" para se referir a películas para vidro. INSULFILM™ é marca registrada, com titularidade exclusiva. O uso da marca por terceiros não é autorizado.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-8"><div className="separator-accent" /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER 1: SOLAR RESIDENCIAL ── */}
      <ProductBanner
        title="Películas Solares para Residências"
        description="O ar-condicionado nunca descansa. O cômodo com vidro amplo é o primeiro a esquentar e o último a resfriar. Com películas solares INSULFILM™, o calor é bloqueado antes de entrar, e a conta de energia sente a diferença."
        buttonText="EXPLORE"
        buttonIcon={Sun}
        link="/arquitetonico/solar"
        alignment="right"
        cardVariant="blue"
      />

      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              O calor entra pelo vidro. A solução também.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              Cada fachada envidraçada sem proteção é uma fonte de ganho de calor direto. No verão, o cômodo que deveria ser o mais agradável da casa se torna o mais sufocante. As películas solares INSULFILM™ bloqueiam os raios infravermelhos antes que atravessem o vidro, com opções que vão de 45% a 93% de rejeição, sem escurecer o ambiente e sem alterar a aparência da fachada.
            </motion.p>
            <motion.div variants={fadeInUp} className="mb-4">
              <h3 className="text-lg font-extrabold text-foreground mb-1">Para apartamentos com restrição de condomínio:</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">A Clear70 é incolor e de baixíssima refletividade, compatível com as regulamentações mais rígidas de fachada residencial, com 81% de rejeição IR.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="mb-4">
              <h3 className="text-lg font-extrabold text-foreground mb-1">Para quem quer o máximo com vidro claro:</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">A Orizzonte70 entrega 93% de rejeição de infravermelho com 68% de luz visível, o mais alto índice disponível em película não metalizada, com 10 anos de garantia.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-lg font-extrabold text-foreground mb-1">Para fachadas com pergolado ou cobertura de vidro:</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">O Reflesso d'Argento e o Specchiato Bronzo são aprovados para teto de vidro, onde a incidência solar é perpendicular e o calor é máximo.</p>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mb-4">
              <strong>Garantia:</strong> de 3 a 10 anos dependendo do produto. Consulte condições com um dos nossos especialistas.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/arquitetonico/solar" className="text-accent font-bold text-sm flex items-center gap-1 hover:underline">
                Ver todos os produtos solares <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER 2: PRIVACIDADE ── */}
      <ProductBanner
        title="Privacidade sem abrir mão da luz"
        description="Andar baixo. Vizinhança próxima. Rua movimentada. A sensação de estar sempre exposto afeta o bem-estar dentro de casa, e a solução não pode ser fechar as cortinas para sempre."
        buttonText="CONHEÇA"
        buttonIcon={Eye}
        link="/arquitetonico/solar/grigio-invertito"
        alignment="left"
        cardVariant="orange"
      />

      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Você não deveria precisar fechar as cortinas para ter privacidade.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              A Grigio Invertito cria uma barreira visual externa durante o dia, quando a luminosidade de fora é maior do que a de dentro. Você enxerga a rua. A rua não enxerga a sua sala.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              Para projetos que valorizam estética preta contemporânea, o Petrolio entrega tom preto sofisticado sem efeito espelhado com tecnologia híbrida, durabilidade superior às películas tingidas convencionais.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mb-4">
              <strong>Garantia:</strong> de 3 anos dependendo do produto. Consulte condições com um dos nossos especialistas.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/arquitetonico/solar" className="text-accent font-bold text-sm flex items-center gap-1 hover:underline">
                Ver opções de privacidade <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER 3: PROTEÇÃO UV ── */}
      <ProductBanner
        title="O que está dentro também precisa de proteção"
        description="A radiação UV não aquece e não aparece. Mas desbota o sofá, degrada o couro, amarela as cortinas e acumula dano na pele dos moradores sem que ninguém perceba, até ver o resultado depois de anos."
        buttonText="SAIBA MAIS"
        buttonIcon={Sun}
        link="/arquitetonico/solar/ultravioletti90"
        alignment="right"
        cardVariant="blue"
      />

      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              O desgaste UV é acumulativo. E silencioso.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              Sofás, tapetes, pisos de madeira, obras de arte, cortinas, tudo isso tem um inimigo invisível que entra pelos vidros mesmo nos dias nublados: a radiação ultravioleta. Com 99% de bloqueio UV em todas as linhas INSULFILM™, o interior da residência fica protegido da principal causa de desbotamento precoce, sem alterar a luminosidade do ambiente.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              A Ultravioletti90 é totalmente incolor, 88% de transmissão de luz, aparência de vidro sem película. A proteção que ninguém vê.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mb-4">
              <strong>Garantia:</strong> de 3 a 10 anos dependendo do produto. Consulte condições com um dos nossos especialistas.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/arquitetonico/solar" className="text-accent font-bold text-sm flex items-center gap-1 hover:underline">
                Ver opções de proteção UV <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER 4: PHANTOM SPF ── */}
      <ProductBanner
        title="INSULFILM™ Phantom SPF, o projeto que custou caro merece durar"
        description="O mármore da bancada. O lacado matte do armário. A madeira polida do piso. Cada um desses acabamentos tem um custo real, e o uso diário começa a cobrar silenciosamente desde o primeiro dia."
        buttonText="SAIBA MAIS"
        buttonIcon={Layers}
        link="/phantom-arquitetonico"
        alignment="left"
        cardVariant="gray"
      />

      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Preservar é sempre mais inteligente do que restaurar.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              O INSULFILM™ Phantom SPF cria uma camada de proteção invisível sobre superfícies de alto padrão, sem alterar visual, toque ou acabamento. <strong>Phantom Gloss</strong> para superfícies brilhosas. <strong>Phantom Matte</strong> para superfícies fosco. <strong>Garantia: 5 anos.</strong> Consulte condições com um dos nossos especialistas.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/phantom-arquitetonico" className="text-accent font-bold text-sm flex items-center gap-1 hover:underline">
                Ver linha Phantom SPF <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              O conforto que a sua casa deveria ter, desde o primeiro dia.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
              Atendimento nacional. Orientação especializada antes da aplicação. Garantia documentada depois.
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

export default Residencial;
