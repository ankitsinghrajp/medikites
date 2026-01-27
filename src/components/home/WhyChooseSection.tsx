import { motion } from 'framer-motion';
import { 
  Home, 
  Clock, 
  BadgeCheck, 
  Wallet,
  HeartHandshake,
  Shield
} from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Home Collection',
    description: 'Our trained phlebotomists visit your home for sample collection at your preferred time.',
  },
  {
    icon: Clock,
    title: 'Quick Results',
    description: 'Get accurate test results within 24-48 hours, directly on your phone or email.',
  },
  {
    icon: BadgeCheck,
    title: 'NABL Accredited',
    description: 'All our partner labs are NABL certified, ensuring the highest quality standards.',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with no hidden charges. We offer the best rates in the industry.',
  },
  {
    icon: HeartHandshake,
    title: 'Caring Staff',
    description: 'Our healthcare professionals are trained to provide compassionate and gentle care.',
  },
  {
    icon: Shield,
    title: 'Safe & Hygienic',
    description: 'We follow strict safety protocols with disposable equipment for every patient.',
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Healthcare Made{' '}
            <span className="text-gradient">Simple & Trustworthy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We combine medical excellence with convenience to provide you with the best healthcare experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-soft hover:shadow-elevated transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-bold shadow-soft">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
