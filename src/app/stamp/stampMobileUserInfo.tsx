'use client';
import stamp_page_styles from '@/styles/stamp/stamp.module.css';
import Image from 'next/image';
export default function StampMobileUserInfo() {
  return (
    <>
      <div className={stamp_page_styles.mobile_user_info_wrapper}>
        <span className={stamp_page_styles.mobile_hello}>안녕하세요</span>{' '}
        <span className={stamp_page_styles.mobile_user_name}>김진섭 회원님</span>
      </div>
      <span className={stamp_page_styles.mobile_now_stamp_count}>현재 스탬프 개수 : 8개</span>
      <div className={stamp_page_styles.mobile_blackbean_image_wrapper}>
        <Image src="/images/stampImages/stamp-blackbean-image.svg" fill alt="숯검댕이 이미지" />
      </div>
    </>
  );
}
