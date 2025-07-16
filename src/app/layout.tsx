import Footer from "@/components/layout/footer";
import FooterNav from "@/components/layout/footer-nav-bar";
import Header from "@/components/layout/header";
import "@/styles/globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header/>
        {children}
        <Footer />
        <FooterNav />
      </body>
    </html>
  );
}