import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { FooterCta } from "@/components/bands/FooterCta";
import { IMG, img } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hospitality Club",
  description:
    "Points on every order, a free burger on your birthday, and first shout on the burger of the month. Free to join.",
};

const STEPS: [string, string, string][] = [
  ["01", "Join", "Sign up at the counter or online, and 50 bonus points land in your account straight away."],
  ["02", "Earn", "A point for every dollar. Points land the moment your order hits the pass, not a week later."],
  ["03", "Eat", "150 points is a burger on us. Birthdays get one automatically, no points spent."],
];

const PERKS: [string, string][] = [
  ["Free burgers", "150 points, and a Handcraft Double is yours."],
  ["Birthday reward", "A free burger in your account the morning of, valid all month."],
  ["First shout", "Burger of the month drops for club members a week early."],
  ["No cards to lose", "It runs on your phone number. That is the whole system."],
];

export default function ClubPage() {
  return (
    <main className="pt-24 md:pt-28">
      <section className="bg-oxblood py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="label-tech text-gold">Hospitality Club</p>
            <h1 className="band-head mt-5 text-bone">
              Your next burger
              <br />
              pays you back<span className="text-gold">.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-bone/75">
              Points on every order, a free burger on your birthday, and first
              shout on the burger of the month. Free to join, nothing to carry,
              no card to lose.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.clubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn bg-gold text-char hover:bg-bone"
              >
                Join the club ↗
              </a>
              <a
                href={SITE.orderUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn border border-bone/35 text-bone hover:bg-bone hover:text-char"
              >
                Order online
              </a>
            </div>
          </div>

          <div className="relative flex aspect-[1.6/1] w-full items-center justify-center bg-char p-8 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
            <Logo className="h-24" />
            <span className="label-tech absolute bottom-5 left-6 text-bone/35">
              Hospitality Club
            </span>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="band-head text-char">
            How it works<span className="text-oxblood">.</span>
          </h2>
          <ol className="mt-12 grid gap-px bg-char/12 md:grid-cols-3">
            {STEPS.map(([n, title, body]) => (
              <li key={n} className="bg-paper px-7 py-10">
                <p className="font-display text-6xl text-gold">{n}</p>
                <h3 className="font-display mt-5 text-3xl text-char uppercase">{title}</h3>
                <p className="mt-4 leading-relaxed text-char/70">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-char py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="band-head text-bone">
              What you get<span className="text-ember">.</span>
            </h2>
            <dl className="mt-10 divide-y divide-bone/12">
              {PERKS.map(([k, v]) => (
                <div key={k} className="py-6">
                  <dt className="font-display text-2xl text-bone uppercase">{k}</dt>
                  <dd className="mt-2 leading-relaxed text-bone/60">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/menu"
              className="label-tech mt-10 inline-block bg-gold px-9 py-4 text-char transition-colors hover:bg-bone"
            >
              Start earning
            </Link>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={img(IMG.baconJam, { w: 1000 })}
              alt="A Handcraft burger on the counter, the dining room behind it"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <FooterCta />
    </main>
  );
}
