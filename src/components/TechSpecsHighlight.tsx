import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface HighlightStat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface TechRow {
  version: string;
  privacy: string;
  light: string;
  ir: string;
  uv: string;
  energy: string;
}

interface TechSpecsHighlightProps {
  /** Título da seção. Default: "Ficha Técnica" */
  title?: string;
  /** Subtítulo curto. Ex: "Os números que definem a sua decisão." */
  subtitle?: string;
  /** 3 a 4 KPIs em destaque (números grandes). */
  highlights: HighlightStat[];
  /** Linhas da tabela técnica completa (opcional — produtos de SKU único podem omitir). */
  techTable?: TechRow[];
  /** Texto da garantia / nota de rodapé. */
  warrantyNote?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const HighlightCard = ({ stat, index, scrollYProgress }: { stat: HighlightStat; index: number; scrollYProgress: any }) => {
  const y = useTransform(scrollYProgress, [0, 1], [10 * (index + 1), -10 * (index + 1)]);
  return (
    <motion.div variants={fadeInUp} className="relative group">
      {/* Glow */}
      <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full glass-card rounded-3xl p-8 md:p-10 text-center border border-accent/20 hover:border-accent/40 transition-colors">
        <motion.div style={{ y }}>
          <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-accent leading-none mb-3 tracking-tight">
            {stat.value}
          </p>
        </motion.div>
        <p className="text-sm md:text-base text-primary-foreground font-bold uppercase tracking-wider mb-1">
          {stat.label}
        </p>
        {stat.sublabel && (
          <p className="text-xs text-primary-foreground/50 font-light">{stat.sublabel}</p>
        )}
      </div>
    </motion.div>
  );
};

const TechSpecsHighlight = ({
  title = 'Ficha Técnica',
  subtitle = 'Os índices que definem o desempenho — e a sua decisão.',
  highlights,
  techTable,
  warrantyNote,
}: TechSpecsHighlightProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={ref} className="relative py-24 bg-carbon-gradient overflow-hidden">
      <div className="absolute inset-0 bg-diagonal-texture opacity-50" />
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(19 100% 56% / 0.25), transparent 70%)' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.span variants={fadeInUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">
            Performance Comprovada
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4 leading-[1.05]">
            {title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-primary-foreground/60 text-base md:text-lg font-light">
            {subtitle}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex justify-center mt-6">
            <div className="separator-accent" />
          </motion.div>
        </motion.div>

        {/* Highlight KPIs */}
        <motion.div
          className={`grid gap-6 mb-16 max-w-6xl mx-auto ${
            highlights.length === 3
              ? 'sm:grid-cols-3'
              : highlights.length === 2
              ? 'sm:grid-cols-2'
              : 'sm:grid-cols-2 lg:grid-cols-4'
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {highlights.map((stat, i) => (
            <HighlightCard key={i} stat={stat} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>

        {/* Full tech table */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="rounded-2xl border border-primary-foreground/10 bg-background/30 backdrop-blur-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-accent/30 bg-accent/5">
                    <th className="text-left py-4 px-4 md:px-6 font-bold text-primary-foreground uppercase tracking-wider text-xs">Versão</th>
                    <th className="text-center py-4 px-3 md:px-4 font-bold text-primary-foreground uppercase tracking-wider text-xs">Privacidade</th>
                    <th className="text-center py-4 px-3 md:px-4 font-bold text-primary-foreground uppercase tracking-wider text-xs">Luz Visível</th>
                    <th className="text-center py-4 px-3 md:px-4 font-bold text-accent uppercase tracking-wider text-xs">Infravermelho</th>
                    <th className="text-center py-4 px-3 md:px-4 font-bold text-primary-foreground uppercase tracking-wider text-xs">UV</th>
                    <th className="text-center py-4 px-3 md:px-4 font-bold text-primary-foreground uppercase tracking-wider text-xs">Energia Solar</th>
                  </tr>
                </thead>
                <tbody>
                  {techTable.map((row, i) => (
                    <tr key={row.version} className={`border-b border-primary-foreground/5 hover:bg-accent/5 transition-colors ${i === techTable.length - 1 ? 'border-b-0' : ''}`}>
                      <td className="py-4 px-4 md:px-6 font-bold text-primary-foreground">{row.version}</td>
                      <td className="text-center py-4 px-3 md:px-4 text-primary-foreground/70">{row.privacy}</td>
                      <td className="text-center py-4 px-3 md:px-4 text-primary-foreground/70">{row.light}</td>
                      <td className="text-center py-4 px-3 md:px-4 text-accent font-bold">{row.ir}</td>
                      <td className="text-center py-4 px-3 md:px-4 text-primary-foreground/70">{row.uv}</td>
                      <td className="text-center py-4 px-3 md:px-4 text-primary-foreground/70">{row.energy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          {warrantyNote && (
            <motion.p variants={fadeInUp} className="text-xs text-primary-foreground/50 text-center mt-4 italic">
              {warrantyNote}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TechSpecsHighlight;
