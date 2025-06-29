'use client'

import { motion } from 'framer-motion'
import { Heart, Phone, MessageCircle, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">TFC FRUITS</h3>
            <p className="text-white/90 mb-4">
              Your trusted partner for fresh, premium quality fruits. 
              Delivering health and happiness to your doorstep.
            </p>
            <div className="flex items-center gap-2 text-white/80">
              <span>Made with</span>
              <Heart className="text-red-300" size={16} fill="currentColor" />
              <span>for fresh fruit lovers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <div>
                  <p>9388128659</p>
                  <p>8129632798</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={18} />
                <span>WhatsApp Orders Available</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Vengara, Gandidas Padi, Malappuram</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Our Promise</h4>
            <ul className="space-y-2 text-white/90">
              <li>✓ Farm Fresh Quality</li>
              <li>✓ Daily Delivery Service</li>
              <li>✓ Competitive Pricing</li>
              <li>✓ Customer Satisfaction</li>
              <li>✓ Hygienic Packaging</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/20 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80">
            &copy; 2025 TFC FRUITS. All rights reserved. | Freshness Delivered Daily
          </p>
        </motion.div>
      </div>
    </footer>
  )
}