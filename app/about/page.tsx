import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG, img } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hand crafted, fresh, never frozen, 100% beef, gourmet smashed burgers and tater tots, french fries and craft beers with full hospitality style service in a quick service environment.",
};

/**
 * The owners' own words, unedited. Each section is exactly as they wrote it;
 * only the headings and photographs are ours.
 */
const SECTIONS: { kicker: string; title: string; body: string[]; image: string; alt: string }[] = [
  {
    kicker: "Our quality",
    title: "Only as good as its ingredients",
    body: [
      "The best food is only as good as its ingredients, and we know that's the truth. Every Burger is fresh, never frozen, smashed beef, topped with hand-selected veggies and served on a toasted buttered brioche made fresh just for you. Hot dog fanatic? We use Thumann's, the same dogs behind the legendary deep fried rippers of Bergen County, NJ. It's all to give you the best bite, every time.",
    ],
    image: IMG.og,
    alt: "The OG — two smashed patties, American cheese, lettuce and tomato on a buttered brioche",
  },
  {
    kicker: "Don't sleep on the tots",
    title: "Hot, crispy, puffy little potato gems",
    body: [
      "Not to knock the fries, we love them too. But there is nothing like a hot, crispy, puffy little potato gem, which is why we load ours up with all kinds of goodies. Buffalo. Bodega. Animal (shh its a secret.) Come find your favorite.",
    ],
    image: IMG.buffaloTots,
    alt: "Buffalo Tots at the front door",
  },
  {
    kicker: "About the “Brew”",
    title: "As much time on the drinks as the food",
    body: [
      "We put as much time into the drinks as we do the food. Craft sodas, interesting seltzers, and a rotating selection of canned local craft beer. Why cans? Simple. Air and light are the enemies of beer, and with a can, neither one gets in. Better for the beer, and easy to throw in your bag for later.",
    ],
    image: IMG.beerCan,
    alt: "A can of local craft beer on the counter",
  },
  {
    kicker: "Gratitude is the whole point",
    title: "You'll notice we say thank you a lot",
    body: [
      "You'll notice we say thank you a lot. Gratitude is our core value and we mean it every single time. We're grateful to call you part of the Burger family, and we don't believe gratitude only happens inside our four walls.",
      "It shows up when you order delivery, when you catch our content online, when you leave a review or post a picture. Before you eat with us, while you eat with us, and long after. Your opinion matters, so tell us how we did.",
    ],
    image: IMG.storefront,
    alt: "The Handcraft storefront on West 40th Street",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* -------------------------------------------------------- hero -- */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <Image
          src={img(IMG.smashOklahoma, { w: 2000, h: 1200 })}
          alt="A Double Ultimate Smash on the plate"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/70 to-char/30" />
        <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-32 pb-16 md:px-10 md:pb-24">
          <p className="label-tech text-gold">Our mission</p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.05] text-bone uppercase">
            It&rsquo;s our mission to bring you hand crafted, fresh, never frozen, 100% beef, gourmet
            smashed burgers and tater tots, french fries and craft beers with full hospitality style
            service in a quick service environment<span className="text-ember">.</span>
          </h1>
        </div>
      </section>

      {/* ---------------------------------------------------- sections -- */}
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col gap-24 md:gap-36">
          {SECTIONS.map((c, i) => (
            <article
              key={c.kicker}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 ? "md:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="relative aspect-[4/3] overflow-hidden bg-iron">
                <Image
                  src={img(c.image, { w: 1100, h: 825 })}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </figure>
              <div>
                <p className="label-tech text-gold">{c.kicker}</p>
                <h2 className="band-head mt-5 text-bone">{c.title}</h2>
                {c.body.map((para) => (
                  <p key={para.slice(0, 24)} className="mt-6 max-w-lg text-lg leading-relaxed text-bone/60">
                    {para}
                  </p>
                ))}
                {c.kicker.startsWith("Gratitude") && (
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-bone/60">
                    Text us anytime at{" "}
                    <a href={SITE.textHref} className="text-gold underline-offset-4 hover:underline">
                      {SITE.textPhone}
                    </a>
                    . We read every one.
                  </p>
                )}
              </div>
            </article>
          ))}

          {/* ------------------------------------------ behind the burger -- */}
          <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <figure className="relative aspect-[4/3] overflow-hidden bg-iron">
              <Image
                src={img(IMG.founders, { w: 1100, h: 825 })}
                alt="Chad (left), Rev (center) and Chris (right), the founders, with an armful of burgers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </figure>
            <div>
              <p className="label-tech text-gold">Behind the Burger</p>
              <h2 className="band-head mt-5 text-bone">
                We&rsquo;re the founders<span className="text-ember">.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-bone/60">
                We&rsquo;re the founders, and you&rsquo;ll rarely catch us behind the counter. We&rsquo;re
                behind the Burger. Chris (right) has been a bar and restaurant owner in NYC since 1996.
                Chad (left) has been his partner at Croton Reservoir Tavern and Handcraft Kitchen and
                Cocktails since 2005. Rev (center) is a former bar owner who wrote one of the world&rsquo;s
                top 3 Burger blogs and got nicknamed an &ldquo;expert Burger taster.&rdquo;
              </p>
            </div>
          </article>
        </div>

        {/* ------------------------------------------------- sign-off -- */}
        <blockquote className="mt-28 border-l-2 border-ember pl-8 md:pl-12">
          <p className="max-w-3xl text-xl leading-relaxed text-bone/80 md:text-2xl">
            From the bottom of our hearts, welcome to our burger family! We extend our deepest gratitude
            to you for dining with us and we hope to see you again really soon. These burgers aren&rsquo;t
            going to eat themselves!!!
          </p>
          <p className="font-display mt-8 text-3xl text-bone md:text-4xl">Thank you!</p>
          <footer className="label-tech mt-6 text-bone/40">
            Chris, Chad, Rev and everyone at Handcraft Burgers &amp; Brew
          </footer>
        </blockquote>

        <div className="mt-20 flex flex-wrap gap-4">
          <Link
            href="/menu"
            className="label-tech bg-gold px-9 py-5 text-char transition-colors hover:bg-bone"
          >
            See the menu →
          </Link>
          <Link
            href="/visit"
            className="label-tech border border-bone/20 px-8 py-5 text-bone/75 transition-colors hover:border-bone hover:text-bone"
          >
            Come in
          </Link>
        </div>
      </div>
    </main>
  );
}
