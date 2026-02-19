import Image from "next/image";
import Link from "next/link";
import type { TrustPartner } from "@/types";

interface TrustSectionProps {
  partners: TrustPartner[];
}

/**
 * TrustSection — "Ils nous font confiance"
 * Logos des clients en grille, cliquables
 */
export default function TrustSection({ partners }: TrustSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-creme border-t border-bordeaux/10">
      <div className="container-wide">
        {/* Titre section */}
        <h2 className="font-serif text-display-md md:text-display-lg italic text-bordeaux mb-12 md:mb-16">
          Ils nous font<span className="text-nude"> confiance</span>
        </h2>

        {/* Grille de logos */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={`/clients/${partner.slug}`}
              className="group flex items-center justify-center p-4 transition-opacity duration-500 opacity-60 hover:opacity-100"
              title={partner.name}
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={60}
                  className="max-h-12 md:max-h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  unoptimized={partner.logo.startsWith("/images/")}
                />
              ) : (
                <span className="font-sans text-base md:text-lg font-light tracking-wide text-bordeaux/50 group-hover:text-bordeaux transition-colors duration-500">
                  {partner.name}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
