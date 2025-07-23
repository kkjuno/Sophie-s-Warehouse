import React from 'react';
import styles from '../../styles/components/button.module.css';

// 버튼 컴포넌트

export default function Button() {
  return (
    <div className={styles.container}>
      {/* 드롭다운 섹션 */}

      <div className={styles.dropdown_section}>
        <div className={styles.dropdown_wrapper}>
          <select className={styles.dropdown}>
            <option value="newest">신상품순</option>
            <option value="best-selling">판매인기순</option>
            <option value="price-low">낮은가격순</option>
            <option value="price-high">높은가격순</option>
            <option value="most-liked">찜 많은순</option>
            <option value="most-reviewed">리뷰 많은순</option>
          </select>
          <div className={styles.dropdown_icon}>
            <svg
              width="6"
              height="12"
              viewBox="0 0 6 12"
              fill="#6B7878"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.22638 0.897971L0.13935 5.93589C0.0500037 6.02438 0 6.14306 0 6.26663C0 6.3902 0.0500037 6.50888 0.13935 6.59737L5.22638 11.6372C5.268 11.6785 5.31776 11.7113 5.37272 11.7336C5.42769 11.756 5.48674 11.7676 5.5464 11.7676C5.60606 11.7676 5.66512 11.756 5.72008 11.7336C5.77505 11.7113 5.82481 11.6785 5.86643 11.6372C5.95206 11.5526 6 11.439 6 11.3207C6 11.2024 5.95206 11.0888 5.86643 11.0041L1.08274 6.26663L5.86643 1.53008C5.95177 1.4455 5.99952 1.3321 5.99952 1.21403C5.99952 1.09595 5.95177 0.98255 5.86643 0.897971C5.82481 0.856705 5.77505 0.823907 5.72008 0.801511C5.66512 0.779116 5.60606 0.767578 5.5464 0.767578C5.48674 0.767578 5.42769 0.779116 5.37272 0.801511C5.31776 0.823907 5.268 0.856705 5.22638 0.897971Z"
                fill="#6B7878"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 일반 버튼들 컨테이너 */}
      <div className={styles.common_button_container}>
        <div className={styles.button_grid}>
          <button className={`${styles.payment_button} `}>결제하기</button>

          <button className={`${styles.cart_button} `}>장바구니</button>

          <button className={`${styles.purchase_button} `}>구매하기</button>

          <button className={`${styles.close_button} `}>닫기</button>

          <button className={`${styles.quick_link_button} `}>바로가기</button>

          <button className={`${styles.login_button} `}>로그인</button>

          <button className={`${styles.signup_button} `}>회원가입</button>

          <button className={`${styles.inquiry_button} `}>조회</button>

          <button className={`${styles.place_search_button} `}>배송지 관리</button>

          <button className={`${styles.postcode_search_button} `}>우편번호 검색</button>

          <button className={`${styles.go_to_cart_button} `}>
            <svg
              width="6"
              height="12"
              viewBox="0 0 6 12"
              fill="#1B4332"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.22638 0.897971L0.13935 5.93589C0.0500037 6.02438 0 6.14306 0 6.26663C0 6.3902 0.0500037 6.50888 0.13935 6.59737L5.22638 11.6372C5.268 11.6785 5.31776 11.7113 5.37272 11.7336C5.42769 11.756 5.48674 11.7676 5.5464 11.7676C5.60606 11.7676 5.66512 11.756 5.72008 11.7336C5.77505 11.7113 5.82481 11.6785 5.86643 11.6372C5.95206 11.5526 6 11.439 6 11.3207C6 11.2024 5.95206 11.0888 5.86643 11.0041L1.08274 6.26663L5.86643 1.53008C5.95177 1.4455 5.99952 1.3321 5.99952 1.21403C5.99952 1.09595 5.95177 0.98255 5.86643 0.897971C5.82481 0.856705 5.77505 0.823907 5.72008 0.801511C5.66512 0.779116 5.60606 0.767578 5.5464 0.767578C5.48674 0.767578 5.42769 0.779116 5.37272 0.801511C5.31776 0.823907 5.268 0.856705 5.22638 0.897971Z"
                fill="#1B4332"
              />
            </svg>
            장바구니 가기
          </button>

          <button className={`${styles.add_address_button} `}>배송지 추가</button>

          <button className={`${styles.hero_button} `}>바로가기&gt;</button>

          {/* 장바구니, 상세페이지 - 수량 추가 버튼(웹,모바일) */}
          <button className={`${styles.calc_plus_button}`}>
            <svg
              width="15"
              height="1"
              viewBox="0 0 14 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 1V0H13.5V1H0.5Z" fill="black" />
            </svg>
          </button>
          <button className={`${styles.calc_number_button}`}>1</button>
          <button className={`${styles.calc_minus_button}`}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292969 7V6H6.29297V0H7.29297V6H13.293V7H7.29297V13H6.29297V7H0.292969Z"
                fill="black"
              />
            </svg>
          </button>

          <button className={`${styles.like_list_go_to_cart_button}`}>장바구니</button>

          <button className={`${styles.like_list_delete_button}`}>삭제하기</button>

          <button className={`${styles.my_page_inquiry_button} `}>조회</button>

          <button className={`${styles.tier_benefit_button}`}>등급혜택 &gt;</button>
        </div>
      </div>
    </div>
  );
}
