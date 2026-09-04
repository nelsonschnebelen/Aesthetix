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
        <p className="label-tech text-gold">The Forge</p>
        <h2 className="band-head mt-5 max-w-3xl text-bone">
          Twenty-two parts.
          <br />
          <span className="text-gold">Ten million</span> burgers
          <span className="text-ember">.</span>
        </h2>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-bone/60">
          Stack it layer by layer and watch it build itself in real time — heat
          rating, sear time and stack height update as you go. It even names
          the thing for you, and the name sticks.
        </p>
        <Link
          href="/build"
          className="label-tech mt-10 inline-flex items-center gap-3 bg-gold px-9 py-5 text-char transition-colors hover:bg-bone"
        >
          Open the Forge <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
