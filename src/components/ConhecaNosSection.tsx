import { useState } from "react";
import { Heart, BookOpen, Users, Target, Handshake, Church } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import FadeInView from "./FadeInView";

type TabKey = "pastor" | "historia" | "missao";

const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "pastor", label: "Nosso Pastor", icon: Heart },
  { key: "historia", label: "Nossa História", icon: BookOpen },
  { key: "missao", label: "Missão e Valores", icon: Users },
];

const valoresItems = [
  { icon: Target, titulo: "Missão", texto: "Levar a Palavra de Deus a todas as pessoas, promovendo transformação espiritual e social na comunidade de Mogi das Cruzes." },
  { icon: Church, titulo: "Fé", texto: "Cremos na Bíblia como a Palavra inspirada de Deus e no poder transformador do Evangelho de Jesus Cristo." },
  { icon: Handshake, titulo: "Comunhão", texto: "Valorizamos a união entre os irmãos, o acolhimento e o fortalecimento mútuo como família de Deus." },
  { icon: Heart, titulo: "Amor ao Próximo", texto: "Servir ao próximo com generosidade e compaixão, refletindo o amor de Cristo em todas as nossas ações." },
];

const tabContent: Record<TabKey, React.ReactNode> = {
  pastor: (
    <div className="space-y-6">
      <p className="text-muted-foreground text-lg leading-relaxed">
        Nosso pastor lidera com dedicação e amor, guiando a congregação pelo caminho da verdade. Com anos de experiência no ministério, ele é comprometido com o ensino fiel da Bíblia e o pastoreio cuidadoso de cada membro.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Sempre disponível para ouvir e orientar, nosso pastor acredita que a liderança pastoral deve ser um exemplo de serviço, humildade e fé inabalável em Deus.
      </p>
      {/* Espaço para futura galeria de fotos do pastor */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="aspect-square rounded-lg border-2 border-dashed border-border flex items-center justify-center"
          >
            <span className="text-xs text-muted-foreground">Foto {n}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  historia: (
    <div className="space-y-6">
      <p className="text-muted-foreground text-lg leading-relaxed">
        Fundada com o propósito de levar a Palavra de Deus à comunidade de Mogi das Cruzes, nossa igreja nasceu do sonho de criar um espaço de acolhimento e transformação.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Ao longo dos anos, temos crescido em fé e em número, impactando famílias e vidas. Cada capítulo da nossa história é marcado pela fidelidade de Deus e pelo compromisso dos nossos membros em expandir o Reino dos Céus.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Hoje, somos uma comunidade vibrante que continua a crescer, sempre buscando servir a Deus e às pessoas com excelência e amor.
      </p>
    </div>
  ),
  missao: (
    <div className="grid md:grid-cols-2 gap-6">
      {valoresItems.map((item) => (
        <div key={item.titulo} className="flex gap-4 p-4 rounded-lg border border-border bg-card/50">
          <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "hsl(var(--church-blue-dark))" }}
          >
            <item.icon className="h-5 w-5 text-church-gold" />
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-1">{item.titulo}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.texto}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

const ConhecaNosSection = () => {
  const [active, setActive] = useState<TabKey>("pastor");

  return (
    <section id="conheca-nos" className="section-padding bg-background">
      <div className="section-container">
        <SectionTitle
          title="Conheça-nos"
          subtitle="Saiba mais sobre quem somos e no que acreditamos"
        />

        <FadeInView>
          <div className="max-w-4xl mx-auto">
            {/* Tab buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10">
              {tabs.map((tab) => {
                const isActive = active === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActive(tab.key)}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 border-2 ${
                      isActive
                        ? "border-transparent shadow-lg scale-105"
                        : "border-border bg-card text-foreground hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                    style={isActive ? {
                      backgroundColor: "hsl(var(--church-gold))",
                      color: "hsl(var(--church-blue-dark))",
                      borderColor: "hsl(var(--church-gold))",
                    } : undefined}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Content area */}
            <div className="rounded-xl border border-border bg-card p-8 md:p-12 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {tabContent[active]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default ConhecaNosSection;
