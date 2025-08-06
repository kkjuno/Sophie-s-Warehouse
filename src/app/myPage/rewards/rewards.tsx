'use client';

import { useState } from 'react';
import { getToday } from '@/app/myPage/rewards/dateUtils';

// 모바일 컴포넌트
import MobileUserInfo from '@/app/myPage/rewards/mobileUserInfo';
import MobileLotteryFilter from '@/app/myPage/rewards/mobileLotteryFilter';
import MobileLotteryResults from '@/app/myPage/rewards/mobileLotteryResults';

// 웹 컴포넌트
import WebAsideMenu from '@/app/myPage/orderDelivery/webAsideMenu';
import WebUserInfo from '@/app/myPage/rewards/webUserInfo';
import WebLotteryFilter from '@/app/myPage/rewards/webLotteryFilter';
import WebLotteryResults from '@/app/myPage/rewards/webLotteryResults';

import rewardsStyles from '@/styles/myPage/rewards/rewards.module.css';

export default function RewardsPage() {
  const [startDate, setStartDate] = useState(getToday());
  const [endDate, setEndDate] = useState(getToday());

  return (
    <>
      {/*  모바일 뷰 */}
      <div className={rewardsStyles.mobile_root_header}>
        <MobileUserInfo />
        <MobileLotteryFilter
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <MobileLotteryResults />
      </div>

      {/* 웹 뷰 */}
      <div className={rewardsStyles.web_root_header}>
        {/* 상단 경로 표시 */}
        <div className={rewardsStyles.web_root_path}>
          HOME &gt; 마이페이지 &gt; 혜택관리 &gt;{' '}
          <span className={rewardsStyles.web_recent_path}>당첨내역</span>
        </div>

        {/* 웹 페이지 본문 */}
        <div className={rewardsStyles.web_main_page_section}>
          <WebAsideMenu />
          <div className={rewardsStyles.web_main_page_wrapper}>
            <WebUserInfo />
            <WebLotteryFilter
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
            <WebLotteryResults />
          </div>
        </div>
      </div>
    </>
  );
}
