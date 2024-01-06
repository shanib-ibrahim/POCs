import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "A Simple Todo App for learning next.js build by shanib ibrahim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto mt-4 text-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
