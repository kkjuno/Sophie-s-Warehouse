export interface ProductCardProps {
  product: Product;
}

export interface ProductGridProps {
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  viewedAt: Date;
  likes?: number;
  comments?: number;
}

export interface Filter {
  name: string;
  emptyIcon: string;
  filledIcon: string;
}
