"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Direction de l'animation d'entrée */
  direction?: "up" | "down" | "left" | "right";
  /** Délai avant le début de l'animation */
  delay?: number;
  /** Durée de l'animation */
  duration?: number;
  /** Distance du décalage initial */
  offset?: number;
}

/**
 * ScrollReveal — Animation d'apparition au scroll
 * Encapsule n'importe quel contenu avec une animation d'entrée
 */
export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.7,
  offset = 40,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  const directionMap = {
    up: { y: offset, x: 0 },
    down: { y: -offset, x: 0 },
    left: { y: 0, x: offset },
    right: { y: 0, x: -offset },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          ...directionMap[direction],
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
