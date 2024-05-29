import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SecurityGuard",
  description: "Antivirus software for all your devices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-[100vw] !scroll-smooth ">
      <body className={inter.className}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
