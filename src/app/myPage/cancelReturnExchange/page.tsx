import MobileNavigation from './mobileNavigation';
import MobilePeriodSearch from './mobilePeriodSearch';
import WebAsideMenu from './webAsideMenu';
import WebMembershipSection from './webMembershipSection';
import WebPeriodSearch from './webPeriodSearch';
import WebOrderList from './webOrderList';
import styles from '@/styles/myPage/cancelReturnExchange.module.css';

export default function CancelReturnExchangePage() {
  return (
    <>
      {/* 모바일 취소/반품/교환 페이지 */}
      <MobileNavigation />
      <div className={styles.mobile_order_delivery_page}>
        <MobilePeriodSearch />
        <hr className={styles.mobile_order_delivery_divider} />
        <ul className={styles.mobile_order_delivery_view_list_wrapper}>
          <li className={styles.mobile_order_delivery_view_list}>조회내역이 없습니다.</li>
        </ul>
      </div>

      {/* 웹 취소/반품/교환 페이지 */}
      <div className={styles.web_order_delivery}>
        <div
          className={styles.web_order_delivery_navigation}
          aria-label="현재 위치"
          role="navigation"
        >
          <p className={styles.web_order_delivery_current_page}>
            HOME &nbsp; &gt; &nbsp; 마이페이지 &nbsp; &gt; &nbsp; 쇼핑 정보 &nbsp; &gt; &nbsp;
            <span className={styles.web_order_delivery_navigation_current}>
              취소/반품/교환 내역
            </span>
          </p>
        </div>

        <div className={styles.web_order_wrapper}>
          <WebAsideMenu />
          <div className={styles.web_order_delivery_sections}>
            <WebMembershipSection />
            <WebPeriodSearch />
            <WebOrderList />
          </div>
        </div>
      </div>
    </>
  );
}
