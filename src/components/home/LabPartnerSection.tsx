import companyOne from "../../assets/lab-images/company-one.jpg";
import companyTwo from "../../assets/lab-images/company-two.png";
import companyThree from "../../assets/lab-images/company-three.png";

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
    name: 'Predi Labs',
    logo: companyThree,
  },
];

export const LabPartnersSection = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Our Trusted Lab Partners
          </h2>
          <p className="text-base lg:text-lg text-gray-600">
            We collaborate with India's leading diagnostic laboratories
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {labPartners.map((partner) => (
            <div 
              key={partner.name} 
              className="group bg-white rounded-2xl p-10 lg:p-12 shadow-md hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-blue-200"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[180px] w-full h-auto object-contain transition-all duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};