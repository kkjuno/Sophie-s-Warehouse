import '@/styles/globals.css';
import addressManagement_styles from '@/styles/myPage/addressManagement/addressManagement.module.css';

export default function addressManagementPage() {
  return (
    <>
      {/* 모바일 배송정책 안내 페이지 */}
      <div className={addressManagement_styles.address_management_page_wrapper}>
        <h1 className={addressManagement_styles.address_management_page_tit}>나의 배송지 관리</h1>
        <div className={addressManagement_styles.address_management}>
          <p className={addressManagement_styles.address_management_text}>배송지 등록</p>
          <p className={addressManagement_styles.address_management_note}>
            * 표시는 반드시 입력하셔야 하는 항목입니다.
          </p>
        </div>

        <div className={addressManagement_styles.address_management_address_name_container}>
          <label className={addressManagement_styles.label} htmlFor="addressName">
            <span className={addressManagement_styles.label_symbol}>* </span>배송지 이름
          </label>
          <hr className={addressManagement_styles.address_management_divider} />
          <input
            className={addressManagement_styles.input}
            type="text"
            id="addressName"
            name="addressName"
          />
        </div>
        <div className={addressManagement_styles.address_management_container}>
          <label className={addressManagement_styles.label} htmlFor="recipient">
            <span className={addressManagement_styles.label_symbol}>* </span>받으실 분
          </label>
          <hr className={addressManagement_styles.address_management_divider} />
          <input
            className={addressManagement_styles.input}
            type="text"
            id="recipient"
            name="recipient"
          />
        </div>
        <div className={addressManagement_styles.address_management_address_container}>
          <label className={addressManagement_styles.label} htmlFor="address">
            <span className={addressManagement_styles.label_symbol}>* </span>받으실 곳
          </label>
          <hr className={addressManagement_styles.address_management_divider} />
          <div className={addressManagement_styles.address_management_address_wrapper}>
            <input
              className={addressManagement_styles.address_input}
              type="text"
              id="address"
              name="address"
            />
            <button className={addressManagement_styles.change_button}>변경</button>
            <input
              className={addressManagement_styles.address_input}
              type="text"
              id="address"
              name="address"
              placeholder="기본주소 (직접입력 불가)"
            />
            <input
              className={addressManagement_styles.address_input}
              type="text"
              id="address"
              name="address"
              placeholder="나머지 주소 입력"
            />
          </div>
        </div>
        <div className={addressManagement_styles.address_management_container}>
          <label className={addressManagement_styles.label} htmlFor="phone">
            <span className={addressManagement_styles.label_symbol}>* </span>전화번호
          </label>
          <hr className={addressManagement_styles.address_management_divider} />
          <input
            className={addressManagement_styles.input}
            type="tel"
            id="phone"
            name="phone"
            placeholder="-없이 입력하세요"
          />
        </div>
        <div className={addressManagement_styles.address_management_container}>
          <label className={addressManagement_styles.label} htmlFor="mobile">
            <span className={addressManagement_styles.label_symbol}>* </span>핸드폰 번호
          </label>
          <hr className={addressManagement_styles.address_management_divider} />
          <input
            className={addressManagement_styles.input}
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="-없이 입력하세요"
          />
        </div>

        <div className={addressManagement_styles.checkbox_container}>
          <input
            type="checkbox"
            id="option"
            name="option"
            className={addressManagement_styles.checkbox}
          />
          <label htmlFor="option" className={addressManagement_styles.checkbox_label}>
            기본 배송지로 설정합니다.
          </label>
        </div>

        <div className={addressManagement_styles.button_container}>
          <button className={addressManagement_styles.cancel_button}>취소</button>
          <button className={addressManagement_styles.save_button}>저장</button>
        </div>
      </div>
    </>
  );
}
