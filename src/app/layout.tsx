'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/layout/footer';
import FooterNav from '@/components/layout/footer-nav-bar';
import React from 'react';
import '@/styles/globals.css';
import Button from '@/components/common/button';
import Header from '@/components/layout/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isHiddenLayout = pathname.startsWith('/login') || pathname.startsWith('/signup');

  return (
    <html>
      <body>
        {!isHiddenLayout && <Header />}
        {children}
        {!isHiddenLayout && <Footer />}
        {!isHiddenLayout && <FooterNav />}
      </body>
    </html>
  );
}
