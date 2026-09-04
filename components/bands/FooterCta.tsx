import Image from "next/image";
import { IMG, img } from "@/lib/images";
import { SITE } from "@/lib/site";

/** The closing line, over the three-up. */
export function FooterCta() {
  return (
    <section className="relative overflow-hidden bg-char">
      <Image
        src={img(IMG.threeUp, { w: 1800 })}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-right opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-char via-char/85 to-char/25" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <h2 className="band-head max-w-[16ch] text-bone">
          These burgers aren&rsquo;t going to eat themselves
          <span className="text-ember">.</span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="label-tech inline-block bg-gold px-10 py-5 text-char transition-colors hover:bg-bone"
          >
            Order Online ↗
          </a>
          <p className="neon-sign text-4xl md:text-5xl">Get Smashed</p>
        </div>
      </div>
    </section>
  );
}
