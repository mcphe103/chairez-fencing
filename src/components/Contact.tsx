"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BUSINESS, telHref } from "@/lib/business"

<input type="text" name="company" className="hidden" tabIndex={-1} value="" readOnly />


const burgundy = "#7A0C0C"
const burgundyHover = "#5C0909"

type FormState = {
  name: string
  phone: string
  email: string
  service: string
  message: string
  agree: boolean
}

const INITIAL: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "Wood Fencing",
  message: "",
  agree: false,
}

export default function Contact() {
  const [data, setData] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!data.name.trim()) e.name = "Please enter your name."
    // simple phone check: 10+ digits
      const digits = data.phone.replace(/\D/g, "")
    if (digits.length < 10) e.phone = "Please enter a valid phone number."
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Email looks invalid."
        if (!data.message.trim()) e.message = "Please tell us about your project."
          if (!data.agree) e.agree = "Please accept to be contacted."
            setErrors(e)
          return Object.keys(e).length === 0
        }

        const [serverError, setServerError] = useState<string | null>(null)


        const onSubmit = async (ev: React.FormEvent) => {
          ev.preventDefault()
          setServerError(null)
          if (!validate()) return
            setSending(true)

          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: data.name,
                phone: data.phone,
                email: data.email,
                service: data.service,
                message: data.message,
        company: "", // honeypot
      }),
            })

            if (!res.ok) {
              const payload = await res.json().catch(() => ({} as any))
      // map server field errors (if present) to your UI
              const fe = (payload?.issues?.fieldErrors ?? {}) as Record<string, string[]>
              const mapped: Record<string, string> = {}
              Object.entries(fe).forEach(([k, arr]) => {
                if (arr && arr.length) mapped[k] = arr[0]
              })
              if (Object.keys(mapped).length) setErrors(mapped)
                setServerError(payload?.error || "Could not send. Please try again.")
              setSending(false)
              return
            }

            setSending(false)
            setSent(true)

            // ✅ tell GTM/GA4 a lead happened
            if (typeof window !== "undefined") {
  // make sure dataLayer exists
              ;(window as any).dataLayer = (window as any).dataLayer || []
              ;(window as any).dataLayer.push({
                event: "form_submission",
                form_name: "contact_form",
    // optional extra details you may want later:
    // service: data.service,
              })
            }
            
            setData(INITIAL)
          } catch {
            setServerError("Network error. Please try again.")
            setSending(false)
          }
        }



        return (
          <section id="contact" className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <p className="text-slate-700 mt-3 font-medium">
                  📞 Call us today:{" "}
                  <a href={telHref} className="text-[#7A0C0C] hover:underline">
                    {BUSINESS.phoneDisplay}
                  </a>
                </p>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">Tell Us About Your Project</h2>
                <p className="text-slate-600 mt-4">
                  We proudly serve homeowners and businesses throughout Antioch, Pittsburg, Brentwood, Oakley, Concord, Clayton, Discovery Bay, Bay Point, Knightsen, and Walnut Creek—with availability across nearby East Bay and Delta communities.
                </p>
              </motion.div>

              {sent && (
                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                  Thanks! Your request was received. We’ll reach out shortly.
                </div>
                )}

              {serverError && (
                <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
                  {serverError}
                </div>
                )}


              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Honeypot (bots will fill this, humans won't) */}
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  tabIndex={-1}
                  className="hidden"
                  value=""
                  readOnly
                />

                <div>
                  <label className="block text-sm font-medium">Name *</label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium">Phone *</label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium">Email (optional)</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium">Service</label>
                  <select
                    value={data.service}
                    onChange={(e) => setData({ ...data, service: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  >
                    <option>Wood Fencing</option>
                    <option>Decks</option>
                    <option>Outdoor Lighting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium">Project details *</label>
                  <textarea
                    value={data.message}
                    onChange={(e) => setData({ ...data, message: e.target.value })}
                    className="mt-1 w-full min-h-[140px] rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                    placeholder="Tell us about length/height, location, timeline, etc."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div className="md:col-span-2 flex items-start gap-3">
                  <input
                    id="agree"
                    type="checkbox"
                    checked={data.agree}
                    onChange={(e) => setData({ ...data, agree: e.target.checked })}
                    className="mt-1 h-5 w-5"
                  />
                  <label htmlFor="agree" className="text-sm">
                    I agree to be contacted about my quote request.
                  </label>
                </div>
                {errors.agree && <p className="md:col-span-2 -mt-4 text-sm text-red-600">{errors.agree}</p>}

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="rounded-lg px-5 py-3 text-white font-semibold disabled:opacity-70"
                    style={{ backgroundColor: burgundy }}
                    onMouseEnter={(e) => ((e.currentTarget.style.backgroundColor = burgundyHover))}
                    onMouseLeave={(e) => ((e.currentTarget.style.backgroundColor = burgundy))}
                  >
                    {sending ? "Sending..." : "Request Quote"}
                  </button>
                </div>
              </form>
            </div>
          </section>
          )
}
