import { MetadataRoute } from "next";

/**
 * robots.txt — Novacom
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://novacom.agency/sitemap.xml",
  };
}
