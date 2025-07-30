'use client';

import Image from 'next/image';
import Link from 'next/link';
import my_page_header_styles from '@/styles/components/myPageHeader.module.css';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
export default function MyPageHeader() {
  const pathname = usePathname(); // 경로에 따른 text 변경을 위함
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const pageTitle =
    pathname === '/myPage'
      ? '마이페이지'
      : pathname.startsWith('/myPage/rewards')
        ? '당첨 내역'
        : '어디야 여긴';
  return (
    <>
      {/* 375px 모바일 헤더 */}
      <div className={my_page_header_styles.mobile_rootHeader}>
        <div className={my_page_header_styles.mobile_main_bar}>
          <div className={my_page_header_styles.mobile_logo}>
            {/* 로고 배경 이미지 */}
            <div className={my_page_header_styles.mobile_logo_background}>
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
              <Image src="/logo/sophie-logo.svg" alt="소피의창고 로고" width={65} height={30.74} />
            </Link>
          </div>
          <div className={my_page_header_styles.mobile_nav_item}>
            <Link className={my_page_header_styles.mobile_nav_item_movie} href="#">
              MOVIE
            </Link>
            <Link className={my_page_header_styles.mobile_nav_item_category} href="#">
              CATEGORY
            </Link>
            <Link className={my_page_header_styles.mobile_nav_item_new} href="#">
              NEW
            </Link>
            <Link className={my_page_header_styles.mobile_nav_item_gift} href="#">
              GIFT
            </Link>
          </div>
        </div>
        <div className={my_page_header_styles.mobile_my_page}>
          <div className={my_page_header_styles.mobile_my_page_text}>
            {isSearchOpen ? (
              <>
                <div className={my_page_header_styles.search_bar_search_icon_wrapper}>
                  <div className={my_page_header_styles.search_input_wrapper}>
                    <input
                      type="text"
                      placeholder="검색어를 입력하세요"
                      className={my_page_header_styles.search_input}
                    />
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className={my_page_header_styles.close_icon_button}
                    >
                      <Image
                        fill
                        className={my_page_header_styles.close_icon}
                        src="/icons/close-icon.svg"
                        alt="닫기 아이콘"
                      />
                    </button>
                  </div>
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    type="button"
                    className={my_page_header_styles.mobile_search_icon}
                  >
                    <Image src="/icons/search-icon.svg" alt="검색 아이콘" width={18} height={18} />
                  </button>
                </div>
              </>
            ) : (
              <span>{pageTitle}</span>
            )}
          </div>

          {isSearchOpen || (
            <div className={my_page_header_styles.my_page_icon_wrapper}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                type="button"
                className={my_page_header_styles.mobile_search_icon}
              >
                <Image src="/icons/search-icon.svg" alt="검색 아이콘" width={18} height={18} />
              </button>

              {isSearchOpen || (
                <Link href="/" className={my_page_header_styles.mobile_cart_icon_warpper}>
                  <Image
                    src="/icons/mine-shopping-cart-icon.svg"
                    alt="장바구니 아이콘"
                    width={23}
                    height={23}
                  />
                  <span className={my_page_header_styles.mobile_cart_count}>0</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      {/* 481px부터 768px까지의 헤더 */}
      <div className={my_page_header_styles.header_376px}>
        <div className={my_page_header_styles.header_376px_main_bar}>
          <div className={my_page_header_styles.header_376px_logo_wrapper}>
            <div className={my_page_header_styles.header_376px_logo_background}>
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
            <Image src="/logo/sophie-logo.svg" alt="소피의창고 로고" fill />
          </div>
          <button className={my_page_header_styles.header_376px_menu_icon_wrapper}>
            <Image src="/icons/white-menu-icon.svg" alt="메뉴 아이콘" fill />
          </button>
        </div>
        <div className={my_page_header_styles.haeder_376px_search_area}>
          <div className={my_page_header_styles.header_376px_search_bar}>
            <input type="text" />
            <Image
              src="/icons/search-icon.svg"
              alt="검색 아이콘"
              width={16}
              height={16}
              className={my_page_header_styles.header_376px_searchIcon}
            />
          </div>

          <div className={my_page_header_styles.header_376px_icon_wrapper}>
            <Link href="/" className={my_page_header_styles.header_376px_current_icon_wrapper}>
              <Image src="/icons/recent-icon.svg" alt="최근본상품 아이콘" width={17} height={17} />
            </Link>
            <Link href="/" className={my_page_header_styles.header_376px_my_page_icon_wrapper}>
              <Image src="/icons/mypage-icon.svg" alt="마이페이지 아이콘" width={17} height={17} />
            </Link>
            <Link href="/" className={my_page_header_styles.header_376px_cart_icon_wrapper}>
              <Image src="/icons/cart-icon.svg" alt="장바구니 아이콘" width={17} height={17} />
            </Link>
          </div>
        </div>
      </div>
      {/* web 헤더  500px ~*/}
      <div className={my_page_header_styles.web_header}>
        <div className={my_page_header_styles.web_header_main_bar}>
          <nav className={my_page_header_styles.web_header_nav_items}>
            <div className={my_page_header_styles.web_header_link_nav_wrapper}>
              <div className={my_page_header_styles.web_header_home_wrapper}>
                <div className={my_page_header_styles.web_header_background}>
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
                <Link href="#">HOME</Link>
              </div>
              <ul className={my_page_header_styles.web_header_nav_link_items}>
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
            <div className={my_page_header_styles.web_header_login_wrapper}>
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

          <button className={my_page_header_styles.web_header_menu_icon_wrapper}>
            <Image src="/icons/white-menu-icon.svg" alt="메뉴 아이콘" fill />
          </button>
        </div>
        <div className={my_page_header_styles.web_header_search_area}>
          <div className={my_page_header_styles.web_header_logo_search_bar_wrapper}>
            <div className={my_page_header_styles.web_header_logo_wrapper}>
              <Image src="/logo/sophie-logo.svg" alt="소피의창고 로고" fill sizes="100%" />
            </div>

            <div className={my_page_header_styles.web_header_search_bar}>
              <input type="text" />
              <div className={my_page_header_styles.web_header_search_icon_wrapper}>
                <Image
                  src="/icons/search-icon.svg"
                  alt="검색 아이콘"
                  fill
                  className={my_page_header_styles.web_header_search_icon}
                />
              </div>
            </div>
          </div>

          <div className={my_page_header_styles.web_header_icon_wrapper}>
            <Link href="/" className={my_page_header_styles.web_header_current_icon_wrapper}>
              <Image src="/icons/recent-icon.svg" alt="최근본상품 아이콘" width={17} height={17} />
            </Link>
            <Link href="/" className={my_page_header_styles.web_header_my_page_icon_wrapper}>
              <Image src="/icons/mypage-icon.svg" alt="마이페이지 아이콘" width={17} height={17} />
            </Link>
            <Link href="/" className={my_page_header_styles.web_header_cart_icon_wrapper}>
              <Image src="/icons/cart-icon.svg" alt="장바구니 아이콘" width={17} height={17} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
