import Link from "next/link";
import type { TrustPartner } from "@/types";

interface TrustSectionProps {
  partners: TrustPartner[];
}

/**
 * TrustSection — "Nos Clients"
 * Style inspiré de theupper.studio : noms en grande typo fluide,
 * séparés naturellement, cliquables, effet hover élégant
 */
export default function TrustSection({ partners }: TrustSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-creme border-t border-bordeaux/10">
      <div className="container-wide">
        {/* Titre section */}
        <h2 className="font-serif text-display-md md:text-display-lg italic text-bordeaux mb-12 md:mb-16">
          Nos<span className="text-nude"> clients</span>
        </h2>

        {/* Grille multi-colonnes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 md:gap-x-12">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={`/clients/${partner.slug}`}
              className="font-sans text-lg md:text-xl lg:text-2xl font-light tracking-wide text-bordeaux/40 transition-all duration-500 hover:text-bordeaux"
            >
              {partner.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
