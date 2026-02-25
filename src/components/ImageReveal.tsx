import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const clipPathMap = {
  up: { from: 'inset(100% 0 0 0)', to: 'inset(0 0 0 0)' },
  down: { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0 0)' },
  left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0 0 0)' },
  right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0)' },
};

const ImageReveal = ({ src, alt, className = '', direction = 'up' }: ImageRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'start 40%'],
  });

  const clip = clipPathMap[direction];
  const clipPath = useTransform(scrollYProgress, [0, 1], [clip.from, clip.to]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-2xl ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ clipPath, scale }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default ImageReveal;
