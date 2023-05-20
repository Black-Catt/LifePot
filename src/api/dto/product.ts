export interface GlobalProductInDTO {
  name: string;
  price: number;
  colors: string[];
  category: string;
  description: string;
  stars: string;
  stock: number;
  reviews: number;
  id: string;
  image: string;
  featured?: boolean;
  shipping?: boolean;
  [key: string]: any;
}
