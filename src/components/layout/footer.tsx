'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'Camping Gear', href: '/category/camping' },
    { name: 'Survival Equipment', href: '/category/survival' },
    { name: 'Combat Gear', href: '/category/combat' },
    { name: 'Self Defense', href: '/category/self-defense' },
    { name: 'Medical Kits', href: '/category/medical' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'FAQ', href: '/faq' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-od-green-800 via-od-green-900 to-od-green-800 text-od-green-50 border-t border-od-green-600/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-od-tan-500 rounded-md flex items-center justify-center">
                  <span className="text-od-green-700 font-bold text-lg">B</span>
                </div>
                <span className="text-xl font-bold">Base Camp</span>
              </div>
              <p className="text-od-green-200 mb-6">
                Your trusted source for premium outdoor, survival, and tactical equipment. 
                Built for professionals, designed for everyone.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>123 Tactical Way, Outdoor City, OC 12345</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>info@basecamp.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Shop Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-od-green-200 hover:text-od-tan-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-od-green-200 hover:text-od-tan-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-od-green-200 hover:text-od-tan-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-od-green-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="p-2 bg-od-green-700 rounded-full hover:bg-od-green-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="p-2 bg-od-green-700 rounded-full hover:bg-od-green-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="p-2 bg-od-green-700 rounded-full hover:bg-od-green-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-od-green-700 border border-od-green-600 rounded-md text-od-green-50 placeholder-od-green-300 focus:outline-none focus:ring-2 focus:ring-od-tan-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-od-tan-500 text-od-green-800 rounded-md hover:bg-od-tan-600 transition-colors font-medium"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-od-green-700 text-center text-od-green-300"
        >
          <p>&copy; 2024 Base Camp. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
