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
      <div className={wishlist_styles.mobile_wishlist_page}>
        <div className={wishlist_styles.checkbox_container}>
          <input type="checkbox" id="option" name="option" className={wishlist_styles.checkbox} />
          <label htmlFor="option" className={wishlist_styles.checkbox_label}>
            전체선택
          </label>
        </div>
        <div>
          <input type="checkbox" className={wishlist_styles.checkbox} />
          <Image src="/icons/" alt="메뉴 아이콘" fill />
        </div>
      </div>
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
                <p className={wishlist_styles.web_wishlist_view_label}>날짜/주문번호</p>
                <p className={wishlist_styles.web_wishlist_view_label}>상품명/옵션</p>
                <p className={wishlist_styles.web_wishlist_view_label}>상품금액</p>
                <p className={wishlist_styles.web_wishlist_view_label}>진행상태</p>
                <p className={wishlist_styles.web_wishlist_view_label}>접수</p>
              </div>
              <ul className={wishlist_styles.web_wishlist_view_list_wrapper}>
                <li className={wishlist_styles.web_wishlist_view_list}>조회내역이 없습니다.</li>
              </ul>
              <hr className={wishlist_styles.web_wishlist_view_list_divider} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
