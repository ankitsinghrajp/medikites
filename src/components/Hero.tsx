import React, { useState, useEffect } from 'react';
import background1 from "../assets/background-image.jpg";
import background2 from "../assets/roller-painting.jpg"; // Add your second background image

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of background images with their overlay text
  const backgroundData = [
    {
      image: "background1",
      text: "Now painting in EMI"
    },
    {
      image: background2,
      text: "Now finding painter is just a click away"
    }
  ];
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundData.length
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [backgroundData.length]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919630009838?text=Hello%20Painter%20Babu,%20I%20would%20like%20to%20get%20a%20quote%20for%20painting%20services.', '_blank');
  };

  const handleConsultation = () => {
    window.open('https://wa.me/919630009838?text=Hello%20Painter%20Babu,%20I%20would%20like%20to%20schedule%20a%20free%20consultation%20for%20my%20painting%20project.', '_blank');
  };

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Top Image Section */}
      <section className="relative bg-black h-60 lg:h-[500px] xl:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          {backgroundData.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-60' : 'opacity-0'
              }`}
            >
              <img 
                src={item.image} 
                alt={`Professional painting services ${index + 1}`} 
                className="w-full h-full object-cover sm:object-cover object-center"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Image Overlay Text */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-16 sm:pb-20">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="w-full  mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white w-full leading-tight mb-6 sm:mb-8 drop-shadow-2xl">
                {backgroundData[currentImageIndex].text}
              </h2>
            
            </div>
          </div>
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {backgroundData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white shadow-lg ring-2 ring-white/50' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default Hero;