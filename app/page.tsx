import { CinematicHero } from "@/components/hero/CinematicHero";
import { SearStrip } from "@/components/SearStrip";
import { SmashMethod } from "@/components/SmashMethod";
import { SignatureRail } from "@/components/SignatureRail";
import { Spotlight } from "@/components/Spotlight";
import { BuildTeaser } from "@/components/BuildTeaser";
import { VisitSection } from "@/components/VisitSection";

export default function Home() {
  return (
    <main>
      <CinematicHero />
      <SearStrip />
      <SmashMethod />
      <SignatureRail />
      <Spotlight />
      <BuildTeaser />
      <VisitSection />
    </main>
  );
}
