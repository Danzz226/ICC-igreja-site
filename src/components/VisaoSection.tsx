import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeInView from "./FadeInView";
import visaoPlaca from "@/assets/visao-placa.png";

const VisaoSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="visao"
      ref={ref}
      className="relative overflow-hidden section-padding"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-10 -bottom-10 bg-church-dark"
      />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--church-gold)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 section-container">
        <FadeInView>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Plaque image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-2xl max-w-md">
                <img
                  src={visaoPlaca}
                  alt="Placa da Visão da Identidade Church"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
              </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-church-gold text-sm uppercase tracking-[0.3em] mb-6">
                Nossa Visão
              </p>
              <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-8">
                "Transformar positivamente as pessoas através do ensino e conhecimento
                da Palavra de Deus"
              </blockquote>
              <div className="gold-separator mx-auto lg:mx-0" />
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default VisaoSection;
