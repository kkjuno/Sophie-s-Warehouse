'use client';

import React, { useState, useEffect, useTransition, useCallback } from 'react';
import { searchOrders } from '@/data/actions/order';
import { Order } from '@/types/order';
import useUserStore from '@/zustand/userStore';
import { useActionState } from 'react';
import styles from '@/styles/components/button.module.css';
import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';

export default function MobilePeriodSearch() {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('2025-06-01');
  const [endDate, setEndDate] = useState<string>('2025-07-31');
  const [showPeriodDropdown, setShowPeriodDropdown] = useState<boolean>(false);

  // 주문 목록 관련 상태 - API 연동
  const [orderState, formAction] = useActionState(searchOrders, null);
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { user } = useUserStore();

  // 날짜 필터링 함수
  const filterOrdersByDate = useCallback((ordersData: Order[], start: string, end: string) => {
    if (!start || !end) {
      setOrders(ordersData);
      return;
    }

    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    endDateObj.setHours(23, 59, 59, 999);

    const filteredOrders = ordersData.filter((order) => {
      const orderDate = new Date(order.createdAt);
      return orderDate >= startDateObj && orderDate <= endDateObj;
    });

    setOrders(filteredOrders);
  }, []);

  // API 응답 처리
  useEffect(() => {
    if (orderState?.ok) {
      setAllOrders(orderState.item.orders);
      filterOrdersByDate(orderState.item.orders, startDate, endDate);
      setError(null);
    } else if (orderState?.message) {
      setError(orderState.message);
      setAllOrders([]);
      setOrders([]);
    }
    setLoading(false);
  }, [orderState, filterOrdersByDate, startDate, endDate]);

  // 날짜가 변경될 때마다 필터링 재적용
  useEffect(() => {
    if (allOrders.length > 0) {
      filterOrdersByDate(allOrders, startDate, endDate);
    }
  }, [startDate, endDate, allOrders, filterOrdersByDate]);

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
        startDateStr = new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0];
        break;
      case '15일':
        startDateStr = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0];
        break;
      case '1개월':
        startDateStr = new Date(today.getTime() - 29 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0];
        break;
      case '3개월':
        startDateStr = new Date(today.getTime() - 89 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0];
        break;
      case '1년':
        startDateStr = new Date(today.getTime() - 364 * 24 * 60 * 60 * 1000)
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

  // 조회 버튼 클릭 핸들러 - API 호출
  const handleSearch = () => {
    console.log('조회 시작');
    console.log('시작일:', startDate);
    console.log('종료일:', endDate);

    if (!startDate || !endDate) {
      alert('조회 기간을 선택해주세요.');
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      alert('시작일은 종료일보다 이전이어야 합니다.');
      return;
    }

    if (!user?.token?.accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('token', user.token.accessToken);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('page', '1');
    formData.append('limit', '100');

    startTransition(() => {
      formAction(formData);
    });
  };

  const getOrderStateText = (state: string) => {
    switch (state) {
      case 'OS010':
        return '주문접수';
      case 'OS020':
        return '상품준비중';
      case 'OS030':
        return '배송중';
      case 'OS040':
        return '배송완료';
      default:
        return '알 수 없음';
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원';
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
        {loading || isPending ? (
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
              {order.products.map((product, index) => (
                <div key={index} className={orderDelivery_styles.mobile_order_product_wrapper}>
                  <p className={orderDelivery_styles.mobile_order_data_row}>
                    <span className={orderDelivery_styles.mobile_order_label}>주문날짜:</span>
                    <span className={orderDelivery_styles.mobile_order_value}>
                      {new Date(order.createdAt)
                        .toLocaleDateString('ko-KR', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        })
                        .replace(/\./g, '.')
                        .replace(/\s/g, '')}
                    </span>
                  </p>

                  <p className={orderDelivery_styles.mobile_order_data_row}>
                    <span className={orderDelivery_styles.mobile_order_label}>상품명/옵션:</span>
                    <span className={orderDelivery_styles.mobile_order_value}>
                      {product.name} - {product.option} (수량: {product.quantity}개)
                    </span>
                  </p>

                  <p className={orderDelivery_styles.mobile_order_data_row}>
                    <span className={orderDelivery_styles.mobile_order_label}>상품금액:</span>
                    <span className={orderDelivery_styles.mobile_order_value}>
                      {formatPrice(product.price * product.quantity)}
                    </span>
                  </p>

                  <p className={orderDelivery_styles.mobile_order_data_row}>
                    <span className={orderDelivery_styles.mobile_order_label}>진행상태:</span>
                    <span className={orderDelivery_styles.mobile_order_value}>
                      {getOrderStateText(order.state)}
                    </span>
                  </p>

                  <p className={orderDelivery_styles.mobile_order_data_row}>
                    <span className={orderDelivery_styles.mobile_order_label}>주문번호:</span>
                    <span className={orderDelivery_styles.mobile_order_value}>
                      {order.orderNumber || `ORDER-${order._id.toString().padStart(6, '0')}`}
                    </span>
                  </p>
                </div>
              ))}
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
