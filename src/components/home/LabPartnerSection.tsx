import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import companyOne from "../../assets/lab-images/company-one.jpg";
import companyTwo from "../../assets/lab-images/company-two.png";
import companyThree from "../../assets/lab-images/company-three.png";
import companyFour from "../../assets/lab-images/Healthians_Logo.jpg";
import companyFive from "../../assets/lab-images/Labridge.png";
import companySix from "../../assets/lab-images/agilus.jpg";
import companySeven from "../../assets/lab-images/dr-lal-path.png";
import companyEigth from "../../assets/lab-images/thyrocare.jpg";

const labPartners = [
  {
    name: 'General Diagnostics',
    logo: companyOne,
  },
  {
    name: 'Orange Health Labs',
    logo: companyTwo,
  },
  {
    name: 'Healthians',
    logo: companyFour,
  },
  {
    name: 'Labridge',
    logo: companyFive,
  },
  {
    name: 'Agilus Diagnostics',
    logo: companySix,
  },
  {
    name: 'Dr. Lal PathLabs',
    logo: companySeven,
  },
  {
    name: 'Thyrocare',
    logo: companyEigth,
  },
  {
    name: 'Advanced Diagnostics',
    logo: companyThree,
  },
];

export const LabPartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Get items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 cards
      if (window.innerWidth >= 768) return 2;  // Tablet: 2 cards
      return 1; // Mobile: 1 card
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  // Update items per view on resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isHovered, itemsPerView]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = labPartners.length - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = labPartners.length - itemsPerView;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate total dots needed
  const totalDots = labPartners.length - itemsPerView + 1;

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
            <span className="text-xs lg:text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent uppercase tracking-wider">
              Trusted Partners
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Our Trusted Lab Partners
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
            We collaborate with India's leading diagnostic laboratories to ensure accurate and reliable test results
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Buttons - Hidden on Mobile */}
          <button
            onClick={handlePrev}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>

          <button
            onClick={handleNext}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 group"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Cards Container */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out gap-4 lg:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {labPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * (itemsPerView === 3 ? 24 : 16)) / itemsPerView}px)` }}
                >
                  <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-md hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-blue-200 h-40 lg:h-48 relative overflow-hidden">
                    {/* Subtle gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/50 group-hover:to-cyan-50/50 transition-all duration-300" />
                    
                    {/* Logo */}
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="relative max-w-[140px] lg:max-w-[160px] w-full h-auto object-contain transition-all duration-300 group-hover:scale-110 filter grayscale-[30%] group-hover:grayscale-0"
                      loading="lazy"
                    />

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-8 h-2 bg-gradient-to-r from-blue-500 to-cyan-500'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden items-center justify-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-10 lg:mt-12">
          <p className="text-xs lg:text-sm text-gray-500 font-medium">
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              All labs are NABL & ISO certified for quality assurance
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};