import Link from "next/link";
import type { TrustPartner } from "@/types";

interface TrustSectionProps {
  partners: TrustPartner[];
}

/**
 * TrustSection — "Nos clients"
 * Liste statique de noms dorés cliquables, juste au-dessus du footer
 */
export default function TrustSection({ partners }: TrustSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-creme">
      <div className="container-wide">
        <p className="font-sans text-sm uppercase tracking-widest text-nude mb-10">
          Nos clients
        </p>

        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={`/clients/${partner.slug}`}
              className="font-sans text-xl md:text-2xl lg:text-3xl font-light tracking-wider uppercase transition-opacity duration-300 hover:opacity-60"
              style={{
                background:
                  "linear-gradient(135deg, #c9a84c 0%, #f0d78c 30%, #b8942e 55%, #e6c65c 80%, #d4af37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {partner.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
