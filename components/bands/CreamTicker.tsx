import { Ticker } from "@/components/Ticker";

/** The cream claim strip that sits directly under the hero. */
export function CreamTicker() {
  return (
    <section className="relative z-10 bg-bone">
      <Ticker
        items={[
          "Fresh never frozen",
          "100% beef",
          "Hand-cut fries",
          "Craft beer",
          "Full hospitality",
        ]}
        duration={42}
        separator="✦"
        separatorClassName="text-gold"
        className="label-tech py-5 text-char/80"
      />
    </section>
  );
}
