import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import FadeInView from "./FadeInView";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import eventoConsagracao from "@/assets/evento-consagracao-mulheres.jpg";
import eventoCultoMulheres from "@/assets/eento-culto-mulheres.jpg";

const eventos = [
  {
    titulo: "Consagração de Mulheres",
    data: "7 de Março, 2026 às 08:00h",
    local: "Templo Principal",
    descricao: "Momento especial de busca e consagração ao Senhor exclusivo para mulheres.",
    imagem: eventoConsagracao,
  },
  {
    titulo: "Culto de Mulheres",
    data: "28 de Março, 2026 às 19:30h",
    local: "Templo Principal",
    descricao: "Um culto abençoado e direcionado para o Ministério de Mulheres.",
    imagem: eventoCultoMulheres,
  },
];

const EventosSection = () => {
  const hasEventos = eventos.length > 0;
  const [nome, setNome] = useState("");
  const whatsappNumber = "5511960782534";

  const handleSubscribe = (eventoTitulo: string) => {
    if (!nome.trim()) return;
    const message = `Olá, me chamo ${nome} e gostaria de me inscrever para o evento: ${eventoTitulo}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setNome("");
  };

  return (
    <section id="eventos" className="section-padding bg-muted">
      <div className="section-container">
        <SectionTitle
          title="Próximos Eventos"
          subtitle="Fique por dentro das nossas programações especiais"
        />

        {hasEventos ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventos.map((evento, i) => (
              <FadeInView key={evento.titulo} delay={i * 0.1}>
                <div className="card-church h-full bg-card overflow-hidden p-0 group">
                  {/* Imagem do evento */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={evento.imagem}
                      alt={evento.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                  </div>

                  {/* Conteúdo */}
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

                    {/* Inscrição via WhatsApp */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center gap-2 text-sm font-semibold text-church-gold hover:underline transition-colors mt-auto">
                          Inscreva-se
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Inscrição: {evento.titulo}</DialogTitle>
                          <DialogDescription>
                            Para se inscrever, informe seu nome. Adicionaremos você à lista de confirmarção via WhatsApp.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2 py-4">
                          <Input
                            id="name"
                            placeholder="Seu nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                          />
                        </div>
                        <DialogFooter className="sm:justify-end">
                          <Button
                            type="button"
                            onClick={() => handleSubscribe(evento.titulo)}
                            disabled={!nome.trim()}
                            className="bg-church-gold hover:bg-church-gold/90 text-church-dark"
                          >
                            Confirmar Inscrição
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        ) : (
          /* Estado vazio – exibido quando não há eventos */
          <FadeInView>
            <div className="max-w-lg mx-auto text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "hsl(var(--church-blue-dark))" }}
              >
                <Calendar className="h-9 w-9 text-church-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Em breve novos eventos
              </h3>
              <p className="text-muted-foreground text-lg">
                Estamos preparando programações especiais para você e sua família. Fique atento às nossas redes sociais!
              </p>
            </div>
          </FadeInView>
        )}
      </div>
    </section>
  );
};

export default EventosSection;
