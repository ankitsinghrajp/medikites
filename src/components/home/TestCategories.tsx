import { motion } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';
import BloodTest from "../../assets/test-images/blood-test-image.jpg";
import DiabetesTest from "../../assets/test-images/diabetes-test-image.jpg";
import HeartTest from "../../assets/test-images/heart-test-image.jpg";
import KidneyTest from "../../assets/test-images/kidney-test-image.jpg";
import LiverTest from "../../assets/test-images/liver-test-image.jpg";
import ThyroidTest from "../../assets/test-images/thyroid-test-image.jpg";
import UrineTest from "../../assets/test-images/urine-test-image.jpg";
import VitaminTest from "../../assets/test-images/vitamin-test-image.jpg";
import WomensTest from "../../assets/test-images/womens-health-test-image.jpg";

const testCategories = [
  {
    image: BloodTest,
    title: 'Blood Test',
    description: 'Complete blood analysis',
    color: 'from-red-500 to-pink-500',
    delay: 0.1,
  },
  {
    image: DiabetesTest,
    title: 'Diabetes Test',
    description: 'Blood sugar monitoring',
    color: 'from-blue-500 to-cyan-500',
    delay: 0.2,
  },
  {
    image: HeartTest,
    title: 'Heart Test',
    description: 'Cardiac health screening',
    color: 'from-rose-500 to-red-500',
    delay: 0.3,
  },
  {
    image: KidneyTest,
    title: 'Kidney Test',
    description: 'Renal function analysis',
    color: 'from-emerald-500 to-teal-500',
    delay: 0.4,
  },
  {
    image: LiverTest,
    title: 'Liver Test',
    description: 'Hepatic function panel',
    color: 'from-amber-500 to-orange-500',
    delay: 0.5,
  },
  {
    image: ThyroidTest,
    title: 'Thyroid',
    description: 'Hormone level testing',
    color: 'from-purple-500 to-indigo-500',
    delay: 0.6,
  },
  {
    image: UrineTest,
    title: 'Urine Test',
    description: 'Urinalysis & screening',
    color: 'from-yellow-500 to-amber-500',
    delay: 0.7,
  },
  {
    image: VitaminTest,
    title: 'Vitamin Test',
    description: 'Nutritional assessment',
    color: 'from-green-500 to-emerald-500',
    delay: 0.8,
  },
  {
    image: WomensTest,
    title: "Women's Health",
    description: "Specialized women's test",
    color: 'from-pink-500 to-rose-500',
    delay: 0.9,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const TestCategoriesSection = () => {
  return (
    <section className="relative py-14 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-700 text-sm font-semibold mb-4"
          >
            <Activity className="w-4 h-4" />
            <span>Comprehensive Testing</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Test Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive diagnostic testing across 10 key health areas
          </p>
        </motion.div>

        {/* Test Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Container */}
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  {/* Image */}
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
                  
                  {/* Enhanced Gradient Border on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    style={{ mixBlendMode: 'overlay' }}
                  />

                  {/* Animated Corner Accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${category.color} opacity-0 group-hover:opacity-40 transition-all duration-500 blur-2xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 lg:p-8 bg-white">
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-emerald-600 transition-all duration-300">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm lg:text-base mb-5 group-hover:text-gray-700 transition-colors">
                    {category.description}
                  </p>

                  {/* Learn More Link with Arrow */}
                  <motion.div
                    className="flex items-center gap-2 text-sm font-semibold group/link"
                  >
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${category.color} group-hover:from-cyan-600 group-hover:to-emerald-600 transition-all duration-300`}>
                      Learn More
                    </span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}
                    >
                      <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform duration-300`} style={{
                        stroke: 'url(#arrow-gradient-' + index + ')',
                      }} />
                      <svg width="0" height="0" style={{ position: 'absolute' }}>
                        <defs>
                          <linearGradient id={`arrow-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={category.color.includes('red') ? '#ef4444' : category.color.includes('blue') ? '#3b82f6' : category.color.includes('emerald') ? '#10b981' : category.color.includes('amber') ? '#f59e0b' : category.color.includes('purple') ? '#a855f7' : category.color.includes('yellow') ? '#eab308' : category.color.includes('green') ? '#22c55e' : category.color.includes('pink') ? '#ec4899' : '#06b6d4'} />
                            <stop offset="100%" stopColor={category.color.includes('pink') ? '#ec4899' : category.color.includes('cyan') ? '#06b6d4' : category.color.includes('rose') ? '#f43f5e' : category.color.includes('teal') ? '#14b8a6' : category.color.includes('orange') ? '#f97316' : category.color.includes('indigo') ? '#6366f1' : category.color.includes('amber') ? '#f59e0b' : category.color.includes('emerald') ? '#10b981' : '#f43f5e'} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Bottom Decorative Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} w-0 group-hover:w-full transition-all duration-500`}
                  />
                </div>
              </div>

              {/* Animated Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Can't find what you're looking for?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Activity className="w-5 h-5" />
            <span>View All Tests</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};