import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bengali",
});

export const metadata: Metadata = {
  title: "Complete IELTS Course in Bangladesh - Munzereen Shahid [2025]",
  description:
    "IELTS-এর সেরা প্রস্তুতি নিতে আজই জয়েন করুন Complete IELTS Course-টিতে, যেখানে থাকছে দেশসেরা IELTS ইন্সট্রাক্টরের গাইডলাইন, Mock Test ও প্রিমিয়াম হার্ডকপি বই।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansBengali.variable}`}>
        {children}
      </body>
    </html>
  );
}
