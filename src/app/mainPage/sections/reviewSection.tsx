'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productFetch } from '@/app/fetch/product';
import { Product } from '@/app/types/productType';
import styles from '../../../styles/mainPage/sections/reviewSection.module.css';

export interface ReviewItem {
  id: string;
  name: string;
  content: string;
  image: string;
  rating: number;
}

// 상품을 ReviewItem으로 변환하는 함수
const convertProductToReview = (product: Product): ReviewItem => {
  // 리뷰 내용 샘플 (실제로는 별도 API에서 가져와야 함)
  const sampleReviews = [
    '상품이 너무 예뻐요! 다음에 또 구매할게요',
    '배송이 빠르고 상품 상태 좋았습니다',
    '기대했던 것보다 훨씬 좋아요',
    '친구에게 선물했더니 너무 좋아했어요',
    '가격 대비 만족스러운 품질입니다',
    '포장도 깔끔하고 상품도 만족해요',
    '생각보다 퀄리티가 좋네요!',
    '선물용으로 구매했는데 반응이 좋았어요',
  ];

  return {
    id: String(product._id), // number를 string으로 변환
    name: product.name,
    content: sampleReviews[Math.floor(Math.random() * sampleReviews.length)],
    image: product.mainImages?.[0]?.path || '/images/default-product.jpg',
    rating: product.extra?.rating || 5,
  };
};
export default function ReviewSection() {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await productFetch();
        console.log('API Response:', data);

        if (data.ok === 0) {
          throw new Error(data.message || '상품 조회 실패');
        }

        const products = data.item || [];

        // 리뷰로 표시할 상품들 필터링 및 선택
        const reviewProducts = products
          .filter((product: Product) => {
            // 여기서 원하는 조건으로 필터링
            return (
              product.extra?.reviewCount &&
              product.extra.reviewCount > 0 && // 리뷰가 있는 상품
              product.extra?.rating &&
              product.extra.rating >= 4 && // 평점 4점 이상
              product.mainImages &&
              product.mainImages.length > 0 // 이미지가 있는 상품
            );
          })
          .sort((a: Product, b: Product) => {
            // 리뷰 수가 많은 순으로 정렬
            const aReviews = a.extra?.reviewCount || 0;
            const bReviews = b.extra?.reviewCount || 0;
            return bReviews - aReviews;
          })
          .slice(0, 5) // 상위 5개만 선택
          .map(convertProductToReview);

        setReviews(reviewProducts);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError(err instanceof Error ? err.message : '알 수 없는 오류');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const scroll_containers = document.querySelectorAll(
      `.${styles.review_row}`,
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
      if ((e.target as HTMLElement).closest(`.${styles.review_card}`)) {
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
  }, [reviews]);

  if (loading) {
    return (
      <section className={styles.review_section}>
        <h2 className={styles.section_title}>REVIEW</h2>
        <div className={styles.loading}>리뷰를 불러오는 중...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.review_section}>
        <h2 className={styles.section_title}>REVIEW</h2>
        <div className={styles.error}>리뷰 로딩 중 오류가 발생했습니다: {error}</div>
      </section>
    );
  }

  return (
    <section className={styles.review_section}>
      <h2 className={styles.section_title}>REVIEW</h2>
      <div className={styles.review_scroll_container}>
        <div className={styles.review_row}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.review_card}>
              <Link href={`/products/${review.id}`} className={styles.review_link}>
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
  );
}
