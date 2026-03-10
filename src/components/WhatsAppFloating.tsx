import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511960782534";
const MENSAGEM_PADRAO = "Olá! Visitei o site da Identidade Church e gostaria de mais informações.";

const WhatsAppFloating = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAGEM_PADRAO)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
      <span className="hidden sm:inline font-semibold text-sm">Fale conosco</span>
    </a>
  );
};

export default WhatsAppFloating;
