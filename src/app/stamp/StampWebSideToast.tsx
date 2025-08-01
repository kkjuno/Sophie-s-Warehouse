import Image from 'next/image';
import styles from '@/styles/components/button.module.css';
import stamp_page_styles from '@/styles/stamp/stamp.module.css';
import { useEffect, useState } from 'react';
import { Product } from '../types/productType';
import { productFetch } from '../fetch/product';

interface StampMobileSideProps {
  onClose: () => void;
}

export default function StampWebSideToast({ onClose }: StampMobileSideProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [runGatcha, setRunGatcha] = useState(false);

  useEffect(() => {
    if (runGatcha) return;

    async function fetchAndPickRandomProduct() {
      try {
        const res = await productFetch();
        if (res.ok && res.item.length > 0) {
          const randomIndex = Math.floor(Math.random() * res.item.length);
          setProduct(res.item[randomIndex]);
          setRunGatcha(true);
        }
      } catch (error) {
        console.error('상품 불러오기 실패:', error);
      }
    }

    fetchAndPickRandomProduct();
  }, [runGatcha]);

  console.log('랜덤 가챠', product);
  const mainImagePath = product?.mainImages[0].path;
  return (
    <div className={stamp_page_styles.web_side_toast_ui_root_header}>
      {!product ? (
        <div className={stamp_page_styles.toast_loading}>로딩 중...</div>
      ) : (
        <>
          <div className={stamp_page_styles.web_side_toast_ui_header_text}>
            <h2>
              <span className={stamp_page_styles.web_side_toast_ui_user_name}>김진섭</span>님
              축하합니다!
            </h2>
            <span>
              당신은 아래 상품에{' '}
              <span className={stamp_page_styles.web_side_toast_ui_lotto_text}>당첨</span>{' '}
              되셨습니다!
            </span>
          </div>

          <div className={stamp_page_styles.web_side_toast_ui_item_wrapper}>
            <div className={stamp_page_styles.web_side_toast_ui_confetti_wrapper}>
              <Image src="/images/stampImages/toastUI/confetti.svg" fill alt="빵빠레 이미지" />
            </div>
            <div className={stamp_page_styles.web_side_toast_ui_lotto_item}>
              <Image src={`/${mainImagePath}`} fill alt="당첨상품 이미지" />
            </div>
          </div>

          <div className={stamp_page_styles.web_side_toast_ui_item_info}>
            <div className={stamp_page_styles.web_side_toast_ui_item_section}>
              <div className={stamp_page_styles.web_side_toast_ui_item_title_wrapper}>
                <span className={stamp_page_styles.web_side_toast_ui_item_title}>상품명</span>
                <span className={stamp_page_styles.web_side_toast_ui_item_brand}>브랜드</span>
              </div>
              <div className={stamp_page_styles.web_side_toast_ui_item_info_wrapper}>
                <span className={stamp_page_styles.web_side_toast_ui_item_name}>
                  {product.name}
                </span>
                <span className={stamp_page_styles.web_side_toast_ui_item_brand_name}>
                  {product.extra.movie}
                </span>
              </div>
            </div>

            <div className={stamp_page_styles.web_side_toast_ui_button_wrapper}>
              <button className={styles.close_button} onClick={onClose}>
                닫기
              </button>
              <button className={styles.quick_link_button}>바로가기</button>
            </div>

            <div className={stamp_page_styles.web_side_toast_ui_footer_text}>
              <span>상품은 마이페이지 &gt; 혜택관리 &gt; 당첨내역에서 확인하세요!</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
