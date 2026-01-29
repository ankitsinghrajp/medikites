import { MapPin, Navigation, Phone } from 'lucide-react';

const LabLocations = () => {
  const locations = [
    {
      id: 1,
      name: "Thyrocare Diagnostic Lab | Blood Test Centre",
      address: "No-3, Shree Krishna Medical College, Infront Of Gate, near S.K M Ch Medical College, Uma Nagar, Muzaffarpur, Rasulpur Saidpur Bazid, Bihar 842004",
    },
    {
      id: 2,
      name: "Easy Home Care & Diagnostic Service",
      address: "Sri Sai Garden Layout, SBI Bank Colony, Battarahalli, Bengaluru, Karnataka 560016",
    },
    {
      id: 3,
      name: "National Jaanch Ghar",
      address: "Juran Chapra, Brahmapura, Muzaffarpur, Bihar 842001",
    },
    {
      id: 4,
      name: "Ecotown Diagnostics - NABL Accredited",
      address: "1st Floor, AVR Arcade, Bus Stop, NO 7, Ramamurthi Nagar Main Rd, opp. Shell Petrol Bunk, Yerranapalya Extension, Ramamurthy Nagar, Bengaluru, Karnataka 560016",
    },
    {
      id: 5,
      name: "Gayathri Scans And Diagnostics",
      address: "No. 26-27, R S Plaza, Jayanti Nagar Main Rd, next to Biriyani Chef Hotel, Jayanti Nagar, Horamavu, Bengaluru, Karnataka 560016",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Partner Locations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Lab Locations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find our trusted partner diagnostic centers across multiple locations for your convenience
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {locations.map((location) => (
            <div 
              key={location.id}
              className="group relative"
            >
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Icon Container */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Location Name */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-cyan-600 transition-colors">
                      {location.name}
                    </h3>
                  </div>
                </div>

                {/* Address */}
                <div className="flex-1 mb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {location.address}
                  </p>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`, '_blank')}
                  className="w-full flex items-center justify-center gap-2 text-cyan-600 hover:text-white font-semibold text-sm bg-cyan-50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 py-3 rounded-xl transition-all duration-300 group/btn"
                >
                  <Navigation className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LabLocations;