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
  title: "Arçelik İzmir - Arçelik Beyaz Eşya Yetkili Servisi",
  description: "İzmir'de arçelik beyaz eşya yetkili servisi. Arçelik buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın servisi. Yetkili teknik servis, orijinal yedek parça.",
  icons: {
    icon: '/arçelik-favicon.ico',
    shortcut: '/arçelik-favicon.ico',
    apple: '/arçelik-apple-touch-icon.png',
  },
  openGraph: {
    title: "Arçelik İzmir - Arçelik Beyaz Eşya Yetkili Servisi",
    description: "İzmir'de arçelik beyaz eşya yetkili servisi. Orijinal yedek parça, yetkili teknik servis.",
    images: ['/arçelik-og-image.jpg'],
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