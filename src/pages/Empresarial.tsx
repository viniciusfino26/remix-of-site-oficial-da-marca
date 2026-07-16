import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sun, Shield, Eye, MessageCircle, ArrowRight, MapPin, Building2, Layers } from 'lucide-react';
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
  "name": "Películas Arquitetônicas para Espaços Comerciais INSULFILM™",
  "description": "Soluções INSULFILM™ para escritórios e espaços comerciais, controle solar, conformidade NR17, redução de OPEX e proteção de superfícies.",
  "url": "https://insulfilm.com.br/empresarial",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "INSULFILM™", "item": "https://insulfilm.com.br" },
      { "@type": "ListItem", "position": 2, "name": "Arquitetônico", "item": "https://insulfilm.com.br/arquitetonico" },
      { "@type": "ListItem", "position": 3, "name": "Empresarial", "item": "https://insulfilm.com.br/empresarial" }
    ]
  }
};

const Empresarial = () => (
  <>
    <Helmet>
      <title>INSULFILM™ Empresarial | Películas para Escritórios e Espaços Comerciais</title>
      <meta name="description" content="NR17 fora do padrão, OPEX de climatização alto, salas de reunião expostas. Películas arquitetônicas INSULFILM™ para espaços comerciais resolvem isso." />
      <link rel="canonical" href="https://insulfilm.com.br/empresarial" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://insulfilm.com.br/empresarial" />
      <meta property="og:title" content="INSULFILM™ Empresarial | Películas para Escritórios e Espaços Comerciais" />
      <meta property="og:description" content="NR17 fora do padrão, OPEX de climatização alto, salas expostas. Películas INSULFILM™ para espaços comerciais." />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="INSULFILM™" />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>

    <main>
      {/* ── HERO ── */}
      <PageHero
        title="Postos de trabalho perto do vidro. Temperatura fora do padrão. Conta de energia que não fecha."
        subtitle="Películas arquitetônicas INSULFILM™ para espaços comerciais, eficiência que aparece no resultado."
        badge={{ icon: <Building2 className="w-3.5 h-3.5" />, text: 'PELÍCULAS EMPRESARIAIS, INSULFILM™' }}
        cta={{ text: 'Falar com um Especialista', href: '/contato', icon: <MessageCircle className="w-5 h-5" /> }}
      />

      {/* ── TEXTO DE APRESENTAÇÃO ── */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Películas arquitetônicas INSULFILM™ para espaços comerciais, eficiência que aparece no resultado.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              Em escritórios e espaços comerciais com fachada envidraçada, o vidro sem controle solar não é apenas desconforto, é custo operacional recorrente, passivo de conformidade trabalhista e produtividade comprometida sem causa aparente.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              O ar-condicionado que opera em carga forçada o dia inteiro. Os postos de trabalho próximos ao vidro que ninguém quer ocupar no verão. A sala de reunião confidencial que pode ser vista da rua. A fachada sem identidade visual. A INSULFILM™ resolve cada um desses problemas, com películas técnicas de procedência certificada, aplicação profissional e documentação de garantia para processos de compliance e auditoria.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground/80 font-semibold italic">
              Muitas pessoas utilizam o termo "insulfilm" para se referir a películas para vidro. INSULFILM™ é marca registrada, com titularidade exclusiva. O uso da marca por terceiros não é autorizado.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-8"><div className="separator-accent" /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER 1: SOLAR COMERCIAL ── */}
      <ProductBanner
        title="Películas Solares para Espaços Comerciais"
        description="Cada hora de ar-condicionado em carga máxima tem um custo calculável. Com películas solares INSULFILM™, a carga de calor que entra pelo vidro cai, e o OPEX de climatização sente a diferença desde o primeiro mês."
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
              O ar-condicionado não é o problema. O vidro sem proteção é.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              Em edificações comerciais, a energia gasta com climatização representa entre 40% e 60% do consumo total de eletricidade. Fachadas envidraçadas sem controle solar são a principal causa, e a intervenção de maior custo-efetividade disponível é a película de alto desempenho térmico.
            </motion.p>
            <motion.div variants={fadeInUp} className="mb-4">
              <h3 className="text-lg font-extrabold text-foreground mb-1">Para escritórios com identidade visual definida:</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">A Clear70 é incolor e não metalizada, zero interferência em automação predial, Wi-Fi corporativo ou câmeras IP. 81% de rejeição IR com aparência neutra.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="mb-4">
              <h3 className="text-lg font-extrabold text-foreground mb-1">Para o mais alto índice de rejeição sem metalização:</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">A Orizzonte70 entrega 93% de rejeição de infravermelho com 68% de luz preservada, compatível com sistemas BAS/BMS e projetos LEED e AQUA. Com 10 anos de garantia documentada.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-lg font-extrabold text-foreground mb-1">Para ambientes com identidade visual escura:</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">O Petrolio oferece estética preta sem refletividade intensa com tecnologia híbrida, durabilidade corporativa com conformidade NR17 para controle de ofuscamento.</p>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-sm font-light leading-relaxed mb-4">
              A aplicação documentada com certificado individual pode ser registrada como medida de adequação ergonômica, evidência para auditorias NR17 Art. 17.5.2 e 17.5.3.
            </motion.p>
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

      {/* ── BANNER 2: PRIVACIDADE CORPORATIVA ── */}
      <ProductBanner
        title="Discrição operacional no horário comercial"
        description="Salas de reunião confidenciais. Diretoria visível para o corredor. Escritório exposto para a rua movimentada. A privacidade durante o horário comercial não deveria depender de persianas fechadas."
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
              Reuniões confidenciais precisam de discrição. Não de persianas.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              A Grigio Invertito cria isolamento visual externo durante o horário comercial, quando a luminosidade externa é sempre maior que a interna. Salas de reunião, diretoria e atendimento ao cliente com discrição operacional real, sem comprometer a entrada de luz natural.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              Com 75% de rejeição IR e 70% de energia solar rejeitada, atende simultaneamente os critérios térmicos e de conformidade NR17, com certificado individual para documentação de auditoria.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mb-4">
              <strong>Garantia:</strong> 3 anos. Consulte condições com um dos nossos especialistas.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/arquitetonico/solar/grigio-invertito" className="text-accent font-bold text-sm flex items-center gap-1 hover:underline">
                Ver produto <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER 3: SEGURANÇA COMERCIAL ── */}
      <ProductBanner
        title="Vidros de edificações comerciais também precisam de proteção"
        description="Lojas com vitrine. Escritórios no térreo. Estacionamentos. Ambientes com vidro expostos a risco de vandalismo ou impacto, onde a quebra sem proteção significa estilhaços, risco para funcionários e custo imediato de substituição."
        buttonText="CONHEÇA"
        buttonIcon={Shield}
        link="/arquitetonico/seguranca"
        alignment="right"
        cardVariant="blue"
      />

      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Segurança que não aparece, até ser necessária.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              As películas de segurança arquitetônica INSULFILM™ retêm fragmentos após a quebra, protegem ocupantes de lesões e dificultam o acesso em situações de vandalismo. Para gestores de facilities: documentação técnica com certificado individual disponível para laudos e auditorias de segurança predial.
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

      {/* ── BANNER 4: PHANTOM SPF COMERCIAL ── */}
      <ProductBanner
        title="INSULFILM™ Phantom SPF, a identidade do espaço não pode desgastar"
        description="Showrooms, recepções, espaços de representação. Superfícies que compõem a identidade da marca, mármore, aço inox, lacado, vidro. O uso intenso começa a cobrar o preço desde o primeiro dia de operação."
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
              A identidade visual do seu espaço depende de superfícies que continuam impecáveis.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              Em showrooms e recepções corporativas, o acabamento das superfícies comunica o padrão da empresa. Marcas de uso, manchas e desgaste progressivo degradam essa comunicação silenciosamente. O INSULFILM™ Phantom SPF protege essas superfícies sem alterar visual, toque ou acabamento, para que o espaço continue comunicando o que foi projetado para comunicar.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base font-light leading-relaxed mb-6">
              <strong>Phantom Gloss</strong> para superfícies brilhosas. <strong>Phantom Matte</strong> para superfícies fosco. <strong>Garantia: 5 anos.</strong> Consulte condições com um dos nossos especialistas.
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
              Eficiência operacional e conformidade técnica, com a marca que definiu o padrão.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
              Atendimento nacional para projetos de qualquer escala. Certificados individuais para compliance. Especialistas que especificam a solução correta para cada ambiente.
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

export default Empresarial;
