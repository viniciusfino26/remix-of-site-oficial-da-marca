import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, Swords, MessageCircle, Play, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import autoSeguranca from '@/assets/auto-seguranca.png';
import homeSeguranca from '@/assets/home-seguranca.png';

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
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const WHATSAPP_NUMBER = '5511976136911';

const AutomotivoHubSeguranca = () => {
  return (
    <>
      <Helmet>
        <title>Películas de Segurança Automotiva | INSULFILM™</title>
        <meta name="description" content="Películas de proteção, antivandalismo e defesa automotiva INSULFILM™. Proteção contra estilhaços, vandalismo e invasões criminosas." />
        <link rel="canonical" href="https://www.insulfilm.com.br/automotivo/seguranca" />
      </Helmet>

      <main>

        {/* ═══ HERO — foto + bloco laranja vazando ═══ */}
        <section className="relative w-full bg-gray-900 overflow-x-hidden">
          <img
            src={autoSeguranca}
            alt="Películas de proteção e segurança automotiva INSULFILM™"
            className="block w-full h-[200px] md:h-[240px] object-cover"
          />
          <span className="absolute right-3 bottom-2 text-white/60 text-[10px] italic" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
            Imagem meramente ilustrativa
          </span>
        </section>

        {/* ═══ INTRO TEXTO ═══ */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h1 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-primary mb-4 leading-tight">
                Proteja-se das incertezas no caminho. Dirija confiante de chegar lá com proteção e segurança de verdade.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                Conheça as películas de Proteção, Antivandalismo e Segurança Superior originais <strong>INSULFILM™</strong>. Desenvolvidas com engenharia de ponta e polímeros sintéticos de alto desempenho mecânico, nossas películas de defesa oferecem altíssima resistência. Faça do seu carro uma fortaleza, fortificando os vidros contra acidentes e ataques criminosos.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Não aplicável a furtos. Não interfere em sinais de celulares e demais eletrônicos. Não altera a originalidade do veículo, não interferindo na garantia da montadora.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ═══ VÍDEO 1 — Quebra de vidro comum ═══ */}
        <section className="bg-primary py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-accent font-extrabold text-center text-base md:text-lg mb-6 leading-snug"
            >
              Veja como é fácil a quebra do vidro comum com a cerâmica da vela do carro com uma película solar comum aplicada.
            </motion.p>
            {/* Espaço reservado para vídeo 16:9 */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="relative w-full bg-black/40 border border-white/10 rounded-lg flex items-center justify-center"
              style={{ aspectRatio: '16/9' }}
            >
              <div className="text-center text-white/50">
                <Play className="w-12 h-12 mx-auto mb-3 text-white/30" />
                <p className="text-sm font-semibold uppercase tracking-widest">ESPAÇO PARA O VÍDEO 16:9</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ ELIMINE AS VANTAGENS DO MARGINAL ═══ */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4 text-center md:text-left">
                Elimine as vantagens do marginal
              </motion.h2>
            </motion.div>

            {/* Grid: vídeo à esquerda + features à direita */}
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
              {/* Vídeo 16:9 */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
              >
                <div
                  className="relative w-full bg-black/40 border border-white/10 rounded-lg flex items-center justify-center"
                  style={{ aspectRatio: '16/9' }}
                >
                  <div className="text-center text-white/50">
                    <Play className="w-10 h-10 mx-auto mb-2 text-white/30" />
                    <p className="text-xs font-semibold uppercase tracking-widest">Espaço para vídeo 16:9<br/>divide a tela entre vídeo e<br/>escrita para melhorar a responsividade</p>
                  </div>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                className="space-y-6"
              >
                {[
                  { title: 'Efeito Surpresa', desc: 'Obstáculo inesperado que força o criminoso a recuar diante da resistência.' },
                  { title: 'Agilidade', desc: 'Proteção imediata desde o primeiro impacto, sem necessidade de ação do motorista.' },
                  { title: 'Discrição', desc: 'Completamente aparente ao olhar. As películas aparecem no bolso do marginal, não nos vidros do seu carro.' },
                ].map((f) => (
                  <motion.div key={f.title} variants={fadeInRight} className="border-l-2 border-accent pl-4">
                    <p className="text-primary-foreground font-extrabold text-base">{f.title}</p>
                    <p className="text-primary-foreground/60 text-sm mt-1 leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ FAIXA LARANJA DUPLA ═══ */}
        <section className="bg-accent py-5">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white font-extrabold uppercase tracking-widest text-sm md:text-base">
              Películas Fortes. Feitas para resistir.
            </p>
            <p className="text-white font-extrabold uppercase tracking-widest text-sm md:text-base mt-1">
              Rigorosamente testadas para não falhar.
            </p>
          </div>
        </section>

        {/* ═══ COMPROMISSO PÚBLICO ═══ */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
              <motion.h3 variants={fadeInUp} className="text-primary-foreground font-extrabold text-base md:text-lg uppercase tracking-widest text-center">
                COMPROMISSO PÚBLICO
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-primary-foreground/70 text-sm leading-relaxed">
                As informações sobre desempenho de resistência apresentadas nesta página resultam da combinação entre vidro temperado automotivo padrão com 3,2 milímetros de espessura e película aplicada pelo lado interno, obtidas a partir de sucessivos testes controlados, com impactos reais não manipulados - com armas brancas, para invasão ao carro pelo vídeo.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-primary-foreground/50 text-xs italic">
                *Resultados anteriores obtidos através do laboratório de serviço da INSULFILM™ de acordo com a metodologia aplicada no vídeo.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-primary-foreground/70 text-sm leading-relaxed">
                Honramos sua confiança, não produzimos conteúdos que possam super estimar sua expectativa de proteção e segurança além da realidade prática.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-primary-foreground/70 text-sm leading-relaxed">
                <strong className="text-primary-foreground">AVISO:</strong> o vídeo deve estar completamente fechado. Variações de desempenho podem ocorrer em vidros cujas portas não possuam sustentação metálica na totalidade de suas bordas além se as guarnições originais que os sustentam encontram-se fadigadas no momento da quebra, consulte um especialista para maiores esclarecimentos sobre seu veículo.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ═══ ENCONTRE SUA PELÍCULA — SELETOR ═══ */}
        <section className="bg-primary py-12 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-primary-foreground/60 text-xs uppercase tracking-widest text-center mb-8"
            >
              ENCONTRE A SUA PELÍCULA IDEAL DE PROTEÇÃO E SEGURANÇA
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Proteção e Antivandalismo */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
                className="bg-[#1a3a6e]/60 md:bg-[#1a3a6e]/70 border border-white/10 rounded-lg p-6"
              >
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <h3 className="text-primary-foreground font-extrabold text-base">Proteção e Antivandalismo</h3>
                </div>
                <p className="text-primary-foreground/60 text-sm mb-5 leading-relaxed">
                  Anti-estilhaços projetados e proteção contra atos de vandalismo.
                </p>
                <p className="text-primary-foreground/40 text-xs uppercase tracking-widest mb-3">Explore nossas películas</p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/automotivo/seguranca/skinsafe8k">
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-white font-bold text-xs rounded-full px-4">
                      SkinSafe8K
                    </Button>
                  </Link>
                  <Link to="/automotivo/seguranca/antivandalismo13k">
                    <Button size="sm" variant="outline" className="border-white/20 text-primary-foreground hover:bg-white/10 font-bold text-xs rounded-full px-4">
                      Antivandalismo13K
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Segurança Superior */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
                className="bg-[#1a3a6e]/60 md:bg-[#1a3a6e]/70 border border-white/10 rounded-lg p-6"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Swords className="w-5 h-5 text-accent" />
                  <h3 className="text-primary-foreground font-extrabold text-base">Segurança Superior</h3>
                </div>
                <p className="text-primary-foreground/60 text-sm mb-5 leading-relaxed">
                  Verdadeiros escudos muito mais resistentes a tentativas de invasão.
                </p>
                <p className="text-primary-foreground/40 text-xs uppercase tracking-widest mb-3">Explore nossas películas</p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/automotivo/seguranca/skudoguard">
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-white font-bold text-xs rounded-full px-4">
                      SkudoGuard
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ PELÍCULAS DE PROTEÇÃO ═══ */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12"
            >
              Películas de Proteção
            </motion.h2>

            {/* SkinSafe8K */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid md:grid-cols-2 gap-8 items-center mb-16"
            >
              <motion.div variants={fadeInLeft} className="space-y-3">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">INSULFILM™SkinSafe8K</p>
                <h3 className="text-lg font-extrabold text-primary uppercase tracking-wide">PROTEÇÃO CONTRA ACIDENTES.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Película de proteção contra estilhaços projetados em quebras acidentais. Retém grande parte dos fragmentos do vidro quebrado, evitando lesões na pele e nos olhos geradas por projeção direta contra os ocupantes do veículo.
                </p>
                <Link to="/automotivo/seguranca/skinsafe8k">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold mt-2 rounded-full px-6">
                    Conhecer <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </motion.div>
              {/* Placeholder foto */}
              <motion.div variants={fadeInRight}>
                <div className="w-full rounded-xl bg-muted border border-border flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
                  <p className="text-muted-foreground/50 text-xs uppercase tracking-widest text-center px-4">Espaço para foto do produto</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Antivandalismo13K */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Placeholder foto — lado esquerdo */}
              <motion.div variants={fadeInLeft} className="order-2 md:order-1">
                <div className="w-full rounded-xl bg-muted border border-border flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
                  <p className="text-muted-foreground/50 text-xs uppercase tracking-widest text-center px-4">Espaço para foto do produto</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInRight} className="space-y-3 order-1 md:order-2">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">INSULFILM™Antivandalismo13K</p>
                <h3 className="text-lg font-extrabold text-primary uppercase tracking-wide">PROTEÇÃO CONTRA ATOS DE VANDALISMO.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Película de proteção contra atos de vandalismo e estilhaços projetados em acidentes, tornando mais potente a resistência natural do vidro original. Dificulta o acesso imediato nas primeiras tentativas, forçando o marginal a insistir na abordagem criminosa para invasão ao interior do carro.
                </p>
                <Link to="/automotivo/seguranca/antivandalismo13k">
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-white font-bold mt-2 rounded-full px-6">
                    Conhecer <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══ PELÍCULAS DE DEFESA ═══ */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12"
            >
              Películas de Defesa
            </motion.h2>

            {/* SkudoGuard */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid md:grid-cols-2 gap-8 items-center mb-16"
            >
              <motion.div variants={fadeInLeft} className="space-y-3">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">INSULFILM™SkudoGuard</p>
                <h3 className="text-lg font-extrabold text-primary uppercase tracking-wide">MAIS ANTIVANDALISMO. SEGURANÇA FORTE E EFETIVA.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Película de segurança com resistência superior à tentativa de roubo.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Película premium de forte segurança contra invasão criminosa ao interior do veículo por uso de armas brancas. Protege a pele e os olhos geradas por abordagens criminosas agressivas.
                </p>
                <Link to="/automotivo/seguranca/skudoguard">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold mt-2 rounded-full px-6">
                    Saiba mais <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </motion.div>
              {/* Placeholder foto */}
              <motion.div variants={fadeInRight}>
                <div className="w-full rounded-xl bg-muted border border-border flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
                  <p className="text-muted-foreground/50 text-xs uppercase tracking-widest text-center px-4">Espaço para foto do produto</p>
                </div>
              </motion.div>
            </motion.div>

            {/* SkudoUltra */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Placeholder foto — lado esquerdo */}
              <motion.div variants={fadeInLeft} className="order-2 md:order-1">
                <div className="w-full rounded-xl bg-muted border border-border flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
                  <p className="text-muted-foreground/50 text-xs uppercase tracking-widest text-center px-4">Espaço para foto do produto</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInRight} className="space-y-3 order-1 md:order-2">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">INSULFILM™SkudoUltra</p>
                <h3 className="text-lg font-extrabold text-primary uppercase tracking-wide">EXTREMA SEGURANÇA. BLINDAGEM CONTRA ARMAS BRANCAS.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Película de extrema segurança com máxima resistência à tentativa de roubo.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Película premium de extrema segurança para blindagem dos vidros contra armas brancas pesadas, utilizadas em abordagens criminosas agressivas por invasão ao interior do carro.
                </p>
                <Link to="/automotivo/seguranca/skudoultra">
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-white font-bold mt-2 rounded-full px-6">
                    Saiba mais <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══ CTA FINAL ═══ */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="bg-accent py-6"
        >
          <div className="container mx-auto px-4 text-center">
            <p className="text-white font-extrabold text-base md:text-lg uppercase tracking-wider">
              Exija as películas originais INSULFILM™!
            </p>
            <p className="text-white/80 text-sm mt-1">
              Proteção e Segurança de verdade para você e a sua família.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as películas de segurança automotiva INSULFILM™.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="bg-white hover:bg-white/90 text-accent font-bold rounded-full px-6 gap-2">
                  <MessageCircle className="w-4 h-4" /> Falar com Especialista
                </Button>
              </a>
              <Link to="/lojas">
                <Button size="sm" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold rounded-full px-6 gap-2">
                  <Shield className="w-4 h-4" /> Centros Autorizados
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>

      </main>
    </>
  );
};

export default AutomotivoHubSeguranca;
