import type { Metadata } from "next";
import "../styles/global.css";
import 'swiper/css';


export const metadata: Metadata = {
  title: "GameTable",
  description: "Dokun, oyna!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-white text-black">
      
        <main>{children}</main>
      </body>
    </html>
  );
}