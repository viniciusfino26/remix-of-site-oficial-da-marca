// src/components/ProductImagePlaceholder.tsx
// Placeholder padronizado de imagem de produto, mesmo visual usado na PDP Matrix.
// Quando a imagem real chegar, basta passar a prop `src` e o placeholder some.

import { motion } from 'framer-motion';
import { ImageIcon, type LucideIcon } from 'lucide-react';

interface ProductImagePlaceholderProps {
  /** URL da imagem real do produto. Quando definida, substitui o placeholder. */
  src?: string;
  /** Texto alternativo para acessibilidade e SEO. */
  alt: string;
  /** Ícone exibido enquanto não há imagem. Default: ImageIcon. */
  icon?: LucideIcon;
  /** Rótulo abaixo do ícone. Default: 'Imagem do produto'. */
  label?: string;
  /** Aspect ratio do bloco. Default: '4/3'. */
  aspect?: '4/3' | '16/9' | '1/1' | '3/4';
  /** Variante de fundo para combinar com a seção pai. */
  variant?: 'dark' | 'light';
  /** Classes extras. */
  className?: string;
}

const aspectMap = {
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  '1/1': 'aspect-square',
  '3/4': 'aspect-[3/4]',
};

const ProductImagePlaceholder = ({
  src,
  alt,
  icon: Icon = ImageIcon,
  label = 'Imagem do produto',
  aspect = '4/3',
  variant = 'dark',
  className = '',
}: ProductImagePlaceholderProps) => {
  const isDark = variant === 'dark';
  const bgClasses = isDark
    ? 'bg-muted/10 border border-border/20'
    : 'bg-background border border-border/40';
  const iconColor = isDark ? 'text-primary-foreground/70' : 'text-muted-foreground/60';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${aspectMap[aspect]} rounded-2xl overflow-hidden ${src ? '' : bgClasses} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center ${iconColor}`}>
          <div className="text-center">
            <Icon className="w-16 h-16 mx-auto mb-3 opacity-40" />
            <p className="text-sm font-light">{label}</p>
            <p className="sr-only">{alt}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProductImagePlaceholder;
