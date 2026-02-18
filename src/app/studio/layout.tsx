export const metadata = {
  title: "Novacom — Administration",
  description: "Interface d'administration Sanity Studio pour Novacom",
};

/**
 * Layout dédié au Studio Sanity
 * Pas de Header/Footer — plein écran
 */
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[100]">
      {children}
    </div>
  );
}
