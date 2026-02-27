/**
 * API utilitaires — Novacom
 * Couche d'abstraction : Sanity CMS → fallback données mock
 */

import { sanityClient, urlFor } from "./sanity.client";
import {
  allClientsQuery,
  featuredClientsQuery,
  clientBySlugQuery,
  heroSettingsQuery,
} from "./sanity.queries";
import {
  clients as mockClients,
  services,
  heroSettings as mockHeroSettings,
  expertises,
  trustPartners,
} from "./data";
import type { Client, Service, HeroSettings, Expertise, TrustPartner } from "@/types";

/* ─── Helpers ─── */

/** Map slug → logo local */
const LOCAL_LOGOS: Record<string, string> = {
  "helena-joy": "/images/clients/helena-joy.png",
  "raphaela-silk": "/images/clients/raphaela-silk.png",
  "my-little-group": "/images/clients/mlg.png",
  "pasino-grand": "/images/clients/pasino-grand.png",
  "le-pavillon": "/images/clients/le-pavillon.png",
  "burj-immo": "/images/clients/burj-immo.png",
  "redskins": "/images/clients/redskins.png",
  "she-is-fit": "/images/clients/she-is-fit.png",
  "bat-melech-wigs": "/images/clients/bat-melech.png",
  "maison-blaggio": "/images/clients/maison-blaggio.png",
  "paclim": "/images/clients/paclim.png",
  "street-connexion": "/images/clients/street-connexion.png",
  "sweet-home": "/images/clients/sweet-home.png",
};

/** Map slug → galerie locale */
const LOCAL_GALLERIES: Record<string, { url: string; alt: string }[]> = {
  "helena-joy": [
    { url: "/images/gallery/helena-joy/1.png", alt: "Helena Joy 1" },
    { url: "/images/gallery/helena-joy/2.png", alt: "Helena Joy 2" },
    { url: "/images/gallery/helena-joy/3.png", alt: "Helena Joy 3" },
  ],
  "raphaela-silk": [
    { url: "/images/gallery/raphaela-silk/1.jpeg", alt: "Raphaela Silk" },
  ],
  "pasino-grand": [
    { url: "/images/gallery/pasino-grand/1.png", alt: "Pasino Grand 1" },
    { url: "/images/gallery/pasino-grand/2.png", alt: "Pasino Grand 2" },
    { url: "/images/gallery/pasino-grand/3.png", alt: "Pasino Grand 3" },
  ],
  "le-pavillon": [
    { url: "/images/gallery/le-pavillon/1.png", alt: "Le Pavillon Hotel" },
  ],
  "burj-immo": [
    { url: "/images/gallery/burj-immo/1.png", alt: "Burj Immo 1" },
    { url: "/images/gallery/burj-immo/2.png", alt: "Burj Immo 2" },
    { url: "/images/gallery/burj-immo/3.png", alt: "Burj Immo 3" },
    { url: "/images/gallery/burj-immo/4.png", alt: "Burj Immo 4" },
  ],
  "redskins": [
    { url: "/images/gallery/redskins/1.jpg", alt: "Redskins 1" },
    { url: "/images/gallery/redskins/2.jpg", alt: "Redskins 2" },
    { url: "/images/gallery/redskins/3.jpg", alt: "Redskins 3" },
    { url: "/images/gallery/redskins/4.jpg", alt: "Redskins 4" },
    { url: "/images/gallery/redskins/5.jpg", alt: "Redskins 5" },
  ],
  "she-is-fit": [
    { url: "/images/gallery/she-is-fit/1.png", alt: "She Is Fit 1" },
    { url: "/images/gallery/she-is-fit/2.png", alt: "She Is Fit 2" },
    { url: "/images/gallery/she-is-fit/3.png", alt: "She Is Fit 3" },
  ],
  "bat-melech-wigs": [
    { url: "/images/gallery/bat-melech-wigs/1.png", alt: "Bat Melech Wigs 1" },
    { url: "/images/gallery/bat-melech-wigs/2.png", alt: "Bat Melech Wigs 2" },
    { url: "/images/gallery/bat-melech-wigs/3.png", alt: "Bat Melech Wigs 3" },
  ],
};

/** Transformer un logo Sanity en URL d'image + résoudre la galerie */
function resolveClientLogo(client: any): Client {
  // Prioriser les logos locaux quand ils existent
  const localLogo = LOCAL_LOGOS[client.slug] || "";
  const sanityLogo = client.logo?.asset ? urlFor(client.logo).width(200).url() : "";
  
  // Prioriser les galeries locales
  const localGallery = LOCAL_GALLERIES[client.slug] || [];
  const sanityGallery = client.gallery?.length
    ? client.gallery.map((img: any) => ({
        ...img,
        url: urlFor(img.asset).width(800).url(),
      }))
    : [];
    
  return {
    ...client,
    logo: localLogo || sanityLogo,
    gallery: localGallery.length > 0 ? localGallery : sanityGallery,
  };
}

/** Exclure par défaut certains clients (fallback mock) */
const EXCLUDED_CLIENTS = ["GAM Innovation"];

/* ─── Clients ─── */

/** Récupérer tous les clients — Sanity d'abord, sinon mock */
export async function getClients(): Promise<Client[]> {
  try {
    const data = await sanityClient.fetch(allClientsQuery);
    if (data && data.length > 0) {
      return data.map(resolveClientLogo);
    }
  } catch (e) {
    console.warn("[Novacom] Sanity indisponible, fallback mock clients");
  }
  // Fallback sur les données mock
  return mockClients
    .filter((c) => !EXCLUDED_CLIENTS.includes(c.name))
    .sort((a, b) => a.order - b.order);
}

/** Récupérer les clients "featured" pour la homepage */
export async function getFeaturedClients(): Promise<Client[]> {
  try {
    const data = await sanityClient.fetch(featuredClientsQuery);
    if (data && data.length > 0) {
      return data.map(resolveClientLogo);
    }
  } catch (e) {
    // fallback
  }
  const all = await getClients();
  return all.filter((c) => c.featured);
}

/** Récupérer un client par son slug */
export async function getClientBySlug(slug: string): Promise<Client | undefined> {
  try {
    const data = await sanityClient.fetch(clientBySlugQuery, { slug });
    if (data) {
      return resolveClientLogo(data);
    }
  } catch (e) {
    // fallback
  }
  const all = await getClients();
  return all.find((c) => c.slug === slug);
}

/** Récupérer les clients par catégorie */
export async function getClientsByCategory(category: string): Promise<Client[]> {
  const all = await getClients();
  if (category === "all") return all;
  return all.filter((c) => c.category === category);
}

/* ─── Services ─── */

export async function getServices(): Promise<Service[]> {
  return services;
}

/* ─── Hero Settings ─── */

export async function getHeroSettings(): Promise<HeroSettings> {
  try {
    const data = await sanityClient.fetch(heroSettingsQuery);
    if (data) {
      return {
        title: data.title || mockHeroSettings.title,
        subtitle: data.subtitle || mockHeroSettings.subtitle,
        ctaText: data.ctaText || mockHeroSettings.ctaText,
        ctaLink: data.ctaLink || mockHeroSettings.ctaLink,
        videoUrl: data.videoUrl || mockHeroSettings.videoUrl,
        overlayOpacity: data.overlayOpacity ?? mockHeroSettings.overlayOpacity,
      };
    }
  } catch (e) {
    console.warn("[Novacom] Sanity indisponible, fallback mock hero");
  }
  return mockHeroSettings;
}

/* ─── Expertises ─── */

export async function getExpertises(): Promise<Expertise[]> {
  return expertises;
}

/* ─── Trust Partners ─── */

export async function getTrustPartners(): Promise<TrustPartner[]> {
  return trustPartners;
}
