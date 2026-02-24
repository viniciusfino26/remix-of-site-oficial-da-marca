import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
      { q: 'A película escurece muito o vidro?', a: 'Cada linha possui diferentes níveis de transmissão de luz visível (VLT). Oferecemos opções desde tonalidades leves até escurecimento máximo permitido pela legislação CONTRAN.' },
      { q: 'A película pode ser aplicada no para-brisa?', a: 'Sim, temos a linha PB (Para-brisa) com quatro opções: PB Matrix, PB Skye, PB Design e PB PhantomGlass — todas dentro dos limites permitidos pela legislação.' },
      { q: 'Quanto tempo dura a película?', a: 'A durabilidade varia conforme a linha. As linhas LT Polariz e LT Matrix possuem garantia vitalícia. O Phantom® PPF tem garantia de 10 anos. Todas as películas originais são projetadas para durar anos sem descolorir.' },
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
      { q: 'Como aciono a garantia?', a: 'Entre em contato com a loja onde fez a aplicação ou com nossa Central de Atendimento via WhatsApp. É necessário apresentar a nota fiscal e o certificado de autenticidade.' },
      { q: 'O que a garantia cobre?', a: 'A garantia cobre defeitos de fabricação como descoloração, bolhas, descascamento e delaminação. Não cobre danos causados por mau uso ou acidentes.' },
    ],
  },
  {
    title: 'Geral',
    faqs: [
      { q: 'Onde encontro uma loja INSULFILM™?', a: 'Acesse nossa página "Onde Encontrar" para localizar lojas oficiais, aplicadores autorizados e concessionárias credenciadas em São Paulo.' },
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
