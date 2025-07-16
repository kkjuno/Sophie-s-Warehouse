import header_styles from '@/styles/components/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* 모바일 헤더 */}
      <div className={header_styles.mobile_rootHeader}>
        <div className={header_styles.mobile_main_bar}>
          <div className={header_styles.mobile_logo}>
            {/* 로고 배경 이미지 */}
            <div className={header_styles.mobile_logo_background}>
              <svg
                width="106"
                height="40"
                viewBox="0 0 106 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-21.7602 9.09341C-19.397 3.57697 -13.9734 0 -7.97206 0H77.7688C83.5951 0 88.8942 3.37372 91.3597 8.6526L106 40H-35L-21.7602 9.09341Z"
                  fill="#FDF6E3"
                />
              </svg>
            </div>
            <Link href="/">
              <Image
                src="/logo/소피의창고 로고.svg"
                alt="소피의창고 로고"
                width={65}
                height={30.74}
              />
            </Link>
          </div>
          <div className={header_styles.mobile_nav_item}>
            <Link className={header_styles.mobile_nav_item_movie} href="#">
              MOVIE
            </Link>
            <Link className={header_styles.mobile_nav_item_category} href="#">
              CATEGORY
            </Link>
            <Link className={header_styles.mobile_nav_item_new} href="#">
              NEW
            </Link>
            <Link className={header_styles.mobile_nav_item_gift} href="#">
              GIFT
            </Link>
          </div>
        </div>
        <div className={header_styles.mobile_search_area}>
          <div className={header_styles.mobile_search_bar}>
            <input type="text" />
            <Image
              src="./icons/검색 아이콘.svg"
              alt="검색 아이콘"
              width={16}
              height={16}
              className={header_styles.mobile_searchIcon}
            />
          </div>
          <Link href="/" className={header_styles.mobile_cart_icon_warpper}>
            <Image src="/icons/장바구니 아이콘.svg" alt="장바구니 아이콘" width={18} height={17} />
            <span className={header_styles.mobile_cart_count}>0</span>
          </Link>
        </div>
      </div>

      {/* 웹 헤더 */}
      <div className={header_styles.web_rootHeader}>
        <div className={header_styles.web_main_bar}>
          <div className={header_styles.web_nav_item}>
            {/* HOME + 배경 */}
            <div className={header_styles.web_home_wrapper}>
              <svg
                className={header_styles.web_nav_background}
                width="140"
                height="55"
                viewBox="0 0 140 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7449 10.5671C15.6885 4.28415 21.4982 0 28.0749 0H110.68C117.117 0 122.836 4.107 124.893 10.2065L140 55H0L13.7449 10.5671Z"
                  fill="#FDF6E3"
                />
              </svg>
              <Link className={header_styles.web_nav_item_home} href="#">
                HOME
              </Link>
            </div>

            <Link className={header_styles.web_nav_item_movie} href="#">
              MOVIE
            </Link>
            <Link className={header_styles.web_nav_item_category} href="#">
              CATEGORY
            </Link>
            <Link className={header_styles.web_nav_item_new} href="#">
              NEW
            </Link>
            <Link className={header_styles.web_nav_item_gift} href="#">
              GIFT
            </Link>
          </div>

          <div className={header_styles.web_headerAuth}>
            <Link href="/" className={header_styles.web_login}>
              로그인
            </Link>
            <Link href="/" className={header_styles.web_signUp}>
              회원가입
            </Link>
          </div>
        </div>

        {/* 로고 및 검색창 아이콘 영역 */}
        <div className={header_styles.web_searchSection}>
          {/* 로고 */}
          <div className={header_styles.web_logoWrapper}>
            <Link href="/">
              <Image
                src="/logo/소피의창고 로고.svg"
                alt="소피의창고 로고"
                width={129}
                height={61}
              />
            </Link>
          </div>
          {/* 검색창 영역 */}
          <div className={header_styles.web_search_bar}>
            <input type="text" />
            <Image
              src="./icons/검색 아이콘.svg"
              alt="검색 아이콘"
              width={19.11}
              height={19.11}
              className={header_styles.web_searchIcon}
            />
          </div>
          {/* 아이콘 영역 */}
          <div className={header_styles.web_iconArea}>
            <Link href="/" className={header_styles.web_recent_item_icon_wrapper}>
              <Image
                src="/icons/최근본상품 아이콘.svg"
                alt="최근본상품 아이콘"
                width={22}
                height={22}
              />
            </Link>
            <Link href="/" className={header_styles.web_my_page_icon_wrapper}>
              <Image
                src="/icons/마이페이지 아이콘.svg"
                alt="마이페이지 아이콘"
                width={16}
                height={19.2}
              />
            </Link>
            <Link href="/" className={header_styles.web_shopping_cart_icon_wrapper}>
              <Image
                src="/icons/장바구니 아이콘.svg"
                alt="장바구니 아이콘"
                width={21}
                height={19.83}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
