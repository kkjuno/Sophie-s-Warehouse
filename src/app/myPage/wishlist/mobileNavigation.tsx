import Link from 'next/link';
import wishlist_styles from '@/styles/myPage/wishlist.module.css';

export default function MobileNavigation() {
  return (
    <nav className={wishlist_styles.mobile_wishlist_nav}>
      <Link className={wishlist_styles.mobile_nav_item} href="#">
        주문/배송 조회
      </Link>
      <Link className={wishlist_styles.mobile_nav_item} href="#">
        지난 주문 조회
      </Link>
      <Link className={wishlist_styles.mobile_nav_item} href="#">
        취소/반품/교환
      </Link>
      <Link className={wishlist_styles.mobile_nav_item} href="#">
        찜 리스트
      </Link>
    </nav>
  );
}
