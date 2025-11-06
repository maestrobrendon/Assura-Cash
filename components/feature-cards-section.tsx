"use client"

import { motion } from "framer-motion"
import { CreditCard, Bell, BarChart3 } from "lucide-react"

export default function FeatureCardsSection() {
  const cards = [
    {
      icon: CreditCard,
      title: "Smart Expense Tracking",
      description: "Automatically categorize and track every transaction",
      gradient: "from-pink-50 to-white",
      accent: "from-pink-500 to-red-500",
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Get notified when you approach budget limits",
      gradient: "from-purple-50 to-white",
      accent: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Financial Insights",
      description: "Understand your spending patterns with AI-powered analysis",
      gradient: "from-blue-50 to-white",
      accent: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
            Powerful tools, built for everyone
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`bg-gradient-to-br ${card.gradient} p-10 md:p-12 rounded-2xl md:rounded-3xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${card.accent} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{card.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
