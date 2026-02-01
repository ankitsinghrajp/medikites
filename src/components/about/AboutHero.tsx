import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AboutHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    setIsVisible(true);
  }, []);
 
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden pt-24 lg:pt-32 pb-12 lg:pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#2d5a7b] to-[#1a4d6d]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-72 h-72 lg:w-96 lg:h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-white text-sm font-medium mb-6"
          >
            <motion.span 
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <Sparkles className="w-4 h-4" />
            <span>Know More About Us</span>
          </motion.div>

          {/* About Us Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 lg:mb-8"
            style={{
              fontFamily: 'Philosopher, sans-serif',
            }}
          >
            About Us
          </motion.h1>
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p 
              className="text-base lg:text-lg text-white/90 leading-relaxed px-4"
              style={{
                fontFamily: '"PT Sans", sans-serif',
              }}
            >
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 font-semibold"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                MediKites
              </motion.span>{' '}
              is a trusted diagnostic center in Bangalore providing accurate, timely, and comprehensive medical testing with advanced technology and compassionate care.
            </p>
          </motion.div>
          
          {/* Decorative underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-32 h-[2px] bg-gradient-to-r from-cyan-400 via-emerald-400 to-transparent mx-auto mt-8 lg:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;