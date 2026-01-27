import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { TestCategoriesSection } from '@/components/home/TestCategories';
import { LocationsSection } from '@/components/home/LocationsSection';
import { CTASection } from '@/components/home/CTASection';
import { LabPartnersSection } from '@/components/home/LabPartnerSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TestCategoriesSection />
        <LabPartnersSection/>
        <LocationsSection />
        <WhyChooseSection/>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
