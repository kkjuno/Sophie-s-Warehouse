'use client';

import wishlist_styles from '@/styles/myPage/wishlist.module.css';
import styles from '@/styles/components/button.module.css';

export default function WebMembershipSection() {
  return (
    <section className={wishlist_styles.web_wishlist_membership_wrapper}>
      <div className={wishlist_styles.web_wishlist_membership}>
        <p className={wishlist_styles.web_wishlist_membership_name}>장유하님의</p>
        <button className={styles.inquiry_button}>조회</button>
      </div>
      <hr className={wishlist_styles.web_wishlist_membership_divider} />
      <div className={wishlist_styles.web_wishlist_stamp}>
        <p className={wishlist_styles.web_wishlist_label}>스탬프</p>
        <p className={wishlist_styles.web_wishlist_count}>0 개</p>
      </div>
      <hr className={wishlist_styles.web_wishlist_membership_divider} />
      <div className={wishlist_styles.web_wishlist_membership_point}>
        <p className={wishlist_styles.web_wishlist_membership_label}>통합 멤버십 포인트</p>
        <p className={wishlist_styles.web_wishlist_membership_point_count}>1,000 p</p>
        <p className={wishlist_styles.web_wishlist_membership_point_info}>
          상품 구매 후 구매 확정 시 직접 반영 됩니다.
        </p>
      </div>
    </section>
  );
}
