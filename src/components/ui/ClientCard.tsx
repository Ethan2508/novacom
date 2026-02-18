import Image from "next/image";
import Link from "next/link";
import { Client } from "@/types";
import { formatDate } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

interface ClientCardProps {
  client: Client;
  index?: number;
}

/**
 * ClientCard — Carte de présentation client
 * Design éditorial avec hover premium
 */
export default function ClientCard({ client, index = 0 }: ClientCardProps) {
  return (
    <ScrollReveal delay={index * 0.1} direction="up">
      <Link
        href={`/clients/${client.slug}`}
        className="group block"
      >
        <article className="bg-white border border-creme-dark/20 p-8 md:p-10 transition-all duration-600 hover:shadow-lg hover:border-nude/50 rounded-2xl">
          {/* En-tête : logo + catégorie */}
          <div className="flex items-start justify-between mb-8">
            <div className="w-16 h-16 bg-creme rounded-sm flex items-center justify-center overflow-hidden">
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              ) : (
                <span className="font-serif text-2xl italic text-bordeaux">
                  {client.name.charAt(0)}
                </span>
              )}
            </div>
            <span className="font-sans text-xs uppercase tracking-widest text-nude-dark">
              {client.category}
            </span>
          </div>

          {/* Nom du client */}
          <h3 className="font-serif text-2xl md:text-3xl italic text-bordeaux mb-4 group-hover:text-nude-dark transition-colors duration-400">
            {client.name}
          </h3>

          {/* Description */}
          <p className="font-sans text-sm text-bordeaux/60 leading-relaxed mb-6">
            {client.description}
          </p>

          {/* Footer : date + flèche */}
          <div className="flex items-center justify-between pt-6 border-t border-creme-dark/20">
            <span className="font-sans text-xs text-bordeaux/40">
              {formatDate(client.date)}
            </span>
            <span className="font-sans text-xs uppercase tracking-widest text-bordeaux group-hover:text-nude-dark transition-colors duration-400 flex items-center gap-2">
              Voir le projet
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-400 group-hover:translate-x-1"
              >
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </div>
        </article>
      </Link>
    </ScrollReveal>
  );
}
