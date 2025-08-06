'use client';
import rewardsStyles from '@/styles/myPage/rewards/rewards.module.css';
import styles from '@/styles/components/button.module.css';
import { getToday, getPastDate } from '@/app/myPage/rewards/dateUtils';

interface Props {
  startDate: string;
  endDate: string;
  setStartDate: (v: string) => void;
  setEndDate: (v: string) => void;
}

export default function WebLotteryFilter({ startDate, endDate, setStartDate, setEndDate }: Props) {
  return (
    <div className={rewardsStyles.web_view_lottery_result_section}>
      <h2>당첨 내역 조회</h2>
      <hr className={rewardsStyles.web_lottery_main_bottom_line} />
      <div className={rewardsStyles.web_view_lottery_result}>
        <span>조회기간</span>
        <div className={rewardsStyles.web_view_lottery_day_wrapper}>
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
          <button type="button" onClick={() => setEndDate(getPastDate(startDate, { day: 7 }))}>
            7일
          </button>
          <button type="button" onClick={() => setEndDate(getPastDate(startDate, { day: 15 }))}>
            15일
          </button>
          <button type="button" onClick={() => setEndDate(getPastDate(startDate, { month: 1 }))}>
            1개월
          </button>
          <button type="button" onClick={() => setEndDate(getPastDate(startDate, { month: 3 }))}>
            3개월
          </button>
          <button type="button" onClick={() => setEndDate(getPastDate(startDate, { year: 1 }))}>
            1년
          </button>
        </div>
        <div className={rewardsStyles.web_view_lottery_day_result_wrapper}>
          <div className={rewardsStyles.web_view_lottery_day_first}>
            <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className={rewardsStyles.web_view_lottery_day_second}>
            <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <button
            type="button"
            className={`${styles.inquiry_button} ${rewardsStyles.view_rewards_button}`}
          >
            조회
          </button>
        </div>
      </div>
    </div>
  );
}
