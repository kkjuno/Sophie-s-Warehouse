import MobileNavigation from './mobileNavigation';
import MobileWishlistSection from './mobilePeriodSearch';
import WebAsideMenu from './webAsideMenu';
import WebMembershipSection from './webMembershipSection';
import WebWishlistList from './webWishlistList';
import wishlist_styles from '@/styles/myPage/wishlist.module.css';

export default function WishlistPage() {
  return (
    <>
      {/* 모바일 찜리스트 페이지 */}
      <MobileNavigation />
      <MobileWishlistSection />

      {/* 웹 찜리스트 페이지 */}
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
          <WebAsideMenu />
          <div className={wishlist_styles.web_wishlist_sections}>
            <WebMembershipSection />
            <WebWishlistList />
          </div>
        </div>
      </div>
    </>
  );
}
