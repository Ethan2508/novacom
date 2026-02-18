/**
 * Configuration Sanity — Novacom
 * Centralise les variables d'environnement Sanity
 */

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "7n53hj0o",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  /**
   * Utiliser le CDN en production pour des lectures rapides,
   * désactivé en preview pour avoir les données les plus fraîches
   */
  useCdn: process.env.NODE_ENV === "production",
};
