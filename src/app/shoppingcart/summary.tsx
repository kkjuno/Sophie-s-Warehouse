import styles from '@/styles/components/button.module.css';
import shopping_cart_styles from '@/styles/shoppingCart/shoppingCart.module.css';

export default function Summary({ viewType }: { viewType: 'mobile' | 'web' }) {
  const isMobile = viewType === 'mobile';

  return (
    <div
      className={
        isMobile
          ? shopping_cart_styles.mobile_shopping_cart_recipe_section
          : shopping_cart_styles.web_shopping_cart_recipe_section
      }
    >
      <div
        className={
          isMobile
            ? shopping_cart_styles.mobile_shopping_cart_recipe_text_wrapper
            : shopping_cart_styles.web_shopping_cart_recipe_text_wrapper
        }
      >
        <span>SUMMARY</span>
      </div>
      <div
        className={
          isMobile
            ? shopping_cart_styles.mobile_shopping_cart_recipe_buy_wrapper
            : shopping_cart_styles.web_shopping_cart_recipe_buy_wrapper
        }
      >
        <span>구매내역</span>
      </div>
      <div
        className={
          isMobile
            ? shopping_cart_styles.mobile_shopping_cart_recipe_new_item_wrapper
            : shopping_cart_styles.web_shopping_cart_recipe_new_item_wrapper
        }
      >
        <div
          className={
            isMobile
              ? shopping_cart_styles.mobile_shopping_cart_recipe_item_title_wrapper
              : shopping_cart_styles.web_shopping_cart_recipe_item_title_wrapper
          }
        >
          <span>상품명</span>
          <span>상품 가격</span>
        </div>
        <div
          className={
            isMobile
              ? shopping_cart_styles.mobile_shopping_cart_recipe_item_info_wrapper
              : shopping_cart_styles.web_shopping_cart_recipe_item_info_wrapper
          }
        >
          <span>토토로 등신대</span>
          <span>46,000 원</span>
        </div>
      </div>
      <div
        className={
          isMobile
            ? shopping_cart_styles.mobile_shopping_cart_recipe_total_price_wrapper
            : shopping_cart_styles.web_shopping_cart_recipe_total_price_wrapper
        }
      >
        <span>총 가격</span>
        <span>46,000 원</span>
      </div>
      <div
        className={
          isMobile
            ? shopping_cart_styles.mobile_shopping_cart_buy_button_wrapper
            : shopping_cart_styles.web_shopping_cart_buy_button_wrapper
        }
      >
        <button className={styles.payment_button}>결제하기</button>
      </div>
    </div>
  );
}
