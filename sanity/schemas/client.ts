/**
 * Schéma Sanity — Collection "Client"
 * Utilisé pour gérer les projets clients dynamiquement
 */
const client = {
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom du client",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required().max(300),
    },
    {
      name: "mission",
      title: "Mission réalisée",
      type: "text",
      rows: 4,
      description: "Décrivez la mission réalisée pour ce client",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Branding", value: "branding" },
          { title: "Social Media", value: "social-media" },
          { title: "Stratégie", value: "strategie" },
          { title: "Contenu", value: "contenu" },
          { title: "Shooting", value: "shooting" },
          { title: "Global", value: "global" },
        ],
        layout: "radio",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "date",
      title: "Date du projet",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
    },
    {
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      description: "Plus le nombre est petit, plus le client apparaît en premier",
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: "featured",
      title: "Mis en avant",
      type: "boolean",
      description: "Afficher ce client sur la page d'accueil",
      initialValue: false,
    },
    {
      name: "gallery",
      title: "Galerie photos",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Texte alternatif",
              type: "string",
            },
          ],
        },
      ],
      description: "Ajoutez les photos de vos réalisations pour ce client",
    },
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Date (récent)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "logo",
    },
  },
};

export default client;
