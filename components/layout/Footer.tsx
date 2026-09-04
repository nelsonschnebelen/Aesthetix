import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { GriddleStatus } from "@/components/GriddleStatus";

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
      ["/visit", "Directions"],
      ["/visit", "Hours"],
      ["/visit", "Contact"],
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
              <a href="tel:+12125550140" className="transition-colors hover:text-bone">
                (212) 555-0140
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-bone/12 pt-7 text-sm text-bone/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Handcraft Burgers &amp; Brew. All rights reserved.</p>
          <p className="label-tech">110 W 40th St · New York</p>
        </div>
      </div>
    </footer>
  );
}
