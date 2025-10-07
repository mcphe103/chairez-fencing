import type { Metadata } from "next"
import Link from "next/link"
import Button from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Home",
  description: "Starter homepage",
}

export default function HomePage() {
  return (
    <main>
      <section className="section">
        <h1 className="text-4xl md:text-5xl font-bold">Starter Template</h1>
        <p className="mt-3 text-gray-700 max-w-2xl">
          A clean baseline you can clone for any client project.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/contact"><span className="btn-primary">Contact Us</span></Link>
          <Link href="/services"><span className="btn-ghost">View Services</span></Link>
        </div>
      </section>
    </main>
  )
}
