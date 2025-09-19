import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/services";
import HeroBottomBar from "@/components/HeroBottomBar";
import WhyUsCompact from "@/components/WhyUsCompact";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İzmir Teknik Servis - Beyaz Eşya Servisi | Aynı Gün Hizmet",
  description: "İzmir'de beyaz eşya teknik servisi. Buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, klima servisi. Aynı gün servis, garantili işçilik, orijinal parça.",
  keywords: "İzmir teknik servis, beyaz eşya servisi, klima servisi, kombi servisi, buzdolabı servisi, çamaşır makinesi servisi, bulaşık makinesi servisi, aynı gün servis",
  openGraph: {
    title: "İzmir Teknik Servis - Beyaz Eşya Servisi",
    description: "İzmir'de beyaz eşya teknik servisi. Aynı gün servis, garantili işçilik, orijinal parça.",
    url: "https://www.izmir-teknikservis.com",
    siteName: "İzmir Teknik Servis",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://www.izmir-teknikservis.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "İzmir Teknik Servis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İzmir Teknik Servis - Beyaz Eşya Servisi",
    description: "İzmir'de beyaz eşya teknik servisi. Aynı gün servis, garantili işçilik.",
    images: ["https://www.izmir-teknikservis.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "İzmir Teknik Servis",
    image: "https://www.izmir-teknikservis.com/og-image.jpg",
    telephone: "+ 90 501 471 73 80",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İzmir",
      addressRegion: "TR-35",
      addressCountry: "TR",
    },
    areaServed: [
      "Konak", "Karşıyaka", "Bornova", "Buca", "Çiğli", "Gaziemir", 
      "Balçova", "Narlıdere", "Güzelbahçe", "Urla", "Çeşme", "Karaburun",
      "Foça", "Menemen", "Aliağa", "Bergama", "Dikili", "Kınık", "Tire",
      "Bayındır", "Torbalı", "Selçuk", "Menderes", "Seferihisar", "Kemalpaşa",
      "Ödemiş", "Beydağ", "Kiraz", "Bayraklı", "Karabağlar"
    ],
    url: "https://www.izmir-teknikservis.com",
    serviceType: [
      "Klima Servisi",
      "Kombi Servisi", 
      "Buzdolabı Servisi",
      "Çamaşır Makinesi Servisi",
      "Bulaşık Makinesi Servisi"
    ],
    description: "İzmir'de beyaz eşya teknik servisi. Buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, klima onarımı. Aynı gün servis, garantili işçilik.",
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [
      "https://wa.me/905014717380"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beyaz Eşya Servis Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Klima Servisi",
            description: "Klima bakım, onarım ve montaj hizmetleri"
          }
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Service",
            name: "Kombi Servisi",
            description: "Kombi bakım, onarım ve montaj hizmetleri"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service", 
            name: "Buzdolabı Servisi",
            description: "Buzdolabı bakım, onarım ve montaj hizmetleri"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Çamaşır Makinesi Servisi", 
            description: "Çamaşır makinesi bakım, onarım ve montaj hizmetleri"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bulaşık Makinesi Servisi",
            description: "Bulaşık makinesi bakım, onarım ve montaj hizmetleri"
          }
        }
      ]
    }
  } as const;

  return (
    <>
      <HeroSlider />
      <HeroBottomBar />
      <Services />
      <WhyUsCompact />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  );
}

