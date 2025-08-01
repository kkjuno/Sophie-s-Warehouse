'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import shopping_cart_styles from '@/styles/shoppingCart/shoppingCart.module.css';

interface CartItemProps {
  imageSrc: string;
  name: string;
  color: string;
  size: string;
  price: string;
  onPriceChange?: (delta: number) => void;
}

export default function CartItem({
  imageSrc,
  name,
  color,
  size,
  price,
  onPriceChange,
}: CartItemProps) {
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(true);
  // 문자열의 가격을 숫자로 변경
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    // 처음 마운트될 때 가격 추가
    onPriceChange?.(numericPrice);
    return () => {
      // 언마운트 시 가격 제거
      onPriceChange?.(-numericPrice * count);
    };
  }, []);
  // 0이 되면 상품이 보이지 않
  const decreaseCount = () => {
    const newCount = count - 1;
    if (newCount <= 0) {
      onPriceChange?.(-numericPrice * count);
      setVisible(false);
    } else {
      setCount(newCount);
      onPriceChange?.(-numericPrice);
    }
  };
  // 증가 함수
  const increaseCount = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      onPriceChange?.(numericPrice);
      return newCount;
    });
  };

  const handleRemove = () => {
    onPriceChange?.(-numericPrice * count);
    setVisible(false);
  };

  if (!visible) return null;

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
            <button type="button" onClick={decreaseCount}>
              -
            </button>
            <div>
              <span>{count}</span>
            </div>
            <button type="button" onClick={increaseCount}>
              +
            </button>
          </div>
          <span>{(numericPrice * count).toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
}
