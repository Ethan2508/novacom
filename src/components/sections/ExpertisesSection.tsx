import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Expertise } from "@/types";

interface ExpertisesSectionProps {
  expertises: Expertise[];
}

/**
 * ExpertisesSection — Aperçu des expertises (homepage)
 * Grid de 4 expertises avec icônes et descriptions
 */
export default function ExpertisesSection({ expertises }: ExpertisesSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          label="Expertises"
          title="Ce que nous<br/>faisons de mieux."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {expertises.map((expertise, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="p-8 border border-accent hover:border-accent/70 transition-all duration-600 group rounded-2xl">
                {/* Icône décorative */}
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/80 transition-colors duration-400">
                  <span className="font-serif text-xl italic text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Titre */}
                <h3 className="font-serif text-xl italic text-bordeaux mb-4">
                  {expertise.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-bordeaux/55 leading-relaxed">
                  {expertise.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
