'use client';

import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';

export default function WebOrderList() {
  return (
    <section className={orderDelivery_styles.web_order_delivery_view_wrapper}>
      <h2 className={orderDelivery_styles.web_order_delivery_view_tit}>
        주문목록/배송조회 내역 총 0 건
      </h2>

      <div className={orderDelivery_styles.web_order_delivery_view_label_wrapper}>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>날짜/주문번호</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>상품명/옵션</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>상품금액</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>진행상태</p>
        <p className={orderDelivery_styles.web_order_delivery_view_label}>접수</p>
      </div>

      <ul className={orderDelivery_styles.web_order_delivery_view_list_wrapper}>
        <li className={orderDelivery_styles.web_order_delivery_view_list}>조회내역이 없습니다.</li>
      </ul>

      <hr className={orderDelivery_styles.web_order_delivery_view_list_divider} />
    </section>
  );
}
