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
import AboutHeroSection from '@/components/about/AboutHero';
import { WhoWeAreSection } from '@/components/about/WhoWeAre';
import { MissionValuesSection } from '@/components/about/MissionValuesSection';
import { CertificationsSection } from '@/components/about/CertificationSection';
import { ExpertTeamSection } from '@/components/about/ExpertTeamSection';
import { CTASection } from '@/components/home/CTASection';
import { WhatsAppButton } from '@/components/home/WhatsAppButton';

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
       
       <AboutHeroSection/>
       <WhoWeAreSection/>
       <MissionValuesSection/>
       <CertificationsSection/>
       <ExpertTeamSection/>
      <WhatsAppButton/>
      </main>
      <Footer />
    </div>
  );
};

export default About;
