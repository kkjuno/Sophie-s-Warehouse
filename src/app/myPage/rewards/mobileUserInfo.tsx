import Image from 'next/image';
import rewardsStyles from '@/styles/myPage/rewards/rewards.module.css';
import useUserStore from '@/zustand/userStore';

export default function MobileUserInfo() {
  const user = useUserStore((state) => state.user);
  const userName = user?.name ?? '회원';
  const userStamp = user?.extra?.stamp ?? '0개';
  return (
    <div className={rewardsStyles.mobile_user_info_section}>
      <div className={rewardsStyles.mobile_user_info_wrapper}>
        <Image src="/images/sprout-image.svg" width={45} height={35} alt="새싹 이미지" />
        <span className={rewardsStyles.mobile_user_info}>
          <span className={rewardsStyles.mobile_user_name}>{userName}</span>님의 당첨내역
        </span>
      </div>
      <div className={rewardsStyles.mobile_user_result_wrapper}>
        <div className={rewardsStyles.mobile_have_stamp}>
          <span className={rewardsStyles.mobile_have_stamp_text}>보유중인 스탬프</span>
          <span className={rewardsStyles.mobile_have_stamp_count}>{userStamp}개</span>
        </div>
        <div className={rewardsStyles.mobile_get_gift}>
          <span className={rewardsStyles.mobile_get_gift_text}>수령한 상품</span>
          <span className={rewardsStyles.mobile_get_gift_count}>0개</span>
        </div>
      </div>
    </div>
  );
}
