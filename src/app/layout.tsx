import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Airdocs Global - Customer Communications Management",
  description: "Modern CCM SaaS platform for clever correspondence, agreements, letters, delivery, SMS, and cloud solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable} ${dmSans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
