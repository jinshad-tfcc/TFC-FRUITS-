'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['9388128659', '8129632798'],
    action: 'Call Now'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: ['Quick responses', 'Easy ordering'],
    action: 'Chat Now'
  },
  {
    icon: MapPin,
    title: 'Location',
    details: ['Vengara, Gandidas Padi', 'Malappuram, Kerala'],
    action: 'Get Directions'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon-Sun: 7:00 AM - 8:00 PM', 'Always fresh delivery'],
    action: 'Order Now'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-max section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Contact Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to order fresh fruits? Get in touch with us through any of these convenient methods
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="card p-6 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <info.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{info.title}</h3>
              <div className="space-y-1 mb-4">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Quick Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-primary-500" size={20} />
                <div>
                  <p className="font-semibold">Primary: 9388128659</p>
                  <p className="font-semibold">Secondary: 8129632798</p>
                </div>
              </div>
              
              <div className="pt-4 space-y-3">
                <motion.a
                  href="tel:+919388128659"
                  className="btn-primary w-full text-center block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  📞 Call 9388128659
                </motion.a>
                <motion.a
                  href="tel:+918129632798"
                  className="btn-secondary w-full text-center block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  📞 Call 8129632798
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">WhatsApp Orders</h3>
            <p className="text-gray-600 mb-6">
              Order directly through WhatsApp for the fastest service. Send us your fruit list and delivery address!
            </p>
            
            <div className="space-y-3">
              <motion.a
                href="https://wa.me/919388128659"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={20} />
                WhatsApp 9388128659
              </motion.a>
              
              <motion.a
                href="https://wa.me/918129632798"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={20} />
                WhatsApp 8129632798
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center bg-white rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Order?</h3>
          <p className="text-gray-600 mb-6">
            Experience the freshest fruits delivered right to your doorstep. Contact us now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/919388128659"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order via WhatsApp
            </motion.a>
            <motion.a
              href="tel:+919388128659"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call to Order
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}