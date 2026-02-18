import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

/**
 * Button — Bouton réutilisable Novacom
 * Peut être un lien ou un bouton selon la prop `href`
 */
export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  external = false,
}: ButtonProps) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-outline";
  const combinedClass = `${baseClass} ${className}`;

  const arrow = (
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
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          {children}
          {arrow}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
      {arrow}
    </button>
  );
}
