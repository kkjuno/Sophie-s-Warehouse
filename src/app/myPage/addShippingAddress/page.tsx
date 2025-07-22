import '@/styles/globals.css';
import addShippingAddress_styles from '@/styles/myPage/addShippingAddress/addShippingAddress.module.css';
import Link from 'next/link';

export default function addShippingAddressPage() {
  return (
    <>
      {/* 모바일 배송지 등록 페이지 */}
      <nav className={addShippingAddress_styles.mobile_add_shipping_address_nav}>
        <Link className={addShippingAddress_styles.mobile_nav_item} href="#">
          주문/배송 조회
        </Link>
        <Link className={addShippingAddress_styles.mobile_nav_item} href="#">
          지난 주문 조회
        </Link>
        <Link className={addShippingAddress_styles.mobile_nav_item} href="#">
          취소/반품/교환
        </Link>
        <Link className={addShippingAddress_styles.mobile_nav_item} href="#">
          찜 리스트
        </Link>
      </nav>

      {/* 배송지 등록 부분 */}

      <div className={addShippingAddress_styles.mobile_add_shipping_address_page_wrapper}>
        <button className={addShippingAddress_styles.mobile_add_shipping_address_button}>
          배송지 등록
        </button>

        <h2 className={addShippingAddress_styles.mobile_add_shipping_address_page_count}>총 1건</h2>
        <hr className={addShippingAddress_styles.mobile_add_shipping_address_divider} />
        <section className={addShippingAddress_styles.mobile_add_shipping_address_page_section}>
          <div className={addShippingAddress_styles.mobile_add_shipping_address_page_container}>
            <div className={addShippingAddress_styles.mobile_add_shipping_address_page}>
              <p className={addShippingAddress_styles.mobile_add_shipping_address_tit}>집</p>
              <button className={addShippingAddress_styles.mobile_default_shipping_address_button}>
                기본 배송지
              </button>
            </div>
            <div className={addShippingAddress_styles.mobile_button_wrapper}>
              <button className={addShippingAddress_styles.mobile_edit_button}>수정</button>
              <hr className={addShippingAddress_styles.mobile_button_divider} />
              <button className={addShippingAddress_styles.mobile_delete_button}>삭제</button>
            </div>
          </div>
          <div className={addShippingAddress_styles.mobile_default_shipping_address_info}>
            <p className={addShippingAddress_styles.mobile_default_shipping_address_name}>김준오</p>
            <p className={addShippingAddress_styles.mobile_default_shipping_address_number}>
              [00000]-----
            </p>
            <p className={addShippingAddress_styles.mobile_default_shipping_address_phone}>
              010-1234-5678
            </p>
          </div>

          <hr className={addShippingAddress_styles.mobile_add_shipping_address_divider} />
        </section>
      </div>
    </>
  );
}
