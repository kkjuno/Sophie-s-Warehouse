import header_styles from "@/styles/components/header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {


  return(    
    <>
      <div className={header_styles.rootHeader}>
          <div className={header_styles.main_bar}>
            <div className={header_styles.logo}>
              {/* 로고 배경 이미지 */}
              <div className={header_styles.logo_background}>
                <svg width="106" height="40" viewBox="0 0 106 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-21.7602 9.09341C-19.397 3.57697 -13.9734 0 -7.97206 0H77.7688C83.5951 0 88.8942 3.37372 91.3597 8.6526L106 40H-35L-21.7602 9.09341Z" fill="#FDF6E3"/>
                </svg>
              </div>
              <Link href="/">
                <Image src="/logo/소피의창고 로고.svg" alt="소피의창고 로고" width={65} height={30.74}/>
              </Link>
            </div>
            <div className={header_styles.nav_item}>
              <Link className={header_styles.nav_item_movie} href="#">MOVIE</Link> 
              <Link className={header_styles.nav_item_category} href="#">CATEGORY</Link>
              <Link className={header_styles.nav_item_new} href="#">NEW</Link>
              <Link className={header_styles.nav_item_gift} href="#">GIFT</Link>
            </div>
          </div>
          <div className={header_styles.search_area}>
            <div className={header_styles.search_bar}>
               <input type="text" />
               <Image src="./icons/검색 아이콘.svg" alt="검색 아이콘" width={16} height={16} className={header_styles.searchIcon} />
            </div>
            <div className={header_styles.cart_icon_warpper}>
              <Image  src="/icons/장바구니 아이콘.svg" alt="장바구니 아이콘" width={18} height={17} />
            <span className={header_styles.cart_count}>0</span>
            </div>
          </div>
          
      </div>
    
    </>
  )
}
