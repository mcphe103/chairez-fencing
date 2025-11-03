"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RouteAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID || typeof window === "undefined") return;

    const page_path = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    const page_title = document.title;

    // gtag page_view on route change
    // @ts-ignore
    window.gtag?.("event", "page_view", {
      page_title,
      page_path,
    });
  }, [pathname, searchParams]);

  return null;
}
