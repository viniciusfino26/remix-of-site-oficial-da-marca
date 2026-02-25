import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBreakProps {
  imageSrc: string;
  children?: React.ReactNode;
  overlayOpacity?: number;
  minHeight?: string;
}

const ParallaxBreak = ({ imageSrc, children, overlayOpacity = 0.7, minHeight = '50vh' }: ParallaxBreakProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative overflow-hidden flex items-center justify-center" style={{ minHeight }}>
      {/* Parallax image */}
      <motion.img
        src={imageSrc}
        alt=""
        className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
        style={{ y: imgY }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(to bottom, hsl(224 100% 14% / ${overlayOpacity}), hsl(224 100% 19% / ${overlayOpacity}))` }}
      />

      {/* Content */}
      {children && (
        <motion.div
          className="relative z-10 container mx-auto px-4 py-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </section>
  );
};

export default ParallaxBreak;
