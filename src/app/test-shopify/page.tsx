'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface TestResult {
  success: boolean;
  productCount?: number;
  products?: Array<{
    id: string;
    title: string;
    price: string;
    images: number;
  }>;
  error?: string;
}

export default function TestShopifyPage() {
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testConnection = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/test-shopify');
      const data = await response.json();
      
      
      if (data.success) {
        setResult(data);
      } else {
        setError(data.error || 'Connection failed');
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Connection failed';
      setError(errorMessage);
      console.error('Shopify test error:', err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Shopify Connection Test</h1>
        
        <div className="bg-gradient-to-br from-od-green-800 via-od-green-700 to-od-green-800 border border-od-green-600/50 rounded-xl p-8">
          <Button 
            onClick={testConnection} 
            disabled={loading}
            className="mb-6 bg-od-tan-500 text-od-green-800 hover:bg-od-tan-600"
          >
            {loading ? 'Testing...' : 'Test Shopify Connection'}
          </Button>

          {error && (
            <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-4 mb-6">
              <h3 className="text-red-400 font-semibold mb-2">Error:</h3>
              <p className="text-red-300">{error}</p>
            </div>
          )}

          {result && (
            <div className="bg-green-900/50 border border-green-500/50 rounded-lg p-4">
              <h3 className="text-green-400 font-semibold mb-2">Success!</h3>
              <p className="text-green-300 mb-4">
                Found {result.productCount} products in your Shopify store.
              </p>
              
              {result.products && result.products.length > 0 && (
                <div>
                  <h4 className="text-white font-medium mb-2">Sample Products:</h4>
                  <ul className="space-y-2">
                    {result.products?.map((product) => (
                      <li key={product.id} className="text-gray-300">
                        • {product.title} - ${product.price} ({product.images} images)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
