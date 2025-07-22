'use client';
import shopping_cart_styles from '@/styles/shoppingCart/shoppingCart.module.css';
import check_box_styles from '@/styles/components/check-box.module.css';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/components/button.module.css';
export default function ShoppingCart() {
  // 추후 count 부분 따로 컴포넌트화 해서 해야함 page 에는 use client 하면 xx
  const [count, setCount] = useState(1);

  return (
    <>
      <div className={shopping_cart_styles.mobile_shopping_cart_root_header}>
        <div className={shopping_cart_styles.mobile_shopping_cart_root_section}>
          <h2 className={shopping_cart_styles.mobile_shopping_cart_header_text}>SHOPPING BAG</h2>
          <div className={shopping_cart_styles.mobile_all_check_area}>
            <span>전체선택</span>
            <div className={check_box_styles.check_box_wrapper}>
              <input type="checkbox" className={check_box_styles.check_input} />
              <label className={check_box_styles.check_box_label}>
                <svg
                  width="10"
                  height="6.8"
                  viewBox="0 0 13 10"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  className={check_box_styles.check_box_icon}
                >
                  <path
                    d="M4.15364 7.8347L0.859644 4.5427C0.813521 4.49494 0.758348 4.45685 0.697346 4.43065C0.636344 4.40444 0.570734 4.39065 0.504345 4.39007C0.437955 4.3895 0.372115 4.40215 0.310667 4.42729C0.249219 4.45243 0.193393 4.48956 0.146447 4.5365C0.0995002 4.58345 0.0623736 4.63927 0.0372332 4.70072C0.0120927 4.76217 -0.00055803 4.82801 1.88785e-05 4.8944C0.000595787 4.96079 0.0143889 5.0264 0.0405934 5.0874C0.0667979 5.1484 0.104889 5.20358 0.152644 5.2497L4.15264 9.2497L12.1526 1.2497C12.2437 1.1554 12.2941 1.0291 12.293 0.897999C12.2918 0.7669 12.2393 0.641495 12.1466 0.548791C12.0539 0.456086 11.9284 0.403502 11.7973 0.402363C11.6662 0.401223 11.5399 0.451621 11.4456 0.5427L4.15264 7.8347H4.15364Z"
                    fill="currentColor"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
        {/* 아이템이 생성될때마다 추가될 영역 */}
        <div className={shopping_cart_styles.mobile_shopping_cart_new_items_section}>
          <div className={shopping_cart_styles.mobile_shopping_cart_item}>
            <div className={shopping_cart_styles.mobile_shopping_cart_item_image_wrapper}>
              <Image
                src="/images/shopping-cart-test-image/totoro-image.svg"
                fill
                alt="토토로 이미지"
              />
            </div>
            <div className={shopping_cart_styles.mobile_shopping_cart_item_info}>
              <div
                className={shopping_cart_styles.mobile_shopping_cart_item_name_close_button_wrapper}
              >
                {/* 추후 기능 개발 시 상품명 추가하면 됨 */}
                <span>토토로 등신대</span>
                <button
                  type="button"
                  className={shopping_cart_styles.mobile_shopping_cart_close_icon_wrapper}
                >
                  <Image src="/icons/close-icon.svg" width={12} height={12} alt="닫기 아이콘" />
                </button>
              </div>
              <div className={shopping_cart_styles.mobile_shopping_cart_color_size_wrapper}>
                <div className={shopping_cart_styles.mobile_shopping_cart_item_color}>
                  <span className={shopping_cart_styles.mobile_shopping_cart_item_title}>
                    색상 <span>:</span>
                  </span>
                  {/* 추후 기능 개발시 색상 객체값 추가하면 됨 */}
                  <span className={shopping_cart_styles.mobile_shopping_cart_item_color}>
                    베이지
                  </span>
                </div>
                <div className={shopping_cart_styles.mobile_shopping_cart_item_size}>
                  <span className={shopping_cart_styles.mobile_shopping_cart_item_title}>
                    사이즈 <span>:</span>
                  </span>

                  {/* 추후 기능 개발시 사이즈 객체값 추가하면 됨 */}
                  <span className={shopping_cart_styles.mobile_shopping_cart_item_size}>소형</span>
                </div>
              </div>
              <div className={shopping_cart_styles.mobile_shopping_cart_item_count_price_wrapper}>
                <div className={shopping_cart_styles.mobile_shopping_cart_item_count_wrapper}>
                  <button type="button" onClick={() => setCount(count - 1)}>
                    -
                  </button>
                  <div>
                    <span>{count}</span>
                  </div>
                  <button type="button" onClick={() => setCount(count + 1)}>
                    +
                  </button>
                </div>
                {/* 추후 기능 개발 시 상품 가격 기재 */}
                <span>46,000원</span>
              </div>
            </div>
          </div>
          <div className={shopping_cart_styles.mobile_shopping_cart_item}>
            <div className={shopping_cart_styles.mobile_shopping_cart_item_image_wrapper}>
              <Image
                src="/images/shopping-cart-test-image/totoro-image.svg"
                fill
                alt="토토로 이미지"
              />
            </div>
            <div className={shopping_cart_styles.mobile_shopping_cart_item_info}>
              <div
                className={shopping_cart_styles.mobile_shopping_cart_item_name_close_button_wrapper}
              >
                {/* 추후 기능 개발 시 상품명 추가하면 됨 */}
                <span>토토로 등신대</span>
                <button
                  type="button"
                  className={shopping_cart_styles.mobile_shopping_cart_close_icon_wrapper}
                >
                  <Image src="/icons/close-icon.svg" width={12} height={12} alt="닫기 아이콘" />
                </button>
              </div>
              <div className={shopping_cart_styles.mobile_shopping_cart_color_size_wrapper}>
                <div className={shopping_cart_styles.mobile_shopping_cart_item_color}>
                  <span className={shopping_cart_styles.mobile_shopping_cart_item_title}>
                    색상 <span>:</span>
                  </span>
                  {/* 추후 기능 개발시 색상 객체값 추가하면 됨 */}
                  <span className={shopping_cart_styles.mobile_shopping_cart_item_color}>
                    베이지
                  </span>
                </div>
                <div className={shopping_cart_styles.mobile_shopping_cart_item_size}>
                  <span className={shopping_cart_styles.mobile_shopping_cart_item_title}>
                    사이즈 <span>:</span>
                  </span>

                  {/* 추후 기능 개발시 사이즈 객체값 추가하면 됨 */}
                  <span className={shopping_cart_styles.mobile_shopping_cart_item_size}>소형</span>
                </div>
              </div>
              <div className={shopping_cart_styles.mobile_shopping_cart_item_count_price_wrapper}>
                <div className={shopping_cart_styles.mobile_shopping_cart_item_count_wrapper}>
                  <button type="button" onClick={() => setCount(count - 1)}>
                    -
                  </button>
                  <div>
                    <span>{count}</span>
                  </div>
                  <button type="button" onClick={() => setCount(count + 1)}>
                    +
                  </button>
                </div>
                {/* 추후 기능 개발 시 상품 가격 기재 */}
                <span>46,000원</span>
              </div>
            </div>
          </div>
        </div>
        <div className={shopping_cart_styles.mobile_shopping_cart_recipe_section}>
          <div className={shopping_cart_styles.mobile_shopping_cart_recipe_text_wrapper}>
            <span>SUMMARY</span>
          </div>
          <div className={shopping_cart_styles.mobile_shopping_cart_recipe_buy_wrapper}>
            <span>구매내역</span>
          </div>
          {/* 장바구니 아이템이 추가되면 이 영역에 추가됨 */}
          <div className={shopping_cart_styles.mobile_shopping_cart_recipe_new_item_wrapper}>
            <div className={shopping_cart_styles.mobile_shopping_cart_recipe_item_title_wrapper}>
              <span>상품명</span>
              <span>상품 가격</span>
            </div>
            {/* 추후 기능 추가시 item 이름과 가격 기입 부분 */}
            <div className={shopping_cart_styles.mobile_shopping_cart_recipe_item_info_wrapper}>
              <span>토토로 등신대</span>
              <span>46,000 원</span>
            </div>
          </div>
          <div className={shopping_cart_styles.mobile_shopping_cart_recipe_total_price_wrapper}>
            <span>총 가격</span>
            <span>46,000 원</span>
          </div>
          <div className={shopping_cart_styles.mobile_shopping_cart_buy_button_wrapper}>
            <button className={`${styles.payment_button} `}>결제하기</button>
          </div>
        </div>
      </div>
    </>
  );
}
