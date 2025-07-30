import marketing_styles from '@/styles/myPage/marketingAgreement/marketingAgreement.module.css';
import check_box_styles from '@/styles/components/check-box.module.css';
import cancelReturnExchange_styles from '@/styles/myPage/cancelReturnExchange.module.css';
import Link from 'next/link';
export default function MarketingAgreement() {
  return (
    <>
      {/* 모바일 뷰 */}
      <div className={marketing_styles.mobile_root_header}>
        <h1>마케팅 수신 동의</h1>
        <div className={marketing_styles.mobile_check_box_wrapper}>
          {/* 첫번째 체크박스 */}
          <div className={marketing_styles.mobile_check_box_row_layout}>
            {/* 체크 박스 */}
            <div className={check_box_styles.check_box_wrapper}>
              <input type="checkbox" className={check_box_styles.check_input} />
              <label className={check_box_styles.check_box_label}>
                <svg
                  width="10"
                  height="6.8"
                  viewBox="0 0 13 10"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  className={check_box_styles.check_box_icon}
                >
                  <path
                    d="M4.15364 7.8347L0.859644 4.5427C0.813521 4.49494 0.758348 4.45685 0.697346 4.43065C0.636344 4.40444 0.570734 4.39065 0.504345 4.39007C0.437955 4.3895 0.372115 4.40215 0.310667 4.42729C0.249219 4.45243 0.193393 4.48956 0.146447 4.5365C0.0995002 4.58345 0.0623736 4.63927 0.0372332 4.70072C0.0120927 4.76217 -0.00055803 4.82801 1.88785e-05 4.8944C0.000595787 4.96079 0.0143889 5.0264 0.0405934 5.0874C0.0667979 5.1484 0.104889 5.20358 0.152644 5.2497L4.15264 9.2497L12.1526 1.2497C12.2437 1.1554 12.2941 1.0291 12.293 0.897999C12.2918 0.7669 12.2393 0.641495 12.1466 0.548791C12.0539 0.456086 11.9284 0.403502 11.7973 0.402363C11.6662 0.401223 11.5399 0.451621 11.4456 0.5427L4.15264 7.8347H4.15364Z"
                    fill="currentColor"
                  />
                </svg>
              </label>
            </div>
            <span>(선택) 소피의창고의 마케팅 수신에 대해 전체 동의합니다.</span>
          </div>
          {/* 두번째 체크박스 */}
          <div className={marketing_styles.mobile_check_box_row_layout}>
            {/* 체크 박스 */}
            <div className={check_box_styles.check_box_wrapper}>
              <input type="checkbox" className={check_box_styles.check_input} />
              <label className={check_box_styles.check_box_label}>
                <svg
                  width="10"
                  height="6.8"
                  viewBox="0 0 13 10"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  className={check_box_styles.check_box_icon}
                >
                  <path
                    d="M4.15364 7.8347L0.859644 4.5427C0.813521 4.49494 0.758348 4.45685 0.697346 4.43065C0.636344 4.40444 0.570734 4.39065 0.504345 4.39007C0.437955 4.3895 0.372115 4.40215 0.310667 4.42729C0.249219 4.45243 0.193393 4.48956 0.146447 4.5365C0.0995002 4.58345 0.0623736 4.63927 0.0372332 4.70072C0.0120927 4.76217 -0.00055803 4.82801 1.88785e-05 4.8944C0.000595787 4.96079 0.0143889 5.0264 0.0405934 5.0874C0.0667979 5.1484 0.104889 5.20358 0.152644 5.2497L4.15264 9.2497L12.1526 1.2497C12.2437 1.1554 12.2941 1.0291 12.293 0.897999C12.2918 0.7669 12.2393 0.641495 12.1466 0.548791C12.0539 0.456086 11.9284 0.403502 11.7973 0.402363C11.6662 0.401223 11.5399 0.451621 11.4456 0.5427L4.15264 7.8347H4.15364Z"
                    fill="currentColor"
                  />
                </svg>
              </label>
            </div>
            <span>(선택) 소피의창고의 서비스, 혜택 광고성 정보 E-Mail 수신에 동의합니다.</span>
          </div>
          {/* 세번째 체크박스 */}
          <div className={marketing_styles.mobile_check_box_row_layout}>
            {/* 체크 박스 */}
            <div className={check_box_styles.check_box_wrapper}>
              <input type="checkbox" className={check_box_styles.check_input} />
              <label className={check_box_styles.check_box_label}>
                <svg
                  width="10"
                  height="6.8"
                  viewBox="0 0 13 10"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  className={check_box_styles.check_box_icon}
                >
                  <path
                    d="M4.15364 7.8347L0.859644 4.5427C0.813521 4.49494 0.758348 4.45685 0.697346 4.43065C0.636344 4.40444 0.570734 4.39065 0.504345 4.39007C0.437955 4.3895 0.372115 4.40215 0.310667 4.42729C0.249219 4.45243 0.193393 4.48956 0.146447 4.5365C0.0995002 4.58345 0.0623736 4.63927 0.0372332 4.70072C0.0120927 4.76217 -0.00055803 4.82801 1.88785e-05 4.8944C0.000595787 4.96079 0.0143889 5.0264 0.0405934 5.0874C0.0667979 5.1484 0.104889 5.20358 0.152644 5.2497L4.15264 9.2497L12.1526 1.2497C12.2437 1.1554 12.2941 1.0291 12.293 0.897999C12.2918 0.7669 12.2393 0.641495 12.1466 0.548791C12.0539 0.456086 11.9284 0.403502 11.7973 0.402363C11.6662 0.401223 11.5399 0.451621 11.4456 0.5427L4.15264 7.8347H4.15364Z"
                    fill="currentColor"
                  />
                </svg>
              </label>
            </div>
            <span>(선택) 소피의창고의 서비스, 혜택 광고성 정보 SMS 수신에 동의합니다.</span>
          </div>
        </div>
        <div className={marketing_styles.mobile_store_button_wrapper}>
          <button type="button" className={marketing_styles.moblie_store_button}>
            저장
          </button>
        </div>
      </div>
      {/* 웹뷰 */}
      <div className={marketing_styles.web_root_header}>
        <div className={marketing_styles.web_root_path}>
          <h2>
            HOME &gt; 마이페이지 &gt; 회원정보 &gt; <span>마케팅수신동의</span>
          </h2>
        </div>
        <div className={marketing_styles.web_main_page_section}>
          {/* 왼쪽 사이드 메뉴 */}
          <aside className={cancelReturnExchange_styles.web_order_delivery_aside}>
            <hr className={cancelReturnExchange_styles.web_order_delivery_aside_divider_top} />
            <h1 className={cancelReturnExchange_styles.web_order_delivery_list}>마이페이지</h1>
            <h2 className={cancelReturnExchange_styles.web_order_delivery_list_tit}>쇼핑 정보</h2>
            <ul className={cancelReturnExchange_styles.web_order_delivery_list_text}>
              <li>
                <Link href="#">주문/배송 조회</Link>
              </li>
              <li>
                <Link href="#">취소/반품/교환 내역</Link>
              </li>
              <li>
                <Link href="#">찜 리스트</Link>
              </li>
            </ul>
            <hr className={cancelReturnExchange_styles.web_order_delivery_aside_divider} />
            <h2 className={cancelReturnExchange_styles.web_order_delivery_list_tit}>혜택 관리</h2>
            <ul className={cancelReturnExchange_styles.web_order_delivery_list_text}>
              <li>
                <Link href="#">스탬프</Link>
              </li>
              <li>
                <Link href="#">당첨 내역</Link>
              </li>
            </ul>
            <hr className={cancelReturnExchange_styles.web_order_delivery_aside_divider} />
            <h2 className={cancelReturnExchange_styles.web_order_delivery_list_tit}>회원 정보</h2>
            <ul className={cancelReturnExchange_styles.web_order_delivery_list_text}>
              <li>
                <Link href="#">회원 정보 수정</Link>
              </li>
              <li>
                <Link href="#">마케팅 수신 동의</Link>
              </li>
              <li>
                <Link href="#">회원 탈퇴</Link>
              </li>
              <li>
                <Link href="#">배송지 관리</Link>
              </li>
            </ul>
          </aside>
          {/* 메인 화면 영역 */}
          <div className={marketing_styles.web_root_header_section}>
            <h1>마케팅 수신 동의</h1>
            <div className={marketing_styles.web_check_box_wrapper}>
              {/* 첫번째 체크박스 */}
              <div className={marketing_styles.web_check_box_row_layout}>
                {/* 체크 박스 */}
                <div className={check_box_styles.check_box_wrapper}>
                  <input type="checkbox" className={check_box_styles.check_input} />
                  <label className={check_box_styles.check_box_label}>
                    <svg
                      width="10"
                      height="6.8"
                      viewBox="0 0 13 10"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                      className={check_box_styles.check_box_icon}
                    >
                      <path
                        d="M4.15364 7.8347L0.859644 4.5427C0.813521 4.49494 0.758348 4.45685 0.697346 4.43065C0.636344 4.40444 0.570734 4.39065 0.504345 4.39007C0.437955 4.3895 0.372115 4.40215 0.310667 4.42729C0.249219 4.45243 0.193393 4.48956 0.146447 4.5365C0.0995002 4.58345 0.0623736 4.63927 0.0372332 4.70072C0.0120927 4.76217 -0.00055803 4.82801 1.88785e-05 4.8944C0.000595787 4.96079 0.0143889 5.0264 0.0405934 5.0874C0.0667979 5.1484 0.104889 5.20358 0.152644 5.2497L4.15264 9.2497L12.1526 1.2497C12.2437 1.1554 12.2941 1.0291 12.293 0.897999C12.2918 0.7669 12.2393 0.641495 12.1466 0.548791C12.0539 0.456086 11.9284 0.403502 11.7973 0.402363C11.6662 0.401223 11.5399 0.451621 11.4456 0.5427L4.15264 7.8347H4.15364Z"
                        fill="currentColor"
                      />
                    </svg>
                  </label>
                </div>
                <span>(선택) 소피의창고의 마케팅 수신에 대해 전체 동의합니다.</span>
              </div>
              <hr className={marketing_styles.web_middle_line} />
              {/* 두번째 체크박스 */}
              <div className={marketing_styles.web_check_box_row_layout}>
                {/* 체크 박스 */}
                <div className={check_box_styles.check_box_wrapper}>
                  <input type="checkbox" className={check_box_styles.check_input} />
                  <label className={check_box_styles.check_box_label}>
                    <svg
                      width="10"
                      height="6.8"
                      viewBox="0 0 13 10"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                      className={check_box_styles.check_box_icon}
                    >
                      <path
                        d="M4.15364 7.8347L0.859644 4.5427C0.813521 4.49494 0.758348 4.45685 0.697346 4.43065C0.636344 4.40444 0.570734 4.39065 0.504345 4.39007C0.437955 4.3895 0.372115 4.40215 0.310667 4.42729C0.249219 4.45243 0.193393 4.48956 0.146447 4.5365C0.0995002 4.58345 0.0623736 4.63927 0.0372332 4.70072C0.0120927 4.76217 -0.00055803 4.82801 1.88785e-05 4.8944C0.000595787 4.96079 0.0143889 5.0264 0.0405934 5.0874C0.0667979 5.1484 0.104889 5.20358 0.152644 5.2497L4.15264 9.2497L12.1526 1.2497C12.2437 1.1554 12.2941 1.0291 12.293 0.897999C12.2918 0.7669 12.2393 0.641495 12.1466 0.548791C12.0539 0.456086 11.9284 0.403502 11.7973 0.402363C11.6662 0.401223 11.5399 0.451621 11.4456 0.5427L4.15264 7.8347H4.15364Z"
                        fill="currentColor"
                      />
                    </svg>
                  </label>
                </div>
                <span>(선택) 소피의창고의 서비스, 혜택 광고성 정보 E-Mail 수신에 동의합니다.</span>
              </div>
              {/* 세번째 체크박스 */}
              <div className={marketing_styles.web_check_box_row_layout}>
                {/* 체크 박스 */}
                <div className={check_box_styles.check_box_wrapper}>
                  <input type="checkbox" className={check_box_styles.check_input} />
                  <label className={check_box_styles.check_box_label}>
                    <svg
                      width="10"
                      height="6.8"
                      viewBox="0 0 13 10"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                      className={check_box_styles.check_box_icon}
                    >
                      <path
                        d="M4.15364 7.8347L0.859644 4.5427C0.813521 4.49494 0.758348 4.45685 0.697346 4.43065C0.636344 4.40444 0.570734 4.39065 0.504345 4.39007C0.437955 4.3895 0.372115 4.40215 0.310667 4.42729C0.249219 4.45243 0.193393 4.48956 0.146447 4.5365C0.0995002 4.58345 0.0623736 4.63927 0.0372332 4.70072C0.0120927 4.76217 -0.00055803 4.82801 1.88785e-05 4.8944C0.000595787 4.96079 0.0143889 5.0264 0.0405934 5.0874C0.0667979 5.1484 0.104889 5.20358 0.152644 5.2497L4.15264 9.2497L12.1526 1.2497C12.2437 1.1554 12.2941 1.0291 12.293 0.897999C12.2918 0.7669 12.2393 0.641495 12.1466 0.548791C12.0539 0.456086 11.9284 0.403502 11.7973 0.402363C11.6662 0.401223 11.5399 0.451621 11.4456 0.5427L4.15264 7.8347H4.15364Z"
                        fill="currentColor"
                      />
                    </svg>
                  </label>
                </div>
                <span>(선택) 소피의창고의 서비스, 혜택 광고성 정보 SMS 수신에 동의합니다.</span>
              </div>
            </div>
            <div className={marketing_styles.web_store_button_wrapper}>
              <button type="button" className={marketing_styles.web_store_button}>
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
