import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getClientBySlug, getClients } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

interface ClientPageProps {
  params: { slug: string };
}

/** Générer les pages statiques pour tous les clients */
export async function generateStaticParams() {
  const clients = await getClients();
  return clients.map((client) => ({ slug: client.slug }));
}

/** SEO dynamique par client */
export async function generateMetadata({
  params,
}: ClientPageProps): Promise<Metadata> {
  const client = await getClientBySlug(params.slug);
  if (!client) return { title: "Client introuvable" };

  return {
    title: client.name,
    description: `${client.description} — Mission réalisée par Novacom : ${client.mission}`,
  };
}

/** Revalidation ISR */
export const revalidate = 60;

/**
 * Page dynamique client — /clients/[slug]
 * Présentation détaillée d'un projet client
 */
export default async function ClientPage({ params }: ClientPageProps) {
  const client = await getClientBySlug(params.slug);

  if (!client) {
    notFound();
  }

  return (
    <>
      {/* Hero client */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 bg-creme">
        <div className="container-wide">
          {/* Breadcrumb */}
          <ScrollReveal>
            <nav className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-bordeaux/40 mb-12">
              <Link
                href="/clients"
                className="hover:text-bordeaux transition-colors duration-400"
              >
                Clients
              </Link>
              <span>/</span>
              <span className="text-bordeaux/70">{client.name}</span>
            </nav>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Infos */}
            <div>
              <ScrollReveal>
                <span className="font-sans text-xs uppercase tracking-widest text-nude-dark mb-4 block">
                  {client.category}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-serif text-display-lg italic text-bordeaux mb-6">
                  {client.name}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="divider mb-8" />
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="font-sans text-body-lg text-bordeaux/65 mb-4">
                  {client.description}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <p className="font-sans text-sm text-bordeaux/40">
                  {formatDate(client.date)}
                </p>
              </ScrollReveal>
            </div>

            {/* Logo */}
            <ScrollReveal>
              <div className="flex items-center justify-center">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                  />
                ) : (
                  <span className="font-serif text-8xl italic text-nude/30">
                    {client.name.charAt(0)}
                  </span>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission réalisée */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-nude-dark mb-6">
                Mission réalisée
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-display-md italic text-bordeaux mb-8">
                Ce que nous avons<br/>accompli ensemble.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-sans text-body-lg text-bordeaux/65 leading-relaxed">
                {client.mission}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Galerie photos */}
      {client.gallery && client.gallery.length > 0 && (
        <section className="section-padding bg-creme">
          <div className="container-wide">
            <ScrollReveal>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-nude-dark mb-10">
                Galerie
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {client.gallery.map((img, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image
                      src={img.url || ""}
                      alt={img.alt || `${client.name} — photo ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation vers d'autres projets */}
      <section className="section-padding bg-creme">
        <div className="container-wide text-center">
          <ScrollReveal>
            <p className="font-sans text-xs uppercase tracking-widest text-nude-dark mb-8">
              Continuer l&apos;exploration
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Button href="/clients" variant="outline">
              Voir tous les projets
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
