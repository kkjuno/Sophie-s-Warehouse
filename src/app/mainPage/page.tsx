import Image from 'next/image';
import Link from 'next/link';
import ProductSection from '@/app/mainPage/sections/productSection';
import EventSection from '@/app/mainPage/sections/eventSection';
import ReviewSection from '@/app/mainPage/sections/reviewSection';
import styles from '../../styles/mainPage/mainPage.module.css';
import { ProductItem, CategoryType } from '@/types';

// API 함수들 (나중에 실제 API로 교체)
async function getProducts(): Promise<ProductItem[]> {
  // 실제 환경에서는 fetch('/api/products') 등으로 교체
  return [
    // 마녀 배달부 키키 (8 products)
    {
      id: 1,
      name: '마그넷',
      price: '9,000원',
      image: '/images/products/kiki/kiki-magnet.svg',
      category: '마녀 배달부 키키',
    },
    {
      id: 2,
      name: '4P 세트 접시',
      price: '23,000원',
      image: '/images//products/kiki/kiki-4set-dish.svg',
      category: '마녀 배달부 키키',
    },
    {
      id: 3,
      name: '다이어리스티커',
      price: '4,800원',
      image: '/images/products/kiki/kiki-diary-sticker.svg',
      category: '마녀 배달부 키키',
    },
    {
      id: 4,
      name: '지지 원형 2단 도시락',
      price: '14,000원',
      image: '/images/products/kiki/kiki-round-bento-box.svg',
      category: '마녀 배달부 키키',
    },
    {
      id: 5,
      name: '멀티케이스',
      price: '32,000원',
      image: '/images/products/kiki/kiki-4set-multi-case.svg',
      category: '마녀 배달부 키키',
    },
    {
      id: 6,
      name: '지지마스코트 키링(앉음)',
      price: '21,000원',
      image: '/images/products/kiki/kiki-mascort-keyring.svg',
      category: '마녀 배달부 키키',
    },
    {
      id: 7,
      name: '손수건(플라워아치 지지M)',
      price: '7,000원',
      image: '/images/products/kiki/kiki-handkerchief.svg',
      category: '마녀 배달부 키키',
    },
    {
      id: 8,
      name: '지지 나무젓가락(핑크 21CM)',
      price: '5,000원',
      image: '/images/products/kiki/kiki-wodden-chopsticks.svg',
      category: '마녀 배달부 키키',
    },

    // 이웃집 토토로 (8 products)
    {
      id: 9,
      name: '토토로 마그넷',
      price: '9,000원',
      image: '/images/products/totoro/totoro-magnet.svg',
      category: '이웃집 토토로',
    },
    {
      id: 10,
      name: '연하장 스탬프',
      price: '9,500원',
      image: '/images/products/totoro/totoro-stamp.svg',
      category: '이웃집 토토로',
    },
    {
      id: 11,
      name: '올오버 단목패턴양말',
      price: '23,500원',
      image: '/images/products/totoro/totoro-socks.svg',
      category: '이웃집 토토로',
    },
    {
      id: 12,
      name: '소토토로 미니피규어',
      price: '46,000원',
      image: '/images/products/totoro/totoro-mini-figure.svg',
      category: '이웃집 토토로',
    },
    {
      id: 13,
      name: '스냅타올(토토로 여름방학 60cm)',
      price: '23,800원',
      image: '/images/products/totoro/totoro-towel.svg',
      category: '이웃집 토토로',
    },
    {
      id: 14,
      name: '의자방석(대토토로)',
      price: '28,000원',
      image: '/images/products/totoro/totoro-chair-cushion.svg',
      category: '이웃집 토토로',
    },
    {
      id: 15,
      name: '소토토로 물조리개',
      price: '28,000원',
      image: '/images/products/totoro/totoro-water-aperture.svg',
      category: '이웃집 토토로',
    },
    {
      id: 16,
      name: '데굴데굴홀더(소토토로와쿠로스케)',
      price: '12,500원',
      image: '/images/products/totoro/totoro-holder.svg',
      category: '이웃집 토토로',
    },

    // 하울의 움직이는 성 (8 products)
    {
      id: 17,
      name: '스타일리시 보틀 500ml',
      price: '21,000원',
      image: '/images/products/howl/howl-bottle.svg',
      category: '하울의 움직이는 성',
    },
    {
      id: 18,
      name: '하울 캘시퍼(계란프라이팬)',
      price: '35,000원',
      image: '/images/products/howl/howl-frying-pan.svg',
      category: '하울의 움직이는 성',
    },
    {
      id: 19,
      name: '라이트업 디오라마',
      price: '308,000원',
      image: '/images/products/howl/howl-diorama.svg',
      category: '하울의 움직이는 성',
    },
    {
      id: 20,
      name: '캘시퍼 숄더백',
      price: '58,500원',
      image: '/images/products/howl/howl-sholder-bag.svg',
      category: '하울의 움직이는 성',
    },
    {
      id: 21,
      name: '썬캐쳐',
      price: '60,000원',
      image: '/images/products/howl/howl-sun-catcher.svg',
      category: '하울의 움직이는 성',
    },
    {
      id: 22,
      name: '하울의 캔들라이트',
      price: '32,000원',
      image: '/images/products/howl/howl-candle-light.svg',
      category: '하울의 움직이는 성',
    },
    {
      id: 23,
      name: '스테인드글라스보석함(하울의성)',
      price: '32,000원',
      image: '/images/products/howl/howl-stained-glass-jewelry-box.svg',
      category: '하울의 움직이는 성',
    },
    {
      id: 24,
      name: '캘시퍼 코스터',
      price: '17,000원',
      image: '/images/products/howl/howl-coster.svg',
      category: '하울의 움직이는 성',
    },
  ];
}

async function getCategories(): Promise<{ name: CategoryType; hero: string }[]> {
  return [
    { name: '마녀 배달부 키키', hero: '/images/mainPage/kiki-hero.svg' },
    { name: '이웃집 토토로', hero: '/images/mainPage/totoro-hero.svg' },
    { name: '하울의 움직이는 성', hero: '/images/mainPage/howls-hero.svg' },
  ];
}

async function getReviews() {
  // 실제 환경에서는 fetch('/api/reviews') 등으로 교체
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
  const products = await getProducts();
  const categories = await getCategories();
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
      <ProductSection categories={categories} products={products} />

      {/* 이벤트 섹션 */}
      <EventSection />

      {/* 리뷰 섹션 */}
      <ReviewSection reviews={reviews} />
    </div>
  );
}
