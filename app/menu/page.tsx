import type { Metadata } from "next";
import { LiveMenu } from "@/components/menu/LiveMenu";
import { FooterCta } from "@/components/bands/FooterCta";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Smash burgers, the Ripper, loaded tots, hand-cut fries with six sauces and rotating craft brews. Order pickup or delivery from us.",
};

export default function MenuPage() {
  return (
    <main className="pt-24 md:pt-28">
      <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-14 md:px-8 md:pt-14">
        <header className="mb-10 max-w-3xl">
          <p className="label-tech text-gold">The board</p>
          <h1 className="band-head mt-5 text-bone">
            Everything we
            <br />
            <span className="text-gold">put on steel</span>
            <span className="text-ember">.</span>
          </h1>
        </header>
        <LiveMenu />
      </div>
      <FooterCta />
    </main>
  );
}
