// components/myPage/cancelReturnExchange/WebOrderList.tsx
'use client';

import styles from '@/styles/myPage/cancelReturnExchange.module.css';

export default function WebOrderList() {
  return (
    <section className={styles.web_order_delivery_view_wrapper}>
      <h2 className={styles.web_order_delivery_view_tit}>주문목록/배송조회 내역 총 0 건</h2>
      <div className={styles.web_order_delivery_view_label_wrapper}>
        <p className={styles.web_order_delivery_view_label}>날짜/주문번호</p>
        <p className={styles.web_order_delivery_view_label}>상품명/옵션</p>
        <p className={styles.web_order_delivery_view_label}>상품금액</p>
        <p className={styles.web_order_delivery_view_label}>진행상태</p>
        <p className={styles.web_order_delivery_view_label}>접수</p>
      </div>
      <ul className={styles.web_order_delivery_view_list_wrapper}>
        <li className={styles.web_order_delivery_view_list}>조회내역이 없습니다.</li>
      </ul>
      <hr className={styles.web_order_delivery_view_list_divider} />
    </section>
  );
}
