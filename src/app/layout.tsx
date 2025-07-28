'use client';

import { usePathname } from 'next/navigation';
import FooterNav from '@/components/layout/footerNavBar';
import '@/styles/globals.css';
import Header from '@/components/layout/header';
import MyPageHeader from '@/components/layout/myPageHeader';
import MainFooter from '@/components/layout/mainFooter';
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const [isWebView, setIsWebView] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsWebView(window.innerWidth >= 480); // 웹뷰 기준
    };

    handleResize(); // 최초 체크
    setIsMounted(true);
    window.addEventListener('resize', handleResize); // 창 크기 변화 감지

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // pathname이 null 일경우 예외처리
  if (!pathname) return null;
  const isHiddenLayout =
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/zip-code') ||
    pathname.startsWith('/myPage/authCheck') ||
    (pathname.startsWith('/myPage/marketingAgreement') && !isWebView) ||
    pathname.startsWith('/myPage/accountDelete');
  // mypage에서 헤더 필요 없는 부분에 || pathname.startsWith("경로명") 하면 헤더출력 X
  const hideMyPageHeader =
    isMounted &&
    (pathname.startsWith('/myPage/authCheck') ||
      (pathname.startsWith('/myPage/marketingAgreement') && !isWebView) ||
      pathname.startsWith('/myPage/accountDelete'));
  const isMyPage = pathname.startsWith('/myPage'); // 마이페이지 전용 헤더

  return (
    <html>
      <body>
        {!isHiddenLayout && !isMyPage && <Header />}
        {isMyPage && !hideMyPageHeader && <MyPageHeader />}
        {children}
        {!isHiddenLayout && <MainFooter />}
        {!isHiddenLayout && <FooterNav />}
      </body>
    </html>
  );
}
