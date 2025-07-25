'use client';

import Link from 'next/link';
import MobileDateFilter from './mobileDateFilter';
import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';

export default function MobileOrderDelivery() {
  return (
    <>
      <nav className={orderDelivery_styles.mobile_order_delivery_nav}>
        <Link className={orderDelivery_styles.mobile_nav_item} href="#">
          주문/배송 조회
        </Link>
        <Link className={orderDelivery_styles.mobile_nav_item} href="#">
          지난 주문 조회
        </Link>
        <Link className={orderDelivery_styles.mobile_nav_item} href="#">
          취소/반품/교환
        </Link>
        <Link className={orderDelivery_styles.mobile_nav_item} href="#">
          찜 리스트
        </Link>
      </nav>

      <div className={orderDelivery_styles.mobile_order_delivery_page}>
        <MobileDateFilter />
        <hr className={orderDelivery_styles.mobile_order_delivery_divider} />
        <ul className={orderDelivery_styles.mobile_order_delivery_view_list_wrapper}>
          <li className={orderDelivery_styles.mobile_order_delivery_view_list}>
            조회내역이 없습니다.
          </li>
        </ul>
      </div>
    </>
  );
}
