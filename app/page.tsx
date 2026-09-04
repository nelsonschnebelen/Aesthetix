import { CinematicHero } from "@/components/hero/CinematicHero";
import { CreamTicker } from "@/components/bands/CreamTicker";
import { PickYourSmash } from "@/components/bands/PickYourSmash";
import { PassTheGoodStuff } from "@/components/bands/PassTheGoodStuff";
import { MonthBand } from "@/components/bands/MonthBand";
import { TotsFries } from "@/components/bands/TotsFries";
import { HospitalityBand } from "@/components/bands/HospitalityBand";
import { BurgersMeetBrew } from "@/components/bands/BurgersMeetBrew";
import { BuildTeaser } from "@/components/BuildTeaser";
import { ClubBand } from "@/components/bands/ClubBand";
import { RightHere } from "@/components/bands/RightHere";
import { FooterCta } from "@/components/bands/FooterCta";

export default function Home() {
  return (
    <main>
      <CinematicHero />
      <CreamTicker />
      <PickYourSmash />
      <PassTheGoodStuff />
      <MonthBand />
      <TotsFries />
      <HospitalityBand />
      <BurgersMeetBrew />
      <BuildTeaser />
      <ClubBand />
      <RightHere />
      <FooterCta />
    </main>
  );
}
