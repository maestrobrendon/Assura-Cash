"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, TrendingUp, Shield } from "lucide-react"

export default function BenefitsSection() {
  const [activeTab, setActiveTab] = useState(0)

  const benefits = [
    {
      icon: Clock,
      title: "Time and Stress Reduction",
      tagline: "Save your time and reduce financial anxiety",
      description:
        "Automate tasks like budgeting, tracking, and saving, freeing up your time for more important things.",
      points: ["Stay on top of your budget.", "Automate your finances for less stress."],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Financial Growth",
      tagline: "Take control of your financial future",
      description:
        "Provide valuable insights into your spending habits, helping you identify areas where you can cut back and save more.",
      points: ["Reach your financial goals", "Make informed decisions"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Security and Privacy",
      tagline: "Experience the ultimate in financial security",
      description: "Protect your information from unauthorized access, focus on managing your money without worry.",
      points: ["Protect your data", "Peace of mind"],
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const activeSection = benefits[activeTab]
  const Icon = activeSection.icon

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full">
            <span className="text-sm font-semibold text-[#0052CC] uppercase tracking-wider">Benefits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
            Experience The
            <br />
            Future of Finance
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Tab List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/3 space-y-3 md:space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                whileHover={{ x: 4 }}
                className={`w-full text-left p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 ${
                  activeTab === index
                    ? "border-[#0052CC] bg-gradient-to-r from-blue-50 to-white"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeTab === index
                        ? `bg-gradient-to-br ${benefit.color} text-white`
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${activeTab === index ? "text-[#0052CC]" : "text-gray-900"}`}>
                      {benefit.title}
                    </h3>
                    <p className={`text-sm ${activeTab === index ? "text-blue-600" : "text-gray-500"}`}>
                      {benefit.tagline}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-2/3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-50 to-white p-10 md:p-12 rounded-3xl border border-gray-100"
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${activeSection.color} flex items-center justify-center mb-8`}
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{activeSection.title}</h3>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">{activeSection.description}</p>
                <div className="space-y-4">
                  {activeSection.points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-br ${activeSection.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-base md:text-lg text-gray-700 font-medium">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
