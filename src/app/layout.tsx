import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientHeader from "@/components/ClientHeader";
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
  title: "İzmir Teknik Servis - Beyaz Eşya Servisi",
  description: "İzmir'de beyaz eşya teknik servisi. Buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, klima servisi. Aynı gün servis, garantili işçilik.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "İzmir Teknik Servis - Beyaz Eşya Servisi",
    description: "İzmir'de beyaz eşya teknik servisi. Aynı gün servis, garantili işçilik.",
    images: ['/og-image.jpg'],
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
        <ClientHeader/>
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
