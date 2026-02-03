import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Anjali Sharma",
      location: "Bangalore",
      rating: 5,
      title: "Smooth & Hassle-Free Experience",
      review: "Booked a blood test for my parents at home. The technician arrived on time, was very professional, and reports came the same day. Highly recommended!"
    },
    {
      name: "Ramesh Kumar",
      location: "Hyderabad",
      rating: 5,
      title: "Best Home Diagnostic Service",
      review: "MediKites made health checkups so easy. Booking through WhatsApp was quick and transparent pricing was a big plus."
    },
    {
      name: "Neha Verma",
      location: "Delhi",
      rating: 5,
      title: "Reliable During Emergencies",
      review: "Needed an urgent COVID RT-PCR test. Sample collected within hours and report delivered on time. Great support team."
    },
    {
      name: "Pankaj Singh",
      location: "Patna",
      rating: 5,
      title: "Professional & Hygienic Staff",
      review: "The nurse followed all safety protocols and explained everything clearly. Felt very safe and comfortable."
    },
    {
      name: "Suman Das",
      location: "Kolkata",
      rating: 5,
      title: "Affordable & Accurate Reports",
      review: "Compared prices with local labs and MediKites was cheaper with better service. Reports were accurate and easy to understand."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Gradient Background - matching hero section */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#2d5a7b] to-[#1a4d6d]">
        {/* Animated floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
        />
        
        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-30">
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-white text-sm font-medium mb-4"
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
            <span>Trusted by Families Across India</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            💬 What Our{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300"
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
              Patients Say
            </motion.span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group"
            >
              <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-2xl">
              
                {/* Rating Stars */}
                <div className="flex gap-1 mb-3 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {testimonial.title}
                </h3>

                {/* Review Text */}
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {testimonial.review}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-white/70 text-xs">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-white/20"
        >
          <div className="inline-flex items-center gap-2 text-white/90">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm sm:text-base">
              Join <span className="font-bold text-emerald-300">50,000+</span> satisfied families
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};