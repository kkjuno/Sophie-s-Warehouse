'use client';
import header_styles from '@/styles/components/header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useUserStore from '@/zustand/userStore';
import HeaderHamburgurMenu from './headerHamburgerMenu';

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  // 클라이언트 사이드에서만 실행
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Zustand에서 user 상태 및 resetUser 액션 가져오기
  const user = useUserStore((state) => state.user);
  const resetUser = useUserStore((state) => state.resetUser);

  // 로그아웃 함수 정의
  const handleLogout = () => {
    resetUser(); // Zustand 상태 초기화
    alert('로그아웃 되었습니다!');
  };

  console.log('유저', user);

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
              <Image src="/logo/sophie-logo.svg" alt="소피의창고 로고" width={65} height={30.74} />
            </Link>
          </div>
          <div className={header_styles.mobile_nav_item}>
            <Link className={header_styles.mobile_nav_item_movie} href="/categoryPage/mobile">
              MOVIE
            </Link>
            <Link className={header_styles.mobile_nav_item_category} href="/categoryPage/mobile">
              CATEGORY
            </Link>
            <Link className={header_styles.mobile_nav_item_new} href="/categoryPage/mobile">
              NEW
            </Link>
            <Link className={header_styles.mobile_nav_item_gift} href="/categoryPage/mobile">
              GIFT
            </Link>
          </div>
        </div>
        <div className={header_styles.mobile_search_area}>
          <div className={header_styles.mobile_search_bar}>
            <input type="text" />
            <Image
              src="/icons/search-icon.svg"
              alt="검색 아이콘"
              width={16}
              height={16}
              className={header_styles.mobile_searchIcon}
            />
          </div>
          <Link href="/shoppingcart" className={header_styles.mobile_cart_icon_warpper}>
            <Image src="/icons/cart-icon.svg" alt="장바구니 아이콘" width={18} height={17} />
            <span className={header_styles.mobile_cart_count}>0</span>
          </Link>
        </div>
      </div>

      {/* 376px 헤더 */}
      <div className={header_styles.header_376px}>
        <div className={header_styles.header_376px_main_bar}>
          <Link href="/" className={header_styles.header_376px_logo_wrapper}>
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
            <Image src="/logo/sophie-logo.svg" alt="소피의창고 로고" fill />
          </Link>
          <HeaderHamburgurMenu />
        </div>
        <div className={header_styles.haeder_376px_search_area}>
          <div className={header_styles.header_376px_search_bar}>
            <input type="text" />
            <Image
              src="/icons/search-icon.svg"
              alt="검색 아이콘"
              width={16}
              height={16}
              className={header_styles.header_376px_searchIcon}
            />
          </div>

          <div className={header_styles.header_376px_icon_wrapper}>
            <Link
              href="/recentPage/mobile"
              className={header_styles.header_376px_current_icon_wrapper}
            >
              <Image src="/icons/recent-icon.svg" alt="최근본상품 아이콘" width={17} height={17} />
            </Link>
            <Link href="/myPage" className={header_styles.header_376px_my_page_icon_wrapper}>
              <Image src="/icons/mypage-icon.svg" alt="마이페이지 아이콘" width={17} height={17} />
            </Link>
            <Link href="/shoppingcart" className={header_styles.header_376px_cart_icon_wrapper}>
              <Image src="/icons/cart-icon.svg" alt="장바구니 아이콘" width={17} height={17} />
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
                <Link href="/">HOME</Link>
              </div>
              <ul className={header_styles.web_header_nav_link_items}>
                <li>
                  <Link href="/categoryPage/web">MOVIE</Link>
                </li>
                <li>
                  <Link href="/categoryPage/web">CATEGORY</Link>
                </li>
                <li>
                  <Link href="/categoryPage/web">NEW</Link>
                </li>
                <li>
                  <Link href="/categoryPage/web">GIFT</Link>
                </li>
              </ul>
            </div>
            <div className={header_styles.web_header_login_wrapper}>
              <ul>
                {isClient && user ? (
                  <li>
                    <button onClick={handleLogout} className={header_styles.menuItem}>
                      로그아웃
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link href="/login">로그인</Link>
                    </li>
                    <li>
                      <Link href="/login/signUp">회원가입</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
          <HeaderHamburgurMenu />
        </div>
        <div className={header_styles.web_header_search_area}>
          <div className={header_styles.web_header_logo_search_bar_wrapper}>
            <Link href="/" className={header_styles.web_header_logo_wrapper}>
              <Image src="/logo/sophie-logo.svg" alt="소피의창고 로고" fill sizes="100%" />
            </Link>

            <div className={header_styles.web_header_search_bar}>
              <input type="text" />
              <div className={header_styles.web_header_search_icon_wrapper}>
                <Image
                  src="/icons/search-icon.svg"
                  alt="검색 아이콘"
                  fill
                  className={header_styles.web_header_search_icon}
                />
              </div>
            </div>
          </div>

          <div className={header_styles.web_header_icon_wrapper}>
            <Link href="/recentPage/web" className={header_styles.web_header_current_icon_wrapper}>
              <Image src="/icons/recent-icon.svg" alt="최근본상품 아이콘" width={17} height={17} />
            </Link>
            <Link href="/myPage" className={header_styles.web_header_my_page_icon_wrapper}>
              <Image src="/icons/mypage-icon.svg" alt="마이페이지 아이콘" width={17} height={17} />
            </Link>
            <Link href="/shoppingcart" className={header_styles.web_header_cart_icon_wrapper}>
              <Image src="/icons/cart-icon.svg" alt="장바구니 아이콘" width={17} height={17} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
