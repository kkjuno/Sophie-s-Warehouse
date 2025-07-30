'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/mainPage/sections/productSection.module.css';
import { CategoryType, ProductSectionProps } from '@/types';

interface CategoryWithHero {
  name: CategoryType;
  hero: string;
}

interface Props extends ProductSectionProps {
  categories: CategoryWithHero[];
}

export default function ProductSection({ categories, products }: Props) {
  // Map으로 카테고리별 ref 관리
  const scrollRefs = useRef<Map<CategoryType, HTMLDivElement>>(new Map());

  const get_row_products = (category: CategoryType) =>
    products.filter((product) => product.category === category).slice(0, 8);

  // 드래그 상태
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(null);

  // 마우스 드래그 시작
  const handleMouseDown = (e: React.MouseEvent, category: CategoryType) => {
    const container = scrollRefs.current.get(category);
    if (!container) return;

    setIsDragging(true);
    setActiveCategory(category);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  // 드래그 중
  const handleMouseMove = (e: React.MouseEvent, category: CategoryType) => {
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

  // 휠 스크롤
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>, category: CategoryType) => {
    const container = scrollRefs.current.get(category);
    if (container) {
      container.scrollLeft += e.deltaY * 0.8;
    }
  };

  const handleCategoryClick = (category: CategoryType) => {
    console.log(`Category clicked: ${category}`);
  };

  return (
    <section className={styles.product_section}>
      {/* 카테고리 탭 */}
      <div className={styles.section_header}>
        <div className={styles.category_tabs}>
          {categories.map((cat) => (
            <button
              key={cat.name}
              type="button"
              className={styles.tab}
              onClick={() => handleCategoryClick(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* 카테고리별 상품 리스트 */}
      <div className={styles.product_rows}>
        {categories.map((cat) => (
          <div key={cat.name} className={styles.product_row}>
            <div className={styles.product_wrapper}>
              {/* 좌측 hero 이미지 */}
              <div className={styles.product_hero}>
                <Image
                  src={cat.hero}
                  alt={`${cat.name} hero`}
                  width={360}
                  height={530}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* 우측 상품 스크롤 */}
              <div
                className={styles.product_row_scroll}
                ref={(el) => {
                  if (el) scrollRefs.current.set(cat.name, el);
                }}
                onMouseDown={(e) => handleMouseDown(e, cat.name)}
                onMouseMove={(e) => handleMouseMove(e, cat.name)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={(e) => handleWheel(e, cat.name)}
                style={{ cursor: isDragging && activeCategory === cat.name ? 'grabbing' : 'grab' }}
              >
                {get_row_products(cat.name).map((product) => (
                  <Link href={`/products/${product.id}`} key={product.id}>
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
  );
}
