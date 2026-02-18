import Link from "next/link";
import Button from "@/components/ui/Button";

/**
 * Page 404 — Not Found
 * Design éditorial cohérent avec le reste du site
 */
export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-creme">
      <div className="container-wide text-center">
        <p className="font-serif text-[10rem] md:text-[15rem] italic text-nude/20 leading-none mb-4">
          404
        </p>
        <h1 className="font-serif text-display-md italic text-bordeaux mb-6">
          Page introuvable
        </h1>
        <p className="font-sans text-body-md text-bordeaux/50 mb-12 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button href="/">Retour à l&apos;accueil</Button>
      </div>
    </section>
  );
}
