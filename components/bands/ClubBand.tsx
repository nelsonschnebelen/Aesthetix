import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";
import { IMG, img } from "@/lib/images";

const PERKS: [string, string][] = [
  ["Free burgers", IMG.smashOg],
  ["Birthday reward", IMG.fries],
  ["Exclusive perks", IMG.brat],
];

/** The red band: the loyalty pitch. */
export function ClubBand() {
  return (
    <section className="bg-oxblood py-14 md:py-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.75fr_1.2fr]">
        <div>
          <p className="label-tech text-gold">Join the Handcraft Hospitality Club</p>
          <h2 className="band-head mt-4 text-bone">
            Your next burger
            <br />
            pays you back<span className="text-gold">.</span>
          </h2>
          <p className="band-copy mt-5 text-bone/70">
            Get points for every dollar you spend towards discounts and free
            food — plus <strong className="text-bone">50 bonus points</strong>{" "}
            just for signing up.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE.clubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn bg-bone text-char hover:bg-gold"
            >
              Join the club ↗
            </a>
            <Link
              href="/club"
              className="btn border border-bone/40 text-bone hover:bg-bone hover:text-char"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* The membership card */}
        <div className="relative flex aspect-[1.6/1] w-full max-w-[300px] items-center justify-center bg-char p-7 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
          <Logo className="h-20" />
          <span className="label-tech absolute bottom-4 left-5 text-bone/35">
            Hospitality Club
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {PERKS.map(([label, src]) => (
            <div key={label} className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={img(src, { w: 500, h: 660 })}
                alt=""
                fill
                sizes="(max-width: 1024px) 30vw, 15vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-char/90 to-transparent" />
              <span className="label-tech absolute inset-x-0 bottom-3 px-2 text-center text-[10px] text-bone">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
