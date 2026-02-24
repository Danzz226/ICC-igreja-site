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
      {/* ===== Navegação fixa ===== */}
      <Navbar />

      {/* ===== Hero Section ===== */}
      <HeroSection />

      {/* ===== Seção: Nossos Cultos ===== */}
      <CultosSection />

      {/* ===== Seção: Próximos Eventos ===== */}
      <EventosSection />

      {/* ===== Seção: Visão da Igreja ===== */}
      <VisaoSection />

      {/* ===== Seção: Galeria de Fotos ===== */}
      <PhotoCarousel />

      {/* ===== Seção: Conheça-nos ===== */}
      <ConhecaNosSection />

      {/* ===== Seção: Contribua ===== */}
      <ContribuaSection />

      {/* ===== Rodapé / Contato ===== */}
      <Footer />
    </main>
  );
};

export default Index;
