/**
 * Requêtes GROQ — Novacom
 * Toutes les requêtes vers Sanity centralisées ici
 */

/** Tous les clients (sauf exclus), triés par ordre */
export const allClientsQuery = `
  *[_type == "client" && !(name in ["GAM Innovation", "Street Connexion"])] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    logo,
    description,
    mission,
    category,
    date,
    order,
    featured
  }
`;

/** Clients featured pour la homepage */
export const featuredClientsQuery = `
  *[_type == "client" && featured == true && !(name in ["GAM Innovation", "Street Connexion"])] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    logo,
    description,
    mission,
    category,
    date,
    order,
    featured
  }
`;

/** Client par slug */
export const clientBySlugQuery = `
  *[_type == "client" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    logo,
    description,
    mission,
    category,
    date,
    order,
    featured
  }
`;

/** Paramètres du hero homepage */
export const heroSettingsQuery = `
  *[_type == "heroSettings"][0] {
    title,
    subtitle,
    ctaText,
    ctaLink,
    "videoUrl": video.asset->url,
    "posterUrl": posterImage.asset->url,
    overlayOpacity
  }
`;
