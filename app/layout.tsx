import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uğur Obuz",
  description: "Welcome to my personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter" className="!scroll-smooth relative">
      <body className={`${inter.className}`}>
        <ActiveSectionContextProvider>
          <Navbar/>
          {children}
          <Footer/>
          <Toaster position="bottom-center"/>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
