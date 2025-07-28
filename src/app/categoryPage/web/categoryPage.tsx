'use client';

import { useState } from 'react';
import styles from '@/styles/categoryPage/web/categoryPage.module.css';
import MainFooter from '@/components/layout/mainFooter';
import { Product, Filter } from '@/types/Product';

const sampleProducts: Product[] = Array(12).fill({
  id: 1,
  name: '[마녀배달부 키키] 마그넷',
  price: 9000,
  image: '/images/products/kiki/kiki-magnet.svg',
  category: '인테리어',
  likes: 4,
  comments: 3,
});

const categories = [
  'ㆍ랜덤',
  'ㆍ인테리어',
  'ㆍToy & Hobby',
  'ㆍ소품',
  'ㆍ문구',
  'ㆍ패션',
  'ㆍ퍼즐',
  'ㆍ리빙',
  'ㆍ라이브러리',
  'ㆍ시즌상품',
];

const priceRanges = ['~3만원', '3만원~5만원', '5만원~10만원', '10만원~30만원', '30만원~'];

const filters: Filter[] = [
  { name: '전체', emptyIcon: '/icons/all-empty.svg', filledIcon: '/icons/all-filled.svg' },
  {
    name: '예약/판매',
    emptyIcon: '/icons/reserve-empty.svg',
    filledIcon: '/icons/reserve-filled.svg',
  },
  { name: '특가상품', emptyIcon: '/icons/sale-empty.svg', filledIcon: '/icons/sale-filled.svg' },
];

export default function CategoryPage() {
  const [activeFilter, setActiveFilter] = useState('전체');

  return (
    <div className={styles.container}>
      {/* 최상단 Breadcrumb 영역 */}
      <div className={styles.top_breadcrumb}>
        <span>HOME</span>
        <span>&gt;</span>
        <span>CATEGORY</span>
        <span>&gt;</span>
        <span>
          <b>전체</b>
        </span>
      </div>

      <div className={styles.main_content}>
        {/* 사이드바 */}
        <div className={styles.sidebar}>
          <div className={styles.category_section}>
            <h3 className={styles.section_title}>카테고리</h3>
            <span className={styles.section_list_all}>
              <b>전체</b>
            </span>
            <ul className={styles.category_list}>
              {categories.map((category, index) => (
                <li key={index} className={styles.category_item}>
                  <a href="#" className={styles.category_link}>
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.filter_section}>
            <h3 className={styles.section_title}>MOVIE</h3>
            <div className={styles.movie_content}>
              <p>ㆍ하울의 움직이는 성</p>
              <p>ㆍ이웃집 토토로</p>
              <p>ㆍ마녀배달부 키키</p>
            </div>
          </div>
          <div className={styles.price_section}>
            <h3 className={styles.section_title}>가격</h3>
            <div className={styles.price_filter}>
              <div className={styles.price_buttons}>
                {priceRanges.map((range, index) => (
                  <button key={index} className={styles.price_button}>
                    {range}
                  </button>
                ))}
              </div>

              {/* 가격 슬라이더 */}
              <div className={styles.price_slider}>
                <input type="range" min={0} max={999900} step={1000} />
                <input type="range" min={0} max={999900} step={1000} />
              </div>

              {/* 금액 입력 + 검색 */}
              <div className={styles.price_input_wrapper}>
                <input type="text" placeholder="0~999,900 원" className={styles.price_input} />
                <button className={styles.search_btn}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.49928 0.890625C7.14387 0.89074 5.80814 1.21499 4.60353 1.83632C3.39893 2.45765 2.36037 3.35804 1.57451 4.46238C0.788656 5.56672 0.278287 6.84297 0.0859852 8.18467C-0.106316 9.52637 0.0250263 10.8946 0.469055 12.1752C0.913084 13.4558 1.65692 14.6117 2.63851 15.5464C3.6201 16.481 4.81098 17.1674 6.11179 17.5482C7.4126 17.929 8.78562 17.9933 10.1163 17.7355C11.447 17.4778 12.6967 16.9056 13.7613 16.0666L17.4133 19.7186C17.6019 19.9008 17.8545 20.0016 18.1167 19.9993C18.3789 19.997 18.6297 19.8919 18.8151 19.7064C19.0005 19.521 19.1057 19.2702 19.108 19.008C19.1102 18.7458 19.0094 18.4932 18.8273 18.3046L15.1753 14.6526C16.1633 13.3992 16.7784 11.893 16.9504 10.3064C17.1223 8.71968 16.8441 7.11665 16.1475 5.68072C15.4509 4.24479 14.3642 3.03398 13.0116 2.18686C11.659 1.33973 10.0952 0.890518 8.49928 0.890625ZM1.99928 9.39062C1.99928 7.66672 2.6841 6.01342 3.90308 4.79443C5.12207 3.57544 6.77537 2.89062 8.49928 2.89062C10.2232 2.89062 11.8765 3.57544 13.0955 4.79443C14.3145 6.01342 14.9993 7.66672 14.9993 9.39062C14.9993 11.1145 14.3145 12.7678 13.0955 13.9868C11.8765 15.2058 10.2232 15.8906 8.49928 15.8906C6.77537 15.8906 5.12207 15.2058 3.90308 13.9868C2.6841 12.7678 1.99928 11.1145 1.99928 9.39062Z"
                      fill="#6B7878"
                    />
                  </svg>
                </button>
              </div>

              {/* 초기화 버튼 */}
              <button className={styles.reset_btn}>초기화</button>
            </div>
          </div>
        </div>

        {/* 상품 목록 */}
        <div className={styles.product_area}>
          {/* 신상품/베스트 박스 */}
          <div className={styles.highlight_box}>
            <div className={styles.tab_buttons}>
              <button className={styles.active}>신상품</button>
              <button>베스트</button>
            </div>
            <div className={styles.highlight_products}>
              {sampleProducts.slice(0, 5).map((product, index) => (
                <div key={index} className={styles.highlight_card}>
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>{product.price.toLocaleString()}원</p>
                  <p>
                    평점 {product.likes} /리뷰{product.comments}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* 상단 필터 바 */}
          <div className={styles.product_filter_bar}>
            <div className={styles.filter_left}>
              <span className={styles.filter_count}>
                <b>2,187</b>개의 상품이 있습니다
              </span>
            </div>
            <div className={styles.filter_buttons}>
              {/* 왼쪽: 필터 라디오 버튼들 */}
              <div className={styles.filter_buttons_left}>
                {filters.map((f) => (
                  <button
                    key={f.name}
                    className={`${styles.filter_btn} ${activeFilter === f.name ? styles.active : ''}`}
                    onClick={() => setActiveFilter(f.name)}
                  >
                    {/* 라디오 버튼 */}
                    <div className={styles.radio_check_box_wrapper}>
                      <input
                        type="checkbox"
                        className={styles.check_input}
                        checked={activeFilter === f.name}
                        readOnly
                      />
                      <label className={styles.radio_check_box_label}>
                        <span className={styles.radio_check_box} />
                      </label>
                    </div>
                    {/* 필터 이름 */}
                    {f.name}
                  </button>
                ))}
              </div>

              {/* 오른쪽: 드롭다운 박스들 */}
              <div className={styles.header_center}>
                <select className={styles.sort_select}>
                  <option>신상품순</option>
                  <option>인기순</option>
                  <option>낮은가격순</option>
                  <option>높은가격순</option>
                </select>
                <select className={styles.count_select}>
                  <option>20개씩</option>
                  <option>40개씩</option>
                  <option>60개씩</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.product_grid}>
            {sampleProducts.map((product, index) => (
              <div key={index} className={styles.product_card}>
                <div className={styles.product_image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className={styles.product_name}>{product.name}</h4>
                <p className={styles.product_price}>{product.price.toLocaleString()}원</p>
                <p className={styles.product_actions}>
                  평점 {product.likes} /리뷰{product.comments}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            {/* 첫 페이지로 */}
            <button className={styles.page_btn}>
              <span>
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.22638 0.897971L0.13935 5.93589C0.0500037 6.02438 0 6.14306 0 6.26663C0 6.3902 0.0500037 6.50888 0.13935 6.59737L5.22638 11.6372C5.268 11.6785 5.31776 11.7113 5.37272 11.7336C5.42769 11.756 5.48674 11.7676 5.5464 11.7676C5.60606 11.7676 5.66512 11.756 5.72008 11.7336C5.77505 11.7113 5.82481 11.6785 5.86643 11.6372C5.95206 11.5526 6 11.439 6 11.3207C6 11.2024 5.95206 11.0888 5.86643 11.0041L1.08274 6.26663L5.86643 1.53008C5.95177 1.4455 5.99952 1.3321 5.99952 1.21403C5.99952 1.09595 5.95177 0.98255 5.86643 0.897971C5.82481 0.856705 5.77505 0.823907 5.72008 0.801511C5.66512 0.779116 5.60606 0.767578 5.5464 0.767578C5.48674 0.767578 5.42769 0.779116 5.37272 0.801511C5.31776 0.823907 5.268 0.856705 5.22638 0.897971Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.22638 0.897971L0.13935 5.93589C0.0500037 6.02438 0 6.14306 0 6.26663C0 6.3902 0.0500037 6.50888 0.13935 6.59737L5.22638 11.6372C5.268 11.6785 5.31776 11.7113 5.37272 11.7336C5.42769 11.756 5.48674 11.7676 5.5464 11.7676C5.60606 11.7676 5.66512 11.756 5.72008 11.7336C5.77505 11.7113 5.82481 11.6785 5.86643 11.6372C5.95206 11.5526 6 11.439 6 11.3207C6 11.2024 5.95206 11.0888 5.86643 11.0041L1.08274 6.26663L5.86643 1.53008C5.95177 1.4455 5.99952 1.3321 5.99952 1.21403C5.99952 1.09595 5.95177 0.98255 5.86643 0.897971C5.82481 0.856705 5.77505 0.823907 5.72008 0.801511C5.66512 0.779116 5.60606 0.767578 5.5464 0.767578C5.48674 0.767578 5.42769 0.779116 5.37272 0.801511C5.31776 0.823907 5.268 0.856705 5.22638 0.897971Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>

            {/* 이전 페이지 */}
            <button className={styles.page_btn}>
              <span>
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.22638 0.897971L0.13935 5.93589C0.0500037 6.02438 0 6.14306 0 6.26663C0 6.3902 0.0500037 6.50888 0.13935 6.59737L5.22638 11.6372C5.268 11.6785 5.31776 11.7113 5.37272 11.7336C5.42769 11.756 5.48674 11.7676 5.5464 11.7676C5.60606 11.7676 5.66512 11.756 5.72008 11.7336C5.77505 11.7113 5.82481 11.6785 5.86643 11.6372C5.95206 11.5526 6 11.439 6 11.3207C6 11.2024 5.95206 11.0888 5.86643 11.0041L1.08274 6.26663L5.86643 1.53008C5.95177 1.4455 5.99952 1.3321 5.99952 1.21403C5.99952 1.09595 5.95177 0.98255 5.86643 0.897971C5.82481 0.856705 5.77505 0.823907 5.72008 0.801511C5.66512 0.779116 5.60606 0.767578 5.5464 0.767578C5.48674 0.767578 5.42769 0.779116 5.37272 0.801511C5.31776 0.823907 5.268 0.856705 5.22638 0.897971Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>

            {/* 페이지 번호들 */}
            <button className={`${styles.page_number} ${styles.active}`}>1</button>
            <button className={styles.page_number}>2</button>
            <button className={styles.page_number}>3</button>
            <button className={styles.page_number}>4</button>
            <button className={styles.page_number}>5</button>

            {/* 다음 페이지 */}
            <button className={styles.page_btn}>
              <span>
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: 'rotate(180deg)' }}
                >
                  <path
                    d="M5.22638 0.897971L0.13935 5.93589C0.0500037 6.02438 0 6.14306 0 6.26663C0 6.3902 0.0500037 6.50888 0.13935 6.59737L5.22638 11.6372C5.268 11.6785 5.31776 11.7113 5.37272 11.7336C5.42769 11.756 5.48674 11.7676 5.5464 11.7676C5.60606 11.7676 5.66512 11.756 5.72008 11.7336C5.77505 11.7113 5.82481 11.6785 5.86643 11.6372C5.95206 11.5526 6 11.439 6 11.3207C6 11.2024 5.95206 11.0888 5.86643 11.0041L1.08274 6.26663L5.86643 1.53008C5.95177 1.4455 5.99952 1.3321 5.99952 1.21403C5.99952 1.09595 5.95177 0.98255 5.86643 0.897971C5.82481 0.856705 5.77505 0.823907 5.72008 0.801511C5.66512 0.779116 5.60606 0.767578 5.5464 0.767578C5.48674 0.767578 5.42769 0.779116 5.37272 0.801511C5.31776 0.823907 5.268 0.856705 5.22638 0.897971Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>

            {/* 마지막 페이지로 */}
            <button className={styles.page_btn}>
              <span>
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: 'rotate(180deg)' }}
                >
                  <path
                    d="M5.22638 0.897971L0.13935 5.93589C0.0500037 6.02438 0 6.14306 0 6.26663C0 6.3902 0.0500037 6.50888 0.13935 6.59737L5.22638 11.6372C5.268 11.6785 5.31776 11.7113 5.37272 11.7336C5.42769 11.756 5.48674 11.7676 5.5464 11.7676C5.60606 11.7676 5.66512 11.756 5.72008 11.7336C5.77505 11.7113 5.82481 11.6785 5.86643 11.6372C5.95206 11.5526 6 11.439 6 11.3207C6 11.2024 5.95206 11.0888 5.86643 11.0041L1.08274 6.26663L5.86643 1.53008C5.95177 1.4455 5.99952 1.3321 5.99952 1.21403C5.99952 1.09595 5.95177 0.98255 5.86643 0.897971C5.82481 0.856705 5.77505 0.823907 5.72008 0.801511C5.66512 0.779116 5.60606 0.767578 5.5464 0.767578C5.48674 0.767578 5.42769 0.779116 5.37272 0.801511C5.31776 0.823907 5.268 0.856705 5.22638 0.897971Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: 'rotate(180deg)' }}
                >
                  <path
                    d="M5.22638 0.897971L0.13935 5.93589C0.0500037 6.02438 0 6.14306 0 6.26663C0 6.3902 0.0500037 6.50888 0.13935 6.59737L5.22638 11.6372C5.268 11.6785 5.31776 11.7113 5.37272 11.7336C5.42769 11.756 5.48674 11.7676 5.5464 11.7676C5.60606 11.7676 5.66512 11.756 5.72008 11.7336C5.77505 11.7113 5.82481 11.6785 5.86643 11.6372C5.95206 11.5526 6 11.439 6 11.3207C6 11.2024 5.95206 11.0888 5.86643 11.0041L1.08274 6.26663L5.86643 1.53008C5.95177 1.4455 5.99952 1.3321 5.99952 1.21403C5.99952 1.09595 5.95177 0.98255 5.86643 0.897971C5.82481 0.856705 5.77505 0.823907 5.72008 0.801511C5.66512 0.779116 5.60606 0.767578 5.5464 0.767578C5.48674 0.767578 5.42769 0.779116 5.37272 0.801511C5.31776 0.823907 5.268 0.856705 5.22638 0.897971Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
}
