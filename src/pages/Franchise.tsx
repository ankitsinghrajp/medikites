import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Phone, 
  Home,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  ChevronRight,
  Sparkles,
  Star,
  Download,
  Users,
  MapPin,
  Building2,
  Briefcase,
  DollarSign,
  Target,
  Lightbulb,
  Rocket,
  Award,
  LineChart,
  Smartphone,
  HeadphonesIcon,
  FileText,
  Settings,
  BarChart3,
  Stethoscope,
  TestTube,
  Pill,
  Package,
  Globe,
  CheckSquare,
  Calendar,
  MessageSquare,
  X
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/home/WhatsAppButton';
import SEO from '@/seo/SEO';

const trustPoints = [
  { icon: DollarSign, text: 'Low Investment Model', color: 'from-blue-500 to-cyan-500' },
  { icon: Shield, text: 'Full Operational Support', color: 'from-purple-500 to-pink-500' }
];

const visionPillars = [
  { 
    icon: Heart, 
    title: 'Community-Focused Healthcare',
    description: 'Bringing quality healthcare to every neighborhood',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: Smartphone, 
    title: 'Technology-Enabled Operations',
    description: 'Advanced tech for seamless management',
    color: 'from-emerald-500 to-teal-500'
  },
  { 
    icon: LineChart, 
    title: 'Multiple Revenue Streams',
    description: 'Diversified income sources for stability',
    color: 'from-purple-500 to-pink-500'
  }
];

const services = [
  { 
    icon: TestTube, 
    title: 'Diagnostic Lab Tests',
    description: '300+ tests available',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: Stethoscope, 
    title: 'Doctor OPD / Teleconsultation',
    description: 'Online & offline consultation',
    color: 'from-emerald-500 to-teal-500'
  },
  { 
    icon: Pill, 
    title: 'Pharmacy',
    description: 'Complete medicine range',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    icon: Home, 
    title: 'Home Sample Collection',
    description: 'Doorstep service',
    color: 'from-orange-500 to-red-500'
  },
  { 
    icon: Package, 
    title: 'Preventive Health Packages',
    description: 'Comprehensive checkups',
    color: 'from-rose-500 to-pink-500'
  }
];

const backendSupport = [
  { icon: TestTube, text: 'Lab Tie-ups' },
  { icon: Smartphone, text: 'App / Tech Platform' },
  { icon: Users, text: 'Doctor Network' },
  { icon: Target, text: 'Marketing Support' }
];

const revenueStreams = [
  { 
    icon: TestTube, 
    title: 'Diagnostics & Lab Tests',
    description: 'High-margin testing services',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: Stethoscope, 
    title: 'OPD / Online Consultations',
    description: 'Doctor consultation fees',
    color: 'from-emerald-500 to-teal-500'
  },
  { 
    icon: Pill, 
    title: 'Pharmacy Sales',
    description: 'Medicine retail margins',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    icon: Package, 
    title: 'Health Packages',
    description: 'Bundled service offerings',
    color: 'from-orange-500 to-red-500'
  },
  { 
    icon: Building2, 
    title: 'Corporate / Camp Tie-ups',
    description: 'B2B health programs',
    color: 'from-rose-500 to-pink-500'
  }
];

const franchiseModels = [
  {
    name: 'Starter Health Hub',
    badge: 'Perfect for Small Towns',
    area: '300-500 sq ft',
    investment: '₹8-12 Lakhs',
    revenue: '₹50K-80K/month',
    services: ['Basic Diagnostics', 'Pharmacy', 'Home Collection'],
    color: 'from-blue-500 to-cyan-500',
    popular: false
  },
  {
    name: 'Growth Health Hub',
    badge: 'Most Popular',
    area: '500-800 sq ft',
    investment: '₹12-18 Lakhs',
    revenue: '₹1L-1.5L/month',
    services: ['Full Diagnostics', 'OPD', 'Pharmacy', 'Home Services', 'Health Packages'],
    color: 'from-emerald-500 to-teal-500',
    popular: true
  },
  {
    name: 'Premium Health Hub',
    badge: 'For Major Cities',
    area: '800-1200 sq ft',
    investment: '₹18-25 Lakhs',
    revenue: '₹2L-3L/month',
    services: ['Complete Diagnostics', 'Multi-specialty OPD', 'Pharmacy', 'Imaging', 'Corporate Tie-ups'],
    color: 'from-purple-500 to-pink-500',
    popular: false
  }
];

const eligibility = [
  { icon: CheckCircle, text: 'No medical background required' },
  { icon: Briefcase, text: 'Business mindset preferred' },
  { icon: MapPin, text: 'Local area knowledge is a plus' },
  { icon: FileText, text: 'Minimum age & documents' },
  { icon: Award, text: 'Franchise training provided' }
];

const processSteps = [
  { 
    icon: MessageSquare, 
    title: 'Submit Franchise Enquiry',
    description: 'Fill the form with your details',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: MapPin, 
    title: 'Location & Feasibility Review',
    description: 'We assess your location potential',
    color: 'from-emerald-500 to-teal-500'
  },
  { 
    icon: FileText, 
    title: 'Discussion & Proposal',
    description: 'Detailed business plan sharing',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    icon: CheckSquare, 
    title: 'Agreement & Onboarding',
    description: 'Legal documentation completed',
    color: 'from-orange-500 to-red-500'
  },
  { 
    icon: Settings, 
    title: 'Setup, Training & Launch',
    description: 'Complete infrastructure setup',
    color: 'from-rose-500 to-pink-500'
  },
  { 
    icon: Rocket, 
    title: 'Marketing + Operations Go Live',
    description: 'Your franchise is live!',
    color: 'from-indigo-500 to-purple-500'
  }
];

const supportCategories = [
  {
    title: 'Pre-Launch Support',
    icon: Lightbulb,
    color: 'from-blue-500 to-cyan-500',
    items: ['Location guidance', 'Setup checklist', 'Infrastructure planning']
  },
  {
    title: 'Launch Support',
    icon: Rocket,
    color: 'from-emerald-500 to-teal-500',
    items: ['Branding materials', 'Tech & software setup', 'Grand opening campaign']
  },
  {
    title: 'Post-Launch Support',
    icon: HeadphonesIcon,
    color: 'from-purple-500 to-pink-500',
    items: ['Marketing campaigns', 'Operations & analytics', 'Dedicated support manager']
  }
];

const faqs = [
  {
    question: 'Is medical qualification required?',
    answer: 'No, medical qualification is not required. We provide complete training and operational support.'
  },
  {
    question: 'What is the average break-even period?',
    answer: 'Typically 12-18 months depending on location, execution, and local demand.'
  },
  {
    question: 'Who handles lab reports?',
    answer: 'We have tie-ups with NABL-certified labs. Reports are processed and delivered through our system.'
  },
  {
    question: 'Can I add services later?',
    answer: 'Yes, you can scale up and add more services as your business grows.'
  },
  {
    question: 'What if my city already has competition?',
    answer: 'We conduct feasibility studies. Our multi-service model and tech platform give you a competitive edge.'
  },
  {
    question: 'How long does setup take?',
    answer: 'Typically 45-60 days from agreement signing to launch, depending on location readiness.'
  }
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
      duration: 0.4,
      ease: "easeOut"
    },
  },
};

const FranchiseApplicationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    investment: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-emerald-500 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">Apply for Franchise</h3>
              <p className="text-white/90 text-sm mt-1">Start your healthcare business</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
              placeholder="Enter your phone"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              City *
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
              placeholder="Your city"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Investment Range *
            </label>
            <select
              required
              value={formData.investment}
              onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
            >
              <option value="">Select investment range</option>
              <option value="8-12">₹8-12 Lakhs</option>
              <option value="12-18">₹12-18 Lakhs</option>
              <option value="18-25">₹18-25 Lakhs</option>
              <option value="25+">₹25+ Lakhs</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message (Optional)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none resize-none"
              placeholder="Any specific questions?"
            />
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-xs text-emerald-800 flex items-start gap-2">
              <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
              Your information is safe & will only be used for franchise discussion.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            Submit Application
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export const FranchisePage = () => {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <>
      <SEO
        title="Healthcare Franchise Opportunity in India | Start Your Medical Business – Medikites"
        description="Start your healthcare franchise with Medikites. Low investment, high returns. Includes diagnostics, pharmacy, OPD, and home healthcare services. Complete support from setup to operations."
        keywords="healthcare franchise india, medical franchise opportunity, diagnostic franchise, pharmacy franchise, healthcare business opportunity, low investment franchise, medical franchise cost, health clinic franchise"
        canonical="https://medikites.in/franchise"
        image="https://medikites.in/franchise-og-image.jpg"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        
        {/* Hero Section */}
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
            <div className="max-w-3xl mx-auto text-center">
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
                <span>Franchise Opportunity</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Build a Profitable{' '}
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
                  Healthcare Franchise
                </motion.span>
                {' '}in Your City
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-white/90 mb-2"
              >
                Diagnostics • Pharmacy • Doctor Consultation • Home Care
              </motion.p>

              {/* Trust Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-8"
              >
                {trustPoints.map((point, idx) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${point.color} flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-white font-medium">{point.text}</span>
                    </div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-3 justify-center"
              >
                <motion.button
                  onClick={() => setIsApplicationModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  Apply for Franchise
                </motion.button>

              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 lg:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-700 text-sm font-semibold mb-4"
              >
                <Lightbulb className="w-4 h-4" />
                <span>Our Vision</span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why This Franchise Exists
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We started this franchise model to bring affordable, reliable healthcare to every 
                neighborhood while creating sustainable business opportunities for entrepreneurs like you.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visionPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Business Model Section */}
        <section className="py-12 lg:py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 text-emerald-700 text-sm font-semibold mb-4"
              >
                <Building2 className="w-4 h-4" />
                <span>Business Model</span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Exactly Will You Run?
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive healthcare center with multiple service offerings
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Services Offered */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  Services You'll Offer
                </h3>
                <div className="space-y-3">
                  {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{service.title}</p>
                          <p className="text-xs text-gray-500">{service.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Backend Support */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-6 border border-cyan-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  Backend Handled by Brand
                </h3>
                <div className="space-y-4">
                  {backendSupport.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="font-semibold text-gray-900">{item.text}</p>
                        <CheckCircle className="w-5 h-5 text-emerald-500 ml-auto" />
                      </motion.div>
                    );
                  })}
                </div>
                <div className="mt-6 p-4 bg-white rounded-xl border-2 border-emerald-200">
                  <p className="text-sm text-gray-700 font-medium">
                    <Shield className="w-4 h-4 inline mr-2 text-emerald-600" />
                    You focus on operations, we handle the complexity
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Revenue Streams Section */}
        <section className="py-12 lg:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-700 text-sm font-semibold mb-4"
              >
                <DollarSign className="w-4 h-4" />
                <span>Revenue Streams</span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Multiple Income Sources
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Diversified revenue model for stable and growing income
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {revenueStreams.map((stream, idx) => {
                const Icon = stream.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stream.color} flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{stream.title}</h3>
                    <p className="text-gray-600 text-sm">{stream.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl"
            >
              <p className="text-sm text-amber-800 text-center">
                <strong>Disclaimer:</strong> Revenue depends on location, execution, and demand. Figures shown are estimates based on average performance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Franchise Models Section */}
        <section className="py-12 lg:py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-700 text-sm font-semibold mb-4"
              >
                <Target className="w-4 h-4" />
                <span>Investment Options</span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Franchise Model
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Select the model that fits your investment capacity and growth ambitions
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {franchiseModels.map((model, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-white rounded-2xl p-6 shadow-sm border-2 ${
                    model.popular ? 'border-emerald-500 ring-4 ring-emerald-50' : 'border-gray-100'
                  } hover:shadow-xl transition-all relative`}
                >
                  {model.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="px-4 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" fill="currentColor" />
                        {model.badge}
                      </div>
                    </div>
                  )}

                  {!model.popular && (
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-gray-500">{model.badge}</span>
                    </div>
                  )}

                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center mb-4 ${model.popular ? 'mt-4' : ''}`}>
                    <Building2 className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.name}</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Area Required</span>
                      <span className="text-sm font-semibold text-gray-900">{model.area}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Investment</span>
                      <span className="text-sm font-semibold text-gray-900">{model.investment}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-600">Revenue Potential</span>
                      <span className="text-sm font-semibold text-emerald-600">{model.revenue}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-700 mb-3">Services Included:</p>
                    <div className="space-y-2">
                      {model.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setIsApplicationModalOpen(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      model.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Apply for this Model
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-12 lg:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-700 text-sm font-semibold mb-4"
              >
                <Users className="w-4 h-4" />
                <span>Who Can Apply?</span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Eligibility Criteria
              </h2>
              <p className="text-base lg:text-lg text-gray-600">
                We welcome entrepreneurs from all backgrounds
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
            >
              <div className="space-y-4">
                {eligibility.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-900 font-medium">{item.text}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-emerald-100 rounded-xl border border-emerald-200">
                <p className="text-sm text-emerald-800 font-medium text-center">
                  💡 This builds confidence for non-medical investors - you don't need a medical degree to succeed!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-12 lg:py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-700 text-sm font-semibold mb-4"
              >
                <Rocket className="w-4 h-4" />
                <span>Process</span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How the Franchise Process Works
              </h2>
              <p className="text-base lg:text-lg text-gray-600">
                Simple 6-step journey from application to launch
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-purple-200" />

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {processSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -8 }}
                      className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                    >
                      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white font-bold shadow-lg">
                        {idx + 1}
                      </div>

                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-12 lg:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-700 text-sm font-semibold mb-4"
              >
                <Shield className="w-4 h-4" />
                <span>Support System</span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Support You'll Receive
              </h2>
              <p className="text-base lg:text-lg text-gray-600">
                End-to-end assistance at every stage of your journey
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {supportCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>

                    <ul className="space-y-3">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl border border-emerald-200"
            >
              <p className="text-center text-gray-900 font-semibold text-lg">
                <Shield className="w-6 h-6 inline mr-2 text-emerald-600" />
                "This is where clients usually say 'Okay, this is serious.'"
              </p>
            </motion.div>
          </div>
        </section>

     

        {/* FAQ Section */}
        <section className="py-12 lg:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 text-orange-700 text-sm font-semibold mb-4"
              >
                <MessageSquare className="w-4 h-4" />
                <span>FAQs</span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base lg:text-lg text-gray-600">
                Everything you need to know about our franchise
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFaq === idx ? 'auto' : 0,
                      opacity: expandedFaq === idx ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technology Showcase Section */}
        <section className="py-12 lg:py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-700 text-sm font-semibold mb-4"
              >
                <Smartphone className="w-4 h-4" />
                <span>Technology</span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Advanced Tech Platform
              </h2>
              <p className="text-base lg:text-lg text-gray-600">
                Cutting-edge technology to manage your healthcare business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile App</h3>
                <p className="text-gray-600 mb-4">Patient booking, test scheduling, and report delivery</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Easy appointment booking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Digital reports</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Payment integration</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Admin Dashboard</h3>
                <p className="text-gray-600 mb-4">Real-time business analytics and management</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Sales tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Inventory management</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Staff management</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Portal</h3>
                <p className="text-gray-600 mb-4">Complete patient management system</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Patient records</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>History tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Automated reminders</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2d5a7b] to-[#1a4d6d] py-16 lg:py-20 px-4 overflow-hidden">
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

          <div className="max-w-4xl mx-auto text-center relative z-10">
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
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <Rocket className="w-10 h-10 text-emerald-300" />
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Start Your Healthcare Business With a Trusted Brand
              </h2>
              <p className="text-base lg:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join India's growing healthcare franchise network. Low investment, high returns, complete support.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <motion.button
                  onClick={() => setIsApplicationModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.a
                  href="tel:+916200837385"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Talk to Franchise Team
                </motion.a>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>No Hidden Costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Complete Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
      <FranchiseApplicationModal 
        isOpen={isApplicationModalOpen} 
        onClose={() => setIsApplicationModalOpen(false)} 
      />
      <WhatsAppButton />
    </>
  );
};

export default FranchisePage;