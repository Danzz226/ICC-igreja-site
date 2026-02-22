import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CultosSection from "@/components/CultosSection";
import EventosSection from "@/components/EventosSection";
import VisaoSection from "@/components/VisaoSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import ConhecaNosSection from "@/components/ConhecaNosSection";
import ContribuaSection from "@/components/ContribuaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CultosSection />
      <EventosSection />
      <VisaoSection />
      <PhotoCarousel />
      <ConhecaNosSection />
      <ContribuaSection />
      <Footer />
    </main>
  );
};

export default Index;
