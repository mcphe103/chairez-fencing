"use client"

import Image from "next/image"
import Reveal from "@/components/Reveal"

export default function Gallery() {
  const images: string[] = [
    "/images/gallery/image9.jpeg",
    "/images/gallery/image14.jpeg",
    "/images/gallery/image20.jpeg",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Featured Projects
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-slate-600 mt-3 text-center max-w-2xl mx-auto">
            A few examples of our recent fencing, decking, and lighting work.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="w-20 h-[3px] bg-[#7A0C0C] mx-auto mt-6 rounded-full" />
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((imgSrc, i) => (
            <Reveal key={imgSrc} delay={0.14 + i * 0.05}>
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={imgSrc}
                  alt={`Gallery image ${i + 1}`}
                  width={800}
                  height={600}
                  className="object-cover w-full h-64 md:h-72 hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  priority={i < 3}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
