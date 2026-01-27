import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  Shield, 
  Heart, 
  Award, 
  Users, 
  Target, 
  Lightbulb,
  BadgeCheck,
  Star
} from 'lucide-react';

const stats = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '50,000+', label: 'Happy Patients' },
  { value: '500+', label: 'Tests Offered' },
  { value: '8', label: 'Cities Covered' },
];

const values = [
  {
    icon: Heart,
    title: 'Patient-First Care',
    description: 'Every decision we make puts patient comfort and health outcomes at the center.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'NABL certified processes with strict quality control at every step.',
  },
  {
    icon: Target,
    title: 'Accuracy',
    description: 'State-of-the-art equipment and trained professionals ensure precise results.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously adopting latest technologies to improve healthcare delivery.',
  },
];

const team = [
  { name: 'Dr. Priya Sharma', role: 'Chief Medical Officer', experience: '15+ years' },
  { name: 'Dr. Rajesh Kumar', role: 'Head of Diagnostics', experience: '12+ years' },
  { name: 'Dr. Anita Patel', role: 'Quality Assurance Lead', experience: '10+ years' },
  { name: 'Vikram Singh', role: 'Operations Director', experience: '8+ years' },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About Medikites
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Redefining Healthcare{' '}
                <span className="text-gradient">Delivery</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Since 2014, we've been on a mission to make quality healthcare accessible, 
                affordable, and convenient for every family across India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-gradient-to-b from-white to-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Born from a Vision to Transform Healthcare
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Medikites was founded with a simple yet powerful vision: to bring 
                    hospital-quality healthcare to every home. We recognized that access 
                    to quality diagnostics shouldn't require long hospital waits or 
                    complicated procedures.
                  </p>
                  <p>
                    Today, we've grown into a comprehensive healthcare services provider, 
                    offering everything from home sample collection to medical equipment 
                    rental, serving thousands of families across multiple cities.
                  </p>
                  <p>
                    Our commitment to accuracy, affordability, and patient comfort remains 
                    unwavering as we continue to expand our services and reach.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card p-8 rounded-3xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: BadgeCheck, text: 'NABL Accredited' },
                      { icon: Award, text: 'ISO Certified' },
                      { icon: Users, text: '50K+ Patients' },
                      { icon: Star, text: '4.8 Rating' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 rounded-2xl bg-white/50 text-center"
                      >
                        <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-sm font-medium text-foreground">{item.text}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                What Drives Us Every Day
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding gradient-hero">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Leadership Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Meet Our Experts
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.experience}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
