'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useUserStore from '@/zustand/userStore';
import stampStyles from '@/styles/stamp/stamp.module.css';
import StampMobileToast from './stampMobileToast';

const STAMP_IMAGES = [
  'firstStamp.svg',
  'secondStamp.svg',
  'thirdStamp.svg',
  'fourthStamp.svg',
  'fifthStamp.svg',
  'sixthStamp.svg',
  'seventhStamp.svg',
  'eighthStamp.svg',
];

const STAMP_POSITIONS = [
  { top: '31%', left: '50.5%' },
  { top: '47%', left: '79%' },
  { top: '50%', left: '50%' },
  { top: '58%', left: '21.5%' },
  { top: '68%', left: '50.5%' },
  { top: '72%', left: '78%' },
  { top: '86%', left: '50%' },
  { top: '76%', left: '21%' },
];

const MAX_STAMP_COUNT = STAMP_IMAGES.length;
const STAMP_REQUIRED_FOR_GACHA = 8;

export default function StampMobileBoard() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const stampCount = user?.extra?.stamp ?? 0;
  const [animateIndex, setAnimateIndex] = useState<number | null>(null);
  const [openToast, setOpenToast] = useState(false);

  const safeCount = Math.min(stampCount, MAX_STAMP_COUNT);

  // 새로운 도장에 애니메이션 부여
  useEffect(() => {
    const prev = Number(localStorage?.getItem('prevStampCount') ?? '0');
    if (stampCount > prev) {
      const newIndex = stampCount - 1;
      setTimeout(() => {
        setAnimateIndex(newIndex);
      }, 100); // 자연스럽게 표시되도록 지연
      localStorage?.setItem('prevStampCount', String(stampCount));
    }
  }, [stampCount]);

  // 가챠 실행
  const handleGacha = async () => {
    if (!user) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (stampCount < STAMP_REQUIRED_FOR_GACHA) {
      alert(`스탬프 ${STAMP_REQUIRED_FOR_GACHA}개를 모두 모아야 뽑기 할 수 있습니다.`);
      return;
    }

    const newStamp = stampCount - STAMP_REQUIRED_FOR_GACHA;

    try {
      const res = await fetch(`https://fesp-api.koyeb.app/market/users/${user._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token?.accessToken}`,
          'Client-Id': 'febc13-final07-emjf',
        },
        body: JSON.stringify({ extra: { stamp: newStamp } }),
      });

      const data = await res.json();
      if (res.ok) {
        setUser({ ...user, extra: { ...user.extra, stamp: newStamp } });
        setOpenToast(true);
      } else {
        console.error('가챠 실패:', data?.message);
      }
    } catch (err) {
      console.error('가챠 요청 오류:', err);
    }
  };

  // 도장 렌더링
  const renderStamps = () => {
    const indicesToRender = new Set<number>();

    for (let i = 0; i < safeCount; i++) {
      indicesToRender.add(i);
    }

    if (animateIndex !== null && animateIndex < MAX_STAMP_COUNT) {
      indicesToRender.add(animateIndex);
    }

    return Array.from(indicesToRender).map((i) => {
      const img = STAMP_IMAGES[i];
      const pos = STAMP_POSITIONS[i];
      if (!img || !pos) return null;

      const isAnimated = i === animateIndex;

      return (
        <div
          key={i}
          className={stampStyles.stamp_wrapper}
          style={{
            top: pos.top,
            left: pos.left,
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
          }}
        >
          <div className={`${stampStyles.stamp_image_wrapper} ${stampStyles.stamp_animate}`}>
            <Image
              src={`/images/stampImages/stamp/${img}`}
              alt={`스탬프 ${i + 1}`}
              fill
              priority={isAnimated}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {/* 스탬프 보드 */}
      <div className={stampStyles.mobile_stamp_image_wrapper} style={{ position: 'relative' }}>
        <Image src="/images/stampImages/stamp-image.svg" alt="스탬프 보드 배경" fill />
        {renderStamps()}
      </div>

      {/* 버튼 영역 */}
      <div className={stampStyles.mobile_stamp_link_image_wrapper}>
        {/* 스탬프 모으기 */}
        <Link href="/" className={stampStyles.mobile_stamp_more_image_wrapper}>
          <Image src="/images/stampImages/stamp-more-image.svg" alt="스탬프 더 모으기" fill />
          <div className={stampStyles.mobile_stamp_image_overlay}></div>
          <div className={stampStyles.mobile_stamp_guide_text}>
            <span className={stampStyles.mobile_stamp_guide_text_title}>
              스탬프가 부족하신가요?
            </span>
            <span className={stampStyles.mobile_stamp_guide_text_sub_title}>
              지금 바로 스탬프 모으러 가기 &gt;
            </span>
          </div>
        </Link>

        {/* 가챠 버튼 */}
        <div
          role="button"
          tabIndex={0}
          onClick={handleGacha}
          className={stampStyles.mobile_stamp_gacha_image_wrapper}
        >
          <Image
            src="/images/stampImages/stamp-gacha-image.svg"
            width={166}
            height={124}
            alt="스탬프 가챠"
          />
          <div className={stampStyles.mobile_stamp_image_overlay}></div>
          <div className={stampStyles.mobile_stamp_guide_text}>
            <span className={stampStyles.mobile_stamp_guide_text_title}>
              스탬프를 다 모으셨나요?
            </span>
            <span className={stampStyles.mobile_stamp_guide_text_sub_title}>
              지금 바로 뽑기 가기 &gt;
            </span>
          </div>
        </div>

        {/* 가챠 결과 토스트 */}
        {openToast && <StampMobileToast onClose={() => setOpenToast(false)} />}
      </div>
    </>
  );
}
