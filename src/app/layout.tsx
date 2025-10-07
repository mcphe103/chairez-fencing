import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/Footer"
import "./globals.css"


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
        <nav className="p-4 flex gap-4 bg-gray-100 border-b">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  )
}
