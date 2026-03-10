import { motion } from "framer-motion";
import { MapPin, Play } from "lucide-react";
import heroCulto from "@/assets/hero-culto.png";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@identidadeemcristochurchmogi";

const HeroSection = () => {
  const handleVisit = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Imagem de fundo: no mobile foca no pastor (lado direito da foto horizontal) */}
      <img
        src={heroCulto}
        alt="Culto na Identidade Church em Mogi das Cruzes"
        className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
      />

      {/* Overlay escuro para contraste e legibilidade */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.6)), linear-gradient(to bottom, rgba(30,42,56,0.75), rgba(30,42,56,0.5), rgba(30,42,56,0.8))",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-church-gold font-sans text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            Bem-vindo à nossa família
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Identidade Church
          <br />
          <span className="text-church-gold">Mogi das Cruzes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/95 text-lg md:text-xl max-w-2xl mb-2 font-medium"
        >
          Uma igreja para você e sua família em Mogi das Cruzes
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-sm md:text-base max-w-xl mb-8 font-light"
        >
          Domingo 10h · Quinta 19h30
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <button
            onClick={handleVisit}
            className="btn-hero text-lg inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold focus-visible:ring-offset-2 focus-visible:ring-offset-church-dark"
            aria-label="Ver localização e visitar a igreja"
          >
            <MapPin className="h-5 w-5" />
            Visitar a igreja
          </button>
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-3 text-lg font-semibold transition-all duration-300 border-2 border-white/90 text-white hover:bg-white/10 hover:border-church-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold focus-visible:ring-offset-2 focus-visible:ring-offset-church-dark"
            aria-label="Assistir culto no YouTube"
          >
            <Play className="h-5 w-5" />
            Assistir culto
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-church-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
