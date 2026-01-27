import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="py-20 max-w-6xl rounded-xl mb-14 mx-auto relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-primary" />
      
      {/* Animated Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
              Book Your Health Checkup Today
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Ready to Take Control of{' '}
            <span className="relative">
              Your Health?
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-white/40 rounded-full origin-left"
              />
            </span>
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Experience hospital-quality care at home. Book a test, rent medical equipment, 
            or schedule a consultation — we're here for you 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="xl"
                className="bg-white text-primary hover:bg-white/90 shadow-elevated gap-2 group"
              >
                Book a Test Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="xl"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </motion.div>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-6 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Available 24/7</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <span>NABL Accredited Labs</span>
            <div className="w-px h-4 bg-white/20" />
            <span>Home Collection</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
