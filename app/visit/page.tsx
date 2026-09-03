import type { Metadata } from "next";
import { VisitSection } from "@/components/VisitSection";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "110 West 40th Street, New York. Open 11:00 to 21:00, seven days. Counter service, sixteen taps, no reservations.",
};

export default function VisitPage() {
  return (
    <main className="pt-20 md:pt-24">
      <VisitSection />
    </main>
  );
}
