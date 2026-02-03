import { motion } from 'framer-motion';
import { Phone, MessageCircle, Check, MapPin, ChevronDown, Zap } from 'lucide-react';
import { useParams } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import BookTestModal from '@/components/home/BookNowModal';
import { servicesData } from '@/data/servicesData';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


export const ServicePage = ({ selectedCity = null }) => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const { slug } = useParams();
  // Get service data based on slug
  const service = servicesData[slug];

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  const ctaButtons = (
    <div className="flex flex-col w-full gap-3">
      <motion.button
        onClick={() => setIsBookModalOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full"
      >
        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 sm:py-6 rounded-full text-base font-semibold transition-all duration-300 gap-2 shadow-lg hover:shadow-xl">
          <Check className="w-5 h-5" />
          Book Now
        </Button>
      </motion.button>

      <div className="grid grid-cols-2 gap-3 w-full">
        <motion.a
          href="tel:+916200837385"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 px-4 py-4 sm:py-6 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 gap-2 shadow-lg hover:shadow-xl">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Call Now
          </Button>
        </motion.a>

        <motion.a
          href="https://wa.me/916200837385"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-4 sm:py-6 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 gap-2 shadow-lg hover:shadow-xl">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            WhatsApp
          </Button>
        </motion.a>
      </div>
    </div>
  );

  const Icon = service.icon;

  return (
    <div className="min-h-screen pb-24 lg:pb-0">
      <Header/>
      {/* 1. Hero Section - Enhanced with Animations */}
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
            {/* Service Icon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Icon className="w-12 h-12 lg:w-16 lg:h-16 text-emerald-300" />
              </div>
            </motion.div>

            {/* Service Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 lg:mb-6"
            >
              {service.name}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed px-4"
            >
              {service.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-10 lg:mb-12 px-4 max-w-md mx-auto"
            >
              {ctaButtons}
            </motion.div>

            {/* Quick Features */}
            {service.quickFeatures && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-3xl mx-auto px-4"
              >
                {service.quickFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-2 p-3 lg:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <Check className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-300" />
                    <span className="text-xs lg:text-sm text-white/90 text-center font-medium">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Service Overview - Mobile First */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">What is this service?</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{service.overview.what}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Who should opt for this?</h3>
              <div className="grid gap-2 sm:gap-3">
                {service.overview.whoShouldOpt.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm"
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. What's Included - Mobile First */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">What's Included</h2>
              <p className="text-sm sm:text-base text-gray-600">Everything you need for quality care</p>
            </motion.div>

            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {service.included.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works - Mobile First */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">How It Works</h2>
              <p className="text-sm sm:text-base text-gray-600">Simple steps to get started</p>
            </motion.div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-shadow h-full">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {index < service.howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-300 to-cyan-300" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. City Availability - Mobile First */}
      <section className="py-10 sm:py-12 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a7b]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">Service Availability</h2>
            </div>
            {selectedCity ? (
              <p className="text-white/90 text-base sm:text-lg">
                ✅ Available in <span className="font-bold text-emerald-300">{selectedCity}</span>
                <br />
                <span className="text-xs sm:text-sm">Home collection within city limits</span>
              </p>
            ) : (
              <p className="text-white/90 text-base sm:text-lg px-4">
                Available in <span className="font-bold">Bangalore, Hyderabad, Delhi, Mumbai, Pune, Chennai</span>
                <br />
                <span className="text-xs sm:text-sm">and 50+ cities across India</span>
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* 6. Pricing - Mobile First */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-emerald-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Transparent Pricing</h2>
              <div className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-2">
                {service.pricing.startingFrom}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.pricing.note}</p>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-700">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                <span>No hidden charges • Transparent billing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. FAQs - Mobile First */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Frequently Asked Questions</h2>
              <p className="text-sm sm:text-base text-gray-600">Everything you need to know</p>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg sm:rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base text-gray-900 pr-3 sm:pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="px-4 pb-3 sm:px-6 sm:pb-4"
                    >
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials - Mobile First */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">What Our Patients Say</h2>
              <p className="text-sm sm:text-base text-gray-600">Real experiences from real people</p>
            </motion.div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              {service.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm"
                >
                  <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400">⭐</div>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Sticky Mobile CTA - Enhanced */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-white shadow-2xl border-t border-gray-200 lg:hidden z-50"
      >
        <Button
          onClick={() => setIsBookModalOpen(true)}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold gap-2 shadow-lg active:scale-95 transition-transform"
        >
          <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
          Book {service.name}
        </Button>
      </motion.div>

      {/* Book Test Modal */}
      <BookTestModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
        <Footer/>
    </div>
  );
};