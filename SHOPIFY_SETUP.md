# Shopify Integration Setup Guide

## 🔐 Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```bash
# Shopify App Credentials (from your app's Credentials tab)
SHOPIFY_CLIENT_ID=5e0c2b19f9fd8e5abd75be38be3c1692
SHOPIFY_CLIENT_SECRET=your_secret_here
SHOPIFY_SHOP_DOMAIN=your-shop-name.myshopify.com

# For development (these are safe to expose in client-side code)
NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN=your-shop-name.myshopify.com
```

## 🛠️ Shopify App Configuration

### 1. Create a Shopify App
1. Go to [Shopify Partners](https://partners.shopify.com/)
2. Create a new app
3. Choose "Public app" for now
4. Set up your app URL and redirect URLs

### 2. Required API Scopes
Enable these scopes in your Shopify app:

**Essential Scopes:**
- `read_products` - Read product information
- `read_inventory` - Read inventory levels
- `write_checkouts` - Create checkouts
- `read_checkouts` - Read checkout information
- `read_customers` - Read customer information
- `read_orders` - Read order information
- `read_locations` - Read store locations

### 3. Storefront API Access
1. In your Shopify app settings, go to "App setup"
2. Enable "Storefront API access"
3. Copy the Storefront access token (this is your API key)

## 📁 Files Created

The following files have been created for Shopify integration:

- `src/lib/shopify.ts` - Shopify configuration and GraphQL queries
- `src/lib/shopify-service.ts` - Service class for Shopify operations
- `src/contexts/cart-context.tsx` - React context for cart management

## 🚀 Usage Examples

### Fetching Products
```typescript
import { ShopifyService } from '@/lib/shopify-service';

// Get all products
const products = await ShopifyService.getProducts(20);

// Get a single product
const product = await ShopifyService.getProduct('product-handle');
```

### Using Cart Context
```typescript
import { useCart } from '@/contexts/cart-context';

function ProductCard({ product }) {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      variantId: product.variants[0].id,
      title: product.title,
      price: product.variants[0].price,
      quantity: 1,
      image: product.images[0],
    });
  };
  
  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
}
```

## 🔧 Next Steps

1. **Add Cart Provider**: Wrap your app with `CartProvider` in `layout.tsx`
2. **Update Product Cards**: Integrate with Shopify products instead of mock data
3. **Add Cart UI**: Create cart sidebar or page
4. **Handle Checkout**: Implement checkout flow

## ⚠️ Important Notes

- **API Key Security**: Never expose your API secret in client-side code
- **Rate Limits**: Shopify has API rate limits, implement proper error handling
- **Error Handling**: Always wrap Shopify API calls in try-catch blocks
- **Testing**: Test with a development store first

## 🐛 Troubleshooting

### Common Issues:
1. **CORS Errors**: Make sure your app URL is configured correctly in Shopify
2. **Authentication Errors**: Verify your API key and shop domain
3. **GraphQL Errors**: Check your queries and variables
4. **Rate Limiting**: Implement proper retry logic

### Debug Mode:
Add this to your `.env.local` for debugging:
```bash
NODE_ENV=development
SHOPIFY_DEBUG=true
```
