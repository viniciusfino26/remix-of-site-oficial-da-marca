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
  imageSrc?: string;
  cardVariant?: 'blue' | 'orange' | 'gray';
}

const cardVariantClasses = {
  blue: 'bg-[#1a3a6e]/60 md:bg-[#1a3a6e]/70',
  orange: 'bg-[#c45e1a]/40 md:bg-[#c45e1a]/50',
  gray: 'bg-neutral-800/45 md:bg-neutral-800/65',
};

const ProductBanner = ({ title, description, buttonText, buttonIcon: Icon, link, alignment = 'right', imageSrc, cardVariant = 'blue' }: ProductBannerProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const textureY = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), { stiffness: 60, damping: 20 });
  const glowY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative min-h-[45vh] md:min-h-[60vh] flex items-center overflow-hidden my-1 md:my-2">
      {/* Background: image or carbon gradient */}
      {imageSrc ? (
        <>
          <motion.img
            src={imageSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ scale: imgScale }}
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/30 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-carbon-gradient" />
          <motion.div className="absolute inset-0 bg-hero-texture" style={{ y: textureY }} />
          <motion.div className="absolute inset-0 pointer-events-none" style={{ y: glowY }}>
            <div
              className={`absolute w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-glow-pulse ${
                alignment === 'right' ? 'top-1/4 right-1/4' : 'bottom-1/4 left-1/4'
              }`}
            />
          </motion.div>
        </>
      )}

      <div className={`container mx-auto px-4 relative z-10 flex ${alignment === 'right' ? 'justify-end' : 'justify-start'}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={alignment === 'right' ? fadeInRight : fadeInLeft}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className={`${cardVariantClasses[cardVariant]} p-6 md:p-8 w-full sm:w-[36rem] max-w-full h-[320px] md:h-[360px] grid gap-4 md:gap-5 rounded-lg border border-white/10`}
          style={{ gridTemplateRows: '4.5rem 5.25rem 2.75rem' }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-white line-clamp-2 leading-tight m-0 self-start">
            {title}
          </h2>
          <p className="text-sm md:text-base text-white/60 font-light leading-relaxed line-clamp-3 m-0 self-start">
            {description}
          </p>
          <Link to={link} className="self-end">
            {cardVariant === 'orange' ? (
              <Button className="bg-white hover:bg-white/90 text-neutral-900 font-bold gap-2 shadow-md hover:shadow-lg transition-all duration-300 h-11 px-6 text-sm">
                <Icon className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 shadow-md hover:shadow-lg transition-all duration-300 h-11 px-6 text-sm">
                <Icon className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductBanner;
