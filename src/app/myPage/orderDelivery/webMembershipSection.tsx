'use client';

import styles from '@/styles/components/button.module.css';
import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';

export default function WebMembershipSection() {
  return (
    <section className={orderDelivery_styles.web_order_delivery_membership_wrapper}>
      <div className={orderDelivery_styles.web_order_delivery_membership}>
        <p className={orderDelivery_styles.web_order_delivery_membership_name}>장유하님의</p>
        <button className={styles.inquiry_button}>조회</button>
      </div>
      <hr className={orderDelivery_styles.web_order_delivery_membership_divider} />
      <div className={orderDelivery_styles.web_order_delivery_stamp}>
        <p className={orderDelivery_styles.web_order_delivery_label}>스탬프</p>
        <p className={orderDelivery_styles.web_order_delivery_count}>0 개</p>
      </div>
      <hr className={orderDelivery_styles.web_order_delivery_membership_divider} />
      <div className={orderDelivery_styles.web_order_delivery_membership_point}>
        <p className={orderDelivery_styles.web_order_delivery_membership_label}>
          통합 멤버십 포인트
        </p>
        <p className={orderDelivery_styles.web_order_delivery_membership_point_count}>1,000 p</p>
        <p className={orderDelivery_styles.web_order_delivery_membership_point_info}>
          상품 구매 후 구매 확정 시 직접 반영 됩니다.
        </p>
      </div>
    </section>
  );
}
