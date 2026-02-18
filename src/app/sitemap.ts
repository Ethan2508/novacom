import { MetadataRoute } from "next";

/**
 * Sitemap dynamique — Novacom
 * Génère automatiquement le sitemap XML pour le SEO
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://novacom.agency";

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Pages dynamiques clients
  // TODO: Remplacer par appel CMS pour les slugs clients
  const { getClients } = await import("@/lib/api");
  const clients = await getClients();

  const clientPages: MetadataRoute.Sitemap = clients.map((client) => ({
    url: `${baseUrl}/clients/${client.slug}`,
    lastModified: new Date(client.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...clientPages];
}
