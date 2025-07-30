import Image from 'next/image';
import Link from 'next/link';
import ProductSection from '@/app/mainPage/sections/productSection';
import EventSection from '@/app/mainPage/sections/eventSection';
import ReviewSection from '@/app/mainPage/sections/reviewSection';
import styles from '../../styles/mainPage/mainPage.module.css';

async function getReviews() {
  return [
    {
      id: 1,
      name: '[하울의 움직이는 성] 라이트업 디오라마',
      content: '상품이 너무 예뻐요! 다음에 또 구매할게요',
      image: '/images/products/howl/howl-diorama.svg',
      rating: 5,
    },
    {
      id: 2,
      name: '[이웃집 토토로] 소토토로 미니피규어',
      content: '배송이 빠르고 상품 상태 좋았습니다',
      image: '/images/products/totoro/totoro-mini-figure.svg',
      rating: 4,
    },
    {
      id: 3,
      name: '[이웃집 토토로] 올오버 단목패턴양말',
      content: '기대했던 것보다 훨씬 좋아요',
      image: '/images/products/totoro/totoro-socks.svg',
      rating: 5,
    },
    {
      id: 4,
      name: '[마녀 배달부 키키] 마그넷',
      content: '친구에게 선물했더니 너무 좋아했어요',
      image: '/images/products/kiki/kiki-magnet.svg',
      rating: 5,
    },
    {
      id: 5,
      name: '[하울의 움직이는 성] 하울의 캔디라이트',
      content: '가격 대비 만족스러운 품질입니다',
      image: '/images/products/howl/howl-candle-light.svg',
      rating: 4,
    },
  ];
}

export default async function MainPage() {
  const reviews = await getReviews();

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

      {/* 리뷰 섹션 */}
      <ReviewSection reviews={reviews} />
    </div>
  );
}
