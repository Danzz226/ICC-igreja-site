import { Heart, HandHeart, CreditCard } from "lucide-react";
import SectionTitle from "./SectionTitle";
import FadeInView from "./FadeInView";

const ContribuaSection = () => (
  <section id="contribua" className="section-padding bg-muted">
    <div className="section-container">
      <SectionTitle
        title="Contribua"
        subtitle="Sua generosidade faz a diferença na vida de muitas pessoas"
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Doação de Alimentos */}
        <FadeInView delay={0}>
          <div className="card-church bg-card text-center h-full">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-church-dark flex items-center justify-center">
              <HandHeart className="h-7 w-7 text-church-gold" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Doação de Alimentos
            </h3>
            <p className="text-muted-foreground mb-6">
              Traga alimentos não perecíveis e ajude a alimentar famílias
              necessitadas. As doações podem ser entregues durante os cultos ou
              na secretaria da igreja.
            </p>
            <div className="p-4 rounded-lg bg-muted">
              <p className="text-sm font-semibold text-foreground">
                📍 Entrega na secretaria
              </p>
              <p className="text-sm text-muted-foreground">
                Seg a Sex: 9h – 17h | Domingos: após o culto
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Contribuição Financeira */}
        <FadeInView delay={0.15}>
          <div className="card-church bg-card text-center h-full">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-church-dark flex items-center justify-center">
              <CreditCard className="h-7 w-7 text-church-gold" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Contribuição Financeira
            </h3>
            <p className="text-muted-foreground mb-6">
              Sua contribuição financeira sustenta a obra de Deus e possibilita
              projetos sociais, manutenção e expansão do trabalho da igreja.
            </p>
            <div className="p-4 rounded-lg bg-muted space-y-2">
              <p className="text-sm font-semibold text-foreground">
                🏦 Dados Bancários
              </p>
              <p className="text-sm text-muted-foreground">
                Chave PIX: 56173005000170
              </p>
            </div>
          </div>
        </FadeInView>
      </div>

      <FadeInView delay={0.3}>
        <div className="flex items-center justify-center gap-2 mt-10 text-muted-foreground">
          <Heart className="h-4 w-4 text-church-red" />
          <p className="text-sm">
            "Cada um contribua segundo propôs no seu coração" — 2 Coríntios 9:7
          </p>
        </div>
      </FadeInView>
    </div>
  </section>
);

export default ContribuaSection;
