'use client';
import rewards_page_styles from '@/styles/myPage/rewards/rewards.module.css';
import styles from '@/styles/components/button.module.css'; // 버튼 컴포넌트 css
import Image from 'next/image';
import { useState } from 'react';

export default function Rewards() {
  const [startDate, setStartDate] = useState(getToday());
  const [endDate, setEndDate] = useState(getToday());

  // 오늘 날짜 반환
  function getToday() {
    return formatDate(new Date());
  }

  // 날짜 → YYYYMMDD 로 반환하는 함수
  function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }

  // 기준일로부터 날짜 계산
  function getNewDate(baseDateStr: string, plus: { day?: number; month?: number; year?: number }) {
    const year = parseInt(baseDateStr.slice(0, 4), 10);
    const month = parseInt(baseDateStr.slice(4, 6), 10) - 1; // JS는 0부터 시작
    const day = parseInt(baseDateStr.slice(6, 8), 10);

    const base = new Date(year, month, day);

    if (plus.day) base.setDate(base.getDate() + plus.day);
    if (plus.month) base.setMonth(base.getMonth() + plus.month);
    if (plus.year) base.setFullYear(base.getFullYear() + plus.year);

    return formatDate(base);
  }

  return (
    <>
      <div className={rewards_page_styles.root_header}>
        <div className={rewards_page_styles.user_info_section}>
          <div className={rewards_page_styles.user_info_wrapper}>
            <Image src="/images/sprout-image.svg" width={45} height={35} alt="새싹 이미지" />
            <span className={rewards_page_styles.user_info}>
              <span className={rewards_page_styles.user_name}>김진섭</span>님의 당첨내역
            </span>
          </div>
          <div className={rewards_page_styles.user_result_wrapper}>
            <div className={rewards_page_styles.have_stamp}>
              <span className={rewards_page_styles.have_stamp_text}>보유중인 스탬프</span>
              <span className={rewards_page_styles.have_stamp_count}>0개</span>
            </div>
            <div className={rewards_page_styles.get_gift}>
              <span className={rewards_page_styles.get_gift_text}>수령한 상품</span>
              <span className={rewards_page_styles.get_gift_count}>0개</span>
            </div>
          </div>
        </div>
        <div className={rewards_page_styles.view_lottery_result_section}>
          <h2>당첨 내역 조회</h2>
          <hr className={rewards_page_styles.lottery_main_bottom_line} />
          <div className={rewards_page_styles.view_lottery_result}>
            <span>조회기간</span>
            <div className={rewards_page_styles.view_lottery_day_wrapper}>
              <button
                type="button"
                onClick={() => {
                  const today = getToday();
                  setStartDate(today);
                  setEndDate(today);
                }}
              >
                오늘
              </button>
              <button type="button" onClick={() => setEndDate(getNewDate(startDate, { day: 7 }))}>
                7일
              </button>
              <button type="button" onClick={() => setEndDate(getNewDate(startDate, { day: 15 }))}>
                15일
              </button>
              <button type="button" onClick={() => setEndDate(getNewDate(startDate, { month: 1 }))}>
                1개월
              </button>
              <button type="button" onClick={() => setEndDate(getNewDate(startDate, { month: 3 }))}>
                3개월
              </button>
              <button type="button" onClick={() => setEndDate(getNewDate(startDate, { year: 1 }))}>
                1년
              </button>
            </div>

            <div className={rewards_page_styles.view_lottery_day_result_wrapper}>
              <div className={rewards_page_styles.view_lottery_day_first}>
                <input
                  type="text"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className={rewards_page_styles.view_lottery_day_second}>
                <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              </div>
              <button type="button" className={styles.inquiry_button}>
                조회
              </button>
            </div>
          </div>
        </div>
        <div className={rewards_page_styles.lottery_result_section}>
          <h2>당첨 내역</h2>
          <div className={rewards_page_styles.lottery_result_header}>
            <div>날짜/당첨번호</div>
            <div>상품명/옵션</div>
            <div>상품금액</div>
            <div>진행상태</div>
            <div>주문날짜</div>
          </div>

          {/* 반복 렌더링되는 부분 */}
          <div className={rewards_page_styles.lottery_result_row}>
            <div>2025/07/10</div>
            <div className={rewards_page_styles.item_name}>
              [제로] 치히로의 행방불명의 흰여고(...)
            </div>
            <div>16,000원</div>
            <div>주문완료</div>
            <div>2025/07/10</div>
          </div>
        </div>
      </div>
    </>
  );
}
