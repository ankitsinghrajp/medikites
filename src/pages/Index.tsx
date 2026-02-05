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
import SEO from '@/seo/SEO';
import MediaCoverage from '@/components/mediaCoverage';

const Index = () => {
  return (
    <div className="min-h-screen">
       <SEO
        title="Medikites – Diagnostic Lab & Home Healthcare Services in India | Book Tests at Home"
        description="Medikites offers trusted diagnostic lab tests at home, home healthcare services, ICU setup at home, medical equipment rental, and on-call medical services across India. Book blood tests and healthcare services online."
        keywords="diagnostic lab in india, lab tests at home, blood test at home, home healthcare services, ICU setup at home, medical equipment rental, pathology lab near me, diagnostic services india, healthcare services at home, book lab test online"
        canonical="https://medikites.in/"
        image="https://medikites.in/og-image.jpg"
      />
      <Header />
      <main>
        <HeroSection />
        <MediaCoverage/>
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
