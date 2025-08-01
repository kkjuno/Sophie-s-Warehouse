import stamp_page_styles from '@/styles/stamp/stamp.module.css';
import StampMobileUserInfo from './stampMobileUserInfo';
import StampMobileBoard from './stampMobileBoard';

export default function StampPage() {
  return (
    <>
      {/* 모바일 영역 */}

      <div className={stamp_page_styles.mobile_root_section}>
        <div className={stamp_page_styles.mobile_user_info_section}>
          <StampMobileUserInfo />
        </div>
        {/* 스탬프 판 */}
        <StampMobileBoard />
      </div>
    </>
  );
}
