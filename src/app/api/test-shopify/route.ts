import { NextResponse } from 'next/server';
import { ShopifyService } from '@/lib/shopify-service';

export async function GET() {
  try {
    // Test the Shopify connection
    const products = await ShopifyService.getProducts(5);
    
    return NextResponse.json({
      success: true,
      productCount: products.length,
      products: products.map(p => ({
        id: p.id,
        title: p.title,
        price: p.variants[0]?.price.amount,
        images: p.images.length
      })),
    });
  } catch (error: unknown) {
    console.error('Shopify API test error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Connection failed';
    
    return NextResponse.json({
      success: false,
      error: errorMessage,
    }, { status: 500 });
  }
}
