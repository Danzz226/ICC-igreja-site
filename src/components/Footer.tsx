import { Mail, Phone, Instagram, Youtube, MapPin, Cross, Clock } from "lucide-react";

const Footer = () => (
  <footer id="contato" className="bg-church-dark section-padding pb-8">
    <div className="section-container">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Coluna 1: Contato */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Cross className="h-5 w-5 text-church-gold" />
            <h3 className="font-display text-xl font-bold text-primary-foreground">
              Contato
            </h3>
          </div>
          <div className="space-y-4">
            <a
              href="mailto:contato@igrejamc.com.br"
              className="flex items-center gap-3 text-primary-foreground/70 hover:text-church-gold transition-colors"
            >
              <Mail className="h-5 w-5 text-church-gold" />
              <span>contato@igrejamc.com.br</span>
            </a>
            {/* <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/70 hover:text-church-gold transition-colors"
            >
              <Phone className="h-5 w-5 text-church-gold" />
              <span>(11) 99999-9999</span>
            </a> */}
          </div>
        </div>

        {/* Coluna 2: Horários dos Cultos */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Clock className="h-5 w-5 text-church-gold" />
            <h3 className="font-display text-xl font-bold text-primary-foreground">
              Horários
            </h3>
          </div>
          <div className="space-y-4">
            <div className="text-primary-foreground/70">
              <p className="font-semibold text-primary-foreground/90">Quinta-feira</p>
              <p>Culto da Palavra – 19:30h</p>
            </div>
            <div className="text-primary-foreground/70">
              <p className="font-semibold text-church-gold">Última Quinta (Especial)</p>
              <p>Culto de Comunhão – 19:30h</p>
            </div>
            <div className="text-primary-foreground/70 mt-4">
              <p className="font-semibold text-primary-foreground/90">Domingo</p>
              <p>Culto da Família – 10:00h</p>
            </div>
            <div className="text-primary-foreground/70">
              <p className="font-semibold text-church-gold">2º Domingo (Especial)</p>
              <p>Santa Ceia – 10:00h</p>
            </div>
          </div>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div>
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-6">
            Redes Sociais
          </h3>
          <div className="space-y-4">
            <a
              href="https://www.instagram.com/iccmogi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/70 hover:text-church-gold transition-colors"
            >
              <Instagram className="h-5 w-5 text-church-gold" />
              <span>@iccmogi</span>
            </a>
            <a
              href="https://www.youtube.com/@identidadeemcristochurchmogi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/70 hover:text-church-gold transition-colors"
            >
              <Youtube className="h-5 w-5 text-church-gold" />
              <span>Identidade Church Mogi</span>
            </a>
          </div>
        </div>

        {/* Coluna 4: Mapa */}
        <div>
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-6">
            Localização
          </h3>
          <div className="rounded-lg overflow-hidden mb-4 border border-church-medium/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.5!2d-46.19!3d-23.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMxJzEyLjAiUyA0NsKwMTEnMjQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Igreja"
            />
          </div>
          <div className="flex items-start gap-2 text-primary-foreground/70">
            <MapPin className="h-5 w-5 text-church-gold flex-shrink-0 mt-0.5" />
            <span className="text-sm">
              Jardelina de A. Lopes, 798 – Pq Santana – Mogi das Cruzes
            </span>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-church-medium/30 pt-8 text-center">
        <p className="text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} Identidade Church – Mogi das Cruzes. Todos os
          direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
