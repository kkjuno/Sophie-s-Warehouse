'use client';

import { usePathname } from 'next/navigation';
import FooterNav from '@/components/layout/footerNavBar';
import '@/styles/globals.css';
import Header from '@/components/layout/header';
import MyPageHeader from '@/components/layout/myPageHeader';
import MainFooter from '@/components/layout/mainFooter';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // pathname이 null 일경우 예외처리
  if (!pathname) return null;
  const isHiddenLayout =
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/zip-code') ||
    pathname.startsWith('/myPage/authCheck') ||
    pathname.startsWith('/myPage/marketingAgreement');
  // mypage에서 헤더 필요 없는 부분에 || pathname.startsWith("경로명") 하면 헤더출력 X
  const hideMyPageHeader =
    pathname.startsWith('/myPage/authCheck') || pathname.startsWith('/myPage/marketingAgreement');
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
