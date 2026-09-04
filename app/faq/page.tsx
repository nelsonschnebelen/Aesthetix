import type { Metadata } from "next";
import Image from "next/image";
import { FaqList } from "@/components/faq/FaqList";
import { FooterCta } from "@/components/bands/FooterCta";
import { FAQS } from "@/lib/faq";
import { IMG, img } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Hours, directions, parking, ordering, dietary options and everything else people ask us about Handcraft Burgers & Brew on West 40th Street.",
};

/** Rich-result markup, built from the same source as the visible answers. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
  })),
};

export default function FaqPage() {
  return (
    <main className="pt-24 md:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-oxblood py-14 md:py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="label-tech text-gold">Welcome to {SITE.name}</p>
            <h1 className="band-head mt-5 text-bone">
              Everything people ask<span className="text-gold">.</span>
            </h1>
            <p className="band-copy mt-6 text-bone/75">
              Hours, directions, parking, ordering and what to get. If it is not
              here, call us on{" "}
              <a href={SITE.phoneHref} className="text-gold underline-offset-4 hover:underline">
                {SITE.phone}
              </a>
              .
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={img(IMG.storefront, { w: 900 })}
              alt="The Handcraft storefront on West 40th Street"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <FaqList tone="light" />
        </div>
      </section>

      <FooterCta />
    </main>
  );
}
