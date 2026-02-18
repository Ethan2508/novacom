import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { getServices } from "@/lib/api";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez les services Novacom : création de contenus, gestion réseaux sociaux, shootings, stratégie digitale, identité visuelle et accompagnement global.",
};

/**
 * Page Services — /services
 * Liste détaillée avec layout alterné gauche/droite
 */
export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      {/* Hero éditorial */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-creme">
        <div className="container-wide">
          <SectionHeader
            label="Services"
            title="Une expertise complète<br/>au service de votre marque."
            description="De la stratégie à l'exécution, nous couvrons l'ensemble de vos besoins en communication digitale avec créativité et rigueur."
          />
        </div>
      </section>

      {/* Liste des services — layout alterné */}
      <section className="bg-white">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              className={`section-padding border-b border-creme-dark/10 ${
                isEven ? "bg-white" : "bg-creme-light"
              }`}
            >
              <div className="container-wide">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center ${
                    !isEven ? "md:[direction:rtl]" : ""
                  }`}
                >
                  {/* Partie visuelle / numéro */}
                  <ScrollReveal direction={isEven ? "left" : "right"}>
                    <div
                      className={`${!isEven ? "md:[direction:ltr]" : ""}`}
                    >
                      <div className="aspect-square bg-creme flex items-center justify-center">
                        <span className="font-serif text-[8rem] md:text-[12rem] italic text-nude/20">
                          {service.icon}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Contenu */}
                  <ScrollReveal
                    direction={isEven ? "right" : "left"}
                    delay={0.2}
                  >
                    <div className={`${!isEven ? "md:[direction:ltr]" : ""}`}>
                      {/* Numéro */}
                      <p className="font-serif text-sm italic text-nude mb-4">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      {/* Titre */}
                      <h2 className="font-serif text-display-md italic text-bordeaux mb-6">
                        {service.title}
                      </h2>

                      <div className="divider mb-8" />

                      {/* Description */}
                      <p className="font-sans text-body-md text-bordeaux/65 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Détails */}
                      <ul className="space-y-3 mb-10">
                        {service.details.map((detail, i) => (
                          <li
                            key={i}
                            className="font-sans text-sm text-bordeaux/50 flex items-center gap-3"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-nude flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="section-padding bg-bordeaux">
        <div className="container-wide text-center">
          <SectionHeader
            label="Intéressé ?"
            title="Parlons de<br/>votre projet."
            description="Contactez-nous pour un premier échange gratuit et sans engagement. Nous définirons ensemble la stratégie idéale pour votre marque."
            align="center"
            light
          >
            <Button
              href="mailto:contact@nova-com.fr"
              variant="outline"
              className="border-creme text-creme hover:bg-creme hover:text-bordeaux"
            >
              Nous contacter
            </Button>
          </SectionHeader>
        </div>
      </section>
    </>
  );
}
