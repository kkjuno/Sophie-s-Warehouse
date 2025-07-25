'use client';

import Link from 'next/link';
import styles from '@/styles/myPage/cancelReturnExchange.module.css';

export default function MobileNavigation() {
  return (
    <nav className={styles.mobile_order_delivery_nav}>
      <Link className={styles.mobile_nav_item} href="#">
        주문/배송 조회
      </Link>
      <Link className={styles.mobile_nav_item} href="#">
        지난 주문 조회
      </Link>
      <Link className={styles.mobile_nav_item} href="#">
        취소/반품/교환
      </Link>
      <Link className={styles.mobile_nav_item} href="#">
        찜 리스트
      </Link>
    </nav>
  );
}
