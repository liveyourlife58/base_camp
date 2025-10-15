'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Heart, ShoppingCart, Eye, Plus, Info } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Button } from './button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-gradient-to-br from-od-green-800 via-od-green-700 to-od-green-800 border border-od-green-600/50 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm hover:from-od-green-700 hover:via-od-green-600 hover:to-od-green-700"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {product.isNew && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-od-green-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg"
              >
                New
              </motion.span>
            )}
            {product.isOnSale && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg"
              >
                Sale
              </motion.span>
            )}
            {product.isFeatured && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-od-tan-500 text-od-green-800 text-xs px-3 py-1 rounded-full font-medium shadow-lg"
              >
                Featured
              </motion.span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
            >
              <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
            >
              <Eye className="h-4 w-4 text-gray-600 hover:text-blue-500 transition-colors" />
            </motion.button>
          </div>

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-md font-medium">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        {/* Category */}
        <div className="text-xs text-od-tan-300 uppercase tracking-wide font-medium mb-1">
          {product.category}
        </div>

        {/* Product Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-white group-hover:text-od-tan-300 transition-colors mb-2 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-500'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-300">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-od-tan-300">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Quick Specifications */}
        {product.specifications && (
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <Info className="h-3 w-3 text-od-tan-300" />
              <span className="text-xs text-od-tan-300 font-medium">Key Specs</span>
            </div>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                <div key={key} className="text-gray-400">
                  <span className="font-medium">{key}:</span> {value}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            className="w-full group/btn bg-od-tan-500 hover:bg-od-tan-400 text-od-green-800 font-medium"
            disabled={!product.inStock}
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic here
            }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: product.inStock ? 0 : 0 }}
              whileHover={{ rotate: product.inStock ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            </motion.div>
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            {product.inStock && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-2"
              >
                <Plus className="h-4 w-4" />
              </motion.div>
            )}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
