'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <div className="relative container-max section-padding py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-shadow"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 30px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            TFC FRUITS
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Freshness Delivered Daily
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
              🍎 Premium Quality • 🚚 Fast Delivery • 🌱 Farm Fresh
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </header>
  )
}