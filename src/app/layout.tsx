import type { Metadata } from "next";
import { Hind_Siliguri, Noto_Sans_Bengali} from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Marquee from "./Components/Marquee";
import Footer from "./Components/Footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-sans-bengali",
  display: "swap",
});


export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাজার দর অ্যাপ্লিকেশন",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${hindSiliguri.className} ${notoSansBengali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f0f5f0]">
        <Header />
        <Marquee />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
