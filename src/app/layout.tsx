import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/Footer"
import "./globals.css"
import MobileMenu from "@/components/MobileMenu"



export const metadata: Metadata = {
  title: { default: "Starter Site", template: "%s | Starter Site" },
  description: "A Next.js starter template with blog and contact form.",
  openGraph: {
    title: "Starter Site",
    description: "A Next.js starter template with blog and contact form.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starter Site",
    description: "A Next.js starter template",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="border-b bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
    <Link href="/" className="font-semibold">Starter Site</Link>
    {/* Desktop links */}
    <div className="hidden md:flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
    </div>
    {/* Mobile hamburger */}
    <MobileMenu />
  </div>
</nav>
        {children}
        <Footer />
      </body>
    </html>
  )
}
