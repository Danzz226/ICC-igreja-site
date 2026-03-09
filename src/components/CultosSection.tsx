import { Clock, BookOpen, Users, ArrowRight, Coffee, Droplet } from "lucide-react";
import SectionTitle from "./SectionTitle";
import FadeInView from "./FadeInView";
import { Badge } from "./ui/badge";
import eventoComunhao from "@/assets/evento-comunhao.jpg";
import santaCeia from "@/assets/carrosel-culto.jpg";
import cultoDomingo from "@/assets/carrosel-culto-domingo.jpg";
import cultoPalavra from "@/assets/carrosel-pastor.jpg";

const cultos = [
  {
    dia: "Quinta-feira",
    titulo: "Culto da Palavra",
    horario: "19:30h",
    descricao: "Um momento de estudo e meditação profunda nas Escrituras Sagradas.",
    icon: BookOpen,
    bgImage: cultoPalavra,
    isSpecial: false,
  },
  {
    dia: "Ultima quinta do mes",
    titulo: "Culto de Comunhão",
    horario: "19:30h",
    descricao: "Um momento tranquilo com bolos e salgados para celebrar a comunhão.",
    icon: Coffee,
    bgImage: eventoComunhao,
    isSpecial: true,
  },
  {
    dia: "Domingo",
    titulo: "Culto da Família",
    horario: "10:00h",
    descricao: "Celebração especial para toda a família, com louvor e adoração.",
    icon: Users,
    bgImage: cultoDomingo,
    isSpecial: false,
  },
  {
    dia: "2° DOMINGO DO MES",
    titulo: "Santa Ceia",
    horario: "10:00h",
    descricao: "Momento solene reservado para arrependimento de pecados e memória do sacrifício de Cristo.",
    icon: Droplet,
    bgImage: santaCeia,
    isSpecial: true,
  },
];

const CultosSection = () => (
  <section id="cultos" className="section-padding bg-background">
    <div className="section-container">
      <SectionTitle
        title="Nossos Cultos"
        subtitle="Venha participar dos nossos momentos de comunhão e adoração"
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {cultos.map((culto, i) => (
          <FadeInView key={culto.titulo} delay={i * 0.15}>
            <div className={`group cursor-pointer rounded-xl border p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden flex flex-col h-full ${culto.isSpecial ? "border-church-gold/50" : "border-border bg-card hover:border-accent/40"
              }`}>
              {/* Background Image para cultos (todos agora tem bgImage) */}
              {culto.bgImage && (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${culto.bgImage})` }}
                  />
                  <div className={`absolute inset-0 z-0 ${culto.isSpecial ? "bg-church-dark/80" : "bg-church-dark/90"}`} />
                </>
              )}

              {/* Conteúdo */}
              <div className="relative z-10 flex flex-col items-center h-full w-full">
                {/* Ícone */}
                <div className={`w-16 h-16 mx-auto mb-5 z-10 rounded-full bg-church-dark/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border ${culto.isSpecial ? "border-church-gold/20" : "border-white/10"}`}>
                  <culto.icon className={`h-7 w-7 ${culto.isSpecial ? "text-church-gold" : "text-white"}`} />
                </div>

                {/* Dia */}
                <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-2"
                  style={{ color: culto.isSpecial ? "hsl(var(--church-gold))" : "#e2e8f0" }}
                >
                  {culto.dia}
                </span>

                {/* Título */}
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-white">
                  {culto.titulo}
                </h3>

                {/* Badge horário */}
                <Badge className="mb-4 border-0 px-4 py-1.5 text-sm font-bold shadow-md"
                  style={{
                    backgroundColor: culto.isSpecial ? "hsl(var(--church-gold))" : "#cbd5e1",
                    color: "hsl(var(--church-blue-dark))",
                  }}
                >
                  <Clock className="h-3.5 w-3.5 mr-1.5" />
                  {culto.horario}
                </Badge>

                {/* Descrição */}
                <p className={`mb-6 flex-grow ${culto.isSpecial ? "text-white/95" : "text-white/80"}`}>
                  {culto.descricao}
                </p>

                {/* Botão */}
                <button
                  onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex mt-auto items-center gap-2 text-sm font-semibold transition-colors duration-200 group-hover:gap-3"
                  style={{ color: culto.isSpecial ? "hsl(var(--church-gold))" : "#f1f5f9" }}
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </FadeInView>
        ))}
      </div>
    </div>
  </section>
);

export default CultosSection;
