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
