import Footer from "@/components/layout/footer";
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
    </html>
  );
}
