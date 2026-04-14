import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const LegalDisclaimer = () => (
  <motion.aside
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="max-w-3xl mx-auto my-10 px-6 py-5 rounded-xl border border-border/20 bg-muted/30"
    aria-label="Aviso legal sobre a marca INSULFILM™"
  >
    <p className="text-xs md:text-sm text-muted-foreground/70 leading-relaxed font-light">
      O termo "insulfilm" é utilizado popularmente para se referir a películas para vidro.{' '}
      <span className="font-semibold text-foreground/80">INSULFILM™ é marca registrada brasileira</span>, pioneira no segmento desde 1986.{' '}
      O uso da marca por terceiros não é autorizado.{' '}
      <Link to="/sobre/o-que-e-insulfilm" className="text-accent hover:underline">O que é INSULFILM™?</Link>{' · '}
      <Link to="/marca/autenticidade" className="text-accent hover:underline">Autenticidade</Link>
    </p>
  </motion.aside>
);

export default LegalDisclaimer;
