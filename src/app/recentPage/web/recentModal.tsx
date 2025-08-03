'use client';

import { useRecentModal } from '@/zustand/useRecentModal';
import WebRecentProducts from '@/app/recentPage/web/product';
import styles from '@/styles/recentPage/web/recentProduct.module.css';
import { useEffect, useState } from 'react';

export default function RecentModal() {
  const { isOpen, close } = useRecentModal();
  const [animateClass, setAnimateClass] = useState('');

  useEffect(() => {
    if (isOpen) {
      setAnimateClass(styles.modal_open);
      document.body.style.overflow = 'hidden'; //  스크롤 막기 -> UX 측면에서 일반적이다고 합니다
    } else {
      setAnimateClass(styles.modal_close);
      document.body.style.overflow = ''; //  원래대로 복구
    }
    return () => {
      document.body.style.overflow = ''; //  컴포넌트 언마운트 시 복구
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`${styles.modal_overlay} ${animateClass}`} onClick={close}>
      <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
        <WebRecentProducts />
      </div>
    </div>
  );
}
