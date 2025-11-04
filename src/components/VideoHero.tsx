"use client";

import { useEffect, useRef } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  poster?: string; // e.g. "/images/hero-fallback.jpg"
};

export default function VideoHero({
  title = "Quality Fencing & Decks",
  subtitle = "Serving Antioch, Pittsburg, Brentwood, Oakley, and the East Bay.",
  ctaText = "Request a Quote",
  ctaHref = "#contact",
  poster = "/images/og-default.jpg",
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Respect prefers-reduced-motion by pausing the video (do NOT hide it)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
      >
        {/* Optional: add a WebM source above MP4 later */}
        {/* <source src="/videos/chairez-video.webm?v=2" type="video/webm" /> */}
        <source src="/videos/chairez-video.mp4?v=2" type="video/mp4" />
      </video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Foreground content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto w-full max-w-5xl px-6 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-sm">{title}</h1>
          <p className="mt-4 text-base md:text-lg opacity-95">{subtitle}</p>

          {ctaText && ctaHref && (
            <a
              href={ctaHref}
              className="inline-block mt-6 rounded-lg px-5 py-3 font-semibold
                         bg-[#7A0C0C] hover:bg-[#5C0909] transition"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
