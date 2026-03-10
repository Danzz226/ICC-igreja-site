import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const CultosSection = lazy(() => import("@/components/CultosSection"));
const EventosSection = lazy(() => import("@/components/EventosSection"));
const VisaoSection = lazy(() => import("@/components/VisaoSection"));
const DevocionalSection = lazy(() => import("@/components/DevocionalSection"));
const ConhecaNosSection = lazy(() => import("@/components/ConhecaNosSection"));
const PrayerRequestSection = lazy(() => import("@/components/PrayerRequestSection"));
const ContribuaSection = lazy(() => import("@/components/ContribuaSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* ===== Navegação fixa ===== */}
      <Navbar />

      {/* ===== Hero Section ===== */}
      <HeroSection />

      {/* ===== Seções Lazy Loaded ===== */}
      <Suspense fallback={<div className="py-20 flex justify-center"><div className="w-8 h-8 border-4 border-church-gold/30 border-t-church-gold rounded-full animate-spin"></div></div>}>
        <CultosSection />
        <EventosSection />
        <DevocionalSection />
        <VisaoSection />
        <ConhecaNosSection />
        <PrayerRequestSection />
        <ContribuaSection />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
