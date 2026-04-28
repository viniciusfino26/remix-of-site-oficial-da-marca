// src/components/PDPFaqSection.tsx
// FAQ visível espelhando o FAQPage Schema. Conteúdo no idioma ativo do usuário.

import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getPDPFaqs, type Lang } from '@/lib/pdpFAQs';

interface PDPFaqSectionProps {
  slug: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const TITLES: Record<Lang, { badge: string; heading: string }> = {
  pt: { badge: 'Perguntas Frequentes', heading: 'Dúvidas frequentes' },
  en: { badge: 'Frequently Asked Questions', heading: 'Common questions' },
  es: { badge: 'Preguntas Frecuentes', heading: 'Dudas frecuentes' },
};

const resolveLang = (raw: string | undefined): Lang => {
  const code = (raw || 'pt').toLowerCase().split('-')[0];
  if (code === 'en' || code === 'es' || code === 'pt') return code as Lang;
  return 'pt';
};

const PDPFaqSection = ({ slug }: PDPFaqSectionProps) => {
  const { i18n } = useTranslation();
  const lang = resolveLang(i18n.language);
  const faqs = getPDPFaqs(slug, lang);
  if (!faqs?.length) return null;

  const labels = TITLES[lang];

  return (
    <section
      aria-label={labels.badge}
      className="py-20 bg-background border-t border-border/40"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <HelpCircle className="w-3 h-3 mr-1.5" />
            {labels.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
            {labels.heading}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl border border-border/40 px-5 data-[state=open]:border-accent/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5 text-base md:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed text-base pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default PDPFaqSection;
