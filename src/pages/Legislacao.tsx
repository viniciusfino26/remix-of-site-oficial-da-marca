import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, AlertTriangle, HelpCircle, Fingerprint, FileText, Car } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ParallaxBreak from '@/components/ParallaxBreak';
import legislacaoCarro from '@/assets/legislacao-carro-transparencias.png';

/* ── Animações ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

/* ── Regras por área do veículo ── */
const vehicleAreas = [
  {
    icon: Car,
    area: 'Para-brisa',
    rule: 'Mínimo 70% de transmitância luminosa',
    detail: 'Área indispensável à dirigibilidade. Não admite redução abaixo de 70%.',
    status: 'restricted',
  },
  {
    icon: Car,
    area: 'Vidros laterais dianteiros',
    rule: 'Mínimo 70% de transmitância luminosa',
    detail: 'Área indispensável à dirigibilidade. Não admite redução abaixo de 70%.',
    status: 'restricted',
  },
  {
    icon: Car,
    area: 'Vidros laterais traseiros',
    rule: 'Admite transmitância inferior a 70%',
    detail: 'Desde que o veículo possua espelhos retrovisores externos em ambos os lados.',
    status: 'allowed',
  },
  {
    icon: Car,
    area: 'Vidro traseiro',
    rule: 'Admite transmitância inferior a 70%',
    detail: 'Desde que o veículo possua espelhos retrovisores externos em ambos os lados.',
    status: 'allowed',
  },
];

/* ── Pontos de atenção ── */
const attentionPoints = [
  {
    icon: AlertTriangle,
    text: 'Películas refletivas são vedadas em todas as áreas envidraçadas do veículo.',
  },
  {
    icon: AlertTriangle,
    text: 'A manutenção de películas com bolhas na área crítica de visão do condutor é vedada.',
  },
  {
    icon: AlertTriangle,
    text: 'O percentual comercial do produto, isoladamente, não garante conformidade legal.',
  },
  {
    icon: AlertTriangle,
    text: 'O descumprimento pode ensejar infração grave: multa, 5 pontos na CNH e retenção do veículo (art. 230, XVI, CTB).',
  },
];

/* ── FAQ ── */
const faqItems = [
  {
    q: 'O que mudou com a Resolução CONTRAN nº 989/2022?',
    a: 'A Resolução nº 989/2022 alterou a Resolução nº 960/2022. A principal mudança foi a nova redação sobre os vidros que não interferem nas áreas envidraçadas indispensáveis à dirigibilidade, permitindo transmitância luminosa inferior a 70%, desde que o veículo possua espelhos retrovisores externos em ambos os lados.',
  },
  {
    q: 'Quais vidros continuam sujeitos ao mínimo de 70%?',
    a: 'O para-brisa e os vidros laterais dianteiros continuam sujeitos à transmitância luminosa mínima de 70%, por serem áreas indispensáveis à dirigibilidade.',
  },
  {
    q: 'Vidros laterais traseiros e vidro traseiro estão "sem restrição"?',
    a: 'Essa não é a forma mais precisa de interpretar a norma. A regulamentação admite transmitância luminosa inferior a 70% para os vidros que não interferem nas áreas indispensáveis à dirigibilidade, desde que o veículo possua espelhos retrovisores externos em ambos os lados.',
  },
  {
    q: 'O percentual comercial da película garante regularidade?',
    a: 'Não. O percentual comercial do produto, isoladamente, não garante conformidade legal. A análise considera o conjunto vidro-película e os critérios oficiais de fiscalização.',
  },
  {
    q: 'Películas refletivas são permitidas?',
    a: 'Não. A regulamentação veda a aplicação de películas refletivas nas áreas envidraçadas do veículo.',
  },
  {
    q: 'Bolhas na película podem gerar autuação?',
    a: 'Sim. A manutenção de películas com bolhas na área crítica de visão do condutor e nas áreas indispensáveis à dirigibilidade é vedada pela regulamentação.',
  },
  {
    q: 'O Selo Holográfico INSULFILM™ comprova, sozinho, a regularidade legal?',
    a: 'Não. O Selo Holográfico INSULFILM™ tem finalidade de autenticação marcária. A conformidade legal depende da aplicação realizada, do vidro original, da área do veículo e da aferição pelos critérios previstos na legislação.',
  },
  {
    q: 'Chancela e Selo Holográfico INSULFILM™ são a mesma coisa?',
    a: 'Não. A chancela é uma exigência legal de identificação em determinadas áreas do veículo. O Selo Holográfico INSULFILM™ é um elemento de autenticação da origem da marca. São elementos distintos, com funções diferentes.',
  },
  {
    q: 'Veículos blindados seguem a mesma regra?',
    a: 'A regulamentação prevê disciplina específica para veículos blindados, com referência própria à ABNT NBR 16218. Nesses casos, a avaliação deve ser feita de forma específica.',
  },
  {
    q: 'INSULFILM™ é produto ou marca?',
    a: 'INSULFILM™ é marca registrada. Quando o assunto é a categoria de mercado, o termo correto é películas automotivas.',
  },
];

/* ── Componente principal ── */
const Legislacao = () => (
  <>
    <Helmet>
      <title>Legislação sobre Películas Automotivas | INSULFILM™</title>
      <meta
        name="description"
        content="Entenda a Resolução CONTRAN nº 989/2022 e as regras de transmitância luminosa para películas automotivas no Brasil. A INSULFILM™ informa."
      />
      <link rel="canonical" href="https://www.insulfilm.com.br/legislacao" />
    </Helmet>

    <main>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[60vh] flex items-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <Scale className="w-3.5 h-3.5 mr-2" />
                Resolução CONTRAN nº 989/2022
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]"
            >
              Legislação sobre<br />Películas Automotivas
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto"
            >
              A INSULFILM™ informa. Transparência, conformidade e responsabilidade no uso das películas.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-6">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ═══ INTRO INSTITUCIONAL ═══ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
              <FileText className="w-6 h-6 text-accent shrink-0" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">A INSULFILM™ informa</h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed text-base md:text-lg">
              As transparências comerciais das películas automotivas podem variar entre 5%, 10%, 20%, 35%, 50%, 70%, 75% e até 100%. No entanto, a avaliação legal não deve ser feita apenas pelo percentual comercial do produto. A regulamentação brasileira considera a <strong className="text-foreground">transmitância luminosa do conjunto vidro-película</strong> e a área do veículo em que a película é aplicada.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Com a entrada em vigor da <strong className="text-foreground">Resolução CONTRAN nº 989/2022</strong>, que alterou a Resolução CONTRAN nº 960/2022, permanece exigida transmitância luminosa mínima de <strong className="text-foreground">70%</strong> no para-brisa e nos vidros laterais dianteiros, por se tratarem de áreas envidraçadas indispensáveis à dirigibilidade.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Para os vidros que não interferem nas áreas envidraçadas indispensáveis à dirigibilidade, a regulamentação admite transmitância luminosa inferior a 70%, desde que o veículo possua espelhos retrovisores externos em ambos os lados.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ REGRAS POR ÁREA DO VEÍCULO ═══ */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Regras por Área do Veículo
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-xl mx-auto">
              A conformidade legal é avaliada por área de aplicação, não apenas pelo percentual da película.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {vehicleAreas.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className={`glass-card rounded-2xl h-full border-l-4 ${item.status === 'restricted' ? 'border-l-destructive/70' : 'border-l-accent'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.status === 'restricted' ? 'bg-destructive/10' : 'bg-accent/10'}`}>
                        <item.icon className={`w-5 h-5 ${item.status === 'restricted' ? 'text-destructive' : 'text-accent'}`} />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-foreground mb-1">{item.area}</h3>
                        <p className={`text-sm font-bold mb-1 ${item.status === 'restricted' ? 'text-destructive' : 'text-accent'}`}>
                          {item.rule}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ ÁREA DE FOTO — TRANSPARÊNCIAS PERMITIDAS ═══ */}
      <section className="py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Texto */}
            <motion.div variants={fadeInLeft} className="flex flex-col justify-center">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5 w-fit mb-5">
                Transparências Permitidas
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                Veja as possibilidades dentro da legislação
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A regulamentação vigente permite uma ampla gama de opções para vidros traseiros e laterais traseiros. Películas com diferentes níveis de transmitância podem ser aplicadas nessas áreas, oferecendo privacidade, conforto térmico e proteção UV — dentro dos limites legais.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nos vidros dianteiros e para-brisa, a transmitância mínima de 70% garante a visibilidade necessária para a segurança no trânsito. A INSULFILM™ possui opções específicas para cada área do veículo.
              </p>
              <div className="flex flex-wrap gap-3">
                {['5%', '10%', '20%', '35%', '50%', '70%', '75%', '100%'].map((pct) => (
                  <span
                    key={pct}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border border-border bg-secondary text-foreground"
                  >
                    {pct}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                * Percentuais comerciais disponíveis. A conformidade legal depende do conjunto vidro-película e da área de aplicação.
              </p>
            </motion.div>

            {/* Foto */}
            <motion.div variants={fadeInRight}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-secondary">
                <img
                  src={legislacaoCarro}
                  alt="Demonstração das transparências permitidas em películas automotivas INSULFILM™"
                  className="w-full h-full object-cover"
                />
                {/* Overlay com legenda */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <p className="text-white/60 text-xs">Imagem meramente ilustrativa</p>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PARALLAX — STATS ═══ */}
      <ParallaxBreak
        minHeight="28vh"
        stats={[
          { value: '70%', label: 'Transmitância mínima — dianteiros' },
          { value: 'Res. 989', label: 'CONTRAN 2022' },
          { value: 'Art. 230', label: 'Infração grave — CTB' },
        ]}
      />

      {/* ═══ PONTOS DE ATENÇÃO ═══ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-3">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
              Pontos de Atenção
            </motion.h2>
            <motion.div variants={scaleIn} className="flex justify-center mt-3">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {attentionPoints.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="glass-card rounded-xl">
                  <CardContent className="p-5 flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <p className="text-muted-foreground font-light leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ ESCLARECIMENTO ═══ */}
      <section className="py-20 bg-carbon-gradient overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInLeft}>
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck className="w-7 h-7 text-accent" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground">Esclarecimento</h2>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed mb-4">
                Muitos consumidores procuram películas automotivas em busca de privacidade, conforto e proteção no uso diário do veículo. Ainda assim, a INSULFILM™ entende que essa escolha deve conciliar segurança viária, visibilidade e conformidade com a legislação brasileira.
              </p>
              <p className="text-primary-foreground/70 leading-relaxed">
                Por esse motivo, a INSULFILM™ não trata regularidade como promessa automática nem valida aplicações genéricas sem a devida análise do veículo, do vidro original, da película escolhida e da área de aplicação.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              {/* Selo Holográfico */}
              <Card className="glass-card rounded-2xl border border-primary-foreground/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Fingerprint className="w-6 h-6 text-accent" />
                    <h3 className="font-extrabold text-primary-foreground">Selo Holográfico INSULFILM™</h3>
                  </div>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">
                    O Selo Holográfico INSULFILM™ tem função de <strong className="text-primary-foreground/80">autenticação marcária</strong>. Ele auxilia na identificação da origem da marca e reforça a distinção entre o produto original e usos indevidos da marca no mercado.
                  </p>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed mt-2">
                    O selo holográfico <strong className="text-primary-foreground/80">não substitui</strong> a avaliação legal do conjunto vidro-película nem os critérios oficiais de fiscalização.
                  </p>
                </CardContent>
              </Card>

              {/* Chancela */}
              <Card className="glass-card rounded-2xl border border-primary-foreground/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-6 h-6 text-accent" />
                    <h3 className="font-extrabold text-primary-foreground">Chancela e Identificação Legal</h3>
                  </div>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">
                    A chancela prevista na regulamentação tem finalidade legal de identificação do conjunto aplicado. Ela <strong className="text-primary-foreground/80">não se confunde</strong> com o Selo Holográfico INSULFILM™ — são elementos distintos, com funções diferentes.
                  </p>
                  <p className="text-sm text-accent font-bold mt-3">
                    Sem o Selo Holográfico INSULFILM™, não é INSULFILM™.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FAQ — SEGREGADO ═══ */}
      <section className="py-24 bg-background" id="faq-legislacao">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                <HelpCircle className="w-3.5 h-3.5 mr-2" />
                Perguntas Frequentes
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              FAQ — Resolução CONTRAN nº 989/2022
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-xl mx-auto">
              Dúvidas sobre a legislação vigente respondidas com base na norma oficial.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mt-4">
              <div className="separator-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-2">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="glass-card rounded-xl border-none px-4"
                  >
                    <AccordionTrigger className="text-left text-foreground font-semibold hover:text-accent">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA CONTATO ═══ */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent-foreground font-extrabold text-base md:text-lg uppercase tracking-wider">
            Dúvidas sobre a legislação ou sobre os produtos INSULFILM™?
          </p>
          <p className="text-accent-foreground/80 text-sm mt-1">
            Entre em contato:{' '}
            <a href="mailto:insulfilm@insulfilm.com.br" className="underline hover:no-underline font-bold">
              insulfilm@insulfilm.com.br
            </a>
          </p>
        </div>
      </section>
    </main>
  </>
);

export default Legislacao;
