import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

/**
 * CTASection — Section d'appel à l'action (homepage)
 * Fond bordeaux, design éditorial impactant
 */
export default function CTASection() {
  return (
    <section className="section-padding bg-bordeaux">
      <div className="container-wide text-center">
        <SectionHeader
          label="Prêt à commencer ?"
          title="Transformons ensemble<br/>votre vision en réalité."
          description="Chaque projet commence par une conversation. Parlez-nous de vos ambitions, nous créerons la stratégie pour les atteindre."
          align="center"
          light
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="outline"
            className="border-creme text-creme hover:text-bordeaux [&::before]:bg-creme"
          >
            Nous contacter
          </Button>
          <Button
            href="/portfolio-novacom.pdf"
            variant="outline"
            className="border-creme/30 text-creme/70 hover:text-bordeaux hover:border-creme [&::before]:bg-creme"
            external
          >
            Voir le portfolio ↗
          </Button>
        </div>
      </div>
    </section>
  );
}
