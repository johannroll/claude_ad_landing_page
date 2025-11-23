import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
