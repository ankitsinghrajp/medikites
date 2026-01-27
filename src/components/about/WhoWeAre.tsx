import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import labImage from '../../assets/about-image.avif';

export const WhoWeAreSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-emerald-50">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-emerald-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-cyan-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Decorative Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur-lg opacity-50"></div>
                <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-cyan-200 shadow-lg">
                  <Sparkles className="w-4 h-4 text-cyan-600" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-emerald-600 text-transparent bg-clip-text">
                    About Medikites
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Title with Gradient Accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Who We{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-600 to-emerald-600 text-transparent bg-clip-text">
                    Are
                  </span>
               
                </span>
              </h2>
            </motion.div>

            {/* Description with Enhanced Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Medikites is a <span className="font-semibold text-gray-900">leading medical testing facility</span> committed to providing accurate, reliable, and timely diagnostic services. Located in the heart of Bangalore, we serve the community with state-of-the-art technology and a team of experienced healthcare professionals.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                With over <span className="font-semibold text-cyan-600">300 diagnostic tests</span> spanning <span className="font-semibold text-emerald-600">10 key health categories</span>, we ensure comprehensive healthcare solutions for individuals and families. Our facility combines modern equipment with traditional values of care and compassion.
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
              <Button className="group bg-gradient-to-r from-cyan-500 via-cyan-600 to-emerald-600 hover:from-cyan-600 hover:via-cyan-700 hover:to-emerald-700 text-white px-8 py-7 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Book Test
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
              
              <Button className="group bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-cyan-500 px-8 py-7 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                View Tests
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image with Creative Layout */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main Image with Morphing Border */}
            <div className="relative">
              {/* Animated Border Effect */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 rounded-[40px] blur-2xl opacity-40"
              />
              
              {/* Image Container with Unique Shape */}
              <motion.div
                initial={{ scale: 0.9, rotate: -3 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src={labImage}
                  alt="Medical professional using microscope"
                  className="w-full h-[600px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 via-transparent to-emerald-600/20" />
              </motion.div>

              <div className="absolute bottom-1/4 -right-12 space-y-3">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      },
                    }}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};