/**
 * Script pour ajouter les 4 nouveaux clients dans Sanity Studio
 * Usage : SANITY_TOKEN=xxx node scripts/seed-new-clients.mjs
 */
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "7n53hj0o",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const newClients = [
  {
    _type: "client",
    name: "Maison Blaggio",
    slug: { _type: "slug", current: "maison-blaggio" },
    description: "Maison de mode masculine proposant des collections élégantes et contemporaines.",
    mission: "Stratégie de communication digitale, création de contenus et gestion des réseaux sociaux.",
    category: "social-media",
    date: "2024-12-01",
    order: 10,
    featured: true,
  },
  {
    _type: "client",
    name: "Paclim",
    slug: { _type: "slug", current: "paclim" },
    description: "Entreprise spécialisée dans les solutions de climatisation et confort thermique.",
    mission: "Refonte de l'identité visuelle, création de supports print et développement de la présence digitale.",
    category: "branding",
    date: "2024-11-01",
    order: 11,
    featured: true,
  },
  {
    _type: "client",
    name: "Street Connexion",
    slug: { _type: "slug", current: "street-connexion" },
    description: "Marque streetwear urbaine mêlant culture hip-hop et tendances contemporaines.",
    mission: "Direction artistique, shootings lookbook et stratégie social media pour renforcer l'image de marque.",
    category: "global",
    date: "2024-10-01",
    order: 12,
    featured: true,
  },
  {
    _type: "client",
    name: "Sweet Home",
    slug: { _type: "slug", current: "sweet-home" },
    description: "Enseigne de décoration d'intérieur et d'ameublement haut de gamme.",
    mission: "Création de contenus visuels, stratégie Instagram et accompagnement en communication digitale.",
    category: "contenu",
    date: "2024-09-01",
    order: 13,
    featured: true,
  },
];

async function seed() {
  console.log("⏳ Création des 4 nouveaux clients dans Sanity...\n");

  for (const doc of newClients) {
    try {
      const result = await client.create(doc);
      console.log(`✅ ${doc.name} → ${result._id}`);
    } catch (err) {
      console.error(`❌ ${doc.name} :`, err.message);
    }
  }

  console.log("\n🎉 Terminé !");
}

seed();
