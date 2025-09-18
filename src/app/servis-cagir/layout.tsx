import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servis Çağır - İzmir Teknik Servis",
  description: "İzmir Teknik Servis ile iletişime geçin. Aynı gün servis, 7/24 hizmet. Telefon ve WhatsApp ile hızlı iletişim.",
  keywords: "izmir teknik servis, servis çağır, telefon, whatsapp, aynı gün servis",
};

export default function ServisCagirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
