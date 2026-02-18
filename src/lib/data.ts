import { Client, Service, HeroSettings, Expertise, TrustPartner, NavItem } from "@/types";

/* ─── Navigation ─── */
export const navigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
];

/* ─── Hero Settings ─── */
export const heroSettings: HeroSettings = {
  title: "Créons ensemble\nvotre histoire",
  subtitle:
    "Novacom accompagne les marques ambitieuses dans leur communication digitale avec créativité, stratégie et excellence.",
  ctaText: "Découvrir nos services",
  ctaLink: "/services",
  videoUrl: "/videos/hero-bg.mp4",
  overlayOpacity: 0.45,
};

/* ─── Expertises ─── */
export const expertises: Expertise[] = [
  {
    title: "Stratégie digitale",
    description:
      "Nous élaborons des stratégies sur-mesure pour maximiser votre présence en ligne et atteindre vos objectifs.",
    icon: "strategy",
  },
  {
    title: "Création de contenus",
    description:
      "Du concept à la réalisation, nous produisons des contenus visuels et rédactionnels qui captivent votre audience.",
    icon: "content",
  },
  {
    title: "Réseaux sociaux",
    description:
      "Gestion complète de vos plateformes sociales : planning éditorial, création, publication et analyse.",
    icon: "social",
  },
  {
    title: "Identité visuelle",
    description:
      "Nous développons des identités de marque fortes, cohérentes et mémorables qui vous démarquent.",
    icon: "branding",
  },
];

/* ─── Services ─── */
export const services: Service[] = [
  {
    id: "creation-contenus",
    title: "Création de contenus",
    description:
      "Nous concevons et produisons des contenus visuels et rédactionnels percutants pour vos supports digitaux et print.",
    details: [
      "Direction artistique",
      "Photographie & vidéo",
      "Rédaction web & storytelling",
      "Design graphique",
      "Motion design",
    ],
    icon: "✦",
  },
  {
    id: "gestion-reseaux-sociaux",
    title: "Gestion réseaux sociaux",
    description:
      "Nous gérons vos réseaux sociaux de A à Z pour construire une communauté engagée et fidèle autour de votre marque.",
    details: [
      "Audit & stratégie social media",
      "Planning éditorial",
      "Création de contenus natifs",
      "Community management",
      "Reporting & analytics",
    ],
    icon: "◆",
  },
  {
    id: "organisation-shootings",
    title: "Organisation shootings",
    description:
      "De la conception au post-traitement, nous organisons des shootings photo et vidéo qui subliment votre image.",
    details: [
      "Conception & moodboard",
      "Casting & stylisme",
      "Direction artistique sur set",
      "Post-production",
      "Livraison multi-formats",
    ],
    icon: "●",
  },
  {
    id: "strategie-digitale",
    title: "Stratégie digitale",
    description:
      "Nous définissons une stratégie digitale complète alignée sur vos objectifs business pour un impact mesurable.",
    details: [
      "Audit de présence digitale",
      "Définition des objectifs",
      "Plan d'actions omnicanal",
      "Suivi KPI & optimisation",
      "Formation équipes internes",
    ],
    icon: "◇",
  },
  {
    id: "veille-concurrentielle",
    title: "Veille concurrentielle",
    description:
      "Nous analysons votre marché et vos concurrents pour identifier les opportunités et vous garder en avance.",
    details: [
      "Benchmark sectoriel",
      "Analyse des tendances",
      "Monitoring concurrentiel",
      "Rapports d'insights",
      "Recommandations stratégiques",
    ],
    icon: "◈",
  },
  {
    id: "identite-visuelle",
    title: "Développement identité",
    description:
      "Nous créons des identités visuelles fortes et cohérentes qui incarnent les valeurs de votre marque.",
    details: [
      "Création de logo",
      "Charte graphique complète",
      "Univers de marque",
      "Déclinaisons supports",
      "Guidelines d'utilisation",
    ],
    icon: "✧",
  },
  {
    id: "accompagnement-global",
    title: "Accompagnement global",
    description:
      "Un accompagnement 360° pour les marques qui veulent externaliser leur communication en toute confiance.",
    details: [
      "Direction de communication",
      "Conseil stratégique",
      "Coordination des prestataires",
      "Gestion de projet",
      "Reporting mensuel",
    ],
    icon: "⬡",
  },
];

/* ─── Clients (données mock) ─── */
export const clients: Client[] = [
  {
    _id: "1",
    name: "Helena Joy",
    slug: "helena-joy",
    logo: "",
    description:
      "Marque de cosmétiques haut de gamme spécialisée dans les soins naturels et le bien-être.",
    mission:
      "Stratégie social media complète, création de contenus lifestyle et gestion de campagnes d'influence.",
    category: "social-media",
    date: "2025-09",
    order: 1,
    featured: true,
  },
  {
    _id: "2",
    name: "Raphaela Silk",
    slug: "raphaela-silk",
    logo: "",
    description:
      "Créatrice de mode éthique proposant des pièces en soie naturelle et matières nobles.",
    mission:
      "Direction artistique, shootings lookbook et déploiement de l'identité visuelle sur l'ensemble des supports digitaux.",
    category: "branding",
    date: "2025-08",
    order: 2,
    featured: true,
  },
  {
    _id: "3",
    name: "My Little Group",
    slug: "my-little-group",
    logo: "",
    description:
      "Groupe événementiel spécialisé dans l'organisation de soirées privées et événements corporate.",
    mission:
      "Refonte de l'identité de marque, stratégie de contenu et community management multi-plateformes.",
    category: "global",
    date: "2025-07",
    order: 3,
    featured: true,
  },
  {
    _id: "4",
    name: "Pasino Grand",
    slug: "pasino-grand",
    logo: "",
    description:
      "Complexe de divertissement premium alliant casino, restauration gastronomique et spectacles.",
    mission:
      "Stratégie digitale 360°, campagnes publicitaires ciblées et production de contenus vidéo immersifs.",
    category: "strategie",
    date: "2025-06",
    order: 4,
    featured: true,
  },
  {
    _id: "5",
    name: "Le Pavillon",
    slug: "le-pavillon",
    logo: "",
    description:
      "Hôtel boutique du Pasino, offrant une expérience d'hébergement luxueuse et personnalisée.",
    mission:
      "Shooting photo des suites et espaces, création de l'univers visuel et gestion des réseaux sociaux.",
    category: "shooting",
    date: "2025-05",
    order: 5,
    featured: true,
  },
  {
    _id: "6",
    name: "Burj Immo",
    slug: "burj-immo",
    logo: "",
    description:
      "Agence immobilière de prestige spécialisée dans les biens haut de gamme et l'investissement.",
    mission:
      "Création de contenus premium pour les réseaux sociaux, shooting des biens et stratégie d'acquisition digitale.",
    category: "contenu",
    date: "2025-04",
    order: 6,
    featured: true,
  },
  {
    _id: "7",
    name: "Redskins",
    slug: "redskins",
    logo: "",
    description:
      "Marque emblématique de prêt-à-porter et maroquinerie, connue pour ses blousons en cuir iconiques.",
    mission:
      "Accompagnement global en communication digitale, veille concurrentielle et stratégie d'influence.",
    category: "global",
    date: "2025-03",
    order: 7,
    featured: true,
  },
  {
    _id: "8",
    name: "She Is Fit",
    slug: "she-is-fit",
    logo: "",
    description:
      "Marque de sportswear féminin alliant performance, style et inclusivité.",
    mission:
      "Direction artistique, shootings sportswear, création de contenus engageants et gestion Instagram.",
    category: "shooting",
    date: "2025-02",
    order: 8,
    featured: true,
  },
  {
    _id: "9",
    name: "Bat Melech Wigs",
    slug: "bat-melech-wigs",
    logo: "",
    description:
      "Maison spécialisée dans les perruques de luxe et les solutions capillaires sur-mesure.",
    mission:
      "Développement de l'identité visuelle, shooting produit et stratégie de contenu social media.",
    category: "branding",
    date: "2025-01",
    order: 9,
    featured: true,
  },
];

/* ─── Partenaires "Ils nous ont fait confiance" ─── */
export const trustPartners: TrustPartner[] = [
  { name: "Helena Joy", logo: "", slug: "helena-joy" },
  { name: "Raphaela Silk", logo: "", slug: "raphaela-silk" },
  { name: "My Little Group", logo: "", slug: "my-little-group" },
  { name: "Pasino Grand", logo: "", slug: "pasino-grand" },
  { name: "Le Pavillon", logo: "", slug: "le-pavillon" },
  { name: "Burj Immo", logo: "", slug: "burj-immo" },
  { name: "Redskins", logo: "", slug: "redskins" },
  { name: "She Is Fit", logo: "", slug: "she-is-fit" },
  { name: "Bat Melech Wigs", logo: "", slug: "bat-melech-wigs" },
];

/* ─── Catégories de clients pour filtrage ─── */
export const clientCategories: { value: string; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "branding", label: "Branding" },
  { value: "social-media", label: "Social Media" },
  { value: "strategie", label: "Stratégie" },
  { value: "contenu", label: "Contenu" },
  { value: "shooting", label: "Shooting" },
  { value: "global", label: "Global" },
];
