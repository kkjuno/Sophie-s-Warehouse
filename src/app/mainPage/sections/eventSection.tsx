import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/mainPage/sections/eventSection.module.css';

// 이벤트 섹션은 정적 콘텐츠이므로 서버 컴포넌트로 유지
export default function EventSection() {
  return (
    <section className={styles.event_wrapper}>
      <Image
        src="/images/mainPage/shopie-warehouse-event-bg.svg"
        alt="이벤트 배경 이미지"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />

      <div className={styles.event_popup}>
        <div className={styles.main_image_wrapper}>
          <Link href="#void">
            <Image
              src="/images/mainPage/fabric-collection-event.svg"
              alt="페브릭 콜렉션 이벤트로 이동"
              fill
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>

        <div className={styles.sub_event_popup}>
          <div className={styles.sub_image_wrapper}>
            <Link href="#void">
              <Image
                src="/images/mainPage/diary-decor-event.svg"
                alt="다이어리 꾸미기 이벤트로 이동"
                fill
                priority
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
          <div className={styles.sub_image_wrapper}>
            <Link href="#void">
              <Image
                src="/images/mainPage/paper-theater-event.svg"
                alt="페이퍼씨어터 이벤트로 이동"
                fill
                priority
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
