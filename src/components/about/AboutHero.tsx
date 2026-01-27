import React, { useState, useEffect } from 'react';
import background from "../../assets/title-image.jpg";

const AboutHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    setIsVisible(true);
  }, []);
 
  return (
    <div className="relative h-[440px] pt-10 md:pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`
        }}
      >
        {/* Dark overlay to match the original design */}
        <div className="absolute inset-0 bg-slate-900/85"></div>
      </div>
             
      {/* Subtle floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-pink-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-pink-200 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute top-60 right-60 w-1 h-1 bg-pink-200 rounded-full opacity-40 animate-pulse"></div>
      </div>
             
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                 
        {/* About Us Title */}
        <h1 
          className={`mb-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            fontFamily: 'Philosopher, sans-serif',
            fontWeight: 600,
            fontSize: '55px',
            lineHeight: '77px',
            color: 'rgb(255, 255, 255)',
            fontStyle: 'normal'
          }}
        >
          About Us
        </h1>
                 
        {/* Description */}
        <div className={`space-y-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p 
            style={{
              fontFamily: '"PT Sans", sans-serif',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '27px',
              color: 'rgb(215, 215, 215)',
              fontStyle: 'normal'
            }}
          >
            <span className="text-blue-400 font-semibold">MediKites</span> is a trusted diagnostic center in Bangalore providing accurate, timely, and comprehensive medical testing with advanced technology and compassionate care.
          </p>
        </div>
                 
        {/* Decorative underline */}
        <div className={`w-32 h-[1px] bg-gradient-to-r from-blue-400 to-transparent mx-auto mt-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
      </div>
     
    </div>
  );
};

export default AboutHeroSection;