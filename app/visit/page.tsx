import type { Metadata } from "next";
import { RightHere } from "@/components/bands/RightHere";
import { HospitalityBand } from "@/components/bands/HospitalityBand";
import { FooterCta } from "@/components/bands/FooterCta";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "110 West 40th Street, New York. Counter service, sixteen taps, no reservations. Ninety seconds from Bryant Park.",
};

export default function VisitPage() {
  return (
    <main className="pt-24 md:pt-28">
      <RightHere />
      <HospitalityBand />
      <FooterCta />
    </main>
  );
}
