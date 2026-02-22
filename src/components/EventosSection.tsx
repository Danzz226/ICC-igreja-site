import { Calendar, MapPin, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import FadeInView from "./FadeInView";

import eventoConferencia from "@/assets/evento-conferencia.jpg";
import eventoRetiro from "@/assets/evento-retiro.jpg";
import eventoBazar from "@/assets/evento-bazar.jpg";
import eventoFamilia from "@/assets/evento-familia.jpg";
import eventoLouvor from "@/assets/evento-louvor.jpg";

const eventos = [
  {
    titulo: "Conferência de Jovens",
    data: "15 de Março, 2026",
    local: "Templo Principal",
    descricao: "Uma noite especial de louvor e pregação voltada para a juventude.",
    imagem: eventoConferencia,
  },
  {
    titulo: "Retiro Espiritual",
    data: "22-24 de Abril, 2026",
    local: "Chácara da Igreja",
    descricao: "Três dias de renovação espiritual e comunhão com a natureza.",
    imagem: eventoRetiro,
  },
  {
    titulo: "Bazar Beneficente",
    data: "10 de Maio, 2026",
    local: "Salão da Igreja",
    descricao: "Evento beneficente para arrecadação de fundos para projetos sociais.",
    imagem: eventoBazar,
  },
  {
    titulo: "Encontro de Famílias",
    data: "7 de Junho, 2026",
    local: "Templo Principal",
    descricao: "Um dia especial dedicado à comunhão e fortalecimento das famílias.",
    imagem: eventoFamilia,
  },
  {
    titulo: "Noite de Louvor",
    data: "28 de Junho, 2026",
    local: "Templo Principal",
    descricao: "Noite de adoração e louvor com bandas e ministérios convidados.",
    imagem: eventoLouvor,
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
          <FadeInView key={evento.titulo} delay={i * 0.1}>
            <div className="card-church h-full bg-card overflow-hidden p-0 group">
              {/* Event image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={evento.imagem}
                  alt={evento.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
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
                <p className="text-muted-foreground text-sm mb-4">{evento.descricao}</p>

                {/* Future inscription link placeholder */}
                <button
                  className="inline-flex items-center gap-2 text-sm font-semibold text-church-gold hover:underline transition-colors"
                  disabled
                >
                  Em breve: Inscreva-se
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </FadeInView>
        ))}
      </div>
    </div>
  </section>
);

export default EventosSection;
