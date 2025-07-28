'use client';

import Image from 'next/image';
import wishlist_styles from '@/styles/myPage/wishlist.module.css';

export default function WebWishlistList() {
  return (
    <section className={wishlist_styles.web_wishlist_view_wrapper}>
      <h2 className={wishlist_styles.web_wishlist_view_tit}>찜리스트</h2>
      <div className={wishlist_styles.web_wishlist_view_label_wrapper}>
        <div className={wishlist_styles.web_wishlist_view_label}>
          <input type="checkbox" id="option" name="option" className={wishlist_styles.checkbox} />
        </div>
        <p className={wishlist_styles.web_wishlist_view_label}>상품명/옵션</p>
        <p className={wishlist_styles.web_wishlist_view_label}>상품금액/수량</p>
        <p className={wishlist_styles.web_wishlist_view_label}>혜택</p>
        <p className={wishlist_styles.web_wishlist_view_label}>합계</p>
      </div>
      <ul className={wishlist_styles.web_wishlist_view_list_wrapper}>
        <li className={wishlist_styles.web_wishlist_view_list}>
          <div className={wishlist_styles.web_wishlist_view_list_label}>
            <input type="checkbox" id="option" name="option" className={wishlist_styles.checkbox} />
          </div>
          <div className={wishlist_styles.web_wishlist_view_list_label}>
            <div className={wishlist_styles.web_wishlist_view_list_container}>
              <div className={wishlist_styles.web_wishlist_view_list_img_wrapper}>
                <Image src="/images/products/howl/howl-candle-light.svg" fill alt="토토로 이미지" />
              </div>
              <p className={wishlist_styles.web_wishlist_view_list_tit_wrapper}>
                <strong className={wishlist_styles.web_wishlist_view_list_label_tit}>
                  이웃집 토토로
                </strong>
                소토토로 미니피규어(멍~)
              </p>
            </div>
          </div>
          <p className={wishlist_styles.web_wishlist_view_list_label}>46,000원</p>
          <p className={wishlist_styles.web_wishlist_view_list_label}></p>
          <div className={wishlist_styles.web_wishlist_view_list_label}>
            <div className={wishlist_styles.web_wishlist_view_list_button_wrapper}>
              <button className={wishlist_styles.web_wishlist_view_list_button}>장바구니</button>
              <button className={wishlist_styles.web_wishlist_view_list_button}>삭제하기</button>
            </div>
          </div>
        </li>
        <li className={wishlist_styles.web_wishlist_view_list}>
          <div className={wishlist_styles.web_wishlist_view_list_label}>
            <input type="checkbox" id="option" name="option" className={wishlist_styles.checkbox} />
          </div>
          <div className={wishlist_styles.web_wishlist_view_list_label}>
            <div className={wishlist_styles.web_wishlist_view_list_container}>
              <div className={wishlist_styles.web_wishlist_view_list_img_wrapper}>
                <Image src="/images/products/howl/howl-candle-light.svg" fill alt="토토로 이미지" />
              </div>
              <p className={wishlist_styles.web_wishlist_view_list_tit_wrapper}>
                <strong className={wishlist_styles.web_wishlist_view_list_label_tit}>
                  이웃집 토토로
                </strong>
                소토토로 미니피규어(멍~)
              </p>
            </div>
          </div>
          <p className={wishlist_styles.web_wishlist_view_list_label}>46,000원</p>
          <p className={wishlist_styles.web_wishlist_view_list_label}></p>
          <div className={wishlist_styles.web_wishlist_view_list_label}>
            <div className={wishlist_styles.web_wishlist_view_list_button_wrapper}>
              <button className={wishlist_styles.web_wishlist_view_list_button}>장바구니</button>
              <button className={wishlist_styles.web_wishlist_view_list_button}>삭제하기</button>
            </div>
          </div>
        </li>
      </ul>
      <hr className={wishlist_styles.web_wishlist_view_list_divider} />
    </section>
  );
}
