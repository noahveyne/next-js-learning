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
  title: "Bosch İzmir - Bosch Beyaz Eşya Yetkili Servisi",
  description: "İzmir'de bosch beyaz eşya yetkili servisi. Bosch buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın servisi. Yetkili teknik servis, orijinal yedek parça.",
  icons: {
    icon: '/bosch-favicon.ico',
    shortcut: '/bosch-favicon.ico',
    apple: '/bosch-apple-touch-icon.png',
  },
  openGraph: {
    title: "Bosch İzmir - Bosch Beyaz Eşya Yetkili Servisi",
    description: "İzmir'de bosch beyaz eşya yetkili servisi. Orijinal yedek parça, yetkili teknik servis.",
    images: ['/bosch-og-image.jpg'],
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