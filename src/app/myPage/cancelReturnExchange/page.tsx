import '@/styles/globals.css';
import cancelReturnExchange_styles from '@/styles/myPage/cancelReturnExchange.module.css';
import styles from '@/styles/components/button.module.css';
import Link from 'next/link';

export default function cancelReturnExchangePage() {
  return (
    <>
      {/* 모바일 취소/반품/교환 페이지 */}
      {/* 모바일 상단 네비 */}
      <nav className={cancelReturnExchange_styles.mobile_order_delivery_nav}>
        <Link className={cancelReturnExchange_styles.mobile_nav_item} href="#">
          주문/배송 조회
        </Link>
        <Link className={cancelReturnExchange_styles.mobile_nav_item} href="#">
          지난 주문 조회
        </Link>
        <Link className={cancelReturnExchange_styles.mobile_nav_item} href="#">
          취소/반품/교환
        </Link>
        <Link className={cancelReturnExchange_styles.mobile_nav_item} href="#">
          찜 리스트
        </Link>
      </nav>

      {/* 모바일 기간 검색 부분 */}
      <div className={cancelReturnExchange_styles.mobile_order_delivery_page}>
        <div className={cancelReturnExchange_styles.mobile_order_delivery}>
          <div className={cancelReturnExchange_styles.mobile_order_delivery_container_lg}>
            <button className={cancelReturnExchange_styles.mobile_order_delivery_arrow_button}>
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.176092 0.1912C0.288878 0.0687746 0.441828 0 0.601308 0C0.760787 0 0.913737 0.0687746 1.02652 0.1912L4.00363 3.42372L6.98074 0.1912C7.09417 0.0722442 7.2461 0.00642175 7.40379 0.00790964C7.56149 0.00939752 7.71233 0.0780765 7.82384 0.199154C7.93536 0.320232 7.99861 0.484021 7.99998 0.655244C8.00135 0.826468 7.94073 0.991425 7.83117 1.11459L4.42885 4.8088C4.31606 4.93123 4.16311 5 4.00363 5C3.84415 5 3.6912 4.93123 3.57842 4.8088L0.176092 1.11459C0.0633405 0.992127 0 0.826055 0 0.652894C0 0.479733 0.0633405 0.313661 0.176092 0.1912Z"
                  fill="#949494"
                />
              </svg>
            </button>
          </div>

          <div className={cancelReturnExchange_styles.mobile_order_delivery_wrapper}>
            <div className={cancelReturnExchange_styles.mobile_order_delivery_container_sm}>
              <button className={cancelReturnExchange_styles.mobile_order_delivery_calendar_button}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H17M9 4V1M4 4V1M14 4V1M2 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V4C17 3.73478 16.8946 3.48043 16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17ZM5 10H5.01V10.01H5V10ZM9 10H9.01V10.01H9V10ZM13 10H13.01V10.01H13V10ZM5 14H5.01V14.01H5V14ZM9 14H9.01V14.01H9V14ZM13 14H13.01V14.01H13V14Z"
                    stroke="#949494"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <span className={cancelReturnExchange_styles.mobile_order_delivery_period}>~</span>
            <div className={cancelReturnExchange_styles.mobile_order_delivery_container_sm}>
              <button className={cancelReturnExchange_styles.mobile_order_delivery_calendar_button}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H17M9 4V1M4 4V1M14 4V1M2 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V4C17 3.73478 16.8946 3.48043 16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17ZM5 10H5.01V10.01H5V10ZM9 10H9.01V10.01H9V10ZM13 10H13.01V10.01H13V10ZM5 14H5.01V14.01H5V14ZM9 14H9.01V14.01H9V14ZM13 14H13.01V14.01H13V14Z"
                    stroke="#949494"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button className={`${styles.inquiry_button} `}>조회</button>
          </div>
        </div>
        <hr className={cancelReturnExchange_styles.mobile_order_delivery_divider} />

        <ul className={cancelReturnExchange_styles.mobile_order_delivery_view_list_wrapper}>
          <li className={cancelReturnExchange_styles.mobile_order_delivery_view_list}>
            조회내역이 없습니다.
          </li>
        </ul>
      </div>

      {/* 웹 취소/반품/교환 페이지 */}
      {/* 웹 상단 현재 위치 */}
      <div className={cancelReturnExchange_styles.web_order_delivery}>
        <div
          className={cancelReturnExchange_styles.web_order_delivery_navigation}
          aria-label="현재 위치"
          role="navigation"
        >
          <p className={cancelReturnExchange_styles.web_order_delivery_current_page}>
            HOME &nbsp; &gt; &nbsp; 마이페이지 &nbsp; &gt; &nbsp; 쇼핑 정보 &nbsp; &gt; &nbsp;
            <span className={cancelReturnExchange_styles.web_order_delivery_navigation_current}>
              취소/반품/교환 내역
            </span>
          </p>
        </div>

        <div className={cancelReturnExchange_styles.web_order_wrapper}>
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

          {/* 웹 우측 컨텐츠들 */}
          <div className={cancelReturnExchange_styles.web_order_delivery_sections}>
            {/* 웹 등급혜택 */}
            <section className={cancelReturnExchange_styles.web_order_delivery_membership_wrapper}>
              <div className={cancelReturnExchange_styles.web_order_delivery_membership}>
                <p className={cancelReturnExchange_styles.web_order_delivery_membership_name}>
                  장유하님의
                </p>
                {/* 버튼 컴포넌트 작업 전 대체 */}
                <button className={`${styles.inquiry_button} `}>조회</button>
              </div>
              <hr className={cancelReturnExchange_styles.web_order_delivery_membership_divider} />
              <div className={cancelReturnExchange_styles.web_order_delivery_stamp}>
                <p className={cancelReturnExchange_styles.web_order_delivery_label}>스탬프</p>
                <p className={cancelReturnExchange_styles.web_order_delivery_count}>0 개</p>
              </div>
              <hr className={cancelReturnExchange_styles.web_order_delivery_membership_divider} />
              <div className={cancelReturnExchange_styles.web_order_delivery_membership_point}>
                <p className={cancelReturnExchange_styles.web_order_delivery_membership_label}>
                  통합 멤버십 포인트
                </p>
                <p
                  className={cancelReturnExchange_styles.web_order_delivery_membership_point_count}
                >
                  1,000 p
                </p>
                <p className={cancelReturnExchange_styles.web_order_delivery_membership_point_info}>
                  상품 구매 후 구매 확정 시 직접 반영 됩니다.
                </p>
              </div>
            </section>
            {/* 웹 취소/반품/교환 조회 */}
            <section className={cancelReturnExchange_styles.web_order_delivery_period_wrapper}>
              <h2 className={cancelReturnExchange_styles.web_order_delivery_period_tit}>
                취소/반품/교환 내역
              </h2>

              <div className={cancelReturnExchange_styles.web_order_delivery_period_container}>
                <div
                  className={cancelReturnExchange_styles.web_order_delivery_period_box_sm_container}
                >
                  <p className={cancelReturnExchange_styles.web_order_delivery_period_text}>
                    조회기간
                  </p>
                  <div
                    className={cancelReturnExchange_styles.web_order_delivery_period_box_sm_wrapper}
                  >
                    <button
                      className={cancelReturnExchange_styles.web_order_delivery_period_box_sm}
                    >
                      <p className={cancelReturnExchange_styles.web_order_delivery_period_text}>
                        오늘
                      </p>
                    </button>
                    <button
                      className={cancelReturnExchange_styles.web_order_delivery_period_box_sm}
                    >
                      <p className={cancelReturnExchange_styles.web_order_delivery_period_text}>
                        7일
                      </p>
                    </button>
                    <button
                      className={cancelReturnExchange_styles.web_order_delivery_period_box_sm}
                    >
                      <p className={cancelReturnExchange_styles.web_order_delivery_period_text}>
                        15일
                      </p>
                    </button>
                    <button
                      className={cancelReturnExchange_styles.web_order_delivery_period_box_sm}
                    >
                      <p className={cancelReturnExchange_styles.web_order_delivery_period_text}>
                        1개월
                      </p>
                    </button>
                    <button
                      className={cancelReturnExchange_styles.web_order_delivery_period_box_sm}
                    >
                      <p className={cancelReturnExchange_styles.web_order_delivery_period_text}>
                        3개월
                      </p>
                    </button>
                    <button
                      className={cancelReturnExchange_styles.web_order_delivery_period_box_sm}
                    >
                      <p className={cancelReturnExchange_styles.web_order_delivery_period_text}>
                        1년
                      </p>
                    </button>
                  </div>
                </div>

                <div
                  className={cancelReturnExchange_styles.web_order_delivery_period_box_lg_container}
                >
                  <div
                    className={cancelReturnExchange_styles.web_order_delivery_period_box_lg_wrapper}
                  >
                    <div className={cancelReturnExchange_styles.web_order_delivery_period_box_lg}>
                      <p
                        className={
                          cancelReturnExchange_styles.web_order_delivery_period_text_calendar
                        }
                      >
                        2025-07-01
                      </p>
                      <button
                        className={
                          cancelReturnExchange_styles.web_order_delivery_period_calendar_button
                        }
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 7H17M9 4V1M4 4V1M14 4V1M2 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V4C17 3.73478 16.8946 3.48043 16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17ZM5 10H5.01V10.01H5V10ZM9 10H9.01V10.01H9V10ZM13 10H13.01V10.01H13V10ZM5 14H5.01V14.01H5V14ZM9 14H9.01V14.01H9V14ZM13 14H13.01V14.01H13V14Z"
                            stroke="#949494"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <span
                      className={cancelReturnExchange_styles.web_order_delivery_period_text_point}
                    >
                      ~
                    </span>
                    <div className={cancelReturnExchange_styles.web_order_delivery_period_box_lg}>
                      <p
                        className={
                          cancelReturnExchange_styles.web_order_delivery_period_text_calendar
                        }
                      >
                        2025-07-21
                      </p>
                      <button
                        className={
                          cancelReturnExchange_styles.web_order_delivery_period_calendar_button
                        }
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 7H17M9 4V1M4 4V1M14 4V1M2 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V4C17 3.73478 16.8946 3.48043 16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17ZM5 10H5.01V10.01H5V10ZM9 10H9.01V10.01H9V10ZM13 10H13.01V10.01H13V10ZM5 14H5.01V14.01H5V14ZM9 14H9.01V14.01H9V14ZM13 14H13.01V14.01H13V14Z"
                            stroke="#949494"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button className={`${styles.inquiry_button} `}>조회</button>
                </div>
              </div>
            </section>

            {/* 웹 주문목록/배송조회 내역*/}
            <section className={cancelReturnExchange_styles.web_order_delivery_view_wrapper}>
              <h2 className={cancelReturnExchange_styles.web_order_delivery_view_tit}>
                주문목록/배송조회 내역 총 0 건
              </h2>
              <div className={cancelReturnExchange_styles.web_order_delivery_view_label_wrapper}>
                <p className={cancelReturnExchange_styles.web_order_delivery_view_label}>
                  날짜/주문번호
                </p>
                <p className={cancelReturnExchange_styles.web_order_delivery_view_label}>
                  상품명/옵션
                </p>
                <p className={cancelReturnExchange_styles.web_order_delivery_view_label}>
                  상품금액
                </p>
                <p className={cancelReturnExchange_styles.web_order_delivery_view_label}>
                  진행상태
                </p>
                <p className={cancelReturnExchange_styles.web_order_delivery_view_label}>접수</p>
              </div>
              <ul className={cancelReturnExchange_styles.web_order_delivery_view_list_wrapper}>
                <li className={cancelReturnExchange_styles.web_order_delivery_view_list}>
                  조회내역이 없습니다.
                </li>
              </ul>
              <hr className={cancelReturnExchange_styles.web_order_delivery_view_list_divider} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
