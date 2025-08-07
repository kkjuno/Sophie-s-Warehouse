'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/app/types/productType';
import styles from '@/styles/categoryPage/mobile/categoryProductCard.module.css';
import { addRecentProduct } from '@/utils/recentProduct';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    // TODO: 좋아요 API 연동
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsInCart(!isInCart);
    // TODO: 장바구니 추가 API 연동
  };

  return (
    <div
      className={`${styles.product_item} ${viewMode === 'list' ? styles.list_layout : styles.grid_layout}`}
      onClick={() => addRecentProduct(product._id)}
    >
      <Link href={`/products/${product._id}`} className={styles.product_link}>
        <div className={styles.product_image}>
          {product.mainImages?.[0]?.path ? (
            <Image
              src={product.mainImages[0].path}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.src = '/images/placeholder.png';
              }}
              width={100}
              height={100}
            />
          ) : (
            <div className={styles.no_image}>
              <span>이미지 없음</span>
            </div>
          )}
        </div>

        <div className={styles.product_info}>
          <h3 className={styles.product_name}>{product.name}</h3>
          <p className={styles.product_price}>{product.price?.toLocaleString()}원</p>
          <div className={styles.product_meta}>
            <span>평점 {product.extra?.rating || 0}</span>
            <span>/ 리뷰 {product.extra?.reviewCount || 0}</span>
          </div>
          <div className={styles.product_actions}>
            <button
              className={`${styles.like_button} ${isLiked ? styles.liked : ''}`}
              onClick={handleLikeClick}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.24 8.25002C1.84461 7.85725 1.53134 7.38971 1.31845 6.87466C1.10556 6.3596 0.997308 5.80733 1 5.25002C1 4.12285 1.44777 3.04184 2.2448 2.24481C3.04183 1.44778 4.12283 1.00002 5.25 1.00002C6.83 1.00002 8.21 1.86002 8.94 3.14002H10.06C10.4311 2.48908 10.9681 1.94811 11.6163 1.57219C12.2645 1.19628 13.0007 0.998856 13.75 1.00002C14.8772 1.00002 15.9582 1.44778 16.7552 2.24481C17.5522 3.04184 18 4.12285 18 5.25002C18 6.42002 17.5 7.50002 16.76 8.25002L9.5 15.5L2.24 8.25002ZM17.46 8.96002C18.41 8.00002 19 6.70002 19 5.25002C19 3.85763 18.4469 2.52227 17.4623 1.53771C16.4777 0.553141 15.1424 1.8052e-05 13.75 1.8052e-05C12 1.8052e-05 10.45 0.850018 9.5 2.17002C9.0151 1.49652 8.37661 0.948336 7.63748 0.570946C6.89835 0.193557 6.0799 -0.00216431 5.25 1.8052e-05C3.85761 1.8052e-05 2.52226 0.553141 1.53769 1.53771C0.553123 2.52227 0 3.85763 0 5.25002C0 6.70002 0.59 8.00002 1.54 8.96002L9.5 16.92L17.46 8.96002Z"
                  fill={isLiked ? '#ff4757' : '#6B7878'}
                />
              </svg>
            </button>
            <button
              className={`${styles.cart_button} ${isInCart ? styles.in_cart : ''}`}
              onClick={handleCartClick}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.874721C0 0.713697 0.0632147 0.559268 0.175738 0.445406C0.28826 0.331545 0.440874 0.267578 0.600006 0.267578H2.40002C2.53386 0.267616 2.66384 0.312933 2.7693 0.396322C2.87476 0.479712 2.94964 0.596387 2.98203 0.727792L3.46803 2.69615H17.4002C17.4913 2.69618 17.5812 2.71721 17.6631 2.75766C17.745 2.7981 17.8168 2.8569 17.8729 2.92958C17.929 3.00227 17.968 3.08693 17.9869 3.17714C18.0058 3.26735 18.0042 3.36074 17.9822 3.45022L16.1821 10.7359C16.1498 10.8673 16.0749 10.984 15.9694 11.0674C15.864 11.1508 15.734 11.1961 15.6001 11.1961H4.80004C4.66621 11.1961 4.53622 11.1508 4.43076 11.0674C4.3253 10.984 4.25043 10.8673 4.21804 10.7359L1.93202 1.48186H0.600006C0.440874 1.48186 0.28826 1.4179 0.175738 1.30404C0.0632147 1.19017 0 1.03575 0 0.874721ZM3.76803 3.91044L5.26805 9.98186H15.1321L16.6322 3.91044H3.76803ZM6.00006 13.6247C5.68179 13.6247 5.37656 13.7527 5.15152 13.9804C4.92647 14.2081 4.80004 14.517 4.80004 14.839C4.80004 15.1611 4.92647 15.4699 5.15152 15.6976C5.37656 15.9254 5.68179 16.0533 6.00006 16.0533C6.31832 16.0533 6.62355 15.9254 6.84859 15.6976C7.07364 15.4699 7.20007 15.1611 7.20007 14.839C7.20007 14.517 7.07364 14.2081 6.84859 13.9804C6.62355 13.7527 6.31832 13.6247 6.00006 13.6247ZM3.60003 14.839C3.60003 14.1949 3.85289 13.5772 4.30298 13.1217C4.75307 12.6663 5.36353 12.4104 6.00006 12.4104C6.63658 12.4104 7.24704 12.6663 7.69713 13.1217C8.14722 13.5772 8.40008 14.1949 8.40008 14.839C8.40008 15.4831 8.14722 16.1008 7.69713 16.5563C7.24704 17.0117 6.63658 17.2676 6.00006 17.2676C5.36353 17.2676 4.75307 17.0117 4.30298 16.5563C3.85289 16.1008 3.60003 15.4831 3.60003 14.839ZM14.4001 13.6247C14.0819 13.6247 13.7766 13.7527 13.5516 13.9804C13.3266 14.2081 13.2001 14.517 13.2001 14.839C13.2001 15.1611 13.3266 15.4699 13.5516 15.6976C13.7766 15.9254 14.0819 16.0533 14.4001 16.0533C14.7184 16.0533 15.0236 15.9254 15.2487 15.6976C15.4737 15.4699 15.6001 15.1611 15.6001 14.839C15.6001 14.517 15.4737 14.2081 15.2487 13.9804C15.0236 13.7527 14.7184 13.6247 14.4001 13.6247ZM12.0001 14.839C12.0001 14.1949 12.253 13.5772 12.7031 13.1217C13.1532 12.6663 13.7636 12.4104 14.4001 12.4104C15.0367 12.4104 15.6471 12.6663 16.0972 13.1217C16.5473 13.5772 16.8002 14.1949 16.8002 14.839C16.8002 15.4831 16.5473 16.1008 16.0972 16.5563C15.6471 17.0117 15.0367 17.2676 14.4001 17.2676C13.7636 17.2676 13.1532 17.0117 12.7031 16.5563C12.253 16.1008 12.0001 15.4831 12.0001 14.839Z"
                  fill={isInCart ? '#00a085' : '#6B7878'}
                />
              </svg>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
