import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import FadeInView from "./FadeInView";

const PrayerRequestSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        tipo: "para-mim",
        pedido: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!apiKey) {
            toast({
                title: "Configuração pendente",
                description: "O envio de e-mails ainda precisa ser configurado com a chave do Web3Forms.",
                variant: "destructive"
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: apiKey,
                    subject: `Pedido de oração - ${formData.nome || "Anônimo"}`,
                    from_name: formData.nome || "Anônimo",
                    email: formData.email,
                    message: `Nome: ${formData.nome || "Anônimo"}\nEmail: ${formData.email}\nPara: ${formData.tipo === 'para-mim' ? 'Mim mesmo' : formData.tipo === 'para-outra-pessoa' ? 'Outra pessoa' : 'Minha família'}\n\nDescrição (Pedido):\n${formData.pedido}`
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast({
                    title: "Pedido enviado com sucesso!",
                    description: "Nossa equipe pastoral recebeu o seu pedido e estará orando por você.",
                });
                setFormData({ nome: "", email: "", tipo: "para-mim", pedido: "" });
            } else {
                throw new Error("Falha no servidor de email.");
            }
        } catch (error) {
            console.error("Erro ao enviar:", error);
            toast({
                title: "Erro ao enviar",
                description: "Não foi possível enviar o seu pedido no momento. Tente novamente mais tarde.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="pedidos-oracao" className="py-20 md:py-28 bg-church-light/5">
            <div className="section-container max-w-4xl mx-auto">
                <FadeInView>
                    <SectionTitle
                        title="Pedidos de Oração"
                        subtitle="Podemos orar por você?"
                    />
                    <p className="text-center text-muted-foreground mt-4 mb-10 max-w-2xl mx-auto">
                        Acreditamos no poder da oração e queremos estar com você neste momento.
                        Envie seu pedido, seja para você mesmo ou para alguém que você ama. Nossa
                        equipe pastoral estará orando pela sua vida.
                    </p>

                    <div className="bg-card shadow-lg rounded-xl p-6 md:p-8 border border-border/50">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="nome" className="text-sm font-medium text-foreground">
                                        Seu Nome (Opcional)
                                    </label>
                                    <Input
                                        id="nome"
                                        name="nome"
                                        placeholder="Como podemos te chamar?"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        className="bg-background"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Seu Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="seu.email@exemplo.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-background"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label htmlFor="tipo" className="text-sm font-medium text-foreground">
                                        Este pedido é para:
                                    </label>
                                    <select
                                        id="tipo"
                                        name="tipo"
                                        value={formData.tipo}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        required
                                    >
                                        <option value="para-mim">Mim mesmo</option>
                                        <option value="para-outra-pessoa">Outra pessoa</option>
                                        <option value="minha-familia">Minha família</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="pedido" className="text-sm font-medium text-foreground">
                                    Seu Pedido de Oração <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    id="pedido"
                                    name="pedido"
                                    placeholder="Escreva aqui o seu pedido de oração. O que você compartilhar aqui será mantido em confindêncialidade pela nossa intercessão."
                                    className="min-h-[150px] bg-background resize-y"
                                    value={formData.pedido}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="flex justify-end pt-2">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting || !formData.pedido.trim()}
                                    className="w-full md:w-auto bg-church-gold hover:bg-church-gold/90 text-church-dark font-semibold px-8 h-12"
                                >
                                    {isSubmitting ? "Enviando..." : "Enviar Pedido de Oração"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </FadeInView>
            </div>
        </section>
    );
};

export default PrayerRequestSection;
