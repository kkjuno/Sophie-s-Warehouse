'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/mainPage/sections/reviewSection.module.css';

export interface ReviewItem {
  id: number;
  name: string;
  content: string;
  image: string;
  rating: number;
}

interface ReviewSectionProps {
  reviews: ReviewItem[];
}

export default function ReviewSection({ reviews }: ReviewSectionProps) {
  // 리뷰 섹션 스크롤 이벤트
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
  }, []);

  return (
    <section className={styles.review_section}>
      <h2 className={styles.section_title}>REVIEW</h2>
      <div className={styles.review_scroll_container}>
        <div className={styles.review_row}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.review_card}>
              <Link href={`/reviews/${review.id}`}>
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
