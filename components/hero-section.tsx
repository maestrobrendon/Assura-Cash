"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0052CC] via-[#0052CC] to-[#003AA3] min-h-screen pt-20 md:pt-32">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 w-full h-full p-8 md:p-16">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-white rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: i * 0.02, duration: 0.8 }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex flex-col items-center justify-center py-20 md:py-32">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-[#0052CC] font-bold text-lg">₣</span>
            </div>
            <span className="text-white text-2xl md:text-3xl font-bold">fizens</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-4xl mb-8 md:mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 text-balance">
            Start Managing
            <br />
            Your Finance
            <br />
            With Our Tool
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-blue-100 text-center max-w-2xl mb-10 md:mb-16"
        >
          Simplify your financial life. Our intuitive app makes managing your money effortless.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 mb-20 md:mb-32"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,82,204,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 md:py-4 bg-white text-[#0052CC] rounded-full font-semibold text-base md:text-lg hover:shadow-lg transition-all duration-300"
          >
            Get Started Free
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 md:py-4 border-2 border-white text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row gap-12 md:gap-24 text-center text-white"
        >
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">10M+</div>
            <p className="text-blue-200 text-sm md:text-base">Trusted by millions of users</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">140+</div>
            <p className="text-blue-200 text-sm md:text-base">Countries worldwide</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">4.9★</div>
            <p className="text-blue-200 text-sm md:text-base">App store rating</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-white rounded-t-3xl md:rounded-t-5xl"></div>
    </section>
  )
}
