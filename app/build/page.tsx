import type { Metadata } from "next";
import { BurgerBuilder } from "@/components/build/BurgerBuilder";

export const metadata: Metadata = {
  title: "The Forge",
  description:
    "Build your own smash burger layer by layer and watch it assemble in real time — heat rating, sear time and stack height as you go.",
};

export default function BuildPage() {
  return (
    <main className="pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <header className="mb-14 max-w-3xl">
          <p className="label-tech text-gold">The Forge</p>
          <h1 className="band-head mt-5 text-bone">
            Build it<span className="text-ember">.</span>
            <br />
            <span className="text-outline">Own it.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/55">
            Pick your bun, stack your patties, and the burger assembles itself
            beside you — in the order the kitchen actually builds it. We name it
            based on what you chose, then send you to the menu to order it.
          </p>
        </header>

        <BurgerBuilder />
      </div>
    </main>
  );
}
