import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chairezfencing.com"),
  title: { default: "Chairez Fencing", template: "%s | Chairez Fencing" },
  description: "Professional, reliable, and affordable fencing services.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Chairez Fencing",
    description: "Professional, reliable, and affordable fencing services.",
    url: "https://www.chairezfencing.com",
    siteName: "Chairez Fencing",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }], // ← add this asset
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chairez Fencing",
    description: "Professional, reliable, and affordable fencing services.",
    images: ["/images/og-default.jpg"],
  },
  themeColor: "#7A0C0C",
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
