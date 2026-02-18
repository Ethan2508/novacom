import HeroSection from "@/components/sections/HeroSection";
import AgencyIntro from "@/components/sections/AgencyIntro";
import ExpertisesSection from "@/components/sections/ExpertisesSection";
import TrustSection from "@/components/sections/TrustSection";
import CTASection from "@/components/sections/CTASection";
import {
  getHeroSettings,
  getExpertises,
  getTrustPartners,
} from "@/lib/api";

/**
 * Page d'accueil — Novacom
 * Hero fullscreen, présentation agence, expertises, partenaires, CTA
 */
export default async function HomePage() {
  const [heroSettings, expertises, trustPartners] = await Promise.all([
    getHeroSettings(),
    getExpertises(),
    getTrustPartners(),
  ]);

  return (
    <>
      <HeroSection settings={heroSettings} />
      <AgencyIntro />
      <ExpertisesSection expertises={expertises} />
      <CTASection />
      <TrustSection partners={trustPartners} />
    </>
  );
}
