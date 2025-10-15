'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, XCircle } from 'lucide-react';
import { Product } from '@/types';
import { Button } from './button';

interface ProductComparisonProps {
  products: Product[];
  onClose: () => void;
}

export function ProductComparison({ products, onClose }: ProductComparisonProps) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>(products.slice(0, 3));

  const addProduct = (product: Product) => {
    if (selectedProducts.length < 4 && !selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const removeProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  const comparisonFeatures = [
    'Price',
    'Weight',
    'Material',
    'Water Resistance',
    'Warranty',
    'Color Options',
    'Military Grade',
    'MOLLE Compatible'
  ];

  const getFeatureValue = (product: Product, feature: string) => {
    switch (feature) {
      case 'Price':
        return `$${product.price}`;
      case 'Weight':
        return product.specifications?.Weight || 'N/A';
      case 'Material':
        return product.specifications?.Material || 'N/A';
      case 'Water Resistance':
        return product.specifications?.['Water Resistance'] || product.specifications?.['Waterproof'] || 'N/A';
      case 'Warranty':
        return product.specifications?.Warranty || 'N/A';
      case 'Color Options':
        return product.specifications?.Color || 'N/A';
      case 'Military Grade':
        return product.tags?.includes('military') || product.tags?.includes('military-grade') ? 'Yes' : 'No';
      case 'MOLLE Compatible':
        return product.tags?.includes('molle') || product.features?.some(f => f.toLowerCase().includes('molle')) ? 'Yes' : 'No';
      default:
        return 'N/A';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-br from-od-green-800 via-od-green-700 to-od-green-800 border border-od-green-600/50 rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-od-green-600/50">
          <h2 className="text-2xl font-bold text-white">Product Comparison</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Product Selection */}
        <div className="p-6 border-b border-od-green-600/50">
          <h3 className="text-lg font-semibold text-white mb-4">Select Products to Compare</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => {
              const isSelected = selectedProducts.find(p => p.id === product.id);
              const canAdd = selectedProducts.length < 4 && !isSelected;
              
              return (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-od-tan-500 bg-gradient-to-br from-od-tan-500/20 to-od-tan-600/10' 
                      : canAdd 
                        ? 'border-od-green-600/50 bg-gradient-to-br from-od-green-700/50 to-od-green-800/30 hover:border-od-tan-500 hover:from-od-tan-500/10 hover:to-od-tan-600/5' 
                        : 'border-gray-600/50 bg-gradient-to-br from-gray-700/50 to-gray-800/30 opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => canAdd && addProduct(product)}
                >
                  <div className="text-sm font-medium text-white mb-1 line-clamp-2">
                    {product.name}
                  </div>
                  <div className="text-xs text-gray-300">
                    ${product.price}
                  </div>
                  {isSelected && (
                    <div className="flex items-center justify-center mt-2">
                      <Check className="h-4 w-4 text-od-tan-500" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-auto max-h-96">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-od-green-900 via-od-green-800 to-od-green-900 sticky top-0">
              <tr>
                <th className="text-left p-4 text-white font-semibold">Features</th>
                {selectedProducts.map((product) => (
                  <th key={product.id} className="text-center p-4 text-white font-semibold min-w-[200px]">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-sm font-medium line-clamp-2">{product.name}</div>
                        <div className="text-xs text-gray-300">${product.price}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeProduct(product.id)}
                        className="text-gray-400 hover:text-white ml-2"
                      >
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <motion.tr
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-od-green-600/50 hover:bg-gradient-to-r hover:from-od-green-700/20 hover:via-od-green-600/10 hover:to-od-green-700/20"
                >
                  <td className="p-4 text-white font-medium">{feature}</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="p-4 text-center text-gray-300">
                      {getFeatureValue(product, feature)}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Actions */}
        <div className="p-6 border-t border-od-green-600/50 flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button 
            onClick={() => {
              // Add to cart logic for selected products
              console.log('Add to cart:', selectedProducts);
            }}
            disabled={selectedProducts.length === 0}
          >
            Add Selected to Cart
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
