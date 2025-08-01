import CartItem from '@/app/shoppingcart/cartItem';
import Summary from '@/app/shoppingcart/summary';
import shopping_cart_styles from '@/styles/shoppingCart/shoppingCart.module.css';

export default function WebCartView() {
  return (
    <div className={shopping_cart_styles.web_shopping_cart_root_header}>
      <div className={shopping_cart_styles.web_shopping_cart_section}>
        <h2>SHOPPING BAG</h2>
        <div className={shopping_cart_styles.web_side_bar_layout}>
          <div className={shopping_cart_styles.web_item_list_section}>
            <CartItem
              imageSrc="/images/shopping-cart-test-image/totoro-image.svg"
              name="토토로 등신대"
              color="베이지"
              size="소형"
              price="46,000 원"
            />
          </div>
          <Summary viewType="web" />
        </div>
      </div>
    </div>
  );
}
