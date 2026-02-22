import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInView from "./FadeInView";
import SectionTitle from "./SectionTitle";

import eventoConferencia from "@/assets/evento-conferencia.jpg";
import eventoRetiro from "@/assets/evento-retiro.jpg";
import eventoBazar from "@/assets/evento-bazar.jpg";
import eventoFamilia from "@/assets/evento-familia.jpg";
import eventoLouvor from "@/assets/evento-louvor.jpg";
import igrejaFisica from "@/assets/igreja-fisica.png";
import agendaSemanal from "@/assets/agenda-semanal.png";

const photos = [
  { src: agendaSemanal, alt: "Agenda Semanal da Identidade Church" },
  { src: eventoConferencia, alt: "Conferência de Jovens" },
  { src: igrejaFisica, alt: "Igreja Identidade Church - Mogi das Cruzes" },
  { src: eventoRetiro, alt: "Retiro Espiritual" },
  { src: eventoBazar, alt: "Bazar Beneficente" },
  { src: eventoFamilia, alt: "Encontro de Famílias" },
  { src: eventoLouvor, alt: "Noite de Louvor" },
];

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = photos.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const getIndex = (offset: number) => (current + offset + total) % total;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="section-container">
        <SectionTitle
          title="Galeria"
          subtitle="Momentos especiais da nossa comunidade"
        />

        <FadeInView>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel viewport */}
            <div className="flex items-center justify-center gap-4 md:gap-6 py-4">
              {/* Left image (partially visible) */}
              <div className="hidden md:block w-1/4 flex-shrink-0 overflow-hidden">
                <img
                  src={photos[getIndex(-1)].src}
                  alt={photos[getIndex(-1)].alt}
                  className="w-full aspect-[4/3] object-cover rounded-xl opacity-50 scale-90 blur-[1px] transition-all duration-500"
                />
              </div>

              {/* Center image (fully visible, larger) */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={photos[current].src}
                    alt={photos[current].alt}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                  />
                </AnimatePresence>
              </div>

              {/* Right image (partially visible) */}
              <div className="hidden md:block w-1/4 flex-shrink-0 overflow-hidden">
                <img
                  src={photos[getIndex(1)].src}
                  alt={photos[getIndex(1)].alt}
                  className="w-full aspect-[4/3] object-cover rounded-xl opacity-50 scale-90 blur-[1px] transition-all duration-500"
                />
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-church-dark/80 backdrop-blur-sm flex items-center justify-center text-church-gold hover:bg-church-medium transition-colors shadow-lg z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-church-dark/80 backdrop-blur-sm flex items-center justify-center text-church-gold hover:bg-church-medium transition-colors shadow-lg z-10"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-church-gold w-8"
                      : "bg-border w-3 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default PhotoCarousel;
