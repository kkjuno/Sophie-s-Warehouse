import MobileNavigation from './mobileNavigation';
import MobilePeriodSearch from './mobilePeriodSearch';
import WebAsideMenu from './webAsideMenu';
import WebMembershipSection from './webMembershipSection';
import WebPeriodSearch from './webPeriodSearch';
import WebOrderList from './webOrderList';
import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';

export default function OrderDeliveryPage() {
  return (
    <>
      {/* 모바일 주문/배송조회 페이지 */}
      <MobileNavigation />
      <div className={orderDelivery_styles.mobile_order_delivery_page}>
        <MobilePeriodSearch />
      </div>

      {/* 웹 주문/배송조회 페이지 */}
      <div className={orderDelivery_styles.web_order_delivery}>
        <div
          className={orderDelivery_styles.web_order_delivery_navigation}
          aria-label="현재 위치"
          role="navigation"
        >
          <p className={orderDelivery_styles.web_order_delivery_current_page}>
            HOME &nbsp; &gt; &nbsp; 마이페이지 &nbsp; &gt; &nbsp; 쇼핑 정보 &nbsp; &gt; &nbsp;
            <span className={orderDelivery_styles.web_order_delivery_navigation_current}>
              주문/배송 조회
            </span>
          </p>
        </div>

        <div className={orderDelivery_styles.web_order_wrapper}>
          <WebAsideMenu />
          <div className={orderDelivery_styles.web_order_delivery_sections}>
            <WebMembershipSection />
            <WebPeriodSearch />
            <WebOrderList />
          </div>
        </div>
      </div>
    </>
  );
}
