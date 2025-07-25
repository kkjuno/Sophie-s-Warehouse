'use client';

import WebBreadcrumb from './webBreadcrumb';
import WebDateFilter from './webDateFilter';
import orderDelivery_styles from '@/styles/myPage/orderDelivery.module.css';
import Link from 'next/link';

export default function WebOrderDelivery() {
  return (
    <div className={orderDelivery_styles.web_order_delivery}>
      {/* 현재 위치 */}
      <WebBreadcrumb />

      <div className={orderDelivery_styles.web_order_wrapper}>
        <aside className={orderDelivery_styles.web_order_delivery_aside}>
          <hr className={orderDelivery_styles.web_order_delivery_aside_divider_top} />

          <h1 className={orderDelivery_styles.web_order_delivery_list}>마이페이지</h1>

          <h2 className={orderDelivery_styles.web_order_delivery_list_tit}>쇼핑 정보</h2>
          <ul className={orderDelivery_styles.web_order_delivery_list_text}>
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

          <hr className={orderDelivery_styles.web_order_delivery_aside_divider} />

          <h2 className={orderDelivery_styles.web_order_delivery_list_tit}>혜택 관리</h2>
          <ul className={orderDelivery_styles.web_order_delivery_list_text}>
            <li>
              <Link href="#">스탬프</Link>
            </li>
            <li>
              <Link href="#">당첨 내역</Link>
            </li>
          </ul>

          <hr className={orderDelivery_styles.web_order_delivery_aside_divider} />

          <h2 className={orderDelivery_styles.web_order_delivery_list_tit}>회원 정보</h2>
          <ul className={orderDelivery_styles.web_order_delivery_list_text}>
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

        {/* 우측 콘텐츠 */}
        <div className={orderDelivery_styles.web_order_delivery_sections}>
          {/* (등급혜택, 스탬프, 포인트) */}
          <section className={orderDelivery_styles.web_order_delivery_membership_wrapper}>
            <div className={orderDelivery_styles.web_order_delivery_membership}>
              <p className={orderDelivery_styles.web_order_delivery_membership_name}>
                장유하님의
                <br />
                등급혜택
              </p>
            </div>
            <hr className={orderDelivery_styles.web_order_delivery_membership_divider} />
            <div className={orderDelivery_styles.web_order_delivery_stamp}>
              <p className={orderDelivery_styles.web_order_delivery_label}>스탬프</p>
              <p className={orderDelivery_styles.web_order_delivery_count}>0 개</p>
            </div>
            <hr className={orderDelivery_styles.web_order_delivery_membership_divider} />
            <div className={orderDelivery_styles.web_order_delivery_membership_point}>
              <p className={orderDelivery_styles.web_order_delivery_membership_label}>
                통합 멤버십 포인트
              </p>
              <p className={orderDelivery_styles.web_order_delivery_membership_point_count}>
                1,000 p
              </p>
              <p className={orderDelivery_styles.web_order_delivery_membership_point_info}>
                상품 구매 후 구매 확정 시 직접 반영 됩니다.
              </p>
            </div>
          </section>

          {/* 조회기간 선택 */}
          <WebDateFilter />

          {/* 주문/배송 조회 리스트 */}
          <section className={orderDelivery_styles.web_order_delivery_view_wrapper}>
            <h2 className={orderDelivery_styles.web_order_delivery_view_tit}>
              주문목록/배송조회 내역 총 0 건
            </h2>

            <div className={orderDelivery_styles.web_order_delivery_view_label_wrapper}>
              <p className={orderDelivery_styles.web_order_delivery_view_label}>날짜/주문번호</p>
              <p className={orderDelivery_styles.web_order_delivery_view_label}>상품명/옵션</p>
              <p className={orderDelivery_styles.web_order_delivery_view_label}>상품금액</p>
              <p className={orderDelivery_styles.web_order_delivery_view_label}>진행상태</p>
              <p className={orderDelivery_styles.web_order_delivery_view_label}>접수</p>
            </div>

            <ul className={orderDelivery_styles.web_order_delivery_view_list_wrapper}>
              <li className={orderDelivery_styles.web_order_delivery_view_list}>
                조회내역이 없습니다.
              </li>
            </ul>

            <hr className={orderDelivery_styles.web_order_delivery_view_list_divider} />
          </section>
        </div>
      </div>
    </div>
  );
}
