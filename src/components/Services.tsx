'use client'

import { motion } from 'framer-motion'
import { Truck, Gift, Building, Calendar } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Daily Home Delivery',
    description: 'Fresh fruits delivered to your doorstep every day with our reliable delivery service.',
    features: ['Same-day delivery', 'Temperature controlled', 'Contactless delivery option']
  },
  {
    icon: Gift,
    title: 'Customized Fruit Baskets',
    description: 'Beautiful, personalized fruit baskets perfect for gifting on special occasions.',
    features: ['Custom arrangements', 'Gift wrapping included', 'Personal message cards']
  },
  {
    icon: Building,
    title: 'Bulk Supply',
    description: 'Wholesale fruit supply for events, offices, restaurants, and retail stores.',
    features: ['Competitive pricing', 'Flexible quantities', 'Regular supply contracts']
  },
  {
    icon: Calendar,
    title: 'Seasonal Fruit Packs',
    description: 'Curated seasonal fruit collections featuring the best fruits of each season.',
    features: ['Seasonal varieties', 'Peak freshness', 'Subscription available']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive fruit services tailored to meet all your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1), duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
            Need a Custom Solution?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We're flexible and can create custom fruit packages tailored to your specific needs. 
            Contact us to discuss your requirements!
          </p>
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Custom Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}