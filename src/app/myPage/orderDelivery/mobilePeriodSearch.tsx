'use client';

import React, { useState } from 'react';
import styles from '@/styles/components/button.module.css';
import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';

export default function MobilePeriodSearch() {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('2025-06-01');
  const [endDate, setEndDate] = useState<string>('2025-07-31');
  const [showPeriodDropdown, setShowPeriodDropdown] = useState<boolean>(false);

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

    // 커스텀 이벤트 발생시켜서 WebOrderList에 알림
    const searchEvent = new CustomEvent('orderSearch', {
      detail: { startDate, endDate },
    });
    window.dispatchEvent(searchEvent);
  };

  return (
    <div className={orderDelivery_styles.mobile_order_delivery}>
      {/* 기간 선택 드롭다운 */}
      <div className={orderDelivery_styles.mobile_order_delivery_container_lg}>
        <button
          className={orderDelivery_styles.mobile_order_delivery_arrow_button}
          onClick={() => setShowPeriodDropdown(!showPeriodDropdown)}
        >
          <span>{selectedPeriod || '기간 선택'}</span>
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
                  selectedPeriod === period ? orderDelivery_styles.mobile_dropdown_item_active : ''
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
        <MobileDateBox date={startDate} onChange={setStartDate} />

        <span className={orderDelivery_styles.mobile_order_delivery_period}>~</span>

        {/* 종료 날짜 */}
        <MobileDateBox date={endDate} onChange={setEndDate} />

        <button className={styles.inquiry_button} onClick={handleSearch}>
          조회
        </button>
      </div>
    </div>
  );
}

// 모바일용 DateBox 컴포넌트
function MobileDateBox({ date, onChange }: { date: string; onChange: (date: string) => void }) {
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
    <div
      className={`${orderDelivery_styles.mobile_order_delivery_container_sm} ${orderDelivery_styles.mobile_date_container}`}
    >
      <div className={orderDelivery_styles.mobile_date_wrapper}>
        <span className={orderDelivery_styles.mobile_order_delivery_period}>{date}</span>
        <input
          ref={dateInputRef}
          type="date"
          value={date}
          onChange={(e) => {
            console.log('날짜 변경됨:', e.target.value);
            onChange(e.target.value);
          }}
          className={orderDelivery_styles.mobile_date_input}
        />
      </div>
      <button
        className={orderDelivery_styles.mobile_order_delivery_calendar_button}
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
