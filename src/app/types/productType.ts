export interface Product {
  _id: number;
  seller_id: number;
  price: number;
  show: boolean;
  active: boolean;
  name: string;
  quantity: number;
  buyQuantity: number;
  mainImages: {
    path: string;
    name: string;
    originalname: string;
  }[];
  createdAt: string;
  updatedAt: string;
  extra: {
    isNew: boolean;
    isBest: boolean;
    category: string[];
    sort: number;
    movie: string;
    rating: number;
    reviewCount: number;
    likes: number;
  };
  seller: {
    _id: number;
    email: string;
    name: string;
    phone: string;
    address: string;
    image: string;
    extra: {
      birthday: string;
    };
  };
  replies: number;
  bookmarks: number;
  options: number;
}
