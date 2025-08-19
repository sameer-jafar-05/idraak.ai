import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/common/Header"; // ✅ added

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idraak AI",
  description: "Learn AI the modern way with Idraak.AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />   {/* ✅ Global Header */}
        <main>{children}</main> {/* ✅ Page content */}
      </body>
    </html>
  );
}