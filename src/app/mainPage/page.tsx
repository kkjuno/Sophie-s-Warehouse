import Image from 'next/image';
import Link from 'next/link';
import ProductSection from '@/app/mainPage/sections/productSection';
import EventSection from '@/app/mainPage/sections/eventSection';
import ReviewSection from '@/app/mainPage/sections/reviewSection';
import styles from '../../styles/mainPage/mainPage.module.css';

export default async function MainPage() {
  return (
    <div className={styles.container}>
      {/* Hero 섹션 */}
      <div className={styles.hero_image}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1200/566' }}>
          <Image
            src="/images/mainPage/shopie-warehouse-hero.gif"
            alt="소피의창고 대문 사진"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.hero_content}>
            <h2 className={styles.hero_title}>
              8월 빅세일 <br />
              인기 상품 ~50% 할인!
            </h2>
            <Link href="#" className={styles.hero_button}>
              바로가기 &gt;
            </Link>
          </div>
        </div>
      </div>

      {/* 상품 섹션 */}
      <ProductSection />

      {/* 이벤트 섹션 */}
      <EventSection />

      {/* 리뷰 섹션 - API에서 데이터를 가져오도록 수정됨 */}
      <ReviewSection />
    </div>
  );
}
