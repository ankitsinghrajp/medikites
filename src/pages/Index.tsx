import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { TestCategoriesSection } from '@/components/home/TestCategories';
import { LocationsSection } from '@/components/home/LocationsSection';
import { CTASection } from '@/components/home/CTASection';
import { LabPartnersSection } from '@/components/home/LabPartnerSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { WhatsAppButton } from '@/components/home/WhatsAppButton';
import ServicesSection from '@/components/home/ServicesSection';

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
        <WhyChooseSection/>
        <CTASection />
        <WhatsAppButton/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
