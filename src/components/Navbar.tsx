"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import ScrollProgress from "@/components/ScrollProgress"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detect scroll position for background transition
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header
      className={`sticky top-0 z-50 relative text-white/90 shadow-md transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm border-b border-slate-800" : "bg-transparent"
      }`}
    >

      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side: Logo */}
        <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="Chairez Fencing logo"
          width={64}
          height={64}
          className="object-contain bg-white/95 rounded-md p-1"
          priority
        />

        <span className="font-semibold text-lg">Chairez Fencing</span>
      </Link>

        {/* Desktop links */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-[#7A0C0C] transition-colors">
        Home
      </Link>
      <Link href="/#services" className="hover:text-[#7A0C0C] transition-colors">
      Services
    </Link>
    <Link href="/gallery" className="hover:text-[#7A0C0C] transition-colors">
    Gallery
  </Link>
  <Link href="/about" className="hover:text-[#7A0C0C] transition-colors">
  About
</Link>
<Link href="/contact" className="hover:text-[#7A0C0C] transition-colors">
Contact
</Link>
</div>

        {/* Mobile hamburger */}
<button
  type="button"
  className="md:hidden focus:outline-none"
  onClick={toggleMenu}
  aria-label="Toggle menu"
>
  <div className="w-6 h-[2px] bg-white mb-[5px]" />
  <div className="w-6 h-[2px] bg-white mb-[5px]" />
  <div className="w-6 h-[2px] bg-white" />
</button>
</nav>

      {/* Mobile menu dropdown */}
{menuOpen && (
  <div className="md:hidden bg-black/95 text-white px-6 py-4 border-t border-slate-700">
    <ul className="flex flex-col gap-3">
      <li>
        <Link
          href="/"
          className="block hover:text-[#7A0C0C] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/#services"
          className="block hover:text-[#7A0C0C] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/gallery"
          className="block hover:text-[#7A0C0C] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="block hover:text-[#7A0C0C] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="block hover:text-[#7A0C0C] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
  )}

      {/* Scroll progress bar (bottom of navbar) */}
<div className="absolute bottom-0 left-0 right-0">
  <ScrollProgress />
</div>
</header>
)
}
