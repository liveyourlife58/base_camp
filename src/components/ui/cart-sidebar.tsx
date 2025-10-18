'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { Button } from './button';
import Link from 'next/link';
import Image from 'next/image';

export function CartSidebar() {
  const { 
    cart, 
    isOpen, 
    setIsOpen, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    cartTotal, 
    itemCount 
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-r from-od-green-800 via-od-green-700 to-od-green-800 border-l border-od-green-600/50 shadow-2xl z-50 flex flex-col backdrop-blur-md"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-od-green-600/50">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-6 w-6 text-od-tan-300" />
                <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
                {itemCount > 0 && (
                  <span className="bg-od-tan-500 text-od-green-800 text-sm px-2 py-1 rounded-full font-bold">
                    {itemCount}
                  </span>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="h-16 w-16 text-gray-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Your cart is empty</h3>
                  <p className="text-gray-400 mb-6">Add some tactical gear to get started!</p>
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="bg-od-tan-500 text-od-green-800 hover:bg-od-tan-600"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gradient-to-br from-od-green-900 via-od-green-800 to-od-green-900 border border-od-green-600/50 rounded-lg p-4"
                    >
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-od-green-800 rounded-lg flex-shrink-0 overflow-hidden relative">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-od-tan-300 text-xs">No Image</span>
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-od-tan-300 font-bold text-sm">
                            ${item.price.toFixed(2)}
                          </p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-6 w-6 text-gray-400 hover:text-white"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-white text-sm font-medium min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-6 w-6 text-gray-400 hover:text-white"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                              className="h-6 w-6 text-red-400 hover:text-red-300 ml-auto"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-od-green-600/50 p-6 space-y-4">
                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total:</span>
                  <span className="text-xl font-bold text-od-tan-300">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Link href="/checkout" className="block">
                    <Button
                      className="w-full bg-od-tan-500 text-od-green-800 hover:bg-od-tan-600 font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full border-od-green-500 text-od-green-300 hover:bg-od-green-700"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
