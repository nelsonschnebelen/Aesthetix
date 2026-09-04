# Asset Plan — Handcraft Burgers & Brew

**Category:** Burger joint (fast-casual smash + craft beer, full hospitality)
**Mood:** Warm, brand-blocked — cream / deep red / mustard gold on near-black
**Date:** 2026-09-04
**Higgsfield balance at planning time:** 1,033.52 credits (Plus)

> **Hard constraint carried into every prompt below:** the food is described
> exactly as it appears on the reference and is not to be reinterpreted. Two
> thin smashed patties with craggy, lace-crisp brown edges; melted sharp
> American; the specified garnish and nothing else. No ingredient is added,
> removed, or substituted in any frame.

## Why we are generating at all

`handcraftburgers.com` is behind a Cloudflare challenge that resets the
connection from this environment — plain fetch, authenticated fetch and a full
Chromium session with the challenge timeout all failed across five attempts.
Their real photography cannot be hotlinked from here. If you can hand me the
image URLs (or drop the files in the repo), **every line below goes to zero**
and real photos will beat these anyway.

## Hero concept — "In Good Hands" *(recommended)*

The reference hero: a hand holding a double smash burger against a dark New
York street, warm streetlight raking across the crust. It carries the headline
"Burgers in good hands." on the left third.

- Opening frame: the burger held up, street bokeh behind, veiled dark
- Transformation: the veil lifts and the camera pushes in a hair as you scroll
- Resting frame: the classic hero — headline left, two CTAs, burger right

## Contrast concept — "The Smash" *(alternative)*

Two balls of beef on a glowing flat top, the press comes down, the patties
spread and sear. Better as motion than as a still; it duplicates the story The
Method section already tells in CSS, so it is the second choice, not the first.

## Assets to generate

| # | Asset | Model | Params | Credits |
|---|---|---|---|---|
| 1 | Hero — "In Good Hands" (3 iteration passes) | `nano_banana_pro` | 2k, 16:9 | 6.0 |
| 2 | OG double smash on kraft paper | `nano_banana_2` | 1k, 1:1 | 1.5 |
| 3 | Oklahoma (onion-smashed) on kraft paper | `nano_banana_2` | 1k, 1:1 | 1.5 |
| 4 | Spicy Ultimate (jalapeño) on kraft paper | `nano_banana_2` | 1k, 1:1 | 1.5 |
| 5 | Four friends at a table, burgers and beer | `nano_banana_2` | 1k, 16:9 | 1.5 |
| 6 | Burger of the month on a steel diner tray | `nano_banana_2` | 1k, 4:3 | 1.5 |
| 7 | Loaded tots in a steel basket | `nano_banana_2` | 1k, 4:3 | 1.5 |
| 8 | Hand-cut fries in a steel tray | `nano_banana_2` | 1k, 4:3 | 1.5 |
| 9 | Burger beside a cold craft-beer can, dark bar | `nano_banana_2` | 1k, 16:9 | 1.5 |
| 10 | Counter handoff — bag across the pass | `nano_banana_2` | 1k, 4:3 | 1.5 |
| 11 | Storefront at dusk, warm windows | `nano_banana_2` | 1k, 4:3 | 1.5 |
| 12 | Bryant Park side street, awning | `nano_banana_2` | 1k, 4:3 | 1.5 |
| 13 | Footer — three burgers held up | `nano_banana_2` | 1k, 16:9 | 1.5 |
| — | **Stills total** | | | **24.0** |
| 14 | *Optional* hero video, from approved #1 | `seedance1_5` | 4s, 720p, 16:9, silent | 4.8 |
| — | **Total with video** | | | **28.8** |

Naive equivalent (every still at 2k, 8s/1080p video with audio, plus a separate
9:16 vertical render): **74.0** credits.
Saving from the cost levers: **45.2** credits.

Balance 1,033.52 → **1,009.52** (stills only) or **1,004.72** (with video).

## Prompts (exact text that will be sent)

Every prompt ends with the still suffix: *shot on a full-frame camera with an
85mm lens at f/2.0, natural directional light from one side, deep shadow
falloff, fine film grain, no text, no logo, no watermark.*

**#1 — Hero**
> A person's hand holding up a double smash cheeseburger toward the camera at
> night on a New York city street. The burger has exactly two thin smashed beef
> patties with craggy, lace-crisp dark brown seared edges, two slices of melted
> sharp American cheese draping over the sides, dill pickle slices, on a glossy
> toasted golden brioche bun. No other ingredients. Warm sodium streetlight
> rakes across the crust from the right, deep blue-black street bokeh behind,
> shallow depth of field. Burger positioned in the right third of the frame,
> generous dark negative space on the left for a headline.

**#2 — OG**
> A double smash cheeseburger sitting on a square of crumpled brown kraft paper
> against a deep oxblood red seamless background, straight-on eye level. Exactly
> two thin smashed beef patties with craggy lace-crisp dark brown edges, two
> slices of melted sharp American cheese, dill pickle slices, glossy toasted
> golden brioche bun. No other ingredients. Hard warm key light from the upper
> left, deep shadow to the right.

**#3 — Oklahoma** — as #2, but *thin shaved onions caramelised directly into the
seared crust of both patties, wisps of onion browned at the edges,* melted sharp
American, dill pickles, brioche bun. No other ingredients.

**#4 — Spicy Ultimate** — as #2, but *sliced pickled green jalapeños stacked on
top of the melted sharp American,* shaved onion under the patty, brioche bun. No
other ingredients.

**#5 — Pass the good stuff**
> Four friends in their late twenties laughing together around a dark wood
> table in a warm dimly lit New York burger restaurant, double smash
> cheeseburgers and baskets of thin hand-cut fries and glasses of beer on the
> table in front of them, warm tungsten light, out-of-focus bar and window
> behind them.

**#6 — This month's Handcraft**
> A double smash cheeseburger on a brushed stainless steel diner tray lined with
> kraft paper, shot slightly above eye level against a warm mustard-gold
> background. Two thin smashed patties with craggy lace-crisp edges, melted
> sharp American, shredded lettuce, a slice of vine tomato, glossy toasted
> brioche bun. No other ingredients. Bright even studio light.

**#7 — Loaded tots**
> A generous pile of golden crispy potato tots in a brushed stainless steel
> basket, drizzled with a pale creamy sauce and scattered with thin sliced green
> scallion, on a dark near-black surface, warm directional light from the left.

**#8 — Fries**
> A heap of thin skin-on hand-cut french fries, golden and crisp, flecked with
> coarse salt, in a brushed stainless steel tray on a dark near-black surface,
> warm directional light from the right.

**#9 — Burgers meet brew**
> A double smash cheeseburger next to a cold matte teal aluminium craft beer can
> with condensation running down it, standing on a dark walnut bar top, warm
> amber pendant light behind, deep shadow. Two thin smashed patties with craggy
> lace-crisp edges, melted sharp American, shredded lettuce, tomato, glossy
> brioche bun. No other ingredients. **Unbranded can, blank label, no text.**

**#10 — Quick service, full hospitality**
> A restaurant worker in a plain black t-shirt and apron handing a brown paper
> takeout bag across a steel counter to a customer, seen from the side in a warm
> dimly lit burger shop, out-of-focus kitchen pass behind, warm tungsten light.

**#11 — Storefront**
> The exterior of a small dark-fronted New York burger and beer restaurant at
> dusk, big warm glowing windows, people seated inside, wet sidewalk reflecting
> the light, deep blue evening sky above.

**#12 — Street**
> A tree-lined Manhattan side street beside Bryant Park in early autumn,
> late-afternoon sun through the leaves, a dark green awning over a restaurant
> frontage on the right, warm golden light.

**#13 — Footer**
> Three hands holding up three double smash cheeseburgers side by side against a
> near-black background, warm rim light from behind catching the craggy seared
> crust. Each burger: two thin smashed patties with lace-crisp edges, melted
> sharp American, dill pickles, glossy toasted brioche bun. No other ingredients.

**#14 — Hero video motion** *(optional, from approved #1)*
> The hand holding the burger stays still while the camera pushes in very
> slowly; faint steam drifts up off the melted cheese; the street bokeh behind
> shifts gently. One continuous unbroken take, extremely slow push-in, single
> smooth transformation from first frame to last, no cuts, no camera whips,
> subject centered.

## Supplied by the client (no credits)

- **Nothing yet.** Real photos of the room, the team and the signature burgers
  would replace #5, #10, #11 and #12 outright — those four are the weakest
  candidates for generation and the strongest for real photography.

## Not generating, and why

- **A vertical 9:16 hero** — one 16:9 master with the burger in the right third,
  `object-fit: cover` in CSS covers mobile for free.
- **The logo badge** — drawn as SVG in the page, free and infinitely sharp.
- **Interiors beyond #5/#11** — the existing licensed stock in `lib/images.ts`
  already covers the room, the bar and the pass at zero cost.

## Flags worth your attention

- **#5 and #10 contain synthetic faces.** Fine for a concept build; replace with
  real photographs of the actual team before this goes anywhere public.
- **#9's can is deliberately unbranded.** I will not generate a real beer
  brand's packaging. Swap in a real product shot you have rights to.
