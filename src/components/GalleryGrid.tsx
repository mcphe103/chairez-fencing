"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export type GalleryImage = { src: string; alt?: string }

const burgundy = "#7A0C0C"

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i: number) => { setIndex(i); setOpen(true) }
  const close = useCallback(() => setOpen(false), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, close, prev, next])

  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = original }
  }, [open])

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="uppercase tracking-widest text-sm font-semibold" style={{ color: burgundy }}>
            Our Work
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Project Gallery</h1>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            A selection of recent fences, decks, and outdoor lighting projects by Chairez Fencing.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.button
              key={img.src + i}
              type="button"
              onClick={() => openAt(i)}
              aria-label={`Open image ${i + 1} of ${images.length}`}
              className="relative overflow-hidden rounded-2xl shadow-sm group cursor-pointer outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={img.src}
                  alt={img.alt ?? "Gallery image"}
                  width={500}
                  height={400}
                  className="object-cover w-full h-64 md:h-72"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all pointer-events-none"></div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && images.length > 0 && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            aria-modal="true" role="dialog"
          >
            <motion.div
              className="absolute inset-0 bg-black/80"
              onClick={close}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 max-w-6xl w-[92vw] md:w-[84vw] lg:w-[72vw] aspect-video"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Image
                src={images[index].src}
                alt={images[index].alt ?? "Gallery image enlarged"}
                fill
                className="object-contain rounded-xl"
                sizes="90vw"
                priority
              />
              <button
                onClick={close}
                aria-label="Close gallery"
                className="absolute -top-12 right-0 md:top-4 md:right-4 bg-white/90 hover:bg-white rounded-full px-3 py-1.5 text-sm font-medium shadow"
              >
                Close
              </button>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full px-3 py-2 text-sm font-semibold shadow"
                style={{ color: burgundy }}
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full px-3 py-2 text-sm font-semibold shadow"
                style={{ color: burgundy }}
              >
                ›
              </button>
              <div className="hidden md:flex absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {index + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
