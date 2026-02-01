import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppButton = ({ phoneNumber = "916200837385", message = "" }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
      
      {/* Main button */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        
        {/* Red notification dot */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg">
          Chat with us on WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-gray-900"></div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};