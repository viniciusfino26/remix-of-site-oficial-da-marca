import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronUp } from 'lucide-react';

const PageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showTop, setShowTop] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Back button — hidden on home */}
      <AnimatePresence>
        {!isHome && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(-1)}
            aria-label="Voltar"
            className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/80 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary backdrop-blur-sm border border-primary-foreground/10 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            aria-label="Ir ao topo"
            className="fixed bottom-20 left-4 sm:bottom-[4.5rem] sm:left-6 z-50 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/80 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary backdrop-blur-sm border border-primary-foreground/10 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageNavigation;
