import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/data";

/**
 * Footer — Pied de page Novacom
 * Design éditorial sobre, fond bordeaux
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bordeaux text-creme">
      {/* Section CTA */}
      <div className="container-wide section-padding border-b border-creme/10">
        <div className="max-w-3xl">
          <p className="font-sans text-sm uppercase tracking-widest text-nude mb-6">
            Un projet en tête ?
          </p>
          <h2 className="font-serif text-display-lg italic text-creme mb-8">
            Parlons de votre
            <br />
            prochaine ambition.
          </h2>
          <a
            href="mailto:contact@nova-com.fr"
            className="inline-flex items-center gap-3 border border-creme text-creme px-8 py-4 text-sm font-sans font-medium uppercase tracking-widest transition-all duration-400 hover:bg-creme hover:text-bordeaux hover:gap-4"
          >
            Nous contacter
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-400"
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Navigation + infos */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Marque */}
          <div>
            <Image
              src="/images/logo-novacom.png"
              alt="Novacom"
              width={140}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="font-sans text-sm text-creme/60 leading-relaxed max-w-xs">
              Agence de communication créative.
              <br />
              Stratégie, contenu & identité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-nude mb-6">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm text-creme/70 hover:text-creme transition-colors duration-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-nude mb-6">
              Contact
            </p>
            <div className="flex flex-col gap-3 font-sans text-sm text-creme/70">
              <a
                href="mailto:contact@nova-com.fr"
                className="hover:text-creme transition-colors duration-400"
              >
                contact@nova-com.fr
              </a>
              <a
                href="tel:+33778510655"
                className="hover:text-creme transition-colors duration-400"
              >
                07 78 51 06 55
              </a>
              <a
                href="https://instagram.com/novacom"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-creme transition-colors duration-400"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/novacom"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-creme transition-colors duration-400"
              >
                LinkedIn
              </a>
              <a
                href="/portfolio-novacom.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-creme transition-colors duration-400"
              >
                Voir le portfolio ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-wide py-6 border-t border-creme/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-creme/40">
            © {currentYear} Novacom. Tous droits réservés.
          </p>
          <p className="font-sans text-xs text-creme/40">
            Site réalisé par{" "}
            <a
              href="https://stapes.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-creme/60 hover:text-creme transition-colors duration-400 underline underline-offset-2"
            >
              stapes.fr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
