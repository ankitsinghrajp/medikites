import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Available 24/7 for emergencies',
    value: '+91 123 456 7890',
    action: 'tel:+911234567890',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick responses within minutes',
    value: '+91 987 654 3210',
    action: 'https://wa.me/919876543210',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: "We'll respond within 24 hours",
    value: 'care@medikites.com',
    action: 'mailto:care@medikites.com',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our main diagnostic center',
    value: '123 Healthcare Ave, City',
    action: '#',
    color: 'from-orange-500 to-amber-500',
  },
];

const labLocations = [
  { name: 'Central Lab - Main Branch', address: '123 Healthcare Avenue, Medical District', timing: '6 AM - 10 PM' },
  { name: 'North Zone Lab', address: '456 North Road, Sector 15', timing: '7 AM - 9 PM' },
  { name: 'South Zone Lab', address: '789 South Street, Phase 2', timing: '7 AM - 9 PM' },
  { name: 'East Zone Collection Center', address: '321 East Boulevard, Block C', timing: '8 AM - 6 PM' },
];

const Contact = () => {
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
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Get in Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                We're Here to{' '}
                <span className="text-gradient">Help You</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions about our services? Need to book a test? 
                Our team is available 24/7 to assist you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="block"
                >
                  <div className="glass-card p-6 text-center h-full hover:shadow-elevated transition-all">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} mx-auto mb-4 flex items-center justify-center`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <p className="text-primary font-medium text-sm">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section-padding bg-gradient-to-b from-white to-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="glass-card p-8 rounded-3xl">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      />
                    </div>
                    <Button variant="gradient" size="lg" className="w-full gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Map & Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Map Placeholder */}
                <div className="glass-card rounded-3xl overflow-hidden h-64">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Map Integration</p>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="glass-card p-6 rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-foreground">Operating Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sample Collection</span>
                      <span className="font-medium text-foreground">6 AM - 10 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lab Processing</span>
                      <span className="font-medium text-foreground">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Customer Support</span>
                      <span className="font-medium text-foreground">24/7</span>
                    </div>
                  </div>
                </div>

                {/* Emergency Banner */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-3xl gradient-primary text-white"
                >
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Emergency Services</h3>
                      <p className="text-sm text-white/80 mb-3">
                        For medical emergencies, please call our 24/7 emergency line.
                      </p>
                      <a href="tel:+919999999999" className="text-lg font-bold">
                        +91 999 999 9999
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lab Locations */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Locations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Lab & Collection Centers
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {labLocations.map((lab, index) => (
                <motion.div
                  key={lab.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{lab.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{lab.address}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-accent font-medium">{lab.timing}</span>
                  </div>
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

export default Contact;
