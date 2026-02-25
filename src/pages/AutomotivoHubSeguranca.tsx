import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, ShieldCheck, ShieldAlert, Swords, MessageCircle, ArrowRight, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const WHATSAPP_NUMBER = '5511999999999';

const navCards = [
  { icon: ShieldCheck, title: 'Proteção em Acidentes', desc: 'Evite a projeção direta de estilhaços contra os ocupantes', anchor: '#protecao' },
  { icon: ShieldAlert, title: 'Proteção Antivandalismo', desc: 'Escudo contra atos de vandalismo e estilhaços em choques', anchor: '#protecao' },
  { icon: Swords, title: 'Defesa', desc: 'Verdadeiros escudos muito mais resistentes a impactos agressivos de invasão', anchor: '#defesa' },
];

const protecaoProducts = [
  {
    name: 'INSULFILM™ SkinSafe8K',
    subtitle: 'PROTEÇÃO CONTRA ACIDENTES.',
    text: 'Em caso de quebras acidentais provocadas por impactos, ou quebra espontânea, falhas mecânicas ou choques térmicos — a película retém os fragmentos, evitando a projeção direta contra os ocupantes do veículo.',
    path: '/automotivo/seguranca/skinsafe8k',
  },
  {
    name: 'INSULFILM™ Antivandalismo 13K',
    subtitle: 'PROTEÇÃO CONTRA ATOS DE VANDALISMO.',
    text: 'Película projetada com alta tecnologia. Dificulta invasões rápidas e retém estilhaços em quebras acidentais. O escudo contra a quebra do vidro por abordagens rápidas e premeditadas. Torna o vidro principal uma barreira resistente a impactos.',
    path: '/automotivo/seguranca/antivandalismo13k',
  },
];

const defesaProducts = [
  {
    name: 'INSULFILM™ SkudoGuard',
    subtitle: 'MAIS QUE ANTIVANDALISMO, SEGURANÇA SUPERIOR FORTE E EFETIVA.',
    text: 'Mais proteção contra agressões, a película SkudoGuard torna o vidro com uma barreira espessa, limitando o acesso imediato nas primeiras tentativas, desestimulando a ação. Retém a projeção direta de estilhaços em acidentes. Torna a transposição um forte escudo de difícil ruptura antes e, principalmente, após a quebra do vidro.',
    path: '/automotivo/seguranca/skudoguard',
  },
  {
    name: 'INSULFILM™ SkudoUltra',
    subtitle: 'EXTREMA SEGURANÇA. BLINDAGEM CONTRA ARMAS BRANCAS.',
    text: 'O máximo em blindagem com filmes, aplicável aos vidros laterais do carro. Máxima proteção diante de múltiplas e severos ataques. Transforma os vidros do seu carro num escudo com altíssima resistência pós quebra para uma invasão com impacto pesado e contínuo. Excepcional blindagem contra estilhaços de vidro.',
    path: '/automotivo/seguranca/skudoultra',
  },
];

const ProductRow = ({ product, index, reversed }: { product: typeof protecaoProducts[0]; index: number; reversed: boolean }) => {
  const textVariant = reversed ? fadeInRight : fadeInLeft;
  const imgVariant = reversed ? fadeInLeft : fadeInRight;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${index > 0 ? 'mt-20' : ''}`}
    >
      {reversed ? (
        <>
          {/* Image first */}
          <motion.div variants={imgVariant} className="order-2 md:order-1">
            <div className="glass-card rounded-2xl aspect-[4/3] flex flex-col items-center justify-center gap-3">
              <Shield className="w-16 h-16 text-accent/40" />
              <span className="text-sm text-muted-foreground">Imagem do produto</span>
            </div>
          </motion.div>
          {/* Text second */}
          <motion.div variants={textVariant} className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">{product.name}</h3>
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">{product.subtitle}</p>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">{product.text}</p>
            <Link to={product.path}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 rounded-xl shadow-md hover:shadow-lg transition-all">
                VEJA <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </>
      ) : (
        <>
          {/* Text first */}
          <motion.div variants={textVariant}>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">{product.name}</h3>
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">{product.subtitle}</p>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">{product.text}</p>
            <Link to={product.path}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 rounded-xl shadow-md hover:shadow-lg transition-all">
                VEJA <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          {/* Image second */}
          <motion.div variants={imgVariant}>
            <div className="glass-card rounded-2xl aspect-[4/3] flex flex-col items-center justify-center gap-3">
              <Shield className="w-16 h-16 text-accent/40" />
              <span className="text-sm text-muted-foreground">Imagem do produto</span>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

const AutomotivoHubSeguranca = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const textureY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -60]), { stiffness: 60, damping: 20 });

  return (
    <>
      <Helmet>
        <title>Películas de Segurança Automotiva | INSULFILM™</title>
        <meta name="description" content="Películas de proteção, antivandalismo e defesa automotiva INSULFILM™. Proteção contra estilhaços, vandalismo e invasões criminosas." />
        <link rel="canonical" href="https://www.insulfilm.com.br/automotivo/seguranca" />
      </Helmet>

      <main>
        {/* ═══ HERO ═══ */}
        <section ref={heroRef} className="relative min-h-[70vh] flex flex-col items-center justify-center bg-carbon-gradient overflow-hidden">
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: textureY }} />
          <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                  <Shield className="w-3.5 h-3.5 mr-2" />Proteção e Segurança
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
                Proteja-se das incertezas no caminho. Dirija confiante de chegar lá com proteção e segurança de verdade.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-primary-foreground/60 font-light max-w-3xl mx-auto leading-relaxed">
                Conheça as películas automotivas de Proteção, Antivandalismo e Defesa originais INSULFILM™. Desenvolvidas com engenharia de ponta e polímeros sintéticos de alta performance elástica, nossas películas oferecem muito mais resistência para você rodar com tranquilidade e segurança total do seu carro, uma fortaleza, repelindo os vidros contra acidentes e ataques criminosos.
              </motion.p>
              <motion.div variants={scaleIn} className="flex justify-center mt-8">
                <div className="separator-accent" />
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ═══ FAIXA DE DESTAQUE ═══ */}
        <section className="bg-background">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container mx-auto px-4 py-10 text-center">
            <p className="text-muted-foreground text-sm md:text-base font-light mb-6">
              Não altera a originalidade do veículo. Garantia de montadora preservada.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="bg-accent py-5">
            <p className="text-center text-accent-foreground font-extrabold uppercase tracking-widest text-sm md:text-base px-4">
              Películas Fortes. Feitas para resistir. Rigorosamente testadas para não falhar.
            </p>
          </motion.div>
        </section>

        {/* ═══ NAVEGAÇÃO / ANCORAGEM ═══ */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-foreground uppercase tracking-wider">
                Encontre o seu INSULFILM™ ideal
              </motion.h3>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {navCards.map((c) => (
                <motion.a key={c.title} href={c.anchor} variants={fadeInUp}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card rounded-2xl h-full hover:border-accent/30 transition-colors text-center">
                      <CardContent className="p-8 flex flex-col items-center gap-4">
                        <c.icon className="w-10 h-10 text-accent" />
                        <h4 className="text-lg font-extrabold text-foreground">{c.title}</h4>
                        <p className="text-sm text-muted-foreground font-light">{c.desc}</p>
                        <span className="text-accent font-bold text-sm flex items-center gap-1 mt-2">
                          Saiba Mais <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="flex justify-center mt-16">
              <div className="separator-accent" />
            </motion.div>
          </div>
        </section>

        {/* ═══ PELÍCULAS DE PROTEÇÃO ═══ */}
        <section id="protecao" className="py-24 bg-carbon-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-texture opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground">
                Películas de Proteção
              </motion.h2>
              <motion.div variants={scaleIn} className="flex justify-center mt-6">
                <div className="separator-accent" />
              </motion.div>
            </motion.div>
            {protecaoProducts.map((p, i) => (
              <ProductRow key={p.path} product={p} index={i} reversed={i % 2 !== 0} />
            ))}
          </div>
        </section>

        {/* ═══ PELÍCULAS DE DEFESA ═══ */}
        <section id="defesa" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground">
                Películas de Defesa
              </motion.h2>
              <motion.div variants={scaleIn} className="flex justify-center mt-6">
                <div className="separator-accent" />
              </motion.div>
            </motion.div>
            {defesaProducts.map((p, i) => (
              <ProductRow key={p.path} product={p} index={i} reversed={i % 2 !== 0} />
            ))}
          </div>
        </section>

        {/* ═══ CTA FINAL ═══ */}
        <section className="py-24 bg-carbon-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-texture opacity-30" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
                Exija as películas originais INSULFILM™
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light mb-4">
                Proteção e Segurança de verdade para você e sua família.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-extrabold text-accent mb-10">
                Elimine as vantagens do marginal.
              </motion.p>
              <motion.div variants={scaleIn} className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base px-8 py-6 rounded-xl">
                  <Link to="/lojas"><MapPin className="w-5 h-5" />Lojas Oficiais</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base px-8 py-6 rounded-xl">
                  <Link to="/parceiro"><Users className="w-5 h-5" />Seja um Aplicador</Link>
                </Button>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as películas de segurança automotiva INSULFILM™.')}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AutomotivoHubSeguranca;
