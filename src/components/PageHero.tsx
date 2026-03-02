import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: {icon: React.ReactNode;text: string;};
  backgroundImage?: string;
  cta?: {text: string;href: string;icon?: React.ReactNode;external?: boolean;};
}

const PageHero = ({ title, subtitle, badge, backgroundImage, cta }: PageHeroProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-[65vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background: image or carbon gradient */}
      {backgroundImage ?
      <>
          <motion.img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: imgScale }} />

          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/95" />
        </> :

      <>
          <div className="absolute inset-0 bg-carbon-gradient" />
          <div className="absolute inset-0 bg-hero-texture" />
        </>
      }

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 pt-32 pb-24 relative z-10 text-center"
        style={{ y: textY, opacity }}>

        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {badge &&
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-4 py-1.5">
                {badge.icon}
                <span className="ml-2">{badge.text}</span>
              </Badge>
            </motion.div>
          }

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 max-w-5xl mx-auto leading-tight">
            {title}
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10 leading-relaxed text-primary-foreground">
            {subtitle}
          </motion.p>

          {cta &&
          <motion.div variants={scaleIn}>
              {cta.external ?
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <a href={cta.href} target="_blank" rel="noopener noreferrer">
                    {cta.icon}
                    {cta.text}
                  </a>
                </Button> :

            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-premium-lg hover:shadow-premium transition-all">
                  <Link to={cta.href}>
                    {cta.icon}
                    {cta.text}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
            }
            </motion.div>
          }
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default PageHero;