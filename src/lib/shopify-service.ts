// Shopify service for handling product operations

import { 
  getProductsUrl, 
  getProductUrl,
  shopifyConfig 
} from './shopify';

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  images: Array<{
    url: string;
    altText: string;
  }>;
  variants: Array<{
    id: string;
    title: string;
    price: {
      amount: string;
      currencyCode: string;
    };
    availableForSale: boolean;
    selectedOptions?: Array<{
      name: string;
      value: string;
    }>;
  }>;
}

export interface ShopifyCheckout {
  id: string;
  webUrl: string;
  totalPrice: {
    amount: string;
    currencyCode: string;
  };
  lineItems: Array<{
    id: string;
    title: string;
    quantity: number;
    variant: {
      id: string;
      title: string;
      price: {
        amount: string;
        currencyCode: string;
      };
      image: {
        url: string;
        altText: string;
      };
    };
  }>;
}

export class ShopifyService {
  // Helper function to make authenticated requests
  private static async makeRequest(url: string, options: RequestInit = {}) {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': shopifyConfig.accessToken,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Shopify API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
  }

  // Fetch all products
  static async getProducts(limit: number = 20): Promise<ShopifyProduct[]> {
    try {
      const data = await this.makeRequest(`${getProductsUrl()}?limit=${limit}`);
      
      return data.products.map((product: Record<string, unknown>) => ({
        id: (product.id as string | number).toString(),
        title: product.title as string,
        description: (product.body_html as string) || '',
        handle: product.handle as string,
        images: (product.images as Record<string, unknown>[]).map((image: Record<string, unknown>) => ({
          url: image.src as string,
          altText: (image.alt as string) || (product.title as string),
        })),
        variants: (product.variants as Record<string, unknown>[]).map((variant: Record<string, unknown>) => ({
          id: (variant.id as string | number).toString(),
          title: (variant.title as string) || 'Default',
          price: {
            amount: variant.price as string,
            currencyCode: 'USD', // Default currency
          },
          availableForSale: (variant.inventory_quantity as number) > 0,
        })),
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  // Fetch a single product by ID
  static async getProduct(productId: string): Promise<ShopifyProduct | null> {
    try {
      const data = await this.makeRequest(getProductUrl(productId));
      
      if (!data.product) {
        return null;
      }

      const product = data.product;
      return {
        id: (product.id as string | number).toString(),
        title: product.title as string,
        description: (product.body_html as string) || '',
        handle: product.handle as string,
        images: (product.images as Record<string, unknown>[]).map((image: Record<string, unknown>) => ({
          url: image.src as string,
          altText: (image.alt as string) || (product.title as string),
        })),
        variants: (product.variants as Record<string, unknown>[]).map((variant: Record<string, unknown>) => ({
          id: (variant.id as string | number).toString(),
          title: (variant.title as string) || 'Default',
          price: {
            amount: variant.price as string,
            currencyCode: 'USD',
          },
          availableForSale: (variant.inventory_quantity as number) > 0,
        })),
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }

  // Create a checkout with line items (simplified for now)
  static async createCheckout(_lineItems: Array<{
    variantId: string;
    quantity: number;
  }>): Promise<ShopifyCheckout | null> {
    try {
      // For now, we'll create a simple checkout URL
      // In a real implementation, you'd use Shopify's checkout API
      // This is a simplified approach - you might want to use Shopify's
      // Storefront API or redirect to Shopify's checkout
      const checkoutUrl = `https://${shopifyConfig.shopDomain}/cart`;
      
      return {
        id: 'temp-checkout-id',
        webUrl: checkoutUrl,
        totalPrice: {
          amount: '0.00',
          currencyCode: 'USD',
        },
        lineItems: [],
      };
    } catch (error) {
      console.error('Error creating checkout:', error);
      throw error;
    }
  }

  // Format price for display
  static formatPrice(amount: string, currencyCode: string): string {
    const price = parseFloat(amount);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    }).format(price);
  }
}
