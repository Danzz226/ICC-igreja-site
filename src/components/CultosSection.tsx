import { Clock, BookOpen, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";
import FadeInView from "./FadeInView";

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
            <div className="card-church text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-church-dark flex items-center justify-center group-hover:bg-church-medium transition-colors">
                <culto.icon className="h-7 w-7 text-church-gold" />
              </div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-church-medium mb-2">
                {culto.dia}
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {culto.titulo}
              </h3>
              <div className="flex items-center justify-center gap-2 text-church-gold mb-4">
                <Clock className="h-4 w-4" />
                <span className="font-semibold">{culto.horario}</span>
              </div>
              <p className="text-muted-foreground">{culto.descricao}</p>
            </div>
          </FadeInView>
        ))}
      </div>
    </div>
  </section>
);

export default CultosSection;
