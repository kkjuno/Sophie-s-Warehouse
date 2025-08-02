'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/components/button.module.css';
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

export default function MobilePeriodSearch() {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('2025-06-01');
  const [endDate, setEndDate] = useState<string>('2025-07-31');
  const [showPeriodDropdown, setShowPeriodDropdown] = useState<boolean>(false);

  // 주문 목록 상태
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 이벤트 리스너 등록
  useEffect(() => {
    const handleOrderSearch = (event: CustomEvent) => {
      console.log('모바일 이벤트 수신됨:', event.detail);
      const { startDate, endDate } = event.detail;
      searchOrders(startDate, endDate);
    };

    console.log('모바일 이벤트 리스너 등록');
    window.addEventListener('orderSearch', handleOrderSearch as EventListener);

    return () => {
      console.log('모바일 이벤트 리스너 제거');
      window.removeEventListener('orderSearch', handleOrderSearch as EventListener);
    };
  }, []);

  // 기간 버튼 클릭 핸들러 (웹과 동일)
  const handlePeriodClick = (period: string) => {
    console.log('선택된 기간:', period);
    setSelectedPeriod(period);
    const today = new Date();
    const endDateStr = today.toISOString().split('T')[0];

    let startDateStr = '';
    switch (period) {
      case '오늘':
        startDateStr = endDateStr;
        break;
      case '7일':
        startDateStr = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0];
        break;
      case '15일':
        startDateStr = new Date(today.getTime() - 15 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0];
        break;
      case '1개월':
        startDateStr = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0];
        break;
      case '3개월':
        startDateStr = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0];
        break;
      case '1년':
        startDateStr = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0];
        break;
      default:
        return;
    }

    console.log('계산된 시작일:', startDateStr);
    console.log('계산된 종료일:', endDateStr);

    setStartDate(startDateStr);
    setEndDate(endDateStr);
    setShowPeriodDropdown(false);
  };

  // 조회 버튼 클릭 핸들러 (웹과 동일)
  const handleSearch = () => {
    console.log('조회 시작');
    console.log('시작일:', startDate);
    console.log('종료일:', endDate);

    // 커스텀 이벤트 발생시켜서 자기 자신의 이벤트 리스너에 알림
    const searchEvent = new CustomEvent('orderSearch', {
      detail: { startDate, endDate },
    });
    window.dispatchEvent(searchEvent);
  };

  // 주문 검색 함수
  const searchOrders = async (start: string, end: string) => {
    setLoading(true);
    setError(null);
    console.log('모바일 주문 조회 시작:', start, '~', end);

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

          console.log('모바일 조회된 주문 수:', filteredOrders.length);
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
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.ok === 1) {
        console.log('모바일 조회된 주문 수:', data.items.length);
        setOrders(data.items);
      } else {
        throw new Error('API 응답에 오류가 있습니다.');
      }
    } catch (err) {
      console.error('모바일 주문 조회 실패:', err);
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
    <>
      <div className={orderDelivery_styles.mobile_order_delivery}>
        {/* 기간 선택 드롭다운 */}
        <div
          className={`${orderDelivery_styles.mobile_order_delivery_container_lg} ${orderDelivery_styles.mobile_dropdown_container}`}
        >
          <button
            className={`${orderDelivery_styles.mobile_order_delivery_arrow_button} ${orderDelivery_styles.mobile_dropdown_button}`}
            onClick={() => setShowPeriodDropdown(!showPeriodDropdown)}
          >
            <span className={orderDelivery_styles.mobile_dropdown_arrow_text}>
              {selectedPeriod || '기간 선택'}
            </span>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${orderDelivery_styles.mobile_dropdown_arrow} ${showPeriodDropdown ? orderDelivery_styles.mobile_dropdown_arrow_open : ''}`}
            >
              <path
                d="M0.176092 0.1912C0.288878 0.0687746 0.441828 0 0.601308 0C0.760787 0 0.913737 0.0687746 1.02652 0.1912L4.00363 3.42372L6.98074 0.1912C7.09417 0.0722442 7.2461 0.00642175 7.40379 0.00790964C7.56149 0.00939752 7.71233 0.0780765 7.82384 0.199154C7.93536 0.320232 7.99861 0.484021 7.99998 0.655244C8.00135 0.826468 7.94073 0.991425 7.83117 1.11459L4.42885 4.8088C4.31606 4.93123 4.16311 5 4.00363 5C3.84415 5 3.6912 4.93123 3.57842 4.8088L0.176092 1.11459C0.0633405 0.992127 0 0.826055 0 0.652894C0 0.479733 0.0633405 0.313661 0.176092 0.1912Z"
                fill="#949494"
              />
            </svg>
          </button>

          {/* 기간 선택 드롭다운 메뉴 */}
          {showPeriodDropdown && (
            <div className={orderDelivery_styles.mobile_dropdown_menu}>
              {['오늘', '7일', '15일', '1개월', '3개월', '1년'].map((period) => (
                <button
                  key={period}
                  onClick={() => handlePeriodClick(period)}
                  className={`${orderDelivery_styles.mobile_dropdown_item} ${
                    selectedPeriod === period
                      ? orderDelivery_styles.mobile_dropdown_item_active
                      : ''
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={orderDelivery_styles.mobile_order_delivery_wrapper}>
          {/* 시작 날짜 */}
          <div className={orderDelivery_styles.mobile_order_delivery_container_sm}>
            <div className={orderDelivery_styles.mobile_date_container}>
              <input
                type="date"
                id="mobile-start-date"
                name="startDate"
                value={startDate}
                onChange={(e) => {
                  console.log('시작일 변경됨:', e.target.value);
                  setStartDate(e.target.value);
                }}
                className={orderDelivery_styles.mobile_date_input}
              />
              <div className={orderDelivery_styles.mobile_date_display}>
                <span>{startDate}</span>
              </div>
            </div>
            <button
              className={orderDelivery_styles.mobile_order_delivery_calendar_button}
              onClick={() => {
                const dateInput = document.querySelector('input[type="date"]') as HTMLInputElement;
                if (dateInput) {
                  dateInput.focus();
                  dateInput.click();
                  try {
                    if ('showPicker' in dateInput && typeof dateInput.showPicker === 'function') {
                      dateInput.showPicker();
                    }
                  } catch {
                    console.log('showPicker 지원하지 않음');
                  }
                }
              }}
            >
              <CalendarIcon />
            </button>
          </div>

          <span className={orderDelivery_styles.mobile_order_delivery_period}>~</span>

          {/* 종료 날짜 */}
          <div className={orderDelivery_styles.mobile_order_delivery_container_sm}>
            <div className={orderDelivery_styles.mobile_date_container}>
              <input
                type="date"
                id="mobile-end-date"
                name="endDate"
                value={endDate}
                onChange={(e) => {
                  console.log('종료일 변경됨:', e.target.value);
                  setEndDate(e.target.value);
                }}
                className={orderDelivery_styles.mobile_date_input}
              />
              <div className={orderDelivery_styles.mobile_date_display}>
                <span>{endDate}</span>
              </div>
            </div>
            <button
              className={orderDelivery_styles.mobile_order_delivery_calendar_button}
              onClick={() => {
                const dateInputs = document.querySelectorAll(
                  'input[type="date"]',
                ) as NodeListOf<HTMLInputElement>;
                const endDateInput = dateInputs[1]; // 두 번째 input (종료일)
                if (endDateInput) {
                  endDateInput.focus();
                  endDateInput.click();
                  try {
                    if (
                      'showPicker' in endDateInput &&
                      typeof endDateInput.showPicker === 'function'
                    ) {
                      endDateInput.showPicker();
                    }
                  } catch {
                    console.log('showPicker 지원하지 않음');
                  }
                }
              }}
            >
              <CalendarIcon />
            </button>
          </div>

          <button className={styles.inquiry_button} onClick={handleSearch}>
            조회
          </button>
        </div>
      </div>

      {/* 모바일 주문 목록 */}
      <hr className={orderDelivery_styles.mobile_order_delivery_divider} />
      <ul className={orderDelivery_styles.mobile_order_delivery_view_list_wrapper}>
        {loading ? (
          <li className={orderDelivery_styles.mobile_order_delivery_view_list}>조회 중...</li>
        ) : error ? (
          <li className={orderDelivery_styles.mobile_order_delivery_view_list}>오류: {error}</li>
        ) : orders.length === 0 ? (
          <li className={orderDelivery_styles.mobile_order_delivery_view_list}>
            조회내역이 없습니다.
          </li>
        ) : (
          orders.map((order) => (
            <li key={order._id} className={orderDelivery_styles.mobile_order_data_wrapper}>
              <p className={orderDelivery_styles.mobile_order_data_row}>
                <span className={orderDelivery_styles.mobile_order_label}>주문날짜:</span>
                <span className={orderDelivery_styles.mobile_order_value}>{order.orderDate}</span>
              </p>

              <p className={orderDelivery_styles.mobile_order_data_row}>
                <span className={orderDelivery_styles.mobile_order_label}>상품명/옵션:</span>
                <span className={orderDelivery_styles.mobile_order_value}>
                  {order.productName} - {order.options} (수량: {order.quantity}개)
                </span>
              </p>

              <p className={orderDelivery_styles.mobile_order_data_row}>
                <span className={orderDelivery_styles.mobile_order_label}>상품금액:</span>
                <span className={orderDelivery_styles.mobile_order_value}>
                  {formatPrice(getTotalPrice(order))}
                </span>
              </p>

              <p className={orderDelivery_styles.mobile_order_data_row}>
                <span className={orderDelivery_styles.mobile_order_label}>진행상태:</span>
                <span className={orderDelivery_styles.mobile_order_value}>{order.status}</span>
              </p>

              <p className={orderDelivery_styles.mobile_order_data_row}>
                <span className={orderDelivery_styles.mobile_order_label}>주문번호:</span>
                <span className={orderDelivery_styles.mobile_order_value}>{order.orderNumber}</span>
              </p>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 7H17M9 4V1M4 4V1M14 4V1M2 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V4C17 3.73478 16.8946 3.48043 16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17ZM5 10H5.01V10.01H5V10ZM9 10H9.01V10.01H9V10ZM13 10H13.01V10.01H13V10ZM5 14H5.01V14.01H5V14ZM9 14H9.01V14.01H9V14ZM13 14H13.01V14.01H13V14Z"
        stroke="#949494"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
