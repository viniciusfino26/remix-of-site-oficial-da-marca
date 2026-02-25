import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-[5.5rem] sm:bottom-24 right-4 sm:right-6 z-50"
        >
          <Link
            to="/lojas"
            className="flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300"
          >
            <MapPin className="w-4 h-4" />
            Encontre uma Loja
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
