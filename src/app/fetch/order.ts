'use server';

import { ApiRes, ApiResPromise } from '../types/apiType';

// 주소 타입 정의
export interface OrderAddress {
  name: string;
  phone: string;
  address: string;
  zipCode: string;
}

// 주문 데이터 타입 정의
export interface Order {
  _id: string;
  createdAt: string;
  products: Array<{
    _id: number;
    name: string;
    price: number;
    quantity: number;
    image?: {
      path: string;
      name: string;
    };
    option?: string;
  }>;
  cost: {
    products: number;
    shippingFees: number;
    total: number;
  };
  state: string;
  user_id: number;
  address: OrderAddress;
  updatedAt: string;
}

// 주문 조회 API 함수
export async function orderFetch(startDate: string, endDate: string): ApiResPromise<Order[]> {
  const server = process.env.NEXT_PUBLIC_BASE_URL;
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

  // API 호출을 위한 파라미터 설정
  const params = new URLSearchParams({
    startDate,
    endDate,
  });

  const url = `${server}/orders?${params}`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'client-Id': clientId as string,
    },
  });

  const resJson: ApiRes<Order[]> = await res.json();
  console.log('Order API 응답:', resJson); // 응답 내용 확인
  return resJson;
}
