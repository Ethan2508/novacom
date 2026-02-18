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
 * Effets hover : slide-in background + flèche glide
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
  const combinedClass = `${baseClass} ${className} group`;

  const content = (
    <>
      <span>{children}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="transition-transform duration-500 ease-out group-hover:translate-x-1"
      >
        <path
          d="M1 8H15M15 8L8 1M15 8L8 15"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </>
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
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {content}
    </button>
  );
}
