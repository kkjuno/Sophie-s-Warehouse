import Footer from "@/components/layout/footer";
import FooterNav from "@/components/layout/footer-nav-bar";
import "@/styles/globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
      <Footer/>
      <FooterNav/>
    </html>
  );
}
