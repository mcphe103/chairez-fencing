"use client"

import { motion, useAnimation, Variants } from "framer-motion"
import { useEffect, useRef } from "react"

type Props = {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
  y?: number // how far to slide up
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  y = 20,
}: Props) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible")
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [controls])

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay },
    },
  }

  const Comp = as as any
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      <Comp>{children}</Comp>
    </motion.div>
  )
}
