import MobileNavigation from './mobileNavigation';
import MobilePeriodSearch from './mobilePeriodSearch';
import WebAsideMenu from './webAsideMenu';
import WebMembershipSection from './webMembershipSection';
import WebPeriodSearch from './webPeriodSearch';
import WebOrderList from './webOrderList';
import cancelReturnExchange_styles from '@/styles/myPage/cancelReturnExchange.module.css';

export default function CancelReturnExchangePage() {
  return (
    <>
      {/* 모바일 취소/반품/교환 페이지 */}
      <MobileNavigation />
      <div className={cancelReturnExchange_styles.mobile_order_delivery_page}>
        <MobilePeriodSearch />
        <hr className={cancelReturnExchange_styles.mobile_order_delivery_divider} />
        <ul className={cancelReturnExchange_styles.mobile_order_delivery_view_list_wrapper}>
          <li className={cancelReturnExchange_styles.mobile_order_delivery_view_list}>
            조회내역이 없습니다.
          </li>
        </ul>
      </div>

      {/* 웹 취소/반품/교환 페이지 */}
      <div className={cancelReturnExchange_styles.web_order_delivery}>
        <div
          className={cancelReturnExchange_styles.web_order_delivery_navigation}
          aria-label="현재 위치"
          role="navigation"
        >
          <p className={cancelReturnExchange_styles.web_order_delivery_current_page}>
            HOME &nbsp; &gt; &nbsp; 마이페이지 &nbsp; &gt; &nbsp; 쇼핑 정보 &nbsp; &gt; &nbsp;
            <span className={cancelReturnExchange_styles.web_order_delivery_navigation_current}>
              취소/반품/교환 내역
            </span>
          </p>
        </div>

        <div className={cancelReturnExchange_styles.web_order_wrapper}>
          <WebAsideMenu />
          <div className={cancelReturnExchange_styles.web_order_delivery_sections}>
            <WebMembershipSection />
            <WebPeriodSearch />
            <WebOrderList />
          </div>
        </div>
      </div>
    </>
  );
}
