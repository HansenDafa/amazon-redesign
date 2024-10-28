import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import TopHeader from "@/components/shared/header/TopHeader";
import Footer from "@/components/shared/footer/Footer";
import BottomFooter from "@/components/shared/footer/BottomFooter";

export const metadata = {
  title: "Amazon - Hansen Dafa",
  description: "Amazon Website Redesign by Hansen Dafa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black text-black font-inter overflow-x-hidden `}>
        <TopHeader />
        <Header />
        {children}
        <Footer />
        <BottomFooter />
      </body>
    </html>
  );
}