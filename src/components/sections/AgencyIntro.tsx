import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

/**
 * AgencyIntro — Présentation synthétique de l'agence (homepage)
 */
export default function AgencyIntro() {
  return (
    <section className="section-padding bg-creme">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Texte */}
          <div>
            <SectionHeader
              label="L'agence"
              title="Nous donnons vie<br/>à vos ambitions."
              description="Novacom est une agence de communication créative spécialisée dans l'accompagnement des marques ambitieuses. De la stratégie à l'exécution, nous concevons des expériences qui marquent les esprits."
            />
            <ScrollReveal delay={0.3}>
              <Button href="/about">En savoir plus</Button>
            </ScrollReveal>
          </div>

          {/* Visuel / Métriques */}
          <div>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "50+", label: "Projets réalisés" },
                  { number: "30+", label: "Clients satisfaits" },
                  { number: "3", label: "Années d'expertise" },
                  { number: "100%", label: "Sur-mesure" },
                ].map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <p className="font-serif text-display-md italic text-bordeaux mb-2">
                      {stat.number}
                    </p>
                    <p className="font-sans text-sm text-bordeaux/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
