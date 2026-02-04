import Link from "next/link";
import { BUSINESS, telFromE164 } from "@/lib/business";
import GalleryGrid, { type GalleryImage } from "@/components/GalleryGrid";

export default function WoodGalleryPage() {
  const primaryPhone = BUSINESS.phones?.[0];

const images: GalleryImage[] = [
  {
    src: "/images/gallery/wood/wood-fence-01.jpeg",
    alt: "Residential wood fence installation by Chairez Fencing",
  },
  {
    src: "/images/gallery/wood/wood-fence-02.jpeg",
    alt: "Custom wood privacy fence with clean straight lines",
  },
  {
    src: "/images/gallery/wood/wood-fence-03.jpeg",
    alt: "Backyard wood fence for residential property",
  },
  {
    src: "/images/gallery/wood/wood-fence-04.jpeg",
    alt: "Wood fencing project with matching gate",
  },
  {
    src: "/images/gallery/wood/wood-fence-05.jpeg",
    alt: "Close-up of wood fence craftsmanship and materials",
  },
  {
    src: "/images/gallery/wood/wood-fence-06.jpeg",
    alt: "Newly installed wood fence along property line",
  },
  {
    src: "/images/gallery/wood/wood-fence-07.jpeg",
    alt: "Custom wood fence design for backyard privacy",
  },
  {
    src: "/images/gallery/wood/wood-fence-08.jpeg",
    alt: "Wood fence installation for residential yard",
  },
  {
    src: "/images/gallery/wood/wood-fence-09.jpeg",
    alt: "Wood fencing project showing height and alignment",
  },
  {
    src: "/images/gallery/wood/wood-fence-10.jpeg",
    alt: "Finished wood fence project by Chairez Fencing",
  },
];


  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl rounded-2xl bg-white/95 p-6 shadow-sm">
          <Link href="/gallery" className="text-sm text-slate-600 hover:underline">
            ← Back to Gallery
          </Link>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">Wood Fencing</h1>
          <p className="mt-3 text-slate-700">
            A selection of recent wood fencing projects.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#7A0C0C] px-5 py-3 text-white font-semibold hover:bg-[#5C0909] transition-colors"
          >
            Request a Quote
          </Link>

          {primaryPhone?.e164 && (
            <a
              href={telFromE164(primaryPhone.e164)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Call Now
            </a>
          )}
        </div>
      </div>

      <div className="mt-12">
        <GalleryGrid images={images} showHeader={false} />
      </div>
    </main>
  );
}
