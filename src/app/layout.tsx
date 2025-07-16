import Footer from '@/components/layout/footer';
import FooterNav from '@/components/layout/footer-nav-bar';
import React from 'react';
import '@/styles/globals.css';
import Button from '@/components/common/button';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
        <Footer />
        <FooterNav />
      </body>
    </html>
  );
}
