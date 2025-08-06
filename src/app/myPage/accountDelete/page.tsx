'use client';
import account_delete_styles from '@/styles/myPage/accountDelete/accountDelete.module.css';
import check_box_styles from '@/styles/components/check-box.module.css';
import { useRouter } from 'next/navigation';

export default function AccountDelete() {
  const router = useRouter();
  return (
    <>
      <div className={account_delete_styles.mobile_root_header}>
        <h1>회원탈퇴</h1>
        <h2>01. 회원탈퇴 안내</h2>
        <div className={account_delete_styles.mobile_explain_account_delete_section}>
          <span>본 페이지는 소피의창고 회원탈퇴 페이지이며, 탈퇴시 회원탈퇴가 진행됩니다.</span>
          <span>
            회원 탈퇴 처리 후에는 회원님의 개인정보를 복원할 수 없으며, 회원탈퇴 진행 시 해당
            아이디는 영구적으로 삭제되어 재가입이 불가합니다.
          </span>
          <span>
            회원님의 개인정보, 주문내역, 포인트, 쿠폰 등 모든 정보가 쇼핑몰에서 삭제됩니다.
          </span>
        </div>
        <h2>02. 회원탈퇴 하기</h2>
        <div className={account_delete_styles.mobile_account_delete_do_section}>
          {/* 비밀번호 */}
          <div className={account_delete_styles.mobile_account_delete_row_layout}>
            <div className={account_delete_styles.mobile_account_delete_text_wrapper}>
              <span className={account_delete_styles.mobile_required_star}>*</span>
              <span>비밀번호</span>
            </div>
            <label htmlFor="">
              <input type="text" />
            </label>
          </div>
          {/* 탈퇴사유 */}
          <div className={account_delete_styles.mobile_account_delete_row_layout}>
            <div className={account_delete_styles.mobile_account_delete_reason_text_wrapper}>
              <span className={account_delete_styles.mobile_required_star}>*</span>
              <div className={account_delete_styles.mobile_account_delete_reasen_title}>
                <span>탈퇴사유</span>
                <span>(중복선택가능)</span>
              </div>
            </div>
            {/* 체크박스 */}
            <div className={account_delete_styles.mobile_account_delete_reasen_section}>
              <div className={account_delete_styles.mobile_account_delete_reasen}>
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
                <span>고객서비스(상담,포장 등) 불만</span>
              </div>
              <div className={account_delete_styles.mobile_account_delete_reasen}>
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
                <span>교환/환불/반품 불만</span>
              </div>
              <div className={account_delete_styles.mobile_account_delete_reasen}>
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
                <span>상품가격 불만</span>
              </div>
              <div className={account_delete_styles.mobile_account_delete_reasen}>
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
                <span>쇼핑몰의 신뢰도 불만</span>
              </div>
              <div className={account_delete_styles.mobile_account_delete_reasen}>
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
                <span>배송불만</span>
              </div>
              <div className={account_delete_styles.mobile_account_delete_reasen}>
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
                <span>방문 빈도가 낮음</span>
              </div>
            </div>
          </div>

          {/* 남기실 말씀 */}
          <div className={account_delete_styles.mobile_account_delete_row_layout}>
            <div className={account_delete_styles.mobile_account_delete_text_wrapper}>
              <span className={account_delete_styles.mobile_required_star}>*</span>
              <span>남기실 말씀</span>
            </div>
            <label htmlFor="">
              <input type="text" />
            </label>
          </div>
        </div>
        {/* 버튼 영역 */}
        <div className={account_delete_styles.mobile_button_wrapper}>
          <button
            type="button"
            className={account_delete_styles.mobile_cancel_button}
            onClick={() => router.back()}
          >
            취소
          </button>
          <button type="button" className={account_delete_styles.mobile_account_delete_button}>
            회원탈퇴
          </button>
        </div>
      </div>
    </>
  );
}
