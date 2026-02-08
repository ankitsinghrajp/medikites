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
  ArrowRight,
  HeartPulse,
  TestTube,
  FileHeart,
  Zap,
  ChevronRight,
  Sparkles,
  Star,
  Video,
  ShoppingBag,
  Briefcase
} from 'lucide-react';
import BookTestModal from '@/components/home/BookNowModal';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/home/WhatsAppButton';
import SEO from '@/seo/SEO';

const services = {
  homeHealthcare: {
    title: 'Home Healthcare',
    icon: Home,
    color: 'from-blue-500 to-cyan-500',
    services: [
      { 
        name: 'Home Attendant / Caretaker', 
        slug: 'home-attendant-caretaker',
        icon: UserRound, 
        description: '24/7 professional care' 
      },
      { 
        name: 'Skilled Home Nursing', 
        slug: 'skilled-home-nursing',
        icon: Heart, 
        description: 'Certified medical care' 
      },
      { 
        name: 'Baby Care & Elderly Care', 
        slug: 'baby-elderly-care',
        icon: Baby, 
        description: 'Specialized age care' 
      },
      { 
        name: 'Physiotherapy at Home', 
        slug: 'physiotherapy-at-home',
        icon: Activity, 
        description: 'Expert therapy sessions' 
      },
      { 
        name: 'ICU Setup at Home', 
        slug: 'icu-setup-at-home',
        icon: BedDouble, 
        description: 'Hospital-grade ICU' 
      }
    ]
  },
   telemedicine: {
    title: 'Telemedicine',
    icon: Video,
    color: 'from-indigo-500 to-purple-500',
    services: [
      { 
        name: 'Online Video Consultation', 
        slug: 'online-video-consultation',
        icon: Video, 
        description: 'Always accessible' 
      }
    ]
  },
  pharmacy: {
    title: 'Pharmacy',
    icon: ShoppingBag,
    color: 'from-green-500 to-emerald-500',
    services: [
      { 
        name: 'Pharmacy', 
        slug: 'pharmacy',
        icon: ShoppingBag, 
        description: 'Instant meds solutions' 
      }
    ]
  },
  corporateHealth: {
    title: 'Corporate Health',
    icon: Briefcase,
    color: 'from-amber-500 to-orange-500',
    services: [
      { 
        name: 'Corporate Wellness', 
        slug: 'corporate-wellness',
        icon: Briefcase, 
        description: 'Healthy workforce' 
      }
    ]
  },
  onCallMedical: {
    title: 'On-Call Medical',
    icon: Phone,
    color: 'from-emerald-500 to-teal-500',
    services: [
      { 
        name: 'Injection & IV Infusion', 
        slug: 'injection-iv-infusion',
        icon: Syringe, 
        description: 'Safe administration' 
      },
      { 
        name: 'Wound Dressing', 
        slug: 'wound-dressing-at-home',
        icon: Shield, 
        description: 'Professional care' 
      },
      { 
        name: "Ryle's Tube / Catheter", 
        slug: 'ryles-tube-catheter-change',
        icon: Pill, 
        description: 'Expert management' 
      },
      { 
        name: 'Tracheostomy Care', 
        slug: 'tracheostomy-care',
        icon: Wind, 
        description: 'Respiratory care' 
      },
      { 
        name: 'Cannulation Insertion', 
        slug: 'cannulation-insertion',
        icon: Activity, 
        description: 'IV line insertion' 
      }
    ]
  },
  diagnostics: {
    title: 'Diagnostic Services',
    icon: Microscope,
    color: 'from-purple-500 to-pink-500',
    services: [
      { 
        name: 'Master Health Check-ups', 
        slug: 'master-health-checkups',
        icon: FileHeart, 
        description: 'Complete screening' 
      },
      { 
        name: 'Blood Tests at Home', 
        slug: 'blood-tests-at-home',
        icon: TestTube, 
        description: '300+ tests available' 
      },
      { 
        name: 'Thyroid | Diabetes | Cardiac', 
        slug: 'thyroid-diabetes-cardiac-tests',
        icon: HeartPulse, 
        description: 'Specialized tests' 
      },
      { 
        name: 'Infertility & Hormonal', 
        slug: 'infertility-hormonal-test',
        icon: Activity, 
        description: 'Hormonal profiling' 
      },
      { 
        name: 'Cancer Screening | Genetic', 
        slug: 'cancer-genetic-tests',
        icon: Microscope, 
        description: 'Advanced testing' 
      },
      { 
        name: 'Biological Age Test', 
        slug: 'biological-age-test',
        icon: Clock, 
        description: 'Know your age' 
      }
    ]
  },
  imaging: {
    title: 'Imaging & Scans',
    icon: Scan,
    color: 'from-orange-500 to-red-500',
    services: [
      { 
        name: 'X-Ray & ECG at Home', 
        slug: 'xray-ecg-at-home',
        icon: Activity, 
        description: 'Portable imaging' 
      },
      { 
        name: 'X-Ray | Ultrasound', 
        slug: 'xray-ultrasound',
        icon: Scan, 
        description: 'Digital facility' 
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
        description: 'Advanced imaging' 
      }
    ]
  },
  equipment: {
    title: 'Medical Equipment',
    icon: BedDouble,
    color: 'from-rose-500 to-pink-500',
    services: [
      { 
        name: 'Oxygen Concentrator', 
        slug: 'oxygen-concentrator-cylinder',
        icon: Wind, 
        description: 'Respiratory support' 
      },
      { 
        name: 'Ventilator | BiPAP | CPAP', 
        slug: 'ventilator-bipap-cpap',
        icon: Activity, 
        description: 'Breathing assistance' 
      },
      { 
        name: 'Hospital Bed | Wheelchair', 
        slug: 'hospital-bed-wheelchair',
        icon: BedDouble, 
        description: 'Mobility solutions' 
      },
      { 
        name: 'ICU Monitor | DVT Pump', 
        slug: 'icu-monitor-dvt-pump',
        icon: Activity, 
        description: 'Critical equipment' 
      },
      { 
        name: 'Air Mattress | Suction', 
        slug: 'air-mattress-suction-machine',
        icon: BedDouble, 
        description: 'Comfort devices' 
      }
    ]
  },
 
};

const stats = [
  { number: '10+', label: 'Years', icon: Clock },
  { number: '300+', label: 'Tests', icon: TestTube },
  { number: '50K+', label: 'Patients', icon: Heart },
  { number: '24/7', label: 'Support', icon: Shield }
];

const features = [
  { icon: Shield, text: 'Certified Professionals', color: 'from-blue-500 to-cyan-500' },
  { icon: Clock, text: '24/7 Availability', color: 'from-emerald-500 to-teal-500' },
  { icon: Home, text: 'Home Service', color: 'from-purple-500 to-pink-500' },
  { icon: CheckCircle, text: 'Affordable Pricing', color: 'from-orange-500 to-red-500' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    },
  },
};

const ServiceCard = ({ service, categoryColor, index }) => {
  const Icon = service.icon;
  
  return (
    <Link to={`/services/${service.slug}`}>
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
      >
        <div className="flex items-start gap-3">
          <motion.div 
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-5 h-5 text-white" />
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 mb-1 leading-snug group-hover:text-cyan-600 transition-colors">
              {service.name}
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>

          <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-cyan-500 group-hover:translate-x-1 flex-shrink-0 mt-0.5 transition-all duration-300" />
        </div>
      </motion.div>
    </Link>
  );
};

const CategorySection = ({ data, index }) => {
  const Icon = data.icon;
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-10"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5 px-4 lg:px-0">
        <motion.div 
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${data.color} flex items-center justify-center shadow-md`}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {data.title}
          </h3>
          <p className="text-xs text-gray-500">{data.services.length} Services Available</p>
        </div>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 lg:px-0"
      >
        {data.services.map((service, idx) => (
          <ServiceCard
            key={idx}
            service={service}
            categoryColor={data.color}
            index={idx}
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
       <SEO
        title="Healthcare Services at Home in India | Nursing, ICU, Lab Tests – Medikites"
        description="Explore Medikites healthcare services including home nursing, ICU setup at home, lab tests at home, diagnostic services, medical equipment rental, X-ray, ECG, and on-call medical services across India."
        keywords="healthcare services at home, home nursing services, ICU setup at home india, lab tests at home india, diagnostic services india, medical equipment rental india, xray at home, ECG at home, home medical services india, on call doctor services"
        canonical="https://medikites.in/services"
        image="https://medikites.in/og-image.jpg"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header/>
        
        {/* Hero Section - Mobile First with Desktop Enhancement */}
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2d5a7b] to-[#1a4d6d] pt-24 pb-12 px-4 overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-emerald-500/20 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-6xl pt-5 mx-auto relative z-10">
            <div className="max-w-2xl mx-auto lg:max-w-3xl text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-white text-xs font-medium mb-5"
              >
                <motion.div 
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
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
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
                className="text-base md:text-lg text-white/90 mb-8"
              >
                Hospital-Quality Care at Your Home
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-10"
              >
                <motion.button
                  onClick={() => setIsBookModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Book Service Now
                </motion.button>

                <motion.a
                  href="tel:+916200837385"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>
              </motion.div>

              {/* Quick Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3"
              >
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                      <motion.div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <span className="text-xs text-white/90 text-center font-medium leading-tight">
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
        <section className="bg-white py-8 px-4 border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-4 gap-4 lg:gap-8"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="text-center p-3 lg:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <motion.div
                      className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                    </motion.div>
                    <div className="text-xl lg:text-2xl font-bold text-gray-900 mb-0.5">
                      {stat.number}
                    </div>
                    <div className="text-[10px] lg:text-xs text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 px-4"
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

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Complete Healthcare Solutions
              </h2>
              <p className="text-sm lg:text-base text-gray-600">
                Trusted • Professional • Affordable
              </p>
            </motion.div>

            {/* Service Categories */}
            <div className="space-y-8 lg:space-y-12">
              {Object.entries(services).map(([key, data], index) => (
                <CategorySection
                  key={key}
                  data={data}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2d5a7b] to-[#1a4d6d] py-12 lg:py-16 px-4 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-emerald-500/20 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <Star className="w-8 h-8 text-yellow-300" fill="currentColor" />
              </motion.div>

              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Ready for Quality Healthcare?
              </h2>
              <p className="text-sm lg:text-base text-white/90 mb-8">
                Book your service now and get the best care at your doorstep
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                <motion.button
                  onClick={() => setIsBookModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  Book Service Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.a
                  href="https://wa.me/916200837385"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer/>
      <BookTestModal 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />
      <WhatsAppButton/>
    </>
  );
};

export default ServicesPage;