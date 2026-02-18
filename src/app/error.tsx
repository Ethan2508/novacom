"use client";

import Button from "@/components/ui/Button";

/**
 * Page d'erreur globale — Error Boundary
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-creme">
      <div className="container-wide text-center">
        <p className="font-serif text-8xl italic text-nude/20 mb-8">Oops</p>
        <h1 className="font-serif text-display-md italic text-bordeaux mb-6">
          Une erreur est survenue
        </h1>
        <p className="font-sans text-body-md text-bordeaux/50 mb-12 max-w-md mx-auto">
          Nous sommes désolés, quelque chose s&apos;est mal passé. Veuillez réessayer.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Réessayer
        </button>
      </div>
    </section>
  );
}
