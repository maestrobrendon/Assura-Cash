"use client"

import { motion } from "framer-motion"
import { Zap, TrendingUp, Lock, DollarSign, Target, FileText } from "lucide-react"

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const features = [
    {
      icon: DollarSign,
      title: "Expense & Income Tracking",
      description: "Record and categorize expense & income automatically or manually.",
    },
    {
      icon: Target,
      title: "Smart Savings Goals",
      description: "Set specific savings goals and track progress towards them.",
    },
    {
      icon: TrendingUp,
      title: "Financial Analytics",
      description: "Generate reports and visualizations to analyze spending habits.",
    },
    {
      icon: Zap,
      title: "Budgeting",
      description: "Track budgets for different categories.",
    },
    {
      icon: Lock,
      title: "Debt Management",
      description: "Track debt balances, interest rates, and create plans.",
    },
    {
      icon: FileText,
      title: "Investment Tracking",
      description: "Track investments, including stocks, bonds, and funds.",
    },
  ]

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 md:mb-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-sm font-semibold text-[#0052CC] uppercase tracking-wider">Key Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
              Explore Our
              <br />
              Standout Features
            </h2>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 md:gap-10"
          >
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#0052CC] to-[#003AA3] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* More Features Grid */}
          <div className="mt-16 md:mt-24">
            <motion.h3
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center"
            >
              ...and more additional features
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-4 gap-6 md:gap-8"
            >
              {features.slice(3).map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 md:p-8 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#0052CC]" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{feature.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-20 md:mt-32"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 md:py-5 bg-gradient-to-r from-[#0052CC] to-[#003AA3] text-white rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get the template
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
