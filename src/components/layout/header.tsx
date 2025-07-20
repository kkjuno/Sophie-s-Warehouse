import header_styles from '@/styles/components/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* 375px 모바일 헤더 */}
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

      {/* 376px 헤더 */}
      <div className={header_styles.header_376px}>
        <div className={header_styles.header_376px_main_bar}>
          <div className={header_styles.header_376px_logo_wrapper}>
            <div className={header_styles.header_376px_logo_background}>
              <svg
                width="106"
                height="50"
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
            <Image src="/logo/소피의창고 로고.svg" alt="소피의창고 로고" fill />
          </div>
          <button className={header_styles.header_376px_menu_icon_wrapper}>
            <Image src="/icons/white-menu-icon.svg" alt="메뉴 아이콘" fill />
          </button>
        </div>
        <div className={header_styles.haeder_376px_search_area}>
          <div className={header_styles.header_376px_search_bar}>
            <input type="text" />
            <Image
              src="./icons/검색 아이콘.svg"
              alt="검색 아이콘"
              width={16}
              height={16}
              className={header_styles.header_376px_searchIcon}
            />
          </div>

          <div className={header_styles.header_376px_icon_wrapper}>
            <Link href="/" className={header_styles.header_376px_current_icon_wrapper}>
              <Image
                src="/icons/최근본상품 아이콘.svg"
                alt="최근본상품 아이콘"
                width={17}
                height={17}
              />
            </Link>
            <Link href="/" className={header_styles.header_376px_my_page_icon_wrapper}>
              <Image
                src="/icons/마이페이지 아이콘.svg"
                alt="마이페이지 아이콘"
                width={17}
                height={17}
              />
            </Link>
            <Link href="/" className={header_styles.header_376px_cart_icon_wrapper}>
              <Image
                src="/icons/장바구니 아이콘.svg"
                alt="장바구니 아이콘"
                width={17}
                height={17}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* web 헤더  500px ~*/}
      <div className={header_styles.web_header}>
        <div className={header_styles.web_header_main_bar}>
          <nav className={header_styles.web_header_nav_items}>
            <div className={header_styles.web_header_link_nav_wrapper}>
              <div className={header_styles.web_header_home_wrapper}>
                <div className={header_styles.web_header_background}>
                  <svg
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
                </div>
                <Link href="#">HOE</Link>
              </div>
              <ul className={header_styles.web_header_nav_link_items}>
                <li>
                  <Link href="#">MOVIE</Link>
                </li>
                <li>
                  <Link href="#">CATEGORY</Link>
                </li>
                <li>
                  <Link href="#">NEW</Link>
                </li>
                <li>
                  <Link href="#">GIFT</Link>
                </li>
              </ul>
            </div>
            <div className={header_styles.web_header_login_wrapper}>
              <ul>
                <li>
                  <Link href="#">로그인</Link>
                </li>
                <li>
                  <Link href="#">회원가입</Link>
                </li>
              </ul>
            </div>
          </nav>

          <button className={header_styles.web_header_menu_icon_wrapper}>
            <Image src="/icons/white-menu-icon.svg" alt="메뉴 아이콘" fill />
          </button>
        </div>
        <div className={header_styles.web_header_search_area}>
          <div className={header_styles.web_header_logo_search_bar_wrapper}>
            <div className={header_styles.web_header_logo_wrapper}>
              <Image src="/logo/소피의창고 로고.svg" alt="소피의창고 로고" fill sizes="100%" />
            </div>

            <div className={header_styles.web_header_search_bar}>
              <input type="text" />
              <div className={header_styles.web_header_search_icon_wrapper}>
                <Image
                  src="./icons/검색 아이콘.svg"
                  alt="검색 아이콘"
                  fill
                  className={header_styles.web_header_search_icon}
                />
              </div>
            </div>
          </div>

          <div className={header_styles.web_header_icon_wrapper}>
            <Link href="/" className={header_styles.web_header_current_icon_wrapper}>
              <Image
                src="/icons/최근본상품 아이콘.svg"
                alt="최근본상품 아이콘"
                width={17}
                height={17}
              />
            </Link>
            <Link href="/" className={header_styles.web_header_my_page_icon_wrapper}>
              <Image
                src="/icons/마이페이지 아이콘.svg"
                alt="마이페이지 아이콘"
                width={17}
                height={17}
              />
            </Link>
            <Link href="/" className={header_styles.web_header_cart_icon_wrapper}>
              <Image
                src="/icons/장바구니 아이콘.svg"
                alt="장바구니 아이콘"
                width={17}
                height={17}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
