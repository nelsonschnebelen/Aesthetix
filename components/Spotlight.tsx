import Image from "next/image";
import { HeatMeter } from "@/components/menu/HeatMeter";
import { IMG, img } from "@/lib/images";
import { BY_ID, SPOTLIGHT } from "@/lib/menu";
import { money } from "@/lib/utils";

/** Burger of the month, and the pour it is meant to sit next to. */
export function Spotlight() {
  const item = BY_ID[SPOTLIGHT.itemId];

  return (
    <section className="relative border-y border-bone/10 bg-soot">
      <div className="mx-auto grid max-w-[1280px] gap-0 lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[680px]">
          <Image
            src={img(item.image ?? IMG.charDouble, { w: 1200, h: 1400 })}
            alt={SPOTLIGHT.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-soot/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-soot/70" />
          <span className="label-tech absolute top-6 left-6 bg-ember px-3 py-2 text-char">
            {SPOTLIGHT.month}
          </span>
        </div>

        <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24">
          <p className="label-tech text-ember">Burger of the month</p>
          <h2 className="font-display mt-5 text-5xl text-bone md:text-7xl">
            {SPOTLIGHT.name}
          </h2>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <HeatMeter heat={item.heat} />
            <span className="font-mono-tech text-xl text-cheese">{money(item.price)}</span>
          </div>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-bone/60">
            {SPOTLIGHT.story}
          </p>

          <div className="mt-10 flex items-start gap-5 border border-bone/12 bg-char p-6">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-iron">
              <Image
                src={img(IMG.beerBlack, { w: 240, h: 240 })}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="label-tech text-bone/40">Drink this with it</p>
              <p className="font-display mt-2 text-2xl text-bone">
                {SPOTLIGHT.pairing.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-bone/50">
                {SPOTLIGHT.pairing.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
