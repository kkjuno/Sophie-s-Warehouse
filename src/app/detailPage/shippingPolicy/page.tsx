import '@/styles/globals.css';
import shippingPolicy_styles from '@/styles/detailPage/shippingPolicy/shippingPolicy.module.css';

export default function shippingPolicyPage() {
  return (
    <>
      {/* 모바일 배송정책 안내 페이지 */}
      <div className={shippingPolicy_styles.shipping_policy_page_wrapper}>
        <div className={shippingPolicy_styles.shipping_policy_page}>
          <h1 className={shippingPolicy_styles.shipping_policy_page_tit}>배송정책 안내</h1>
          <button className={shippingPolicy_styles.close_button}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.841788 15L0 14.1582L6.65821 7.5L0 0.841788L0.841788 0L7.5 6.65821L14.1582 0L15 0.841788L8.34179 7.5L15 14.1582L14.1582 15L7.5 8.34179L0.841788 15Z"
                fill="#6B7878"
              />
            </svg>
          </button>
        </div>

        <section className={shippingPolicy_styles.shipping_policy_notice_wrapper}>
          <ul className={shippingPolicy_styles.shipping_policy_notice}>
            <li className={shippingPolicy_styles.shipping_policy_notice_text}>
              총 구입 금액이 50,000원 이상일 때는 무료 배송입니다.
            </li>
            <li className={shippingPolicy_styles.shipping_policy_notice_text}>
              총 구입 금액이 50,000원 미만일 때는 2,500원의 배송비가 부과됩니다.
            </li>
            <li className={shippingPolicy_styles.shipping_policy_notice_text}>
              단, 제주도 및 기타 도서지방은 배송료 외에 항공료 및 도선료 5,000원이 추가 부과됩니다.
            </li>
            <li className={shippingPolicy_styles.shipping_policy_notice_text}>
              입점사 상품의 경우, 업체기준에 따라 배송비가 책정되는 관계로 상기 정책과 상이할 수
              있습니다.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
