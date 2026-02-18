/**
 * Configuration Sanity Studio — Novacom
 * Définit les schémas et la structure du CMS
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "novacom-studio",
  title: "Novacom — Administration",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "7n53hj0o",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            // Section Clients
            S.listItem()
              .title("📋 Clients")
              .child(
                S.documentTypeList("client")
                  .title("Tous les clients")
                  .defaultOrdering([{ field: "order", direction: "asc" }])
              ),

            S.divider(),

            // Section Hero
            S.listItem()
              .title("🎬 Hero (Accueil)")
              .child(
                S.documentTypeList("heroSettings")
                  .title("Paramètres du Hero")
              ),

            // Section Pages
            S.listItem()
              .title("📄 Pages")
              .child(
                S.documentTypeList("page")
                  .title("Pages du site")
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
