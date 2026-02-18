/**
 * Loading skeleton global — Novacom
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-creme">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 border-2 border-nude border-t-bordeaux rounded-full animate-spin" />
        <p className="font-serif text-lg italic text-bordeaux/40">
          Chargement...
        </p>
      </div>
    </div>
  );
}
