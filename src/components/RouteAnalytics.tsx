"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // ← no useSearchParams

export default function RouteAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!gaId || typeof window === "undefined") return;

    // Avoid firing on the special 404 render path
    if (pathname === "/404" || pathname === "/_not-found") return;

    const search = window.location.search || "";
    const page_path = pathname + search;
    const page_title = document.title;

    // @ts-ignore gtag injected by GA script
    window.gtag?.("event", "page_view", { page_title, page_path });
  }, [gaId, pathname]);

  return null;
}
