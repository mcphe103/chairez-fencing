import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

// ---------- ENV ----------
const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_TO = process.env.CONTACT_TO;
const CONTACT_FROM = process.env.CONTACT_FROM;

// ---------- VALIDATION ----------
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z
    .string()
    .transform((s) => s.replace(/\D/g, ""))
    .refine((digits) => digits.length >= 10, "Please enter a valid phone number."),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().optional(),
  message: z.string().trim().min(10, "Please tell us more about your project."),
  company: z.string().max(0).optional(), // honeypot
});

// ---------- RATE LIMIT ----------
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; ts: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return true;
  }
  if (rec.count >= MAX_PER_WINDOW) return false;
  rec.count++;
  return true;
}

function getIP(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  return fwd ? fwd.split(",")[0].trim() : "local";
}

// ---------- ROUTE ----------
export async function POST(req: Request) {
  try {
    const ip = getIP(req);
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const raw = await req.json();
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      if (process.env.NODE_ENV !== "production") {
        console.log("[contact] Validation issues:", parsed.error.flatten().fieldErrors);
      }
      return NextResponse.json(
        { error: "Please check the form and try again." },
        { status: 400 }
      );
    }

    const { name, phone, email, service, message, company } = parsed.data;

    // Honeypot
    if (company && company.length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (!CONTACT_TO || !CONTACT_FROM) {
      console.error("[contact] Missing CONTACT_TO or CONTACT_FROM");
      return NextResponse.json(
        {
          error:
            "Message service is temporarily unavailable. Please call us directly.",
        },
        { status: 500 }
      );
    }

    const subject = `New Quote Request — ${name}${service ? ` (${service})` : ""}`;

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6;color:#111">
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Phone:</strong> ${esc(phone)}</p>
        ${email ? `<p><strong>Email:</strong> ${esc(email)}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${esc(service)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${esc(message)}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      html,
      replyTo: email?.trim() || undefined,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        {
          error:
            "We couldn’t send your message right now. Please try again shortly or call us.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong on our end. Please try again later or contact us by phone.",
      },
      { status: 500 }
    );
  }
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
