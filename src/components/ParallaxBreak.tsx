import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
}

interface ParallaxBreakProps {
  imageSrc?: string;
  children?: React.ReactNode;
  overlayOpacity?: number;
  minHeight?: string;
  stats?: StatItem[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const ParallaxBreak = ({ imageSrc, children, overlayOpacity = 0.7, minHeight = '50vh', stats }: ParallaxBreakProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const textureY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const glowY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const isAbstract = !imageSrc;

  return (
    <section ref={ref} className="relative overflow-hidden flex items-center justify-center" style={{ minHeight }}>
      {isAbstract ? (
        <>
          {/* Abstract mode: carbon gradient + animated textures */}
          <div className="absolute inset-0 bg-carbon-gradient" />
          <motion.div className="absolute inset-0 bg-diagonal-texture opacity-60" style={{ y: textureY }} />
          <motion.div className="absolute inset-0 bg-hero-texture opacity-30" style={{ y: useTransform(scrollYProgress, [0, 1], [-15, 15]) }} />
          {/* Glow orb */}
          <motion.div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl"
            style={{
              y: glowY,
              background: 'radial-gradient(circle, hsl(19 100% 56% / 0.08), transparent 70%)',
            }}
          />
        </>
      ) : (
        <>
          {/* Image mode */}
          <motion.img
            src={imageSrc}
            alt=""
            className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
            style={{ y: imgY }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, hsl(224 100% 14% / ${overlayOpacity}), hsl(224 100% 19% / ${overlayOpacity}))` }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {children && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {children}
          </motion.div>
        )}

        {/* Stats with stagger + individual parallax */}
        {stats && stats.length > 0 && (
          <motion.div
            className="flex flex-wrap justify-center gap-10 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.span
                  className="block text-4xl md:text-5xl font-extrabold text-accent mb-1"
                  style={{ y: useTransform(scrollYProgress, [0, 1], [5 * (i + 1), -5 * (i + 1)]) }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-sm text-primary-foreground/60 font-light uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ParallaxBreak;
