import zip_code_styles from '@/styles/zip-code/zip-code.module.css';
import Image from 'next/image';

export default function zipCode() {
  return (
    <>
      <div className={zip_code_styles.white_bg}>
        <div className={zip_code_styles.root_header}>
          <span>우편번호 찾기</span>
          <Image width={20} height={20} src="/icons/close-icon.svg" alt="닫기 아이콘" />
        </div>
        <div className={zip_code_styles.search_bar_icon_wrapper}>
          <div className={zip_code_styles.search_bar_wrapper}>
            <input
              type="text"
              placeholder="검색어(도로명,지번,건물명)을 입력해주세요."
              className={zip_code_styles.search_bar}
            ></input>
            <button type="button" className={zip_code_styles.search_icon_button}>
              <Image width={20} height={20} src="/icons/search-icon.svg" alt="검색 아이콘" />
            </button>
          </div>
        </div>
        <section className={zip_code_styles.search_area}>
          <div className={zip_code_styles.explain_zip_code_search_wrapper}>
            <div className={zip_code_styles.example_tip}>
              <span className={zip_code_styles.example_tip_title}>TIP</span>
              <span className={zip_code_styles.example_tip_sub_title}>
                아래와 같이 검색하면 더욱 정확한 결과가 검색됩니다.
              </span>
            </div>
            <div className={zip_code_styles.example_address}>
              <span className={zip_code_styles.example_title}>* 도로명 + 건물번호</span>
              <span className={zip_code_styles.example_sub_title}>
                예) 영동대로 513, 제주 첨단로 242
              </span>
            </div>
            <div className={zip_code_styles.example_address}>
              <span className={zip_code_styles.example_title}>* 지역명(동/리) + 번지</span>
              <span className={zip_code_styles.example_sub_title}>
                예) 삼성동 25, 제주 영평동 2181
              </span>
            </div>
            <div className={zip_code_styles.example_address}>
              <span className={zip_code_styles.example_title}>*도로명 + 건물번호</span>
              <span className={zip_code_styles.example_sub_title}>예) 분당 주공, 삼성 코엑스</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
