'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const fruits = [
  { name: 'Apple', emoji: '🍎', color: 'from-red-400 to-red-600' },
  { name: 'Banana', emoji: '🍌', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Mango', emoji: '🥭', color: 'from-orange-400 to-orange-600' },
  { name: 'Grapes', emoji: '🍇', color: 'from-purple-400 to-purple-600' },
  { name: 'Pineapple', emoji: '🍍', color: 'from-yellow-400 to-orange-500' },
  { name: 'Papaya', emoji: '🧡', color: 'from-orange-400 to-red-500' },
  { name: 'Orange', emoji: '🍊', color: 'from-orange-400 to-orange-600' },
  { name: 'Watermelon', emoji: '🍉', color: 'from-green-400 to-red-500' },
  { name: 'Guava', emoji: '🟢', color: 'from-green-400 to-green-600' },
  { name: 'Pomegranate', emoji: '🔴', color: 'from-red-500 to-pink-600' },
  { name: 'Strawberry', emoji: '🍓', color: 'from-red-400 to-pink-500' },
  { name: 'Dragon Fruit', emoji: '🐉', color: 'from-pink-400 to-purple-500' },
  { name: 'Lychee', emoji: '🔴', color: 'from-pink-400 to-red-500' },
  { name: 'Kiwi', emoji: '🥝', color: 'from-green-400 to-brown-500' },
  { name: 'Chikoo', emoji: '🤎', color: 'from-yellow-600 to-brown-500' },
  { name: 'Pear', emoji: '🍐', color: 'from-green-400 to-yellow-500' },
  { name: 'Plum', emoji: '🟣', color: 'from-purple-400 to-purple-600' },
  { name: 'Fig', emoji: '🟤', color: 'from-purple-500 to-brown-500' },
  { name: 'Muskmelon', emoji: '🍈', color: 'from-orange-300 to-green-400' },
  { name: 'Blueberry', emoji: '🫐', color: 'from-blue-400 to-purple-500' },
]

export default function Fruits() {
  return (
    <section id="fruits" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container-max section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-primary-500" size={24} />
            <span className="text-primary-600 font-semibold">Fresh Selection</span>
            <Sparkles className="text-primary-500" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Fruits Available</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide variety of fresh, premium quality fruits sourced directly from trusted farms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {fruits.map((fruit, index) => (
            <motion.div
              key={index}
              className="card p-6 text-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              >
                {fruit.emoji}
              </motion.div>
              <h3 className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                {fruit.name}
              </h3>
              <motion.div
                className={`h-1 bg-gradient-to-r ${fruit.color} rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
          
          <motion.div
            className="card p-6 text-center group cursor-pointer bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: fruits.length * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-3">✨</div>
            <h3 className="font-bold">...and more!</h3>
            <p className="text-sm opacity-90 mt-2">Ask us about seasonal specials</p>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Don't see your favorite fruit? Contact us for special requests!
          </p>
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}