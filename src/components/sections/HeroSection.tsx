"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { HeroSettings } from "@/types";

interface HeroSectionProps {
  settings: HeroSettings;
}

/**
 * HeroSection — Hero fullscreen avec vidéo background
 * Lecture auto, muet, boucle. Overlay sombre configurable.
 * Vidéo différente sur mobile vs desktop.
 */
export default function HeroSection({ settings }: HeroSectionProps) {
  const videoDesktopRef = useRef<HTMLVideoElement>(null);
  const videoMobileRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Assurer la lecture auto des vidéos
    videoDesktopRef.current?.play().catch(() => {});
    videoMobileRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Vidéo background - Desktop */}
      <video
        ref={videoDesktopRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        poster="/images/hero-poster.jpg"
      >
        <source src={settings.videoUrl} type="video/mp4" />
      </video>

      {/* Vidéo background - Mobile */}
      <video
        ref={videoMobileRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* Overlay sombre */}
      <div
        className="absolute inset-0 bg-bordeaux"
        style={{ opacity: settings.overlayOpacity }}
      />

      {/* Contenu */}
      <div className="relative z-10 container-wide text-center">
        <div className="max-w-4xl mx-auto">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-xs uppercase tracking-[0.3em] text-creme/60 mb-6"
          >
            Agence de communication créative
          </motion.p>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-display-xl italic text-creme mb-8 whitespace-pre-line"
          >
            {settings.title}
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-sans text-[11px] md:text-body-lg text-creme/70 max-w-2xl mx-auto mb-12"
          >
            {settings.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button href={settings.ctaLink} variant="outline" className="border-creme text-creme hover:bg-creme hover:text-bordeaux">
              {settings.ctaText}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Indicateur scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-creme/40"
        />
      </motion.div>
    </section>
  );
}
