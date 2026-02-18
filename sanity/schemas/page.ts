/**
 * Schéma Sanity — Collection "Page"
 * Permet de modifier les textes des pages depuis le CMS
 */
const page = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre de la page",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "seoTitle",
      title: "Titre SEO",
      type: "string",
      description: "Titre affiché dans les moteurs de recherche",
    },
    {
      name: "seoDescription",
      title: "Description SEO",
      type: "text",
      rows: 2,
      description: "Description affichée dans les moteurs de recherche",
      validation: (Rule: any) => Rule.max(160),
    },
    {
      name: "content",
      title: "Contenu",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Titre H2", value: "h2" },
            { title: "Titre H3", value: "h3" },
            { title: "Citation", value: "blockquote" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Texte alternatif",
              type: "string",
            },
            {
              name: "caption",
              title: "Légende",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
};

export default page;
