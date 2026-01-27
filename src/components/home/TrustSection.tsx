import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Happy Patients',
    description: 'Families trust us',
  },
  {
    icon: Shield,
    value: '500+',
    label: 'Tests Available',
    description: 'Comprehensive catalogue',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years Experience',
    description: 'In healthcare',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support',
    description: 'Always available',
  },
];

const partners = [
  'Apollo Diagnostics',
  'Thyrocare',
  'SRL Diagnostics',
  'Metropolis',
  'Dr Lal PathLabs',
  'NABL Certified',
];

export const TrustSection = () => {
  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      {/* Decorative Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-primary text-sm font-medium mb-4 shadow-soft">
            Trusted by Thousands
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Health, Our <span className="text-gradient">Priority</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join thousands of families who trust Medikites for their healthcare needs.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                className="w-14 h-14 rounded-2xl gradient-primary mx-auto mb-4 flex items-center justify-center shadow-soft"
              >
                <stat.icon className="w-7 h-7 text-white" />
              </motion.div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 rounded-3xl"
        >
          <p className="text-center text-muted-foreground mb-6 font-medium">
            Our Trusted Partners & Certifications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-muted-foreground/60 hover:text-primary transition-colors font-semibold text-sm sm:text-base"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
