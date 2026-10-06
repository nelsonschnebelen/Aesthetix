import type { Metadata } from "next";
import {
  AudioLines,
  Clapperboard,
  Coins,
  Layers,
  Scissors,
  Send,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";
import { CopyPrompt } from "@/components/studio/CopyPrompt";

export const metadata: Metadata = {
  title: "Edit Suite | Aesthetix Media Team",
  description:
    "Internal playbook for the Aesthetix media team's Claude + Higgsfield video editing session.",
  robots: { index: false, follow: false },
};

const AGENDA = [
  {
    time: "0:00",
    title: "Setup & credit check",
    body: "Everyone confirms the Higgsfield connector is live in Claude and reads back their credit balance. Agree on the deliverables for the day.",
  },
  {
    time: "0:10",
    title: "Exercise 1 — Still to motion",
    body: "Animate a treatment-room photo into a 5-second hero loop for the website. Learn how to brief camera, light and duration.",
  },
  {
    time: "0:30",
    title: "Exercise 2 — Cut a Reel",
    body: "Hand Claude raw clinic footage and get back a 15-second 9:16 cut with titles, trims and burned-in captions.",
  },
  {
    time: "0:55",
    title: "Exercise 3 — Variations",
    body: "Reframe the Reel for feed (1:1) and site (16:9), then generate two alternate hooks from the same footage.",
  },
  {
    time: "1:15",
    title: "Finish & ship",
    body: "Upscale the keeper, run a virality read, and file everything in the shared Higgsfield folder.",
  },
  {
    time: "1:25",
    title: "Debrief",
    body: "What worked, what burned credits, which prompts go in the team library.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Brief Claude",
    body: "Describe the deliverable in plain language: platform, aspect ratio, length, mood, and what footage or stills you're starting from.",
  },
  {
    n: "02",
    title: "Claude drives Higgsfield",
    body: "Claude picks the right model or editing workflow, quotes the cost, and runs the job once you approve.",
  },
  {
    n: "03",
    title: "Review & refine",
    body: "Watch the result, then ask for one change at a time — tighter cut, warmer grade, slower push-in — until it's right.",
  },
];

const TOOLKIT = [
  {
    icon: Scissors,
    title: "Edit your footage",
    items: [
      "Cuts, trims, soundtrack swaps and layouts (Higgsedit)",
      "Animated titles, lower thirds and overlays",
      "Burned-in captions timed to the audio",
      "Prompt-based edits: Kling 3.0 Omni Edit, FLUX 3 Video Edit",
    ],
  },
  {
    icon: Clapperboard,
    title: "Generate new shots",
    items: [
      "Cinema Studio 3.0 for premium, cinematic b-roll",
      "Kling 3.0 for multi-shot sequences with audio",
      "Seedance 2.5 for reference-driven shots and extending clips",
      "Start / end frames to animate our own stills",
    ],
  },
  {
    icon: Layers,
    title: "Repurpose",
    items: [
      "Reframe one master into 9:16, 1:1 and 16:9",
      "Ad Multiplier: many edited versions of one 4–30s ad",
      "Clipify: turn a long YouTube video into subtitled shorts",
      "Video background removal",
    ],
  },
  {
    icon: AudioLines,
    title: "Sound & voice",
    items: [
      "Generated music, ambience and sound effects",
      "Voiceover, voice change and dubbing into other languages",
      "Lip-sync a new voice track to existing footage",
    ],
  },
  {
    icon: Wand2,
    title: "Finish",
    items: [
      "Upscale to 1080p / 4K (Topaz, Bytedance upscaler)",
      "Deflicker and SDR → HDR conversion",
      "Frame interpolation for smoother slow motion",
    ],
  },
  {
    icon: Send,
    title: "Review & ship",
    items: [
      "Virality predictor for a second opinion on hooks",
      "Shared Higgsfield folders for every project",
      "TikTok publishing once a post is approved",
    ],
  },
];

const PROMPTS = [
  {
    label: "Exercise 1 — Hero loop",
    prompt:
      "Using the treatment-room photo I just uploaded as the start frame, make a 5-second 16:9 loop for our website hero. Slow push-in, soft morning light drifting across the room, no people, no text. Quote me the credit cost and recommend a model before you generate.",
    note: "Ask for a 480p/720p draft first; only finalize at 1080p+ once the motion is approved.",
  },
  {
    label: "Exercise 2 — Cut a Reel",
    prompt:
      "Cut this footage into a 15-second 9:16 Instagram Reel. Open on the strongest visual in the first second, keep cuts on the beat, add a title card “The Science of Natural” in Playfair Display on cream (#F9F7F2), and burn in captions from the audio. Trim dead air.",
  },
  {
    label: "Exercise 3 — Reframe",
    prompt:
      "Reframe the approved Reel into 1:1 for the feed and 16:9 for the website. Keep the subject centered and the title card legible in each version.",
  },
  {
    label: "Exercise 3 — Alternate hooks",
    prompt:
      "Give me two alternate 2-second openings for this Reel: one calm and sensory (close-up texture, slow motion), one direct (bold text question on screen). Describe each before generating and tell me the cost.",
  },
  {
    label: "Finish — Upscale & check",
    prompt:
      "Upscale the final Reel to 4K, then run a virality read on it and tell me the one change most likely to improve the hook.",
  },
  {
    label: "Any time — Before you spend",
    prompt:
      "What's my Higgsfield credit balance, and what will this job cost? Don't generate anything until I say go.",
  },
];

const RULES = [
  {
    title: "No fabricated results",
    body: "Never generate or alter before/after imagery, skin, or treatment outcomes. Results content uses real, consented patient media only.",
  },
  {
    title: "No fake people talking",
    body: "No AI-generated patients, testimonials or staff endorsements. Real faces on camera need signed consent on file.",
  },
  {
    title: "No medical claims",
    body: "Titles and captions stay descriptive. Anything that promises an outcome goes to the clinical lead before posting.",
  },
  {
    title: "Mind the credits",
    body: "Always ask Claude for the cost first, draft at low resolution, and approve before finals. Generations are not refundable.",
  },
  {
    title: "Stay on brand",
    body: "Cream, forest and sage palette; Playfair Display + Inter type; calm pacing. Keep originals untouched — edit copies.",
  },
  {
    title: "Label it",
    body: "Note in the post brief when a shot is AI-generated so platform disclosure labels can be applied.",
  },
];

const SETUP = [
  "Higgsfield connector enabled in your Claude account",
  "Signed into the shared Aesthetix Higgsfield workspace",
  "Raw footage and brand stills ready to upload",
  "Credit balance checked (ask Claude)",
  "Target formats agreed: 9:16 Reels, 1:1 feed, 16:9 site",
];

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-technical text-[#1A3C34]/60">{eyebrow}</p>
      <h2 className="font-editorial mt-3 text-3xl text-[#0f281e] md:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 leading-relaxed text-[#0f281e]/75">{intro}</p>
      )}
    </div>
  );
}

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#0f281e]">
      {/* Hero */}
      <header className="relative overflow-hidden bg-[#0A221C] px-4 pb-20 pt-10 text-[#F9F7F2] md:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#1A3C34] opacity-60 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg md:text-xl">Aesthetix</span>
            <span className="text-technical rounded-full border border-[#F9F7F2]/20 px-3 py-1.5 text-[#F9F7F2]/70">
              Internal · Media team
            </span>
          </div>

          <div className="mt-20 max-w-3xl md:mt-28">
            <p className="text-technical text-[#D4DCD6]/70">
              Video editing session
            </p>
            <h1 className="font-editorial mt-4 text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
              The Edit Suite.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F9F7F2]/75 md:text-lg">
              Claude is your editor, Higgsfield is the studio. Today we brief
              in plain language, cut real clinic footage, and ship on-brand
              video — without wasting a credit.
            </p>
            <nav className="mt-10 flex flex-wrap gap-3 text-sm">
              {[
                ["#agenda", "Agenda"],
                ["#toolkit", "Toolkit"],
                ["#prompts", "Prompts"],
                ["#rules", "House rules"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border border-[#F9F7F2]/25 px-4 py-2 transition-colors hover:bg-[#F9F7F2]/10"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* How it works */}
        <section className="px-4 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="How it works" title="Three moves, on repeat." />
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {STEPS.map((step) => (
                <div
                  key={step.n}
                  className="rounded-2xl border border-[#D4DCD6] bg-white/60 p-6"
                >
                  <span className="font-display text-3xl text-[#1A3C34]/30">
                    {step.n}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0f281e]/70">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agenda + setup */}
        <section
          id="agenda"
          className="scroll-mt-8 border-y border-[#D4DCD6] bg-[#D4DCD6]/25 px-4 py-20 md:py-24"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Agenda · 90 minutes"
                title="Today's session"
              />
              <ol className="mt-10 space-y-0">
                {AGENDA.map((item) => (
                  <li
                    key={item.time}
                    className="grid grid-cols-[4rem_1fr] gap-4 border-t border-[#1A3C34]/15 py-5"
                  >
                    <span className="font-mono text-sm text-[#1A3C34]/60">
                      {item.time}
                    </span>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#0f281e]/70">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="h-fit rounded-2xl bg-[#1A3C34] p-7 text-[#F9F7F2] lg:sticky lg:top-8">
              <p className="text-technical text-[#D4DCD6]/70">
                Before we start
              </p>
              <h3 className="font-editorial mt-3 text-2xl">Setup checklist</h3>
              <ul className="mt-6 space-y-3 text-sm">
                {SETUP.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border border-[#F9F7F2]/40"
                    />
                    <span className="text-[#F9F7F2]/85">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex gap-3 rounded-xl bg-[#F9F7F2]/10 p-4 text-sm text-[#F9F7F2]/80">
                <Coins size={18} className="mt-0.5 shrink-0" />
                <p>
                  Every generation, edit and upscale costs Higgsfield credits.
                  Claude can quote a job before it runs — always ask.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* Toolkit */}
        <section id="toolkit" className="scroll-mt-8 px-4 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Toolkit"
              title="What Claude can do in Higgsfield"
              intro="You don't need to memorize model names — describe the result and Claude will choose. These are here so you know what to ask for."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TOOLKIT.map(({ icon: Icon, title, items }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#D4DCD6] bg-white/60 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A3C34] text-[#F9F7F2]">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#0f281e]/70">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden className="text-[#1A3C34]/40">
                          —
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prompts */}
        <section
          id="prompts"
          className="scroll-mt-8 border-t border-[#D4DCD6] px-4 py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Prompt library"
              title="Copy, paste, adjust."
              intro="Starting points for each exercise. Swap in your own footage and details — the more specific the brief, the fewer credits it takes to get there."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {PROMPTS.map((p) => (
                <CopyPrompt key={p.label} {...p} />
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 rounded-2xl border border-dashed border-[#1A3C34]/30 p-6 text-sm md:grid-cols-3">
              <p className="flex gap-3">
                <Sparkles size={18} className="mt-0.5 shrink-0 text-[#1A3C34]" />
                <span>
                  <strong>Always name the format.</strong> Platform, aspect
                  ratio and length up front.
                </span>
              </p>
              <p className="flex gap-3">
                <Sparkles size={18} className="mt-0.5 shrink-0 text-[#1A3C34]" />
                <span>
                  <strong>Direct the camera.</strong> Push-in, orbit, locked
                  off, handheld — say which.
                </span>
              </p>
              <p className="flex gap-3">
                <Sparkles size={18} className="mt-0.5 shrink-0 text-[#1A3C34]" />
                <span>
                  <strong>One change per round.</strong> It&rsquo;s easier to see
                  what worked and cheaper to undo.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* House rules */}
        <section
          id="rules"
          className="scroll-mt-8 bg-[#0A221C] px-4 py-20 text-[#F9F7F2] md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-[#D4DCD6]/70" />
              <p className="text-technical text-[#D4DCD6]/70">House rules</p>
            </div>
            <h2 className="font-editorial mt-3 text-3xl md:text-4xl">
              We&rsquo;re a medical practice first.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {RULES.map((rule) => (
                <div
                  key={rule.title}
                  className="border-t border-[#F9F7F2]/15 pt-5"
                >
                  <h3 className="font-semibold">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#F9F7F2]/70">
                    {rule.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 py-10 text-center text-xs text-[#0f281e]/50">
        Aesthetix · Internal media team resource · Not for public distribution
      </footer>
    </div>
  );
}
