import type { Metadata } from "next"
import Link from "next/link"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"
import Reveal from "@/components/Reveal" 
import VideoHero from "@/components/VideoHero";




export const metadata: Metadata = {
  title: "Chairez Fencing",
  description: "A Family-owned business",
}

export default function HomePage() {

  
   const features = [
    {
      icon: "🛠️",
      title: "Built to Last",
      desc: "Quality materials and expert construction ensure your fence stands sturdy through every season.",
    },
    {
      icon: "🤝",
      title: "Transparent Estimates",
      desc: "You’ll always know what you’re getting — clear quotes, fair prices, and no surprises.",
    },
    {
      icon: " ✅ ",
      title: "Experienced Local Experts",
      desc: "Years of hands-on experience serving Antioch and nearby communities, with a deep understanding of local codes, materials, and styles.",
    },
  ]
  return (
    <main>
      <VideoHero
        title="Reliable. Affordable. Professional Fencing Solutions."
        subtitle="Proudly serving Antioch, Pittsburg, Brentwood, Oakley, and nearby East Bay communities."
        ctaText="Get a free Quote"
        ctaHref="#contact"
        poster="/images/og-default.jpg" // optional fallback frame
      />
      {/* Why Homeowners Choose Us */}
<section className="bg-gradient-to-b from-white to-slate-50 py-14">
  <div className="max-w-7xl mx-auto px-6">
    <Reveal>
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Why Homeowners Choose <span className="text-[#7A0C0C]">Chairez Fencing</span>
      </h2>
    </Reveal>

    <Reveal delay={0.08}>
      <p className="text-slate-600 mt-3 text-center max-w-2xl mx-auto">
        Family-owned, craftsmanship-first, and clear communication—every project treated like our own home.
      </p>
    </Reveal>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {features.map((f, i) => (
        <Reveal key={f.title} delay={0.12 + i * 0.06}>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">{f.icon}</div>
            <h3 className="text-lg font-semibold mt-3 text-[#7A0C0C]">{f.title}</h3>
            <p className="mt-2 text-slate-700 leading-relaxed">{f.desc}</p>
          </article>
        </Reveal>
      ))}
    </div>

  </div>
</section>

      

      <Services />
      {/* Next: Gallery / About / Contact */}
      <Gallery />
      <Contact /> {/* scroll target for #contact */}

      

    </main>
  )
}
