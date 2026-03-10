import { ArrowLeft, Image as ImageIcon, Users, User, UsersRound, Wine, CalendarDays, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import SectionTitle from "@/components/SectionTitle";

import imgComunhao from "@/assets/evento-comunhao.jpg";
import imgCultoMulheres from "@/assets/eento-culto-mulheres.jpg";
import imgConsagracaoMulheres from "@/assets/evento-consagracao-mulheres.jpg";
import imgCultoDomingo from "@/assets/carrosel-culto-domingo.jpg";
import imgJovens from "@/assets/carrosel-jovens.jpg";
import imgPastor from "@/assets/carrosel-pastor.jpg";
import imgCulto from "@/assets/carrosel-culto.jpg";

type FotoGaleria = { id: number; src: string; titulo: string };

const secoesGaleria = [
  {
    id: "mulheres",
    titulo: "Culto das Mulheres",
    subtitulo: "Ministério de Mulheres",
    icone: Users,
    fotos: [
      { id: 1, src: imgCultoMulheres, titulo: "Culto de Mulheres" },
      { id: 2, src: imgConsagracaoMulheres, titulo: "Consagração de Mulheres" },
    ] as FotoGaleria[],
  },
  {
    id: "homens",
    titulo: "Culto dos Homens",
    subtitulo: "Ministério de Homens",
    icone: User,
    fotos: [] as FotoGaleria[],
  },
  {
    id: "jovens",
    titulo: "Culto dos Jovens",
    subtitulo: "Ministério de Jovens",
    icone: UsersRound,
    fotos: [
      { id: 3, src: imgJovens, titulo: "Culto de Jovens" },
    ] as FotoGaleria[],
  },
  {
    id: "comunhao",
    titulo: "Culto de Comunhão",
    subtitulo: "Santa Ceia e comunhão",
    icone: Wine,
    fotos: [
      { id: 4, src: imgComunhao, titulo: "Culto de Comunhão" },
    ] as FotoGaleria[],
  },
  {
    id: "cultos-diarios",
    titulo: "Cultos Fixos",
    subtitulo: "Cultos regulares da semana",
    icone: CalendarDays,
    fotos: [
      { id: 5, src: imgCultoDomingo, titulo: "Culto de Domingo" },
      { id: 6, src: imgCulto, titulo: "Culto" },
      { id: 7, src: imgPastor, titulo: "Ministração" },
    ] as FotoGaleria[],
  },
  {
    id: "eventos",
    titulo: "Eventos",
    subtitulo: "Conferências, retiros e programações especiais",
    icone: Calendar,
    fotos: [] as FotoGaleria[],
  },
];

const Galeria = () => {
  return (
    <main className="min-h-screen bg-background">
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

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <SectionTitle
              title="Nossa Galeria"
              subtitle="Relembre momentos especiais vividos em nossa comunidade"
            />
          </FadeInView>

          {secoesGaleria.map((secao, secaoIndex) => (
            <FadeInView key={secao.id} delay={secaoIndex * 0.08}>
              <div id={secao.id} className="scroll-mt-24 mt-16 first:mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2 rounded-lg text-church-gold"
                    style={{ backgroundColor: "hsl(var(--church-blue-dark) / 0.15)" }}
                  >
                    <secao.icone className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {secao.titulo}
                    </h2>
                    <p className="text-muted-foreground text-sm">{secao.subtitulo}</p>
                  </div>
                </div>

                {secao.fotos.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {secao.fotos.map((foto, index) => (
                      <FadeInView key={foto.id} delay={index * 0.06}>
                        <div className="group relative rounded-xl overflow-hidden shadow-sm aspect-square bg-muted">
                          <img
                            src={foto.src}
                            alt={foto.titulo}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-church-dark/90 via-church-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              {foto.titulo}
                            </h3>
                          </div>
                        </div>
                      </FadeInView>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center text-muted-foreground">
                    Em breve, fotos desta seção.
                  </div>
                )}
              </div>
            </FadeInView>
          ))}

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
