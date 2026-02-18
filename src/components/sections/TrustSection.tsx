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

        {/* Liste fluide de noms — inline flow comme theupper.studio */}
        <div className="leading-relaxed md:leading-loose">
          {partners.map((partner, index) => (
            <span key={partner.name}>
              <Link
                href={`/clients/${partner.slug}`}
                className="font-sans text-2xl md:text-4xl lg:text-5xl font-extralight tracking-wide text-bordeaux/40 transition-all duration-500 hover:text-bordeaux"
              >
                {partner.name}
              </Link>
              {index < partners.length - 1 && (
                <span className="font-sans text-2xl md:text-4xl lg:text-5xl font-extralight text-nude/50 mx-3 md:mx-5 select-none">
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
