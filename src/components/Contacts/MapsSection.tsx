import { MapPin, MessageCircle, Phone, Navigation } from 'lucide-react';

const MapSection = () => {
  const locationData = {
    title: "922, 5th A Cross Rd",
    fullAddress: "922, 5th A Cross Rd, HRBR Layout 1st Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043",
    shortAddress: "No 88-250-5AC-922, HRBR 1st Block, Kalyan Nagar, Bengaluru, Bengaluru Urban, Karnataka, 560043",
    phone: "+91 62008 37385",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4789!2d77.6389!3d13.0289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzQ0LjAiTiA3N8KwMzgnMjAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionsUrl: "https://www.google.com/maps/dir//922,+5th+A+Cross+Rd,+HRBR+Layout+1st+Block,+HRBR+Layout,+Kalyan+Nagar,+Bengaluru,+Karnataka+560043",
    whatsappUrl: "https://wa.me/916200837385",
  };

  const handleCallNow = () => {
    window.location.href = `tel:${locationData.phone}`;
  };

  const handleWhatsApp = () => {
    window.open(locationData.whatsappUrl, '_blank');
  };

  const handleDirections = () => {
    window.open(locationData.directionsUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl -z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Visit Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find Us Here
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conveniently located in Bengaluru. We're here to serve you with professional healthcare services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Map Container */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
            
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-5 px-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Our Location</h3>
                </div>
                <button
                  onClick={handleDirections}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl backdrop-blur-sm transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span className="text-sm font-medium">Directions</span>
                </button>
              </div>
              
              {/* Google Map */}
              <div className="relative w-full h-[450px] lg:h-[520px]">
                <iframe
                  src={locationData.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Location Map"
                />
                
                {/* Zoom Instruction */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white px-5 py-2.5 rounded-full text-sm backdrop-blur-md shadow-lg">
                  Use <kbd className="px-2 py-1 bg-white/20 rounded mx-1">Ctrl</kbd> + scroll to zoom
                </div>

                {/* Location Info Overlay */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-5 max-w-[300px] border border-gray-100">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base mb-1">{locationData.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {locationData.fullAddress}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleDirections}
                    className="w-full flex items-center justify-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold text-sm bg-cyan-50 hover:bg-cyan-100 py-2.5 rounded-xl transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Our Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {locationData.shortAddress}
                    </p>
                    <button
                      onClick={handleDirections}
                      className="mt-4 inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold text-sm group/btn"
                    >
                      <Navigation className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Call Us</h3>
                    <a 
                      href={`tel:${locationData.phone}`}
                      className="text-xl font-bold text-cyan-600 hover:text-cyan-700 transition-colors block mb-4"
                    >
                      {locationData.phone}
                    </a>
                    <button
                      onClick={handleCallNow}
                      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">WhatsApp</h3>
                    <a 
                      href={locationData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors block mb-4"
                    >
                      {locationData.phone}
                    </a>
                    <button
                      onClick={handleWhatsApp}
                      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;