"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/data";

/**
 * Header — Navigation principale Novacom
 * Fixe, transparent sur le hero, fond crème au scroll
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Seule la homepage a un hero sombre → texte clair
  const isHomepage = pathname === "/";
  const useDarkText = !isHomepage || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ${
        isScrolled
          ? "bg-creme/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <Image
            src="/images/logo-novacom.png"
            alt="Novacom"
            width={140}
            height={40}
            className={`h-6 md:h-8 w-auto object-contain transition-all duration-400 ${
              isMobileMenuOpen
                ? "brightness-0 invert"
                : useDarkText
                ? ""
                : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-sans text-sm uppercase tracking-widest transition-colors duration-400 ${
                useDarkText ? "text-bordeaux" : "text-creme"
              } ${
                pathname === item.href
                  ? "after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-px after:bg-current"
                  : "hover:opacity-70"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA Contact */}
          <Link
            href="/contact"
            className={`text-sm font-sans font-medium uppercase tracking-widest px-6 py-3 border transition-all duration-400 ${
              useDarkText
                ? "border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-creme"
                : "border-creme text-creme hover:bg-creme hover:text-bordeaux"
            }`}
          >
            Nous contacter
          </Link>
        </nav>

        {/* Burger Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          aria-label="Menu"
        >
          <span
            className={`block h-px w-full transition-all duration-400 ${
              isMobileMenuOpen
                ? "rotate-45 translate-y-[3px] bg-creme"
                : useDarkText
                ? "bg-bordeaux"
                : "bg-creme"
            }`}
          />
          <span
            className={`block h-px w-full transition-all duration-400 ${
              isMobileMenuOpen
                ? "-rotate-45 -translate-y-[3px] bg-creme"
                : useDarkText
                ? "bg-bordeaux"
                : "bg-creme"
            }`}
          />
        </button>
      </div>

      {/* Menu Mobile Fullscreen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 bg-bordeaux"
          >
            <div className="flex flex-col justify-between h-full pt-28 pb-10 px-8">
              {/* Navigation */}
              <nav className="flex flex-col gap-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className={`font-serif text-4xl italic transition-colors duration-400 ${
                        pathname === item.href
                          ? "text-nude"
                          : "text-creme hover:text-nude"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Infos contact en bas */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex flex-col gap-3 border-t border-creme/20 pt-6"
              >
                <a
                  href="mailto:contact@nova-com.fr"
                  className="font-sans text-sm text-creme/60 hover:text-creme transition-colors"
                >
                  contact@nova-com.fr
                </a>
                <a
                  href="tel:+33778510655"
                  className="font-sans text-sm text-creme/60 hover:text-creme transition-colors"
                >
                  07 78 51 06 55
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
