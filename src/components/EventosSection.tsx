import { Calendar, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";
import FadeInView from "./FadeInView";

const eventos = [
  {
    titulo: "Conferência de Jovens",
    data: "15 de Março, 2026",
    local: "Templo Principal",
    descricao: "Uma noite especial de louvor e pregação voltada para a juventude.",
  },
  {
    titulo: "Retiro Espiritual",
    data: "22-24 de Abril, 2026",
    local: "Chácara da Igreja",
    descricao: "Três dias de renovação espiritual e comunhão com a natureza.",
  },
  {
    titulo: "Bazar Beneficente",
    data: "10 de Maio, 2026",
    local: "Salão da Igreja",
    descricao: "Evento beneficente para arrecadação de fundos para projetos sociais.",
  },
];

const EventosSection = () => (
  <section id="eventos" className="section-padding bg-muted">
    <div className="section-container">
      <SectionTitle
        title="Próximos Eventos"
        subtitle="Fique por dentro das nossas programações especiais"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventos.map((evento, i) => (
          <FadeInView key={evento.titulo} delay={i * 0.12}>
            <div className="card-church h-full bg-card">
              <div className="flex items-center gap-2 text-church-gold mb-3">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-semibold">{evento.data}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {evento.titulo}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{evento.local}</span>
              </div>
              <p className="text-muted-foreground text-sm">{evento.descricao}</p>
            </div>
          </FadeInView>
        ))}
      </div>
    </div>
  </section>
);

export default EventosSection;
