import { motion } from 'framer-motion';
import { Home, Clock, Shield, IndianRupee } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Home Collection',
    description: 'Convenient sample collection at your doorstep',
    color: '#2196F3',
    bgColor: 'rgba(33, 150, 243, 0.1)',
  },
  {
    icon: Clock,
    title: 'Quick Results',
    description: 'Fast turnaround time for all tests',
    color: '#4CAF50',
    bgColor: 'rgba(76, 175, 80, 0.1)',
  },
  {
    icon: Shield,
    title: 'Accurate Results',
    description: 'State-of-the-art equipment and certified lab',
    color: '#FFC107',
    bgColor: 'rgba(255, 193, 7, 0.1)',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Rates',
    description: 'Competitive pricing with quality assurance',
    color: '#00BCD4',
    bgColor: 'rgba(0, 188, 212, 0.1)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
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

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Medikites?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for accurate diagnostic testing
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon className="w-10 h-10 text-white" strokeWidth={2} />
                  
                  {/* Pulse effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: feature.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};