import { motion } from 'framer-motion';
import { Phone, MessageCircle, Zap, List, Calendar, Home, MapPin, Stethoscope, Activity, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from "react";
import heroImageFirst from "../../assets/hero-image-1.jpg";
import heroImageSecond from "../../assets/hero-image-2.jpg";
import heroImageThird from "../../assets/hero-image-3.jpg";

import mobileImageFirst from "../../assets/mobile-image-1.webp";
import mobileImageSecond from "../../assets/mobile-image-2.jpg";
import mobileImageThird from "../../assets/mobile-image-3.jpg";
import BookTestModal from './BookNowModal';
const floatingCards = [
  {
    icon: Home,
    title: 'Home Care',
    description: 'Professional care at home',
    delay: 0.3,
    position: 'top-20 -right-4 lg:right-8',
  },
  {
    icon: Stethoscope,
    title: 'Diagnostics',
    description: '500+ tests available',
    delay: 0.5,
    position: 'top-48 -right-8 lg:right-0',
  },
  {
    icon: Activity,
    title: 'Quick Results',
    description: 'Within 24 hours',
    delay: 0.7,
    position: 'bottom-20 -right-4 lg:right-12',
  },
];

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  
  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Array of background images with their content
  const backgroundData = [
    {
      image: heroImageFirst,
      mobileImage: mobileImageFirst,
      title: "Your Health, Our Priority",
      description: "Get accurate diagnostic results with 300+ tests across 10 key health categories. Home collection available.",
      buttons: [
        { text: "Call Now", icon: Phone, variant: "white", link: "tel:+916200837385", action: "link" },
        { text: "WhatsApp", icon: MessageCircle, variant: "green", link: "https://wa.me/916200837385", action: "link" },
        { text: "Book Urgent Test", icon: Zap, variant: "red", action: "modal" }
      ]
    },
    {
      image: heroImageSecond,
      mobileImage: mobileImageSecond,
      title: "Advanced Diagnostic Testing",
      description: "State-of-the-art laboratory equipment ensuring precise and reliable test results for your peace of mind.",
      buttons: [
        { text: "View Tests", icon: List, variant: "white", link: "/tests", action: "link" },
        { text: "Schedule Now", icon: Calendar, variant: "dark", action: "modal" }
      ]
    },
    {
      image: heroImageThird,
      mobileImage: mobileImageThird,
      title: "Convenient Home Collection",
      description: "Get your tests done in the comfort of your home with our professional phlebotomy service.",
      buttons: [
        { text: "Book Home Collection", icon: Home, variant: "white", action: "modal" },
        { text: "Visit Lab", icon: MapPin, variant: "outline", link: "/contact", action: "link" }
      ]
    }
  ];
  
  // Auto-slide functionality - 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundData.length
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const currentSlide = backgroundData[currentImageIndex];

  // Button style variants
  const getButtonStyle = (variant) => {
    switch(variant) {
      case 'white':
        return 'bg-white hover:bg-gray-100 text-gray-900 shadow-lg hover:shadow-xl';
      case 'green':
        return 'bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl';
      case 'red':
        return 'bg-[#FF0000] hover:bg-[#E60000] text-white shadow-lg hover:shadow-xl';
      case 'dark':
        return 'bg-gray-900 hover:bg-gray-800 text-white border-2 border-white/30 shadow-lg hover:shadow-xl';
      case 'outline':
        return 'bg-transparent hover:bg-white/10 text-white border-2 border-white shadow-lg hover:shadow-xl';
      default:
        return 'bg-white hover:bg-gray-100 text-gray-900 shadow-lg hover:shadow-xl';
    }
  };

  // Handle button click
  const handleButtonClick = (button, e) => {
    if (button.action === 'modal') {
      e.preventDefault();
      setIsBookModalOpen(true);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        {/* Background Image Slider with Brighter Overlay */}
        <div className="absolute inset-0 z-0">
          {backgroundData.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={isMobile ? item.mobileImage : item.image}
                alt={item.title} 
                className="w-full h-full object-cover opacity-85 brightness-90 contrast-90"
              />
              {/* Lighter overlay for brighter, more vibrant look */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Background Animated Elements - Brighter colors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content - Dynamic based on slide */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/30 backdrop-blur-sm border border-emerald-300/50 text-white text-sm font-medium mb-6 shadow-lg"
              >
                <Shield className="w-4 h-4" />
                <span>Trusted by 50,000+ Families</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
              >
                {currentSlide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow-md font-medium"
              >
                {currentSlide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start flex-wrap"
              >
                {currentSlide.buttons.map((button, index) => (
                  button.action === 'modal' ? (
                    <button
                      key={index}
                      onClick={(e) => handleButtonClick(button, e)}
                      className="w-full sm:w-auto"
                    >
                      <Button 
                        className={`${getButtonStyle(button.variant)} px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 gap-2 group w-full`}
                      >
                        <button.icon className="w-5 h-5" />
                        {button.text}
                      </Button>
                    </button>
                  ) : (
                    <a 
                      key={index}
                      href={button.link}
                      className="w-full sm:w-auto"
                    >
                      <Button 
                        className={`${getButtonStyle(button.variant)} px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 gap-2 group w-full`}
                      >
                        <button.icon className="w-5 h-5" />
                        {button.text}
                      </Button>
                    </a>
                  )
                ))}
              </motion.div>

              {/* Stats - Only show on first slide */}
              {currentImageIndex === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-3 gap-6 sm:gap-8 mt-12 pt-8 border-t border-white/30"
                >
                  {[
                    { value: '10+', label: 'Years Experience' },
                    { value: '300+', label: 'Tests Available' },
                    { value: '50K+', label: 'Happy Patients' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-emerald-300 to-green-300 text-transparent bg-clip-text drop-shadow-lg">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/90 font-medium drop-shadow">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Right Content - Illustration Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Main Visual */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Central Circle with brighter colors */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-8 rounded-full border-2 border-dashed border-cyan-300/50"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-16 rounded-full border-2 border-dashed border-emerald-300/50"
                />

                {/* Center Content with brighter gradient */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 via-emerald-400 to-green-400 shadow-2xl shadow-cyan-400/60 flex items-center justify-center"
                  >
                    <div className="text-center text-white">
                      <Stethoscope className="w-16 h-16 mx-auto mb-2 drop-shadow-lg" />
                      <span className="font-bold text-lg drop-shadow-lg">24/7 Care</span>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Cards with brighter colors */}
                {floatingCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: card.delay }}
                    className={`absolute ${card.position}`}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl p-4 min-w-[180px] shadow-2xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center shadow-lg">
                          <card.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm drop-shadow">
                            {card.title}
                          </div>
                          <div className="text-xs text-white/90 drop-shadow">
                            {card.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Indicators with brighter colors */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {backgroundData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50 ring-2 ring-white/50 scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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