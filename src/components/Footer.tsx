// components/Footer.tsx
import Link from "next/link"
import Image from "next/image"
import { BUSINESS, telHref } from "@/lib/business"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={`${BUSINESS.name} logo`}
              width={48}
              height={48}
              className="object-contain rounded bg-white p-1"
            />
            <span className="font-semibold text-lg">{BUSINESS.name}</span>
          </Link>
          <p className="text-slate-400 mt-3 text-sm">
            We proudly serve homeowners and businesses throughout Antioch, Pittsburg, Brentwood, Oakley, Concord, Clayton, Discovery Bay, Bay Point, Knightsen, and Walnut Creek—with availability across nearby East Bay and Delta communities.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="grid gap-2 text-sm">
          <h4 className="text-slate-300 font-semibold mb-2">Explore</h4>
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/#services" className="hover:text-white">Services</Link>
          <Link href="/gallery" className="hover:text-white">Gallery</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>

        {/* Service Areas */}
        <div>
          <h4 className="text-slate-300 font-semibold mb-2">Service Areas</h4>
          <div className="flex flex-wrap gap-2">
            {BUSINESS.serviceAreas.map((city) => (
              <span
                key={city}
                className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs"
              >
                📍 {city}
              </span>
            ))}
          </div>
        </div>

        {/* Contact + BBB */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-slate-300 font-semibold mb-2">Contact</h4>
            <p className="text-sm">
              <a href={telHref} className="text-white hover:underline">
                📞 {BUSINESS.phoneDisplay}
              </a>
            </p>
            {BUSINESS.email && (
              <p className="text-sm mt-2">
                <a href={`mailto:${BUSINESS.email}`} className="hover:underline">
                  ✉️ {BUSINESS.email}
                </a>
              </p>
            )}
          </div>

          {/* BBB badge card */}
          <div className="mt-6 flex items-center justify-start">
            <Link
              href="https://www.bbb.org/us/ca/antioch/profile/fence-contractors/chairez-fencing-llc-1116-941131" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <div className="rounded-md bg-white p-1.5 shadow-sm hover:shadow transition">
                <Image
                  src="/images/badges/bbb-accredited.png"
                  alt="BBB Accredited Business"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <span className="sr-only">View our BBB profile</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="text-xs text-slate-400 flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
