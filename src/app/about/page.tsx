import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import PhoneLink from "@/components/PhoneLink";
import { BUSINESS } from "@/lib/business";



export const metadata: Metadata = {
  title: "About | Chairez Fencing",
  description:
  "Chairez Fencing is a family-owned contractor specializing in wood fencing, decks, and outdoor lighting. Reliable, affordable, professional.",
  openGraph: {
    title: "About Chairez Fencing",
    description:
    "Family-owned contractor for wood fencing, decks, and outdoor lighting. Serving our community with quality craftsmanship.",
    type: "website",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Chairez Fencing",
    description:
    "Reliable, affordable, professional fencing and outdoor projects.",
    images: ["/images/og-default.jpg"],
  },
}

const burgundy = "#7A0C0C"

const ABOUT_LD_JSON = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Chairez Fencing",
  url: "https://www.chairezfencing.com/about",
  mainEntity: {
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    url: "https://www.chairezfencing.com",
    image: "https://www.chairezfencing.com/images/logo.png",
    description:
    "Family-owned contractor specializing in wood fencing, decks, and outdoor lighting.",
    telephone: BUSINESS.phoneE164,           // ✅ single source
    areaServed: ["Fresno County, CA"],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* JSON-LD for SEO */}
      <Script
        id="ld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_LD_JSON) }}
      />

      {/* Header Section */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <p
            className="uppercase tracking-widest text-sm font-semibold"
            style={{ color: burgundy }}
          >
            About Us
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Family-Owned. Quality-Driven.
          </h1>
          <p className="text-slate-600 mt-5 max-w-3xl">
            Chairez Fencing delivers reliable craftsmanship for{" "}
            <strong>wood fences</strong>, <strong>decks</strong>, and{" "}
            <strong>outdoor lighting</strong>. We show up on time, communicate
            clearly, and build it right the first time.
          </p>
        </div>
      </section>

      {/* Story + Highlights */}
<section className="py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 md:gap-12">
    <div className="self-center">
      <h2 className="text-2xl md:text-3xl font-bold">Our Story</h2>
      <p className="text-slate-700 mt-3 md:mt-4 leading-relaxed">
        We started with a simple goal: treat every project like it’s our own home. Today, most of our work comes from referrals and repeat
        customers who appreciate our attention to detail, fair pricing, and clean job sites.
      </p>
      <p className="text-slate-700 mt-3 leading-relaxed">
        Whether you need privacy for the backyard, a deck for weekend gatherings, or lighting for safety and curb appeal—we’re here to help
        you plan and build with confidence.
      </p>
      <p className="text-slate-700 mt-3 leading-relaxed">
        We proudly serve homeowners and businesses throughout Antioch, Pittsburg, Brentwood, Oakley, Concord, Clayton, Discovery Bay, Bay Point, Knightsen, and Walnut Creek—with availability across nearby East Bay and Delta communities.
      </p>

      {/* Trust strip (optional): BBB badge inline here too if you want it closer to the story) */}
      {/* <div className="mt-5 flex items-center gap-4">
        <Image src="/images/badges/bbb-accredited.png" alt="BBB Accredited Business" width={140} height={44} className="h-10 w-auto" />
      </div> */}
    </div>

    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {[
        ["🔨", "Built to Last", "Proper posts, hardware, and finishes — no shortcuts."],
        ["🌲", "Quality Materials & Workmanship", "We use high-quality wood and proven techniques so your fence or deck looks great and lasts."],
        ["📍", "Experienced Local Experts", "We know local codes, styles, and materials that work for California homes."],
        ["💬", "Customer-Focused Service", "Clear communication, reliable timelines, and satisfaction from start to finish."],
      ].map(([icon, title, text]) => (
        <div key={title} className="rounded-2xl border border-slate-200 p-5 bg-white">
          <div className="text-3xl">{icon}</div>
          <h3 className="font-semibold mt-2">{title}</h3>
          <p className="text-slate-600 mt-1.5 text-sm leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Service Areas */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Service Areas</h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Proudly serving homeowners and businesses across Fresno County and the
            surrounding Central Valley.
          </p>

          <div className="w-16 h-[3px] bg-[#7A0C0C] mx-auto mt-6 rounded-full" />

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {BUSINESS.serviceAreas.map((city) => (
              <span
                key={city}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm shadow-sm"
              >
                📍 {city}
              </span>
              ))}
          </div>
        </div>
      </section>

  {/* Credentials / What We Build */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2">
    {/* Left: Credentials */}
    <div className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-slate-50">
      <h3 className="text-xl font-semibold">Credentials</h3>

      {/* BBB badge row */}
      <div className="mt-4 flex items-center gap-4">
        <a
          href="https://www.bbb.org/" // ← Replace with your actual BBB profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <img
            src="/images/badges/bbb-accredited.png"
            alt="BBB Accredited Business"
            className="h-10 w-auto"
          />
        </a>
        <p className="text-slate-600 text-sm leading-snug">
          Proudly accredited by the Better Business Bureau for quality and professionalism.
        </p>
      </div>

      {/* Divider line */}
      <div className="my-5 border-t border-slate-200" />

      {/* Credentials list */}
      <ul className="space-y-2 text-slate-700">
        <li>• Licensed & Insured </li>
        <li>• Family-owned & operated</li>
        <li>• Free, no-pressure quotes</li>
      </ul>
    </div>

    {/* Right: What We Build */}
    <div className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-slate-50">
      <h3 className="text-xl font-semibold">What We Build</h3>

      {/* Decorative divider for symmetry */}
      <div className="my-5 border-t border-slate-200" />

      {/* Build list */}
      <ul className="space-y-2 text-slate-700">
        <li>• Wood Fencing (privacy, gates, custom styles)</li>
        <li>• Decks (new builds, resurfacing, repairs)</li>
        <li>• Outdoor Lighting (pathway, security, fixture upgrades)</li>
      </ul>
    </div>
  </div>
</section>





      {/* CTA */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-slate-200 p-6 md:p-8">
          <div>
            <h3 className="text-2xl font-bold">Ready for a free quote?</h3>
            <p className="text-slate-600 mt-1">
              Tell us about your project — we’ll respond quickly.
            </p>
            <p className="text-slate-700 mt-3 font-medium">
              📞 Call us today: <PhoneLink withIcon={false} />
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

    </main>
    )
}
