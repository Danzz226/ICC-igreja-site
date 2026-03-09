import { useEffect, useState } from "react";
import { Sparkles, Calendar, BookOpen } from "lucide-react";
import SectionTitle from "./SectionTitle";
import FadeInView from "./FadeInView";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Devocional {
    versiculo: string;
    referencia: string;
    reflexao: string;
}

const DevocionalSection = () => {
    const [devocional, setDevocional] = useState<Devocional | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDevocional = async () => {
            try {
                const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
                const cachedDevocional = localStorage.getItem(`devocional_${today}`);

                if (cachedDevocional) {
                    setDevocional(JSON.parse(cachedDevocional));
                    setLoading(false);
                    return;
                }

                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                if (!apiKey) {
                    console.error("Gemini API key not found in .env");
                    setLoading(false);
                    return;
                }

                const genAI = new GoogleGenerativeAI(apiKey);
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

                const prompt = `Atue como um pastor encorajador. Forneça um versículo bíblico inspirador e uma breve reflexão (1 a 2 parágrafos) para o dia de hoje. 
        Retorne estritamente um JSON no seguinte formato, sem formatações Markdown adicionais:
        {
          "versiculo": "texto do versículo aqui",
          "referencia": "Livro Capítulo:Versículo",
          "reflexao": "Sua reflexão encorajadora aqui"
        }`;

                const result = await model.generateContent(prompt);
                const response = result.response.text();

                // Remove possiveis marcadores markdown do json
                const cleanJson = response.replace(/```json/g, "").replace(/```/g, "").trim();
                const parsedDevocional: Devocional = JSON.parse(cleanJson);

                // Salva no cache local (limpando o cache de ontem)
                localStorage.clear();
                localStorage.setItem(`devocional_${today}`, JSON.stringify(parsedDevocional));

                setDevocional(parsedDevocional);
            } catch (error) {
                console.error("Erro ao gerar devocional:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDevocional();
    }, []);

    return (
        <section id="devocional" className="section-padding bg-church-dark text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-church-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-church-blue-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="section-container relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
                        <Sparkles className="h-4 w-4 text-church-gold" />
                        <span className="text-sm font-semibold tracking-wide text-church-gold uppercase">
                            Palavra do Dia
                        </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                        Devocional Diário
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Uma mensagem inspirada pela Inteligência Artificial para abençoar o seu dia com a Palavra de Deus.
                    </p>
                </div>

                <FadeInView>
                    <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl relative">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-12 space-y-4">
                                <div className="w-10 h-10 border-4 border-church-gold/30 border-t-church-gold rounded-full animate-spin" />
                                <p className="text-church-gold animate-pulse text-sm">Gerando palavra do dia...</p>
                            </div>
                        ) : devocional ? (
                            <div className="space-y-8">
                                {/* Versículo */}
                                <div className="text-center space-y-4">
                                    <BookOpen className="h-8 w-8 text-church-gold mx-auto opacity-80" />
                                    <blockquote className="font-display text-2xl md:text-3xl italic font-medium leading-relaxed text-white">
                                        "{devocional.versiculo}"
                                    </blockquote>
                                    <p className="text-church-gold font-bold tracking-wide">
                                        — {devocional.referencia}
                                    </p>
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                {/* Reflexão */}
                                <div className="prose prose-invert max-w-none text-white/80 leading-relaxed text-lg text-justify">
                                    {devocional.reflexao.split("\n").map((paragrafo, idx) => (
                                        paragrafo.trim() && <p key={idx} className="mb-4">{paragrafo}</p>
                                    ))}
                                </div>

                                <div className="flex items-center justify-center gap-2 text-white/50 text-sm mt-8 pt-4 border-t border-white/5">
                                    <Calendar className="h-4 w-4" />
                                    <span>Gerado em {new Date().toLocaleDateString("pt-BR")}</span>
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
