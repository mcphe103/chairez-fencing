import type { Metadata } from "next"
import Script from "next/script"
import Contact from "@/components/Contact"



export const metadata: Metadata = {
  title: "Contact | Chairez Fencing",
  description: "Request a free quote for wood fencing, decks, or outdoor lighting.",
  openGraph: {
    title: "Contact Chairez Fencing",
    description: "Request a free quote for wood fencing, decks, or outdoor lighting.",
    type: "website",
    images: [{ url: "/images/og-contact.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Chairez Fencing",
    description: "Get a free quote today.",
    images: ["/images/og-contact.jpg"],
  },
}

const CONTACT_PAGE_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Chairez Fencing",
  url: "https://www.chairezfencing.com/contact", // UPDATE to real domain
  about: {
    "@type": "LocalBusiness",
    name: "Chairez Fencing",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+1-555-123-4567", // UPDATE
    areaServed: "US-CA", // UPDATE if needed
    availableLanguage: ["English"],
  },
  potentialAction: {
    "@type": "ContactAction",
    target: "https://www.chairezfencing.com/contact", // UPDATE
    name: "Request a Free Quote",
  },
}

export default function ContactPage() {
  return (
    <main>
      {/* JSON-LD for ContactPage */}
      <Script
        id="ld-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_PAGE_LD) }}
      />
      <Contact />
    </main>
  )
}
