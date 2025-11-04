"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = window.location.origin + pathname + window.location.search;
    // Send a custom event to GTM whenever the route changes
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "route_change",
      page_location: url,
      page_path: pathname + (window.location.search || ""),
      page_title: document.title,
      page_referrer: document.referrer || "",
    });
  }, [pathname]);

  return null;
}
