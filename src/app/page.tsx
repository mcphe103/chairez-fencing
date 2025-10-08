import type { Metadata } from "next"
import Link from "next/link"
import Hero from "@/components/Hero"

export const metadata: Metadata = {
  title: "Home",
  description: "Starter homepage",
}

export default function HomePage() {
  return (
    <main>
      <Hero
        title="A clean Next.js Template"
        subtitle="Ready to customize for any client or project."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "View Services", href: "/services" }}
      />

      {/* Features row */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">What’s inside</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { t: "Full-stack", d: "API routes + validated forms + persistence." },
            { t: "Blog-ready", d: "Dynamic routes with a tiny posts module." },
            { t: "SEO basics", d: "Metadata + robots.txt + sitemap scaffold." },
          ].map((x) => (
            <article key={x.t} className="border rounded p-6 bg-white">
              <h3 className="text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 text-gray-700">{x.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/blog" className="underline">See sample posts →</Link>
        </div>
      </section>
    </main>
  )
}
