import { Award, ShieldCheck, ClipboardCheck, Users } from 'lucide-react';

export const CertificationsSection = () => {
  const certifications = [
    {
      icon: Award,
      title: 'ISO 15189',
      description: 'Medical Laboratory Quality',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
    {
      icon: ShieldCheck,
      title: 'NABL Accredited',
      description: 'National Accreditation',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Strict Quality Measures',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Users,
      title: 'Certified Staff',
      description: 'Trained Professionals',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Certification & Standards
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Committed to maintaining the highest quality standards
          </p>
        </div>

        {/* Certifications Grid with Dividers */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              
              return (
                <div
                  key={index}
                  className={`group relative flex flex-col items-center text-center p-8 lg:p-10 hover:bg-gradient-to-br hover:from-gray-50 border-2 border-black/10 mx-1 rounded-md hover:to-cyan-50/30 transition-all duration-300
                    ${index !== 0 ? 'md:border-l border-gray-200' : ''}
                    ${index < 2 ? 'lg:border-b-0' : ''}
                    ${index < certifications.length - 2 ? 'md:border-b lg:border-b-0 border-gray-200' : ''}
                  `}
                >
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className={`w-20 h-20 rounded-2xl ${cert.bgColor} ${cert.borderColor} border-2 border-black/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <IconComponent className={`w-10 h-10 ${cert.color}`} strokeWidth={2} />
                    </div>
                    {/* Small indicator dot */}
                    <div className={`absolute -top-1 -right-1 w-4 h-4 ${cert.bgColor} ${cert.borderColor} border-2 rounded-full`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-light">
                    {cert.description}
                  </p>

                  {/* Hover indicator line */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300 rounded-full`} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};