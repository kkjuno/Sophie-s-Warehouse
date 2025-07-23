import '@/styles/globals.css';
import wishlist_styles from '@/styles/myPage/wishlist.module.css';
import styles from '@/styles/components/button.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function wishlistPage() {
  return (
    <>
      {/* 모바일 찜리스트 페이지 */}
      {/* 모바일 상단 네비 */}
      <nav className={wishlist_styles.mobile_wishlist_nav}>
        <Link className={wishlist_styles.mobile_nav_item} href="#">
          주문/배송 조회
        </Link>
        <Link className={wishlist_styles.mobile_nav_item} href="#">
          지난 주문 조회
        </Link>
        <Link className={wishlist_styles.mobile_nav_item} href="#">
          취소/반품/교환
        </Link>
        <Link className={wishlist_styles.mobile_nav_item} href="#">
          찜 리스트
        </Link>
      </nav>

      {/* 모바일 찜리스트 부분 */}
      <section className={wishlist_styles.mobile_wishlist_page_wrapper}>
        <div className={wishlist_styles.mobile_checkbox_container}>
          <input type="checkbox" id="option" name="option" className={wishlist_styles.checkbox} />
          <label htmlFor="option" className={wishlist_styles.mobile_checkbox_label}>
            전체선택
          </label>
        </div>

        <div className={wishlist_styles.mobile_wishlist_list_wrapper}>
          <div className={wishlist_styles.mobile_wishlist_list}>
            <input type="checkbox" className={wishlist_styles.checkbox} />
            <div className={wishlist_styles.mobile_wishlist_img_wrapper}>
              <Image src="/images/howl-candle-light.svg" fill alt="토토로 이미지" />
            </div>

            <div className={wishlist_styles.mobile_wishlist_list_item}>
              <p className={wishlist_styles.mobile_wishlist_list_item_name}>토토로 등신대</p>
              <div className={wishlist_styles.mobile_wishlist_list_text_wrapper}>
                <p className={wishlist_styles.mobile_wishlist_list_point_text}>색상 :</p>
                <p className={wishlist_styles.mobile_wishlist_list_text}>베이지</p>
              </div>
              <div className={wishlist_styles.mobile_wishlist_list_text_wrapper}>
                <p className={wishlist_styles.mobile_wishlist_list_point_text}>사이즈 :</p>
                <p className={wishlist_styles.mobile_wishlist_list_text}>소형</p>
              </div>
              <p className={wishlist_styles.mobile_wishlist_list_price}>46,000원</p>
            </div>
          </div>
          <div className={wishlist_styles.mobile_shoping_cart_icon_wrapper}>
            <svg
              className={wishlist_styles.mobile_shoping_cart_icon}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.874721C0 0.713697 0.0632147 0.559268 0.175738 0.445406C0.28826 0.331545 0.440874 0.267578 0.600006 0.267578H2.40002C2.53386 0.267616 2.66384 0.312933 2.7693 0.396322C2.87476 0.479712 2.94964 0.596387 2.98203 0.727792L3.46803 2.69615H17.4002C17.4913 2.69618 17.5812 2.71721 17.6631 2.75766C17.745 2.7981 17.8168 2.8569 17.8729 2.92958C17.929 3.00227 17.968 3.08693 17.9869 3.17714C18.0058 3.26735 18.0042 3.36074 17.9822 3.45022L16.1821 10.7359C16.1498 10.8673 16.0749 10.984 15.9694 11.0674C15.864 11.1508 15.734 11.1961 15.6001 11.1961H4.80004C4.66621 11.1961 4.53622 11.1508 4.43076 11.0674C4.3253 10.984 4.25043 10.8673 4.21804 10.7359L1.93202 1.48186H0.600006C0.440874 1.48186 0.28826 1.4179 0.175738 1.30404C0.0632147 1.19017 0 1.03575 0 0.874721ZM3.76803 3.91044L5.26805 9.98186H15.1321L16.6322 3.91044H3.76803ZM6.00006 13.6247C5.68179 13.6247 5.37656 13.7527 5.15152 13.9804C4.92647 14.2081 4.80004 14.517 4.80004 14.839C4.80004 15.1611 4.92647 15.4699 5.15152 15.6976C5.37656 15.9254 5.68179 16.0533 6.00006 16.0533C6.31832 16.0533 6.62355 15.9254 6.84859 15.6976C7.07364 15.4699 7.20007 15.1611 7.20007 14.839C7.20007 14.517 7.07364 14.2081 6.84859 13.9804C6.62355 13.7527 6.31832 13.6247 6.00006 13.6247ZM3.60003 14.839C3.60003 14.1949 3.85289 13.5772 4.30298 13.1217C4.75307 12.6663 5.36353 12.4104 6.00006 12.4104C6.63658 12.4104 7.24704 12.6663 7.69713 13.1217C8.14722 13.5772 8.40008 14.1949 8.40008 14.839C8.40008 15.4831 8.14722 16.1008 7.69713 16.5563C7.24704 17.0117 6.63658 17.2676 6.00006 17.2676C5.36353 17.2676 4.75307 17.0117 4.30298 16.5563C3.85289 16.1008 3.60003 15.4831 3.60003 14.839ZM14.4001 13.6247C14.0819 13.6247 13.7766 13.7527 13.5516 13.9804C13.3266 14.2081 13.2001 14.517 13.2001 14.839C13.2001 15.1611 13.3266 15.4699 13.5516 15.6976C13.7766 15.9254 14.0819 16.0533 14.4001 16.0533C14.7184 16.0533 15.0236 15.9254 15.2487 15.6976C15.4737 15.4699 15.6001 15.1611 15.6001 14.839C15.6001 14.517 15.4737 14.2081 15.2487 13.9804C15.0236 13.7527 14.7184 13.6247 14.4001 13.6247ZM12.0001 14.839C12.0001 14.1949 12.253 13.5772 12.7031 13.1217C13.1532 12.6663 13.7636 12.4104 14.4001 12.4104C15.0367 12.4104 15.6471 12.6663 16.0972 13.1217C16.5473 13.5772 16.8002 14.1949 16.8002 14.839C16.8002 15.4831 16.5473 16.1008 16.0972 16.5563C15.6471 17.0117 15.0367 17.2676 14.4001 17.2676C13.7636 17.2676 13.1532 17.0117 12.7031 16.5563C12.253 16.1008 12.0001 15.4831 12.0001 14.839Z"
                fill="#000"
              />
            </svg>
          </div>
        </div>

        {/* 선택상품 삭제 버튼 */}
        <button className={wishlist_styles.mobile_delete_selected_items_button}>
          선택상품 삭제
        </button>

        {/* 페이지 이동 버튼 */}
        <div className={wishlist_styles.mobile_pagination_button_wrapper}>
          <svg
            className={wishlist_styles.mobile_pagination_button}
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9551 0C10.6782 7.21025e-05 10.4127 0.103024 10.2168 0.286133L4.30566 5.81445C4.10979 5.99772 4.00001 6.24672 4 6.50586C4 6.76501 4.10978 7.01399 4.30566 7.19727L10.2168 12.7256C10.4137 12.9035 10.6774 13.0021 10.9512 13C11.2251 12.9978 11.4879 12.8951 11.6816 12.7139C11.8753 12.5327 11.9849 12.2874 11.9873 12.0312C11.9897 11.7751 11.8846 11.5281 11.6943 11.3438L6.52246 6.50586L11.6943 1.66797C11.89 1.48481 11.9999 1.23645 12 0.977539C12 0.718441 11.8901 0.469398 11.6943 0.286133C11.4984 0.102911 11.2321 0 10.9551 0ZM6.95508 0C6.67816 7.21025e-05 6.41266 0.103024 6.2168 0.286133L0.305664 5.81445C0.109795 5.99772 1.14441e-05 6.24672 0 6.50586C0 6.76501 0.109784 7.01399 0.305664 7.19727L6.2168 12.7256C6.41375 12.9035 6.67739 13.0021 6.95117 13C7.22513 12.9978 7.48792 12.8951 7.68164 12.7139C7.87528 12.5327 7.9849 12.2874 7.9873 12.0312C7.98968 11.7751 7.88457 11.5281 7.69434 11.3438L2.52246 6.50586L7.69434 1.66797C7.88999 1.48481 7.99988 1.23645 8 0.977539C8 0.718441 7.89014 0.469398 7.69434 0.286133C7.4984 0.102911 7.23214 0 6.95508 0Z"
              fill="#949494"
            />
          </svg>
          <svg
            className={wishlist_styles.mobile_pagination_button}
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69408 0.28615C7.88996 0.469427 8 0.717971 8 0.977125C8 1.23628 7.88996 1.48482 7.69408 1.6681L2.52205 6.5059L7.69408 11.3437C7.88441 11.528 7.98972 11.7749 7.98734 12.0312C7.98496 12.2874 7.87508 12.5325 7.68135 12.7137C7.48763 12.895 7.22557 12.9977 6.95161 13C6.67765 13.0022 6.41372 12.9037 6.21666 12.7257L0.305919 7.19688C0.110039 7.0136 0 6.76505 0 6.5059C0 6.24675 0.110039 5.9982 0.305919 5.81493L6.21666 0.28615C6.4126 0.102928 6.67831 0 6.95537 0C7.23243 0 7.49814 0.102928 7.69408 0.28615Z"
              fill="#949494"
            />
          </svg>
          <div className={wishlist_styles.mobile_pagination_count_wrapper}>
            <p className={wishlist_styles.mobile_pagination_count}>1</p>
          </div>
          <svg
            className={wishlist_styles.mobile_pagination_button}
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.305919 0.28615C0.110039 0.469427 0 0.717971 0 0.977125C0 1.23628 0.110039 1.48482 0.305919 1.6681L5.47795 6.5059L0.305919 11.3437C0.115591 11.528 0.0102748 11.7749 0.0126554 12.0312C0.015036 12.2874 0.124922 12.5325 0.318647 12.7137C0.512371 12.895 0.774433 12.9977 1.04839 13C1.32235 13.0022 1.58628 12.9037 1.78334 12.7257L7.69408 7.19688C7.88996 7.0136 8 6.76505 8 6.5059C8 6.24675 7.88996 5.9982 7.69408 5.81493L1.78334 0.28615C1.5874 0.102928 1.32169 0 1.04463 0C0.767573 0 0.501858 0.102928 0.305919 0.28615Z"
              fill="#949494"
            />
          </svg>
          <svg
            className={wishlist_styles.mobile_pagination_button}
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.04492 0C1.32184 7.21025e-05 1.58734 0.103024 1.7832 0.286133L7.69434 5.81445C7.89021 5.99772 7.99999 6.24672 8 6.50586C8 6.76501 7.89022 7.01399 7.69434 7.19727L1.7832 12.7256C1.58625 12.9035 1.32261 13.0021 1.04883 13C0.774871 12.9978 0.512084 12.8951 0.318359 12.7139C0.124716 12.5327 0.0151007 12.2874 0.0126953 12.0312C0.0103153 11.7751 0.115434 11.5281 0.305664 11.3438L5.47754 6.50586L0.305664 1.66797C0.110014 1.48481 0.000117187 1.23645 0 0.977539C0 0.718441 0.109864 0.469398 0.305664 0.286133C0.501603 0.102911 0.767864 0 1.04492 0ZM5.04492 0C5.32184 7.21025e-05 5.58734 0.103024 5.7832 0.286133L11.6943 5.81445C11.8902 5.99772 12 6.24672 12 6.50586C12 6.76501 11.8902 7.01399 11.6943 7.19727L5.7832 12.7256C5.58625 12.9035 5.32261 13.0021 5.04883 13C4.77487 12.9978 4.51208 12.8951 4.31836 12.7139C4.12472 12.5327 4.0151 12.2874 4.0127 12.0312C4.01032 11.7751 4.11543 11.5281 4.30566 11.3438L9.47754 6.50586L4.30566 1.66797C4.11001 1.48481 4.00012 1.23645 4 0.977539C4 0.718441 4.10986 0.469398 4.30566 0.286133C4.5016 0.102911 4.76786 0 5.04492 0Z"
              fill="#949494"
            />
          </svg>
        </div>
      </section>

      {/* 웹 찜리스트 페이지 */}
      {/* 웹 상단 현재 위치 */}
      <div className={wishlist_styles.web_wishlist}>
        <div
          className={wishlist_styles.web_wishlist_navigation}
          aria-label="현재 위치"
          role="navigation"
        >
          <p className={wishlist_styles.web_wishlist_current_page}>
            HOME &nbsp; &gt; &nbsp; 마이페이지 &nbsp; &gt; &nbsp; 쇼핑 정보 &nbsp; &gt; &nbsp;
            <span className={wishlist_styles.web_wishlist_navigation_current}>찜리스트</span>
          </p>
        </div>

        <div className={wishlist_styles.web_order_wrapper}>
          {/* 왼쪽 사이드 메뉴 */}
          <aside className={wishlist_styles.web_wishlist_aside}>
            <hr className={wishlist_styles.web_wishlist_aside_divider_top} />
            <h1 className={wishlist_styles.web_wishlist_list}>마이페이지</h1>
            <h2 className={wishlist_styles.web_wishlist_list_tit}>쇼핑 정보</h2>
            <ul className={wishlist_styles.web_wishlist_list_text}>
              <li>
                <Link href="#">주문/배송 조회</Link>
              </li>
              <li>
                <Link href="#">취소/반품/교환 내역</Link>
              </li>
              <li>
                <Link href="#">찜 리스트</Link>
              </li>
            </ul>

            <hr className={wishlist_styles.web_wishlist_aside_divider} />
            <h2 className={wishlist_styles.web_wishlist_list_tit}>혜택 관리</h2>
            <ul className={wishlist_styles.web_wishlist_list_text}>
              <li>
                <Link href="#">스탬프</Link>
              </li>
              <li>
                <Link href="#">당첨 내역</Link>
              </li>
            </ul>

            <hr className={wishlist_styles.web_wishlist_aside_divider} />
            <h2 className={wishlist_styles.web_wishlist_list_tit}>회원 정보</h2>
            <ul className={wishlist_styles.web_wishlist_list_text}>
              <li>
                <Link href="#">회원 정보 수정</Link>
              </li>
              <li>
                <Link href="#">마케팅 수신 동의</Link>
              </li>
              <li>
                <Link href="#">회원 탈퇴</Link>
              </li>
              <li>
                <Link href="#">배송지 관리</Link>
              </li>
            </ul>
          </aside>

          {/* 웹 우측 컨텐츠들 */}
          <div className={wishlist_styles.web_wishlist_sections}>
            {/* 웹 등급혜택 */}
            <section className={wishlist_styles.web_wishlist_membership_wrapper}>
              <div className={wishlist_styles.web_wishlist_membership}>
                <p className={wishlist_styles.web_wishlist_membership_name}>장유하님의</p>
                {/* 버튼 컴포넌트 작업 전 대체 */}
                <button className={`${styles.inquiry_button} `}>조회</button>
              </div>
              <hr className={wishlist_styles.web_wishlist_membership_divider} />
              <div className={wishlist_styles.web_wishlist_stamp}>
                <p className={wishlist_styles.web_wishlist_label}>스탬프</p>
                <p className={wishlist_styles.web_wishlist_count}>0 개</p>
              </div>
              <hr className={wishlist_styles.web_wishlist_membership_divider} />
              <div className={wishlist_styles.web_wishlist_membership_point}>
                <p className={wishlist_styles.web_wishlist_membership_label}>통합 멤버십 포인트</p>
                <p className={wishlist_styles.web_wishlist_membership_point_count}>1,000 p</p>
                <p className={wishlist_styles.web_wishlist_membership_point_info}>
                  상품 구매 후 구매 확정 시 직접 반영 됩니다.
                </p>
              </div>
            </section>

            {/* 웹 찜리스트 조회 */}
            <section className={wishlist_styles.web_wishlist_view_wrapper}>
              <h2 className={wishlist_styles.web_wishlist_view_tit}>찜리스트</h2>
              <div className={wishlist_styles.web_wishlist_view_label_wrapper}>
                <div className={wishlist_styles.web_wishlist_view_label}>
                  <input
                    type="checkbox"
                    id="option"
                    name="option"
                    className={wishlist_styles.checkbox}
                  />
                </div>
                <p className={wishlist_styles.web_wishlist_view_label}>상품명/옵션</p>
                <p className={wishlist_styles.web_wishlist_view_label}>상품금액/수량</p>
                <p className={wishlist_styles.web_wishlist_view_label}>혜택</p>
                <p className={wishlist_styles.web_wishlist_view_label}>합계</p>
              </div>
              <ul className={wishlist_styles.web_wishlist_view_list_wrapper}>
                <li className={wishlist_styles.web_wishlist_view_list}>
                  <div className={wishlist_styles.web_wishlist_view_list_label}>
                    <input
                      type="checkbox"
                      id="option"
                      name="option"
                      className={wishlist_styles.checkbox}
                    />
                  </div>
                  <div className={wishlist_styles.web_wishlist_view_list_label}>
                    <div className={wishlist_styles.web_wishlist_view_list_container}>
                      <div className={wishlist_styles.web_wishlist_view_list_img_wrapper}>
                        <Image src="/images/howl-candle-light.svg" fill alt="토토로 이미지" />
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
                      <button className={wishlist_styles.web_wishlist_view_list_button}>
                        장바구니
                      </button>
                      <button className={wishlist_styles.web_wishlist_view_list_button}>
                        삭제하기
                      </button>
                    </div>
                  </div>
                </li>
                <li className={wishlist_styles.web_wishlist_view_list}>
                  <div className={wishlist_styles.web_wishlist_view_list_label}>
                    <input
                      type="checkbox"
                      id="option"
                      name="option"
                      className={wishlist_styles.checkbox}
                    />
                  </div>
                  <div className={wishlist_styles.web_wishlist_view_list_label}>
                    <div className={wishlist_styles.web_wishlist_view_list_container}>
                      <div className={wishlist_styles.web_wishlist_view_list_img_wrapper}>
                        <Image src="/images/howl-candle-light.svg" fill alt="토토로 이미지" />
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
                      <button className={wishlist_styles.web_wishlist_view_list_button}>
                        장바구니
                      </button>
                      <button className={wishlist_styles.web_wishlist_view_list_button}>
                        삭제하기
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              <hr className={wishlist_styles.web_wishlist_view_list_divider} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
