import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookTestModal from '@/components/home/BookNowModal';
import labImage from '../../assets/about-image.avif';

export const WhoWeAreSection = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Decorative Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-700 text-sm font-semibold"
              >
                <Sparkles className="w-4 h-4" />
                <span>About Medikites</span>
              </motion.div>

              {/* Title with Gradient Accent */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900"
              >
                Who We{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
                  Are
                </span>
              </motion.h2>

              {/* Description with Enhanced Typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4 text-gray-600 leading-relaxed"
              >
                <p className="text-lg">
                  Medikites is a leading medical testing facility committed to providing accurate, reliable, and timely diagnostic services. Located in the heart of Bangalore, we serve the community with state-of-the-art technology and a team of experienced healthcare professionals.
                </p>
                <p>
                  With over 300 diagnostic tests spanning 10 key health categories, we ensure comprehensive healthcare solutions for individuals and families. Our facility combines modern equipment with traditional values of care and compassion.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  onClick={() => setIsBookModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Book Test
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 rounded-2xl font-semibold border-2 border-gray-200 hover:border-cyan-500 hover:bg-cyan-50 transition-all"
                  asChild
                >
                  <a href="/tests">View Tests</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image with Creative Layout */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main Image with Morphing Border */}
              <div className="relative">
                {/* Animated Border Effect */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-30"
                />

                {/* Image Container with Unique Shape */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={labImage}
                      alt="Medikites Laboratory"
                      className="w-full h-[500px] object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
                  </motion.div>
                </div>

                {/* Floating Elements */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    className={`absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full ${
                      i === 0 ? 'top-10 right-10' :
                      i === 1 ? 'bottom-20 left-10' :
                      i === 2 ? 'top-32 left-20' :
                      'bottom-32 right-20'
                    }`}
                  />
                ))}

                {/* Bottom Wave Decoration */}
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full blur-2xl opacity-40"
                />
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