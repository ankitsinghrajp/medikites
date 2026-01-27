import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TestCategoriesSection } from '@/components/home/TestCategoriesSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { TrustSection } from '@/components/home/TrustSection';
import { LocationsSection } from '@/components/home/LocationsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestCategoriesSection />
        <WhyChooseSection />
        <TrustSection />
        <LocationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
