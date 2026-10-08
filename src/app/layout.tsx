import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Marquee from "./Components/Marquee";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
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
      className={`${hindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>
          <Header />
          <Marquee />
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
