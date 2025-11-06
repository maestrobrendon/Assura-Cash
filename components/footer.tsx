"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, Linkedin, Twitter, Github } from "lucide-react"
import { useRef } from "react"

export default function Footer() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50])

  const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Updates"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "License", "Settings"],
    Social: [
      { icon: Mail, href: "#" },
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Github, href: "#" },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer ref={ref} className="w-full bg-gray-900 text-white py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          style={{ y: parallaxY }}
          className="grid md:grid-cols-5 gap-12 md:gap-8 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-800"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0052CC] to-[#003AA3] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">₣</span>
              </div>
              <span className="text-xl font-bold">fizens</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Manage your finances with confidence and ease.</p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks)
            .slice(0, 3)
            .map(([category, links]) => (
              <motion.div key={category} variants={itemVariants}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              {footerLinks.Social.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, color: "#0052CC" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm"
        >
          <p>© 2025 Fizens. All rights reserved.</p>
          <p>Made with ❤️ by Fizens Team</p>
        </motion.div>
      </div>
    </footer>
  )
}
