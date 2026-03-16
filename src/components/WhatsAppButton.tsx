import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Analytics } from '@/components/Analytics';

const WHATSAPP_NUMBER = '5511999999999';
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Gostaria de saber mais sobre as películas INSULFILM™.');

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => Analytics.whatsappClick('flutuante')}
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <MessageCircle className="w-7 h-7 relative z-10" fill="currentColor" />
    </motion.a>
  );
};

export default WhatsAppButton;
