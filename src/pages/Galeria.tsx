import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import SectionTitle from "@/components/SectionTitle";

// Imagens de exemplo para a galeria (usando as que já existem no projeto)
import img1 from "@/assets/evento-comunhao.jpg";
import img2 from "@/assets/eento-culto-mulheres.jpg";
import img3 from "@/assets/evento-consagracao-mulheres.jpg";
import img4 from "@/assets/carrosel-culto-domingo.jpg";
import img5 from "@/assets/carrosel-jovens.jpg";
import img6 from "@/assets/carrosel-pastor.jpg";

const galeriaFotos = [
    { id: 1, src: img1, titulo: "Culto de Comunhão" },
    { id: 2, src: img2, titulo: "Culto de Mulheres" },
    { id: 3, src: img3, titulo: "Consagração" },
    { id: 4, src: img4, titulo: "Culto de Domingo" },
    { id: 5, src: img5, titulo: "Jovens" },
    { id: 6, src: img6, titulo: "Ministração" },
];

const Galeria = () => {
    return (
        <main className="min-h-screen bg-background">
            {/* Header Simples */}
            <header className="bg-church-dark py-6 shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-church-gold hover:text-white transition-colors text-sm font-semibold"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Voltar para o Site
                    </Link>
                    <div className="flex items-center gap-2 text-white">
                        <ImageIcon className="h-5 w-5 text-church-gold" />
                        <span className="font-display font-bold tracking-wider">Identidade Church</span>
                    </div>
                </div>
            </header>

            {/* Conteúdo Principal */}
            <section className="section-padding">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInView>
                        <SectionTitle
                            title="Nossa Galeria"
                            subtitle="Relembre momentos especiais vividos em nossa comunidade"
                        />
                    </FadeInView>

                    {/* Grid de Fotos (Estilo Masonry/Grid) */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {galeriaFotos.map((foto, index) => (
                            <FadeInView key={foto.id} delay={index * 0.1}>
                                <div className="group relative rounded-xl overflow-hidden shadow-sm aspect-square bg-muted">
                                    <img
                                        src={foto.src}
                                        alt={foto.titulo}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    {/* Overlay Escuro com Título no Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-church-dark/90 via-church-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {foto.titulo}
                                        </h3>
                                    </div>
                                </div>
                            </FadeInView>
                        ))}
                    </div>

                    <FadeInView delay={0.6}>
                        <div className="mt-16 text-center text-muted-foreground bg-muted/50 p-8 rounded-2xl border border-border">
                            <p>Em breve mais fotos dos nossos próximos eventos!</p>
                        </div>
                    </FadeInView>
                </div>
            </section>
        </main>
    );
};

export default Galeria;
