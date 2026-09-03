import Image from "next/image";
import Link from "next/link";
import { IMG, img } from "@/lib/images";

export function BuildTeaser() {
  return (
    <section className="relative overflow-hidden bg-char py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src={img(IMG.deconstructed, { w: 2000, h: 1100 })}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-char via-char/85 to-char/40" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <p className="label-tech text-ember">The Forge</p>
        <h2 className="font-display mt-5 max-w-3xl text-5xl text-bone md:text-8xl">
          Twenty-two parts.
          <br />
          <span className="text-molten">Ten million</span> burgers.
        </h2>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-bone/60">
          Stack it layer by layer and watch it build itself in real time — heat
          rating, sear time and stack height update as you go. It even names
          the thing for you, and the name sticks.
        </p>
        <Link
          href="/build"
          className="label-tech mt-10 inline-flex items-center gap-3 bg-ember px-8 py-5 text-char transition-colors hover:bg-flame"
        >
          Open the Forge <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
