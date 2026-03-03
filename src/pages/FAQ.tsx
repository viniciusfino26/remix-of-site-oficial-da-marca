import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ParallaxBreak from '@/components/ParallaxBreak';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const faqCategories = [
  {
    title: 'Automotivo',
    faqs: [
      { q: 'Qual película é indicada para o meu carro?', a: 'A escolha depende da sua necessidade. Para conforto térmico máximo, recomendamos a LT Polariz ou LT Matrix. Para boa performance com custo-benefício, a LT VIP ou LT Eclipse. Para segurança, o Antivandalismo 13K ou SkudoGuard. Para proteção de pintura, o Phantom® PPF.' },
    ],
  },
  {
    title: 'Películas Solares',
    faqs: [
      { q: 'A película escurece muito o vidro?', a: 'Cada linha possui diferentes níveis de transmissão de luz visível (VLT). Oferecemos opções desde tonalidades leves até escurecimento máximo permitido pela legislação CONTRAN.' },
      { q: 'A película pode ser aplicada no para-brisa?', a: 'Sim, temos a linha PB (Para-brisa) com quatro opções: PB Matrix, PB Skye, PB Design e PB PhantomGlass — todas dentro dos limites permitidos pela legislação.' },
      { q: 'Quanto tempo dura a película?', a: 'A durabilidade varia conforme a linha. As linhas LT Polariz e LT Matrix possuem garantia vitalícia. O Phantom® PPF tem garantia de 10 anos. Todas as películas originais são projetadas para durar anos sem descolorir.' },
    ],
  },
  {
    title: 'Películas de Proteção e Segurança Superior',
    faqs: [
      { q: 'O que é uma "película anti-vandalismo" ou "película de segurança"?', a: 'É uma película de proteção concebida para aumentar a resistência natural do vidro, sendo muito importante antes e depois de sua quebra, tornando um determinado ambiente mais seguro às pessoas. A distinção entre "película anti-vandalismo" e "película de segurança", usualmente está atrelada ao desempenho – maior ou menor – de resistência entre as películas.' },
      { q: 'Como escolher entre as opções de películas de proteção e segurança existentes?', a: 'Busque entender e determinar o nível de proteção que deseja. Caso não tenha certeza, busque orientação com um(a) consultor(a) Autorizado INSULFILM™. Teremos prazer em ajudar-lhe no esclarecimento sobre as situações de quebras acidentais ou intencionais, bem como apresentar quais películas podem efetivamente atender-lhe.' },
      { q: 'O desempenho de resistência é o mesmo se o vidro estiver parcialmente aberto?', a: 'Não. Todas as testagens e vídeos de demonstração de resistência são realizados com os vidros fechados. Quando fechado, o vidro com película fica acomodado na estrutura do próprio carro, servindo como ancoragem fundamental em qualquer ação acidental ou intencional contra o vidro. Caso não esteja 100% fechado, o vidro quebrará mais fácil, cederá mais rápido em tentativas de invasão, como também pode diminuir sua capacidade de retenção dos fragmentos do vidro quebrado.' },
      { q: 'Logo após a aplicação, a película apresentará a resistência esperada?', a: 'Não. A película somente apresentará a plenitude de seu desempenho de resistência após 30 dias da aplicação, período necessário para sua secagem total. Reforçamos que se, excepcionalmente, a película apresentar bolhas ou aspectos visuais de umidade, entre em contato com o Autorizado INSULFILM™ responsável pela venda para inspeção.' },
      { q: 'Em quais vidros é possível aplicar estas películas?', a: 'Todos os vidros laterais móveis não colados à estrutura da porta.' },
      { q: 'Qual o tipo e espessura de um vidro automotivo lateral?', a: 'No Brasil, a grande maioria dos veículos são oferecidos com vidros laterais do tipo temperado, com espessura de 1/8" – 3,18mm.' },
      { q: 'A aplicação das películas de proteção e segurança interfere sobre a garantia da montadora?', a: 'Não. O veículo permanecerá 100% original. Por não alterar sua originalidade e não afetar colateralmente o seu funcionamento, o veículo permanece coberto pela garantia da montadora. Qualquer alegação contrária é infundada.' },
      { q: 'Qual o significado de "PS"?', a: 'É a abreviação de Proteção e Segurança. As películas para vidros desta categoria possuem uma denominação genérica, em escala imperial, que qualifica apenas sua espessura. Por isto, os termos "PS4", "PS8", "PS12" e outros similares se tornaram comuns à população. Somente espessura não é sinônimo de resistência, avalie as propriedades físicas mecânicas.' },
      { q: 'A espessura determina o desempenho de resistência da película?', a: 'Não necessariamente. O desempenho da película é efetivamente determinado pela tecnologia no processo de fabricação e seus componentes industriais, resultando diretamente sobre as propriedades físicas mecânicas de resistência. É possível uma película menos espessa, mas com mais tecnologia e qualidade, apresentar uma performance de resistência superior à outra de espessura maior.' },
      { q: 'Quais são os principais índices técnicos de resistência que devo pesquisar?', a: 'Para o uso automotivo, em vidros temperados, são: Força de Punção, Força de Ruptura e Alongamento na Ruptura. Contudo, todos os demais índices também contribuem para uma película mais forte e resistente. Para facilitar sua compreensão, todas as fichas de películas da INSULFILM™ apresentam os dados de desempenho e glossário técnico.' },
      { q: 'Como identificar se os dados técnicos de desempenho são confiáveis?', a: 'Recomendamos a busca por marcas de películas reconhecidas e confiáveis, com histórico de testagem procedente e respostas positivas contra abordagens criminosas ou acidentais. Além disto, verifique quais métodos de teste as películas foram submetidas. Os dados de desempenho veiculados pela INSULFILM™ são baseados em resultados obtidos durante o desenvolvimento do produto, a partir de um histórico de amostras representativas testadas. É compromisso público e primordial da marca para com a sociedade não produzir conteúdos de forma a superestimar a expectativa de proteção que a película pode proporcionar ao usuário.' },
      { q: 'Como identificar se os vídeos de testagem veiculados na internet são reais ou falsos?', a: 'Reforçamos a recomendação pela procura por marcas de películas reconhecidas e confiáveis. Além disto, duvide de vídeos em que no momento de quebra do vidro por um ato agressivo/criminoso, não existam estilhaços projetados para o lado externo — é quase certo que uma película foi aplicada externamente. Bem como, se o tempo de duração do vídeo for demasiadamente longo, provavelmente o peso do impacto está sendo manipulado.' },
      { q: 'O tempo de garantia do produto interfere sobre a performance de resistência da película?', a: 'Sim. Durante o período de cobertura da garantia é esperado que a película apresente estabilidade técnica, principalmente sobre a aderência de sua camada auto-adesiva. Caso passe a apresentar um aspecto visual leitoso ou turvo, diferente da aparência natural pós-secagem inicial (30 dias), pode ser indício de perda de desempenho. Importante: garantia por período superior ao efetivamente amparado pela qualidade de fabricação pode afetar sensivelmente o desempenho de resistência quando você precisar. Procure sempre por uma marca confiável e um prestador de serviço com boa reputação.' },
      { q: 'Qual a diferença entre os crimes de vandalismo e roubo?', a: 'O crime de vandalismo é caracterizado diante de um ato de depredação/deterioração do patrimônio, ou seja, não há subtração de bens. Já o crime de roubo é qualificado diante da subtração de um bem, mediante grave ameaça ou violência à pessoa, reduzindo a possibilidade de resistência ao ato pela vítima.' },
      { q: 'As películas de proteção e segurança funcionam contra o crime de furto?', a: 'Não. A película pode, eventualmente, retardar o tempo da ação, mas não é possível afirmar que possa impedi-lo. O furto é caracterizado por um ato criminoso em que não há violência contra a vítima, mas sim a subtração de seu bem. Não importa o quão resistente seja a película aplicada, o marginal tendo tempo livre para agir e insistir, conseguirá entrar no carro em algum momento.' },
      { q: 'As películas de proteção e segurança oferecem resistência balística?', a: 'Não. Caso sua expectativa de proteção seja contra armas de fogo, recomendamos a blindagem balística do veículo.' },
      { q: 'As películas de proteção e segurança podem aumentar minha proteção em caso de acidentes?', a: 'Sim. Ao aumentar a resistência do vidro original e reter boa parte dos fragmentos do(s) vidro(s) quebrado(s) na própria película, a laminação diminui a severidade dos possíveis danos e escoriações por diminuir a projeção dos fragmentos. Importante: ferimentos gerados por choque contra o(s) vidro(s) tendem a demorar para cicatrizar em virtude do pó do vidro quebrado que ficará depositado no tecido cutâneo. Ao diminuir a probabilidade do contato direto, estas películas também são um fator importante neste tipo de situação.' },
      { q: 'As películas de proteção e segurança podem afetar o resgate ou dificultar a saída do carro em caso de acidentes?', a: 'Não afetam o resgate. Não há histórico registrado de interferência negativa para evasão do veículo pelas vítimas, ainda que torne o vidro mais resistente e espesso. Caso seja necessário empurrar o vidro para sair, a película protegerá de possíveis escoriações.' },
      { q: 'Como saber se a película de proteção e segurança foi aplicada corretamente?', a: 'A película somente terá sua máxima efetividade e resistência se for aplicada sobre a quase totalidade da superfície do vidro — além da área exposta e visível —, excluindo apenas o espaço destinado à fixação do vidro em sua máquina. É necessário sacá-lo do veículo para receber a película. Aplicações realizadas com o vidro na porta têm sua efetividade e desempenho de resistência sensivelmente reduzidas. É protocolo técnico mandatório aos aplicadores Autorizados INSULFILM™ a aplicação respeitando este critério.' },
      { q: 'Por qual motivo não é possível aplicar estas películas nos vidros frontal (pára-brisa), laterais fixos, traseiro e teto-solar?', a: 'Por serem vidros colados à estrutura do carro, não é possível aplicar sobre a totalidade da superfície, gerando o rompimento da combinação vidro/película ao fim da área de cobertura da película, não agregando resistência efetiva. Além disto, no vidro frontal e traseiro, a espessura da película somada à curvatura do vidro pode gerar distorção óptica, afetando sua dirigibilidade.' },
      { q: 'As películas de proteção e segurança são aplicadas interna ou externamente?', a: 'Para uso automotivo é mandatório a fixação interna.' },
      { q: 'É necessário desmontar os painéis das portas laterais do carro? Há risco de avariar algum componente?', a: 'Há casos em que é necessário desmontar e outros não, isto varia de veículo para veículo. Já sobre o risco de avaria é algo inerente à prestação do serviço, mas incomum e raro. Ainda assim, é responsabilidade do Autorizado INSULFILM™ zelar pelo estado de manutenção/conservação do veículo e reparar adequadamente, ou substituir por um novo componente, qualquer avaria que excepcionalmente possa acontecer.' },
      { q: 'É normal a película apresentar manchas durante o período de secagem após a aplicação?', a: 'Sim. O tempo médio de secagem total da película é de 25 dias, podendo se estender a até 30 dias, dependendo do tempo e nível de exposição solar que o veículo for submetido. Recomendamos, sempre que possível, deixar o veículo exposto ao sol para otimizar a secagem. Após o período de secagem, as manchas devem sumir; caso permaneçam, recomendamos agendar uma inspeção no Autorizado INSULFILM™ responsável pela aplicação.' },
      { q: 'As películas de proteção e segurança são transparentes ou tingidas (escurecidas)?', a: 'Existem as duas opções, sem interferência sobre o desempenho de resistência. A INSULFILM™ oferece esta categoria de películas na opção transparente, assim você escolhe a película solar de sua preferência, não condicionando sua escolha. Outro fator importante é a uniformidade do tom e linha da película solar em todos os vidros laterais e traseiro, o que já não pode ser garantido quando a película de proteção e segurança é tingida com tom específico.' },
      { q: 'Carros que não possuem portas com colunas laterais apresentam o mesmo desempenho de resistência?', a: 'Não. A ancoragem do vidro aplicado com a película na coluna lateral da porta é fundamental para o desempenho de resistência. Este tipo de situação é mais comum em carros conversíveis e/ou coupês. Ainda assim, e justamente pela fragilidade em termos de segurança estrutural do carro para este fim específico, é recomendável a aplicação das películas para dar sustentação maior ao vidro, principalmente em casos acidentais.' },
      { q: 'É possível aplicar películas de proteção e segurança em veículos com vidros blindados contra arma de fogo?', a: 'Não. Há incompatibilidade física com o policarbonato, como também não há ganho em desempenho de resistência.' },
      { q: 'Tenho um veículo blindado usado e os vidros estão delaminando, posso usar as películas de proteção e segurança em substituição ao policarbonato?', a: 'Não é recomendável e a garantia balística ficará comprometida. Aos Autorizados INSULFILM™ não é permitida a oferta deste serviço como substitutivo ao policarbonato; especialmente sob a pretensão de supri-lo para o fim de laminação e proteção balística.' },
    ],
  },
  {
    title: 'Arquitetônico',
    faqs: [
      { q: 'Quais películas são indicadas para residências?', a: 'Oferecemos películas de controle solar, antivandalismo, segurança e decorativas. A escolha depende da necessidade: conforto térmico, privacidade, proteção contra estilhaços ou design.' },
      { q: 'A película reduz a conta de energia?', a: 'Sim! Películas de controle solar podem reduzir em até 30% o consumo de energia com ar-condicionado ao rejeitar até 80% do calor solar.' },
      { q: 'A película danifica o vidro?', a: 'Não. As películas INSULFILM™ são aplicadas com técnicas profissionais e podem ser removidas sem danificar o vidro.' },
    ],
  },
  {
    title: 'Garantia',
    faqs: [
      { q: 'Como sei se a película é original?', a: 'Toda película INSULFILM™ original possui certificado de autenticidade com QR Code verificável. Compre apenas de revendedores autorizados.' },
      { q: 'Como aciono a garantia?', a: 'Entre em contato com o centro autorizado onde fez a aplicação ou com nossa Central de Atendimento via WhatsApp. É necessário apresentar a nota fiscal e o certificado de autenticidade.' },
      { q: 'O que a garantia cobre?', a: 'A garantia cobre defeitos de fabricação como descoloração, bolhas, descascamento e delaminação. Não cobre danos causados por mau uso ou acidentes.' },
    ],
  },
  {
    title: 'Geral',
    faqs: [
      { q: 'Onde encontro um Centro Autorizado INSULFILM™?', a: 'Acesse nossa página "Onde Encontrar" para localizar Centros Autorizados, aplicadores credenciados e concessionárias em São Paulo.' },
      { q: 'Como me torno um parceiro/franqueado?', a: 'Acesse nossa página "Seja Parceiro" ou entre em contato via WhatsApp com nossa equipe comercial para conhecer as opções de parceria.' },
    ],
  },
];

const FAQ = () => (
  <main>
    <section className="relative min-h-[50vh] flex items-center bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-texture" />
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
              <HelpCircle className="w-3.5 h-3.5 mr-2" />
              FAQ
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-[0.95]">
            Perguntas Frequentes
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-2xl mx-auto">
            Encontre respostas rápidas para as dúvidas mais comuns
          </motion.p>
          <motion.div variants={scaleIn} className="flex justify-center mt-6"><div className="separator-accent" /></motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    <ParallaxBreak minHeight="25vh" stats={[
      { value: '5', label: 'Categorias' },
      { value: '25+', label: 'Perguntas' },
    ]} />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        {faqCategories.map((cat, ci) => (
          <motion.div key={ci} className="mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-2xl font-extrabold text-foreground mb-6">{cat.title}</motion.h2>
            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-2">
                {cat.faqs.map((faq, fi) => (
                  <AccordionItem key={fi} value={`${ci}-${fi}`} className="glass-card rounded-xl border-none px-4">
                    <AccordionTrigger className="text-left text-primary-foreground font-semibold hover:text-accent">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-primary-foreground/60 font-light leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  </main>
);

export default FAQ;
