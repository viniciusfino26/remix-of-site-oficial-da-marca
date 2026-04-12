import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, ExternalLink, MapPin, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const MarcaSobre = () => (
  <>
    <Helmet>
      <title>Sobre a INSULFILM™ | Marca Registrada Brasileira desde 1986</title>
      <meta name="description" content="INSULFILM™ é marca registrada brasileira com atuação consolidada desde 1986 em películas técnicas para vidro. Conheça nossa trajetória, tecnologia e padrão." />
      <link rel="canonical" href="https://insulfilm.com.br/marca/sobre" />
      <meta property="og:title" content="Sobre a INSULFILM™ | Marca Registrada Brasileira" />
      <meta property="og:description" content="Conheça a INSULFILM™ — marca registrada brasileira, referência em películas técnicas para vidro desde 1986." />
      <meta property="og:url" content="https://insulfilm.com.br/marca/sobre" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "INSULFILM™",
        "url": "https://insulfilm.com.br",
        "foundingDate": "1986",
        "description": "Marca registrada brasileira, referência em películas técnicas para vidro desde 1986."
      })}</script>
    </Helmet>

    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.9)] to-[hsl(var(--primary)/0.8)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Shield className="w-4 h-4" /> Marca Registrada
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              Sobre a INSULFILM™
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70">
              Marca registrada brasileira com atuação consolidada desde 1986
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Trademark disclaimer */}
      <section className="py-6 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            O termo "insulfilm" é utilizado popularmente para se referir a películas para vidro. INSULFILM™ é marca registrada, com titularidade exclusiva e referência no segmento desde 1986. O uso da marca por terceiros não é autorizado.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto space-y-8">
            <motion.div variants={fadeInUp} className="prose prose-lg max-w-none">
              <p className="text-foreground/80 text-lg leading-relaxed">
                INSULFILM™ é uma marca registrada brasileira, com atuação consolidada desde 1986 no segmento de películas técnicas para vidro, aplicadas em veículos, edificações e diferentes superfícies envidraçadas.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                A INSULFILM construiu sua trajetória com base em tecnologia aplicada, aplicação qualificada e padronização de resultados, associando sua atuação à proteção de pessoas em ambientes com vidro.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                A marca representa um sistema que integra seleção técnica de soluções, execução profissional e resultado consistente no uso real.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                No mercado, o termo insulfilm, assim como variações como insulfilme, insulfilmes, insulfilms e grafias semelhantes, é utilizado de forma popular para se referir a películas para vidro.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Esse uso não possui natureza técnica nem jurídica e não representa titularidade ou autorização de uso da marca.
              </p>
              <p className="text-foreground/90 text-lg font-bold">INSULFILM™ é marca registrada.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Distinction block */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-foreground mb-8">
              Distinção e Proteção
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                O termo insulfilm, assim como variações como insulfilme, insulfilmes e grafias semelhantes, é utilizado de forma popular no Brasil por consumidores para se referir a películas para vidro.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Esse uso decorre de fenômeno linguístico e social, não possuindo natureza técnica nem jurídica.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                INSULFILM é marca registrada, de natureza nominativa e figurativa, devidamente protegida pela legislação de propriedade industrial.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                A utilização do termo no mercado não representa titularidade, não implica autorização e não estabelece vínculo com a marca.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                A utilização do sinal, ou de variações suscetíveis de associação com a marca, por agentes econômicos — tais como fabricantes, importadores, distribuidores, varejistas, aplicadores, intermediadores digitais, plataformas ou quaisquer terceiros que atuem com finalidade econômica — deve ser analisada à luz da legislação aplicável, especialmente quando apta a gerar confusão ou associação indevida quanto à origem dos produtos ou serviços ou quanto à sua vinculação à marca INSULFILM.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Esse contexto não se confunde com o uso popular do termo por consumidores finais.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Official channels */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-foreground mb-8">
              Canais Oficiais da INSULFILM
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-foreground/70 mb-8">
              Para garantir informação correta e consistente, a INSULFILM mantém presença em seus canais oficiais:
            </motion.p>
            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {[
                { icon: ExternalLink, label: 'Site oficial', value: 'www.insulfilm.com', href: 'https://www.insulfilm.com' },
                { icon: Instagram, label: 'Instagram', value: '@insulfilm.oficial', href: 'https://instagram.com/insulfilm.oficial' },
                { icon: Youtube, label: 'YouTube', value: 'insulfilmoficial', href: 'https://youtube.com/insulfilmoficial' },
                { icon: Linkedin, label: 'LinkedIn', value: 'INSULFILM', href: 'https://linkedin.com/company/insulfilm' },
                { icon: Twitter, label: 'X (Twitter)', value: 'Canal oficial', href: '#' },
              ].map((ch) => (
                <a key={ch.label} href={ch.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors">
                  <ch.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{ch.label}</p>
                    <p className="text-xs text-muted-foreground">{ch.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" /> Lojas oficiais no Google Business Profile
              </h3>
              <div className="space-y-2">
                {[
                  { name: 'INSULFILM Automotivo — Loja Santana', href: 'https://materiais.insulfilm.com.br/insulfilm-automotivo-loja-santana' },
                  { name: 'INSULFILM Automotivo — Loja Moema', href: 'https://materiais.insulfilm.com.br/insulfilm-automotivo-loja-moema' },
                  { name: 'INSULFILM Automotivo — Loja Pacaembu', href: 'https://materiais.insulfilm.com.br/insulfilm-automotivo-loja-pacaembu' },
                ].map((store) => (
                  <a key={store.name} href={store.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-accent hover:underline">
                    <ExternalLink className="w-3 h-3" /> {store.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-muted border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
            O termo insulfilm é utilizado de forma popular para se referir a películas para vidro. <strong>INSULFILM é marca registrada.</strong> Esse uso não implica autorização, vínculo ou titularidade da marca.
          </p>
        </div>
      </section>
    </main>
  </>
);

export default MarcaSobre;
