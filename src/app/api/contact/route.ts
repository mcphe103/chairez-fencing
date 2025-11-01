import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)
console.log("CONTACT_TO:", process.env.CONTACT_TO)
console.log("CONTACT_FROM:", process.env.CONTACT_FROM)
console.log("[contact] route module loaded")



// Force Node runtime (needed for some libs)
export const runtime = "nodejs"

// ---------- ENV ----------
const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_TO = process.env.CONTACT_TO
const CONTACT_FROM = process.env.CONTACT_FROM // must be a verified sender in Resend

// ---------- VALIDATION ----------
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z
    .string()
    .transform((s) => s.replace(/\D/g, "")) // keep digits only
    .refine((digits) => digits.length >= 10, "Please enter a valid phone number."),
  email: z.string().email("Email looks invalid.").optional().or(z.literal("")),
  service: z.string().optional(),
  message: z.string().trim().min(10, "Please tell us more about your project."),
  company: z.string().max(0).optional(), // honeypot must be empty
})

// ---------- SIMPLE RATE LIMIT (in-memory) ----------
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, { count: number; ts: number }>()

function rateLimit(ip: string) {
  const now = Date.now()
  const rec = hits.get(ip)
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now })
    return true
  }
  if (rec.count >= MAX_PER_WINDOW) return false
  rec.count++
  return true
}

function getIP(req: Request) {
  const fwd = req.headers.get("x-forwarded-for")
  return fwd ? fwd.split(",")[0].trim() : "local"
}

// ---------- ROUTE ----------
export async function POST(req: Request) {
  console.log("[contact] POST hit")
  try {
    const ip = getIP(req)
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again soon." }, { status: 429 })
    }

    const raw = await req.json()
    const parsed = schema.safeParse(raw)
    if (!parsed.success) {
        console.error("Validation issues:", parsed.error.flatten().fieldErrors)
      return NextResponse.json(
        { error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 }
      )
    }


    const { name, phone, email, service, message, company } = parsed.data

    // Honeypot triggered -> pretend success
    if (company && company.length > 0) {
      return NextResponse.json({ ok: true })
    }

    if (!CONTACT_TO || !CONTACT_FROM) {
      return NextResponse.json(
        { error: "Server not configured (CONTACT_TO / CONTACT_FROM missing)" },
        { status: 500 }
      )
    }

    const subject = `New Quote Request — ${name}${service ? ` (${service})` : ""}`

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6;color:#111">
        <h2 style="margin:0 0 12px">New Quote Request</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Phone:</strong> ${esc(phone)}</p>
        ${email ? `<p><strong>Email:</strong> ${esc(email)}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${esc(service)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${esc(message)}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid #eee" />
        <p style="font-size:12px;color:#666">IP: ${esc(ip)}</p>
      </div>
    `

    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      html,
      reply_to: email && email.length ? email : undefined,
    })

    if (error) {
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 })
  }
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
