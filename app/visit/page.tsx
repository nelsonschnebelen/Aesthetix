import type { Metadata } from "next";
import { RightHere } from "@/components/bands/RightHere";
import { FaqList } from "@/components/faq/FaqList";
import { FooterCta } from "@/components/bands/FooterCta";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "110 W 40th St, New York, near Bryant Park. Walk-in only, no reservations. Monday to Thursday 11am–9pm, Friday and Saturday to 10pm, Sunday to 8pm.",
};

export default function VisitPage() {
  return (
    <main className="pt-24 md:pt-28">
      <RightHere />

      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <h2 className="band-head text-char">
            Common questions<span className="text-oxblood">.</span>
          </h2>
          <p className="band-copy mt-5 text-char/65">
            Or call us on{" "}
            <a href={SITE.phoneHref} className="text-oxblood underline-offset-4 hover:underline">
              {SITE.phone}
            </a>
            .
          </p>
          <div className="mt-10">
            <FaqList tone="light" />
          </div>
        </div>
      </section>

      <FooterCta />
    </main>
  );
}
