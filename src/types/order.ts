export interface Order {
  _id: number;
  orderNumber: string;
  type: 'order';
  user_id: number;
  products: OrderProduct[];
  cost: {
    products: number;
    shippingFees: number;
    total: number;
  };
  address: {
    name: string;
    phone: string;
    address: string;
    zipCode: string;
  };
  state: 'OS010' | 'OS020' | 'OS030' | 'OS040'; // 주문접수, 상품준비중, 배송중, 배송완료
  createdAt: string;
  updatedAt: string;
}

export interface OrderProduct {
  _id: number;
  seller_id: number;
  name: string;
  price: number;
  quantity: number;
  image: {
    path: string;
    name: string;
  };
  option: string;
}

export interface OrderListResponse {
  orders: Order[];
  totalCount: number;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
