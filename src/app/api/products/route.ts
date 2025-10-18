import { NextRequest, NextResponse } from 'next/server';
import { ShopifyService } from '@/lib/shopify-service';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20');
    
    const products = await ShopifyService.getProducts(limit);
    
    return NextResponse.json({
      success: true,
      products,
      count: products.length
    });
  } catch (error: unknown) {
    console.error('Error fetching products:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch products';
    
    return NextResponse.json({
      success: false,
      error: errorMessage,
      products: [],
      count: 0
    }, { status: 500 });
  }
}
