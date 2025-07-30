export type CategoryType = '마녀 배달부 키키' | '이웃집 토토로' | '하울의 움직이는 성';

export interface ProductItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: CategoryType;
}

export interface ProductSectionProps {
  products: ProductItem[];
}

export * from './user';
export * from './post';
export * from './api';
export * from './file';
