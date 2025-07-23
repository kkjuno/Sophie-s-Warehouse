import React, { useState, useEffect } from 'react';
import styles from './mobileRecentProductPage.module.css';

// 이것도 추후에 API 연동할때 수정하면 될듯합니다.
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isLiked: boolean;
  viewedAt: Date;
}

const RecentProductsPage: React.FC = () => {
  // 샘플 데이터 - 실제로는 API에서 받아올 데이터
  const sampleProducts: Product[] = [
    {
      id: 1,
      name: '[마녀배달부 키키] 마그넷',
      price: 9000,
      image: '/images/products/kiki/kiki-magnet.svg',
      category: '마녀배달부 키키',
      isLiked: true,
      viewedAt: new Date('2025-01-25T10:30:00'),
    },
    {
      id: 2,
      name: '[이웃집 토토로] 소토토로 미니피규어',
      price: 46000,
      image: '/images/products/totoro/totoro-mini-figure.svg',
      category: '이웃집 토토로',
      isLiked: false,
      viewedAt: new Date('2025-01-23T09:15:00'),
    },
    {
      id: 3,
      name: '[하울의 움직이는 성] 라이트업 디오라마',
      price: 308000,
      image: '/images/products/howl/howl-diorama.svg',
      category: '하울의 움직이는 성',
      isLiked: true,
      viewedAt: new Date('2025-01-22T14:20:00'),
    },
    {
      id: 4,
      name: '[하울의 움직이는 성] 라이트업 디오라마',
      price: 308000,
      image: '/images/products/howl/howl-diorama.svg',
      category: '하울의 움직이는 성',
      isLiked: true,
      viewedAt: new Date('2025-01-22T14:20:00'),
    },
    {
      id: 5,
      name: '[하울의 움직이는 성] 5라이트업 디오라마',
      price: 308000,
      image: '/images/products/howl/howl-diorama.svg',
      category: '하울의 움직이는 성',
      isLiked: true,
      viewedAt: new Date('2025-01-22T14:20:00'),
    },
    {
      id: 6,
      name: '[하울의 움직이는 성] 6라이트업 디오라마',
      price: 308000,
      image: '/images/products/howl/howl-diorama.svg',
      category: '하울의 움직이는 성',
      isLiked: false,
      viewedAt: new Date('2025-01-24T14:20:00'),
    },
    {
      id: 7,
      name: '[하울의 움직이는 성] 7라이트업 디오라마',
      price: 308000,
      image: '/images/products/howl/howl-diorama.svg',
      category: '하울의 움직이는 성',
      isLiked: true,
      viewedAt: new Date('2025-01-19T14:20:00'),
    },
  ];

  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    // 최신순으로 정렬하고 최대 5개까지만 표시
    const sortedProducts = sampleProducts
      .sort((a, b) => b.viewedAt.getTime() - a.viewedAt.getTime())
      .slice(0, 5);

    setRecentProducts(sortedProducts);
  }, []);

  // 상품 삭제 함수
  const removeProduct = (productId: number) => {
    setRecentProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  // 찜 토글 함수
  const toggleLike = (productId: number) => {
    setRecentProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, isLiked: !product.isLiked } : product,
      ),
    );
  };

  const handleClose = () => {
    window.history.back();
    console.log('페이지 닫기');
  };

  const handleProductClick = (productId: number) => {
    console.log(`상품 ${productId} 클릭`);
  };

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <div className={styles.header}>
        <h1 className={styles.title}>최근 본 상품</h1>
        <button onClick={handleClose} className={styles.closeButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9997 12.7087L6.75374 17.9547C6.66041 18.0481 6.54574 18.0981 6.40974 18.1047C6.27374 18.1114 6.15241 18.0614 6.04574 17.9547C5.93908 17.8481 5.88574 17.7301 5.88574 17.6007C5.88574 17.4714 5.93908 17.3534 6.04574 17.2467L11.2917 12.0007L6.04574 6.75472C5.95241 6.66139 5.90241 6.54672 5.89574 6.41072C5.88908 6.27472 5.93908 6.15339 6.04574 6.04672C6.15241 5.94005 6.27041 5.88672 6.39974 5.88672C6.52908 5.88672 6.64708 5.94005 6.75374 6.04672L11.9997 11.2927L17.2457 6.04672C17.3391 5.95339 17.4541 5.90339 17.5907 5.89672C17.7261 5.89005 17.8471 5.94005 17.9537 6.04672C18.0604 6.15339 18.1137 6.27139 18.1137 6.40072C18.1137 6.53005 18.0604 6.64805 17.9537 6.75472L12.7077 12.0007L17.9537 17.2467C18.0471 17.3401 18.0971 17.4551 18.1037 17.5917C18.1104 17.7271 18.0604 17.8481 17.9537 17.9547C17.8471 18.0614 17.7291 18.1147 17.5997 18.1147C17.4704 18.1147 17.3524 18.0614 17.2457 17.9547L11.9997 12.7087Z"
              fill="#6B7878"
            />
          </svg>
        </button>
      </div>
      {/* 컨텐츠 영역 */}
      <div className={styles.content}>
        {recentProducts.length === 0 ? (
          // 빈 상태
          <div className={styles.emptyState}>최근 본 상품이 없습니다.</div>
        ) : (
          // 상품 리스트
          <div className={styles.productList}>
            {recentProducts.map((product, index) => (
              <div
                key={product.id}
                className={`${styles.productItem} ${index < recentProducts.length - 1 ? styles.productItemBorder : ''}`}
              >
                {/* 상품 이미지 */}
                <div className={styles.productImage} onClick={() => handleProductClick(product.id)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImageImg}
                    onError={(e) => {
                      // 이미지 로드 실패 시 대체 텍스트 표시
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML =
                        '<span class="' + styles.imagePlaceholder + '">상품 이미지</span>';
                    }}
                  />
                </div>

                {/* 상품 정보 */}
                <div className={styles.productInfo} onClick={() => handleProductClick(product.id)}>
                  <div className={styles.brandName}>{product.category}</div>
                  <div className={styles.productName}>{product.name}</div>
                  <div className={styles.productPrice}>{product.price.toLocaleString()}원</div>

                  {/* 찜 버튼 */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(product.id);
                    }}
                    className={styles.likeButton}
                  >
                    <span className={styles.heartIcon}>
                      {product.isLiked ? (
                        // 꽉찬 하트 아이콘
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 16L7.695 14.849C3.06 10.7771 0 8.08283 0 4.79564C0 2.10136 2.178 0 4.95 0C6.516 0 8.019 0.706267 9 1.81362C9.981 0.706267 11.484 0 13.05 0C15.822 0 18 2.10136 18 4.79564C18 8.08283 14.94 10.7771 10.305 14.849L9 16Z"
                            fill="red"
                          />
                        </svg>
                      ) : (
                        // 빈 하트 아이콘
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 19 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.24 8.25002C1.84461 7.85725 1.53134 7.38971 1.31845 6.87466C1.10556 6.3596 0.997308 5.80733 1 5.25002C1 4.12285 1.44777 3.04184 2.2448 2.24481C3.04183 1.44778 4.12283 1.00002 5.25 1.00002C6.83 1.00002 8.21 1.86002 8.94 3.14002H10.06C10.4311 2.48908 10.9681 1.94811 11.6163 1.57219C12.2645 1.19628 13.0007 0.998856 13.75 1.00002C14.8772 1.00002 15.9582 1.44778 16.7552 2.24481C17.5522 3.04184 18 4.12285 18 5.25002C18 6.42002 17.5 7.50002 16.76 8.25002L9.5 15.5L2.24 8.25002ZM17.46 8.96002C18.41 8.00002 19 6.70002 19 5.25002C19 3.85763 18.4469 2.52227 17.4623 1.53771C16.4777 0.553141 15.1424 1.8052e-05 13.75 1.8052e-05C12 1.8052e-05 10.45 0.850018 9.5 2.17002C9.0151 1.49652 8.37661 0.948336 7.63748 0.570946C6.89835 0.193557 6.0799 -0.00216431 5.25 1.8052e-05C3.85761 1.8052e-05 2.52226 0.553141 1.53769 1.53771C0.553123 2.52227 0 3.85763 0 5.25002C0 6.70002 0.59 8.00002 1.54 8.96002L9.5 16.92L17.46 8.96002Z"
                            fill="black"
                          />
                        </svg>
                      )}
                    </span>
                    <span className={styles.likeText}>찜</span>
                  </button>
                </div>
                {/* 삭제 버튼 (X 버튼) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeProduct(product.id);
                  }}
                  className={styles.removeButton}
                >
                  <span className={styles.removeIcon}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1Z"
                        fill="#6B7878"
                      />
                      <path
                        d="M5.44895 13.3477L5 12.8987L8.55105 9.34766L5 5.79661L5.44895 5.34766L9 8.8987L12.551 5.34766L13 5.79661L9.44895 9.34766L13 12.8987L12.551 13.3477L9 9.79661L5.44895 13.3477Z"
                        fill="#6B7878"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentProductsPage;
