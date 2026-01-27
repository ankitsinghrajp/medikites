import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
  { city: 'Delhi', labs: 12, active: true },
  { city: 'Mumbai', labs: 8, active: true },
  { city: 'Bangalore', labs: 6, active: true },
  { city: 'Chennai', labs: 5, active: true },
  { city: 'Hyderabad', labs: 4, active: true },
  { city: 'Pune', labs: 3, active: false },
  { city: 'Kolkata', labs: 3, active: false },
  { city: 'Ahmedabad', labs: 2, active: false },
];

export const LocationsSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Presence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Available Across <span className="text-gradient">Major Cities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Expanding our network to bring quality healthcare closer to you.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div
                className={`relative w-32 h-32 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                  location.active
                    ? 'glass-card shadow-soft group-hover:shadow-glow'
                    : 'bg-secondary/50 border border-border/30'
                }`}
              >
                {/* Glow Effect for Active */}
                {location.active && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                  />
                )}

                {/* Content */}
                <div className="relative z-10 text-center">
                  <MapPin
                    className={`w-6 h-6 mx-auto mb-2 ${
                      location.active ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  />
                  <div
                    className={`font-semibold ${
                      location.active ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {location.city}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {location.labs} Labs
                  </div>
                </div>

                {/* Coming Soon Badge */}
                {!location.active && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-medium whitespace-nowrap">
                    Coming Soon
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
