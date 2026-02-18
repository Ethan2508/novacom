/**
 * Script pour injecter les 9 clients dans Sanity Studio
 * Usage : node scripts/seed-clients.mjs
 */
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "7n53hj0o",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const clients = [
  {
    _type: "client",
    name: "Helena Joy",
    slug: { _type: "slug", current: "helena-joy" },
    description: "Marque de cosmétiques haut de gamme spécialisée dans les soins naturels et le bien-être.",
    mission: "Stratégie social media complète, création de contenus lifestyle et gestion de campagnes d'influence.",
    category: "social-media",
    date: "2025-09-01",
    order: 1,
    featured: true,
  },
  {
    _type: "client",
    name: "Raphaela Silk",
    slug: { _type: "slug", current: "raphaela-silk" },
    description: "Créatrice de mode éthique proposant des pièces en soie naturelle et matières nobles.",
    mission: "Direction artistique, shootings lookbook et déploiement de l'identité visuelle sur l'ensemble des supports digitaux.",
    category: "branding",
    date: "2025-08-01",
    order: 2,
    featured: true,
  },
  {
    _type: "client",
    name: "My Little Group",
    slug: { _type: "slug", current: "my-little-group" },
    description: "Groupe événementiel spécialisé dans l'organisation de soirées privées et événements corporate.",
    mission: "Refonte de l'identité de marque, stratégie de contenu et community management multi-plateformes.",
    category: "global",
    date: "2025-07-01",
    order: 3,
    featured: true,
  },
  {
    _type: "client",
    name: "Pasino Grand",
    slug: { _type: "slug", current: "pasino-grand" },
    description: "Complexe de divertissement premium alliant casino, restauration gastronomique et spectacles.",
    mission: "Stratégie digitale 360°, campagnes publicitaires ciblées et production de contenus vidéo immersifs.",
    category: "strategie",
    date: "2025-06-01",
    order: 4,
    featured: true,
  },
  {
    _type: "client",
    name: "Le Pavillon",
    slug: { _type: "slug", current: "le-pavillon" },
    description: "Hôtel boutique du Pasino, offrant une expérience d'hébergement luxueuse et personnalisée.",
    mission: "Shooting photo des suites et espaces, création de l'univers visuel et gestion des réseaux sociaux.",
    category: "shooting",
    date: "2025-05-01",
    order: 5,
    featured: true,
  },
  {
    _type: "client",
    name: "Burj Immo",
    slug: { _type: "slug", current: "burj-immo" },
    description: "Agence immobilière de prestige spécialisée dans les biens haut de gamme et l'investissement.",
    mission: "Création de contenus premium pour les réseaux sociaux, shooting des biens et stratégie d'acquisition digitale.",
    category: "contenu",
    date: "2025-04-01",
    order: 6,
    featured: true,
  },
  {
    _type: "client",
    name: "Redskins",
    slug: { _type: "slug", current: "redskins" },
    description: "Marque emblématique de prêt-à-porter et maroquinerie, connue pour ses blousons en cuir iconiques.",
    mission: "Accompagnement global en communication digitale, veille concurrentielle et stratégie d'influence.",
    category: "global",
    date: "2025-03-01",
    order: 7,
    featured: true,
  },
  {
    _type: "client",
    name: "She Is Fit",
    slug: { _type: "slug", current: "she-is-fit" },
    description: "Marque de sportswear féminin alliant performance, style et inclusivité.",
    mission: "Direction artistique, shootings sportswear, création de contenus engageants et gestion Instagram.",
    category: "shooting",
    date: "2025-02-01",
    order: 8,
    featured: true,
  },
  {
    _type: "client",
    name: "Bat Melech Wigs",
    slug: { _type: "slug", current: "bat-melech-wigs" },
    description: "Maison spécialisée dans les perruques de luxe et les solutions capillaires sur-mesure.",
    mission: "Développement de l'identité visuelle, shooting produit et stratégie de contenu social media.",
    category: "branding",
    date: "2025-01-01",
    order: 9,
    featured: true,
  },
];

async function seed() {
  console.log("🚀 Injection des clients dans Sanity...\n");

  for (const doc of clients) {
    try {
      const result = await client.create(doc);
      console.log(`✅ ${doc.name} → ${result._id}`);
    } catch (err) {
      console.error(`❌ ${doc.name} :`, err.message);
    }
  }

  console.log("\n✨ Terminé !");
}

seed();
