import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_TO
  const from = process.env.CONTACT_FROM

  console.log("Testing key:", process.env.RESEND_API_KEY?.slice(0, 10) + "...")

  if (!to || !from)
    return NextResponse.json({ error: "Missing CONTACT_TO or CONTACT_FROM" }, { status: 500 })

  try {
    const result = await resend.emails.send({
      from,
      to,
      subject: "Resend Self-Test",
      html: "<p>If you get this, Resend works ✅</p>",
    })
    console.log("Self-test result:", result)
    return NextResponse.json(result)
  } catch (e: any) {
    console.error("Self-test error:", e)
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
