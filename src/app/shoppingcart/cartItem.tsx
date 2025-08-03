'use client';

import Image from 'next/image';
import shopping_cart_styles from '@/styles/shoppingCart/shoppingCart.module.css';
import { useCartStore } from '@/zustand/userCartStore';

interface CartItemProps {
  id: string;
  imageSrc: string;
  name: string;
  color: string;
  size: string;
}

export default function CartItem({ id, imageSrc, name, color, size }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const item = useCartStore((state) => state.items.find((i) => i.id === id));

  if (!item) return null;

  const { quantity, price } = item;

  const handleDecrease = () => {
    if (quantity <= 1) {
      removeItem(id);
    } else {
      updateQuantity(id, -1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(id, 1);
  };

  const handleRemove = () => {
    removeItem(id);
  };

  return (
    <div className={shopping_cart_styles.mobile_shopping_cart_item}>
      <div className={shopping_cart_styles.mobile_shopping_cart_item_image_wrapper}>
        <Image src={imageSrc} fill alt={`${name} 이미지`} />
      </div>
      <div className={shopping_cart_styles.mobile_shopping_cart_item_info}>
        <div className={shopping_cart_styles.mobile_shopping_cart_item_name_close_button_wrapper}>
          <span>{name}</span>
          <button
            type="button"
            className={shopping_cart_styles.mobile_shopping_cart_close_icon_wrapper}
            onClick={handleRemove}
          >
            <Image src="/icons/close-icon.svg" width={12} height={12} alt="닫기 아이콘" />
          </button>
        </div>
        <div className={shopping_cart_styles.mobile_shopping_cart_color_size_wrapper}>
          <div className={shopping_cart_styles.mobile_shopping_cart_item_color}>
            <span className={shopping_cart_styles.mobile_shopping_cart_item_title}>색상 :</span>
            <span>{color}</span>
          </div>
          <div className={shopping_cart_styles.mobile_shopping_cart_item_size}>
            <span className={shopping_cart_styles.mobile_shopping_cart_item_title}>사이즈 :</span>
            <span>{size}</span>
          </div>
        </div>
        <div className={shopping_cart_styles.mobile_shopping_cart_item_count_price_wrapper}>
          <div className={shopping_cart_styles.mobile_shopping_cart_item_count_wrapper}>
            <button type="button" onClick={handleDecrease}>
              -
            </button>
            <div>
              <span>{quantity}</span>
            </div>
            <button type="button" onClick={handleIncrease}>
              +
            </button>
          </div>
          <span>{(price * quantity).toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
}
