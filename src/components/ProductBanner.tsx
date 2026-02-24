import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

interface ProductBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: LucideIcon;
  link: string;
  alignment?: 'left' | 'right';
}

const ProductBanner = ({ title, description, buttonText, buttonIcon: Icon, link, alignment = 'right' }: ProductBannerProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const textureY = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), { stiffness: 60, damping: 20 });
  const glowY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center overflow-hidden bg-carbon-gradient">
      {/* Geometric texture with parallax */}
      <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: textureY }} />

      {/* Glow effect */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: glowY }}>
        <div
          className={`absolute w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-glow-pulse ${
            alignment === 'right' ? 'top-1/4 right-1/4' : 'bottom-1/4 left-1/4'
          }`}
        />
      </motion.div>

      <div className={`container mx-auto px-4 relative z-10 flex ${alignment === 'right' ? 'justify-end' : 'justify-start'}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={alignment === 'right' ? fadeInRight : fadeInLeft}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="bg-primary/80 backdrop-blur-md p-8 md:p-12 max-w-xl rounded-lg border border-primary-foreground/10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">{title}</h2>
          <p className="text-primary-foreground/60 mb-8 font-light leading-relaxed">{description}</p>
          <Link to={link}>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 shadow-md hover:shadow-lg transition-all duration-300">
              <Icon className="w-4 h-4" />
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductBanner;
