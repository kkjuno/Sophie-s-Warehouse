'use client';

import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';

export default function WebMembershipSection() {
  return (
    <section className={orderDelivery_styles.web_order_delivery_membership_wrapper}>
      <div className={orderDelivery_styles.web_order_delivery_membership}>
        <p className={orderDelivery_styles.web_order_delivery_membership_name}>장유하님의</p>
        <p className={orderDelivery_styles.web_order_delivery_membership_name}>혜택 관리</p>
      </div>
      <hr className={orderDelivery_styles.web_order_delivery_membership_divider} />
      <div className={orderDelivery_styles.web_order_delivery_stamp}>
        <p className={orderDelivery_styles.web_order_delivery_label}>스탬프</p>
        <p className={orderDelivery_styles.web_order_delivery_count}>0 개</p>
      </div>
      <hr className={orderDelivery_styles.web_order_delivery_membership_divider} />
      <div className={orderDelivery_styles.web_order_delivery_membership_point}>
        <p className={orderDelivery_styles.web_order_delivery_membership_label}>당첨내역</p>
        <p className={orderDelivery_styles.web_order_delivery_membership_point_count}>0 건</p>
        <p className={orderDelivery_styles.web_order_delivery_membership_point_info}>
          상품 당첨 후 구매 확정 시 직접 반영 됩니다.
        </p>
      </div>
    </section>
  );
}
