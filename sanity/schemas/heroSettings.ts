/**
 * Schéma Sanity — Collection "Hero Settings"
 * Permet de modifier le hero de la page d'accueil depuis le CMS
 */
const heroSettings = {
  name: "heroSettings",
  title: "Paramètres Hero",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre principal",
      type: "string",
      description: "Titre affiché dans le hero (retour à la ligne avec \\n)",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Sous-titre",
      type: "text",
      rows: 2,
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: "ctaText",
      title: "Texte du bouton CTA",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "ctaLink",
      title: "Lien du bouton CTA",
      type: "string",
      description: "Ex: /services, /about, mailto:...",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "video",
      title: "Vidéo de fond",
      type: "file",
      options: {
        accept: "video/mp4",
      },
      description: "Vidéo MP4 optimisée (720p recommandé, max 10MB)",
    },
    {
      name: "posterImage",
      title: "Image de couverture",
      type: "image",
      description: "Image affichée avant le chargement de la vidéo",
      options: {
        hotspot: true,
      },
    },
    {
      name: "overlayOpacity",
      title: "Opacité de l'overlay",
      type: "number",
      description: "Entre 0 (transparent) et 1 (opaque). Recommandé: 0.45",
      validation: (Rule: any) => Rule.required().min(0).max(1),
      initialValue: 0.45,
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "posterImage",
    },
  },
};

export default heroSettings;
