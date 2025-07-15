import "@/styles/globals.css";
import footer_nav_bar_styles from "@/styles/components/footerNavBar.module.css";
import Link from "next/link";

export default function FooterNav() {
  return (
    <footer className={footer_nav_bar_styles.footer}>
      <nav className={footer_nav_bar_styles.nav}>
        <Link href="#" className={footer_nav_bar_styles.navItem}>
          <div className={footer_nav_bar_styles.icon}>
            <img src="/icons/장바구니 흰색 아이콘.svg" width={33} height={33} alt="장바구니" />
          </div>
          <span className={footer_nav_bar_styles.label}>장바구니</span>
        </Link>
        <Link href="#" className={footer_nav_bar_styles.navItem}>
          <div className={footer_nav_bar_styles.icon}>
            <img src="/icons/스템프 흰색 아이콘.svg" width={33} height={33} alt="스템프" />
          </div>
          <span className={footer_nav_bar_styles.label}>스템프</span>
        </Link>
        <Link href="#" className={footer_nav_bar_styles.navItem}>
          <div className={footer_nav_bar_styles.icon}>
            <img src="/icons/홈 흰색 아이콘.svg" width={33} height={33} alt="홈" />
          </div>
          <span className={footer_nav_bar_styles.label}>홈</span>
        </Link>
        <Link href="#" className={footer_nav_bar_styles.navItem}>
          <div className={footer_nav_bar_styles.icon}>
            <img src="/icons/마이페이지 흰색 아이콘.svg" width={33} height={33} alt="마이페이지" />
          </div>
          <span className={footer_nav_bar_styles.label}>마이페이지</span>
        </Link>
        <Link href="#" className={footer_nav_bar_styles.navItem}>
          <div className={footer_nav_bar_styles.icon}>
            <img src="/icons/최근본상품 흰색 아이콘.svg" width={33} height={33} alt="최근본상품" />
          </div>
          <span className={footer_nav_bar_styles.label}>최근본상품</span>
        </Link>
      </nav>
    </footer>
  );
}