'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/layout/footer';
import FooterNav from '@/components/layout/footer-nav-bar';
import React, { useEffect, useState } from 'react';
import '@/styles/globals.css';
import Header from '@/components/layout/header';
import MyPageMobileHeader from '@/components/layout/myPageMobileHeader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  const isHiddenLayout = pathname.startsWith('/login') || pathname.startsWith('/signup');
  const isMyPage = pathname.startsWith('/myPage'); // 마이페이지 전용 헤더

  useEffect(() => {
    // 마이페이지와 로그인일때만 전용 헤더를 출력하기 위한 코드
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480); // 현재 사용자의 너비 값 판단
    };
    handleResize(); // 최초 실행
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // 마운트 종료시 삭제
  }, []);

  return (
    <html>
      <body>
        {!isHiddenLayout && !isMyPage && <Header />}
        {isMyPage && isMobile && <MyPageMobileHeader />}
        {children}
        {!isHiddenLayout && <Footer />}
        {!isHiddenLayout && <FooterNav />}
      </body>
    </html>
  );
}
