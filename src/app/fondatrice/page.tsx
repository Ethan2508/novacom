import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "La Fondatrice",
  description:
    "Découvrez le parcours et la vision de la fondatrice de Novacom, agence de communication créative.",
};

/**
 * Page Fondatrice — /fondatrice
 * Portrait, parcours et vision de la fondatrice
 */
export default function FondatricePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-creme">
        <div className="container-wide">
          <SectionHeader
            label="La fondatrice"
            title="La fondatrice."
          />
        </div>
      </section>

      {/* Portrait + Texte */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Photo */}
            <ScrollReveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/fondatrice.jpg"
                  alt="Fondatrice de Novacom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            {/* Texte */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-nude-dark mb-2">
                  Son parcours
                </p>
                <h3 className="font-serif text-display-sm md:text-display-md italic text-bordeaux mb-6">
                  Rackel Teboul
                </h3>
                <div className="divider mb-8" />

                {/* CONTENU À REMPLACER — texte envoyé par email */}
                <div className="space-y-5 font-sans text-body-md text-bordeaux/70 leading-relaxed">
                  <p>
                    Passionnée par la communication et le digital, Rackel a fondé Novacom
                    avec une conviction : chaque marque mérite une communication à la
                    hauteur de ses ambitions.
                  </p>
                  <p>
                    Forte de son expérience dans l&apos;accompagnement de marques dans
                    divers secteurs — mode, beauté, immobilier, événementiel, hôtellerie —
                    elle a développé une approche unique alliant créativité, stratégie et
                    proximité avec ses clients.
                  </p>
                  <p>
                    Sa vision : créer des identités visuelles fortes et des stratégies
                    digitales qui transforment la perception des marques et accélèrent
                    leur croissance.
                  </p>
                </div>

                <div className="pt-6">
                  <Button href="/contact">
                    Travaillons ensemble
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
