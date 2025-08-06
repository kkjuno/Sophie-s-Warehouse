'use client';

import React, { useState, useEffect, useTransition, useCallback } from 'react';
import { searchOrders } from '@/data/actions/order';
import { Order } from '@/types/order';
import useUserStore from '@/zustand/userStore';
import styles from '@/styles/components/button.module.css';
import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';
import { useActionState } from 'react';

export default function OrderDeliveryView() {
  // 검색 관련 상태
  const [selectedPeriod, setSelectedPeriod] = useState<string>('오늘');
  const [searchedPeriod, setSearchedPeriod] = useState<string>(''); // 조회 완료된 기간
  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState<string>(today);
  const [endDate, setEndDate] = useState<string>(today);

  // 주문 목록 관련 상태
  const [orderState, formAction] = useActionState(searchOrders, null);
  const [allOrders, setAllOrders] = useState<Order[]>([]); // 전체 주문 데이터
  const [orders, setOrders] = useState<Order[]>([]); // 필터링된 주문 데이터
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const { user } = useUserStore();

  // 날짜 필터링 함수
  const filterOrdersByDate = useCallback((ordersData: Order[], start: string, end: string) => {
    if (!start || !end) {
      setOrders(ordersData);
      setTotalCount(ordersData.length);
      return;
    }

    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    // 종료일에 23:59:59 추가하여 해당 날짜 전체 포함
    endDateObj.setHours(23, 59, 59, 999);

    const filteredOrders = ordersData.filter((order) => {
      const orderDate = new Date(order.createdAt);
      return orderDate >= startDateObj && orderDate <= endDateObj;
    });

    setOrders(filteredOrders);
    setTotalCount(filteredOrders.length);
  }, []);

  // API 응답 처리
  useEffect(() => {
    if (orderState?.ok) {
      setAllOrders(orderState.item.orders);
      // 날짜 필터링 적용
      filterOrdersByDate(orderState.item.orders, startDate, endDate);
      // 조회 완료된 기간 설정
      setSearchedPeriod(selectedPeriod);
    } else if (orderState?.message) {
      alert(orderState.message);
      setAllOrders([]);
      setOrders([]);
      setTotalCount(0);
      setSearchedPeriod(''); // 조회 실패시 초기화
    }
    setLoading(false);
  }, [orderState, filterOrdersByDate, startDate, endDate, selectedPeriod]);

  // 날짜가 변경될 때마다 필터링 재적용
  useEffect(() => {
    if (allOrders.length > 0) {
      filterOrdersByDate(allOrders, startDate, endDate);
    }
  }, [startDate, endDate, allOrders, filterOrdersByDate]);

  // 오늘 주문 내역 자동 조회
  useEffect(() => {
    if (isInitialLoad && user?.token?.accessToken) {
      setLoading(true);
      const formData = new FormData();
      formData.append('token', user.token.accessToken);
      formData.append('startDate', today);
      formData.append('endDate', today);
      formData.append('page', '1');
      formData.append('limit', '100');

      startTransition(() => {
        formAction(formData);
      });
      setIsInitialLoad(false);
    }
  }, [user?.token?.accessToken, today, formAction, isInitialLoad, startTransition]);

  // 기간 버튼 클릭 핸들러
  const handlePeriodClick = (period: string) => {
    setSelectedPeriod(period);

    const todayDate = new Date();
    const endDateStr = todayDate.toISOString().split('T')[0];

    let startDateStr = '';
    switch (period) {
      case '오늘':
        startDateStr = endDateStr;
        break;
      case '7일':
        startDateStr = new Date(todayDate.getTime() - 6 * 24 * 60 * 60 * 1000) // 오늘 포함 7일
          .toISOString()
          .split('T')[0];
        break;
      case '15일':
        startDateStr = new Date(todayDate.getTime() - 14 * 24 * 60 * 60 * 1000) // 오늘 포함 15일
          .toISOString()
          .split('T')[0];
        break;
      case '1개월':
        startDateStr = new Date(todayDate.getTime() - 29 * 24 * 60 * 60 * 1000) // 오늘 포함 30일
          .toISOString()
          .split('T')[0];
        break;
      case '3개월':
        startDateStr = new Date(todayDate.getTime() - 89 * 24 * 60 * 60 * 1000) // 오늘 포함 90일
          .toISOString()
          .split('T')[0];
        break;
      case '1년':
        startDateStr = new Date(todayDate.getTime() - 364 * 24 * 60 * 60 * 1000) // 오늘 포함 365일
          .toISOString()
          .split('T')[0];
        break;
      default:
        return;
    }

    setStartDate(startDateStr);
    setEndDate(endDateStr);
  };

  // 조회 버튼 클릭 핸들러
  const handleSearch = () => {
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

  // 버튼 스타일
  const getButtonClassName = (label: string) => {
    let className = orderDelivery_styles.web_order_delivery_period_box_sm;

    // 현재 선택된 기간
    if (selectedPeriod === label) {
      className += ` ${orderDelivery_styles.active}`;
    }

    // 조회 완료된 기간
    if (searchedPeriod === label && searchedPeriod !== '') {
      className += ` ${orderDelivery_styles.searched}`;
    }

    return className;
  };

  return (
    <div>
      {/* 검색 섹션 */}
      <section className={orderDelivery_styles.web_order_delivery_period_wrapper}>
        <h2 className={orderDelivery_styles.web_order_delivery_period_tit}>주문 배송 조회</h2>

        <div className={orderDelivery_styles.web_order_delivery_period_container}>
          <div className={orderDelivery_styles.web_order_delivery_period_box_sm_container}>
            <p className={orderDelivery_styles.web_order_delivery_period_text}>조회기간</p>
            <div className={orderDelivery_styles.web_order_delivery_period_box_sm_wrapper}>
              {['오늘', '7일', '15일', '1개월', '3개월', '1년'].map((label) => (
                <button
                  key={label}
                  className={getButtonClassName(label)}
                  onClick={() => handlePeriodClick(label)}
                >
                  <p className={orderDelivery_styles.web_order_delivery_period_text}>{label}</p>
                </button>
              ))}
            </div>
          </div>

          <div className={orderDelivery_styles.web_order_delivery_period_box_lg_container}>
            <div className={orderDelivery_styles.web_order_delivery_period_box_lg_wrapper}>
              <DateBox date={startDate} onChange={setStartDate} />
              <span className={orderDelivery_styles.web_order_delivery_period_text_point}>~</span>
              <DateBox date={endDate} onChange={setEndDate} />
            </div>
            <button className={styles.inquiry_button} onClick={handleSearch}>
              조회
            </button>
          </div>
        </div>
      </section>

      {/* 결과 섹션 */}
      <section className={orderDelivery_styles.web_order_delivery_view_wrapper}>
        <h2 className={orderDelivery_styles.web_order_delivery_view_tit}>
          주문목록/배송조회 내역 총 {loading || isPending ? '-' : totalCount} 건
        </h2>

        <div className={orderDelivery_styles.web_order_delivery_view_label_wrapper}>
          <p className={orderDelivery_styles.web_order_delivery_view_label}>주문날짜</p>
          <p className={orderDelivery_styles.web_order_delivery_view_label}>상품명/옵션</p>
          <p className={orderDelivery_styles.web_order_delivery_view_label}>상품금액</p>
          <p className={orderDelivery_styles.web_order_delivery_view_label}>진행상태</p>
          <p className={orderDelivery_styles.web_order_delivery_view_label}>주문번호</p>
        </div>

        <ul className={orderDelivery_styles.web_order_delivery_view_list_wrapper}>
          {loading || isPending ? (
            <li className={orderDelivery_styles.web_order_delivery_view_list}>조회 중...</li>
          ) : orders.length === 0 ? (
            <li className={orderDelivery_styles.web_order_delivery_view_list}>
              선택한 기간에 주문내역이 없습니다.
            </li>
          ) : (
            orders.map((order) => (
              <li
                key={order._id}
                className={orderDelivery_styles.web_order_delivery_view_data_wrapper}
              >
                {order.products.map((product, index) => (
                  <div key={index} className={orderDelivery_styles.web_order_delivery_view_data}>
                    <p className={orderDelivery_styles.web_order_delivery_view_data_label}>
                      {new Date(order.createdAt)
                        .toLocaleDateString('ko-KR', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        })
                        .replace(/\./g, '.')
                        .replace(/\s/g, '')}
                    </p>
                    <p className={orderDelivery_styles.web_order_delivery_view_data_label}>
                      {product.name} - {product.option} (수량: {product.quantity}개)
                    </p>
                    <p className={orderDelivery_styles.web_order_delivery_view_data_label}>
                      {formatPrice(product.price * product.quantity)}
                    </p>
                    <p className={orderDelivery_styles.web_order_delivery_view_data_label}>
                      {getOrderStateText(order.state)}
                    </p>
                    <p className={orderDelivery_styles.web_order_delivery_view_data_label}>
                      {order.orderNumber || `ORDER-${order._id.toString().padStart(6, '0')}`}
                    </p>
                  </div>
                ))}
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
}

function DateBox({ date, onChange }: { date: string; onChange: (date: string) => void }) {
  const dateInputRef = React.useRef<HTMLInputElement>(null);

  const handleCalendarClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.focus();
      try {
        if (
          'showPicker' in dateInputRef.current &&
          typeof dateInputRef.current.showPicker === 'function'
        ) {
          dateInputRef.current.showPicker();
        }
      } catch {
        // showPicker 미지원 브라우저
      }
    }
  };

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${year}.${month}.${day}`;
  };

  return (
    <div className={orderDelivery_styles.web_order_delivery_period_box_lg}>
      <div style={{ position: 'relative' }}>
        <p className={orderDelivery_styles.web_order_delivery_period_text_calendar}>
          {formatDisplayDate(date)}
        </p>
        <input
          ref={dateInputRef}
          type="date"
          value={date}
          onChange={(e) => onChange(e.target.value)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
            zIndex: 1,
          }}
        />
      </div>
      <button
        className={orderDelivery_styles.web_order_delivery_period_calendar_button}
        onClick={handleCalendarClick}
        type="button"
      >
        <CalendarIcon />
      </button>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 7H17M9 4V1M4 4V1M14 4V1M2 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V4C17 3.73478 16.8946 3.48043 16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17ZM5 10H5.01V10.01H5V10ZM9 10H9.01V10.01H9V10ZM13 10H13.01V10.01H9V10ZM5 14H5.01V14.01H5V14ZM9 14H9.01V14.01H9V14ZM13 14H13.01V14.01H13V14Z"
        stroke="#949494"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
