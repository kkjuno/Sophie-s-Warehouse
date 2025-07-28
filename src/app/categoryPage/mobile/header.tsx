'use client';

import { useState } from 'react';

import styles from '@/styles/categoryPage/mobile/categoryHeader.module.css';

export default function CategoryHeader() {
  const [sortBy, setSortBy] = useState('신상품순');
  const [itemCount, setItemCount] = useState('20개씩');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.filter_icon}>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9V1M17 17V14M3 17V13M17 10V1M10 4V1M10 17V8"
              stroke="black"
              strokeLinecap="round"
            />
            <path
              d="M3 13C4.10457 13 5 12.1046 5 11C5 9.89543 4.10457 9 3 9C1.89543 9 1 9.89543 1 11C1 12.1046 1.89543 13 3 13Z"
              stroke="black"
              strokeLinecap="round"
            />
            <path
              d="M10 8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8Z"
              stroke="black"
              strokeLinecap="round"
            />
            <path
              d="M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z"
              stroke="black"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className={styles.filter_text}>필터</span>
      </div>

      <div className={styles.header_center}>
        <select
          className={styles.sort_select}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option>신상품순</option>
          <option>인기순</option>
          <option>낮은가격순</option>
          <option>높은가격순</option>
        </select>

        <select
          className={styles.count_select}
          value={itemCount}
          onChange={(e) => setItemCount(e.target.value)}
        >
          <option>20개씩</option>
          <option>40개씩</option>
          <option>60개씩</option>
        </select>

        <div className={styles.header_right}>
          <button
            className={styles.view_toggle}
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          >
            <svg
              width="20"
              height="16"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.48242 0.976562H21.4824M1.48242 8.97656H21.4824M1.48242 16.9766H21.4824"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
