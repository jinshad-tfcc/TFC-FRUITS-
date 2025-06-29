'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 opacity-50"></div>
      <div className="relative container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-primary-500" size={24} />
              <span className="text-primary-600 font-semibold">Premium Quality</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Welcome to{' '}
              <span className="gradient-text">TFC FRUITS</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your trusted source for high-quality, farm-fresh fruits. We offer a wide selection of 
              local and exotic varieties — always fresh, always delicious! Experience the difference 
              of premium quality fruits delivered right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.a>
              <motion.a
                href="#fruits"
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Fruits
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 20, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-48 h-48 bg-gradient-to-br from-secondary-200 to-primary-200 rounded-full opacity-20"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 15, repeat: Infinity }}
              />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-4">
                  {['🍎', '🍌', '🥭', '🍇', '🍍', '🥝', '🍓', '🍊', '🥥'].map((fruit, index) => (
                    <motion.div
                      key={index}
                      className="text-4xl text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      viewport={{ once: true }}
                    >
                      {fruit}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="mx-auto text-primary-500" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}