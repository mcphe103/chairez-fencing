import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import Script from "next/script" 
import RouteAnalytics from "@/components/RouteAnalytics";


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
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID // ← read from env

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        {/* ✅ Google Analytics (only loads if GA_ID exists) */}
        {GA_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
            {/* tiny sanity check you can see in DevTools */}
            <Script id="ga4-debug" strategy="afterInteractive">
              {`console.log('GA4 initialized:', '${GA_ID}')`}
            </Script>
          </>
        )}

        <Navbar />
        <RouteAnalytics />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
