'use client';

import cancelReturnExchange_styles from '@/styles/myPage/cancelReturnExchange.module.css';
import styles from '@/styles/components/button.module.css';

export default function WebPeriodSearch() {
  return (
    <section className={cancelReturnExchange_styles.web_order_delivery_period_wrapper}>
      <h2 className={cancelReturnExchange_styles.web_order_delivery_period_tit}>
        취소/반품/교환 내역
      </h2>
      <div className={cancelReturnExchange_styles.web_order_delivery_period_container}>
        <div className={cancelReturnExchange_styles.web_order_delivery_period_box_sm_container}>
          <p className={cancelReturnExchange_styles.web_order_delivery_period_text}>조회기간</p>
          <div className={cancelReturnExchange_styles.web_order_delivery_period_box_sm_wrapper}>
            {['오늘', '7일', '15일', '1개월', '3개월', '1년'].map((label) => (
              <button
                key={label}
                className={cancelReturnExchange_styles.web_order_delivery_period_box_sm}
              >
                <p className={cancelReturnExchange_styles.web_order_delivery_period_text}>
                  {label}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className={cancelReturnExchange_styles.web_order_delivery_period_box_lg_container}>
          <div className={cancelReturnExchange_styles.web_order_delivery_period_box_lg_wrapper}>
            <div className={cancelReturnExchange_styles.web_order_delivery_period_box_lg}>
              <p className={cancelReturnExchange_styles.web_order_delivery_period_text_calendar}>
                2025-07-01
              </p>
              <button
                className={cancelReturnExchange_styles.web_order_delivery_period_calendar_button}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H17M9 4V1M4 4V1M14 4V1M2 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V4C17 3.73478 16.8946 3.48043 16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17ZM5 10H5.01V10.01H5V10ZM9 10H9.01V10.01H9V10ZM13 10H13.01V10.01H13V10ZM5 14H5.01V14.01H5V14ZM9 14H9.01V14.01H9V14ZM13 14H13.01V14.01H13V14Z"
                    stroke="#949494"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <span className={cancelReturnExchange_styles.web_order_delivery_period_text_point}>
              ~
            </span>
            <div className={cancelReturnExchange_styles.web_order_delivery_period_box_lg}>
              <p className={cancelReturnExchange_styles.web_order_delivery_period_text_calendar}>
                2025-07-21
              </p>
              <button
                className={cancelReturnExchange_styles.web_order_delivery_period_calendar_button}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H17M9 4V1M4 4V1M14 4V1M2 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V4C17 3.73478 16.8946 3.48043 16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17ZM5 10H5.01V10.01H5V10ZM9 10H9.01V10.01H9V10ZM13 10H13.01V10.01H13V10ZM5 14H5.01V14.01H5V14ZM9 14H9.01V14.01H9V14ZM13 14H13.01V14.01H13V14Z"
                    stroke="#949494"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button className={`${styles.inquiry_button} `}>조회</button>
        </div>
      </div>
    </section>
  );
}
