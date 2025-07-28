'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/components/button.module.css';
import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';

// 주문 데이터 타입 정의
interface OrderItem {
  id: string;
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

// 샘플 주문 데이터
const sampleOrders: OrderItem[] = [
  {
    id: '1',
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
    id: '2',
    orderDate: '2025-07-23',
    orderNumber: 'ORD-20250723-002',
    productName: '마그넷',
    options: '키키 디자인, 인테리어용',
    price: 9000,
    image: '/images/products/kiki/kiki-magnet.svg',
    category: '인테리어',
    quantity: 1,
    status: '배송중',
    statusType: 'shipped',
  },
  {
    id: '3',
    orderDate: '2025-07-20',
    orderNumber: 'ORD-20250720-003',
    productName: '마그넷',
    options: '키키 디자인, 인테리어용',
    price: 9000,
    image: '/images/products/kiki/kiki-magnet.svg',
    category: '인테리어',
    quantity: 3,
    status: '상품준비중',
    statusType: 'processing',
  },
  {
    id: '4',
    orderDate: '2025-07-18',
    orderNumber: 'ORD-20250718-004',
    productName: '마그넷',
    options: '키키 디자인, 인테리어용',
    price: 9000,
    image: '/images/products/kiki/kiki-magnet.svg',
    category: '인테리어',
    quantity: 1,
    status: '배송완료',
    statusType: 'delivered',
  },
  {
    id: '5',
    orderDate: '2025-07-15',
    orderNumber: 'ORD-20250715-005',
    productName: '마그넷',
    options: '키키 디자인, 인테리어용',
    price: 9000,
    image: '/images/products/kiki/kiki-magnet.svg',
    category: '인테리어',
    quantity: 2,
    status: '주문접수',
    statusType: 'pending',
  },
  {
    id: '6',
    orderDate: '2025-07-10',
    orderNumber: 'ORD-20250710-006',
    productName: '마그넷',
    options: '키키 디자인, 인테리어용',
    price: 9000,
    image: '/images/products/kiki/kiki-magnet.svg',
    category: '인테리어',
    quantity: 4,
    status: '배송완료',
    statusType: 'delivered',
  },
  {
    id: '7',
    orderDate: '2025-07-08',
    orderNumber: 'ORD-20250708-007',
    productName: '마그넷',
    options: '키키 디자인, 인테리어용',
    price: 9000,
    image: '/images/products/kiki/kiki-magnet.svg',
    category: '인테리어',
    quantity: 1,
    status: '배송중',
    statusType: 'shipped',
  },
  {
    id: '8',
    orderDate: '2025-07-05',
    orderNumber: 'ORD-20250705-008',
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
    id: '9',
    orderDate: '2025-07-03',
    orderNumber: 'ORD-20250703-009',
    productName: '마그넷',
    options: '키키 디자인, 인테리어용',
    price: 9000,
    image: '/images/products/kiki/kiki-magnet.svg',
    category: '인테리어',
    quantity: 1,
    status: '배송완료',
    statusType: 'delivered',
  },
  {
    id: '10',
    orderDate: '2025-07-01',
    orderNumber: 'ORD-20250701-010',
    productName: '마그넷',
    options: '키키 디자인, 인테리어용',
    price: 9000,
    image: '/images/products/kiki/kiki-magnet.svg',
    category: '인테리어',
    quantity: 3,
    status: '배송완료',
    statusType: 'delivered',
  },
  {
    id: '11',
    orderDate: '2025-06-28',
    orderNumber: 'ORD-20250628-011',
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
    id: '12',
    orderDate: '2025-06-25',
    orderNumber: 'ORD-20250625-012',
    productName: '마그넷',
    options: '키키 디자인, 인테리어용',
    price: 9000,
    image: '/images/products/kiki/kiki-magnet.svg',
    category: '인테리어',
    quantity: 1,
    status: '배송완료',
    statusType: 'delivered',
  },
];

interface WebOrderListProps {
  startDate?: string;
  endDate?: string;
}

export default function WebOrderList({ startDate, endDate }: WebOrderListProps) {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (startDate && endDate) {
      searchOrders(startDate, endDate);
    }
  }, [startDate, endDate]);

  const searchOrders = (start: string, end: string) => {
    setLoading(true);
    console.log('주문 조회 시작:', start, '~', end);

    // 실제로는 API 호출
    setTimeout(() => {
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);

      const filteredOrders = sampleOrders.filter((order) => {
        const orderDate = new Date(order.orderDate);
        return orderDate >= startDateObj && orderDate <= endDateObj;
      });

      console.log('조회된 주문 수:', filteredOrders.length);
      setOrders(filteredOrders);
      setLoading(false);
    }, 500);
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
        <p className={orderDelivery_styles.web_order_delivery_view_label}>날짜/주문번호</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>상품명/옵션</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>상품금액</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>진행상태</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>접수</p>
      </div>

      <ul className={orderDelivery_styles.web_order_delivery_view_list_wrapper}>
        {loading ? (
          <li className={orderDelivery_styles.web_order_delivery_view_list}>조회 중...</li>
        ) : orders.length === 0 ? (
          <li className={orderDelivery_styles.web_order_delivery_view_list}>
            조회내역이 없습니다.
          </li>
        ) : (
          orders.map((order) => (
            <li
              key={order.id + order.orderNumber}
              className={orderDelivery_styles.web_order_delivery_view_list}
            >
              <div className={orderDelivery_styles.web_order_delivery_view_item}>
                <div className={orderDelivery_styles.web_order_delivery_view_date_order}>
                  <p className={orderDelivery_styles.web_order_delivery_view_date}>
                    {order.orderDate}
                  </p>
                  <p className={orderDelivery_styles.web_order_delivery_view_order_number}>
                    {order.orderNumber}
                  </p>
                </div>

                <div className={orderDelivery_styles.web_order_delivery_view_product}>
                  <img src={order.image} alt={order.productName} />
                  <div>
                    <p className={orderDelivery_styles.web_order_delivery_view_product_name}>
                      {order.productName} ({order.category})
                    </p>
                    <p className={orderDelivery_styles.web_order_delivery_view_options}>
                      {order.options} · 수량: {order.quantity}개
                    </p>
                  </div>
                </div>

                <div className={orderDelivery_styles.web_order_delivery_view_price}>
                  <p>{formatPrice(getTotalPrice(order))}</p>
                  <p>
                    ({formatPrice(order.price)} × {order.quantity})
                  </p>
                </div>

                <div className={orderDelivery_styles.web_order_delivery_view_status}>
                  <span>{order.status}</span>
                </div>

                <div className={orderDelivery_styles.web_order_delivery_view_actions}>
                  <button className={styles.inquiry_button}>상세보기</button>
                  {order.statusType === 'delivered' && (
                    <button className={styles.inquiry_button}>리뷰작성</button>
                  )}
                </div>
              </div>
            </li>
          ))
        )}
      </ul>

      <hr className={orderDelivery_styles.web_order_delivery_view_list_divider} />
    </section>
  );
}
