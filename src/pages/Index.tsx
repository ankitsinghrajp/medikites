import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { TestCategoriesSection } from '@/components/home/TestCategories';
import { LocationsSection } from '@/components/home/LocationsSection';
import { CTASection } from '@/components/home/CTASection';
import { LabPartnersSection } from '@/components/home/LabPartnerSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';

import ServicesSection from '@/components/home/ServicesSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection/>
        <TestCategoriesSection />
        <LabPartnersSection/>
        <LocationsSection />
        <HowItWorksSection/>
        <TestimonialsSection/>
        <WhyChooseSection/>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
