import CartItem from '@/app/shoppingcart/cartItem';
import Summary from '@/app/shoppingcart/summary';
import shopping_cart_styles from '@/styles/shoppingCart/shoppingCart.module.css';
import check_box_styles from '@/styles/components/check-box.module.css';

export default function MobileCartView() {
  return (
    <div className={shopping_cart_styles.mobile_shopping_cart_root_header}>
      <div className={shopping_cart_styles.mobile_shopping_cart_root_section}>
        <h2 className={shopping_cart_styles.mobile_shopping_cart_header_text}>SHOPPING BAG</h2>
        <div className={shopping_cart_styles.mobile_all_check_area}>
          <span>전체선택</span>
          <div className={check_box_styles.check_box_wrapper}>
            <input type="checkbox" className={check_box_styles.check_input} />
            <label className={check_box_styles.check_box_label}>
              <svg
                width="10"
                height="6.8"
                viewBox="0 0 13 10"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.15364 7.8347L0.859644 4.5427..." fill="currentColor" />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className={shopping_cart_styles.mobile_shopping_cart_new_items_section}>
        <CartItem
          imageSrc="/images/shopping-cart-test-image/totoro-image.svg"
          name="토토로 등신대"
          color="베이지"
          size="소형"
          price="46,000원"
        />
      </div>
      <Summary viewType="mobile" />
    </div>
  );
}
