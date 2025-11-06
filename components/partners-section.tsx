"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function PartnersSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100])

  const partners = [
    { name: "Logoipsum", id: 1 },
    { name: "Logo", id: 2 },
    { name: "Logoipsum", id: 3 },
    { name: "Logoipsum", id: 4 },
    { name: "IPSUM", id: 5 },
    { name: "LIPIUM", id: 6 },
  ]

  return (
    <section ref={ref} className="relative w-full bg-white pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ y: parallaxY }}
          className="bg-gradient-to-r from-[#0052CC] to-[#003AA3] rounded-3xl md:rounded-4xl p-12 md:p-20 text-center"
        >
          <div className="mb-2 text-sm font-semibold text-blue-200 uppercase tracking-wider">FINANCE MANAGEMENT</div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-balance">
            Partnering with top tier brands to revolutionize financial services.
          </h2>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8 mt-12">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 flex items-center justify-center"
              >
                <span className="text-white/80 font-semibold text-sm md:text-base">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
