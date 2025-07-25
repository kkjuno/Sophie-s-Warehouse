'use client';

import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';

export default function WebBreadcrumb() {
  return (
    <div
      className={orderDelivery_styles.web_order_delivery_navigation}
      aria-label="현재 위치"
      role="navigation"
    >
      <p className={orderDelivery_styles.web_order_delivery_current_page}>
        HOME &nbsp; &gt; &nbsp; 마이페이지 &nbsp; &gt; &nbsp; 쇼핑 정보 &nbsp; &gt; &nbsp;
        <span className={orderDelivery_styles.web_order_delivery_navigation_current}>
          주문/배송 조회
        </span>
      </p>
    </div>
  );
}
