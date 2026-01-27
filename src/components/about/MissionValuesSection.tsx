import { Target, Heart, ShieldCheck } from 'lucide-react';

export const MissionValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide accessible, accurate, and affordable diagnostic services that empower individuals to take control of their health and wellbeing.',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'We prioritize patient comfort and convenience, offering home collection services and maintaining the highest standards of hygiene and safety.',
      bgGradient: 'from-rose-50 to-pink-50',
      iconColor: 'text-rose-600',
      borderColor: 'border-rose-200',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      description: 'Our laboratory maintains strict quality control measures and follows international standards to ensure accurate and reliable test results.',
      bgGradient: 'from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-200',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
         
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Mission & Values
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Guiding principles that drive our commitment to excellence
          </p>
        </div>

        {/* Values Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            
            return (
              <div
                key={index}
                className="group relative h-full bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-cyan-200"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.bgGradient} ${value.borderColor} border-2 shadow-lg`}>
                    <IconComponent className={`w-10 h-10 ${value.iconColor}`} strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};