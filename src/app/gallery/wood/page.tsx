import Link from "next/link";
import { BUSINESS, telFromE164 } from "@/lib/business";

export default function WoodGalleryPage() {
  const primaryPhone = BUSINESS.phones?.[0];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl rounded-2xl bg-white/95 p-6 shadow-sm">
          <Link href="/gallery" className="text-sm text-slate-600 hover:underline">
            ← Back to Gallery
          </Link>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">Wood Fencing</h1>
          <p className="mt-3 text-slate-700">
            Project photos coming soon. In the meantime, request a quote and we’ll help you plan the right build.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#7A0C0C] px-5 py-3 text-white font-semibold hover:bg-[#5C0909] transition-colors"
          >
            Request a Quote
          </Link>

          {primaryPhone?.e164 && (
            <a
              href={telFromE164(primaryPhone.e164)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Call Now
            </a>
          )}
        </div>
      </div>

      {/* Empty-state card (so it doesn’t feel bare) */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">More photos on the way</h2>
        <p className="mt-2 text-slate-700">
          We’re organizing project albums for this category. If you’d like to see recent examples, contact us and we’ll share them.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#7A0C0C] px-5 py-3 text-white font-semibold hover:bg-[#5C0909] transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}
