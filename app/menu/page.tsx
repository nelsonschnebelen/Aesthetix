import type { Metadata } from "next";
import { MenuBoard } from "@/components/menu/MenuBoard";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Smash burgers, fried birds, griddle tots, shakes spun thick and sixteen rotating taps. Filter the whole board by how much heat you can take.",
};

export default function MenuPage() {
  return (
    <main className="pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <header className="mb-14 max-w-3xl">
          <p className="label-tech text-gold">The board</p>
          <h1 className="band-head mt-5 text-bone">
            Everything we
            <br />
            <span className="text-gold">put on steel</span>
            <span className="text-ember">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/55">
            Every burger is 3oz patties smashed to order on a 450° flat top.
            Hit <span className="text-bone">Build</span> on any card to see it
            assembled layer by layer, exactly the way it leaves the pass.
          </p>
        </header>

        <MenuBoard />
      </div>
    </main>
  );
}
