import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/modules/Footer";
import NavLarge from "@/modules/NavBar/NavLarge";
import Navigation from "@/modules/NavBar/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nbg construction",
  description: "Nbg construction provides home and building maintaince and renovations services in brisbane,Queensland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation/>
        <NavLarge/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
