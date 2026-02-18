"use client";

import { useState } from "react";
import ClientCard from "@/components/ui/ClientCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Client } from "@/types";
import { clientCategories } from "@/lib/data";

interface ClientsGridProps {
  clients: Client[];
}

/**
 * ClientsGrid — Grille de clients avec filtrage par catégorie
 */
export default function ClientsGrid({ clients }: ClientsGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredClients =
    activeCategory === "all"
      ? clients
      : clients.filter((c) => c.category === activeCategory);

  return (
    <div>
      {/* Filtres par catégorie */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
          {clientCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`font-sans text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-400 ${
                activeCategory === cat.value
                  ? "bg-bordeaux text-creme border-bordeaux"
                  : "bg-transparent text-bordeaux/60 border-bordeaux/20 hover:border-bordeaux/50 hover:text-bordeaux"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Grille de clients */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredClients.map((client, index) => (
          <ClientCard key={client._id} client={client} index={index} />
        ))}
      </div>

      {/* Message si aucun résultat */}
      {filteredClients.length === 0 && (
        <div className="text-center py-20">
          <p className="font-serif text-xl italic text-bordeaux/40">
            Aucun client dans cette catégorie pour le moment.
          </p>
        </div>
      )}
    </div>
  );
}
