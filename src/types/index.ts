export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: ProductCategory;
  subcategory?: string;
  brand: string;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  features: string[];
  specifications?: Record<string, string>;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
}

export type ProductCategory = 
  | 'camping'
  | 'survival'
  | 'combat'
  | 'self-defense'
  | 'medical'
  | 'accessories';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}
