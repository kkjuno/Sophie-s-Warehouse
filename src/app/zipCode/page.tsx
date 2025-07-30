import zip_code_styles from '@/styles/zipCode/zip-code.module.css';
import Image from 'next/image';

export default function zipCode() {
  return (
    <>
      {/* 모바일 뷰 */}
      <div className={zip_code_styles.mobile_white_bg}>
        <div className={zip_code_styles.mobile_root_header}>
          <span>우편번호 찾기</span>
          <Image width={20} height={20} src="/icons/close-icon.svg" alt="닫기 아이콘" />
        </div>
        <div className={zip_code_styles.mobile_search_bar_icon_wrapper}>
          <div className={zip_code_styles.mobile_search_bar_wrapper}>
            <input
              type="text"
              placeholder="검색어(도로명,지번,건물명)을 입력해주세요."
              className={zip_code_styles.mobile_search_bar}
            ></input>
            <button type="button" className={zip_code_styles.mobile_search_icon_button}>
              <Image width={20} height={20} src="/icons/search-icon.svg" alt="검색 아이콘" />
            </button>
          </div>
        </div>
        <section className={zip_code_styles.mobile_search_area}>
          <div className={zip_code_styles.mobile_explain_zip_code_search_wrapper}>
            <div className={zip_code_styles.mobile_example_tip}>
              <span className={zip_code_styles.mobile_example_tip_title}>TIP</span>
              <span className={zip_code_styles.mobile_example_tip_sub_title}>
                아래와 같이 검색하면 더욱 정확한 결과가 검색됩니다.
              </span>
            </div>
            <div className={zip_code_styles.mobile_example_address}>
              <span className={zip_code_styles.mobile_example_title}>* 도로명 + 건물번호</span>
              <span className={zip_code_styles.mobile_example_sub_title}>
                예) 영동대로 513, 제주 첨단로 242
              </span>
            </div>
            <div className={zip_code_styles.mobile_example_address}>
              <span className={zip_code_styles.mobile_example_title}>* 지역명(동/리) + 번지</span>
              <span className={zip_code_styles.mobile_example_sub_title}>
                예) 삼성동 25, 제주 영평동 2181
              </span>
            </div>
            <div className={zip_code_styles.mobile_example_address}>
              <span className={zip_code_styles.mobile_example_title}>*도로명 + 건물번호</span>
              <span className={zip_code_styles.mobile_example_sub_title}>
                예) 분당 주공, 삼성 코엑스
              </span>
            </div>
          </div>
        </section>
      </div>
      {/* 웹뷰 */}
      <div className={zip_code_styles.web_white_bg}>
        <div className={zip_code_styles.web_root_header}>
          <span>우편번호 찾기</span>
          <div className={zip_code_styles.web_close_icon_wrapper}>
            <Image fill src="/icons/close-icon.svg" alt="닫기 아이콘" />
          </div>
        </div>
        <div className={zip_code_styles.web_search_bar_icon_wrapper}>
          <div className={zip_code_styles.web_search_bar_wrapper}>
            <input
              type="text"
              placeholder="검색어(도로명,지번,건물명)을 입력해주세요."
              className={zip_code_styles.web_search_bar}
            ></input>
          </div>
          <button type="button" className={zip_code_styles.web_search_icon_button}>
            검색
          </button>
        </div>
        <section className={zip_code_styles.web_search_area}>
          <div className={zip_code_styles.web_explain_zip_code_search_wrapper}>
            <div className={zip_code_styles.web_example_tip}>
              <span className={zip_code_styles.web_example_tip_title}>TIP</span>
              <span className={zip_code_styles.web_example_tip_sub_title}>
                아래와 같이 검색하면 더욱 정확한 결과가 검색됩니다.
              </span>
            </div>
            <div className={zip_code_styles.web_example_address}>
              <span className={zip_code_styles.web_example_title}>* 도로명 + 건물번호</span>
              <span className={zip_code_styles.web_example_sub_title}>
                예) 영동대로 513, 제주 첨단로 242
              </span>
            </div>
            <div className={zip_code_styles.web_example_address}>
              <span className={zip_code_styles.web_example_title}>* 지역명(동/리) + 번지</span>
              <span className={zip_code_styles.web_example_sub_title}>
                예) 삼성동 25, 제주 영평동 2181
              </span>
            </div>
            <div className={zip_code_styles.web_example_address}>
              <span className={zip_code_styles.web_example_title}>*도로명 + 건물번호</span>
              <span className={zip_code_styles.web_example_sub_title}>
                예) 분당 주공, 삼성 코엑스
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
