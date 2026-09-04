import Image from "next/image";
import Link from "next/link";
import { IMG, img } from "@/lib/images";

/** The cream band: the people half of the promise. */
export function HospitalityBand() {
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={img(IMG.hospitality, { w: 1200 })}
            alt="A Handcraft team member handing an order across the counter"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="band-head text-char">
            Quick service.
            <br />
            Full hospitality<span className="text-oxblood">.</span>
          </h2>
          <p className="mt-6 band-copy text-char/70">
            We opened Handcraft to serve the kind of food and hospitality we
            believe New York deserves — counter service that still knows your
            order, and a room you want to stay in. Thanks for being part of the
            burger family.
          </p>
          <Link
            href="/story"
            className="label-tech btn mt-7 inline-block border-2 border-char text-char transition-colors hover:bg-char hover:text-bone"
          >
            Meet the team
          </Link>
        </div>
      </div>
    </section>
  );
}
