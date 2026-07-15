import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export type FaqItem = { question: string; answer: string };

interface PdpFaqProps {
  productName: string;
  items: FaqItem[];
  /** Section background variant. Defaults to light bg. */
  variant?: 'light' | 'dark';
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

const PdpFaq = ({ productName, items, variant = 'light' }: PdpFaqProps) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  };

  const isDark = variant === 'dark';

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <section
        className={`py-24 overflow-hidden relative ${
          isDark ? 'bg-carbon-gradient' : 'bg-muted/30'
        }`}
        aria-labelledby="pdp-faq-heading"
      >
        {isDark && <div className="absolute inset-0 bg-diagonal-texture" />}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <p
                className={`text-xs uppercase tracking-widest font-bold mb-3 text-accent`}
              >
                ▪ Perguntas Frequentes
              </p>
              <h2
                id="pdp-faq-heading"
                className={`text-3xl md:text-4xl font-extrabold ${
                  isDark ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                Dúvidas sobre a {productName}
              </h2>
              <div className="separator-accent mx-auto mt-6" />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {items.map((it, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className={`glass-card rounded-2xl border-0 px-5 ${
                      isDark ? '' : ''
                    }`}
                  >
                    <AccordionTrigger
                      className={`text-left hover:no-underline py-5 gap-4 ${
                        isDark ? 'text-primary-foreground' : 'text-foreground'
                      }`}
                    >
                      <span className="flex items-start gap-3 font-bold text-base md:text-lg leading-snug">
                        <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        {it.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pb-5 pl-8 pr-2 font-light leading-relaxed text-base ${
                        isDark
                          ? 'text-primary-foreground/70'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {it.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PdpFaq;
