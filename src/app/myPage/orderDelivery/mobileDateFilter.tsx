'use client';

import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';
import styles from '@/styles/components/button.module.css';

export default function MobileDateFilter() {
  return (
    <div className={orderDelivery_styles.mobile_order_delivery}>
      <div className={orderDelivery_styles.mobile_order_delivery_container_lg}>
        <button className={orderDelivery_styles.mobile_order_delivery_arrow_button}>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.176092 0.1912C0.288878 0.0687746 0.441828 0 0.601308 0C0.760787 0 0.913737 0.0687746 1.02652 0.1912L4.00363 3.42372L6.98074 0.1912C7.09417 0.0722442 7.2461 0.00642175 7.40379 0.00790964C7.56149 0.00939752 7.71233 0.0780765 7.82384 0.199154C7.93536 0.320232 7.99861 0.484021 7.99998 0.655244C8.00135 0.826468 7.94073 0.991425 7.83117 1.11459L4.42885 4.8088C4.31606 4.93123 4.16311 5 4.00363 5C3.84415 5 3.6912 4.93123 3.57842 4.8088L0.176092 1.11459C0.0633405 0.992127 0 0.826055 0 0.652894C0 0.479733 0.0633405 0.313661 0.176092 0.1912Z"
              fill="#949494"
            />
          </svg>
        </button>
      </div>

      <div className={orderDelivery_styles.mobile_order_delivery_wrapper}>
        <div className={orderDelivery_styles.mobile_order_delivery_container_sm}>
          <button className={orderDelivery_styles.mobile_order_delivery_calendar_button}>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <span className={orderDelivery_styles.mobile_order_delivery_period}>~</span>
        <div className={orderDelivery_styles.mobile_order_delivery_container_sm}>
          <button className={orderDelivery_styles.mobile_order_delivery_calendar_button}>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <button className={styles.inquiry_button}>조회</button>
      </div>
    </div>
  );
}
