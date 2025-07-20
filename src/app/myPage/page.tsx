import '@/styles/globals.css';
import myPage_styles from '@/styles/myPage/myPage.module.css';

export default function myPage() {
  return (
    <>
      {/* 마이 페이지 */}
      <div className={myPage_styles.my_page}>
        {/* 등급혜택 */}
        <section className={myPage_styles.membership_section}>
          <div className={myPage_styles.membership_wrapper}>
            <svg
              className={myPage_styles.membership_img}
              width="45"
              height="35"
              viewBox="0 0 45 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.4932 4.1153C30.4204 -1.10888 38.7019 -1.39773 43.9902 3.46979C44.352 3.8028 44.6899 4.15171 45.0049 4.51373C44.455 6.41386 43.4543 8.21766 41.9971 9.76276C37.1316 14.9215 28.9963 15.2678 23.7012 10.5889V33.8008C23.7009 34.463 23.1642 35.0001 22.502 35.0001C21.8398 35 21.303 34.463 21.3027 33.8008V10.5899C16.0075 15.2677 7.87292 14.9212 3.00781 9.76276C1.55103 8.2181 0.549955 6.41521 0 4.51569C0.315424 4.153 0.654181 3.80337 1.0166 3.46979C6.305 -1.39771 14.5865 -1.10904 19.5137 4.1153C20.9359 5.62333 21.9208 7.37863 22.4785 9.22858C22.4863 9.22843 22.4941 9.2276 22.502 9.2276C22.5101 9.2276 22.5183 9.22842 22.5264 9.22858C23.0841 7.37843 24.0708 5.62346 25.4932 4.1153Z"
                fill="#52AB56"
              />
            </svg>
            <div className={myPage_styles.membership_container}>
              <span className={myPage_styles.membership_badge}>NEW</span>
              <h2 className={myPage_styles.membership_title}>장유하님의 등급혜택 &gt;</h2>
            </div>
          </div>

          {/* 스탬프, 포인트 */}
          <dl className={myPage_styles.benefit_list}>
            <div className={myPage_styles.benefit_container}>
              <div className={myPage_styles.benefit_wrapper}>
                <dt className={myPage_styles.benefit_title}>스탬프</dt>
                <dd className={myPage_styles.benefit_value}>0개</dd>
              </div>
              <span className={myPage_styles.benefit_arrow}>&gt;</span>
            </div>
            <div className={myPage_styles.benefit_container}>
              <div className={myPage_styles.benefit_wrapper}>
                <dt className={myPage_styles.benefit_title}>포인트</dt>
                <dd className={myPage_styles.benefit_value}>0점</dd>
              </div>
              <span className={myPage_styles.benefit_arrow}>&gt;</span>
            </div>
          </dl>
        </section>

        {/* 진행 중인 주문 */}
        <section className={myPage_styles.order_status_section}>
          <h2 className={myPage_styles.my_page_list_title}>진행 중인 주문</h2>
          <hr className={myPage_styles.my_page_list_title_divider} />

          <div className={myPage_styles.order_status_wrapper}>
            <div className={myPage_styles.order_status_container}>
              <div className={myPage_styles.order_step_wrapper}>
                <div className={myPage_styles.order_step}>
                  <span className={myPage_styles.order_step_count}>0</span>
                </div>
                <span className={myPage_styles.order_step_arrow}>&gt;</span>
              </div>

              <div className={myPage_styles.order_step_wrapper}>
                <div className={myPage_styles.order_step}>
                  <span className={myPage_styles.order_step_count}>0</span>
                </div>
                <span className={myPage_styles.order_step_arrow}>&gt;</span>
              </div>

              <div className={myPage_styles.order_step_wrapper}>
                <div className={myPage_styles.order_step}>
                  <span className={myPage_styles.order_step_count}>0</span>
                </div>
                <span className={myPage_styles.order_step_arrow}>&gt;</span>
              </div>

              <div className={myPage_styles.order_step_wrapper}>
                <div className={myPage_styles.order_step}>
                  <span className={myPage_styles.order_step_count}>0</span>
                </div>
                <span className={myPage_styles.order_step_arrow}>&gt;</span>
              </div>

              <div className={myPage_styles.order_step_wrapper}>
                <div className={myPage_styles.order_step}>
                  <span className={myPage_styles.order_count_point_color}>0</span>
                </div>
              </div>
            </div>

            <div className={myPage_styles.order_step_label_wrapper}>
              <p className={myPage_styles.order_step_label}>입급대기</p>
              <p className={myPage_styles.order_step_label}>결제완료</p>
              <p className={myPage_styles.order_step_label}>상품준비중</p>
              <p className={myPage_styles.order_step_label}>배송중</p>
              <p className={myPage_styles.order_step_label}>배송완료</p>
            </div>
          </div>
        </section>

        {/* 쇼핑정보 */}
        <section className={myPage_styles.shopping_info_section}>
          <h2 className={myPage_styles.my_page_list_title}>쇼핑정보</h2>
          <hr className={myPage_styles.my_page_list_title_divider} />

          <div className={myPage_styles.shopping_info_wrapper}>
            <p className={myPage_styles.my_page_label}>주문/배송 조회</p>
            <span className={myPage_styles.my_page_count}>
              <span className={myPage_styles.count_point_color}>0</span>건 &gt;
            </span>
          </div>
          <hr className={myPage_styles.my_page_divider} />

          <div className={myPage_styles.shopping_info_wrapper}>
            <p className={myPage_styles.my_page_label}>취소/반품 교환 내역</p>
            <span className={myPage_styles.my_page_arrow}>&gt;</span>
          </div>
          <hr className={myPage_styles.my_page_divider} />

          <div className={myPage_styles.shopping_info_wrapper}>
            <p className={myPage_styles.my_page_label}>찜리스트</p>
            <span className={myPage_styles.my_page_arrow}>&gt;</span>
          </div>
          <hr className={myPage_styles.shopping_info_divider} />
        </section>

        {/* 혜택관리 */}
        <section className={myPage_styles.count_point_section}>
          <h2 className={myPage_styles.my_page_list_title}>혜택관리</h2>
          <hr className={myPage_styles.my_page_list_title_divider} />

          <div className={myPage_styles.count_point_wrapper}>
            <p className={myPage_styles.my_page_label}>스탬프</p>
            <span className={myPage_styles.my_page_count}>
              <span className={myPage_styles.count_point_color}>0</span>개 &gt;
            </span>
          </div>
          <hr className={myPage_styles.my_page_divider} />

          <div className={myPage_styles.count_point_wrapper}>
            <p className={myPage_styles.my_page_label}>당첨내역</p>
            <span className={myPage_styles.my_page_count}>
              <span className={myPage_styles.count_point_color}>0</span>개 &gt;
            </span>
          </div>
          <hr className={myPage_styles.my_page_divider} />
        </section>

        {/* 회원정보 수정 */}
        <section className={myPage_styles.account_section}>
          <h2 className={myPage_styles.my_page_list_title}>회원정보 수정</h2>
          <hr className={myPage_styles.my_page_list_title_divider} />

          <div className={myPage_styles.account_wrapper}>
            <p className={myPage_styles.my_page_label}>회원정보 수정</p>
            <span className={myPage_styles.my_page_arrow}>&gt;</span>
          </div>
          <hr className={myPage_styles.my_page_divider} />

          <div className={myPage_styles.account_wrapper}>
            <p className={myPage_styles.my_page_label}>마케팅 수신 동의</p>
            <span className={myPage_styles.my_page_arrow}>&gt;</span>
          </div>
          <hr className={myPage_styles.my_page_divider} />

          <div className={myPage_styles.account_wrapper}>
            <p className={myPage_styles.my_page_label}>회원 탈퇴</p>
            <span className={myPage_styles.my_page_arrow}>&gt;</span>
          </div>
          <hr className={myPage_styles.my_page_divider} />

          <div className={myPage_styles.account_wrapper}>
            <p className={myPage_styles.my_page_label}>배송지 관리</p>
            <span className={myPage_styles.my_page_arrow}>&gt;</span>
          </div>
          <hr className={myPage_styles.my_page_divider} />
        </section>
      </div>
    </>
  );
}
