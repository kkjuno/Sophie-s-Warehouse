import edit_user_info_styles from '@/styles/myPage/authCheck/editUserInfo/editUserInfo.module.css';
import check_box_styles from '@/styles/components/check-box.module.css';

export default function EditUserInfo() {
  return (
    <>
      <div className={edit_user_info_styles.mobile_edit_user_info_root_header}>
        <h1>회원정보수정</h1>
        {/* 기본정보 text 영역 */}
        <div className={edit_user_info_styles.mobile_edit_user_info_header_text}>
          <span className={edit_user_info_styles.mobile_edit_info_header_user_title}>기본정보</span>
          <span className={edit_user_info_styles.mobile_edit_user_sub_title}>
            * 표시는 반드시 입력하셔야 하는 항목입니다.
          </span>
        </div>
        {/* 사용자 입력 영역 */}
        <form action="">
          <div className={edit_user_info_styles.mobile_edit_user_info_root}>
            {/* 아이디 */}
            <div className={edit_user_info_styles.mobile_edit_user_row_layout}>
              <div className={edit_user_info_styles.mobile_edit_user_text_wrapper}>
                <span className={edit_user_info_styles.mobile_edit_user_required_start}>*</span>
                <span className={edit_user_info_styles.mobile_edit_user_title}>아이디</span>
              </div>
              <label htmlFor="user_id">
                <input type="id" id="user_id" placeholder="아이디" />
              </label>
            </div>
            {/* 비밀번호 */}
            <div className={edit_user_info_styles.mobile_edit_user_row_layout}>
              <div
                className={`${edit_user_info_styles.mobile_edit_user_text_wrapper} ${edit_user_info_styles.mobile_edit_user_password_wrapper}`}
              >
                <span className={edit_user_info_styles.mobile_edit_user_required_start}>*</span>
                <span className={edit_user_info_styles.mobile_edit_user_title}>비밀번호</span>
              </div>
              <div className={edit_user_info_styles.mobile_edit_user_password_input_wrapper}>
                <label htmlFor="password">
                  현재 비밀번호
                  <input type="password" id="password" />
                </label>
                <label htmlFor="new_password">
                  새 비밀번호
                  <input type="password" id="new_password" />
                </label>
                <label htmlFor="re_new_password">
                  새 비밀번호 확인
                  <input type="password" id="re_new_password" />
                </label>
              </div>
            </div>
            {/* 이름 */}
            <div className={edit_user_info_styles.mobile_edit_user_row_layout}>
              <div className={edit_user_info_styles.mobile_edit_user_text_wrapper}>
                <span className={edit_user_info_styles.mobile_edit_user_required_start}>*</span>
                <span className={edit_user_info_styles.mobile_edit_user_title}>이름</span>
              </div>
              <label htmlFor="">
                <input type="id" />
              </label>
            </div>
            {/* 이메일 */}
            <div className={edit_user_info_styles.mobile_edit_user_row_layout}>
              <div
                className={`${edit_user_info_styles.mobile_edit_user_text_wrapper} ${edit_user_info_styles.mobile_edit_user_email_text_wrapper}`}
              >
                <span className={edit_user_info_styles.mobile_edit_user_required_start}>*</span>
                <span className={edit_user_info_styles.mobile_edit_user_title}>이메일</span>
              </div>
              <div className={edit_user_info_styles.mobile_edit_user_email_wrapper}>
                <div className={edit_user_info_styles.mobile_edit_input_select_wrapper}>
                  <label htmlFor="">
                    <input type="id" placeholder="이메일 형식으로 작성하세요." />
                  </label>
                  <select name="domain" id="domain">
                    <option value="naver.com">naver.com</option>
                    <option value="hanmail.com">hanmail.com</option>
                    <option value="google.com">google.com</option>
                  </select>
                </div>
                <div className={edit_user_info_styles.mobile_edit_user_check_box_wrapper}>
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
                  <span>서비스, 혜택 광고성 정보 E-Mail 수신 동의</span>
                </div>
              </div>
            </div>
            {/* 핸드폰번호 */}
            <div className={edit_user_info_styles.mobile_edit_user_row_layout}>
              <div
                className={`${edit_user_info_styles.mobile_edit_user_text_wrapper} ${edit_user_info_styles.mobile_edit_user_phone_number_wrapper}`}
              >
                <span className={edit_user_info_styles.mobile_edit_user_required_start}>*</span>
                <span className={edit_user_info_styles.mobile_edit_user_title}>핸드폰번호</span>
              </div>
              {/* input , button wrapper */}
              <div className={edit_user_info_styles.mobile_edit_user_phone_section}>
                <div className={edit_user_info_styles.mobile_edit_user_input_button_wrapper}>
                  <label htmlFor="phone_number">
                    <input type="id" id="phone_number" placeholder="01000000000" />
                  </label>
                  <button
                    type="button"
                    className={edit_user_info_styles.mobile_edit_user_change_button}
                  >
                    변경
                  </button>
                </div>
                <div className={edit_user_info_styles.mobile_edit_user_check_box_wrapper}>
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
                  <span>서비스, 혜택 광고성 정보 E-Mail 수신 동의</span>
                </div>
              </div>
            </div>
            {/* 전화번호 */}
            <div className={edit_user_info_styles.mobile_edit_user_row_layout}>
              <div className={edit_user_info_styles.mobile_edit_user_text_wrapper}>
                <span className={edit_user_info_styles.mobile_edit_user_required_start}>*</span>
                <span className={edit_user_info_styles.mobile_edit_user_title}>전화번호</span>
              </div>
              <label htmlFor="">
                <input type="id" placeholder="-없이 입력하세요" />
              </label>
            </div>
            {/* 주소 */}
            <div className={edit_user_info_styles.mobile_edit_user_row_layout}>
              <div
                className={`${edit_user_info_styles.mobile_edit_user_text_wrapper} ${edit_user_info_styles.mobile_edit_user_address_wrapper}`}
              >
                <span className={edit_user_info_styles.mobile_edit_user_title}>주소</span>
              </div>
              <div className={edit_user_info_styles.mobile_edit_user_address_section}>
                <div
                  className={edit_user_info_styles.mobile_edit_user_address_input_button_wrapper}
                >
                  <label htmlFor="address">
                    <input type="id" id="address" />
                  </label>
                  <button
                    type="button"
                    className={edit_user_info_styles.mobile_edit_user_change_button}
                  >
                    변경
                  </button>
                </div>
                <div className={edit_user_info_styles.mobile_edit_user_address_input_wrapper}>
                  <label htmlFor="">
                    <input type="text" disabled placeholder="기본주소 (직접입력 불가)" />
                  </label>
                  <label htmlFor="">
                    <input type="text" placeholder="나머지 주소 입력" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* 회원정보수정 button */}
        <div className={edit_user_info_styles.mobile_edit_user_button_section}>
          <div className={edit_user_info_styles.mobile_edit_user_button_wrapper}>
            <button type="button" className={edit_user_info_styles.mobile_edit_cancel_button}>
              취소
            </button>
            <button type="button" className={edit_user_info_styles.mobile_edit_edit_info_button}>
              정보수정
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
