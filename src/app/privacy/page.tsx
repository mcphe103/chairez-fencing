import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { BUSINESS, telHref, emailHref } from "@/lib/business"



export const metadata: Metadata = {
  title: "Privacy Policy | Chairez Fencing",
  description:
  "Learn how Chairez Fencing collects, uses, and protects your information.",
  openGraph: {
    title: "Privacy Policy | Chairez Fencing",
    description:
    "Learn how Chairez Fencing collects, uses, and protects your information.",
    type: "website",
    images: [{ url: "/images/og-privacy.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Chairez Fencing",
    description:
    "How we handle your data and keep it secure.",
    images: ["/images/og-privacy.jpg"],
  },
}

const burgundy = "#7A0C0C"

// JSON-LD
const PRIVACY_LD = {
  "@context": "https://schema.org",
  "@type": "PrivacyPolicy",
  name: "Chairez Fencing Privacy Policy",
  url: "https://www.chairezfencing.com/privacy", // ← update to your real domain
  publisher: {
    "@type": "Organization",
    name: "Chairez Fencing",
    url: "https://www.chairezfencing.com", // ← update
    logo: {
      "@type": "ImageObject",
      url: "https://www.chairezfencing.com/images/logo.png", // ← update
    },
  },
  inLanguage: "en-US",
}

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <Script
        id="ld-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRIVACY_LD) }}
      />

      {/* Header */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <p
            className="uppercase tracking-widest text-sm font-semibold"
            style={{ color: burgundy }}
          >
            Privacy Policy
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Your Privacy Matters
          </h1>
          <p className="text-slate-600 mt-5 max-w-3xl">
            This policy explains what data we collect, how we use it, and your
            choices. If you have questions, contact us anytime.
          </p>
          <p className="text-slate-500 mt-2 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Policy Body */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-slate-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold">1. Who we are</h2>
            <p className="mt-2">
              <strong>Chairez Fencing</strong> provides wood fencing, decks, and
              outdoor lighting services. Our website is{" "}
              <span className="break-all">https://www.chairezfencing.com</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. What we collect</h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                <strong>Contact form data</strong>: name, phone, email (optional),
                service interests, and your message.
              </li>
              <li>
                <strong>Basic analytics</strong> (if enabled): pages visited, device
                info, and approximate location (no precise identifiers).
              </li>
              <li>
                <strong>Cookies</strong> (if used): for improving site performance
                and remembering preferences.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. How we use your data</h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>To respond to quote requests and customer support.</li>
              <li>To schedule site visits and deliver services.</li>
              <li>To improve our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. Sharing & third parties</h2>
            <p className="mt-2">
              We don’t sell your data. We may share minimal info with service
              providers (e.g., email or hosting) strictly to operate our website
              and respond to your requests. These providers are required to
              protect your data and only use it for these purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">5. Data retention</h2>
            <p className="mt-2">
              We retain contact form submissions for as long as needed to
              provide quotes and services, then delete or archive them
              securely. Analytics data (if enabled) may be retained per the
              analytics provider’s default policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. Your choices & rights</h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                You can request a copy or deletion of your personal data.
              </li>
              <li>
                You can opt out of non-essential cookies (if used) through your
                browser settings.
              </li>
              <li>
                To make a request, contact us using the details below.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">7. Security</h2>
            <p className="mt-2">
              We use reasonable administrative and technical safeguards to
              protect your information. No method of transmission or storage is
              100% secure, but we work to keep your data safe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">8. Children’s privacy</h2>
            <p className="mt-2">
              Our services are intended for adults. We don’t knowingly collect
              personal data from children under 13. If you believe a child has
              provided us information, please contact us for removal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">9. Changes to this policy</h2>
            <p className="mt-2">
              We may update this policy from time to time. We’ll revise the
              “Last updated” date above when changes are made.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">10. Contact</h2>
            <p className="mt-2">
              Questions about this policy or your data? Reach us at:
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                <strong>Phone:</strong>{" "}
                <a href={telHref} className="text-[#7A0C0C] hover:underline">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={emailHref} className="text-[#7A0C0C] hover:underline">
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <strong>Mailing:</strong>{" Antioch, CA 94531-8312"}
                
              </li>
            </ul>
          </section>


          <div className="pt-4">
            <Link
              href="/"
              className="text-sm font-semibold text-[#7A0C0C] hover:underline"
            >
              ← Back to Home
            </Link>
          </div>

          <p className="text-xs text-slate-500">
            This page is provided for general information and is not legal
            advice. For specific compliance requirements, consult a qualified attorney.
          </p>
        </div>
      </section>
    </main>
    )
}
