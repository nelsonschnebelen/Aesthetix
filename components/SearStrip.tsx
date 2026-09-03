import { GriddleStatus } from "@/components/GriddleStatus";
import { Ticker } from "@/components/Ticker";

/** The band directly under the hero: live shop state, then the brand voice. */
export function SearStrip() {
  return (
    <section className="relative z-10 border-y border-bone/10 bg-soot">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-5 px-6 py-5 md:px-10">
        <GriddleStatus />
        <p className="label-tech text-bone/35">110 W 40th St · New York</p>
      </div>
      <Ticker
        items={[
          "Fresh beef, ground this morning",
          "Pressed for eleven seconds",
          "Crust to the edge",
          "Tots finished on the flat top",
          "Sixteen taps, rotating",
          "No reservations, ever",
        ]}
        duration={46}
        className="font-display border-t border-bone/10 py-5 text-3xl text-bone/85 md:text-5xl"
      />
    </section>
  );
}
