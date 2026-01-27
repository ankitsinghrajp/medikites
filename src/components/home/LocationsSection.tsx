import bangaloreImage from "../../assets/cities/bangaluru.jpg";
import delhiImage from "../../assets/cities/delhi.avif";
import hyderabadImage from "../../assets/cities/hyderabad.avif";
import mumbaiImage from "../../assets/cities/mumbai.avif";
import patnaImage from "../../assets/cities/patna.avif";
import muzaffarPurImage from "../../assets/cities/muzaffarpur.jpg";
import kolkataImage from "../../assets/cities/kolkata.avif";

export const LocationsSection = () => {
  const cities = [
    {
      name: 'Bangalore',
      image: bangaloreImage,
    },
    {
      name: 'Delhi',
      image: delhiImage,
    },
    {
      name: 'Hyderabad',
      image: hyderabadImage,
    },
    {
      name: 'Mumbai',
      image: mumbaiImage,
    },
    {
      name: 'Patna',
      image: patnaImage,
    },
    {
      name: 'Muzaffarpur',
      image: muzaffarPurImage,
    },
    {
      name: 'Kolkata',
      image: kolkataImage,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            We are available across India
          </h2>

        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {cities.map((city, index) => (
            <div
              key={city.name}
              className="flex flex-col items-center group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* City Image Circle */}
              <div className="relative mb-4">
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                
                {/* Image Container */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:border-blue-100">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* City Name */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                {city.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};