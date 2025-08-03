'use client';
import shopping_cart_styles from '@/styles/shoppingCart/shoppingCart.module.css';
import CartItem from '@/app/shoppingcart/cartItem';
import Summary from '@/app/shoppingcart/summary';
import { useCartStore } from '@/zustand/userCartStore';

export default function WebCartView() {
  const items = useCartStore((state) => state.items);

  return (
    <div className={shopping_cart_styles.web_shopping_cart_root_header}>
      <div className={shopping_cart_styles.web_shopping_cart_section}>
        <h2>SHOPPING BAG</h2>
        <div className={shopping_cart_styles.web_side_bar_layout}>
          {/* 장바구니 상품 리스트 */}
          <div className={shopping_cart_styles.web_item_list_section}>
            {items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                imageSrc={item.imageSrc}
                name={item.name}
                color={item.color}
                size={item.size}
              />
            ))}
          </div>

          {/* 영수증 요약 */}
          <div className={shopping_cart_styles.web_summary}>
            <Summary viewType="web" />
          </div>
        </div>
      </div>
    </div>
  );
}
