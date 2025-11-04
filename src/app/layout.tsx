import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import Script from "next/script" 
import { Suspense } from "react";           
import RouteAnalytics from "@/components/RouteAnalytics";
import GAProbe from "@/components/GAProbe";


export const viewport = {
  themeColor: "#7A0C0C",
};


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
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID; // add this env var in Vercel later


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className="antialiased bg-slate-50 text-slate-900">

      {/* Google Tag Manager */}
      {GTM_ID && (
        <>
        <Script id="gtm" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>

    {/* noscript fallback for very old/JS-disabled browsers */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          </>
          )}


      <Navbar />
      <GAProbe />
      <RouteAnalytics />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </body>
    </html>
    )
}
