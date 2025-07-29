'use client';
import header_styles from '@/styles/components/header.module.css';
import header_hamburgur_menu from '@/styles/components/headerHamburgurMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HeaderHamburgurMenu() {
  const [Open, SetOpen] = useState(false);

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
            <Link href="/login" className={header_hamburgur_menu.menuItem}>
              로그인
            </Link>
            <Link href="/login/signUp" className={header_hamburgur_menu.menuItem}>
              회원가입
            </Link>
          </div>
        </>
      )}
    </>
  );
}
