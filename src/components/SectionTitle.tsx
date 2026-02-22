import FadeInView from "./FadeInView";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, light = false }: SectionTitleProps) => (
  <FadeInView className="text-center mb-12 md:mb-16">
    <h2
      className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      {title}
    </h2>
    <div className="gold-separator mb-4" />
    {subtitle && (
      <p
        className={`text-lg max-w-2xl mx-auto ${
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}
      >
        {subtitle}
      </p>
    )}
  </FadeInView>
);

export default SectionTitle;
