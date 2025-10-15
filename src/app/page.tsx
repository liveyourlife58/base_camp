'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Zap, Heart, Star, Sparkles, Award, Truck, Lock, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/product-card';
import { MaintenanceTips } from '@/components/ui/maintenance-tips';
import { featuredProducts, categories } from '@/lib/data';

export default function Home() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom, #161716, #232c23, #161716)',
        minHeight: '100vh'
      }}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Full-size background image */}
        <div className="absolute inset-0">
        <Image
            src="/images/hero-tactical-gear.jpg"
            alt="Professional tactical gear and military equipment"
            fill
            className="object-cover"
          priority
        />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles className="h-6 w-6 text-od-tan-300" />
              <span className="text-od-tan-300 font-medium text-lg">Military-Specification Equipment</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              Mission-Ready
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block text-od-tan-300"
              >
                Tactical Gear
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto"
            >
              Military-specification equipment for law enforcement, military personnel, and tactical operators. 
              TCCC-compliant medical kits, MOLLE-compatible gear, and professional-grade protection systems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-od-tan-500 text-od-green-800 hover:bg-od-tan-600 text-lg px-8 py-4">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  View Catalog
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Tactical gear badges */}
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <div className="flex items-center justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-2 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-md rounded-lg px-4 py-2 border border-white/10"
            >
              <Shield className="h-5 w-5 text-od-tan-300" />
              <span className="text-sm text-white font-medium">Ballistic Protection</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center gap-2 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-md rounded-lg px-4 py-2 border border-white/10"
            >
              <Zap className="h-5 w-5 text-od-tan-300" />
              <span className="text-sm text-white font-medium">Tactical Equipment</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex items-center gap-2 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-md rounded-lg px-4 py-2 border border-white/10"
            >
              <Heart className="h-5 w-5 text-od-tan-300" />
              <span className="text-sm text-white font-medium">Medical Kits</span>
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-br from-od-tan-500/40 to-od-tan-600/30 rounded-full flex items-center justify-center border border-od-tan-400/20 backdrop-blur-sm"
        >
          <Award className="h-6 w-6 text-od-tan-300" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 left-20 w-10 h-10 bg-gradient-to-br from-od-green-500/40 to-od-green-600/30 rounded-full flex items-center justify-center border border-od-green-400/20 backdrop-blur-sm"
        >
          <Lock className="h-5 w-5 text-od-green-300" />
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Find exactly what you need for your next adventure or mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/category/${category.id}`}>
                  <div 
                    className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center group relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(22, 23, 22, 0.8), rgba(35, 44, 35, 0.7), rgba(22, 23, 22, 0.8))',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-4xl mb-4"
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-od-tan-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                      {category.description}
                    </p>
                    <div className="text-sm text-od-tan-300 font-medium group-hover:text-od-tan-200 transition-colors">
                      {category.productCount} Products
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our most popular and highly-rated gear, trusted by professionals worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button size="lg" variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Base Camp?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Trusted by military, law enforcement, and tactical professionals worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Military Specification",
                description: "NIJ-rated protection, MIL-STD compliant construction, and TCCC-approved medical supplies"
              },
              {
                icon: Shield,
                title: "Field Tested",
                description: "Combat-proven by military and law enforcement units in real-world operations"
              },
              {
                icon: Truck,
                title: "Rapid Deployment",
                description: "Priority shipping for emergency orders and mission-critical equipment"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center group rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(22, 23, 22, 0.8), rgba(35, 44, 35, 0.7), rgba(22, 23, 22, 0.8))',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-gradient-to-br from-od-tan-500 to-od-tan-600 text-od-green-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-od-green-500 group-hover:to-od-green-600 group-hover:text-od-tan-300 transition-all duration-300 shadow-lg"
                >
                  <feature.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-od-tan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charity Partnership Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <HeartHandshake className="h-8 w-8 text-od-tan-300" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Supporting Those Who Served
              </h2>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Every purchase helps support wounded veterans and their families through our partnership with Wounded Warrior Project
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 lg:p-12 shadow-2xl relative z-10"
            style={{
              background: 'linear-gradient(135deg, rgba(22, 23, 22, 0.8), rgba(35, 44, 35, 0.7), rgba(22, 23, 22, 0.8))',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-od-tan-500 text-od-green-800 px-4 py-2 rounded-full font-bold text-lg">
                    5%
                  </div>
                  <span className="text-white text-xl font-semibold">of every sale donated</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Wounded Warrior Project Partnership
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We&apos;re proud to donate 5% of all sales to Wounded Warrior Project, supporting veterans with physical and mental injuries. Your purchase directly helps provide:
                </p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-od-tan-300" />
                    Mental health and wellness programs
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-od-tan-300" />
                    Physical rehabilitation services
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-od-tan-300" />
                    Career transition support
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-od-tan-300" />
                    Family support programs
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-od-tan-500 text-od-green-800 hover:bg-od-tan-600">
                    Learn More About WWP
                  </Button>
                  <Button variant="outline" className="border-od-tan-500 text-od-tan-300 hover:bg-od-tan-500/10">
                    View Our Impact
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-od-green-900 to-od-green-800 rounded-xl p-6 border border-od-green-600/50">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-od-tan-300 mb-2">$2,847</div>
                    <div className="text-white font-medium mb-4">Donated This Month</div>
                    <div className="w-full bg-od-green-800 rounded-full h-3 mb-4">
                      <div className="bg-gradient-to-r from-od-tan-500 to-od-tan-600 h-3 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                    <div className="text-sm text-gray-300">
                      Goal: $4,200 this month
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-od-tan-500 text-od-green-800 px-3 py-1 rounded-full text-sm font-bold">
                  Live Impact
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-400">
              *Base Camp is proud to support Wounded Warrior Project. Donations are made monthly based on verified sales data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Maintenance Tips Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Gear Maintenance & Care
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Proper maintenance ensures your tactical gear performs when you need it most
            </p>
          </motion.div>
          
          <MaintenanceTips />
        </div>
      </section>
    </div>
  );
}