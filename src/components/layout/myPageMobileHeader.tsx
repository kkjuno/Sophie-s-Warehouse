import Image from 'next/image';
import Link from 'next/link';
import my_page_mobile_header_styles from '@/styles/components/myPageMobileHeader.module.css';
export default function MyPageMobileHeader() {
  return (
    <>
      {/* 375px 모바일 헤더 */}
      <div className={my_page_mobile_header_styles.mobile_rootHeader}>
        <div className={my_page_mobile_header_styles.mobile_main_bar}>
          <div className={my_page_mobile_header_styles.mobile_logo}>
            {/* 로고 배경 이미지 */}
            <div className={my_page_mobile_header_styles.mobile_logo_background}>
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
          <div className={my_page_mobile_header_styles.mobile_nav_item}>
            <Link className={my_page_mobile_header_styles.mobile_nav_item_movie} href="#">
              MOVIE
            </Link>
            <Link className={my_page_mobile_header_styles.mobile_nav_item_category} href="#">
              CATEGORY
            </Link>
            <Link className={my_page_mobile_header_styles.mobile_nav_item_new} href="#">
              NEW
            </Link>
            <Link className={my_page_mobile_header_styles.mobile_nav_item_gift} href="#">
              GIFT
            </Link>
          </div>
        </div>
        <div className={my_page_mobile_header_styles.mobile_my_page}>
          <div className={my_page_mobile_header_styles.mobile_my_page_text}>
            <span>마이페이지</span>
          </div>

          <div className={my_page_mobile_header_styles.my_page_icon_wrapper}>
            <Link href="/" className={my_page_mobile_header_styles.mobile_search_icon}>
              <Image src="./icons/검색 아이콘.svg" alt="검색 아이콘" width={18} height={18} />
            </Link>
            <Link href="/" className={my_page_mobile_header_styles.mobile_cart_icon_warpper}>
              <Image
                src="/icons/mine-shopping-cart-icon.svg"
                alt="장바구니 아이콘"
                width={23}
                height={23}
              />
              <span className={my_page_mobile_header_styles.mobile_cart_count}>0</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
