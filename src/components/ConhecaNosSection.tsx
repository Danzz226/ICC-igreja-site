import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Heart, BookOpen, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";
import FadeInView from "./FadeInView";

const slides = [
  {
    titulo: "Nossa História",
    texto:
      "Fundada com o propósito de levar a Palavra de Deus à comunidade de Mogi das Cruzes, nossa igreja nasceu do sonho de criar um espaço de acolhimento e transformação. Ao longo dos anos, temos crescido em fé e em número, impactando famílias e vidas.",
    icon: BookOpen,
  },
  {
    titulo: "Nosso Pastor",
    texto:
      "Nosso pastor lidera com dedicação e amor, guiando a congregação pelo caminho da verdade. Com anos de experiência no ministério, ele é comprometido com o ensino fiel da Bíblia e o pastoreio cuidadoso de cada membro.",
    icon: Heart,
  },
  {
    titulo: "Missão e Valores",
    texto:
      "Nossa missão é servir a Deus e à comunidade com excelência. Acreditamos na importância da família, da comunhão entre os irmãos, do ensino bíblico sólido e do serviço ao próximo como pilares fundamentais da nossa fé.",
    icon: Users,
  },
];

const ConhecaNosSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section id="conheca-nos" className="section-padding bg-background">
      <div className="section-container">
        <SectionTitle
          title="Conheça-nos"
          subtitle="Saiba mais sobre quem somos e no que acreditamos"
        />

        <FadeInView>
          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="card-church p-8 md:p-12 text-center min-h-[320px] flex flex-col items-center justify-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-church-dark flex items-center justify-center">
                <slide.icon className="h-7 w-7 text-church-gold" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {slide.titulo}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                {slide.texto}
              </p>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-church-dark flex items-center justify-center text-church-gold hover:bg-church-medium transition-colors shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-church-dark flex items-center justify-center text-church-gold hover:bg-church-medium transition-colors shadow-lg"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-church-gold w-8"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default ConhecaNosSection;
