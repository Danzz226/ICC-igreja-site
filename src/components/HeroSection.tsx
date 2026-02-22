import { motion } from "framer-motion";
import heroCulto from "@/assets/hero-culto.png";

const HeroSection = () => {
  const handleVisit = () => {
    const el = document.querySelector("#contato");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Image */}
      <img
        src={heroCulto}
        alt="Culto da Palavra na Identidade Church"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-church-dark/70 via-church-dark/50 to-church-dark/80" />

      {/* Content */}
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
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Identidade Church
          <br />
          <span className="text-church-gold">Mogi das Cruzes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 font-light"
        >
          Um lugar de fé, acolhimento e transformação através da Palavra de Deus
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button onClick={handleVisit} className="btn-hero text-lg">
            Venha nos visitar
          </button>
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
