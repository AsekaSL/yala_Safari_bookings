import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yala Safari Bookings - Unveiling the Wild Heart of Sri Lanka",
  description: "Your Ultimate Safari & Wildlife Guide to Yala National Park.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${spaceGrotesk.variable} ${notoSans.variable} antialiased font-body text-[#161413]`}
      >
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
