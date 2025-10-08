'use client'
import { useState } from "react"
import Link from "next/link"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        className="p-2 border rounded"
        onClick={() => setOpen(v => !v)}
      >
        ☰
      </button>
      {open && (
        <div className="mt-2 flex flex-col gap-2 border rounded p-3 bg-white">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </div>
      )}
    </div>
  )
}
