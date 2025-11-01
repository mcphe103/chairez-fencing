"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  // Smooth the motion for a premium feel
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  return (
    <motion.div
      // This will be positioned by the Navbar (absolute bottom)
      className="h-[3px] w-full origin-left"
      style={{ scaleX, backgroundColor: "#7A0C0C" }} // brand burgundy
    />
  )
}
