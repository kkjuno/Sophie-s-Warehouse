'use client';

import { useState, useEffect } from 'react';
import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';

// 주문 데이터 타입 정의
interface OrderItem {
  _id: string;
  orderDate: string;
  orderNumber: string;
  productName: string;
  options: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
  status: string;
  statusType: 'pending' | 'processing' | 'shipped' | 'delivered';
}

// 테스트용 더미 데이터
const dummyOrders: OrderItem[] = [
  {
    _id: '1',
    orderDate: '2025-07-25',
    orderNumber: 'ORD-20250725-001',
    productName: '마그넷',
    options: '키키 디자인, 인테리어용',
    price: 9000,
    image: '/images/products/kiki/kiki-magnet.svg',
    category: '인테리어',
    quantity: 2,
    status: '배송완료',
    statusType: 'delivered',
  },
  {
    _id: '2',
    orderDate: '2025-07-23',
    orderNumber: 'ORD-20250723-002',
    productName: '스티커팩',
    options: '토토로 세트, 5매입',
    price: 15000,
    image: '/images/products/totoro/totoro-sticker.svg',
    category: '문구류',
    quantity: 1,
    status: '배송중',
    statusType: 'shipped',
  },
  {
    _id: '3',
    orderDate: '2025-07-20',
    orderNumber: 'ORD-20250720-003',
    productName: '에코백',
    options: '하울의 움직이는 성, 캔버스 소재',
    price: 25000,
    image: '/images/products/howl/howl-bag.svg',
    category: '패션',
    quantity: 1,
    status: '상품준비중',
    statusType: 'processing',
  },
  {
    _id: '4',
    orderDate: '2025-07-18',
    orderNumber: 'ORD-20250718-004',
    productName: '머그컵',
    options: '센과 치히로의 행방불명, 세라믹',
    price: 18000,
    image: '/images/products/chihiro/chihiro-mug.svg',
    category: '생활용품',
    quantity: 2,
    status: '배송완료',
    statusType: 'delivered',
  },
  {
    _id: '5',
    orderDate: '2025-07-15',
    orderNumber: 'ORD-20250715-005',
    productName: '키링',
    options: '포뇨 캐릭터, 아크릴 소재',
    price: 8000,
    image: '/images/products/ponyo/ponyo-keyring.svg',
    category: '액세서리',
    quantity: 3,
    status: '주문접수',
    statusType: 'pending',
  },
  {
    _id: '6',
    orderDate: '2025-07-10',
    orderNumber: 'ORD-20250710-006',
    productName: '노트',
    options: '모노노케 히메, A5 사이즈',
    price: 12000,
    image: '/images/products/mononoke/mononoke-note.svg',
    category: '문구류',
    quantity: 1,
    status: '배송완료',
    statusType: 'delivered',
  },
  {
    _id: '7',
    orderDate: '2025-07-08',
    orderNumber: 'ORD-20250708-007',
    productName: '포스터',
    options: '이웃집 토토로, A3 사이즈',
    price: 10000,
    image: '/images/products/totoro/totoro-poster.svg',
    category: '인테리어',
    quantity: 2,
    status: '배송중',
    statusType: 'shipped',
  },
  {
    _id: '8',
    orderDate: '2025-07-05',
    orderNumber: 'ORD-20250705-008',
    productName: '쿠션',
    options: '마녀 배달부 키키, 벨벳 소재',
    price: 35000,
    image: '/images/products/kiki/kiki-cushion.svg',
    category: '생활용품',
    quantity: 1,
    status: '배송완료',
    statusType: 'delivered',
  },
  {
    _id: '9',
    orderDate: '2025-07-03',
    orderNumber: 'ORD-20250703-009',
    productName: '달력',
    options: '지브리 컬렉션 2025년',
    price: 20000,
    image: '/images/products/ghibli/ghibli-calendar.svg',
    category: '문구류',
    quantity: 1,
    status: '배송완료',
    statusType: 'delivered',
  },
  {
    _id: '10',
    orderDate: '2025-07-01',
    orderNumber: 'ORD-20250701-010',
    productName: '텀블러',
    options: '바람계곡의 나우시카, 스테인리스',
    price: 28000,
    image: '/images/products/nausicaa/nausicaa-tumbler.svg',
    category: '생활용품',
    quantity: 1,
    status: '배송완료',
    statusType: 'delivered',
  },
  {
    _id: '11',
    orderDate: '2025-06-28',
    orderNumber: 'ORD-20250628-011',
    productName: '펜슬케이스',
    options: '고양이의 보은, 가죽 소재',
    price: 22000,
    image: '/images/products/cat/cat-pencilcase.svg',
    category: '문구류',
    quantity: 1,
    status: '배송완료',
    statusType: 'delivered',
  },
  {
    _id: '12',
    orderDate: '2025-06-25',
    orderNumber: 'ORD-20250625-012',
    productName: '티셔츠',
    options: '붉은 돼지, L 사이즈',
    price: 32000,
    image: '/images/products/porco/porco-tshirt.svg',
    category: '패션',
    quantity: 2,
    status: '배송완료',
    statusType: 'delivered',
  },
];

// API 응답 타입
interface ApiResponse {
  ok: number;
  items: OrderItem[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export default function WebOrderList() {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 커스텀 이벤트 리스너 등록
    const handleOrderSearch = (event: CustomEvent) => {
      const { startDate, endDate } = event.detail;
      searchOrders(startDate, endDate);
    };

    window.addEventListener('orderSearch', handleOrderSearch as EventListener);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('orderSearch', handleOrderSearch as EventListener);
    };
  }, []);

  const searchOrders = async (start: string, end: string) => {
    setLoading(true);
    setError(null);
    console.log('주문 조회 시작:', start, '~', end);

    try {
      // API 호출 대신 더미 데이터 사용 (개발/테스트용)
      const isDevelopment = process.env.NODE_ENV === 'development';

      if (isDevelopment) {
        // 개발 환경에서는 더미 데이터 사용
        setTimeout(() => {
          const startDateObj = new Date(start);
          const endDateObj = new Date(end);

          const filteredOrders = dummyOrders.filter((order) => {
            const orderDate = new Date(order.orderDate);
            return orderDate >= startDateObj && orderDate <= endDateObj;
          });

          console.log('조회된 주문 수:', filteredOrders.length);
          setOrders(filteredOrders);
          setLoading(false);
        }, 500);
        return;
      }

      // 프로덕션 환경에서는 실제 API 호출
      const params = new URLSearchParams({
        startDate: start,
        endDate: end,
      });

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/orders?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'client-id': process.env.NEXT_PUBLIC_CLIENT_ID!,
          // 인증이 필요한 경우
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();

      if (data.ok === 1) {
        console.log('조회된 주문 수:', data.items.length);
        setOrders(data.items);
      } else {
        throw new Error('API 응답에 오류가 있습니다.');
      }
    } catch (err) {
      console.error('주문 조회 실패:', err);
      setError(err instanceof Error ? err.message : '주문 조회 중 오류가 발생했습니다.');
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원';
  };

  const getTotalPrice = (order: OrderItem) => {
    return order.price * order.quantity;
  };

  return (
    <section className={orderDelivery_styles.web_order_delivery_view_wrapper}>
      <h2 className={orderDelivery_styles.web_order_delivery_view_tit}>
        주문목록/배송조회 내역 총 {loading ? '-' : orders.length} 건
      </h2>

      <div className={orderDelivery_styles.web_order_delivery_view_label_wrapper}>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>주문날짜</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>상품명/옵션</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>상품금액</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>진행상태</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>주문번호</p>
      </div>

      <ul className={orderDelivery_styles.web_order_delivery_view_list_wrapper}>
        {loading ? (
          <li className={orderDelivery_styles.web_order_delivery_view_list}>조회 중...</li>
        ) : error ? (
          <li className={orderDelivery_styles.web_order_delivery_view_list}>오류: {error}</li>
        ) : orders.length === 0 ? (
          <li className={orderDelivery_styles.web_order_delivery_view_list}>
            조회내역이 없습니다.
          </li>
        ) : (
          orders.map((order) => (
            <li
              key={order._id}
              className={orderDelivery_styles.web_order_delivery_view_data_wrapper}
            >
              <div className={orderDelivery_styles.web_order_delivery_view_data}>
                <p className={orderDelivery_styles.web_order_delivery_view_data_label}>
                  {order.orderDate}
                </p>
                <p className={orderDelivery_styles.web_order_delivery_view_data_label}>
                  {order.productName} - {order.options} (수량: {order.quantity}개)
                </p>
                <p className={orderDelivery_styles.web_order_delivery_view_data_label}>
                  {formatPrice(getTotalPrice(order))}
                </p>
                <p className={orderDelivery_styles.web_order_delivery_view_data_label}>
                  {order.status}
                </p>
                <p className={orderDelivery_styles.web_order_delivery_view_data_label}>
                  {order.orderNumber}
                </p>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
