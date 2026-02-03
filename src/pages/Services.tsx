import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Stethoscope, 
  Activity, 
  Phone, 
  Home,
  UserRound,
  Syringe,
  Microscope,
  Scan,
  BedDouble,
  Wind,
  Baby,
  Pill,
  Shield,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  HeartPulse,
  TestTube,
  FileHeart,
  Zap
} from 'lucide-react';
import BookTestModal from '@/components/home/BookNowModal';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/home/WhatsAppButton';

const services = {
  homeHealthcare: {
    title: 'Home Healthcare Services',
    icon: Home,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    services: [
      { 
        name: 'Home Attendant / Caretaker', 
        slug: 'home-attendant-caretaker',
        icon: UserRound, 
        description: '24/7 professional care at home' 
      },
      { 
        name: 'Skilled Home Nursing', 
        slug: 'skilled-home-nursing',
        icon: Heart, 
        description: 'Certified nurses for medical care' 
      },
      { 
        name: 'Baby Care & Elderly Care', 
        slug: 'baby-elderly-care',
        icon: Baby, 
        description: 'Specialized care for all ages' 
      },
      { 
        name: 'Physiotherapy at Home', 
        slug: 'physiotherapy-at-home',
        icon: Activity, 
        description: 'Expert physical therapy sessions' 
      },
      { 
        name: 'ICU Setup at Home', 
        slug: 'icu-setup-at-home',
        icon: BedDouble, 
        description: 'Hospital-grade ICU facilities' 
      }
    ]
  },
  onCallMedical: {
    title: 'On-Call Medical Services',
    icon: Phone,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    services: [
      { 
        name: 'Injection & IV Infusion', 
        slug: 'injection-iv-infusion',
        icon: Syringe, 
        description: 'Safe medication administration' 
      },
      { 
        name: 'Wound Dressing at Home', 
        slug: 'wound-dressing-at-home',
        icon: Shield, 
        description: 'Professional wound care' 
      },
      { 
        name: "Ryle's Tube / Catheter Change", 
        slug: 'ryles-tube-catheter-change',
        icon: Pill, 
        description: 'Expert tube management' 
      },
      { 
        name: 'Tracheostomy Care', 
        slug: 'tracheostomy-care',
        icon: Wind, 
        description: 'Specialized respiratory care' 
      },
      { 
        name: 'Cannulation Insertion', 
        slug: 'cannulation-insertion',
        icon: Activity, 
        description: 'IV line insertion by experts' 
      }
    ]
  },
  diagnostics: {
    title: 'Diagnostic Services',
    icon: Microscope,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    services: [
      { 
        name: 'Master Health Check-ups', 
        slug: 'master-health-checkups',
        icon: FileHeart, 
        description: 'Comprehensive health screening' 
      },
      { 
        name: 'Blood Tests at Home', 
        slug: 'blood-tests-at-home',
        icon: TestTube, 
        description: '300+ tests available' 
      },
      { 
        name: 'Thyroid | Diabetes | Cardiac Tests', 
        slug: 'thyroid-diabetes-cardiac-tests',
        icon: HeartPulse, 
        description: 'Specialized health tests' 
      },
      { 
        name: 'Infertility & Hormonal Test', 
        slug: 'infertility-hormonal-test',
        icon: Activity, 
        description: 'Complete hormonal profiling' 
      },
      { 
        name: 'Cancer Screening | Genetic Tests', 
        slug: 'cancer-genetic-tests',
        icon: Microscope, 
        description: 'Advanced diagnostic testing' 
      },
      { 
        name: 'Biological Age Test', 
        slug: 'biological-age-test',
        icon: Clock, 
        description: 'Know your biological age' 
      }
    ]
  },
  imaging: {
    title: 'Imaging & Scans',
    icon: Scan,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    services: [
      { 
        name: 'X-Ray & ECG at Home', 
        slug: 'xray-ecg-at-home',
        icon: Activity, 
        description: 'Portable imaging services' 
      },
      { 
        name: 'X-Ray | Ultrasound', 
        slug: 'xray-ultrasound',
        icon: Scan, 
        description: 'Digital imaging facility' 
      },
      { 
        name: '2D Echo', 
        slug: '2d-echo',
        icon: HeartPulse, 
        description: 'Cardiac imaging' 
      },
      { 
        name: 'CT Scan | MRI Scan', 
        slug: 'ct-mri-scan',
        icon: Scan, 
        description: 'Advanced imaging technology' 
      }
    ]
  },
  equipment: {
    title: 'Medical Equipment on Rent',
    icon: BedDouble,
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    services: [
      { 
        name: 'Oxygen Concentrator / Cylinder', 
        slug: 'oxygen-concentrator-cylinder',
        icon: Wind, 
        description: 'Respiratory support equipment' 
      },
      { 
        name: 'Ventilator | BiPAP | CPAP', 
        slug: 'ventilator-bipap-cpap',
        icon: Activity, 
        description: 'Advanced breathing assistance' 
      },
      { 
        name: 'Hospital Bed | Wheelchair', 
        slug: 'hospital-bed-wheelchair',
        icon: Wind, 
        description: 'Mobility & comfort solutions' 
      },
      { 
        name: 'ICU Monitor | DVT Pump', 
        slug: 'icu-monitor-dvt-pump',
        icon: Activity, 
        description: 'Critical care equipment' 
      },
      { 
        name: 'Air Mattress | Suction Machine', 
        slug: 'air-mattress-suction-machine',
        icon: BedDouble, 
        description: 'Patient comfort devices' 
      }
    ]
  }
};

const stats = [
  { number: '10+', label: 'Years Experience', icon: Clock },
  { number: '300+', label: 'Tests Available', icon: TestTube },
  { number: '50K+', label: 'Happy Patients', icon: Heart },
  { number: '24/7', label: 'Support', icon: Phone }
];

const features = [
  { icon: Shield, text: 'Certified Professionals' },
  { icon: Clock, text: '24/7 Availability' },
  { icon: Home, text: 'Home Service Available' },
  { icon: CheckCircle, text: 'Affordable Pricing' }
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ServiceCard = ({ service, index, categoryColor }) => {
  const Icon = service.icon;
  
  return (
    <Link to={`/services/${service.slug}`} className="block">
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="group cursor-pointer"
      >
        <div className="relative h-full bg-white rounded-xl lg:rounded-2xl p-5 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
          {/* Icon */}
          <motion.div
            className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${categoryColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
          </motion.div>

          {/* Content */}
          <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-emerald-600 transition-all">
            {service.name}
          </h4>
          <p className="text-sm text-gray-600 mb-4">{service.description}</p>

          {/* View Details Link */}
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Decorative bottom line */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${categoryColor} w-0 group-hover:w-full transition-all duration-500 rounded-b-xl lg:rounded-b-2xl`}
          />
        </div>
      </motion.div>
    </Link>
  );
};

const CategorySection = ({ categoryKey, data, index }) => {
  const Icon = data.icon;
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-16 lg:mb-20"
    >
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-8 lg:mb-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center shadow-lg`}
        >
          <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
        </motion.div>
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
            {data.title}
          </h3>
        </div>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
      >
        {data.services.map((service, idx) => (
          <ServiceCard
            key={idx}
            service={service}
            index={idx}
            categoryColor={data.color}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export const ServicesPage = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header/>
        {/* Hero Section */}
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
                <span>Complete Healthcare Solutions</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 lg:mb-6"
              >
                Welcome to{' '}
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
                  Medikites
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed px-4"
              >
                Hospital-Quality Care at Your Home
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-10 lg:mb-12 px-4"
              >
                <motion.button
                  onClick={() => setIsBookModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Book Now
                </motion.button>

                <motion.a
                  href="tel:+916200837385"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto px-4"
              >
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                      <Icon className="w-6 h-6 text-emerald-300" />
                      <span className="text-xs lg:text-sm text-white/90 text-center font-medium">
                        {feature.text}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="text-center p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-md hover:shadow-xl transition-all"
                  >
                    <motion.div
                      className="w-12 h-12 lg:w-14 lg:h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </motion.div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Services Sections */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 lg:mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-700 text-sm font-semibold mb-4"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Our Services</span>
              </motion.div>

              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Complete Healthcare Solutions
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Trusted • Professional • Affordable
              </p>
            </motion.div>

            {/* Service Categories */}
            {Object.entries(services).map(([key, data], index) => (
              <CategorySection
                key={key}
                categoryKey={key}
                data={data}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-[#1e3a5f] via-[#2d5a7b] to-[#1a4d6d] relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
                Ready to Experience Quality Healthcare?
              </h2>
              <p className="text-base lg:text-lg text-white/90 mb-8 lg:mb-10 px-4">
                Book your service now and get the best healthcare at your doorstep
              </p>

              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 justify-center px-4"
              >
                <motion.button
                  onClick={() => setIsBookModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Book Service Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.a
                  href="https://wa.me/916200837385"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Us
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
    
      </div>
      <Footer/>
      {/* Book Modal */}
      <BookTestModal 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />
      <WhatsAppButton/>
    </>
  );
};

export default ServicesPage;