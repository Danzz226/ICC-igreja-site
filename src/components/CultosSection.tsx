import { Clock, BookOpen, Users, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import FadeInView from "./FadeInView";
import { Badge } from "./ui/badge";

const cultos = [
  {
    dia: "Quinta-feira",
    titulo: "Culto da Palavra",
    horario: "19:30h",
    descricao: "Um momento de estudo e meditação profunda nas Escrituras Sagradas.",
    icon: BookOpen,
  },
  {
    dia: "Domingo",
    titulo: "Culto da Família",
    horario: "10:00h",
    descricao: "Celebração especial para toda a família, com louvor e adoração.",
    icon: Users,
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
            <div className="group cursor-pointer rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-accent/40">
              {/* Ícone */}
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-church-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <culto.icon className="h-7 w-7 text-church-gold" />
              </div>

              {/* Dia */}
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-2"
                style={{ color: "hsl(var(--church-blue-medium))" }}
              >
                {culto.dia}
              </span>

              {/* Título */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                {culto.titulo}
              </h3>

              {/* Badge horário */}
              <Badge className="mb-4 border-0 px-4 py-1.5 text-sm font-bold"
                style={{
                  backgroundColor: "hsl(var(--church-gold))",
                  color: "hsl(var(--church-blue-dark))",
                }}
              >
                <Clock className="h-3.5 w-3.5 mr-1.5" />
                {culto.horario}
              </Badge>

              {/* Descrição */}
              <p className="text-muted-foreground mb-6">{culto.descricao}</p>

              {/* Botão */}
              <button
                onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group-hover:gap-3"
                style={{ color: "hsl(var(--church-gold))" }}
              >
                Saiba mais
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </FadeInView>
        ))}
      </div>
    </div>
  </section>
);

export default CultosSection;
