"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function CTASection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

  return (
    <section ref={ref} className="w-full bg-gradient-to-b from-gray-50 to-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ y: parallaxY, scale }}
          className="bg-gradient-to-r from-[#0052CC] via-[#0052CC] to-[#003AA3] rounded-3xl md:rounded-4xl p-12 md:p-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to transform your finances?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join millions of users who are taking control of their financial future with Fizens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 md:py-5 bg-white text-[#0052CC] rounded-full font-semibold text-base md:text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started Free
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 md:py-5 border-2 border-white text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
