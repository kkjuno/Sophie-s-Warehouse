import stamp_page_styles from '@/styles/stamp/stamp.module.css';
import Image from 'next/image';
export default function stampPage() {
  return (
    <>
      <div className={stamp_page_styles.root_section}>
        <div className={stamp_page_styles.user_info_section}>
          <div className={stamp_page_styles.user_info_wrapper}>
            <span className={stamp_page_styles.hello}>안녕하세요</span>{' '}
            <span className={stamp_page_styles.user_name}>김진섭 회원님</span>
          </div>
          <span className={stamp_page_styles.now_stamp_count}>현재 스탬프 개수 : 8개</span>
          <div className={stamp_page_styles.blackbean_image_wrapper}>
            <Image
              src="/images/stamp-images/stamp-blackbean-image.svg"
              fill
              alt="숯검댕이 이미지"
            />
          </div>
        </div>
        <div className={stamp_page_styles.stamp_image_wrapper}>
          <Image fill src="/images/stamp-images/stamp-image.svg" alt="스탬프 이미지" />
        </div>
        <div className={stamp_page_styles.stamp_link_image_wrapper}>
          <div className={stamp_page_styles.stamp_more_image_wrapper}>
            <Image
              src="/images/stamp-images/stamp-more-image.svg"
              width={166}
              height={124}
              alt="스탬프 더 모으기 이미지"
            />
            <div className={stamp_page_styles.stamp_image_overlay}></div>
            <div className={stamp_page_styles.stamp_guide_text}>
              <span className={stamp_page_styles.stamp_guide_text_title}>
                스탬프가 부족하신가요?
              </span>
              <span className={stamp_page_styles.stamp_guide_text_sub_title}>
                지금 바로 스탬프 모으러 가기 &gt;{' '}
              </span>
            </div>
          </div>
          <div className={stamp_page_styles.stamp_gacha_image_wrapper}>
            <Image
              src="/images/stamp-images/stamp-gacha-image.svg"
              width={166}
              height={124}
              alt="스탬프 가챠 이미지"
            />
            <div className={stamp_page_styles.stamp_image_overlay}></div>
            <div className={stamp_page_styles.stamp_guide_text}>
              <span className={stamp_page_styles.stamp_guide_text_title}>
                스탬프를 다 모으셨나요?
              </span>
              <span className={stamp_page_styles.stamp_guide_text_sub_title}>
                지금 바로 뽑기 가기 &gt;{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
