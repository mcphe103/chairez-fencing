import Link from "next/link";
import Image from "next/image";
import { BUSINESS, telFromE164 } from "@/lib/business";

const GALLERY_SECTIONS = [
  {
    title: "Wood Fencing",
    href: "/gallery/wood",
    image: "/images/services/image15.jpeg",
    imageAlt: "Wood fencing project gallery preview",
    blurb: "Privacy fences, redwood, and clean installs.",
  },
  {
    title: "Decks",
    href: "/gallery/decks",
    image: "/images/services/img5.jpg",
    imageAlt: "Deck construction project gallery preview",
    blurb: "Durable builds made for everyday use and weekends.",
  },
  {
    title: "Iron Fencing",
    href: "/gallery/iron",
    image: "/images/services/iron-01.jpeg",
    imageAlt: "Iron fencing project gallery preview",
    blurb: "Decorative and security iron fencing built to last.",
  },

  // To add another section
//   {
//   title: "Gates",
//   href: "/gallery/gates",
//   image: "/images/services/gates-preview.jpeg",
//   imageAlt: "Custom gate project gallery preview",
//   blurb: "Walk gates and driveway gate builds and installs.",
// }

] as const;

export default function GalleryPage() {
  const primaryPhone = BUSINESS.phones?.[0];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <header className="max-w-2xl rounded-2xl bg-white/95 p-6 shadow-sm">
        <h1 className="text-4xl font-bold text-slate-900">Photo Gallery</h1>
        <p className="mt-3 text-slate-700">Browse recent projects by category.</p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {GALLERY_SECTIONS.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            aria-label={`View ${g.title} photos`}
          >
            <div className="relative h-56">
              <Image
                src={g.image}
                alt={g.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-900">{g.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{g.blurb}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7A0C0C]">
                View photos <span aria-hidden>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA strip */}
      <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Want something similar?</h2>
          <p className="mt-2 text-slate-700">
            Tell us what you’re thinking and we’ll recommend the best option for your property.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
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
    </main>
  );
}
