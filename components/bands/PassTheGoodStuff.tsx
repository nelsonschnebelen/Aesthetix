import Image from "next/image";
import { IMG, img } from "@/lib/images";

export function PassTheGoodStuff() {
  return (
    <section className="bg-char">
      <div className="mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-center px-5 py-14 md:px-12 md:py-20">
          <h2 className="band-head text-bone">
            Pass the
            <br />
            good stuff<span className="text-ember">.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bone/60 md:text-xl">
            Made to order.
            <br />
            Better together.
          </p>
        </div>

        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src={img(IMG.goodStuff, { w: 1400 })}
            alt="Friends around a table at Handcraft with burgers, fries and beer"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-char via-char/25 to-transparent" />
          {/* Their own back-wall neon */}
          <p className="neon-sign absolute top-8 right-8 text-3xl md:text-5xl">Get Smashed</p>
        </div>
      </div>
    </section>
  );
}
