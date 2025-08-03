'use client';

import React, { useRef, useState, useEffect, JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productFetch } from '@/app/fetch/product';
import { Product } from '@/app/types/productType';
import styles from '../../../styles/mainPage/sections/productSection.module.css';
import { addRecentProduct } from '@/utils/recentProduct';

// Hero 이미지 매핑 함수
const getHeroImage = (movieName: string): string => {
  const heroImages: Record<string, string> = {
    '마녀배달부 키키': '/images/mainPage/kiki-hero.svg',
    '이웃집 토토로': '/images/mainPage/totoro-hero.svg',
    '하울의 움직이는 성': '/images/mainPage/howls-hero.svg',
  };
  return heroImages[movieName] || '/images/mainPage/default-hero.svg';
};

export default function ProductSection(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  // Map으로 카테고리별 ref 관리
  const scrollRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // 드래그 상태
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // 휠 이벤트 제어를 위한 ref
  const wheelEventRef = useRef<((e: WheelEvent) => void) | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productFetch();
        console.log('API Response:', data);

        if (data.ok === 0) {
          throw new Error(data.message || '상품 조회 실패');
        }

        const fetchedProducts = data.item || [];
        setProducts(fetchedProducts);

        // API 데이터에서 영화 카테고리 추출 (중복 제거)
        const uniqueMovies = [
          ...new Set(
            fetchedProducts
              .map((product: Product) => product.extra?.movie)
              .filter((movie): movie is string => !!movie),
          ),
        ];

        setCategories(uniqueMovies);
      } catch (err) {
        console.error('Error:', err);
        setError(err instanceof Error ? err.message : '알 수 없는 오류');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // 컴포넌트 언마운트 시 휠 이벤트 리스너 정리
    return () => {
      if (wheelEventRef.current) {
        document.removeEventListener('wheel', wheelEventRef.current);
      }
    };
  }, []);

  // 카테고리별 상품 필터링 (최대 6개)
  const getRowProducts = (movie: string) =>
    products.filter((product) => product.extra?.movie === movie).slice(0, 6);

  // 마우스 드래그 시작
  const handleMouseDown = (e: React.MouseEvent, category: string) => {
    const container = scrollRefs.current.get(category);
    if (!container) return;

    setIsDragging(true);
    setActiveCategory(category);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  // 드래그 중
  const handleMouseMove = (e: React.MouseEvent, category: string) => {
    if (!isDragging || activeCategory !== category) return;

    const container = scrollRefs.current.get(category);
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  // 드래그 종료
  const handleMouseUp = () => {
    setIsDragging(false);
    setActiveCategory(null);
  };

  // 휠 스크롤 - 페이지 스크롤 방지 추가
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>, category: string) => {
    e.preventDefault();
    e.stopPropagation();

    const container = scrollRefs.current.get(category);
    if (container) {
      container.scrollLeft += e.deltaY * 0.8;
    }
  };

  // 마우스 진입 시 전역 휠 이벤트 리스너 추가
  const handleMouseEnter = (category: string) => {
    const preventScroll = (e: WheelEvent) => {
      const container = scrollRefs.current.get(category);
      if (container && container.contains(e.target as Node)) {
        e.preventDefault();
        e.stopPropagation();
        container.scrollLeft += e.deltaY * 0.8;
      }
    };

    wheelEventRef.current = preventScroll;
    document.addEventListener('wheel', preventScroll, { passive: false });
  };

  // 마우스 퇴장 시 전역 휠 이벤트 리스너 제거
  const handleMouseLeave = () => {
    if (wheelEventRef.current) {
      document.removeEventListener('wheel', wheelEventRef.current);
      wheelEventRef.current = null;
    }
  };

  const handleCategoryClick = (category: string) => {
    console.log(`Category clicked: ${category}`);
  };

  if (loading) {
    console.log('ProductSection: 로딩 중...');
  }

  if (error) {
    console.log('ProductSection 에러 발생:', error);
  }

  if (products.length === 0) {
    console.log('ProductSection: 상품 데이터가 없습니다');
  }

  return (
    <section className={styles.product_section}>
      {/* 카테고리 탭 */}
      <div className={styles.section_header}>
        <div className={styles.category_tabs}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={styles.tab}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 카테고리별 상품 리스트 */}
      <div className={styles.product_rows}>
        {categories.map((category) => {
          const categoryProducts = getRowProducts(category);
          if (categoryProducts.length === 0) return null;

          return (
            <div key={category} className={styles.product_row}>
              <div className={styles.product_wrapper}>
                {/* 좌측 hero 이미지 */}
                <div className={styles.product_hero}>
                  <Image
                    src={getHeroImage(category)}
                    alt={`${category} hero`}
                    width={360}
                    height={530}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>

                {/* 우측 상품 스크롤 */}
                <div
                  className={styles.product_row_scroll}
                  ref={(el) => {
                    if (el) scrollRefs.current.set(category, el);
                  }}
                  onMouseDown={(e) => handleMouseDown(e, category)}
                  onMouseMove={(e) => handleMouseMove(e, category)}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={() => {
                    handleMouseUp();
                    handleMouseLeave();
                  }}
                  onMouseEnter={() => handleMouseEnter(category)}
                  onWheel={(e) => handleWheel(e, category)}
                  style={{
                    cursor: isDragging && activeCategory === category ? 'grabbing' : 'grab',
                  }}
                >
                  {categoryProducts.map((product) => (
                    <Link
                      href={`/products/${product._id}`}
                      key={product._id}
                      className={styles.product_link}
                    >
                      <div
                        className={styles.product_card}
                        onClick={() => addRecentProduct(product._id)} // 클릭 시 최근 본 상품 저장
                      >
                        <div className={styles.product_image}>
                          {product.mainImages?.[0]?.path && (
                            <Image
                              src={`/${product.mainImages[0].path}`}
                              alt={product.name}
                              width={200}
                              height={200}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          )}
                        </div>
                        <div className={styles.product_info}>
                          <p className={styles.product_category}>[{product.extra?.movie}]</p>
                          <h4 className={styles.product_name}>{product.name}</h4>
                          <p className={styles.product_price}>
                            {product.price?.toLocaleString()}원
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
