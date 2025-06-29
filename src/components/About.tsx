'use client'

import { motion } from 'framer-motion'
import { MapPin, Award, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Local Presence',
    description: 'Based in Vengara, Gandidas Padi, Malappuram'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Carefully selected farm-fresh fruits'
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Quick delivery and responsive service'
  },
  {
    icon: Shield,
    title: 'Clean Packaging',
    description: 'Hygienic and eco-friendly packaging'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">TFC FRUITS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to serving premium fruits with fast service, clean packaging, 
            and consistent quality. Our passion is to keep your health and taste buds satisfied!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card p-8 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To provide the freshest, highest quality fruits to our community while supporting 
              local farmers and promoting healthy living. We believe that everyone deserves access 
              to nutritious, delicious fruits that nourish both body and soul.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}