import fs from "node:fs"
import path from "node:path"
import type { Metadata } from "next"
import GalleryGrid, { type GalleryImage } from "@/components/GalleryGrid"

export const metadata: Metadata = {
  title: "Gallery | Chairez Fencing",
  description: "See recent fence, deck, and outdoor lighting projects by Chairez Fencing.",
  openGraph: {
    title: "Chairez Fencing — Project Gallery",
    description: "A showcase of recent installations and builds.",
    type: "website",
    images: [{ url: "/images/og-gallery.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chairez Fencing — Project Gallery",
    description: "See our recent work.",
    images: ["/images/og-gallery.jpg"],
  },
}

function humanize(file: string) {
  const base = file.replace(/\.[^.]+$/, "")
  return base.replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())
}

export default function GalleryPage() {
  // Read files at build time from /public/images/gallery
  const galleryDir = path.join(process.cwd(), "public", "images", "gallery")
  let images: GalleryImage[] = []

  try {
    const files = fs.readdirSync(galleryDir)
      .filter(f => /\.(png|jpe?g|webp|gif)$/i.test(f))

    images = files.map((f) => ({
      src: `/images/gallery/${f}`,
      alt: humanize(f),
    }))
  } catch {
    // folder missing or empty — fine; show empty state
    images = []
  }

  return (
    <main>
      <GalleryGrid images={images} />
    </main>
  )
}
