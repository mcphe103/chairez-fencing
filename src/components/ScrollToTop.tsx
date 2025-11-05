"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

const burgundy = "#7A0C0C"
const burgundyHover = "#5C0909"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const search = useSearchParams()

  // 1) On first load, start at the very top if there's no hash.
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
    // On unmount, restore default behavior
    return () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto"
      }
    }
  }, [])

  // 2) On route / query changes, reset to top if there's no hash.
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }
  }, [pathname, search])

  // 3) Show the floating button after scrolling down a bit.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scrollToTop"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg text-white transition-all"
          style={{ backgroundColor: burgundy }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = burgundyHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = burgundy)}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
