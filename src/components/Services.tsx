"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { BUSINESS, telHref, emailHref,phoneHref } from "@/lib/business"


// Brand colors
const burgundy = "#7A0C0C"
const burgundyHover = "#5C0909"

type Service = {
  key: string
  name: string
  blurb: string
  href: string
  img?: string // optional: /public images
}

const SERVICES: Service[] = [
  {
    key: "wood",
    name: "Wood Fencing",
    blurb: "Classic privacy and curb appeal with pressure-treated posts and custom styles.",
    href: "/services/wood",
    img: "/images/services/image15.jpeg", // use your real client photo if available
  },
  {
    key: "decks",
    name: "Decks",
    blurb: "Sturdy, weather-resistant decks built for everyday use and weekend hosting.",
    href: "/services/decks",
    img: "/images/services/img5.jpg", // or placeholder deck.svg (below)
  },
  {
    key: "lighting",
    name: "Outdoor Lighting",
    blurb: "Installations & fixture upgrades for pathways, patios, and security lighting.",
    href: "/services/lighting",
    img: "/images/services/img4.jpg", // or placeholder lighting.svg (below)
  },
]


export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="uppercase tracking-widest text-sm font-semibold" style={{ color: burgundy }}>
            Our Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Built to Last. Installed Right.
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            From privacy fences to ornamental iron, we deliver craftsmanship you can trust.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">

          {SERVICES.map((s, i) => (
            <motion.article
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
            >
              {/* Optional image (falls back to a color block if missing) */}
              <div className="relative h-40 overflow-hidden">
  {s.img ? (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full"
    >
      <Image
        src={s.img}
        alt={`${s.name} example`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        priority={i < 2}
      />
    </motion.div>
  ) : (
    <div className="h-full w-full" style={{ background: burgundy, opacity: 0.1 }} />
  )}
  {/* key change: allow hover to pass through */}
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
</div>



                  <div className="p-5 flex flex-col h-full">
                    <h3 className="text-xl font-semibold">{s.name}</h3>
                    <p className="text-slate-600 mt-2 flex-1">{s.blurb}</p>

                    <div className="mt-4">
                      <Link
                        href={s.href}
                        className="inline-block rounded-lg px-4 py-2 text-white transition-colors"
                        style={{ backgroundColor: burgundy }}
                        onMouseEnter={(e) => ((e.currentTarget.style.backgroundColor = burgundyHover))}
                        onMouseLeave={(e) => ((e.currentTarget.style.backgroundColor = burgundy))}
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </motion.article>
                ))}
        </div>

        {/* CTA bar */}
        {/* CTA */}
<section className="py-14 md:py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-slate-200 p-6 md:p-8">
    <div>
      <h3 className="text-2xl font-bold">Ready for a free quote?</h3>
      <p className="text-slate-600 mt-1">
        Tell us about your project — we’ll respond quickly.
      </p>
      <p className="text-slate-700 mt-3 font-medium">
        📞 Call us today:{" "}
        <a href={phoneHref} className="text-[#7A0C0C] hover:underline">
                  {BUSINESS.phoneDisplay}
                </a>
      </p>
    </div>

    <Link
      href="/contact"
      className="rounded-lg px-5 py-3 text-white font-semibold bg-[#7A0C0C] hover:bg-[#5C0909] transition-colors"
    >
      Get a Free Quote
    </Link>
  </div>
</section>

      </div>
    </section>
    )
}
