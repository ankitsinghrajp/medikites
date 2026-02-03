import { motion } from 'framer-motion';
import { Search, Calendar, Home, FlaskConical, FileText, HeadphonesIcon, Phone, MessageCircle, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from "react";
import BookTestModal from './BookNowModal';

export const HowItWorksSection = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Choose Your Service",
      description: "Browse from 300+ diagnostic tests, health checkups, home healthcare services, or medical equipment rentals. Use filters by test type, category, or city to find exactly what you need.",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      bgGradient: "from-violet-500/20 to-fuchsia-500/20",
      lightGradient: "from-violet-100 to-fuchsia-100"
    },
    {
      number: "02",
      icon: Calendar,
      title: "Book Instantly",
      description: "Book your test in seconds via call, WhatsApp, or online booking form. Select your preferred date & time for home sample collection or center visit.",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-500/20 to-cyan-500/20",
      lightGradient: "from-emerald-100 to-cyan-100"
    },
    {
      number: "03",
      icon: Home,
      title: "Sample Collection",
      description: "Our trained medical professionals visit your home on time for blood & diagnostic sample collection, on-call medical services, and equipment delivery & setup.",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      bgGradient: "from-blue-500/20 to-purple-500/20",
      lightGradient: "from-blue-100 to-purple-100"
    },
    {
      number: "04",
      icon: FlaskConical,
      title: "Accurate Testing",
      description: "Samples are processed at trusted, NABL-certified partner labs using advanced diagnostic technology to ensure accurate results.",
      gradient: "from-orange-600 via-red-600 to-rose-600",
      bgGradient: "from-orange-500/20 to-rose-500/20",
      lightGradient: "from-orange-100 to-rose-100"
    },
    {
      number: "05",
      icon: FileText,
      title: "Get Your Reports",
      description: "Receive your digital reports via WhatsApp / email within the promised turnaround time (Same Day / 24 Hours).",
      gradient: "from-pink-600 via-rose-600 to-red-600",
      bgGradient: "from-pink-500/20 to-red-500/20",
      lightGradient: "from-pink-100 to-red-100"
    },
    {
      number: "06",
      icon: HeadphonesIcon,
      title: "Follow-Up Support",
      description: "Need help understanding reports or booking another service? Our support team is just a call or WhatsApp message away.",
      gradient: "from-cyan-600 via-sky-600 to-blue-600",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      lightGradient: "from-cyan-100 to-blue-100"
    }
  ];

  const trustPoints = [
    { text: "50,000+ happy families", icon: "👨‍👩‍👧‍👦" },
    { text: "300+ tests & packages", icon: "🧪" },
    { text: "Home collection", icon: "🏠" },
    { text: "Transparent pricing", icon: "💰" },
    { text: "Multi-city coverage", icon: "🇮🇳" }
  ];

  return (
    <>
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(148 163 184 / 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(148 163 184 / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-300/40 to-fuchsia-300/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-300/40 to-emerald-300/40 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
          </motion.div>

           <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Medikites Works?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Simple. Fast. Reliable Healthcare at Your Doorstep.
          </p>
        </motion.div>

          {/* Innovative Timeline/Pathway Design */}
          <div className="max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <div className="relative">
              {/* Connecting Path - Desktop (Zigzag) */}
              <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                  <motion.path
                    d="M 100 100 Q 300 100, 400 200 T 800 200 Q 900 200, 1000 300 T 1100 500"
                    stroke="url(#pathGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Vertical Timeline Line - Mobile */}
              <div className="lg:hidden absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 via-fuchsia-400 to-cyan-400 opacity-40" />

              {/* Steps Layout */}
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.7 }}
                    className={`relative ${index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-24'}`}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <div className="group relative pl-16 lg:pl-0">
                      {/* Mobile Timeline Dot */}
                      <motion.div 
                        className={`lg:hidden absolute left-4 top-8 w-5 h-5 rounded-full bg-gradient-to-br ${step.gradient} border-4 border-white shadow-lg z-20`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring" }}
                      />

                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                        animate={activeStep === index ? { opacity: 0.3 } : { opacity: 0 }}
                      />
                      
                      {/* Main Content */}
                      <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    

                        {/* Icon */}
                        <motion.div
                          className="relative mb-4 sm:mb-6"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-2xl`}>
                            <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                          </div>
                         
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          {step.description}
                        </p>

                        {/* Decorative Corner */}
                        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden opacity-10">
                          <div className={`absolute -bottom-12 -right-12 sm:-bottom-16 sm:-right-16 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br ${step.gradient}`} />
                        </div>

                        {/* Progress Indicator */}
                        <motion.div
                          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.gradient}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                        />
                      </div>

                      {/* Step Number - Side Display (Desktop only) */}
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
                        <motion.div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl border-4 border-white`}
                          whileHover={{ scale: 1.2 }}
                        >
                          <span className="text-white font-bold text-sm">{step.number}</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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