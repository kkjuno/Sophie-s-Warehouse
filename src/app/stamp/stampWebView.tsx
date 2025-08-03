'use client';
import { useState } from 'react';
import stamp_page_styles from '@/styles/stamp/stamp.module.css';
import StampWebAsideMenu from '@/app/stamp/StampWebAsideMenu';
import StampWebMainContent from '@/app/stamp/StampWebMainContent';
import StampWebSideContent from '@/app/stamp/StampWebSideContent';
import StampWebToast from '@/app/stamp/StampWebToast';
import StampWebSideToast from '@/app/stamp/StampWebSideToast';

export default function StampWebView() {
  const [toast, setToast] = useState(false);
  const showToast = () => setToast(true);
  const closeToast = () => setToast(false);

  return (
    <div className={stamp_page_styles.web_root_section}>
      <div className={stamp_page_styles.web_path_wrapper}>
        HOME &gt; 마이페이지 &gt; 혜택관리 &gt; <span>스탬프</span>
      </div>

      <div className={stamp_page_styles.web_main_page_section}>
        <StampWebAsideMenu />
        <StampWebMainContent onClick={showToast} />
        <StampWebSideContent onClick={showToast} />

        {toast && (
          <>
            <StampWebToast onClose={closeToast} />
            <StampWebSideToast onClose={closeToast} />
          </>
        )}
      </div>
    </div>
  );
}
