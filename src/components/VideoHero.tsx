"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  poster?: string;
};

export default function VideoHero({
  title = "Quality Fencing & Decks",
  subtitle = "Serving Antioch, Pittsburg, Brentwood, Oakley, and the East Bay.",
  ctaText = "Request a Quote",
  ctaHref = "#contact",
  poster = "/images/og-default.jpg",
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Respect reduced motion and data saver
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as any).connection?.saveData === true;

    v.muted = true; // ensure
    if (reduceMotion || saveData) {
      // Don’t auto-play for these users
      return;
    }

    // Try to play; if blocked by policy, show the overlay button
    const tryPlay = async () => {
      try {
        await v.play();
        setBlocked(false);
      } catch {
        setBlocked(true);
      }
    };

    // Wait until the video can play, then attempt
    if (v.readyState >= 2) {
      tryPlay();
    } else {
      const onCanPlay = () => tryPlay();
      v.addEventListener("canplay", onCanPlay, { once: true });
      return () => v.removeEventListener("canplay", onCanPlay);
    }
  }, []);

  const handleManualPlay = async () => {
    try {
      await videoRef.current?.play();
      setBlocked(false);
    } catch {
      // If still blocked, leave the button visible
    }
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
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
        {/* Optional: add a WebM source (smaller for Chrome/Firefox) */}
        {/* <source src="/videos/chairez-video.webm?v=2" type="video/webm" /> */}
        <source src="/videos/chairez-video.mp4?v=2" type="video/mp4" />
      </video>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Manual play overlay (only if autoplay blocked) */}
      {blocked && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <button
            onClick={handleManualPlay}
            className="rounded-full px-5 py-3 bg-white/90 text-slate-900 font-semibold shadow hover:bg-white transition"
            aria-label="Play background video"
          >
            ▶︎ Play Background
          </button>
        </div>
      )}

      {/* Foreground content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto w-full max-w-5xl px-6 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-sm">{title}</h1>
          <p className="mt-4 text-base md:text-lg opacity-95">{subtitle}</p>

          {ctaText && ctaHref && (
            <a
              href={ctaHref}
              className="inline-block mt-6 rounded-lg px-5 py-3 font-semibold bg-[#7A0C0C] hover:bg-[#5C0909] transition"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
