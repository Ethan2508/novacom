/* ─── Types globaux du projet Novacom ─── */

/** Client de l'agence */
export interface Client {
  _id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  mission: string;
  category: ClientCategory;
  date: string;
  order: number;
  featured: boolean;
}

/** Catégories de clients */
export type ClientCategory =
  | "branding"
  | "social-media"
  | "strategie"
  | "contenu"
  | "shooting"
  | "global";

/** Service de l'agence */
export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

/** Configuration du Hero */
export interface HeroSettings {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  videoUrl: string;
  overlayOpacity: number;
}

/** Expertise affichée en homepage */
export interface Expertise {
  title: string;
  description: string;
  icon: string;
}

/** Partenaire / logo "Ils nous ont fait confiance" */
export interface TrustPartner {
  name: string;
  logo: string;
  slug: string;
}

/** Navigation item */
export interface NavItem {
  label: string;
  href: string;
}

/** Metadata SEO par page */
export interface PageSEO {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
}
