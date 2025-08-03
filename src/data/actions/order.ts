'use server';

import { ApiRes } from '@/types';
import { OrderListResponse, Order } from '@/types/order';

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

// API 응답 타입 확장
interface ApiResponseWithPagination<T> {
  ok: number;
  item?: T;
  message?: string;
  errors?: Record<string, unknown>;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export async function searchOrders(
  prevState: ApiRes<OrderListResponse> | null,
  formData: FormData,
): Promise<ApiRes<OrderListResponse>> {
  const token = formData.get('token') as string;
  const startDate = formData.get('startDate') as string;
  const endDate = formData.get('endDate') as string;
  const page = Number(formData.get('page')) || 1;
  const limit = Number(formData.get('limit')) || 20;
  const state = formData.get('state') as string;

  let res: Response;
  let data: ApiResponseWithPagination<Order[] | OrderListResponse>;

  try {
    const params = new URLSearchParams({
      startDate,
      endDate,
      page: page.toString(),
      limit: limit.toString(),
      ...(state && { state }),
    });

    // 사용자 주문 목록 조회 API 호출
    res = await fetch(`${API_URL}/orders?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Client-Id': CLIENT_ID,
      },
    });

    data = await res.json();

    if (res.ok && data.ok === 1) {
      // API에서 직접 주문 배열을 반환하는 경우 처리
      const orders = Array.isArray(data.item)
        ? data.item
        : (data.item as OrderListResponse)?.orders || [];

      return {
        ok: 1,
        item: {
          orders: orders,
          totalCount: data.pagination?.total || orders.length,
          pagination: data.pagination,
        },
      };
    } else {
      return {
        ok: 0,
        message: data.message || '주문 조회에 실패했습니다.',
      };
    }
  } catch {
    return {
      ok: 0,
      message: '일시적인 네트워크 문제가 발생했습니다.',
    };
  }
}
