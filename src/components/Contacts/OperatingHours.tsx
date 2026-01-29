import { Clock, Calendar, Home } from 'lucide-react';

const OperatingHoursEnhanced = () => {
  const schedule = [
    {
      id: 1,
      icon: Calendar,
      days: 'Monday - Saturday',
      hours: '6:00 AM - 9:00 PM',
      color: 'bg-teal-50 text-teal-600 border-teal-200',
      textColor: 'text-teal-600'
    },
    {
      id: 2,
      icon: Calendar,
      days: 'Sunday',
      hours: '6:00 AM - 9:00 PM',
      color: 'bg-teal-50 text-teal-600 border-teal-200',
      textColor: 'text-teal-600'
    },
    {
      id: 3,
      icon: Home,
      days: 'Home Collection',
      hours: '24/7 Available',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      textColor: 'text-blue-600',
      special: true
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal-100 mb-4 md:mb-6">
            <Clock className="w-8 h-8 md:w-10 md:h-10 text-teal-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            Operating Hours
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to serve you during these hours
          </p>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid gap-4 md:gap-6 mb-8">
          {schedule.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl border-2 ${item.color} p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Left Side - Days */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 ${item.textColor} flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg  font-bold text-gray-800">
                        {item.days}
                      </h3>
                      {item.special && (
                        <p className="text-xs md:text-sm text-gray-600 mt-1">
                          Anytime, anywhere service
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Hours */}
                  <div className={`text-xl font-bold ${item.textColor} sm:text-right`}>
                    {item.hours}
                  </div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -right-8 -bottom-8 w-24 h-24 md:w-32 md:h-32 rounded-full ${item.color} opacity-20 group-hover:scale-150 transition-transform duration-500`} />
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
};

export default OperatingHoursEnhanced;