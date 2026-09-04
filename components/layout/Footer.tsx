import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { GriddleStatus } from "@/components/GriddleStatus";
import { LEGAL, REGULAR_HOURS, SITE } from "@/lib/site";

const COLUMNS: { title: string; links: [string, string][] }[] = [
  {
    title: "Menu",
    links: [
      ["/menu", "Burgers"],
      ["/menu", "Beer & drinks"],
      ["/build", "Build your own"],
    ],
  },
  {
    title: "About",
    links: [
      ["/story", "Our story"],
      ["/club", "Hospitality Club"],
      ["/#month", "Burger of the month"],
    ],
  },
  {
    title: "Visit",
    links: [
      ["/visit", "Directions & hours"],
      ["/faq", "FAQ"],
      ["/menu", "The full menu"],
    ],
  },
];

const SOCIAL: [string, string][] = [
  ["Instagram", "https://instagram.com"],
  ["Facebook", "https://facebook.com"],
  ["TikTok", "https://tiktok.com"],
];

export function Footer() {
  return (
    <footer className="border-t border-bone/12 bg-char">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.7fr)_0.9fr]">
          <div>
            <Logo className="h-20" />
            <GriddleStatus className="mt-7" />
            <dl className="mt-6 space-y-1.5">
              {REGULAR_HOURS.map((r) => (
                <div key={r.days} className="flex flex-wrap gap-x-4 text-sm">
                  <dt className="w-40 shrink-0 text-bone/45">{r.days}</dt>
                  <dd className="font-mono-tech text-bone/70">{r.hours}</dd>
                </div>
              ))}
            </dl>
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn mt-7 inline-block bg-gold text-char hover:bg-bone"
            >
              Order Online ↗
            </a>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title}>
              <p className="label-tech mb-5 text-gold">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map(([href, label]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-bone/65 transition-colors hover:text-bone"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="label-tech mb-5 text-gold">Follow us</p>
            <ul className="flex flex-col gap-3">
              {SOCIAL.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-bone/65 transition-colors hover:text-bone"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-bone/65">
              <a href={SITE.phoneHref} className="transition-colors hover:text-bone">
                {SITE.phone}
              </a>
            </p>
            <address className="mt-2 text-sm leading-relaxed text-bone/45 not-italic">
              {SITE.street}
              <br />
              {SITE.cityLine}
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-bone/12 pt-7">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-bone/40">
            {LEGAL.map((l, i) => (
              <li key={l.label} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-bone/20">|</span>}
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-bone/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-2 text-sm text-bone/30 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
            <p className="label-tech">
              {SITE.street} · {SITE.neighbourhood}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
