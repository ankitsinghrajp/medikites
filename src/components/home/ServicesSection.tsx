import { motion } from 'framer-motion';
import { 
  Home, 
  Stethoscope, 
  Activity, 
  Scan, 
  Pill, 
  HeartPulse,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Home,
    title: 'Home Healthcare',
    description: 'Professional nursing care, physiotherapy, and medical assistance delivered to your doorstep.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: Stethoscope,
    title: 'On-Call Doctors',
    description: 'Expert physicians available 24/7 for consultations, emergencies, and routine check-ups.',
    color: 'from-teal-500 to-emerald-500',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-500',
  },
  {
    icon: Activity,
    title: 'Diagnostic Services',
    description: 'Comprehensive blood tests, health screenings, and pathology services with home sample collection.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: Scan,
    title: 'Imaging & Scans',
    description: 'X-rays, ECG, ultrasound, and advanced imaging services at our partner diagnostic centers.',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: Pill,
    title: 'Medical Equipment',
    description: 'Rent wheelchairs, oxygen concentrators, hospital beds, and more for home care needs.',
    color: 'from-rose-500 to-red-500',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: HeartPulse,
    title: 'Health Packages',
    description: 'Curated preventive health checkups designed for different age groups and health concerns.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[100px]" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-[100px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Healthcare
            <br />
            <span className="text-gradient">At Your Fingertips</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From diagnostics to home care, we offer a complete range of medical services
            designed for your comfort and convenience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass-card h-full p-8 hover:shadow-elevated transition-all duration-300">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="gradient" size="lg" className="gap-2">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
