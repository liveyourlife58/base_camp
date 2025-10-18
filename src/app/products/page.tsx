'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShopifyProduct } from '@/lib/shopify-service';
import { Button } from '@/components/ui/button';
import { Loader2, AlertCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import Image from 'next/image';

export default function ProductsPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/products?limit=20');
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.products);
      } else {
        setError(data.error || 'Failed to load products');
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products. Please check your Shopify configuration.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-od-tan-300 mx-auto mb-4" />
          <p className="text-white">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Error Loading Products</h2>
          <p className="text-gray-300 mb-4">{error}</p>
          <Button onClick={fetchProducts} className="bg-od-tan-500 text-od-green-800 hover:bg-od-tan-600">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Tactical Gear
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional-grade equipment for military, law enforcement, and tactical operators
          </p>
        </motion.div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ShopifyProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">No products found.</p>
            <p className="text-gray-400 text-sm mt-2">
              Make sure you have products in your Shopify store.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Shopify-specific product card component
function ShopifyProductCard({ product }: { product: ShopifyProduct }) {
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: parseFloat(product.variants[0]?.price.amount || '0'),
      image: product.images[0]?.url || '',
      variantId: product.variants[0]?.id,
    };
    addToCart(cartItem);
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative z-10"
      style={{
        background: 'linear-gradient(135deg, rgba(22, 23, 22, 0.8), rgba(35, 44, 35, 0.7), rgba(22, 23, 22, 0.8))',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        {product.images.length > 0 && !imageError ? (
          <Image
            src={product.images[0].url}
            alt={product.images[0].altText}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-od-green-800 flex items-center justify-center">
            <span className="text-od-tan-300 text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-white group-hover:text-od-tan-300 transition-colors mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-od-tan-300">
            ${parseFloat(product.variants[0]?.price.amount || '0').toFixed(2)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full bg-od-tan-500 hover:bg-od-tan-400 text-od-green-800 font-medium"
          disabled={!product.variants[0]?.availableForSale}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.variants[0]?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </motion.div>
  );
}
