'use client';
import Image from 'next/image';
import styles from '@/styles/components/button.module.css';
import stamp_page_styles from '@/styles/stamp/stamp.module.css';
import { useEffect, useState } from 'react';
import { productFetch } from '@/app/fetch/product';
import { Product } from '@/app/types/productType';
import useUserStore from '@/zustand/userStore';

interface StampMobileWebProps {
  onClose: () => void;
}

export default function StampWebSideToast({ onClose }: StampMobileWebProps) {
  const [rollingProducts, setRollingProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRolling, setIsRolling] = useState(true);
  const [winner, setWinner] = useState<Product | null>(null);

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const stampCount = user?.extra?.stamp ?? 0;

  const handleSaveWinner = async () => {
    if (!winner || !user || !user.token?.accessToken) return;

    const body = {
      type: 'lottery',
      title: winner.name,
      content: winner.extra.movie,
      views: winner.price,
      user: {
        _id: user._id,
        name: user.name,
        image: user.image,
      },
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch('https://fesp-api.koyeb.app/market/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token.accessToken}`,
          'Client-id': 'febc13-final07-emjf',
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        console.log('당첨 내역 저장 성공');

        const patchRes = await fetch(`https://fesp-api.koyeb.app/market/users/${user._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token.accessToken}`,
            'Client-Id': 'febc13-final07-emjf',
          },
          body: JSON.stringify({ extra: { stamp: newStampCount } }),
        });

        if (patchRes.ok) {
          setUser({ ...user, extra: { ...user.extra, stamp: newStampCount } });
        }

        window.location.href = '/myPage/rewards';
      } else {
        console.error('저장 실패', await res.text());
      }
    } catch (err) {
      console.error('에러 발생:', err);
    }
  };

  useEffect(() => {
    if (stampCount < 8) return; //

    async function startGatcha() {
      const res = await productFetch();
      if (res.ok && res.item.length > 0) {
        const shuffled = res.item.sort(() => 0.5 - Math.random());
        const previewItems = shuffled.slice(0, 10);
        setRollingProducts(previewItems);

        let index = 0;
        const interval = setInterval(() => {
          setCurrentIndex(index);
          index++;

          if (index >= previewItems.length) {
            clearInterval(interval);
            setWinner(previewItems[previewItems.length - 1]);
            setIsRolling(false);
          }
        }, 400);
      }
    }

    startGatcha();
  }, [stampCount]);

  const newStampCount = stampCount - 8;

  const handleClose = async () => {
    if (!user || !user.token?.accessToken) return;

    try {
      const res = await fetch(`https://fesp-api.koyeb.app/market/users/${user._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token.accessToken}`,
          'Client-Id': 'febc13-final07-emjf',
        },
        body: JSON.stringify({ extra: { stamp: newStampCount } }),
      });

      if (res.ok) {
        setUser({ ...user, extra: { ...user.extra, stamp: newStampCount } });
      }
    } catch (err) {
      console.error('스탬프 초기화 실패:', err);
    }

    onClose();
  };

  const currentProduct = rollingProducts[currentIndex];

  if (stampCount < 8) return null;

  return (
    <div className={stamp_page_styles.web_side_toast_ui_root_header}>
      <div className={stamp_page_styles.web_side_toast_ui_header_text}>
        <h2>
          <span className={stamp_page_styles.web_side_toast_ui_user_name}>{user?.name}</span>님
          축하합니다!
        </h2>
        <span>
          당신은 아래 상품에{' '}
          <span className={stamp_page_styles.web_side_toast_ui_lotto_text}>당첨</span> 되셨습니다!
        </span>
      </div>

      <div className={stamp_page_styles.web_side_toast_ui_item_wrapper}>
        {!isRolling && winner && (
          <div className={stamp_page_styles.web_side_toast_ui_confetti_wrapper}>
            <Image src="/images/stampImages/toastUI/confetti.svg" fill alt="빵빠레 이미지" />
          </div>
        )}
        <div className={stamp_page_styles.web_side_toast_ui_lotto_item}>
          <Image
            src={`/${(isRolling ? currentProduct : winner)?.mainImages[0].path}`}
            fill
            alt="상품 이미지"
            sizes="140px"
          />
        </div>
      </div>

      {!isRolling && winner && (
        <div className={stamp_page_styles.web_side_toast_ui_item_info}>
          <div className={stamp_page_styles.web_side_toast_ui_item_section}>
            <div className={stamp_page_styles.web_side_toast_ui_item_title_wrapper}>
              <span className={stamp_page_styles.web_side_toast_ui_item_title}>상품명</span>
              <span className={stamp_page_styles.web_side_toast_ui_item_brand}>브랜드</span>
            </div>
            <div className={stamp_page_styles.web_side_toast_ui_item_info_wrapper}>
              <span className={stamp_page_styles.web_side_toast_ui_item_name}>{winner.name}</span>
              <span className={stamp_page_styles.web_side_toast_ui_item_brand_name}>
                {winner.extra.movie}
              </span>
            </div>
          </div>

          <div className={stamp_page_styles.web_side_toast_ui_button_wrapper}>
            <button className={styles.close_button} onClick={handleClose}>
              닫기
            </button>
            <button className={styles.quick_link_button} onClick={handleSaveWinner}>
              바로가기
            </button>
          </div>

          <div className={stamp_page_styles.web_side_toast_ui_footer_text}>
            <span>상품은 마이페이지 &gt; 혜택관리 &gt; 당첨내역에서 확인하세요!</span>
          </div>
        </div>
      )}
    </div>
  );
}
