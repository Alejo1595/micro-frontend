export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  categoryId: number;
  image: string;
  rating: Raiting;
}

interface Raiting {
  rate: number;
  count: number;
}

export interface QuantityProductChanged {
  productId: number;
  count: unknown;
}

// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   creationAt: Date;
//   updatedAt: Date;
//   category: Category;
// }

// export interface Category {
//   id: number;
//   name: string;
//   image: string;
//   creationAt: Date;
//   updatedAt: Date;
// }
