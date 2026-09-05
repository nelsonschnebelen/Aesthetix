import Image from "next/image";
import Link from "next/link";
import { IMG, img } from "@/lib/images";

/** The reference's centre-set headline flanked by the two sides. */
export function TotsFries() {
  return (
    <section className="bg-char py-14 md:py-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 md:px-8 lg:grid-cols-[1fr_1.25fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={img(IMG.hotsyTots, { w: 900 })}
            alt="Hotsy Chili Cheese Tots — chili and beer cheese over crispy tots"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="order-first text-center lg:order-none">
          <h2 className="font-display text-[clamp(2.25rem,4.4vw,4rem)] leading-[0.9] text-bone uppercase">
            Tots<span className="text-ember">.</span>
            <br />
            Fries<span className="text-ember">.</span>
            <br />
            <span className="text-gold">No afterthoughts</span>
            <span className="text-ember">.</span>
          </h2>
          <Link
            href="/menu"
            className="label-tech btn mt-7 inline-block border border-bone/30 text-bone transition-colors hover:bg-bone hover:text-char"
          >
            See the sides
          </Link>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={img(IMG.friesTray, { w: 900 })}
            alt="Handcraft Fries in paper cups on a steel tray with four sauces"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
