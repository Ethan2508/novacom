import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://novacom.agency"),
  title: {
    default: "Novacom — Agence de Communication Créative",
    template: "%s | Novacom",
  },
  description:
    "Novacom est une agence de communication créative spécialisée en stratégie digitale, création de contenus, gestion des réseaux sociaux et identité visuelle.",
  keywords: [
    "agence communication",
    "communication digitale",
    "stratégie digitale",
    "création de contenus",
    "réseaux sociaux",
    "identité visuelle",
    "branding",
    "Novacom",
  ],
  authors: [{ name: "Novacom" }],
  creator: "Novacom",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://novacom.agency",
    siteName: "Novacom",
    title: "Novacom — Agence de Communication Créative",
    description:
      "Stratégie, contenu & identité. Nous accompagnons les marques ambitieuses.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Novacom — Agence de Communication Créative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novacom — Agence de Communication Créative",
    description:
      "Stratégie, contenu & identité. Nous accompagnons les marques ambitieuses.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-creme text-bordeaux antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
