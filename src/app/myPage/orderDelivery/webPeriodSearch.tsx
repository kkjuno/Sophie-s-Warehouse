'use client';

import React, { useState } from 'react';
import styles from '@/styles/components/button.module.css';
import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';

export default function WebPeriodSearch() {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('2025-06-01');
  const [endDate, setEndDate] = useState<string>('2025-07-31');

  // 기간 버튼 클릭 핸들러
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
  };

  // 조회 버튼 클릭 핸들러
  const handleSearch = () => {
    console.log('조회 시작');
    console.log('시작일:', startDate);
    console.log('종료일:', endDate);

    alert(`조회 기간: ${startDate} ~ ${endDate}`);
  };

  return (
    <section className={orderDelivery_styles.web_order_delivery_period_wrapper}>
      <h2 className={orderDelivery_styles.web_order_delivery_period_tit}>주문 배송 조회</h2>

      <div className={orderDelivery_styles.web_order_delivery_period_container}>
        <div className={orderDelivery_styles.web_order_delivery_period_box_sm_container}>
          <p className={orderDelivery_styles.web_order_delivery_period_text}>조회기간</p>
          <div className={orderDelivery_styles.web_order_delivery_period_box_sm_wrapper}>
            {['오늘', '7일', '15일', '1개월', '3개월', '1년'].map((label) => (
              <button
                key={label}
                className={`${orderDelivery_styles.web_order_delivery_period_box_sm} ${
                  selectedPeriod === label ? orderDelivery_styles.active : ''
                }`}
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
  );
}

function DateBox({ date, onChange }: { date: string; onChange: (date: string) => void }) {
  const dateInputRef = React.useRef<HTMLInputElement>(null);

  const handleCalendarClick = () => {
    console.log('캘린더 아이콘 클릭됨');
    if (dateInputRef.current) {
      console.log('input 요소 찾음, 클릭 시도');
      dateInputRef.current.focus();
      dateInputRef.current.click();
      try {
        if (
          'showPicker' in dateInputRef.current &&
          typeof dateInputRef.current.showPicker === 'function'
        ) {
          dateInputRef.current.showPicker();
        }
      } catch {
        console.log('showPicker 지원하지 않음');
      }
    } else {
      console.log('input 요소를 찾을 수 없음');
    }
  };

  return (
    <div className={orderDelivery_styles.web_order_delivery_period_box_lg}>
      <div style={{ position: 'relative' }}>
        <p className={orderDelivery_styles.web_order_delivery_period_text_calendar}>{date}</p>
        <input
          ref={dateInputRef}
          type="date"
          value={date}
          onChange={(e) => {
            console.log('날짜 변경됨:', e.target.value);
            onChange(e.target.value);
          }}
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
        d="M1 7H17M9 4V1M4 4V1M14 4V1M2 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V4C17 3.73478 16.8946 3.48043 16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17ZM5 10H5.01V10.01H5V10ZM9 10H9.01V10.01H9V10ZM13 10H13.01V10.01H13V10ZM5 14H5.01V14.01H5V14ZM9 14H9.01V14.01H9V14ZM13 14H13.01V14.01H13V14Z"
        stroke="#949494"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
