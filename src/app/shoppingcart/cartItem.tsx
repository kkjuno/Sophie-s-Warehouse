'use client';
import Image from 'next/image';
import { useState } from 'react';
import shopping_cart_styles from '@/styles/shoppingCart/shoppingCart.module.css';

interface CartItemProps {
  imageSrc: string;
  name: string;
  color: string;
  size: string;
  price: string;
}

export default function CartItem({ imageSrc, name, color, size, price }: CartItemProps) {
  const [count, setCount] = useState(1);

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
            <button type="button" onClick={() => setCount(count - 1)}>
              -
            </button>
            <div>
              <span>{count}</span>
            </div>
            <button type="button" onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}
