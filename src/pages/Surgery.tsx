import { motion } from 'framer-motion';
import { Phone, MessageCircle, Check, MapPin, ChevronDown, Zap, Star, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import BookTestModal from '@/components/home/BookNowModal';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

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

const surgeryData = {
  name: "Advanced Surgical Care",
  subtitle: "Expert surgical procedures with state-of-the-art technology and experienced surgeons at affordable costs",
  quickFeatures: [
    "Experienced Surgeons",
    "Modern Equipment",
    "Post-Op Care",
    "Insurance Support"
  ],
  overview: {
    what: "Access comprehensive surgical services ranging from minor procedures to major surgeries. Our team of skilled surgeons, anesthetists, and support staff ensure safe, effective surgical interventions with advanced technology and patient-centered care.",
    whoShouldOpt: [
      "Patients requiring elective surgical procedures",
      "Emergency surgery cases requiring immediate intervention",
      "Individuals seeking minimally invasive surgical options",
      "Patients needing specialized surgical expertise",
      "Those looking for comprehensive pre and post-operative care"
    ]
  },
  included: [
    "Pre-operative consultation and assessment",
    "Advanced surgical equipment and technology",
    "Experienced surgical team",
    "Anesthesia services",
    "Post-operative monitoring and care",
    "Recovery room facilities",
    "Follow-up consultations",
    "Surgical reports and documentation",
    "Emergency support 24/7"
  ],
  howItWorks: [
    {
      step: 1,
      title: "Consultation",
      description: "Book appointment with our specialist surgeon for initial assessment"
    },
    {
      step: 2,
      title: "Pre-Op Tests",
      description: "Complete necessary medical tests and evaluations before surgery"
    },
    {
      step: 3,
      title: "Surgery",
      description: "Procedure performed by expert surgical team in modern facility"
    },
    {
      step: 4,
      title: "Recovery",
      description: "Post-operative care and monitoring until complete recovery"
    }
  ],
  faqs: [
    {
      question: "What types of surgeries do you perform?",
      answer: "We perform a wide range of surgeries including general surgery, orthopedic procedures, gynecological surgeries, ENT procedures, urology, ophthalmology, and minimally invasive laparoscopic surgeries. Our team can handle both planned and emergency surgical cases."
    },
    {
      question: "How long is the recovery time after surgery?",
      answer: "Recovery time varies depending on the type of surgery performed. Minor procedures may require a few days to a week, while major surgeries might need several weeks to months. Our team will provide you with a detailed recovery plan and timeline specific to your procedure."
    },
    {
      question: "Do you accept insurance for surgical procedures?",
      answer: "Yes, we work with most major insurance providers. Our team will help you verify your coverage and handle the insurance claim process. We also offer flexible payment plans for those without insurance coverage."
    },
    {
      question: "What safety measures are in place during surgery?",
      answer: "We maintain the highest safety standards with modern sterilization protocols, advanced monitoring equipment, experienced anesthesiologists, and a dedicated infection control team. All our operating rooms are equipped with state-of-the-art technology and emergency backup systems."
    },
    {
      question: "Can I get a second opinion before surgery?",
      answer: "Absolutely! We encourage patients to make informed decisions. You can request a second opinion from another specialist in our network, and we'll provide all necessary medical records and test results to facilitate the consultation."
    }
  ],
  testimonials: [
    {
      name: "Rajesh Sharma",
      location: "Mumbai",
      review: "Had my knee replacement surgery here. The surgical team was exceptional, and the post-operative care was outstanding. I'm walking pain-free now. Highly recommend!"
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad",
      review: "The laparoscopic surgery was minimally invasive as promised. Quick recovery and the doctors were very supportive throughout. Great facilities and professional staff."
    },
    {
      name: "Vikram Singh",
      location: "Delhi",
      review: "Emergency appendectomy was handled swiftly and professionally. The entire team from admission to discharge was caring and competent. Thank you for saving my life!"
    },
    {
      name: "Lakshmi Nair",
      location: "Bangalore",
      review: "The cataract surgery was painless and the results are amazing. I can see clearly now! The pre-op counseling and post-op care were excellent."
    }
  ]
};

export const SurgeryPage = ({ selectedCity = null }) => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const ctaButtons = (
    <div className="flex flex-col w-full gap-3">
      <motion.button
        onClick={() => setIsBookModalOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full"
      >
        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 gap-2 shadow-lg hover:shadow-xl">
          <Activity className="w-5 h-5" />
          Book Consultation
        </Button>
      </motion.button>

      <div className="grid grid-cols-2 gap-3 w-full">
        <motion.a
          href="tel:+916200837385"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 px-4 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 gap-2 shadow-md hover:shadow-lg border border-gray-200">
            <Phone className="w-4 h-4" />
            Call
          </Button>
        </motion.a>

        <motion.a
          href="https://wa.me/916200837385"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 gap-2 shadow-md hover:shadow-lg">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </motion.a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pb-20 lg:pb-0 bg-gradient-to-b from-gray-50 to-white">
      <Header/>
      
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e40af] via-[#3b82f6] to-[#1e3a8a] pt-24 pb-12 px-4 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-indigo-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-blue-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            {/* Service Icon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <motion.div 
                className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Activity className="w-12 h-12 lg:w-16 lg:h-16 text-blue-200" />
              </motion.div>
            </motion.div>

            {/* Service Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              {surgeryData.name}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base lg:text-lg text-white/90 mb-8 leading-relaxed"
            >
              {surgeryData.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-10 max-w-md mx-auto"
            >
              {ctaButtons}
            </motion.div>

            {/* Quick Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto"
            >
              {surgeryData.quickFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <Check className="w-5 h-5 text-blue-200" />
                  <span className="text-xs lg:text-sm text-white/90 text-center font-medium leading-tight">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Service Overview */}
      <section className="py-12 lg:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">What is this service?</h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{surgeryData.overview.what}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Who should opt for this?</h3>
            <div className="space-y-3">
              {surgeryData.overview.whoShouldOpt.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm lg:text-base text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. What's Included */}
      <section className="py-12 lg:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">What's Included</h2>
            <p className="text-sm lg:text-base text-gray-600">Comprehensive surgical care package</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
          >
            {surgeryData.included.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm lg:text-base text-gray-700 font-medium leading-snug">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-12 lg:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-sm lg:text-base text-gray-600">Your surgical journey in 4 simple steps</p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {surgeryData.howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-lg font-bold mb-4 shadow-md"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < surgeryData.howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. City Availability */}
      <section className="py-12 px-4 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-blue-200" />
              <h2 className="text-2xl lg:text-3xl font-bold text-white">Service Availability</h2>
            </div>
            {selectedCity ? (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <p className="text-white text-lg">
                  ✅ Available in <span className="font-bold text-blue-200">{selectedCity}</span>
                </p>
                <p className="text-white/80 text-sm mt-2">Advanced surgical facilities in your city</p>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <p className="text-white text-base lg:text-lg">
                  Available in <span className="font-bold text-blue-200">Bangalore, Hyderabad, Delhi, Mumbai, Pune, Chennai</span>
                </p>
                <p className="text-white/80 text-sm mt-2">and 40+ cities across India with modern surgical facilities</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-12 lg:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-sm lg:text-base text-gray-600">Everything you need to know about surgical care</p>
          </motion.div>

          <div className="space-y-3">
            {surgeryData.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-sm lg:text-base text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-12 lg:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">What Our Patients Say</h2>
            <p className="text-sm lg:text-base text-gray-600">Real experiences from successful surgeries</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2"
          >
            {surgeryData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm lg:text-base text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm lg:text-base text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-2xl border-t border-gray-200 lg:hidden z-50"
      >
        <Button
          onClick={() => setIsBookModalOpen(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl text-base font-semibold gap-2 shadow-lg active:scale-95 transition-transform"
        >
          <Activity className="w-5 h-5" />
          Book Consultation
        </Button>
      </motion.div>

      {/* Book Test Modal */}
      <BookTestModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
      <Footer/>
    </div>
  );
};