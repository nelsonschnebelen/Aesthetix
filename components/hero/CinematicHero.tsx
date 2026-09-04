import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { IMG, img } from "@/lib/images";

/**
 * Three acts on one scroll timeline. Act III is the real hero — the
 * composition the reference lands on — and it renders identically with no
 * engine, under reduced motion, and to crawlers.
 */
export function CinematicHero() {
  return (
    <div className="stagewrap">
      <div className="stage">
        <div className="cine-photo">
          <Image
            src={img(IMG.heroStreet, { w: 2400, q: 80 })}
            alt="A double smash cheeseburger held up on the street outside Handcraft"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>

        <div className="veil-static" />
        <div className="cine-veil" />

        <div className="acts">
          {/* ------------------------------------------------ Act I ----- */}
          <div className="act act-title" aria-hidden>
            <Logo className="h-32 md:h-56" />
            <p className="label-tech mt-9 text-bone/55">
              110 West 40th Street · New York
            </p>
          </div>

          {/* ----------------------------------------------- Act II ----- */}
          <div className="act act-line" aria-hidden>
            <p className="band-head max-w-5xl text-bone">
              Fresh, never frozen.
              <br />
              <span className="text-gold">Smashed to order</span>
              <span className="text-ember">.</span>
            </p>
            <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-bone/65">
              100% beef on a 450° flat top, pressed thin so the crust runs all
              the way to the edge. That is the whole trick.
            </p>
          </div>

          {/* ---------------------------------------------- Act III ----- */}
          <div className="act act-final">
            <div className="final-shade" />
            <div className="relative mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center px-5 pt-28 pb-24 md:px-8">
              <h1 className="font-display max-w-[13ch] text-[clamp(3.25rem,9vw,8rem)] leading-[0.86] text-bone uppercase">
                Burgers in good hands<span className="text-ember">.</span>
              </h1>

              <p className="mt-8 max-w-md text-lg leading-relaxed text-bone/70">
                Handcrafted smash burgers, loaded tots and cold beer — served
                with full hospitality in the heart of New York.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/menu"
                  className="label-tech bg-gold px-9 py-4.5 text-char transition-colors hover:bg-bone"
                >
                  Order Online
                </Link>
                <Link
                  href="/menu"
                  className="label-tech border border-bone/35 px-9 py-4.5 text-bone transition-colors hover:border-bone hover:bg-bone hover:text-char"
                >
                  See the Menu
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="cine-hint label-tech absolute inset-x-0 bottom-7 z-[6] justify-center text-bone/50">
          <span className="flex items-center gap-3">
            Scroll
            <span className="block h-px w-10 bg-bone/40" />
          </span>
        </div>
      </div>
    </div>
  );
}
