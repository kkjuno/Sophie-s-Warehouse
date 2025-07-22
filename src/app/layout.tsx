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

  const isHiddenLayout =
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/zip-code');

  const isMyPage = pathname.startsWith('/myPage'); // 마이페이지 전용 헤더

  return (
    <html>
      <body>
        {!isHiddenLayout && !isMyPage && <Header />}
        {isMyPage && <MyPageHeader />}
        {children}
        {!isHiddenLayout && <MainFooter />}
        {!isHiddenLayout && <FooterNav />}
      </body>
    </html>
  );
}
