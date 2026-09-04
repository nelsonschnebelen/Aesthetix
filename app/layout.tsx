import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrderDrawer } from "@/components/order/OrderDrawer";
import { ScrollMotion } from "@/components/motion/ScrollMotion";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const neon = Kaushan_Script({
  variable: "--font-neon-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Handcraft — Smash Burgers & Brew",
    template: "%s · Handcraft",
  },
  description:
    "Fresh beef smashed thin on a 450° flat top until the crust reaches the edge. Tots, shakes and sixteen taps. 110 West 40th Street, New York.",
  openGraph: {
    title: "Handcraft — Smash Burgers & Brew",
    description:
      "Never frozen. Smashed to order. 110 West 40th Street, New York.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${mono.variable} ${neon.variable}`}>
      <head>
        {/* Pre-paint engine gate: the cinematic layout must exist before the
            first frame, or the still hero flashes. Never under reduced motion. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('cine-on')}catch(e){}",
          }}
        />
      </head>
      <body className="grain min-h-screen bg-char font-sans text-bone antialiased">
        <ScrollMotion />
        <Navbar />
        {children}
        <Footer />
        <OrderDrawer />
      </body>
    </html>
  );
}
