import { motion } from 'framer-motion';
import { 
  Home,
  Phone,
  Microscope,
  BedDouble,
  ArrowRight,
  Stethoscope,
  UserRound,
  Syringe,
  TestTube,
  Wheelchair
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const featuredServices = [
  {
    icon: Home,
    title: 'Home Healthcare Services',
    description: 'Professional nursing, caretakers, physiotherapy, and ICU setup at your home with 24/7 support.',
    features: ['Home Nursing', 'Baby & Elderly Care', 'Physiotherapy', 'ICU Setup'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Phone,
    title: 'On-Call Medical Services',
    description: 'Expert medical procedures at home including injections, wound dressing, and specialized care.',
    features: ['IV Infusion', 'Wound Dressing', 'Catheter Care', 'Tracheostomy'],
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  {
    icon: Microscope,
    title: 'Diagnostic Services',
    description: 'Comprehensive lab tests at home or center with 300+ tests across all health categories.',
    features: ['Blood Tests', 'Health Checkups', 'Diabetes Screening', 'Cancer Tests'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: BedDouble,
    title: 'Medical Equipment Rental',
    description: 'Hospital-grade medical equipment on rent including oxygen, ventilators, and mobility aids.',
    features: ['Oxygen Equipment', 'Ventilators', 'Hospital Beds', 'ICU Monitors'],
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
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

export const ServicesSection = () => {
  const navigate = useNavigate();

  const handleViewAllServices = () => {
    navigate('/services');
  };

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 text-blue-700 text-sm font-semibold mb-4"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Our Services</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Complete Healthcare Solutions
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            From home healthcare to advanced diagnostics, we provide comprehensive medical services at your doorstep
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16"
        >
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative h-full bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border ${service.borderColor}`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 lg:mb-6 shadow-lg group-hover:shadow-xl`}
                  >
                    <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-emerald-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-gray-600 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <motion.button
                    onClick={handleViewAllServices}
                    className="flex items-center gap-2 text-sm font-semibold group/link"
                    whileHover={{ x: 4 }}
                  >
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                      Learn More
                    </span>
                    <ArrowRight className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${service.color} group-hover/link:translate-x-1 transition-transform`} 
                      style={{
                        stroke: service.color.includes('blue') ? '#3b82f6' : 
                                service.color.includes('emerald') ? '#10b981' :
                                service.color.includes('purple') ? '#a855f7' : '#ec4899'
                      }}
                    />
                  </motion.button>

                </div>

                {/* Animated Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`}
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
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6 text-base lg:text-lg">
            Looking for more specialized services?
          </p>
          <motion.button
            onClick={handleViewAllServices}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Stethoscope className="w-5 h-5" />
            <span>View All Services</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;