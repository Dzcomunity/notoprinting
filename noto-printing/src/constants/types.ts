export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string; // lucide icon name
  description: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  images: string[]; // array of image URLs
  featured?: boolean;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface Portfolio {
  id: string;
  slug: string;
  title: string;
  client: string;
  description: string;
  images: string[];
  thumbnail: string;
  category: string;
  productIds: string[]; // Relation to products used
  completedDate: string;
  tags: string[];
  testimonial?: {
    text: string;
    author: string;
    rating: number;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown content
  author: string;
  publishedDate: string;
  updatedDate?: string;
  thumbnail: string;
  category: string;
  tags: string[];
  readTime: number; // in minutes
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface PrintingOption {
  id: string;
  name: string;
  materials: {
    id: string;
    name: string;
    pricePerUnit: number;
  }[];
  sizes: {
    id: string;
    name: string;
    multiplier: number;
  }[];
  finishings: {
    id: string;
    name: string;
    additionalCost: number;
  }[];
}

export interface CalculatorResult {
  productType: string;
  quantity: number;
  material: string;
  size: string;
  finishing: string[];
  subtotal: number;
  discount: number;
  total: number;
  estimatedDays: number;
}
