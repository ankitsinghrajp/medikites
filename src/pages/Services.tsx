import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  Home, 
  Stethoscope, 
  Activity, 
  Scan, 
  Pill, 
  HeartPulse,
  Syringe,
  Thermometer,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Home,
    title: 'Home Healthcare Services',
    description: 'Comprehensive medical care delivered to your doorstep by trained professionals.',
    features: ['24/7 Nursing Care', 'Physiotherapy', 'Post-Surgery Care', 'Elderly Care'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Stethoscope,
    title: 'On-Call Medical Services',
    description: 'Expert physicians and specialists available round the clock for consultations.',
    features: ['Doctor Visits', 'Emergency Care', 'Specialist Consultations', 'Health Monitoring'],
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Activity,
    title: 'Diagnostic Services',
    description: 'Comprehensive pathology and diagnostic tests with home sample collection.',
    features: ['Blood Tests', 'Urine Analysis', 'Stool Tests', 'Allergy Panels'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Scan,
    title: 'Imaging & Scans',
    description: 'Advanced imaging services at our partner diagnostic centers.',
    features: ['X-Ray', 'Ultrasound', 'ECG', 'CT Scan Referrals'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Pill,
    title: 'Medical Equipment Rental',
    description: 'Quality medical equipment available for rent for home care needs.',
    features: ['Wheelchairs', 'Oxygen Concentrators', 'Hospital Beds', 'CPAP/BiPAP'],
    color: 'from-rose-500 to-red-500',
  },
  {
    icon: HeartPulse,
    title: 'Health Packages',
    description: 'Curated preventive health checkup packages for different needs.',
    features: ['Full Body Checkup', 'Cardiac Screening', 'Diabetes Panel', 'Senior Citizen'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Syringe,
    title: 'Vaccination Services',
    description: 'Safe and convenient vaccination services at your home.',
    features: ['Flu Shots', 'COVID Vaccines', 'Child Immunization', 'Travel Vaccines'],
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Thermometer,
    title: 'Preventive Health',
    description: 'Regular health monitoring and preventive care programs.',
    features: ['BP Monitoring', 'Sugar Tests', 'BMI Analysis', 'Diet Counseling'],
    color: 'from-cyan-500 to-blue-500',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
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
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Complete Healthcare{' '}
                <span className="text-gradient">Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From diagnostics to home care, we offer comprehensive medical services 
                designed for your comfort and convenience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="glass-card p-8 h-full hover:shadow-elevated transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-primary relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Need Healthcare Assistance?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Our team is available 24/7 to help you with any healthcare needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Book a Service
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Call Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
