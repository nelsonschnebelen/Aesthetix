"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { StickyBookingFooter } from "@/components/booking/StickyBookingFooter";
import { ChatWidget } from "@/components/chat/ChatWidget";

/** Internal (team-only) routes render without the public booking chrome. */
const INTERNAL_ROUTES = ["/studio"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const isInternal = INTERNAL_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isInternal) return <>{children}</>;

  return (
    <>
      <Navbar />
      {children}
      <StickyBookingFooter />
      <ChatWidget />
    </>
  );
}
