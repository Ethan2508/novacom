/**
 * Utilitaires généraux — Novacom
 */

/** Merge conditionnel de classes CSS (compatible Tailwind) */
export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ");
}

/** Formater une date en français */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });
}

/** Générer un slug à partir d'un texte */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Tronquer un texte avec ellipsis */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
