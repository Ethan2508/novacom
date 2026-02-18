/**
 * Client Sanity — Novacom
 * Utilisé pour requêter les données depuis le CMS
 */

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./sanity.config";

/** Client Sanity pour les requêtes GROQ */
export const sanityClient = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
});

/** Builder d'URL d'images Sanity */
const builder = imageUrlBuilder(sanityClient);

/**
 * Générer une URL optimisée pour une image Sanity
 * @example urlFor(client.logo).width(200).url()
 */
export function urlFor(source: any) {
  return builder.image(source);
}
