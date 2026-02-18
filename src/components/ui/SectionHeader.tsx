import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

/**
 * SectionHeader — En-tête de section éditorial
 * Réutilisable sur toutes les pages avec label, titre et description
 */
export default function SectionHeader({
  label,
  title,
  description,
  children,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const textColor = light ? "text-creme" : "text-bordeaux";
  const subtextColor = light ? "text-creme/60" : "text-bordeaux/60";
  const labelColor = light ? "text-creme/50" : "text-nude-dark";

  return (
    <div className={`max-w-3xl mb-16 md:mb-20 ${alignClass}`}>
      {label && (
        <ScrollReveal>
          <p
            className={`font-sans text-xs uppercase tracking-[0.2em] ${labelColor} mb-6`}
          >
            {label}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`font-serif text-display-md md:text-display-lg italic ${textColor} text-balance`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className={`font-sans text-body-md ${subtextColor} mt-6 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
      {children && (
        <ScrollReveal delay={0.3}>
          <div className="mt-8">{children}</div>
        </ScrollReveal>
      )}
    </div>
  );
}
