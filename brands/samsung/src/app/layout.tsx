import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingCTA from "@/components/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samsung İzmir - Samsung Beyaz Eşya Yetkili Servisi",
  description: "İzmir'de samsung beyaz eşya yetkili servisi. Samsung buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın servisi. Yetkili teknik servis, orijinal yedek parça.",
  icons: {
    icon: '/samsung-favicon.ico',
    shortcut: '/samsung-favicon.ico',
    apple: '/samsung-apple-touch-icon.png',
  },
  openGraph: {
    title: "Samsung İzmir - Samsung Beyaz Eşya Yetkili Servisi",
    description: "İzmir'de samsung beyaz eşya yetkili servisi. Orijinal yedek parça, yetkili teknik servis.",
    images: ['/samsung-og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}