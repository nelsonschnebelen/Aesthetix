import Image from "next/image";
import Link from "next/link";
import { IMG, img } from "@/lib/images";

/**
 * Three acts on one scroll timeline. Act III is the real hero: it renders
 * identically with no engine, under reduced motion, and to crawlers, so the
 * film is an overture rather than the interface.
 */
export function CinematicHero() {
  return (
    <div className="stagewrap">
      <div className="stage">
        {/* Backdrop: dollies in across the whole timeline */}
        <div className="cine-photo">
          <Image
            src={img(IMG.heroSmash, { w: 2200, q: 78 })}
            alt="A double smash burger, crust to the edge, on the flat top"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Still-hero legibility gradient (cinematic mode swaps in its own) */}
        <div className="veil-static" />
        {/* Cinematic veil: lifts as you scroll, the griddle comes to light */}
        <div className="cine-veil" />

        {/* Ember wash along the bottom edge — the flat top glowing off-frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-1/3 bg-gradient-to-t from-ember/18 to-transparent"
        />

        <div className="acts">
          {/* ------------------------------------------------ Act I ----- */}
          <div className="act act-title" aria-hidden>
            <p className="label-tech text-bone/45">Est. 2019 · W 40th Street · NYC</p>
            <h2 className="font-display mt-6 text-[clamp(3.75rem,15vw,15rem)] text-bone">
              Hand<span className="text-molten">craft</span>
            </h2>
            <p className="label-tech mt-6 text-bone/55">Smash Burgers &amp; Brew</p>
          </div>

          {/* ----------------------------------------------- Act II ----- */}
          <div className="act act-line" aria-hidden>
            <p className="font-display max-w-5xl text-[clamp(2rem,6vw,5rem)] text-bone">
              Two thin patties.
              <br />
              One <span className="text-molten">screaming</span> griddle.
            </p>
            <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-bone/60">
              Fresh beef hits 450° steel and gets pressed flat for exactly eleven
              seconds. That is the whole secret, and it is not a secret.
            </p>
          </div>

          {/* ---------------------------------------------- Act III ----- */}
          {/* The finished, conventional, clickable hero. */}
          <div className="act act-final">
            <div className="final-shade" />
            <div className="relative mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center px-6 pt-28 pb-24 md:px-10">
              <p className="label-tech text-ember">Never frozen · Smashed to order</p>

              <h1 className="font-display mt-6 max-w-3xl text-[clamp(2.75rem,8vw,6.5rem)] text-bone">
                Crust to the
                <br />
                <span className="text-molten">very edge.</span>
              </h1>

              <p className="mt-7 max-w-lg text-lg leading-relaxed text-bone/65">
                100% fresh beef, pressed thin on a 450° flat top so every square
                inch turns to lace. Tots on the side. Sixteen taps behind you.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/menu"
                  className="label-tech inline-flex items-center gap-3 bg-ember px-8 py-4 text-char transition-colors hover:bg-flame"
                >
                  Order now
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/build"
                  className="label-tech inline-flex items-center gap-3 border border-bone/25 px-8 py-4 text-bone transition-colors hover:border-ember hover:text-ember"
                >
                  Build your own
                </Link>
              </div>

              {/* Griddle telemetry — the technical register of the brand */}
              <dl className="mt-14 flex max-w-xl flex-wrap gap-x-10 gap-y-5 border-t border-bone/12 pt-7">
                {[
                  ["Flat top", "450°F"],
                  ["Sear", "82 sec"],
                  ["Patty", "3 oz × 2"],
                  ["Frozen", "Never"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="label-tech text-bone/40">{k}</dt>
                    <dd className="font-display mt-2 text-2xl text-bone">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Scroll cue, cinematic only */}
        <div className="cine-hint label-tech absolute inset-x-0 bottom-7 z-[6] justify-center text-bone/55">
          <span className="flex items-center gap-3">
            Scroll
            <span className="block h-px w-10 bg-bone/40" />
          </span>
        </div>
      </div>
    </div>
  );
}
