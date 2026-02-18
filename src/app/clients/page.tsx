import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import ClientsGrid from "@/components/sections/ClientsGrid";
import { getClients } from "@/lib/api";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Découvrez les marques et entreprises qui font confiance à Novacom pour leur communication digitale, leur identité visuelle et leur stratégie de contenu.",
};

/** Revalidation ISR toutes les 60 secondes */
export const revalidate = 60;

/**
 * Page Clients — /clients
 * Grille dynamique avec filtrage par catégorie
 */
export default async function ClientsPage() {
  const clients = await getClients();

  return (
    <>
      {/* Hero éditorial */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-creme">
        <div className="container-wide">
          <SectionHeader
            label="Portfolio"
            title="Des marques qui<br/>nous inspirent."
            description="Chaque collaboration est une nouvelle opportunité de créer quelque chose d'exceptionnel. Découvrez les projets qui façonnent notre parcours."
          />
        </div>
      </section>

      {/* Grille clients */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ClientsGrid clients={clients} />
        </div>
      </section>
    </>
  );
}
