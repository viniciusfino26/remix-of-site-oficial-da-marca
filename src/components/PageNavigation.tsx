import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      <motion.button
        initial={false}
        animate={isHome ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => navigate(-1)}
        aria-label="Voltar"
        aria-hidden={isHome}
        tabIndex={isHome ? -1 : 0}
        className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/80 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary backdrop-blur-sm border border-primary-foreground/10 shadow-md hover:shadow-lg transition-all duration-300"
        style={{ pointerEvents: isHome ? 'none' : 'auto' }}
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.button>

      <motion.button
        initial={false}
        animate={showTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        aria-label="Ir ao topo"
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
        className="fixed bottom-20 left-4 sm:bottom-[4.5rem] sm:left-6 z-50 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/80 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary backdrop-blur-sm border border-primary-foreground/10 shadow-md hover:shadow-lg transition-all duration-300"
        style={{ pointerEvents: showTop ? 'auto' : 'none' }}
      >
        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.button>
    </>
  );
};

export default PageNavigation;
