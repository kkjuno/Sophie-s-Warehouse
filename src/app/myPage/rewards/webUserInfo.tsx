'use client';
import wishlistStyles from '@/styles/myPage/wishlist.module.css';
import rewardsStyles from '@/styles/myPage/rewards/rewards.module.css';
import useUserStore from '@/zustand/userStore';

export default function WebUserInfo() {
  const user = useUserStore((state) => state.user);
  const userName = user?.name ?? '회원';
  const userStamp = user?.extra?.stamp ?? '0개';
  return (
    <section className={wishlistStyles.web_wishlist_membership_wrapper}>
      <div className={wishlistStyles.web_wishlist_membership}>
        <p className={wishlistStyles.web_wishlist_membership_name}>{userName}님의</p>
        <div className={rewardsStyles.benefit_text}>혜택관리</div>
      </div>
      <hr className={wishlistStyles.web_wishlist_membership_divider} />
      <div className={wishlistStyles.web_wishlist_stamp}>
        <p className={wishlistStyles.web_wishlist_label}>스탬프</p>
        <p className={wishlistStyles.web_wishlist_count}>{userStamp} 개</p>
      </div>
      <hr className={wishlistStyles.web_wishlist_membership_divider} />
      <div className={wishlistStyles.web_wishlist_membership_point}>
        <p className={wishlistStyles.web_wishlist_membership_label}>통합 멤버십 포인트</p>
        <p className={wishlistStyles.web_wishlist_membership_point_count}>1,000 p</p>
        <p className={wishlistStyles.web_wishlist_membership_point_info}>
          상품 구매 후 구매 확정 시 직접 반영 됩니다.
        </p>
      </div>
    </section>
  );
}
