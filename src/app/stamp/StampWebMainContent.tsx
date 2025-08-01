import Image from 'next/image';
import stamp_page_styles from '@/styles/stamp/stamp.module.css';
import useUserStore from '@/zustand/userStore';

export default function StampWebMainContent({ onClick }: { onClick: () => void }) {
  const user = useUserStore((state) => state.user);

  return (
    <div className={stamp_page_styles.web_main_page}>
      <div className={stamp_page_styles.web_main_view_section}>
        <div className={stamp_page_styles.web_user_info_wrapper}>
          <div className={stamp_page_styles.web_user_top_wrapper}>
            <span>안녕하세요</span>
            <div className={stamp_page_styles.web_user_name}>
              <span>{user?.name ?? '회원'}</span>
              <span>님</span>
            </div>
          </div>
          <div className={stamp_page_styles.web_bottom_wrapper}>
            <span>현재 스탬프 개수 :</span>
            <span>{user?.extra?.stamp ?? 0}개</span>
          </div>
          <div className={stamp_page_styles.web_blackbean_Image_wrapper}>
            <Image src="/images/stampImages/stamp-blackbean-image.svg" fill alt="숯검댕이 이미지" />
          </div>
        </div>

        <div className={stamp_page_styles.web_stamp_image_wrapper}>
          <Image src="/images/stampImages/stamp-image.svg" fill alt="스탬프 이미지" />
        </div>

        <div className={stamp_page_styles.web_stamp_link_image_wrapper}>
          <div className={stamp_page_styles.web_stamp_more_image_wrapper}>
            <Image
              src="/images/stampImages/stamp-more-image.svg"
              fill
              alt="스탬프 더 모으기 이미지"
            />
            <div className={stamp_page_styles.web_stamp_image_overlay}></div>
            <div className={stamp_page_styles.web_stamp_guide_text}>
              <span className={stamp_page_styles.web_stamp_guide_text_title}>
                스탬프가 부족하신가요?
              </span>
              <span className={stamp_page_styles.web_stamp_guide_text_sub_title}>
                지금 바로 스탬프 모으러 가기 &gt;
              </span>
            </div>
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={onClick}
            className={stamp_page_styles.web_stamp_gacha_image_wrapper}
          >
            <Image src="/images/stampImages/stamp-gacha-image.svg" fill alt="스탬프 가챠 이미지" />
            <div className={stamp_page_styles.web_stamp_image_overlay}></div>
            <div className={stamp_page_styles.web_stamp_guide_text}>
              <span className={stamp_page_styles.web_stamp_guide_text_title}>
                스탬프를 다 모으셨나요?
              </span>
              <span className={stamp_page_styles.web_stamp_guide_text_sub_title}>
                지금 바로 뽑기 가기 &gt;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
