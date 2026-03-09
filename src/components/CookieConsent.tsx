import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already accepted cookies
        const hasAccepted = localStorage.getItem("cookiesAccepted");
        if (!hasAccepted) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-church-dark border-t border-church-medium/20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom-full duration-500">
            <div className="text-primary-foreground/90 text-sm max-w-4xl">
                <p>
                    <strong>Nós valorizamos usa privacidade.</strong> Utilizamos cookies e
                    tecnologias semelhantes para melhorar a sua experiência em nosso site e
                    entender como você o utiliza, de acordo com a Lei Geral de Proteção de
                    Dados (LGPD). Ao continuar navegando, você concorda com o uso dessas
                    tecnologias.
                </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
                <Button
                    onClick={handleAccept}
                    className="w-full md:w-auto bg-church-gold hover:bg-church-gold/90 text-church-dark font-semibold px-8"
                >
                    Entendi e Aceito
                </Button>
            </div>
        </div>
    );
};

export default CookieConsent;
