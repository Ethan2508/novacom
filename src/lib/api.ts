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

/** Transformer un logo Sanity en URL d'image + résoudre la galerie */
function resolveClientLogo(client: any): Client {
  // Vérifier que le logo Sanity a bien un asset (upload terminé)
  const sanityLogo = client.logo?.asset ? urlFor(client.logo).width(200).url() : "";
  const localLogo = LOCAL_LOGOS[client.slug] || "";
  return {
    ...client,
    logo: sanityLogo || localLogo,
    gallery: client.gallery
      ? client.gallery.map((img: any) => ({
          ...img,
          url: urlFor(img.asset).width(800).url(),
        }))
      : [],
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
