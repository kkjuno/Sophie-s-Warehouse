'use client';
import header_styles from '@/styles/components/header.module.css';
import header_hamburgur_menu from '@/styles/components/headerHamburgurMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useUserStore from '@/zustand/userStore';

export default function HeaderHamburgurMenu() {
  const [Open, SetOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // 클라이언트 사이드에서만 실행
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Zustand에서 user 상태 및 resetUser 액션 가져오기
  const user = useUserStore((state) => state.user);
  const resetUser = useUserStore((state) => state.resetUser);

  // 로그아웃 함수 정의
  const handleLogout = () => {
    resetUser(); // Zustand 상태 초기화
    alert('로그아웃 되었습니다!');
  };
  console.log('유저', user);
  console.log('클라이언트 확인', isClient);
  return (
    <>
      <button
        onClick={() => SetOpen(!Open)}
        className={header_styles.header_376px_menu_icon_wrapper}
      >
        <Image src="/icons/white-menu-icon.svg" alt="메뉴 아이콘" fill />
      </button>

      {Open && (
        <>
          <div className={header_hamburgur_menu.overlay} onClick={() => SetOpen(false)}></div>
          <div className={header_hamburgur_menu.menuPanel}>
            {isClient && user ? (
              <button className={header_hamburgur_menu.menuItem} onClick={handleLogout}>
                로그아웃
              </button>
            ) : (
              <Link href="/login" className={header_hamburgur_menu.menuItem}>
                로그인
              </Link>
            )}
            <Link href="/login/signUp" className={header_hamburgur_menu.menuItem}>
              회원가입
            </Link>
          </div>
        </>
      )}
    </>
  );
}
