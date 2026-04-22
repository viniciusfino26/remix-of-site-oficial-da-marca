import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackConversion } from '@/lib/rdstation';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-[4.5rem] sm:bottom-[5rem] right-4 sm:right-6 z-50"
      aria-hidden={!visible}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <Link
        to="/lojas"
        onClick={() => trackConversion('cta-flutuante-especialista', { source: 'floating-cta' })}
        tabIndex={visible ? 0 : -1}
        className="flex items-center gap-2 bg-accent text-accent-foreground font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300"
      >
        <MapPin className="w-4 h-4" />
        Fale com um Especialista
      </Link>
    </motion.div>
  );
};

export default FloatingCTA;
