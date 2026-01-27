import team1 from "../../assets/Team/team1.jpg";
import team2 from "../../assets/Team/team2.jpg";
import team3 from "../../assets/Team/team3.jpg";

export const ExpertTeamSection = () => {
  const team = [
    {
      image: team1, // Replace with actual image path
      title: 'Lab Technicians',
      description: 'Certified laboratory professionals',
    },
    {
      image: team2, // Replace with actual image path
      title: 'Pathologists',
      description: 'Expert medical specialists',
    },
    {
      image: team3, // Replace with actual image path
      title: 'Quality Control',
      description: 'Ensuring accuracy & precision',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Expert Team
          </h2>
          <p className="text-lg text-gray-600">
            Experienced healthcare professionals dedicated to your health
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.title}
                </h3>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};