import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ingite Dashboard - Mock Beta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
