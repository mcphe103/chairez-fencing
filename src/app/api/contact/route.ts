import { NextResponse } from "next/server"
import { z } from "zod"
import { promises as fs } from "fs"
import path from "path"

export const runtime = "nodejs" // ensure Node environment for fs()

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  website: z.string().max(0).optional(),
})

type ContactEntry = {
  id: string
  name: string
  email: string
  message: string
  receivedAt: string
}

const DATA_DIR = path.join(process.cwd(), "data")
const DATA_PATH = path.join(DATA_DIR, "contacts.json")

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = Schema.safeParse(body)

    if (!parsed.success) {
      console.error("Validation failed:", parsed.error)
      return NextResponse.json({ error: "Invalid input" }, { status: 400 })
    }

    const { name, email, message, website } = parsed.data

    // honeypot
    if (website && website.length > 0) {
      console.warn("Honeypot triggered")
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    // ensure folder + file exist
    await fs.mkdir(DATA_DIR, { recursive: true })
    try { await fs.access(DATA_PATH) } catch { await fs.writeFile(DATA_PATH, "[]", "utf8") }

    // read existing contacts
    const file = await fs.readFile(DATA_PATH, "utf8")
    let arr: ContactEntry[] = []
    try { arr = JSON.parse(file) } catch { arr = [] }

    // create new entry
    const entry: ContactEntry = {
      id: crypto.randomUUID(),
      name,
      email,
      message,
      receivedAt: new Date().toISOString(),
    }

    arr.push(entry)

    // write back
    await fs.writeFile(DATA_PATH, JSON.stringify(arr, null, 2), "utf8")

    console.log("Contact saved:", entry)
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err: any) {
    console.error("❌ Contact API failed:", err)
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 })
  }
}
