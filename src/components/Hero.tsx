"use client"

import Link from "next/link"
import Image from "next/image"
import Reveal from "@/components/Reveal"

export default function Hero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Optimized background */}
      <Image
        src="/images/hero.jpg"      // ← your hero image in /public/images/
        alt=""                       // decorative bg
        fill                         // fills the section
        priority                     // load ASAP
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-6 text-white">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Reliable. Affordable. Professional Fencing Solutions.
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md">
              We use quality materials and proven techniques to ensure your fence or
              deck stands strong for years.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Link
              href="#contact"
              className="inline-block bg-[#7A0C0C] hover:bg-[#5C0909] text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
            >
              Get a Free Quote
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
