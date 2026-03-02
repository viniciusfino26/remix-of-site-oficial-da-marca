import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

interface ProductShowcaseProps {
  title: string;
  subtitle?: string;
  badge?: string;
  description: string;
  imageSrc?: string;
  fallbackIcon?: React.ReactNode;
  link: string;
  linkText?: string;
  reversed?: boolean;
}

const ProductShowcase = ({
  title,
  subtitle,
  badge,
  description,
  imageSrc,
  fallbackIcon,
  link,
  linkText = 'VEJA',
  reversed = false
}: ProductShowcaseProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={stagger}
      className="grid md:grid-cols-2 gap-12 items-center">

      {/* Text */}
      <motion.div variants={reversed ? fadeInRight : fadeInLeft} className={reversed ? 'md:order-2' : ''}>
        {badge &&
        <Badge variant="outline" className="mb-4 text-xs uppercase tracking-widest border-accent/30 text-accent">
            {badge}
          </Badge>
        }
        <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
          {title}
        </h3>
        {subtitle &&
        <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">
            {subtitle}
          </p>
        }
        <p className="text-muted-foreground font-light leading-relaxed mb-8 text-base">
          {description}
        </p>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl px-8 py-5 shadow-premium-lg hover:shadow-premium transition-all">
          <Link to={link}>
            {linkText} <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </motion.div>

      {/* Image / Fallback */}
      <motion.div variants={reversed ? fadeInLeft : fadeInRight} className={reversed ? 'md:order-1' : ''}>
        {imageSrc ?
        <motion.div
          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-premium-lg"
          style={{ y: imgY }}>

            






            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
          </motion.div> :

        <div className="glass-card rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden relative">
            <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [8, -8]) }}>

              {fallbackIcon}
            </motion.div>
          </div>
        }
      </motion.div>
    </motion.div>);

};

export default ProductShowcase;