'use client';

import React, { useEffect } from 'react';
import styles from './mainPage.module.css';
import Image from 'next/image';
import Link from 'next/link';

type CategoryType = '마녀 배달부 키키' | '이웃집 토토로' | '하울의 움직이는 성';

interface ProductItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: CategoryType;
}

const products: ProductItem[] = [
  // 마녀 배달부 키키 (8 products)
  {
    id: 1,
    name: '마그넷',
    price: '9,000원',
    image: '/images/kiki-magnet.svg',
    category: '마녀 배달부 키키',
  },
  {
    id: 2,
    name: '4P 세트 접시',
    price: '23,000원',
    image: '/images/kiki-4set-dish.svg',
    category: '마녀 배달부 키키',
  },
  {
    id: 3,
    name: '다이어리스티커',
    price: '4,800원',
    image: '/images/kiki-diary-sticker.svg',
    category: '마녀 배달부 키키',
  },
  {
    id: 4,
    name: '지지 원형 2단 도시락',
    price: '14,000원',
    image: '/images/kiki-round-bento-box.svg',
    category: '마녀 배달부 키키',
  },
  {
    id: 5,
    name: '멀티케이스',
    price: '32,000원',
    image: '/images/kiki-4set-multi-case.svg',
    category: '마녀 배달부 키키',
  },
  {
    id: 6,
    name: '지지마스코트 키링(앉음)',
    price: '21,000원',
    image: '/images/kiki-mascort-keyring.svg',
    category: '마녀 배달부 키키',
  },
  {
    id: 7,
    name: '손수건(플라워아치 지지M)',
    price: '7,000원',
    image: '/images/kiki-handkerchief.svg',
    category: '마녀 배달부 키키',
  },
  {
    id: 8,
    name: '지지 나무젓가락(핑크 21CM)',
    price: '5,000원',
    image: '/images/kiki-wodden-chopsticks.svg',
    category: '마녀 배달부 키키',
  },

  // 이웃집 토토로 (8 products)
  {
    id: 9,
    name: '토토로 마그넷',
    price: '9,000원',
    image: '/images/totoro-magnet.svg',
    category: '이웃집 토토로',
  },
  {
    id: 10,
    name: '연하장 스탬프',
    price: '9,500원',
    image: '/images/totoro-stamp.svg',
    category: '이웃집 토토로',
  },
  {
    id: 11,
    name: '올오버 단목패턴양말',
    price: '23,500원',
    image: '/images/totoro-socks.svg',
    category: '이웃집 토토로',
  },
  {
    id: 12,
    name: '소토토로 미니피규어',
    price: '46,000원',
    image: '/images/totoro-mini-figure.svg',
    category: '이웃집 토토로',
  },
  {
    id: 13,
    name: '스냅타올(토토로 여름방학 60cm)',
    price: '23,800원',
    image: '/images/totoro-towel.svg',
    category: '이웃집 토토로',
  },
  {
    id: 14,
    name: '의자방석(대토토로)',
    price: '28,000원',
    image: '/images/totoro-chair-cushion.svg',
    category: '이웃집 토토로',
  },
  {
    id: 15,
    name: '소토토로 물조리개',
    price: '28,000원',
    image: '/images/totoro-water-aperture.svg',
    category: '이웃집 토토로',
  },
  {
    id: 16,
    name: '데굴데굴홀더(소토토로와쿠로스케)',
    price: '12,500원',
    image: '/images/totoro-holder.svg',
    category: '이웃집 토토로',
  },

  // 하울의 움직이는 성 (8 products)
  {
    id: 17,
    name: '스타일리시 보틀 500ml',
    price: '21,000원',
    image: '/images/howl-bottle.svg',
    category: '하울의 움직이는 성',
  },
  {
    id: 18,
    name: '하울 캘시퍼(계란프라이팬)',
    price: '35,000원',
    image: '/images/howl-frying-pan.svg',
    category: '하울의 움직이는 성',
  },
  {
    id: 19,
    name: '라이트업 디오라마',
    price: '308,000원',
    image: '/images/howl-diorama.svg',
    category: '하울의 움직이는 성',
  },
  {
    id: 20,
    name: '캘시퍼 숄더백',
    price: '58,500원',
    image: '/images/howl-sholder-bag.svg',
    category: '하울의 움직이는 성',
  },
  {
    id: 21,
    name: '썬캐쳐',
    price: '60,000원',
    image: '/images/howl-sun-catcher.svg',
    category: '하울의 움직이는 성',
  },
  {
    id: 22,
    name: '하울의 캔들라이트',
    price: '32,000원',
    image: '/images/howl-candle-light.svg',
    category: '하울의 움직이는 성',
  },
  {
    id: 23,
    name: '스테인드글라스보석함(하울의성)',
    price: '32,000원',
    image: '/images/howl-stained-glass-jewelry-box.svg',
    category: '하울의 움직이는 성',
  },
  {
    id: 24,
    name: '캘시퍼 코스터',
    price: '17,000원',
    image: '/images/howl-coster.svg',
    category: '하울의 움직이는 성',
  },
];

export default function MainPage() {
  const row_categories: CategoryType[] = [
    '마녀 배달부 키키',
    '이웃집 토토로',
    '하울의 움직이는 성',
  ];

  const hero_images: Record<CategoryType, string> = {
    '마녀 배달부 키키': '/images/kiki-hero.svg',
    '이웃집 토토로': '/images/totoro-hero.svg',
    '하울의 움직이는 성': '/images/howls-hero.svg',
  };
  // 카테고리에서 8개 기준으로 slice
  const get_row_products = (category: CategoryType) =>
    products.filter((product) => product.category === category).slice(0, 8);

  // 스크롤 이벤트 및 모바일을 위한 터치 이벤트 구현
  useEffect(() => {
    const scroll_containers = document.querySelectorAll(
      `.${styles.product_row_scroll}, .${styles.review_row}`,
    ) as NodeListOf<HTMLElement>;

    const handle_wheel = (e: WheelEvent) => {
      e.preventDefault();
      const scroll_amount = e.deltaY * 0.8;
      (e.currentTarget as HTMLElement).scrollLeft += scroll_amount;
    };

    const handle_touch_start = (e: TouchEvent) => {
      const container = e.currentTarget as HTMLElement;
      container.dataset.touch_start_x = e.touches[0].clientX.toString();
      container.dataset.scroll_left = container.scrollLeft.toString();
    };

    const handle_touch_move = (e: TouchEvent) => {
      const container = e.currentTarget as HTMLElement;
      if (!container.dataset.touch_start_x) return;

      const touch_x = e.touches[0].clientX;
      const start_x = parseFloat(container.dataset.touch_start_x || '0');
      const scroll_left = parseFloat(container.dataset.scroll_left || '0');

      container.scrollLeft = scroll_left - (touch_x - start_x);
    };

    const handle_mouse_down = (e: MouseEvent) => {
      const container = e.currentTarget as HTMLElement;
      if (
        (e.target as HTMLElement).closest(`.${styles.product_card}`) ||
        (e.target as HTMLElement).closest(`.${styles.product_hero}`) ||
        (e.target as HTMLElement).closest(`.${styles.review_card}`)
      ) {
        return;
      }

      let is_down = true;
      const start_x = e.pageX - container.offsetLeft;
      const scroll_left = container.scrollLeft;
      container.style.cursor = 'grabbing';

      const handle_mouse_move = (e: MouseEvent) => {
        if (!is_down) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - start_x) * 10;
        container.scrollLeft = scroll_left - walk;
      };

      const handle_mouse_up = () => {
        is_down = false;
        container.style.cursor = 'grab';
        document.removeEventListener('mousemove', handle_mouse_move);
        document.removeEventListener('mouseup', handle_mouse_up);
      };

      document.addEventListener('mousemove', handle_mouse_move);
      document.addEventListener('mouseup', handle_mouse_up);
    };

    scroll_containers.forEach((container) => {
      container.addEventListener('wheel', handle_wheel, { passive: false });
      container.addEventListener('mousedown', handle_mouse_down);
      container.addEventListener('touchstart', handle_touch_start, { passive: false });
      container.addEventListener('touchmove', handle_touch_move, { passive: false });
      container.style.cursor = 'grab';
    });

    return () => {
      scroll_containers.forEach((container) => {
        container.removeEventListener('wheel', handle_wheel);
        container.removeEventListener('mousedown', handle_mouse_down);
        container.removeEventListener('touchstart', handle_touch_start);
        container.removeEventListener('touchmove', handle_touch_move);
      });
    };
  }, []);

  return (
    // 전체 컨테이너
    <div className={styles.container}>
      {/* 소피의 창고 대문 사진 */}
      <div className={styles.hero_image}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1200/566' }}>
          <Image
            src="/images/shopie-warehouse-hero.gif"
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
            <a href="#void" className={styles.hero_button}>
              바로가기 &gt;
            </a>
          </div>
        </div>
      </div>

      {/* 상품 섹션 */}
      <section className={styles.product_section}>
        <div className={styles.section_header}>
          <div className={styles.category_tabs}>
            {row_categories.map((category) => (
              <button
                key={category}
                type="button"
                className={styles.tab}
                onClick={(e) => e.preventDefault()}
              >
                {/* 추후에 API를 사용, useRouter를 이용해서 버튼 클릭 시 이동하는 로직으로 활용해야 할듯  */}
                {/* 아니면 Link도 가능하다고 생각 */}
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.product_rows}>
          {row_categories.map((category) => (
            <div key={category} className={styles.product_row}>
              <div className={styles.product_wrapper}>
                <div className={styles.product_hero}>
                  <Image
                    src={hero_images[category]}
                    alt={`${category} hero`}
                    width={360}
                    height={530}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <div className={styles.product_row_scroll}>
                  {get_row_products(category).map((product) => (
                    <Link href="#void" key={product.id}>
                      <div className={styles.product_card}>
                        <div className={styles.product_image}>
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={200}
                            style={{ width: '100%', height: '100%' }}
                          />
                        </div>
                        <div className={styles.product_info}>
                          <p className={styles.product_category}>[{product.category}]</p>
                          <h4 className={styles.product_name}>{product.name}</h4>
                          <p className={styles.product_price}>{product.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 이벤트 팝업 nav바 */}
      <nav>
        <div className={styles.wrapper}>
          <Image
            src="/images/shopie-warehouse-event-bg.svg"
            alt="이벤트 배경 이미지"
            fill
            priority
            style={{ objectFit: 'cover', zIndex: 0 }}
          />

          <div className={styles.event_popup}>
            <div className={styles.main_image_wrapper}>
              <Link href="#void">
                <Image
                  src="/images/fabric-collection-event.svg"
                  alt="페브릭 콜렉션 이벤트"
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
                    src="/images/diary-decor-event.svg"
                    alt="다이어리 꾸미기"
                    fill
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </Link>
              </div>
              <div className={styles.sub_image_wrapper}>
                <Link href="#void">
                  <Image
                    src="/images/paper-theater-event.svg"
                    alt="페이퍼씨어터"
                    fill
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 리뷰 섹션 */}
      <section className={styles.review_section}>
        <h2 className={styles.section_title}>REVIEW</h2>
        <div className={styles.review_scroll_container}>
          <div className={styles.review_row}>
            {[
              {
                id: 1,
                name: '[하울의 움직이는 성] 라이트업 디오라마',
                content: '상품이 너무 예뻐요! 다음에 또 구매할게요',
                image: '/images/howl-diorama.svg',
                rating: 5,
              },
              {
                id: 2,
                name: '[이웃집 토토로] 소토토로 미니피규어',
                content: '배송이 빠르고 상품 상태 좋았습니다',
                image: '/images/totoro-mini-figure.svg',
                rating: 4,
              },
              {
                id: 3,
                name: '[이웃집 토토로] 올오버 단목패턴양말',
                content: '기대했던 것보다 훨씬 좋아요',
                image: '/images/totoro-socks.svg',
                rating: 5,
              },
              {
                id: 4,
                name: '[마녀 배달부 키키] 마그넷',
                content: '친구에게 선물했더니 너무 좋아했어요',
                image: '/images/kiki-magnet.svg',
                rating: 5,
              },
              {
                id: 5,
                name: '[하울의 움직이는 성] 하울의 캔디라이트',
                content: '가격 대비 만족스러운 품질입니다',
                image: '/images/howl-candle-light.svg',
                rating: 4,
              },
            ].map((review) => (
              <div key={review.id} className={styles.review_card}>
                <Link href="#void">
                  <div className={styles.review_main_image}>
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  <div className={styles.review_content}>
                    <h4 className={styles.review_title}>{review.name}</h4>

                    <div className={styles.review_info_box}>
                      <div className={styles.review_thumbnail}>
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      <div className={styles.review_text_content}>
                        <div className={styles.review_rating}>
                          {'★'.repeat(review.rating)}
                          {'☆'.repeat(5 - review.rating)}
                        </div>
                        <p className={styles.review_text}>{review.content}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
