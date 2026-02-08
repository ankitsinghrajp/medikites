import { motion } from 'framer-motion';
import { Phone, MessageCircle, Check, MapPin, ChevronDown, Zap, Star, Pill } from 'lucide-react';
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

const medicineDeliveryData = {
  name: "Medicine Delivery Service",
  subtitle: "Order genuine medicines online with prescription and get them delivered to your doorstep at best prices",
  quickFeatures: [
    "Same Day Delivery",
    "Verified Medicines",
    "Best Prices",
    "Easy Reordering"
  ],
  overview: {
    what: "Order medicines online with prescription and get them delivered to your doorstep. Genuine medicines from verified pharmacies at best prices. Track your orders in real-time and get automatic refill reminders for chronic medications.",
    whoShouldOpt: [
      "Patients needing regular medications",
      "Chronic disease patients requiring monthly refills",
      "Busy professionals who can't visit pharmacies",
      "Elderly unable to visit pharmacies regularly",
      "Anyone seeking convenience and competitive pricing"
    ]
  },
  included: [
    "Prescription medicine delivery",
    "OTC medicines and health products",
    "Verified and genuine medicines",
    "Medicine reminders and alerts",
    "Refill notifications",
    "Easy prescription upload",
    "Order tracking in real-time",
    "Multiple payment options",
    "Expert pharmacist consultation"
  ],
  howItWorks: [
    {
      step: 1,
      title: "Upload Prescription",
      description: "Share prescription online or via WhatsApp easily"
    },
    {
      step: 2,
      title: "Verify & Confirm",
      description: "Pharmacist verifies order and confirms availability"
    },
    {
      step: 3,
      title: "Processing",
      description: "Medicines packed securely with quality checks"
    },
    {
      step: 4,
      title: "Home Delivery",
      description: "Delivered to your doorstep safely and on time"
    }
  ],
  faqs: [
    {
      question: "Do I need a prescription to order medicines?",
      answer: "Yes, for prescription medicines you need to upload a valid prescription from a registered medical practitioner. However, you can order OTC (over-the-counter) medicines and health products without a prescription."
    },
    {
      question: "How long does delivery take?",
      answer: "We offer same-day delivery for orders placed before 2 PM in metro cities. For other areas, delivery typically takes 24-48 hours. You can track your order in real-time through our app or website."
    },
    {
      question: "Are the medicines genuine?",
      answer: "Absolutely! We source all medicines directly from authorized distributors and verified pharmaceutical companies. Every medicine is quality-checked and comes with proper batch numbers and expiry dates. We guarantee 100% authenticity."
    },
    {
      question: "Can I return medicines if needed?",
      answer: "Yes, you can return unopened medicines within 7 days if there's a quality issue or wrong delivery. However, due to health and safety regulations, opened medicines cannot be returned. Contact our customer support for the return process."
    },
    {
      question: "How can I set up automatic refills?",
      answer: "After your first order, you can enable auto-refill for chronic medications. We'll send you reminders before your medicines run out and can automatically process refills with your consent. You can manage this through your account settings."
    }
  ],
  testimonials: [
    {
      name: "Arun Kumar",
      location: "Chennai",
      review: "Very convenient medicine delivery service. All medicines were genuine and delivered on time. Great prices too!"
    },
    {
      name: "Priya Iyer",
      location: "Pune",
      review: "Ordering my father's monthly medicines is now so easy. The reminder feature ensures we never run out of stock."
    },
    {
      name: "Sanjay Gupta",
      location: "Bangalore",
      review: "Same day delivery is a lifesaver! Got my prescription medicines within 4 hours. Highly professional service."
    },
    {
      name: "Divya Reddy",
      location: "Hyderabad",
      review: "Better prices than local pharmacies and the convenience of home delivery. The prescription upload is super easy too."
    }
  ]
};

export const MedicineDeliveryPage = ({ selectedCity = null }) => {
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
        <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 gap-2 shadow-lg hover:shadow-xl">
          <Pill className="w-5 h-5" />
          Order Medicines
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
    <div className="min-h-screen pb-20 lg:pb-0 bg-gradient-to-b from-emerald-50 to-white">
      <Header/>
      
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-[#059669] via-[#10b981] to-[#047857] pt-24 pb-12 px-4 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-72 h-72 lg:w-[500px] lg:h-[500px] bg-teal-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 w-72 h-72 lg:w-[500px] lg:h-[500px] bg-emerald-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 bg-green-300/15 rounded-full blur-3xl"
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
                className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Pill className="w-12 h-12 lg:w-16 lg:h-16 text-emerald-100" />
              </motion.div>
            </motion.div>

            {/* Service Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              {medicineDeliveryData.name}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base lg:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              {medicineDeliveryData.subtitle}
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
              {medicineDeliveryData.quickFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
                >
                  <Check className="w-5 h-5 text-emerald-200" />
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
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{medicineDeliveryData.overview.what}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Who should opt for this?</h3>
            <div className="space-y-3">
              {medicineDeliveryData.overview.whoShouldOpt.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-emerald-100 hover:border-emerald-200 transition-colors"
                >
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section className="py-12 lg:py-16 px-4 bg-gradient-to-b from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">What's Included</h2>
            <p className="text-sm lg:text-base text-gray-600">Everything you need for hassle-free medicine ordering</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
          >
            {medicineDeliveryData.included.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-emerald-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm lg:text-base text-gray-700 font-medium leading-snug">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-sm lg:text-base text-gray-600">Simple steps to get your medicines delivered</p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {medicineDeliveryData.howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-5 shadow-md border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all h-full">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-lg font-bold mb-4 shadow-md"
                    whileHover={{ rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < medicineDeliveryData.howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. City Availability */}
      <section className="py-12 px-4 bg-gradient-to-br from-[#059669] to-[#10b981] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"
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
              <MapPin className="w-6 h-6 text-emerald-200" />
              <h2 className="text-2xl lg:text-3xl font-bold text-white">Service Availability</h2>
            </div>
            {selectedCity ? (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
                <p className="text-white text-lg">
                  ✅ Available in <span className="font-bold text-emerald-200">{selectedCity}</span>
                </p>
                <p className="text-white/80 text-sm mt-2">Medicine delivery within city limits</p>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
                <p className="text-white text-base lg:text-lg">
                  Available in <span className="font-bold text-emerald-200">Bangalore, Hyderabad, Delhi, Mumbai, Pune, Chennai</span>
                </p>
                <p className="text-white/80 text-sm mt-2">and 50+ cities across India with same-day delivery</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-sm lg:text-base text-gray-600">Everything you need to know</p>
          </motion.div>

          <div className="space-y-3">
            {medicineDeliveryData.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm border-2 border-emerald-100 overflow-hidden hover:border-emerald-300 transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-emerald-50 transition-colors"
                >
                  <span className="font-semibold text-sm lg:text-base text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-emerald-600 flex-shrink-0" />
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
                  <div className="px-5 pb-4 bg-emerald-50/50">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-12 lg:py-16 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">What Our Patients Say</h2>
            <p className="text-sm lg:text-base text-gray-600">Real experiences from real people</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2"
          >
            {medicineDeliveryData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white p-5 rounded-2xl border-2 border-emerald-100 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all"
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
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md">
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
        className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-2xl border-t-2 border-emerald-200 lg:hidden z-50"
      >
        <Button
          onClick={() => setIsBookModalOpen(true)}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-4 rounded-2xl text-base font-semibold gap-2 shadow-lg active:scale-95 transition-transform"
        >
          <Pill className="w-5 h-5" />
          Order Medicines Now
        </Button>
      </motion.div>

      {/* Book Test Modal */}
      <BookTestModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
      <Footer/>
    </div>
  );
};