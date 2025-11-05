import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AddYourOwnSection from '@/components/AddYourOwnSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AddYourOwnSection />
      <TestimonialsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
