import '@/styles/globals.css';
import footer_styles from '@/styles/components/footer.module.css';


export default function Footer() {
  return (
    <footer className={footer_styles.footer}>
      <div className={footer_styles.footer__top}>
        <div className={footer_styles.footer__notice}><span>공지사항</span></div>
        <span>[공지] 15일(월) 오전 10시 택배 배송 중단 안내</span>
      </div>
      <div className={footer_styles.footer__links}>
        <a href="#">회사소개</a>
        <span className={footer_styles.divider}>|</span>
        <a href="#">개인정보처리방침</a>
        <span className={footer_styles.divider}>|</span>
        <a href="#">이용약관</a>
        <span className={footer_styles.divider}>|</span>
        <a href="#">배송안내</a>
        <span className={footer_styles.divider}>|</span>
        <a href="#">고객센터</a>
        <span className={footer_styles.divider}>|</span>
        <a href="#">입점/제휴/광고문의</a>
        <span className={footer_styles.divider}>|</span>
        <a href="#">불법 사이트 신고 및 제보</a>
      </div>
        <div className={footer_styles.footer__company_name}><strong>Sophie&apos;s Warehouse</strong></div>
        <div className={footer_styles.footer__company}>
        <p>
          대표자 김준오 ｜ 사업자등록번호 123-45-6789 <br />
          서울 금천구 가산디지털단지 가산로 1길 78, 10층 <br />
          통신판매업신고번호 제2023-서울금천-0918호 <br />
          개인정보 보호책임자 김준오 <br />
        </p>
        </div>
        <div className={footer_styles.footer__resource}>
          <p>출처: http://www.kbrising.com/product/detail/12345/</p>
        </div>
    </footer>
  );
}
