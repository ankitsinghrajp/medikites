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
import ContactHero from '@/components/Contacts/ContactHero';
import MapSection from '@/components/Contacts/MapsSection';
import LabLocations from '@/components/Contacts/LabLocations';
import OperatingHoursEnhanced from '@/components/Contacts/OperatingHours';
import ContactForm from '@/components/Contacts/ContactForm';
import { WhatsAppButton } from '@/components/home/WhatsAppButton';
import PartnerWithUs from '@/components/Contacts/PartnerWithUs';
import SEO from '@/seo/SEO';

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
       <SEO
        title="Contact Medikites | Book Lab Tests & Home Healthcare Services in India"
        description="Contact Medikites to book lab tests at home, diagnostic services, home nursing, ICU setup, and medical equipment rental. Call us or book healthcare services online across India."
        keywords="contact medikites, book lab test at home, contact diagnostic lab, home healthcare contact india, pathology lab contact, medical services booking india"
        canonical="https://medikites.in/contact"
        image="https://medikites.in/og-image.jpg"
      />
      <Header />
      <main>
       <ContactHero/>
       <MapSection/>
       <PartnerWithUs/>
       <LabLocations/>
       <OperatingHoursEnhanced/>
       <ContactForm/>
       <WhatsAppButton/>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
