import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Novacom, agence de communication créative. Notre mission, nos expertises et notre approche humaine au service de votre marque.",
};

/**
 * Page À propos — /about
 * Présentation, mission, expertises, approche, pourquoi Novacom
 */
export default function AboutPage() {
  return (
    <>
      {/* Hero éditorial */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-creme">
        <div className="container-wide">
          <SectionHeader
            label="À propos"
            title="L'agence qui place<br/>la créativité au cœur<br/>de votre communication."
            description="Novacom est née d'une conviction : chaque marque mérite une communication à la hauteur de ses ambitions. Nous allions stratégie, créativité et excellence opérationnelle."
          />
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <ScrollReveal>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-nude-dark mb-4">
                Notre mission
              </p>
              <h3 className="font-serif text-display-md italic text-bordeaux mb-6">
                Révéler le potentiel<br/>de chaque marque.
              </h3>
              <div className="divider mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6 font-sans text-body-md text-bordeaux/70">
                <p>
                  Chez Novacom, nous croyons que la communication est un levier stratégique
                  qui transforme la perception d&apos;une marque et accélère sa croissance.
                </p>
                <p>
                  Notre mission : accompagner les entreprises ambitieuses dans la construction
                  d&apos;une présence forte, cohérente et mémorable.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="section-padding bg-creme">
        <div className="container-wide">
          <SectionHeader
            label="Expertises"
            title="Des compétences<br/>au service de l'impact."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Stratégie & Conseil",
                items: [
                  "Audit de communication",
                  "Stratégie digitale",
                  "Positionnement de marque",
                  "Veille concurrentielle",
                ],
              },
              {
                title: "Création & Production",
                items: [
                  "Direction artistique",
                  "Création de contenus",
                  "Shooting photo & vidéo",
                  "Design graphique",
                ],
              },
              {
                title: "Digital & Social",
                items: [
                  "Gestion réseaux sociaux",
                  "Community management",
                  "Campagnes publicitaires",
                  "Analytics & reporting",
                ],
              },
            ].map((expertise, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="bg-white p-10 border border-creme-dark/15 rounded-2xl">
                  <h3 className="font-serif text-xl italic text-bordeaux mb-6">
                    {expertise.title}
                  </h3>
                  <ul className="space-y-3">
                    {expertise.items.map((item, i) => (
                      <li
                        key={i}
                        className="font-sans text-sm text-bordeaux/60 flex items-center gap-3"
                      >
                        <span className="w-1 h-1 rounded-full bg-nude flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* La fondatrice */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <ScrollReveal>
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/fondatrice.jpg"
                  alt="Rackel Teboul, fondatrice de Novacom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <div>
              <SectionHeader
                label="La fondatrice"
                title="Rackel Teboul"
              />
              <ScrollReveal delay={0.2}>
                <div className="space-y-5 font-sans text-body-md text-bordeaux/70 leading-relaxed">
                  <p>
                    Passionnée par la communication et le digital, Rackel a fondé Novacom
                    avec une conviction : chaque marque mérite une communication à la
                    hauteur de ses ambitions.
                  </p>
                  <p>
                    Son expérience dans des secteurs variés — mode, beauté, immobilier,
                    événementiel, hôtellerie — lui a permis de développer une approche
                    alliant créativité, stratégie et proximité.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="pt-8">
                  <Button href="/contact">Travaillons ensemble</Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Novacom */}
      <section className="section-padding bg-bordeaux">
        <div className="container-wide">
          <SectionHeader
            label="Pourquoi nous"
            title="5 raisons de choisir<br/>Novacom."
            align="center"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {[
              { num: "01", text: "Approche 100% sur-mesure" },
              { num: "02", text: "Expertise multi-sectorielle" },
              { num: "03", text: "Créativité sans compromis" },
              { num: "04", text: "Transparence & reporting" },
              { num: "05", text: "Accompagnement de A à Z" },
            ].map((reason, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center p-6">
                  <p className="font-serif text-3xl italic text-nude mb-4">
                    {reason.num}
                  </p>
                  <p className="font-sans text-sm text-creme/70 leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-creme">
        <div className="container-wide text-center">
          <SectionHeader
            label="Convaincu ?"
            title="Discutons de<br/>votre projet."
            description="Nous serions ravis d'apprendre à connaître votre marque et de construire ensemble une stratégie de communication impactante."
            align="center"
          >
            <Button href="mailto:contact@nova-com.fr">Nous contacter</Button>
          </SectionHeader>
        </div>
      </section>
    </>
  );
}
