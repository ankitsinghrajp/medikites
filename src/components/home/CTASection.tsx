import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import BookTestModal from './BookNowModal';
export const CTASection = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50" />
        
        {/* Animated Blobs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                📅 Book Your Health Checkup Today
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Ready to Take Control of{' '}
              <span className="text-blue-200">Your Health?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
            >
              Experience hospital-quality care at home. Book a test, rent medical equipment, 
              or schedule a consultation — we're here for you 24/7.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => setIsBookModalOpen(true)}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Book a Test Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <a href="tel:+916200837385">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm font-medium">Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm font-medium">NABL Accredited Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm font-medium">Home Collection</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book Test Modal */}
      <BookTestModal 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />
    </>
  );
};