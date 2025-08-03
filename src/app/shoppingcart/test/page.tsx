'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/zustand/userCartStore';
import WebCartView from '@/app/shoppingcart/webCartView';
import MobileCartView from '@/app/shoppingcart/mobileCartView'; // 모바일 컴포넌트도 필요

// 480px 이하이면 모바일로 판단하는 훅
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    updateView(); // 첫 렌더 시 체크
    window.addEventListener('resize', updateView);

    return () => window.removeEventListener('resize', updateView);
  }, []);

  return isMobile;
}

export default function TestPage() {
  const addItem = useCartStore((state) => state.addItem);
  const isMobile = useIsMobile();

  useEffect(() => {
    addItem({
      id: 'test-1',
      name: '토토로 인형',
      color: '베이지',
      size: '소형',
      price: 46000,
      quantity: 1,
      imageSrc: '/images/shopping-cart-test-image/totoro-image.svg',
    });

    addItem({
      id: 'test-2',
      name: '키키 배달가방',
      color: '블랙',
      size: '중형',
      price: 38000,
      quantity: 2,
      imageSrc: '/images/shopping-cart-test-image/totoro-image.svg',
    });
  }, [addItem]);

  return isMobile ? <MobileCartView /> : <WebCartView />;
}
