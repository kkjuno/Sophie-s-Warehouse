'use client';
import stamp_page_styles from '@/styles/stamp/stamp.module.css';
import Image from 'next/image';
import { useState } from 'react';
import StampMobileToast from '@/app/myPage/stamp/stampMobileToast';

export default function StampMobileBoard() {
  const [openToast, SetopenToast] = useState(false);

  return (
    <>
      {/* 스탬프 보드 이미지 */}
      <div className={stamp_page_styles.mobile_stamp_image_wrapper}>
        <Image src="/images/stampImages/stamp-image.svg" alt="스탬프 이미지" fill />
      </div>

      {/* 스탬프 더 모으기 영역 */}
      <div className={stamp_page_styles.mobile_stamp_link_image_wrapper}>
        <div className={stamp_page_styles.mobile_stamp_more_image_wrapper}>
          <Image
            src="/images/stampImages/stamp-more-image.svg"
            alt="스탬프 더 모으기 이미지"
            fill
          />
          <div className={stamp_page_styles.mobile_stamp_image_overlay}></div>
          <div className={stamp_page_styles.mobile_stamp_guide_text}>
            <span className={stamp_page_styles.mobile_stamp_guide_text_title}>
              스탬프가 부족하신가요?
            </span>
            <span className={stamp_page_styles.mobile_stamp_guide_text_sub_title}>
              지금 바로 스탬프 모으러 가기 &gt;
            </span>
          </div>
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => {
            if (!openToast) {
              SetopenToast(true);
            }
          }}
          className={stamp_page_styles.mobile_stamp_gacha_image_wrapper}
        >
          <Image
            src="/images/stampImages/stamp-gacha-image.svg"
            width={166}
            height={124}
            alt="스탬프 가챠 이미지"
          />
          <div className={stamp_page_styles.mobile_stamp_image_overlay}></div>
          <div className={stamp_page_styles.mobile_stamp_guide_text}>
            <span className={stamp_page_styles.mobile_stamp_guide_text_title}>
              스탬프를 다 모으셨나요?
            </span>
            <span className={stamp_page_styles.mobile_stamp_guide_text_sub_title}>
              지금 바로 뽑기 가기 &gt;
            </span>
          </div>
        </div>
        {openToast && <StampMobileToast onClose={() => SetopenToast(false)} />}
      </div>
    </>
  );
}
