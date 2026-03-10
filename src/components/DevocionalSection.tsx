import { Sparkles, Calendar, BookOpen, RefreshCw } from "lucide-react";
import SectionTitle from "./SectionTitle";
import FadeInView from "./FadeInView";
import { useDevocional } from "@/hooks/useDevocional";
import { Button } from "./ui/button";

const DevocionalSection = () => {
  const { devocional, loading, error, usandoFallback, tentarNovamente } = useDevocional();

  return (
    <section id="devocional" className="section-padding bg-church-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-church-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-church-blue-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-church-gold" aria-hidden />
            <span className="text-sm font-semibold tracking-wide text-church-gold uppercase">
              Palavra do Dia
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Devocional Diário
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Uma mensagem para abençoar o seu dia com a Palavra de Deus.
          </p>
        </div>

        <FadeInView>
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl relative">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="w-10 h-10 border-4 border-church-gold/30 border-t-church-gold rounded-full animate-spin" aria-hidden />
                <p className="text-church-gold animate-pulse text-sm">Gerando palavra do dia...</p>
              </div>
            ) : devocional ? (
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <BookOpen className="h-8 w-8 text-church-gold mx-auto opacity-80" aria-hidden />
                  <blockquote className="font-display text-2xl md:text-3xl italic font-medium leading-relaxed text-white">
                    "{devocional.versiculo}"
                  </blockquote>
                  <p className="text-church-gold font-bold tracking-wide">
                    — {devocional.referencia}
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="prose prose-invert max-w-none text-white/80 leading-relaxed text-lg text-justify">
                  {devocional.reflexao.split("\n").map((paragrafo, idx) =>
                    paragrafo.trim() ? <p key={idx} className="mb-4">{paragrafo}</p> : null
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                  <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
                    <Calendar className="h-4 w-4" aria-hidden />
                    <span>Gerado em {new Date().toLocaleDateString("pt-BR")}</span>
                  </div>
                  {usandoFallback && (
                    <p className="text-center text-white/50 text-xs">
                      Exibindo um versículo de reflexão. O devocional é atualizado automaticamente a cada dia às 6h.
                    </p>
                  )}
                  {error && (
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-white/60 text-sm">{error}</p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={tentarNovamente}
                        className="border-church-gold/50 text-church-gold hover:bg-church-gold/10"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Tentar novamente
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-white/60">Não foi possível carregar o devocional no momento.</p>
              </div>
            )}
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default DevocionalSection;
